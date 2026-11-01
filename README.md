# NG_MACROS · CNC Precision Studio

Aplicación web local para **configurar, validar, simular y generar código G** de 11 macros
Fanuc **Custom Macro B** orientadas a taladrado, cajeras y ranuras.

No requiere servidor, cuenta, clave ni conexión a Internet: todo se ejecuta en el navegador
y los assets están incluidos en el repositorio.

**Versión:** 4.4.0 · **Licencia:** MIT

---

## Características

- **11 macros** con parámetros validados y alarmas `#3000` documentadas.
- **Salida G-code en dos modos**
  - `G65`: llamada al subprograma, recomendada para producción.
  - `Macro expandida`: el cuerpo completo se inserta como programa principal.
- **Vista previa CAD 2D** de la geometría y la trayectoria del centro de herramienta.
- **Simulación 3D** con Three.js (local) y alternativa 2D sin WebGL.
- **Persistencia local** de parámetros por macro y del almacén de herramientas.
- **Hoja de taller** imprimible con herramienta, husillo, avance y tiempo estimado.
- **Funciona sin conexión** mediante service worker y assets locales.
- **Sin telemetría ni DRM**: modo local abierto, información de licencia en un modal.

## Inicio rápido

### Opción 1: abrir el archivo

Abre `index.html` con un navegador moderno. La aplicación funciona con `file://`, aunque el
service worker (uso offline instalable) solo se activa al servir por HTTP.

### Opción 2: servidor local (recomendado)

```bash
python3 -m http.server 8080
# Abre http://localhost:8080
```

También puedes usar:

```bash
npm run serve
```

### Regenerar los datos de las macros

`macros_data.js` se genera a partir de los archivos `.nc` y de `parse_macros.py`.
No lo edites a mano:

```bash
python3 parse_macros.py
# o
npm run parse
```

## Flujo de trabajo

1. Elige una categoría: **Patrones de agujeros**, **Cajeras** o **Ranuras**.
2. Selecciona una macro.
3. Ajusta los parámetros. La validación avisa de geometrías imposibles o valores peligrosos.
4. Revisa el esquema CAD 2D.
5. Genera el G-code, elige `G65` o macro expandida, y cópialo o descárgalo.
6. Abre la simulación para comprobar la trayectoria.
7. Imprime la hoja de taller para el operario.

Las rutas son compartibles: `#inicio`, `#categoria/cajeras`, `#ciclo/O8101`,
`#simulador`, `#libreria`, `#hoja-taller`.

## Macros incluidas

| ID | Macro | Categoría | Uso |
|---|---|---|---|
| O8101 | Patrón de agujero angular | Agujeros | Serie lineal inclinada con G83 |
| O8103 | Marco rectangular de agujeros | Agujeros | Perímetro sin sobretaladrado en esquinas |
| O8104 | Círculo de agujeros BCD/PCD | Agujeros | Círculo de paso con agujero inicial |
| O8105 | Arco de agujeros | Agujeros | Segmento circular con paso angular |
| O8106 | Desbaste de cajera circular | Cajeras | Vaciado concéntrico con sobrematerial |
| O8107 | Acabado de cajera circular | Cajeras | Perfilado circular con entrada tangencial |
| O8111 | Ciclo circular tipo G13 | Cajeras | Emulación de G13 con G03 |
| O8112 | Desbaste de cajera rectangular | Cajeras | Vaciado concéntrico con radios |
| O8110 | Acabado rectangular o marco | Cajeras | Perfilado al centro de herramienta |
| O8108 | Ranura recta angular | Ranuras | Racetrack multipasada |
| O8109 | Ranura circular multiprofundidad | Ranuras | Canal anular con pasadas en Z |

La referencia de parámetros está en [Manual_de_Usuario.md](Manual_de_Usuario.md).

## Modos de salida G-code

### Llamada G65 (recomendada)

Genera un programa principal con cabecera, parámetros documentados y una línea:

```gcode
G65 P8101 X50.0 Y30.0 A30.0 ...
```

La macro debe estar cargada como subprograma (`O8101`) en el control. Es el modo habitual
en producción porque el programa principal queda corto y la macro se reutiliza.

### Macro expandida

Inserta el cuerpo de la macro en el programa, sustituye los valores de las variables de
entrada y elimina el número `O`, el `M99` y el `%` interno. El resultado es un programa
principal autónomo y más fácil de auditar, a costa de un archivo más largo.

> En ambos modos, verifica el número de programa, los argumentos, el cero pieza, los
> correctores y los límites de carrera en el control antes de mecanizar.

## Estructura del repositorio

```
.
├── index.html                 # SPA: UI, CAD, simulación y generador G-code
├── macros_data.js             # GENERADO por parse_macros.py
├── parse_macros.py            # Fuente única de metadatos y parser de los .nc
├── O81xx_*.nc                 # 11 macros Fanuc Custom Macro B
├── vendor/                    # Tailwind, Three.js, OrbitControls y fuentes locales
├── icon.svg / manifest.json   # PWA instalable
├── service-worker.js          # Caché del app shell para uso offline
├── tests/                     # Pruebas de datos, .nc, HTML y generador
├── Manual_de_Usuario.md       # Manual completo
└── stitch_ng_macros_.../      # Mockups de diseño originales (no se usan en runtime)
```

## Pruebas y validación

Requiere Node.js 20+ y Python 3.

```bash
python3 parse_macros.py
node --test tests/*.test.mjs
# o
npm run check
```

Las pruebas comprueban:

- Consistencia entre los `.nc`, `macros_data.js` y las categorías.
- Estructura Fanuc de cada archivo (dos `%`, `M99`, alarmas, saltos existentes).
- Sintaxis del JavaScript embebido en `index.html`.
- Ausencia de CDNs y de secretos de licencia.
- Existencia de todos los IDs usados por `getElementById`.
- Manifest, icono y app shell del service worker.
- Salida de los modos `G65` y macro expandida.

El flujo de CI está en `.github/workflows/ci.yml`.

## Seguridad

Los programas generados son **borradores de ingeniería**. Antes de ejecutarlos:

1. Verifica la sintaxis en el control o en un simulador real.
2. Comprueba el cero pieza, el cero herramienta y los correctores H/D.
3. Revisa límites de carrera, orden de bloques y sentido de giro.
4. Haz una simulación en vacío y, si es posible, un corte en material blando.
5. Mantén la mano en la parada de emergencia durante la primera pasada.

Las macros incluyen validaciones básicas y alarmas `#3000`, pero no sustituyen la revisión
del operario ni el manual del control.

## Licencia

Código bajo licencia **MIT**. Consulta [LICENSE](LICENSE). Las macros y la documentación se
ofrecen “tal cual”, sin garantía de aptitud para un mecanizado concreto.

Copyright © 2026 Ingeniero Nestor Gamez.
