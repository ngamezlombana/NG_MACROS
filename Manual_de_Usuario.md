# Manual de Usuario — NG_MACROS · CNC Precision Studio v4.4

**Autor:** Ingeniero Nestor Gamez

**Licencia del código:** MIT (ver `LICENSE`) · **Uso de la app distribuida:** licencia firmada por días

**Aplicación:** `index.html` (HTML + JavaScript, sin backend)

---

## Índice

1. [Qué es NG_MACROS](#1-qué-es-ng_macros)
2. [Requisitos y puesta en marcha](#2-requisitos-y-puesta-en-marcha)
3. [Flujo de trabajo](#3-flujo-de-trabajo)
4. [Interfaz de usuario](#4-interfaz-de-usuario)
5. [Seguridad y validación](#5-seguridad-y-validación)
6. [Generación de código G](#6-generación-de-código-g)
7. [Referencia de las 11 macros](#7-referencia-de-las-11-macros)
8. [Simulación 3D y 2D](#8-simulación-3d-y-2d)
9. [Almacén de herramientas](#9-almacén-de-herramientas)
10. [Hoja de taller](#10-hoja-de-taller)
11. [Uso sin conexión e instalación](#11-uso-sin-conexión-e-instalación)
12. [Licencias y activación](#12-licencias-y-activación)
13. [Datos guardados en el navegador](#13-datos-guardados-en-el-navegador)
14. [Estructura y desarrollo](#14-estructura-y-desarrollo)
15. [Solución de problemas](#15-solución-de-problemas)
16. [Licencia y descargo de responsabilidad](#16-licencia-y-descargo-de-responsabilidad)

---

## 1. Qué es NG_MACROS

NG_MACROS es una aplicación web local para preparar y verificar **macros Fanuc Custom
Macro B** (`O81xx`) usadas en taladrado, cajeras y ranuras. Permite:

- Editar los parámetros de cada macro con validación inmediata.
- Visualizar la geometría y la trayectoria del centro de herramienta en 2D.
- Simular la trayectoria en 3D.
- Generar un programa principal en modo `G65` o con la macro expandida.
- Copiar o descargar el código G.
- Imprimir una hoja de taller para el operario.

La aplicación **no controla ninguna máquina**. Solo genera texto G-code y gráficos de
verificación. La ejecución real siempre se realiza en el control CNC.

---

## 2. Requisitos y puesta en marcha

### 2.1 Navegador

Se recomienda un navegador actualizado:

- Chrome / Edge 110 o superior.
- Firefox 110 o superior.
- Safari 16 o superior.

La simulación 3D necesita WebGL. Si no está disponible, el simulador muestra una vista 2D
de respaldo.

### 2.2 Abrir la aplicación

**Opción A — doble clic:** abre `index.html`. Funciona con `file://`, pero el service worker
no se registra en ese protocolo.

**Opción B — servidor local (recomendado):**

```bash
python3 -m http.server 8080
```

Abre `http://localhost:8080`. Así se activa el uso sin conexión y la instalación como PWA.

### 2.3 Regenerar los datos

`macros_data.js` se genera automáticamente desde los archivos `.nc` y `parse_macros.py`.
Si editas una macro `.nc` o los metadatos, ejecuta:

```bash
python3 parse_macros.py
```

Después recarga la página con `Ctrl+F5`. **No edites `macros_data.js` a mano**: se
sobrescribe.

---

## 3. Flujo de trabajo

1. **Inicio:** elige una categoría (Patrones de agujeros, Cajeras o Ranuras).
2. **Selección:** elige la macro concreta.
3. **Parámetros:** ajusta geometría, herramienta, avances, profundidad y seguridad.
4. **Validación:** revisa el aviso rojo si aparece. Corrige todos los problemas.
5. **CAD 2D:** comprueba la forma, la trayectoria y las cotas.
6. **G-code:** elige el modo de salida y copia o descarga el programa.
7. **Simulación:** verifica la trayectoria en 3D y el terminal de código.
8. **Hoja de taller:** imprímela para el operario.

Los parámetros se guardan automáticamente por macro en el navegador. El botón
**Restablecer** devuelve la macro a sus valores originales.

---

## 4. Interfaz de usuario

### 4.1 Cabecera

- **Logo:** vuelve al inicio.
- **Navegación:** Inicio, Librería, Hoja de taller.
- **Licencia:** muestra el estado de la licencia y, si no hay una activa, abre el diálogo para
  pegar el token o cargar el enlace. Sin licencia válida la app queda en modo demo y no permite
  exportar G-code.
- **E-STOP:** parada de emergencia visual de la simulación. No actúa sobre una máquina real.

### 4.2 Vista de ciclo

- Título y archivo de la macro activa.
- Botones **Copiar código G**, **Descargar .NC**, **Simulación** y **Restablecer**.
- Aviso de validación de parámetros.
- Panel de parámetros agrupados por tipo (geometría, corte, seguridad).
- Esquema CAD 2D con selector **Plano XY / Perfil Z**.
- Panel **Salida G-code** con vista previa y opciones.

### 4.3 Rutas compartibles

La barra de direcciones refleja la vista actual:

| Ruta | Vista |
|---|---|
| `#inicio` | Inicio |
| `#categoria/cajeras` | Lista de una categoría |
| `#ciclo/O8101` | Macro concreta |
| `#simulador` | Simulación |
| `#libreria` | Almacén de herramientas |
| `#hoja-taller` | Hoja de taller |

Puedes guardar o compartir estos enlaces. Al abrir uno, la aplicación carga la vista
correspondiente.

### 4.4 Accesibilidad

- Enlace **Saltar al contenido principal** al inicio.
- Foco visible en controles.
- Etiquetas `aria-label` en botones y paneles importantes.
- Estilos de impresión que ocultan la cabecera y el modal de licencia.

---

## 5. Seguridad y validación

### 5.1 Validaciones de la interfaz

Antes de generar el código, la aplicación comprueba:

- Diámetro de herramienta, avance y husillo mayores que cero.
- Dimensiones de cajera, ranura o patrón coherentes.
- Que la fresa quepa en la cajera o ranura.
- Que el radio de esquina sea mayor que el radio de la fresa.
- Cantidades enteras de agujeros y agujero inicial dentro de rango.
- Pasos de profundidad y pasos radiales positivos.

Los avisos son orientativos: **no sustituyen la validación del control**.

### 5.2 Alarmas `#3000` en las macros

Cada macro incluye etiquetas `N91xx` con alarmas `#3000`. Si un parámetro es inválido, el
control detiene el programa con un mensaje. Ejemplo:

```gcode
N9101 #3000 = 101 (DIAMETRO DE LA CAJERA DEBE SER MAYOR A CERO)
```

El número después de `#3000 =` es el código de alarma. Consulta la tabla de cada macro en
la sección 7.

### 5.3 Buenas prácticas obligatorias

1. Verifica la sintaxis en el control o en un simulador real.
2. Comprueba cero pieza, cero herramienta y correctores H/D.
3. Revisa límites de carrera y posibles colisiones.
4. Simula en vacío antes del primer corte.
5. Haz la primera pasada con la mano en la parada de emergencia.
6. No mecanices materiales o geometrías fuera del rango previsto sin recalcular.

---

## 6. Generación de código G

### 6.1 Cabecera común

Ambos modos generan una cabecera con:

- `%` de inicio.
- Número de programa y nombre del archivo.
- Autor y control seleccionado.
- Lista de parámetros configurados.
- `G21` (milímetros) y `G54` (origen de trabajo), ambos opcionales.
- `G90 G94 G17` (absoluto, avance por minuto, plano XY).

Al final se añade:

```gcode
M05
M09
G91 G28 Z0.0
G91 G28 X0.0 Y0.0
M30
%
```

### 6.2 Modo llamada G65 (recomendado)

Genera un programa principal corto:

```gcode
%
O8101 (NG_MACROS - LLAMADA G65)
...
G65 P8101 X50.0 Y30.0 A30.0 Q25.0 H5.0 T10.0 F250.0 S1200.0 Z20.0 R2.0 E5.0
...
M30
%
```

Requisitos:

- La macro `O8101` debe estar cargada como subprograma en el control.
- El número de programa debe coincidir (`P8101`).
- Los argumentos deben ser aceptados por el control.

Ventajas: programa principal corto, macro reutilizable y mantenimiento centralizado.

### 6.3 Modo macro expandida

Inserta el cuerpo completo de la macro en el programa principal:

- Elimina el `%` interno, la línea `O81xx` y el `M99`.
- Sustituye los valores de las variables de entrada por los configurados.
- Conserva las alarmas, los saltos y la lógica.
- Añade el cierre seguro y `M30`.

Ventajas: programa autónomo, fácil de auditar y de transferir a controles que no admiten
subprogramas. Inconveniente: archivo más largo y menos reutilizable.

> En modo expandido no se debe cargar el archivo como subprograma. Es un programa
> principal.

### 6.4 Opciones de salida

- **G21:** incluye el bloque de milímetros. Desactívalo solo si tu control ya está en
  métrico y no admite el bloque.
- **G54:** incluye la selección de origen de trabajo. Desactívalo si usas otro origen
  (G55–G59) o lo gestionas fuera del programa.
- **Copiar:** copia el texto al portapapeles.
- **Descargar .NC:** descarga el programa con sufijo `_g65.nc` o `_expandida.nc`.

### 6.5 Integración en el control

1. Revisa el código en el editor del control o en un PC.
2. Transfiere la macro `O81xx` al directorio de subprogramas si usas `G65`.
3. Comprueba que el número `O` y `P` coinciden.
4. Verifica que las letras de argumento de tu control coinciden con las de la macro.
5. Ejecuta bloque a bloque la primera vez.

---

## 7. Referencia de las 11 macros

Convención de letras Fanuc usada por el parser:

| Letra | Variable | Letra | Variable | Letra | Variable |
|---|---|---|---|---|---|
| A | `#1` | I | `#4` | R | `#18` |
| B | `#2` | J | `#5` | S | `#19` |
| C | `#3` | K | `#6` | T | `#20` |
| D | `#7` | Q | `#17` | U | `#21` |
| E | `#8` | H | `#11` | V | `#22` |
| F | `#9` | W | `#23` | X | `#24` |
| | | | | Y | `#25` |
| | | | | Z | `#26` |

> Atención: en **O8104** el husillo se programa con **B (#2)** y **S (#19)** es el número de
> agujero inicial. En el resto de macros, **S (#19)** es la velocidad del husillo.

---

### 7.1 O8101 — Patrón de agujero angular

Serie lineal de agujeros equidistantes orientada a cualquier ángulo polar. Usa ciclo fijo
`G83` con picoteo.

| Letra | Variable | Parámetro | Defecto |
|---|---|---|---|
| X | `#24` | Coordenada X del primer agujero | 50.0 |
| Y | `#25` | Coordenada Y del primer agujero | 30.0 |
| A | `#1` | Ángulo de la línea desde X+ (grados) | 30.0 |
| Q | `#17` | Distancia entre agujeros | 25.0 |
| H | `#11` | Número total de agujeros (entero ≥ 2) | 5 |
| T | `#20` | Diámetro de broca/herramienta | 10.0 |
| F | `#9` | Avance de taladrado (mm/min) | 250.0 |
| S | `#19` | Velocidad del husillo (rpm) | 1200.0 |
| Z | `#26` | Profundidad total (positiva) | 20.0 |
| R | `#18` | Plano de retroceso/seguridad | 2.0 |
| E | `#8` | Paso de picoteo en Z | 5.0 |

Alarmas: 101 cantidad inválida, 102 paso Q ≤ 0, 103 profundidad ≤ 0, 104 avance ≤ 0,
105 diámetro ≤ 0, 106 picoteo ≤ 0.

---

### 7.2 O8103 — Patrón de agujero de marco rectangular

Perímetro rectangular de cuatro lados, con prevención de sobretaladrado en las esquinas.

| Letra | Variable | Parámetro | Defecto |
|---|---|---|---|
| X | `#24` | X de la esquina inferior izquierda | 20.0 |
| Y | `#25` | Y de la esquina inferior izquierda | 20.0 |
| U | `#21` | Cantidad de agujeros en X (entero ≥ 2) | 6 |
| V | `#22` | Cantidad de agujeros en Y (entero ≥ 2) | 4 |
| I | `#4` | Paso entre agujeros en X | 25.0 |
| J | `#5` | Paso entre agujeros en Y | 20.0 |
| T | `#20` | Diámetro de broca | 10.0 |
| F | `#9` | Avance de taladrado | 250.0 |
| S | `#19` | Velocidad del husillo | 1200.0 |
| Z | `#26` | Profundidad total | 18.0 |
| R | `#18` | Plano de retroceso | 2.0 |
| E | `#8` | Paso de picoteo | 5.0 |

Alarmas: 101 pasos I/J ≤ 0, 102 menos de 2 agujeros por lado, 103 cantidades no enteras,
104 profundidad ≤ 0, 105 avance ≤ 0, 106 diámetro ≤ 0, 107 picoteo ≤ 0.

---

### 7.3 O8104 — Círculo de agujeros BCD / PCD

Círculo de agujeros equiespaciados con ángulo inicial y agujero de inicio seleccionable.

| Letra | Variable | Parámetro | Defecto |
|---|---|---|---|
| X | `#24` | X del centro del círculo | 0.0 |
| Y | `#25` | Y del centro del círculo | 0.0 |
| W | `#23` | Diámetro del círculo de paso (BCD/PCD) | 120.0 |
| H | `#11` | Cantidad total de agujeros (entero) | 8 |
| A | `#1` | Ángulo del primer agujero desde X+ | 0.0 |
| S | `#19` | Número del agujero inicial (1…H) | 1 |
| T | `#20` | Diámetro de broca | 12.0 |
| F | `#9` | Avance de taladrado | 280.0 |
| B | `#2` | Velocidad del husillo (rpm) | 1200.0 |
| Z | `#26` | Profundidad total | 25.0 |
| R | `#18` | Plano de retroceso | 3.0 |
| E | `#8` | Paso de picoteo | 6.0 |

Alarmas: 101 BCD ≤ 0, 102 cantidad o inicio no entero, 103 cantidad ≤ 0, 104 inicio < 1,
105 inicio > total, 106 profundidad ≤ 0, 107 avance ≤ 0, 108 husillo ≤ 0, 109 diámetro ≤ 0,
110 picoteo ≤ 0.

---

### 7.4 O8105 — Patrón de agujeros en arco

Barrenado en un segmento circular con paso angular uniforme.

| Letra | Variable | Parámetro | Defecto |
|---|---|---|---|
| X | `#24` | X del centro del arco | 0.0 |
| Y | `#25` | Y del centro del arco | 0.0 |
| W | `#23` | Diámetro del arco de agujeros | 100.0 |
| H | `#11` | Cantidad de agujeros (entero ≥ 1) | 6 |
| A | `#1` | Ángulo del primer agujero desde X+ | 15.0 |
| I | `#4` | Separación angular entre agujeros | 30.0 |
| T | `#20` | Diámetro de broca | 10.0 |
| F | `#9` | Avance de taladrado | 250.0 |
| S | `#19` | Velocidad del husillo | 1200.0 |
| Z | `#26` | Profundidad total | 20.0 |
| R | `#18` | Plano de retroceso | 2.0 |
| E | `#8` | Paso de picoteo | 5.0 |

`I` puede ser negativo para recorrer el arco en sentido horario. Alarmas: 101 diámetro ≤ 0,
102 menos de 1 agujero, 103 cantidad no entera, 104 incremento angular 0, 105 profundidad
≤ 0, 106 avance ≤ 0, 107 diámetro de herramienta ≤ 0, 108 picoteo ≤ 0.

---

### 7.5 O8106 — Desbaste de cajera circular

Vaciado concéntrico con pasadas en Z y sobrematerial para el acabado.

| Letra | Variable | Parámetro | Defecto |
|---|---|---|---|
| X | `#24` | X del centro de la cajera | 0.0 |
| Y | `#25` | Y del centro de la cajera | 0.0 |
| D | `#7` | Diámetro final de la cajera | 80.0 |
| T | `#20` | Diámetro de la fresa | 10.0 |
| F | `#9` | Avance de mecanizado | 400.0 |
| S | `#19` | Velocidad del husillo | 1800.0 |
| Z | `#26` | Profundidad total | 15.0 |
| K | `#6` | Profundidad por pasada en Z | 3.0 |
| W | `#23` | Paso radial / ancho de corte | 6.0 |
| U | `#21` | Sobrematerial en paredes | 0.5 |
| V | `#22` | Sobrematerial en fondo | 0.2 |
| R | `#18` | Plano de retroceso | 2.0 |

El radio máximo de la trayectoria del centro es `D/2 − U − T/2`. Alarmas: 101 diámetro ≤ 0,
102 herramienta ≤ 0, 103 paso radial ≤ 0, 104 profundidad ≤ 0, 105 avance ≤ 0,
106 herramienta + sobrematerial exceden la cajera, 107 paso Z ≤ 0.

---

### 7.6 O8107 — Acabado de cajera circular

Perfilado circular con entrada y salida tangencial en arco, directo al centro de herramienta.
No usa compensación G41/G42: la trayectoria ya está corregida por el radio de la fresa.

| Letra | Variable | Parámetro | Defecto |
|---|---|---|---|
| X | `#24` | X del centro | 0.0 |
| Y | `#25` | Y del centro | 0.0 |
| W | `#23` | Diámetro final terminado | 80.0 |
| T | `#20` | Diámetro de la fresa de acabado | 10.0 |
| F | `#9` | Avance de acabado | 250.0 |
| S | `#19` | Velocidad del husillo | 2200.0 |
| Z | `#26` | Profundidad terminada | 15.0 |
| R | `#18` | Plano de seguridad | 2.0 |

Radio de trayectoria: `W/2 − T/2`. Radio de entrada/salida: la mitad de ese valor.
Alarmas: 101 diámetro ≤ 0, 102 herramienta ≤ 0, 103 profundidad ≤ 0, 104 avance ≤ 0,
105 herramienta ≥ radio de cajera, 106 husillo ≤ 0.

---

### 7.7 O8111 — Ciclo de corte circular (emulación G13)

Emula la trayectoria de `G13` con `G03` en fresado ascendente. Útil en controles que no
implementan `G13`.

| Letra | Variable | Parámetro | Defecto |
|---|---|---|---|
| X | `#24` | X del centro | 0.0 |
| Y | `#25` | Y del centro | 0.0 |
| D | `#7` | Diámetro de la cajera | 60.0 |
| T | `#20` | Diámetro de la fresa | 12.0 |
| F | `#9` | Avance de corte | 300.0 |
| S | `#19` | Velocidad del husillo | 2000.0 |
| Z | `#26` | Profundidad | 12.0 |
| R | `#18` | Plano de seguridad | 2.0 |

Radio de trayectoria: `D/2 − T/2`. Alarmas: 101 diámetro ≤ 0, 102 herramienta ≤ 0,
103 avance ≤ 0, 104 herramienta ≥ radio, 105 profundidad ≤ 0, 106 husillo ≤ 0.

---

### 7.8 O8112 — Desbaste de cajera rectangular

Vaciado concéntrico rectangular con radios de esquina y sobrematerial para acabado.

| Letra | Variable | Parámetro | Defecto |
|---|---|---|---|
| X | `#24` | X del centro | 0.0 |
| Y | `#25` | Y del centro | 0.0 |
| W | `#23` | Longitud total en X | 100.0 |
| H | `#11` | Anchura total en Y | 60.0 |
| R | `#18` | Radio de esquinas interiores | 10.0 |
| T | `#20` | Diámetro de la fresa | 10.0 |
| F | `#9` | Avance de corte | 350.0 |
| S | `#19` | Velocidad del husillo | 1800.0 |
| Z | `#26` | Profundidad total | 15.0 |
| K | `#6` | Profundidad por pasada en Z | 3.0 |
| E | `#8` | Paso lateral entre contornos (0 = 65% de T) | 6.0 |
| U | `#21` | Sobrematerial en paredes | 0.5 |
| V | `#22` | Sobrematerial en fondo | 0.2 |
| B | `#2` | Plano de retroceso | 2.0 |

Alarmas: 101 W ≤ 0, 102 H ≤ 0, 103 Z ≤ 0, 104 herramienta ≤ 0, 105 K ≤ 0,
106 radio de herramienta ≥ R, 107 fresa/sobrematerial exceden W, 108 exceden H,
109 avance ≤ 0, 110 husillo ≤ 0.

---

### 7.9 O8110 — Acabado de cajera rectangular o marco

Perfilado rectangular con radios de esquina, entrada y salida por el centro de la cajera.
Trayectoria directa al centro de herramienta (sin G41/G42).

| Letra | Variable | Parámetro | Defecto |
|---|---|---|---|
| X | `#24` | X del centro | 0.0 |
| Y | `#25` | Y del centro | 0.0 |
| W | `#23` | Longitud en X | 100.0 |
| H | `#11` | Anchura en Y | 60.0 |
| R | `#18` | Radio de esquinas interiores | 10.0 |
| T | `#20` | Diámetro de la fresa de acabado | 10.0 |
| F | `#9` | Avance de acabado | 350.0 |
| S | `#19` | Velocidad del husillo | 1800.0 |
| Z | `#26` | Profundidad terminada | 12.0 |
| B | `#2` | Plano de seguridad | 2.0 |

Condiciones: `R > T/2`, `W > T`, `H > T`. Alarmas: 101 W ≤ 0, 102 H ≤ 0, 103 R ≤ 0,
104 herramienta ≤ 0, 105 avance ≤ 0, 106 profundidad ≤ 0, 107 herramienta excede la cajera,
108 R ≤ T/2, 109 husillo ≤ 0.

---

### 7.10 O8108 — Ranura recta angular

Ranura tipo racetrack orientada a cualquier ángulo, con arcos extremos de radio nominal `R` y
varias pasadas radiales de dentro hacia fuera.

| Letra | Variable | Parámetro | Defecto |
|---|---|---|---|
| X | `#24` | X del centro inicial de la ranura | 30.0 |
| Y | `#25` | Y del centro inicial de la ranura | 25.0 |
| A | `#1` | Orientación angular desde X+ | 25.0 |
| D | `#7` | Distancia entre centros extremos | 60.0 |
| R | `#18` | Radio nominal de la ranura (ancho total = 2R) | 10.0 |
| T | `#20` | Diámetro de la fresa | 10.0 |
| F | `#9` | Avance de corte | 300.0 |
| S | `#19` | Velocidad del husillo | 1600.0 |
| Z | `#26` | Profundidad total | 6.0 |
| B | `#2` | Plano de seguridad | 2.0 |

El radio máximo de la trayectoria del centro es `R − T/2`. El paso radial es el 65% del
diámetro de la fresa. Alarmas: 101 D ≤ 0, 102 R ≤ 0, 103 herramienta ≤ 0, 104 Z ≤ 0,
105 avance ≤ 0, 106 herramienta ≥ 2R, 107 husillo ≤ 0.

---

### 7.11 O8109 — Ranura circular multiprofundidad

Canal anular circular concéntrico con pasadas de profundidad controladas. La fresa recorre
un círculo de diámetro `W`; el ancho del canal es el diámetro de la herramienta.

| Letra | Variable | Parámetro | Defecto |
|---|---|---|---|
| X | `#24` | X del centro de la ranura | 0.0 |
| Y | `#25` | Y del centro de la ranura | 0.0 |
| W | `#23` | Diámetro de la trayectoria central | 90.0 |
| T | `#20` | Diámetro de la fresa | 10.0 |
| F | `#9` | Avance de corte | 350.0 |
| S | `#19` | Velocidad del husillo | 1500.0 |
| D | `#7` | Profundidad total | 10.0 |
| C | `#3` | Profundidad máxima por pasada | 2.0 |
| R | `#18` | Plano de seguridad | 2.0 |

La última pasada corrige el remanente si `D` no es múltiplo de `C`. Alarmas: 101 W ≤ 0,
102 D ≤ 0, 103 C ≤ 0, 104 avance ≤ 0, 105 herramienta ≤ 0, 106 husillo ≤ 0.

---

## 8. Simulación 3D y 2D

### 8.1 Controles

- **Play:** ejecuta la trayectoria punto a punto.
- **Pausa:** detiene la ejecución sin perder la posición.
- **Paso:** avanza un punto.
- **Reset:** vuelve al inicio y reinicia contadores.
- **Velocidad:** multiplicador de la animación.
- **Vistas:** 3D, planta, frente y lateral.
- **Material:** aluminio, acero, cobre o madera (solo visual).

### 8.2 Lectura de la simulación

- Líneas ámbar: movimientos rápidos (`G0`).
- Líneas azules: movimientos de corte (`G1`, `G2`, `G3`).
- Terminal inferior: código G y resaltado de la línea aproximada.
- Contador: puntos recorridos y tiempo estimado.

El tiempo estimado usa el avance `F` de la macro y una velocidad de rápido de
12 000 mm/min. Es una aproximación, no una medida real.

### 8.3 Limitaciones

- La simulación reproduce la geometría paramétrica de la macro, no interpreta G-code
  arbitrario.
- No modela colisiones, quillas, portaherramientas ni límites reales de la máquina.
- No sustituye al simulador del control.

---

## 9. Almacén de herramientas

La vista **Librería** muestra hasta 24 puestos ATC.

- **Agregar:** crea una herramienta nueva (nombre, diámetro, filos).
- **Asignar:** aplica diámetro, avance y RPM a la macro activa.
- **Eliminar:** borra la herramienta del almacén.
- Los cambios se guardan en `localStorage`.

La asignación busca variables por letra y comentario:

- `T` o comentarios de diámetro de fresa/broca → diámetro.
- `F` o comentarios de avance → avance.
- Comentarios de RPM/husillo → velocidad.
- En O8104, `B` se trata como husillo.

Revisa siempre el resultado de la asignación: los comentarios de las macros mandan sobre
cualquier heurística.

---

## 10. Hoja de taller

La vista **Hoja de taller** genera una ficha imprimible con:

- Fecha.
- Programa y ciclo activo.
- Tiempo estimado.
- Herramienta, diámetro, correctores H/D.
- Husillo y avance.

Usa **Imprimir** del navegador. Los estilos de impresión ocultan la cabecera y el modal de
licencia para ahorrar tinta.

---

## 11. Uso sin conexión e instalación

La aplicación incluye:

- `manifest.json` para instalación como PWA.
- `icon.svg` como icono.
- `service-worker.js` con caché del app shell.
- Tailwind, Three.js, OrbitControls y fuentes en `vendor/`.

### 11.1 Primer uso con conexión

1. Sirve la aplicación por HTTP (`python3 -m http.server 8080`).
2. Abre la URL.
3. El service worker se registra y cachea los assets.
4. Recarga una vez para confirmar.

### 11.2 Uso posterior sin conexión

Abre la misma URL. El service worker sirve el app shell desde la caché. Si usas `file://`,
la aplicación también funciona, pero sin service worker ni instalación.

### 11.3 Actualizar la caché

Si modificas assets, sube `CACHE_VERSION` en `service-worker.js`. Al recargar, el nuevo
service worker elimina las cachés antiguas.

---

## 12. Licencias y activación

La app distribuida requiere una **licencia firmada por días**. Sin licencia válida se abre en
**modo demo**: la interfaz, el CAD y la simulación funcionan, pero no se puede generar, copiar
ni descargar G-code.

### 12.1 Activar una licencia

1. Abre el enlace que recibiste, con la forma `https://tu-sitio/index.html?lic=TOKEN`.
2. La app verifica la firma y guarda la licencia en ese navegador.
3. El botón **Licencia** de la cabecera muestra los días restantes y la fecha de vencimiento.

Si prefieres pegar el token manualmente, abre **Licencia** y pega el token en el campo
**Token de licencia**. También puedes usar **Copiar enlace** para trasladar la licencia a otro
equipo y **Quitar licencia** para borrarla de este navegador.

### 12.2 Generar licencias

La clave privada es un secreto: vive en `tools/license-private-key.json`, está excluida de Git
y **nunca debe publicarse**. Guarda una copia de seguridad.

```bash
# Solo la primera vez: crea el par de claves
node tools/license-generator.mjs keygen

# Licencia de 30 días con enlace listo para compartir
node tools/license-generator.mjs issue --days 30 --sub "Taller Pérez" \
  --base "https://ngamezlombana.github.io/NG_MACROS/index.html" \
  --out licenses/taller-perez.json

# Comprobar un token
node tools/license-generator.mjs verify --token "eyJ..."
```

También existe `generador-licencias.html`: ábrelo por HTTP, carga la clave privada y genera el
token y el enlace desde el navegador. No se enlaza desde la app y no debe publicarse junto con
la clave privada.

### 12.3 Vencimiento y renovación

- La licencia caduca automáticamente en la fecha indicada; la app vuelve al modo demo.
- Para renovar, emite un token nuevo y comparte un enlace nuevo.
- Si el reloj del equipo se atrasa, la app detecta el cambio y pide reactivar la licencia.
- La comprobación es local. Al ser una app estática, alguien con conocimientos técnicos podría
  modificar el HTML o el reloj; para protección fuerte hace falta un servidor de validación.

---

## 13. Datos guardados en el navegador

| Clave | Contenido |
|---|---|
| `ng_macros_params_v1` | Parámetros por macro |
| `ng_cnc_tools` | Almacén de herramientas |
| `ng_gcode_mode` | Modo de salida (`caller` / `expanded`) |
| `ng_gcode_g21` | Inclusión de `G21` |
| `ng_gcode_g54` | Inclusión de `G54` |
| `ng_license_token_v1` | Token de licencia activo |
| `ng_license_last_seen_v1` | Última marca de tiempo para detectar cambios de reloj |

Los datos son locales al navegador y al perfil. No se envían a ningún servidor. Para
borrarlos, usa la configuración del navegador o el botón **Restablecer** de cada macro.

---

## 14. Estructura y desarrollo

```
index.html                 SPA completa (UI, CAD, simulación, generador)
macros_data.js             Datos generados; no editar a mano
parse_macros.py            Metadatos y parser de los .nc
O81xx_*.nc                 Macros Fanuc Custom Macro B
vendor/                    Assets locales (Tailwind, Three.js, fuentes)
tools/                     Generador de licencias (CLI y núcleo ECDSA)
generador-licencias.html   Generador/verificador visual de licencias
tests/                     Pruebas automáticas
manifest.json              PWA
service-worker.js          Caché offline
```

### 14.1 Comandos

```bash
python3 parse_macros.py          # regenerar macros_data.js
node --test tests/*.test.mjs     # pruebas
npm run check                    # parser + pruebas
python3 -m http.server 8080      # servidor local
npm run license:keygen           # crear par de claves (solo la primera vez)
npm run license:issue -- --days 30 --sub "Cliente"
npm run license:verify -- --token "eyJ..."
```

### 14.2 Añadir o modificar una macro

1. Edita el archivo `.nc`.
2. Añade o ajusta sus metadatos en `METADATA` de `parse_macros.py`.
3. Ejecuta `python3 parse_macros.py`.
4. Añade la ruta CAD y la simulación en `index.html` si la geometría es nueva.
5. Ejecuta las pruebas y revisa la app.

---

## 15. Solución de problemas

### La página se ve sin estilos

Comprueba que existe `vendor/tailwindcss.js` y que se abre por HTTP o con la ruta correcta.
Si abres `index.html` desde otra carpeta, mantén la estructura del repositorio.

### Las macros no cargan

Ejecuta `python3 parse_macros.py` y recarga. La consola debe mostrar `MACROS_DATA` con 11
elementos.

### La simulación 3D está vacía

Puede faltar WebGL. Prueba otro navegador o usa la vista 2D. Revisa también que
`vendor/three.min.js` y `vendor/OrbitControls.js` existan.

### El service worker no se registra

Solo funciona en `http://` o `https://`. Con `file://` no se registra, pero la app sigue
funcionando.

### Los cambios no aparecen

Recarga con `Ctrl+F5`. Si cambiaste el service worker, cierra todas las pestañas de la app y
vuelve a abrirla.

### Aparece el modo demo y no puedo exportar G-code

Es el comportamiento normal sin licencia. Abre el enlace `?lic=...` o el botón **Licencia** y
pega el token. Si ya tenías una licencia, pulsa **Quitar licencia** y vuelve a activarla.

### La licencia no se activa

- Comprueba que el enlace incluye el token completo, sin cortes ni espacios.
- La app debe abrirse por `https://` o `localhost`; algunos navegadores limitan WebCrypto en
  `file://`.
- Revisa la fecha del equipo: una fecha muy adelantada invalida la licencia.
- Si el token es de otro cliente o de otra versión de la app, la firma no coincidirá.

### El código G no compila en el control

- Verifica que la macro esté cargada como subprograma en modo `G65`.
- Comprueba el número `O` y `P`.
- Revisa las letras de argumento admitidas por tu control.
- Prueba el modo expandido para descartar problemas de llamada.
- Consulta las alarmas `#3000` y el manual del control.

---

## 16. Licencia y descargo de responsabilidad

El código fuente se distribuye bajo licencia **MIT** (consulta el archivo `LICENSE`). El uso de
la aplicación distribuida está sujeto a la licencia por días descrita en este manual. Consulta
la sección [Licencias y activación](#12-licencias-y-activación) para emitir, activar y renovar
licencias.

Las macros, la documentación y el código G generado se ofrecen **“tal cual”**, sin garantía
de comerciabilidad ni de aptitud para un mecanizado concreto. El autor no se hace
responsable de daños a máquinas, piezas, herramientas o personas derivados del uso de este
software.

**Verifica siempre el programa en el control antes de mecanizar.**

Copyright © 2026 Ingeniero Nestor Gamez.
