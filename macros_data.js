const MACROS_DATA = [
  {
    "filename": "Arreglo Circular de Agujeros.nc",
    "title": "O1004 (PATRON CIRCULAR V5 - FLEXIBLE)",
    "variables": [
      {
        "num": 1,
        "value": 150.0,
        "comment": "DIAMETRO DEL CIRCULO",
        "line_idx": 5,
        "original_line": "#1 = 150.0  (DIAMETRO DEL CIRCULO)"
      },
      {
        "num": 2,
        "value": 12.0,
        "comment": "NUMERO TOTAL DE AGUJEROS DEL PATRON",
        "line_idx": 6,
        "original_line": "#2 = 12     (NUMERO TOTAL DE AGUJEROS DEL PATRON)"
      },
      {
        "num": 3,
        "value": 10.0,
        "comment": "DIAMETRO DE LA BROCA",
        "line_idx": 7,
        "original_line": "#3 = 10.0   (DIAMETRO DE LA BROCA)"
      },
      {
        "num": 4,
        "value": 2500.0,
        "comment": "RPM",
        "line_idx": 8,
        "original_line": "#4 = 2500   (RPM)"
      },
      {
        "num": 5,
        "value": 300.0,
        "comment": "AVANCE F",
        "line_idx": 9,
        "original_line": "#5 = 300.0  (AVANCE F)"
      },
      {
        "num": 6,
        "value": 25.0,
        "comment": "PROFUNDIDAD TOTAL",
        "line_idx": 10,
        "original_line": "#6 = 25.0   (PROFUNDIDAD TOTAL)"
      },
      {
        "num": 7,
        "value": 1.0,
        "comment": "ESTRATEGIA: 0=DIRECTO, 1=PICOTEO",
        "line_idx": 11,
        "original_line": "#7 = 1      (ESTRATEGIA: 0=DIRECTO, 1=PICOTEO)"
      },
      {
        "num": 8,
        "value": 5.0,
        "comment": "PASO PICOTEO",
        "line_idx": 12,
        "original_line": "#8 = 5.0    (PASO PICOTEO)"
      },
      {
        "num": 9,
        "value": 5.0,
        "comment": "SEGURIDAD SOBRE PIEZA",
        "line_idx": 13,
        "original_line": "#9 = 5.0    (SEGURIDAD SOBRE PIEZA)"
      },
      {
        "num": 10,
        "value": 0.0,
        "comment": "CENTRO X",
        "line_idx": 14,
        "original_line": "#10 = 0.0   (CENTRO X)"
      },
      {
        "num": 11,
        "value": 0.0,
        "comment": "CENTRO Y",
        "line_idx": 15,
        "original_line": "#11 = 0.0   (CENTRO Y)"
      },
      {
        "num": 12,
        "value": 0.0,
        "comment": "Z INICIAL",
        "line_idx": 16,
        "original_line": "#12 = 0.0   (Z INICIAL)"
      },
      {
        "num": 13,
        "value": 0.0,
        "comment": "ANGULO INICIAL",
        "line_idx": 17,
        "original_line": "#13 = 0   (ANGULO INICIAL)"
      },
      {
        "num": 14,
        "value": 1.0,
        "comment": "AGUJERO DE INICIO",
        "line_idx": 18,
        "original_line": "#14 = 1.0   (AGUJERO DE INICIO)"
      },
      {
        "num": 15,
        "value": 12.0,
        "comment": "AGUJERO FINAL - EJ: 12 HACE HASTA EL ULTIMO",
        "line_idx": 19,
        "original_line": "#15 = 12.0  (AGUJERO FINAL - EJ: 12 HACE HASTA EL ULTIMO)"
      }
    ],
    "full_content": "O1004 (PATRON CIRCULAR V5 - FLEXIBLE)\n\n(========================================)\n(--- VARIABLES DE ENTRADA DEL OPERARIO ---)\n(========================================)\n#1 = 150.0  (DIAMETRO DEL CIRCULO)\n#2 = 12     (NUMERO TOTAL DE AGUJEROS DEL PATRON)\n#3 = 10.0   (DIAMETRO DE LA BROCA)\n#4 = 2500   (RPM)\n#5 = 300.0  (AVANCE F)\n#6 = 25.0   (PROFUNDIDAD TOTAL)\n#7 = 1      (ESTRATEGIA: 0=DIRECTO, 1=PICOTEO)\n#8 = 5.0    (PASO PICOTEO)\n#9 = 5.0    (SEGURIDAD SOBRE PIEZA)\n#10 = 0.0   (CENTRO X)\n#11 = 0.0   (CENTRO Y)\n#12 = 0.0   (Z INICIAL)\n#13 = 0   (ANGULO INICIAL)\n#14 = 1.0   (AGUJERO DE INICIO)\n#15 = 12.0  (AGUJERO FINAL - EJ: 12 HACE HASTA EL ULTIMO)\n(========================================)\n\n(--- COMPROBACIONES Y AJUSTE DE RANGO ---)\nIF [#2 LT 1] GOTO 9001\nIF [#14 LT 1] GOTO 9006\n(Si el usuario pide un final mayor al total, lo limitamos al total)\nIF [#15 GT #2] THEN #15 = #2\nIF [#14 GT #15] GOTO 9007\n\n(--- CALCULOS ---)\n#104 = #12 - #6 (FONDO Z)\n#108 = #1 / 2   (RADIO PATRON)\n#109 = #12 + #9 (PLANO SEGURIDAD)\n#116 = 360 / #2 (GRADOS POR AGUJERO)\n\n(--- INICIALIZACION ---)\n#110 = #14 - 1      (INDICE ACTUAL INICIAL)\n#117 = #15          (INDICE FINAL)\n\nG90 G54 G17 G40 G80 G49\nS#4 M03\nM08\n\nN10 (--- BUCLE PRINCIPAL ---)\nIF [#110 GE #117] GOTO 999\n\n(CALCULO ANGULO Y POSICION)\n#111 = #13 + [#110 * #116]\n#112 = #10 + [#108 * COS[#111]]\n#113 = #11 + [#108 * SIN[#111]]\n\nG00 X#112 Y#113\nG43 H4 Z#109\n\n(ESTRATEGIA)\nIF [#7 EQ 1] GOTO 50\n\n(DIRECTO)\nG01 Z#104 F#5\nG00 Z#109\nGOTO 100\n\nN50 (PICOTEO)\n#106 = #12\nN55\n#107 = #106 - #8\nIF [#107 LT #104] THEN #107 = #104\nG00 Z[#106 + 1.0]\nG01 Z#107 F#5\nG00 Z#109\n#106 = #107\nIF [#106 GT #104] GOTO 55\n\nN100\n#110 = #110 + 1\nGOTO 10\n\nN999\nG00 Z[#109 + 50.0]\nM09 M05\nG28 G91 Z0.\nG90\nM30\n\n(--- ALARMAS ---)\nN9001 #3000=1 (ERROR: TOTAL AGUJEROS < 1)\nN9006 #3000=6 (ERROR: AGUJERO INICIO < 1)\nN9007 #3000=7 (ERROR: AGUJERO INICIO > AGUJERO FINAL)"
  },
  {
    "filename": "Desbaste_Acabado macho circular central.nc",
    "title": "O1003 (MACHO CIRCULAR - DESBASTE Y ACABADO V3)",
    "variables": [
      {
        "num": 1,
        "value": 250.0,
        "comment": "DIAMETRO EXTERIOR INICIAL",
        "line_idx": 5,
        "original_line": "#1 = 250.0 (DIAMETRO EXTERIOR INICIAL)"
      },
      {
        "num": 2,
        "value": 85.0,
        "comment": "DIAMETRO FINAL DEL MACHO",
        "line_idx": 6,
        "original_line": "#2 = 85.0  (DIAMETRO FINAL DEL MACHO)"
      },
      {
        "num": 3,
        "value": 10.0,
        "comment": "DIAMETRO DE LA HERRAMIENTA",
        "line_idx": 7,
        "original_line": "#3 = 10.0  (DIAMETRO DE LA HERRAMIENTA)"
      },
      {
        "num": 4,
        "value": 10.0,
        "comment": "PROFUNDIDAD TOTAL Z FINAL - POSITIVO",
        "line_idx": 8,
        "original_line": "#4 = 10.0  (PROFUNDIDAD TOTAL Z FINAL - POSITIVO)"
      },
      {
        "num": 5,
        "value": 2.5,
        "comment": "PROFUNDIDAD DE CORTE POR PASADA Z",
        "line_idx": 9,
        "original_line": "#5 = 2.5   (PROFUNDIDAD DE CORTE POR PASADA Z)"
      },
      {
        "num": 6,
        "value": 6.0,
        "comment": "PASO RADIAL - DISTANCIA ENTRE PASADAS",
        "line_idx": 10,
        "original_line": "#6 = 6.0   (PASO RADIAL - DISTANCIA ENTRE PASADAS)"
      },
      {
        "num": 7,
        "value": 0.5,
        "comment": "SOBREMATERIAL ACABADO EN PARED",
        "line_idx": 11,
        "original_line": "#7 = 0.5   (SOBREMATERIAL ACABADO EN PARED)"
      },
      {
        "num": 8,
        "value": 0.2,
        "comment": "SOBREMATERIAL ACABADO EN FONDO Z",
        "line_idx": 12,
        "original_line": "#8 = 0.2   (SOBREMATERIAL ACABADO EN FONDO Z)"
      },
      {
        "num": 9,
        "value": 50.0,
        "comment": "PLANO DE SEGURIDAD RETROCESO R",
        "line_idx": 13,
        "original_line": "#9 = 50.0  (PLANO DE SEGURIDAD RETROCESO R)"
      },
      {
        "num": 10,
        "value": 150.0,
        "comment": "Vc - VELOCIDAD DE CORTE",
        "line_idx": 14,
        "original_line": "#10 = 150.0 (Vc - VELOCIDAD DE CORTE)"
      },
      {
        "num": 11,
        "value": 4.0,
        "comment": "NUMERO DE INSERTOS",
        "line_idx": 15,
        "original_line": "#11 = 4.0   (NUMERO DE INSERTOS)"
      },
      {
        "num": 12,
        "value": 0.12,
        "comment": "fz - AVANCE POR INSERTO",
        "line_idx": 16,
        "original_line": "#12 = 0.12  (fz - AVANCE POR INSERTO)"
      },
      {
        "num": 13,
        "value": 0.0,
        "comment": "CENTRO X",
        "line_idx": 17,
        "original_line": "#13 = 0.0   (CENTRO X)"
      },
      {
        "num": 14,
        "value": 0.0,
        "comment": "CENTRO Y",
        "line_idx": 18,
        "original_line": "#14 = 0.0   (CENTRO Y)"
      },
      {
        "num": 15,
        "value": 0.0,
        "comment": "Z INICIAL",
        "line_idx": 19,
        "original_line": "#15 = 0.0   (Z INICIAL)"
      },
      {
        "num": 16,
        "value": 2.0,
        "comment": "OPCION: 0=AMBOS, 1=SOLO DESBASTE, 2=SOLO ACABADO",
        "line_idx": 20,
        "original_line": "#16 = 2.0   (OPCION: 0=AMBOS, 1=SOLO DESBASTE, 2=SOLO ACABADO)"
      }
    ],
    "full_content": "O1003 (MACHO CIRCULAR - DESBASTE Y ACABADO V3)\n\n(========================================)\n(--- VARIABLES DE ENTRADA DEL OPERARIO ---)\n(========================================)\n#1 = 250.0 (DIAMETRO EXTERIOR INICIAL)\n#2 = 85.0  (DIAMETRO FINAL DEL MACHO)\n#3 = 10.0  (DIAMETRO DE LA HERRAMIENTA)\n#4 = 10.0  (PROFUNDIDAD TOTAL Z FINAL - POSITIVO)\n#5 = 2.5   (PROFUNDIDAD DE CORTE POR PASADA Z)\n#6 = 6.0   (PASO RADIAL - DISTANCIA ENTRE PASADAS)\n#7 = 0.5   (SOBREMATERIAL ACABADO EN PARED)\n#8 = 0.2   (SOBREMATERIAL ACABADO EN FONDO Z)\n#9 = 50.0  (PLANO DE SEGURIDAD RETROCESO R)\n#10 = 150.0 (Vc - VELOCIDAD DE CORTE)\n#11 = 4.0   (NUMERO DE INSERTOS)\n#12 = 0.12  (fz - AVANCE POR INSERTO)\n#13 = 0.0   (CENTRO X)\n#14 = 0.0   (CENTRO Y)\n#15 = 0.0   (Z INICIAL)\n#16 = 2.0   (OPCION: 0=AMBOS, 1=SOLO DESBASTE, 2=SOLO ACABADO)\n(========================================)\n\n(--- COMPROBACIONES DE SEGURIDAD ---)\nIF [#2 GE #1] GOTO 9001\nIF [#6 GE #3] GOTO 9002\nIF [#15 LE -#4] GOTO 9003\nIF [#16 LT 0] GOTO 9005\n\n(--- PARAMETROS DE CORTE ---)\n#100 = ROUND[[#10 * 1000] / [3.1416 * #3]]\n#101 = ROUND[#100 * #11 * #12] \n#102 = #3 / 2 (RADIO HTA)\n\n(--- GEOMETRIA ---)\n#104 = -[#4 - #8] (Z FINAL DESBASTE)\n#109 = -#4        (Z FINAL ACABADO)\n#108 = [#2 / 2] + #7 + #102 (RADIO TRAYECTORIA DESBASTE)\n#118 = [#2 / 2] + #102       (RADIO TRAYECTORIA ACABADO)\n#107 = [#1 / 2] - #102       (PUNTO INICIO EXTERIOR)\n#110 = ROUND[#101 * [#118 * 2] / [[#118 * 2] - #3]] (AVANCE ACABADO)\n\nG90 G54 G17 G40 G80 G49\nG00 X[#13 + #107] Y#14 (POSICIONAMIENTO EN RAPIDO AL PUNTO DE INICIO)\nG43 H3 Z#9 (*** VERIFICAR CORRECTOR DE ALTURA H ***)\nS#100 M03 M08\n\n(--- SELECCION DE CICLO ---)\nIF [#16 EQ 2] GOTO 200\n\n(========================================)\n(           RUTINA DE DESBASTE           )\n(========================================)\n#105 = #15 (INICIALIZADOR Z ACTUAL)\n#106 = #15 (INICIALIZADOR Z ANTERIOR PARA RAPIDOS)\n\nWHILE [#105 GT #104] DO 1\n    #105 = #105 - #5\n    IF [#105 LT #104] THEN #105 = #104\n    \n    G00 X[#13 + #107] Y#14\n    G00 Z[#106 + 1.0] (BAJADA EN RAPIDO A 1MM DEL NIVEL MECANIZADO ANTERIOR)\n    G01 Z#105 F[#101 / 2] (BAJADA DE CORTE AL NUEVO NIVEL)\n    \n    #111 = #107\n    WHILE [#111 GT #108] DO 2\n        G01 X[#13 + #111] F#101\n        G02 I-[#111] J0. F#101\n        #111 = #111 - #6\n        IF [#111 LT #108] THEN #111 = #108\n    END 2\n    \n    G01 X[#13 + #108] F#101\n    G02 I-[#108] J0.\n    \n    #106 = #105 (ACTUALIZA Z ANTERIOR CON EL NIVEL QUE SE ACABA DE MECANIZAR)\n    G00 Z#9 (RETROCESO AL PLANO DE SEGURIDAD)\nEND 1\n\nIF [#16 EQ 1] GOTO 999\n\n(========================================)\n(            RUTINA DE ACABADO           )\n(========================================)\nN200\nG00 X[#13 + #118] Y#14\nG00 Z[#104 + 1.0] (BAJA EN RAPIDO HASTA 1MM SOBRE EL FONDO DESBASTADO)\nG01 Z#109 F[#101 / 2] (BAJADA CONTROLADA PARA EL CORTE DEL FONDO DE ACABADO)\nG02 I-[#118] J0. F#110\nG00 Z#9\n\nN999\nG00 Z#9\nM09 M05\nG28 G91 Z0.\nG90\nM30\n\n(--- ALARMAS ---)\nN9001 #3000=1 (ERROR: MACHO > BRUTO)\nN9002 #3000=2 (ERROR: PASO RADIAL > HTA)\nN9003 #3000=3 (ERROR: Z INICIAL < Z FINAL)\nN9005 #3000=5 (ERROR: OPCION 0-1-2)"
  },
  {
    "filename": "Desbaste_Acabado_cajera_circular.nc",
    "title": "O1003 (CAJA CIRCULAR DESBASTE-ACABADO CON REINICIO EN Z)",
    "variables": [
      {
        "num": 1,
        "value": 80.0,
        "comment": "DIAMETRO FINAL DE LA CAJA",
        "line_idx": 5,
        "original_line": "#1 = 80.0   (DIAMETRO FINAL DE LA CAJA)"
      },
      {
        "num": 2,
        "value": 12.0,
        "comment": "DIAMETRO DE LA HERRAMIENTA",
        "line_idx": 6,
        "original_line": "#2 = 12.0   (DIAMETRO DE LA HERRAMIENTA)"
      },
      {
        "num": 3,
        "value": 20.0,
        "comment": "PROFUNDIDAD TOTAL Z FINAL - VALOR POSITIVO EJ: 20",
        "line_idx": 7,
        "original_line": "#3 = 20.0   (PROFUNDIDAD TOTAL Z FINAL - VALOR POSITIVO EJ: 20)"
      },
      {
        "num": 4,
        "value": 5.0,
        "comment": "PROFUNDIDAD POR PASADA EN Z DESBASTE",
        "line_idx": 8,
        "original_line": "#4 = 5.0    (PROFUNDIDAD POR PASADA EN Z DESBASTE)"
      },
      {
        "num": 5,
        "value": 0.5,
        "comment": "SOBREMATERIAL RADIAL PARA EL ACABADO",
        "line_idx": 9,
        "original_line": "#5 = 0.5    (SOBREMATERIAL RADIAL PARA EL ACABADO)"
      },
      {
        "num": 6,
        "value": 160.0,
        "comment": "Vc - VELOCIDAD DE CORTE EN m/min",
        "line_idx": 10,
        "original_line": "#6 = 160.0  (Vc - VELOCIDAD DE CORTE EN m/min)"
      },
      {
        "num": 7,
        "value": 4.0,
        "comment": "NUMERO DE INSERTOS O LABIOS",
        "line_idx": 11,
        "original_line": "#7 = 4.0    (NUMERO DE INSERTOS O LABIOS)"
      },
      {
        "num": 8,
        "value": 0.08,
        "comment": "fz - AVANCE POR INSERTO EN mm/rev",
        "line_idx": 12,
        "original_line": "#8 = 0.08   (fz - AVANCE POR INSERTO EN mm/rev)"
      },
      {
        "num": 9,
        "value": 50.0,
        "comment": "PLANO DE SEGURIDAD RETROCESO R",
        "line_idx": 13,
        "original_line": "#9 = 50.0   (PLANO DE SEGURIDAD RETROCESO R)"
      },
      {
        "num": 10,
        "value": 0.0,
        "comment": "CENTRO DE LA CAJA EN X",
        "line_idx": 14,
        "original_line": "#10 = 0.0   (CENTRO DE LA CAJA EN X)"
      },
      {
        "num": 11,
        "value": 0.0,
        "comment": "CENTRO DE LA CAJA EN Y",
        "line_idx": 15,
        "original_line": "#11 = 0.0   (CENTRO DE LA CAJA EN Y)"
      },
      {
        "num": 12,
        "value": 8.0,
        "comment": "PASO RADIAL MAXIMO DESBASTE XY",
        "line_idx": 16,
        "original_line": "#12 = 8.0   (PASO RADIAL MAXIMO DESBASTE XY)"
      },
      {
        "num": 14,
        "value": 0.0,
        "comment": "Z INICIAL DE CORTE / REINICIO - EJ: -10.0",
        "line_idx": 17,
        "original_line": "#14 = 0.0   (Z INICIAL DE CORTE / REINICIO - EJ: -10.0)"
      },
      {
        "num": 15,
        "value": 4.0,
        "comment": "RADIO DEL ARCO ENTRADA Y SALIDA ACABADO",
        "line_idx": 18,
        "original_line": "#15 = 4.0   (RADIO DEL ARCO ENTRADA Y SALIDA ACABADO)"
      },
      {
        "num": 16,
        "value": 0.0,
        "comment": "OPCION: 0=AMBOS, 1=SOLO DESBASTE, 2=SOLO ACABADO",
        "line_idx": 19,
        "original_line": "#16 = 0.0   (OPCION: 0=AMBOS, 1=SOLO DESBASTE, 2=SOLO ACABADO)"
      }
    ],
    "full_content": "O1003 (CAJA CIRCULAR DESBASTE-ACABADO CON REINICIO EN Z)\n\n(========================================)\n(--- VARIABLES DE ENTRADA DEL OPERARIO ---)\n(========================================)\n#1 = 80.0   (DIAMETRO FINAL DE LA CAJA)\n#2 = 12.0   (DIAMETRO DE LA HERRAMIENTA)\n#3 = 20.0   (PROFUNDIDAD TOTAL Z FINAL - VALOR POSITIVO EJ: 20)\n#4 = 5.0    (PROFUNDIDAD POR PASADA EN Z DESBASTE)\n#5 = 0.5    (SOBREMATERIAL RADIAL PARA EL ACABADO)\n#6 = 160.0  (Vc - VELOCIDAD DE CORTE EN m/min)\n#7 = 4.0    (NUMERO DE INSERTOS O LABIOS)\n#8 = 0.08   (fz - AVANCE POR INSERTO EN mm/rev)\n#9 = 50.0   (PLANO DE SEGURIDAD RETROCESO R)\n#10 = 0.0   (CENTRO DE LA CAJA EN X)\n#11 = 0.0   (CENTRO DE LA CAJA EN Y)\n#12 = 8.0   (PASO RADIAL MAXIMO DESBASTE XY)\n#14 = 0.0   (Z INICIAL DE CORTE / REINICIO - EJ: -10.0)\n#15 = 4.0   (RADIO DEL ARCO ENTRADA Y SALIDA ACABADO)\n#16 = 0.0   (OPCION: 0=AMBOS, 1=SOLO DESBASTE, 2=SOLO ACABADO)\n(========================================)\n\n(--- COMPROBACIONES DE SEGURIDAD BASICAS ---)\nIF [#2 GE #1] GOTO 9001\nIF [#14 LE -#3] GOTO 9003\nIF [#16 LT 0] GOTO 9005\nIF [#16 GT 2] GOTO 9005\n\n(--- CALCULOS DE PARAMETROS DE CORTE ---)\n#100 = ROUND[[#6 * 1000] / [3.1416 * #2]] (CALCULO DE RPM)\n#101 = ROUND[#100 * #7 * #8] (AVANCE LINEAL NOMINAL F)\n\n(--- CALCULOS INTERNOS DE GEOMETRIA ---)\n#102 = #1 - [#5 * 2] (DIAMETRO EFECTIVO DEL DESBASTE)\n#103 = [#102 / 2] - [#2 / 2] (RADIO DE TRAYECTORIA DESBASTE)\n#113 = [#1 / 2] - [#2 / 2] (RADIO DE TRAYECTORIA ACABADO)\n\n(--- VALIDACION DE ARCO ---)\nIF [#15 GE #113] GOTO 9004\n\n(--- CALCULO AVANCES COMPENSADOS PARA INTERPOLACION ---)\n#106 = ROUND[#101 * [#102 - #2] / #102] (AVANCE COMPENSADO DESBASTE)\n#116 = ROUND[#101 * [#1 - #2] / #1] (AVANCE COMPENSADO ACABADO)\n#104 = -#3 (Z FINAL EN COORDENADA NEGATIVA)\n\n(--- ENCABEZADO DE MAQUINA Y POSICIONAMIENTO ---)\nG90 G54 G17 G40 G80 G49\nG00 X#10 Y#11 (POSICIONAMIENTO DIRECTO AL CENTRO DE LA CAJA)\nG43 H2 Z#9 (*** VERIFICAR CORRECTOR DE ALTURA H ***)\nS#100 M03\nM08\n\n(--- ACERCAMIENTO RAPIDO OPTIMIZADO AL Z DE REINICIO ---)\nG00 Z[#14 + 1.0] (BAJA EN RAPIDO HASTA 1MM POR ENCIMA DEL Z INICIAL)\n\n(--- CONTROL DE FLUJO Y SELECCION DE CICLO ---)\nIF [#16 EQ 2] GOTO 200 (SALTA DIRECTO A RUTINA DE ACABADO)\n\n(========================================)\n(       RUTINA DE DESBASTE (N100)        )\n(========================================)\n#105 = #14 (INICIALIZA PROFUNDIDAD Z ACTUAL)\n\nN100 (--- INICIO BUCLE PROFUNDIDAD Z ---)\nIF [#105 LE #104] GOTO 190\n#105 = #105 - #4\nIF [#105 LT #104] THEN #105 = #104\n\nG00 X#10 Y#11 (ASEGURA POSICION EN CENTRO ANTES DE BAJAR)\nG01 Z#105 F[#101 / 2] (BAJADA EN Z AL NUEVO NIVEL)\n\n#107 = 0 (INICIALIZA CRECIMIENTO RADIAL ACTUAL)\n\nN110 (--- BUCLE DE EXPANSI\u00d3N RADIAL XY ---)\n#107 = #107 + #12\nIF [#107 LT #103] GOTO 115\n#107 = #103 (LIMITA AL RADIO EFECTIVO DE DESBASTE EXACTO)\n\nN115\nG01 X[#10 + #107] F#101 (AVANCE LINEAL AL NUEVO RADIO)\nG03 I-[#107] J0. F#106 (INTERPOLACION CIRCULAR COMPLETA)\n\nIF [#107 LT #103] GOTO 110 (REPITE HASTA ALCANZAR DIAMETRO DESBASTE)\n\n(*** LEVANTAMIENTO DE SEGURIDAD OBLIGATORIO ***)\nG00 Z#9 (SUBE AL PLANO SEGURO R PARA DESPEJAR)\nG00 X#10 Y#11 (RETORNO AL CENTRO EN EL AIRE PARA NO DEJAR MARCAS)\nG00 Z[#105 + 1.0] (BAJA EN RAPIDO AL ULTIMO NIVEL MECANIZADO PARA AHORRAR TIEMPO)\n\nGOTO 100 (REPETIR BUCLE Z HASTA LLEGAR AL FONDO)\n\nN190 (--- FIN DE DESBASTE ---)\nIF [#16 EQ 1] GOTO 999 (SI LA OPCION ES 1, FINALIZA AQUI)\n\n(========================================)\n(       RUTINA DE ACABADO (N200)         )\n(========================================)\nN200\nG00 X#10 Y#11 (POSICIONA EN EL CENTRO EXACTO)\nG01 Z#104 F[#101 / 2] (BAJA DIRECTAMENTE A LA PROFUNDIDAD Z FINAL)\n\n(PREPARACION DE COORDENADA PARA ARCO TANGENCIAL)\nG01 X[#10 - #15] Y[#11 + #113 - #15] F#101\n\n(ARCO DE ENTRADA TANGENCIAL DE 90 GRADOS)\nG03 X[#10] Y[#11 + #113] I#15 J0. F#116\n\n(INTERPOLACION CIRCULAR COMPLETA A DIAMETRO FINAL)\nG03 I0. J-[#113]\n\n(ARCO DE SALIDA TANGENCIAL DE 90 GRADOS)\nG03 X[#10 + #15] Y[#11 + #113 - #15] I0. J-[#15]\n\n(*** LEVANTAMIENTO DE SEGURIDAD ***)\nG00 Z#9 (RETIRADA DIRECTA Z)\nG00 X#10 Y#11 (VUELTA AL CENTRO)\n\nN999 (--- FIN DE MECANIZADO ---)\nG00 Z#9\nM09\nM05\nG28 G91 Z0.\nG90\nM30\n\n(--- ALARMAS Y ERRORES ---)\nN9001 #3000=1 (ERROR: HTA MAYOR QUE CAJA)\nN9003 #3000=3 (ERROR: Z INICIAL INFERIOR A Z FINAL)\nN9004 #3000=4 (ERROR: RADIO ENTRADA EXCESIVO)\nN9005 #3000=5 (ERROR: OPCION DE CICLO DEBE SER 0, 1 O 2)"
  },
  {
    "filename": "Desbaste_Acabado_cajera_rectangular.nc",
    "title": "O1004 (CAJA RECTANGULAR DESBASTE Y ACABADO V3)",
    "variables": [
      {
        "num": 1,
        "value": 120.0,
        "comment": "LONGITUD X DE LA CAJA",
        "line_idx": 5,
        "original_line": "#1 = 120.0  (LONGITUD X DE LA CAJA)"
      },
      {
        "num": 2,
        "value": 80.0,
        "comment": "ANCHO Y DE LA CAJA",
        "line_idx": 6,
        "original_line": "#2 = 80.0   (ANCHO Y DE LA CAJA)"
      },
      {
        "num": 3,
        "value": 15.0,
        "comment": "RADIO EN LAS ESQUINAS DE LA PIEZA",
        "line_idx": 7,
        "original_line": "#3 = 15.0   (RADIO EN LAS ESQUINAS DE LA PIEZA)"
      },
      {
        "num": 4,
        "value": 12.0,
        "comment": "DIAMETRO DE LA HERRAMIENTA",
        "line_idx": 8,
        "original_line": "#4 = 12.0   (DIAMETRO DE LA HERRAMIENTA)"
      },
      {
        "num": 5,
        "value": 20.0,
        "comment": "PROFUNDIDAD TOTAL Z FINAL - VALOR POSITIVO",
        "line_idx": 9,
        "original_line": "#5 = 20.0   (PROFUNDIDAD TOTAL Z FINAL - VALOR POSITIVO)"
      },
      {
        "num": 6,
        "value": 5.0,
        "comment": "PROFUNDIDAD POR PASADA EN Z DESBASTE",
        "line_idx": 10,
        "original_line": "#6 = 5.0    (PROFUNDIDAD POR PASADA EN Z DESBASTE)"
      },
      {
        "num": 7,
        "value": 0.5,
        "comment": "SOBREMATERIAL RADIAL PARA EL ACABADO",
        "line_idx": 11,
        "original_line": "#7 = 0.5    (SOBREMATERIAL RADIAL PARA EL ACABADO)"
      },
      {
        "num": 8,
        "value": 160.0,
        "comment": "Vc - VELOCIDAD DE CORTE EN m/min",
        "line_idx": 12,
        "original_line": "#8 = 160.0  (Vc - VELOCIDAD DE CORTE EN m/min)"
      },
      {
        "num": 9,
        "value": 4.0,
        "comment": "NUMERO DE INSERTOS O LABIOS",
        "line_idx": 13,
        "original_line": "#9 = 4.0    (NUMERO DE INSERTOS O LABIOS)"
      },
      {
        "num": 10,
        "value": 0.08,
        "comment": "fz - AVANCE POR INSERTO EN mm/rev",
        "line_idx": 14,
        "original_line": "#10 = 0.08  (fz - AVANCE POR INSERTO EN mm/rev)"
      },
      {
        "num": 11,
        "value": 50.0,
        "comment": "PLANO DE SEGURIDAD RETROCESO R",
        "line_idx": 15,
        "original_line": "#11 = 50.0  (PLANO DE SEGURIDAD RETROCESO R)"
      },
      {
        "num": 12,
        "value": 0.0,
        "comment": "CENTRO DE LA CAJA EN X",
        "line_idx": 16,
        "original_line": "#12 = 0.0   (CENTRO DE LA CAJA EN X)"
      },
      {
        "num": 13,
        "value": 0.0,
        "comment": "CENTRO DE LA CAJA EN Y",
        "line_idx": 17,
        "original_line": "#13 = 0.0   (CENTRO DE LA CAJA EN Y)"
      },
      {
        "num": 14,
        "value": 8.0,
        "comment": "PASO RADIAL MAXIMO DESBASTE XY",
        "line_idx": 18,
        "original_line": "#14 = 8.0   (PASO RADIAL MAXIMO DESBASTE XY)"
      },
      {
        "num": 15,
        "value": -5.0,
        "comment": "Z INICIAL DE CORTE / REINICIO",
        "line_idx": 19,
        "original_line": "#15 = -5.0  (Z INICIAL DE CORTE / REINICIO)"
      },
      {
        "num": 16,
        "value": 5.0,
        "comment": "RADIO DEL ARCO ENTRADA Y SALIDA ACABADO",
        "line_idx": 20,
        "original_line": "#16 = 5.0   (RADIO DEL ARCO ENTRADA Y SALIDA ACABADO)"
      },
      {
        "num": 17,
        "value": 2.0,
        "comment": "OPCION: 0=AMBOS, 1=SOLO DESBASTE, 2=SOLO ACABADO",
        "line_idx": 21,
        "original_line": "#17 = 2.0   (OPCION: 0=AMBOS, 1=SOLO DESBASTE, 2=SOLO ACABADO)"
      }
    ],
    "full_content": "O1004 (CAJA RECTANGULAR DESBASTE Y ACABADO V3)\n\n(========================================)\n(--- VARIABLES DE ENTRADA DEL OPERARIO ---)\n(========================================)\n#1 = 120.0  (LONGITUD X DE LA CAJA)\n#2 = 80.0   (ANCHO Y DE LA CAJA)\n#3 = 15.0   (RADIO EN LAS ESQUINAS DE LA PIEZA)\n#4 = 12.0   (DIAMETRO DE LA HERRAMIENTA)\n#5 = 20.0   (PROFUNDIDAD TOTAL Z FINAL - VALOR POSITIVO)\n#6 = 5.0    (PROFUNDIDAD POR PASADA EN Z DESBASTE)\n#7 = 0.5    (SOBREMATERIAL RADIAL PARA EL ACABADO)\n#8 = 160.0  (Vc - VELOCIDAD DE CORTE EN m/min)\n#9 = 4.0    (NUMERO DE INSERTOS O LABIOS)\n#10 = 0.08  (fz - AVANCE POR INSERTO EN mm/rev)\n#11 = 50.0  (PLANO DE SEGURIDAD RETROCESO R)\n#12 = 0.0   (CENTRO DE LA CAJA EN X)\n#13 = 0.0   (CENTRO DE LA CAJA EN Y)\n#14 = 8.0   (PASO RADIAL MAXIMO DESBASTE XY)\n#15 = -5.0  (Z INICIAL DE CORTE / REINICIO)\n#16 = 5.0   (RADIO DEL ARCO ENTRADA Y SALIDA ACABADO)\n#17 = 2.0   (OPCION: 0=AMBOS, 1=SOLO DESBASTE, 2=SOLO ACABADO)\n(========================================)\n\n(--- COMPROBACIONES DE SEGURIDAD BASICAS ---)\nIF [#4 GE #1] GOTO 9001\nIF [#4 GE #2] GOTO 9001\nIF [[#4 / 2] GT #3] GOTO 9002\nIF [#15 LE -#5] GOTO 9003\nIF [#17 LT 0] GOTO 9005\nIF [#17 GT 2] GOTO 9005\n\n(--- CALCULOS DE PARAMETROS DE CORTE ---)\n#100 = ROUND[[#8 * 1000] / [3.1416 * #4]] (CALCULO DE RPM)\n#101 = ROUND[#100 * #9 * #10] (AVANCE LINEAL NOMINAL F)\n#102 = #4 / 2 (RADIO DE LA HERRAMIENTA)\n\n(--- GEOMETRIA MAXIMA DE DESBASTE ---)\n#103 = [#1 / 2] - #7 - #102 (DIST. MAX X DESBASTE)\n#104 = [#2 / 2] - #7 - #102 (DIST. MAX Y DESBASTE)\n#105 = #3 - #7 - #102 (RADIO TRAYECTORIA ESQUINA DESBASTE)\nIF [#105 LT 0] THEN #105 = 0\n\n(--- GEOMETRIA MAXIMA DE ACABADO ---)\n#113 = [#1 / 2] - #102 (DIST. MAX X ACABADO)\n#114 = [#2 / 2] - #102 (DIST. MAX Y ACABADO)\n#115 = #3 - #102 (RADIO TRAYECTORIA ESQUINA ACABADO)\nIF [#115 LT 0] THEN #115 = 0\n\n(--- CALCULO PROPORCIONAL PARA DESBASTE ---)\n#106 = #103\nIF [#104 GT #103] THEN #106 = #104\nIF [#106 LE 0] THEN #106 = 0.001 \n#107 = ROUND[#101 * #105 / [#105 + #102]] (AVANCE COMPENSADO ARCOS DESBASTE)\n#108 = -#5 (Z FINAL EN COORDENADA NEGATIVA)\n\n(--- ENCABEZADO DE MAQUINA Y POSICIONAMIENTO ---)\nG90 G54 G17 G40 G80 G49\nG00 X#12 Y#13 \nG43 H2 Z#11 (*** VERIFICAR CORRECTOR DE ALTURA H ***)\nS#100 M03\nM08\n\nG00 Z[#15 + 1.0]\n\nIF [#17 EQ 2] GOTO 200\n\n(========================================)\n(       RUTINA DE DESBASTE (N100)        )\n(========================================)\n#109 = #15 \n\nN100 \nIF [#109 LE #108] GOTO 190\n#109 = #109 - #6\nIF [#109 LT #108] THEN #109 = #108\n\nG00 X#12 Y#13 \nG01 Z#109 F[#101 / 2] \n\n#120 = 0 \n\nN110 (--- BUCLE RADIAL XY ---)\n#120 = #120 + #14 \n#121 = #120 / #106 \nIF [#121 LT 1.0] GOTO 115\n#121 = 1.0 \n\nN115\n#122 = #103 * #121 \n#123 = #104 * #121 \n#124 = #105 * #121 \n\n(TRAZADO DESBASTE CLIMB MILLING CCW)\nG01 X[#12] Y[#13 + #123] F#101 (CENTRO BORDE SUPERIOR)\nG01 X[#12 - #122 + #124] (HACIA ESQ. SUP-IZQ)\nIF [#124 LE 0.001] GOTO 21\nG03 X[#12 - #122] Y[#13 + #123 - #124] I0. J-[#124] F#107\nGOTO 22\nN21 G01 X[#12 - #122] Y[#13 + #123]\n\nN22 G01 Y[#13 - #123 + #124] F#101 (HACIA ESQ. INF-IZQ)\nIF [#124 LE 0.001] GOTO 23\nG03 X[#12 - #122 + #124] Y[#13 - #123] I[#124] J0. F#107\nGOTO 24\nN23 G01 X[#12 - #122] Y[#13 - #123]\n\nN24 G01 X[#12 + #122 - #124] F#101 (HACIA ESQ. INF-DER)\nIF [#124 LE 0.001] GOTO 25\nG03 X[#12 + #122] Y[#13 - #123 + #124] I0. J[#124] F#107\nGOTO 26\nN25 G01 X[#12 + #122] Y[#13 - #123]\n\nN26 G01 Y[#13 + #123 - #124] F#101 (HACIA ESQ. SUP-DER)\nIF [#124 LE 0.001] GOTO 27\nG03 X[#12 + #122 - #124] Y[#13 + #123] I-[#124] J0. F#107\nGOTO 28\nN27 G01 X[#12 + #122] Y[#13 + #123]\n\nN28 G01 X[#12] F#101 \n\nIF [#121 LT 1.0] GOTO 110 \n\n(*** LEVANTAMIENTO DE SEGURIDAD ***)\nG00 Z#11 \nG00 X#12 Y#13 \nG00 Z[#109 + 1.0] \n\nGOTO 100 \n\nN190 \nIF [#17 EQ 1] GOTO 999 \n\n(========================================)\n(       RUTINA DE ACABADO (N200)         )\n(========================================)\nN200\nG00 X#12 Y#13 \nG01 Z#108 F[#101 / 2] \n\n#116 = ROUND[#101 * #115 / [#115 + #102]] \n\n(PREPARACION Y ENTRADA TANGENCIAL)\nG01 X[#12 - #16] Y[#13 - #114 + #16] F#101\nG03 X[#12] Y[#13 - #114] I[#16] J0. F#116\n\n(RECORRIDO PERIMETRAL CCW - INICIA HACIA LA DERECHA)\nG01 X[#12 + #113 - #115] F#101 (HACIA ESQ. INF-DER)\nIF [#115 LE 0.001] GOTO 31\nG03 X[#12 + #113] Y[#13 - #114 + #115] I0. J[#115] F#116\nGOTO 32\nN31 G01 X[#12 + #113] Y[#13 - #114]\n\nN32 G01 Y[#13 + #114 - #115] F#101 (HACIA ESQ. SUP-DER)\nIF [#115 LE 0.001] GOTO 33\nG03 X[#12 + #113 - #115] Y[#13 + #114] I-[#115] J0. F#116\nGOTO 34\nN33 G01 X[#12 + #113] Y[#13 + #114]\n\nN34 G01 X[#12 - #113 + #115] F#101 (HACIA ESQ. SUP-IZQ)\nIF [#115 LE 0.001] GOTO 35\nG03 X[#12 - #113] Y[#13 + #114 - #115] I0. J-[#115] F#116\nGOTO 36\nN35 G01 X[#12 - #113] Y[#13 + #114]\n\nN36 G01 Y[#13 - #114 + #115] F#101 (HACIA ESQ. INF-IZQ)\nIF [#115 LE 0.001] GOTO 37\nG03 X[#12 - #113 + #115] Y[#13 - #114] I[#115] J0. F#116\nGOTO 38\nN37 G01 X[#12 - #113] Y[#13 - #114]\n\nN38 G01 X[#12] F#101 (RETORNO A CENTRO BORDE INFERIOR)\n\n(SALIDA TANGENCIAL)\nG03 X[#12 + #16] Y[#13 - #114 + #16] I0. J[#16]\n\n(*** LEVANTAMIENTO DE SEGURIDAD ***)\nG00 Z#11\nG00 X#12 Y#13\n\nN999 \nG00 Z#11\nM09\nM05\nG28 G91 Z0.\nG90\nM30\n\n(--- ALARMAS Y ERRORES ---)\nN9001 #3000=1 (ERROR: HTA MAYOR QUE CAJA)\nN9002 #3000=2 (ERROR: RADIO HTA MAYOR A RADIO ESQUINA)\nN9003 #3000=3 (ERROR: Z INICIAL INFERIOR A Z FINAL)\nN9005 #3000=5 (ERROR: OPCION CICLO 0-1-2)"
  },
  {
    "filename": "Desbaste_Acabado_Ranura Cerrada.nc",
    "title": "O1005 (RANURA CERRADA INCLINADA V2 - CLIMB MILLING CCW)",
    "variables": [
      {
        "num": 1,
        "value": 100.0,
        "comment": "LONGITUD L ENTRE CENTROS DE LA RANURA",
        "line_idx": 5,
        "original_line": "#1 = 100.0  (LONGITUD L ENTRE CENTROS DE LA RANURA)"
      },
      {
        "num": 2,
        "value": 20.0,
        "comment": "RADIO DE LA RANURA - ANCHO TOTAL SERA EL DOBLE",
        "line_idx": 6,
        "original_line": "#2 = 20.0   (RADIO DE LA RANURA - ANCHO TOTAL SERA EL DOBLE)"
      },
      {
        "num": 3,
        "value": 0.0,
        "comment": "ANGULO DE INCLINACION EN GRADOS",
        "line_idx": 7,
        "original_line": "#3 = 0 (ANGULO DE INCLINACION EN GRADOS)"
      },
      {
        "num": 4,
        "value": 12.0,
        "comment": "DIAMETRO DE LA HERRAMIENTA",
        "line_idx": 8,
        "original_line": "#4 = 12.0   (DIAMETRO DE LA HERRAMIENTA)"
      },
      {
        "num": 5,
        "value": 15.0,
        "comment": "PROFUNDIDAD TOTAL Z FINAL - VALOR POSITIVO",
        "line_idx": 9,
        "original_line": "#5 = 15.0   (PROFUNDIDAD TOTAL Z FINAL - VALOR POSITIVO)"
      },
      {
        "num": 6,
        "value": 5.0,
        "comment": "PROFUNDIDAD POR PASADA EN Z DESBASTE",
        "line_idx": 10,
        "original_line": "#6 = 5.0    (PROFUNDIDAD POR PASADA EN Z DESBASTE)"
      },
      {
        "num": 7,
        "value": 0.5,
        "comment": "SOBREMATERIAL RADIAL PARA EL ACABADO",
        "line_idx": 11,
        "original_line": "#7 = 0.5    (SOBREMATERIAL RADIAL PARA EL ACABADO)"
      },
      {
        "num": 8,
        "value": 160.0,
        "comment": "Vc - VELOCIDAD DE CORTE EN m/min",
        "line_idx": 12,
        "original_line": "#8 = 160.0  (Vc - VELOCIDAD DE CORTE EN m/min)"
      },
      {
        "num": 9,
        "value": 4.0,
        "comment": "NUMERO DE INSERTOS O LABIOS",
        "line_idx": 13,
        "original_line": "#9 = 4.0    (NUMERO DE INSERTOS O LABIOS)"
      },
      {
        "num": 10,
        "value": 0.08,
        "comment": "fz - AVANCE POR INSERTO EN mm/rev",
        "line_idx": 14,
        "original_line": "#10 = 0.08  (fz - AVANCE POR INSERTO EN mm/rev)"
      },
      {
        "num": 11,
        "value": 50.0,
        "comment": "PLANO DE SEGURIDAD RETROCESO R",
        "line_idx": 15,
        "original_line": "#11 = 50.0  (PLANO DE SEGURIDAD RETROCESO R)"
      },
      {
        "num": 12,
        "value": 0.0,
        "comment": "COORDENADA X DEL CENTRO DE LA RANURA",
        "line_idx": 16,
        "original_line": "#12 = 0.0   (COORDENADA X DEL CENTRO DE LA RANURA)"
      },
      {
        "num": 13,
        "value": 0.0,
        "comment": "COORDENADA Y DEL CENTRO DE LA RANURA",
        "line_idx": 17,
        "original_line": "#13 = 0.0   (COORDENADA Y DEL CENTRO DE LA RANURA)"
      },
      {
        "num": 14,
        "value": 6.0,
        "comment": "PASO RADIAL MAXIMO DESBASTE XY",
        "line_idx": 18,
        "original_line": "#14 = 6.0   (PASO RADIAL MAXIMO DESBASTE XY)"
      },
      {
        "num": 15,
        "value": -5.0,
        "comment": "Z INICIAL DE CORTE / REINICIO",
        "line_idx": 19,
        "original_line": "#15 = -5.0  (Z INICIAL DE CORTE / REINICIO)"
      },
      {
        "num": 16,
        "value": 4.0,
        "comment": "RADIO DEL ARCO ENTRADA Y SALIDA ACABADO",
        "line_idx": 20,
        "original_line": "#16 = 4.0   (RADIO DEL ARCO ENTRADA Y SALIDA ACABADO)"
      },
      {
        "num": 17,
        "value": 0.0,
        "comment": "OPCION: 0=AMBOS, 1=SOLO DESBASTE, 2=SOLO ACABADO",
        "line_idx": 21,
        "original_line": "#17 = 0.0   (OPCION: 0=AMBOS, 1=SOLO DESBASTE, 2=SOLO ACABADO)"
      }
    ],
    "full_content": "O1005 (RANURA CERRADA INCLINADA V2 - CLIMB MILLING CCW)\n\n(========================================)\n(--- VARIABLES DE ENTRADA DEL OPERARIO ---)\n(========================================)\n#1 = 100.0  (LONGITUD L ENTRE CENTROS DE LA RANURA)\n#2 = 20.0   (RADIO DE LA RANURA - ANCHO TOTAL SERA EL DOBLE)\n#3 = 0 (ANGULO DE INCLINACION EN GRADOS)\n#4 = 12.0   (DIAMETRO DE LA HERRAMIENTA)\n#5 = 15.0   (PROFUNDIDAD TOTAL Z FINAL - VALOR POSITIVO)\n#6 = 5.0    (PROFUNDIDAD POR PASADA EN Z DESBASTE)\n#7 = 0.5    (SOBREMATERIAL RADIAL PARA EL ACABADO)\n#8 = 160.0  (Vc - VELOCIDAD DE CORTE EN m/min)\n#9 = 4.0    (NUMERO DE INSERTOS O LABIOS)\n#10 = 0.08  (fz - AVANCE POR INSERTO EN mm/rev)\n#11 = 50.0  (PLANO DE SEGURIDAD RETROCESO R)\n#12 = 0.0   (COORDENADA X DEL CENTRO DE LA RANURA)\n#13 = 0.0   (COORDENADA Y DEL CENTRO DE LA RANURA)\n#14 = 6.0   (PASO RADIAL MAXIMO DESBASTE XY)\n#15 = -5.0  (Z INICIAL DE CORTE / REINICIO)\n#16 = 4.0   (RADIO DEL ARCO ENTRADA Y SALIDA ACABADO)\n#17 = 0.0   (OPCION: 0=AMBOS, 1=SOLO DESBASTE, 2=SOLO ACABADO)\n(========================================)\n\n(--- COMPROBACIONES DE SEGURIDAD BASICAS ---)\nIF [[#4 / 2] GE #2] GOTO 9001\nIF [#15 LE -#5] GOTO 9003\nIF [#17 LT 0] GOTO 9005\nIF [#17 GT 2] GOTO 9005\n\n(--- CALCULOS DE PARAMETROS DE CORTE ---)\n#100 = ROUND[[#8 * 1000] / [3.1416 * #4]] (CALCULO DE RPM)\n#101 = ROUND[#100 * #9 * #10] (AVANCE NOMINAL)\n#102 = #4 / 2 (RADIO DE LA HERRAMIENTA)\n\n(--- CALCULOS DE GEOMETRIA MAXIMA ---)\n#103 = #2 - #7 - #102 (RADIO MAXIMO DESBASTE)\nIF [#103 LT 0] THEN #103 = 0 \n#113 = #2 - #102 (RADIO MAXIMO ACABADO)\n#104 = -#5 (Z FINAL EN COORDENADA NEGATIVA)\n\n(--- TRIGONOMETRIA PRECALCULADA ---)\n#130 = COS[#3]\n#131 = SIN[#3]\n#132 = #1 / 2 (MITAD DISTANCIA ENTRE CENTROS)\n\n(--- CENTROS DE LOS ARCOS DE LA RANURA C1 Y C2 ---)\n#141 = [#132 * #130] + #12 (C1 X - DERECHA)\n#142 = [#132 * #131] + #13 (C1 Y)\n#143 = [-#132 * #130] + #12 (C2 X - IZQUIERDA)\n#144 = [-#132 * #131] + #13 (C2 Y)\n\n(--- ENCABEZADO Y POSICIONAMIENTO ---)\nG90 G54 G17 G40 G80 G49\nG00 X#12 Y#13 \nG43 H2 Z#11 (*** VERIFICAR CORRECTOR H ***)\nS#100 M03\nM08\n\nG00 Z[#15 + 1.0]\n\nIF [#17 EQ 2] GOTO 200\n\n(========================================)\n(       RUTINA DE DESBASTE (N100)        )\n(========================================)\n#105 = #15\n\nN100 (--- BUCLE PROFUNDIDAD Z ---)\nIF [#105 LE #104] GOTO 190\n#105 = #105 - #6\nIF [#105 LT #104] THEN #105 = #104\n\nG00 X#12 Y#13\nG01 Z#105 F[#101 / 2]\n\n#120 = 0\n\nN110 (--- BUCLE DE EXPANSION RADIAL ---)\nIF [#120 GT 0] GOTO 115\n\n(PASO CENTRAL)\nG01 X#141 Y#142 F#101\nG01 X#143 Y#144\nG01 X#12 Y#13\nGOTO 118\n\nN115 (--- PASOS EXPANDIDOS CLIMB MILLING ---)\n#151 = -#120 * #131 (dX PERPENDICULAR)\n#152 = #120 * #130  (dY PERPENDICULAR)\n\n#106 = ROUND[#101 * #120 / [#120 + #102]] \n\n#161 = #141 + #151 (P1: SUP DER)\n#162 = #142 + #152\n#163 = #143 + #151 (P2: SUP IZQ)\n#164 = #144 + #152\n#165 = #143 - #151 (P3: INF IZQ)\n#166 = #144 - #152\n#167 = #141 - #151 (P4: INF DER)\n#168 = #142 - #152\n\n#169 = #12 + #151 (M1: MEDIO SUPERIOR)\n#170 = #13 + #152\n\n(TRAZADO ANTIHORARIO CCW)\nG01 X#169 Y#170 F#101 \nG01 X#163 Y#164 (LINEA A P2)\nG03 X#165 Y#166 I[-#151] J[-#152] F#106 (ARCO C2)\nG01 X#167 Y#168 F#101 (LINEA A P4)\nG03 X#161 Y#162 I[#151] J[#152] F#106 (ARCO C1)\nG01 X#169 Y#170 F#101 (CIERRE EN M1)\n\nN118\nIF [#120 GE #103] GOTO 119\n#120 = #120 + #14\nIF [#120 GT #103] THEN #120 = #103\nGOTO 110\n\nN119 (*** LEVANTAMIENTO DE SEGURIDAD ***)\nG00 Z#11\nG00 X#12 Y#13\nG00 Z[#105 + 1.0]\n\nGOTO 100\n\nN190 \nIF [#17 EQ 1] GOTO 999 \n\n(========================================)\n(       RUTINA DE ACABADO (N200)         )\n(========================================)\nN200\nG00 X#12 Y#13 \nG01 Z#104 F[#101 / 2] \n\n#151 = -#113 * #131 \n#152 = #113 * #130  \n#169 = #12 + #151 (M1)\n#170 = #13 + #152 \n\n#133 = #16 * #130 \n#134 = #16 * #131 \n#135 = -#16 * #131 \n#136 = #16 * #130 \n\n(ENTRADA Y SALIDA TANGENCIAL CCW)\n#171 = #169 + #133 - #135 \n#172 = #170 + #134 - #136 \n#173 = #169 - #133 - #135 \n#174 = #170 - #134 - #136 \n\n#161 = #141 + #151 (P1)\n#162 = #142 + #152 \n#163 = #143 + #151 (P2)\n#164 = #144 + #152 \n#165 = #143 - #151 (P3)\n#166 = #144 - #152 \n#167 = #141 - #151 (P4)\n#168 = #142 - #152 \n\n#116 = ROUND[#101 * #113 / [#113 + #102]] \n\nG01 X#171 Y#172 F#101 \nG03 X#169 Y#170 I[-#133] J[-#134] F#116 (ARCO ENTRADA)\nG01 X#163 Y#164 F#101\nG03 X#165 Y#166 I[-#151] J[-#152] F#116 (ARCO C2)\nG01 X#167 Y#168 F#101\nG03 X#161 Y#162 I[#151] J[#152] F#116 (ARCO C1)\nG01 X#169 Y#170 F#101\nG03 X#173 Y#174 I[-#135] J[-#136] F#116 (ARCO SALIDA)\n\n(*** LEVANTAMIENTO DE SEGURIDAD ***)\nG00 Z#11\nG00 X#12 Y#13\n\nN999 \nG00 Z#11\nM09\nM05\nG28 G91 Z0.\nG90\nM30\n\nN9001 #3000=1 (ERROR: HTA MAYOR QUE RANURA)\nN9003 #3000=3 (ERROR: Z INICIAL INFERIOR A Z FINAL)\nN9005 #3000=5 (ERROR: OPCION DE CICLO DEBE SER 0-1-2)"
  },
  {
    "filename": "Fresado de Roscas Helicoidal.nc",
    "title": "O1006 (FRESADO DE ROSCAS RH - CLIMB MILLING CCW)",
    "variables": [
      {
        "num": 1,
        "value": 64.0,
        "comment": "DIAMETRO NOMINAL FIN DE LA ROSCA",
        "line_idx": 5,
        "original_line": "#1 = 64.0   (DIAMETRO NOMINAL FIN DE LA ROSCA)"
      },
      {
        "num": 2,
        "value": 20.0,
        "comment": "DIAMETRO DE LA FRESA DE ROSCAR",
        "line_idx": 6,
        "original_line": "#2 = 20.0   (DIAMETRO DE LA FRESA DE ROSCAR)"
      },
      {
        "num": 3,
        "value": 30.0,
        "comment": "PROFUNDIDAD TOTAL DE LA ROSCA - Z FINAL POSITIVO",
        "line_idx": 7,
        "original_line": "#3 = 30.0   (PROFUNDIDAD TOTAL DE LA ROSCA - Z FINAL POSITIVO)"
      },
      {
        "num": 4,
        "value": 2.0,
        "comment": "PASO DE LA ROSCA / PITCH - EJ: 2.0mm",
        "line_idx": 8,
        "original_line": "#4 = 2.0    (PASO DE LA ROSCA / PITCH - EJ: 2.0mm)"
      },
      {
        "num": 5,
        "value": 1.0,
        "comment": "NUMERO DE VUELTAS: 1=FRESA MULTIPASO, VARIAS=FRESA UN FILO",
        "line_idx": 9,
        "original_line": "#5 = 1.0    (NUMERO DE VUELTAS: 1=FRESA MULTIPASO, VARIAS=FRESA UN FILO)"
      },
      {
        "num": 6,
        "value": 120.0,
        "comment": "Vc - VELOCIDAD DE CORTE EN m/min",
        "line_idx": 10,
        "original_line": "#6 = 120.0  (Vc - VELOCIDAD DE CORTE EN m/min)"
      },
      {
        "num": 7,
        "value": 4.0,
        "comment": "NUMERO DE INSERTOS O LABIOS",
        "line_idx": 11,
        "original_line": "#7 = 4.0    (NUMERO DE INSERTOS O LABIOS)"
      },
      {
        "num": 8,
        "value": 0.05,
        "comment": "fz - AVANCE POR INSERTO EN mm/rev",
        "line_idx": 12,
        "original_line": "#8 = 0.05   (fz - AVANCE POR INSERTO EN mm/rev)"
      },
      {
        "num": 9,
        "value": 50.0,
        "comment": "PLANO DE SEGURIDAD RETROCESO R",
        "line_idx": 13,
        "original_line": "#9 = 50.0   (PLANO DE SEGURIDAD RETROCESO R)"
      },
      {
        "num": 10,
        "value": 0.0,
        "comment": "COORDENADA X DEL CENTRO DEL AGUJERO",
        "line_idx": 14,
        "original_line": "#10 = 0.0   (COORDENADA X DEL CENTRO DEL AGUJERO)"
      },
      {
        "num": 11,
        "value": 0.0,
        "comment": "COORDENADA Y DEL CENTRO DEL AGUJERO",
        "line_idx": 15,
        "original_line": "#11 = 0.0   (COORDENADA Y DEL CENTRO DEL AGUJERO)"
      }
    ],
    "full_content": "O1006 (FRESADO DE ROSCAS RH - CLIMB MILLING CCW)\n\n(========================================)\n(--- VARIABLES DE ENTRADA DEL OPERARIO ---)\n(========================================)\n#1 = 64.0   (DIAMETRO NOMINAL FIN DE LA ROSCA)\n#2 = 20.0   (DIAMETRO DE LA FRESA DE ROSCAR)\n#3 = 30.0   (PROFUNDIDAD TOTAL DE LA ROSCA - Z FINAL POSITIVO)\n#4 = 2.0    (PASO DE LA ROSCA / PITCH - EJ: 2.0mm)\n#5 = 1.0    (NUMERO DE VUELTAS: 1=FRESA MULTIPASO, VARIAS=FRESA UN FILO)\n#6 = 120.0  (Vc - VELOCIDAD DE CORTE EN m/min)\n#7 = 4.0    (NUMERO DE INSERTOS O LABIOS)\n#8 = 0.05   (fz - AVANCE POR INSERTO EN mm/rev)\n#9 = 50.0   (PLANO DE SEGURIDAD RETROCESO R)\n#10 = 0.0   (COORDENADA X DEL CENTRO DEL AGUJERO)\n#11 = 0.0   (COORDENADA Y DEL CENTRO DEL AGUJERO)\n(========================================)\n\n(--- COMPROBACIONES DE SEGURIDAD BASICAS ---)\nIF [#2 GE #1] GOTO 9001\nIF [#4 LE 0] GOTO 9002\nIF [#5 LT 1.0] GOTO 9003\n\n(--- CALCULOS DE PARAMETROS DE CORTE ---)\n#100 = ROUND[[#6 * 1000] / [3.1416 * #2]] (CALCULO DE RPM)\n#101 = ROUND[#100 * #7 * #8] (AVANCE LINEAL NOMINAL F)\n\n(--- CALCULOS GEOMETRICOS DE LA TRAYECTORIA ---)\n#102 = [#1 - #2] / 2 (RADIO EFECTIVO DE LA TRAYECTORIA DEL CENTRO HTA)\n#103 = #102 / 2 (RADIO DE LOS ARCOS DE ENTRADA Y SALIDA TANGENCIAL)\n\n(--- CALCULO DE AVANCE COMPENSADO PARA INTERPOLACION CIRCULAR INTERNA ---)\n#106 = ROUND[#101 * #102 / [#1 / 2]] \n\n(--- DEFINICION DE COORDENADAS Z ---)\n#104 = -#3 (Z FINAL ABSOLUTO EN EL FONDO DE LA ROSCA)\n#105 = #4 / 2 (ASCENSO EN Z DURANTE LA MEDIA VUELTA DE ENTRADA/SALIDA)\n\n(--- ENCABEZADO DE MAQUINA Y POSICIONAMIENTO ---)\nG90 G54 G17 G40 G80 G49\nG00 X#10 Y#11 (POSICIONAMIENTO EN EL CENTRO EXACTO DEL AGUJERO)\nG43 H2 Z#9 (*** VERIFICAR CORRECTOR DE ALTURA H ***)\nS#100 M03\nM08\n\n(--- ACERCAMIENTO RAPIDO ---)\nG00 Z2.0 (ACERCAMIENTO HASTA 2MM POR ENCIMA DEL MATERIAL)\nG01 Z#104 F[#101 / 2] (BAJADA CONTROLADA POR EL CENTRO HASTA EL FONDO)\n\n(========================================)\n(       RUTINA HELICOIDAL DE ROSCADO     )\n(========================================)\n\n(--- ARCO TANGENCIAL DE ENTRADA DE 180 GRADOS ---)\nG03 X[#10 + #102] Y#11 Z[#104 + #105] I[#103] J0. F#106\n\n(--- INICIALIZACION DEL BUCLE ---)\n#110 = 0 (CONTADOR DE VUELTAS)\n#111 = #104 + #105 (COORDENADA Z ACTUAL DESPUES DE LA ENTRADA)\n\nN100 (--- BUCLE HELICOIDAL PRINCIPAL ---)\nIF [#110 GE #5] GOTO 200 (SI COMPLETO LAS VUELTAS, SALTA A LA SALIDA)\n#111 = #111 + #4 (CALCULA EL Z PARA LA SIGUIENTE VUELTA SUMANDO UN PASO)\n\n(INTERPOLACION HELICOIDAL DE 360 GRADOS)\nG03 X[#10 + #102] Y#11 Z#111 I-[#102] J0. F#106\n\n#110 = #110 + 1 (INCREMENTA EL CONTADOR)\nGOTO 100 (REPITE EL BUCLE)\n\nN200 (--- FIN DEL BUCLE HELICOIDAL ---)\n\n(--- ARCO TANGENCIAL DE SALIDA DE 180 GRADOS ---)\n#111 = #111 + #105 (CALCULA EL ASCENSO Z PARA LA SALIDA TANGENCIAL)\nG03 X#10 Y#11 Z#111 I-[#103] J0. F#106\n\n(*** CINEMATICA SEGURA EXCLUSIVA PARA ROSCADOS ***)\n(A diferencia de las cajeras de desbaste, en una rosca la herramienta DEBE)\n(estar en el centro geogr\u00e1fico X#10 Y#11 antes de levantar el eje Z.)\n(Si el Z subiera estando en el di\u00e1metro efectivo, arrancar\u00eda los hilos de la pieza.)\n\nG00 Z#9 (RETIRADA FINAL DIRECTA AL PLANO SEGURO)\n\nN999 (--- FIN DE MECANIZADO ---)\nM09\nM05\nG28 G91 Z0.\nG90\nM30\n\n(--- ALARMAS Y ERRORES ---)\nN9001 #3000=1 (ERROR: FRESA MAYOR QUE EL DIAMETRO DE ROSCA)\nN9002 #3000=2 (ERROR: PASO DE ROSCA DEBE SER MAYOR A CERO)\nN9003 #3000=3 (ERROR: EL NUMERO DE VUELTAS DEBE SER MINIMO 1)"
  },
  {
    "filename": "Patron Rectangular Perimetral de Agujeros.nc",
    "title": "O1008 (PATRON RECTANGULAR PERIMETRAL DE AGUJEROS V2)",
    "variables": [
      {
        "num": 1,
        "value": 150.0,
        "comment": "LONGITUD TOTAL X DEL MARCO",
        "line_idx": 5,
        "original_line": "#1 = 150.0  (LONGITUD TOTAL X DEL MARCO)"
      },
      {
        "num": 2,
        "value": 100.0,
        "comment": "ANCHO TOTAL Y DEL MARCO",
        "line_idx": 6,
        "original_line": "#2 = 100.0  (ANCHO TOTAL Y DEL MARCO)"
      },
      {
        "num": 3,
        "value": 2.0,
        "comment": "CANTIDAD AGUJEROS EN X",
        "line_idx": 7,
        "original_line": "#3 = 2      (CANTIDAD AGUJEROS EN X)"
      },
      {
        "num": 4,
        "value": 2.0,
        "comment": "CANTIDAD AGUJEROS EN Y",
        "line_idx": 8,
        "original_line": "#4 = 2      (CANTIDAD AGUJEROS EN Y)"
      },
      {
        "num": 5,
        "value": 2500.0,
        "comment": "RPM",
        "line_idx": 9,
        "original_line": "#5 = 2500   (RPM)"
      },
      {
        "num": 6,
        "value": 300.0,
        "comment": "AVANCE F",
        "line_idx": 10,
        "original_line": "#6 = 300.0  (AVANCE F)"
      },
      {
        "num": 7,
        "value": 20.0,
        "comment": "PROFUNDIDAD Z TOTAL",
        "line_idx": 11,
        "original_line": "#7 = 20.0   (PROFUNDIDAD Z TOTAL)"
      },
      {
        "num": 8,
        "value": 1.0,
        "comment": "ESTRATEGIA: 0=DIRECTO, 1=PICOTEO",
        "line_idx": 12,
        "original_line": "#8 = 1      (ESTRATEGIA: 0=DIRECTO, 1=PICOTEO)"
      },
      {
        "num": 9,
        "value": 5.0,
        "comment": "PASO PICOTEO",
        "line_idx": 13,
        "original_line": "#9 = 5.0    (PASO PICOTEO)"
      },
      {
        "num": 10,
        "value": 5.0,
        "comment": "SEGURIDAD Z",
        "line_idx": 14,
        "original_line": "#10 = 5.0   (SEGURIDAD Z)"
      },
      {
        "num": 11,
        "value": 0.0,
        "comment": "CENTRO X",
        "line_idx": 15,
        "original_line": "#11 = 0.0   (CENTRO X)"
      },
      {
        "num": 12,
        "value": 0.0,
        "comment": "CENTRO Y",
        "line_idx": 16,
        "original_line": "#12 = 0.0   (CENTRO Y)"
      },
      {
        "num": 13,
        "value": 0.0,
        "comment": "Z INICIAL",
        "line_idx": 17,
        "original_line": "#13 = 0.0   (Z INICIAL)"
      }
    ],
    "full_content": "O1008 (PATRON RECTANGULAR PERIMETRAL DE AGUJEROS V2)\n\n(========================================)\n(--- VARIABLES DE ENTRADA DEL OPERARIO ---)\n(========================================)\n#1 = 150.0  (LONGITUD TOTAL X DEL MARCO)\n#2 = 100.0  (ANCHO TOTAL Y DEL MARCO)\n#3 = 2      (CANTIDAD AGUJEROS EN X)\n#4 = 2      (CANTIDAD AGUJEROS EN Y)\n#5 = 2500   (RPM)\n#6 = 300.0  (AVANCE F)\n#7 = 20.0   (PROFUNDIDAD Z TOTAL)\n#8 = 1      (ESTRATEGIA: 0=DIRECTO, 1=PICOTEO)\n#9 = 5.0    (PASO PICOTEO)\n#10 = 5.0   (SEGURIDAD Z)\n#11 = 0.0   (CENTRO X)\n#12 = 0.0   (CENTRO Y)\n#13 = 0.0   (Z INICIAL)\n(========================================)\n\n(--- COMPROBACIONES DE SEGURIDAD ---)\nIF [#3 LT 2] GOTO 9001\nIF [#4 LT 2] GOTO 9001\nIF [#8 NE 1] GOTO 25\nIF [#9 LE 0] GOTO 9002\nN25\n\n(--- CALCULOS ---)\n#100 = #13 - #7       (FONDO Z)\n#101 = #13 + #10      (PLANO SEGURIDAD)\n#102 = #1 / [#3 - 1]  (PASO ENTRE AGUJEROS X)\n#103 = #2 / [#4 - 1]  (PASO ENTRE AGUJEROS Y)\n#104 = #11 - [#1 / 2] (INICIO X)\n#105 = #12 - [#2 / 2] (INICIO Y)\n#115 = [2 * #3] + [2 * #4] - 4 (CANTIDAD TOTAL DE AGUJEROS)\n\nG90 G54 G17 G40 G80 G49\nT01 M06 (Selecciona herramienta 1)\nS#5 M03 M08\n\n#110 = 0 (INDICE ACTUAL DEL AGUJERO, DE 0 A N_TOTAL - 1)\n\nN10 (--- BUCLE PRINCIPAL DE AGUJEROS ---)\nIF [#110 GE #115] GOTO 999\n\n(--- CALCULAR COORDENADAS X E Y PARA EL AGUJERO ACTUAL ---)\n(LADO 1: INFERIOR - IZQ A DER)\nIF [#110 GE #3] GOTO 20\n    #112 = #104 + [#110 * #102]\n    #113 = #105\n    GOTO 100\n\nN20 (LADO 2: DERECHO - ABAJO A ARRIBA - SIN ESQUINAS)\n#116 = #3 + #4 - 2\nIF [#110 GE #116] GOTO 30\n    #120 = #110 - #3 + 1\n    #112 = #104 + #1\n    #113 = #105 + [#120 * #103]\n    GOTO 100\n\nN30 (LADO 3: SUPERIOR - DER A IZQ)\n#117 = [2 * #3] + #4 - 2\nIF [#110 GE #117] GOTO 40\n    #120 = #110 - #116\n    #112 = #104 + [[#3 - 1 - #120] * #102]\n    #113 = #105 + #2\n    GOTO 100\n\nN40 (LADO 4: IZQUIERDO - ARRIBA A ABAJO - SIN ESQUINAS)\n    #120 = #110 - #117\n    #112 = #104\n    #113 = #105 + [[#4 - 2 - #120] * #103]\n\nN100 (--- EJECUTAR TALADRADO EN COORDENADAS CALCULADAS ---)\nG00 X#112 Y#113\nG43 H1 Z#101 (*** VERIFICAR CORRECTOR DE ALTURA H ***)\n\n(ESTRATEGIA DE TALADRADO)\nIF [#8 EQ 1] GOTO 600\n\n(TALADRADO DIRECTO)\nG01 Z#100 F#6\nG00 Z#101\nGOTO 200\n\nN600 (TALADRADO CON PICOTEO)\n#106 = #13 (INICIALIZAR Z PARA PICOTEO)\nN605\n#107 = #106 - #9 (SIGUIENTE PASO DE PROFUNDIDAD)\nIF [#107 LT #100] THEN #107 = #100 (LIMITAR AL FONDO Z)\nG00 Z[#106 + 1.0] (ACERCAMIENTO RAPIDO CON RETROCESO DE 1MM)\nG01 Z#107 F#6 (AVANCE DE CORTE)\nG00 Z#101 (RETROCESO AL PLANO DE SEGURIDAD)\n#106 = #107\nIF [#106 GT #100] GOTO 605 (REPETIR HASTA LLEGAR AL FONDO)\n\nN200 (--- PREPARAR SIGUIENTE AGUJERO ---)\n#110 = #110 + 1\nGOTO 10\n\nN999 (--- FIN DE MECANIZADO ---)\nG00 Z[#101 + 50.0]\nM09 M05\nG28 G91 Z0.\nG90\nM30\n\n(--- ALARMAS ---)\nN9001 #3000=1 (ERROR: MINIMO 2 AGUJEROS POR LADO)\nN9002 #3000=2 (ERROR: PICOTEO INVALIDO)"
  },
  {
    "filename": "Ranuras Tipo orings.nc",
    "title": "O1002 (RANURA CIRCULAR HELICOIDAL)",
    "variables": [
      {
        "num": 1,
        "value": 100.0,
        "comment": "DIAMETRO DE LA RANURA AL CENTRO DE LA HTA",
        "line_idx": 5,
        "original_line": "#1 = 100.0 (DIAMETRO DE LA RANURA AL CENTRO DE LA HTA)"
      },
      {
        "num": 2,
        "value": 12.0,
        "comment": "DIAMETRO DE LA HERRAMIENTA",
        "line_idx": 6,
        "original_line": "#2 = 12.0  (DIAMETRO DE LA HERRAMIENTA)"
      },
      {
        "num": 3,
        "value": 15.0,
        "comment": "PROFUNDIDAD TOTAL Z FINAL - VALOR POSITIVO",
        "line_idx": 7,
        "original_line": "#3 = 15.0  (PROFUNDIDAD TOTAL Z FINAL - VALOR POSITIVO)"
      },
      {
        "num": 4,
        "value": 2.0,
        "comment": "PROFUNDIDAD POR VUELTA EN Z - PITCH HELICOIDAL",
        "line_idx": 8,
        "original_line": "#4 = 2.0   (PROFUNDIDAD POR VUELTA EN Z - PITCH HELICOIDAL)"
      },
      {
        "num": 5,
        "value": 120.0,
        "comment": "Vc - VELOCIDAD DE CORTE EN m/min",
        "line_idx": 9,
        "original_line": "#5 = 120.0 (Vc - VELOCIDAD DE CORTE EN m/min)"
      },
      {
        "num": 6,
        "value": 3.0,
        "comment": "NUMERO DE INSERTOS O LABIOS",
        "line_idx": 10,
        "original_line": "#6 = 3.0   (NUMERO DE INSERTOS O LABIOS)"
      },
      {
        "num": 7,
        "value": 0.08,
        "comment": "fz - AVANCE POR INSERTO EN mm/rev",
        "line_idx": 11,
        "original_line": "#7 = 0.08  (fz - AVANCE POR INSERTO EN mm/rev)"
      },
      {
        "num": 8,
        "value": 50.0,
        "comment": "PLANO DE SEGURIDAD RETROCESO R",
        "line_idx": 12,
        "original_line": "#8 = 50.0  (PLANO DE SEGURIDAD RETROCESO R)"
      },
      {
        "num": 9,
        "value": 0.0,
        "comment": "CENTRO DE LA RANURA EN X",
        "line_idx": 13,
        "original_line": "#9 = 0.0   (CENTRO DE LA RANURA EN X)"
      },
      {
        "num": 10,
        "value": 0.0,
        "comment": "CENTRO DE LA RANURA EN Y",
        "line_idx": 14,
        "original_line": "#10 = 0.0  (CENTRO DE LA RANURA EN Y)"
      },
      {
        "num": 14,
        "value": 0.0,
        "comment": "Z INICIAL DE CORTE",
        "line_idx": 15,
        "original_line": "#14 = 0.0  (Z INICIAL DE CORTE)"
      }
    ],
    "full_content": "O1002 (RANURA CIRCULAR HELICOIDAL)\n\n(========================================)\n(--- VARIABLES DE ENTRADA DEL OPERARIO ---)\n(========================================)\n#1 = 100.0 (DIAMETRO DE LA RANURA AL CENTRO DE LA HTA)\n#2 = 12.0  (DIAMETRO DE LA HERRAMIENTA)\n#3 = 15.0  (PROFUNDIDAD TOTAL Z FINAL - VALOR POSITIVO)\n#4 = 2.0   (PROFUNDIDAD POR VUELTA EN Z - PITCH HELICOIDAL)\n#5 = 120.0 (Vc - VELOCIDAD DE CORTE EN m/min)\n#6 = 3.0   (NUMERO DE INSERTOS O LABIOS)\n#7 = 0.08  (fz - AVANCE POR INSERTO EN mm/rev)\n#8 = 50.0  (PLANO DE SEGURIDAD RETROCESO R)\n#9 = 0.0   (CENTRO DE LA RANURA EN X)\n#10 = 0.0  (CENTRO DE LA RANURA EN Y)\n#14 = 0.0  (Z INICIAL DE CORTE)\n(========================================)\n\n(--- COMPROBACIONES DE SEGURIDAD ---)\nIF [#1 LE 0] GOTO 9006\nIF [#14 LE -#3] GOTO 9003\n\n(--- PARAMETROS DE CORTE ---)\n#100 = [#5 * 1000] / [3.1416 * #2] (RPM FIJAS)\n#101 = #100 * #6 * #7 (AVANCE NOMINAL F LINEAL)\n\n(--- GEOMETRIA DE TRAYECTORIA ---)\n#102 = #1 / 2 (RADIO DE LA TRAYECTORIA DEL CENTRO DE LA HTA)\n#104 = -#3 (Z FINAL EN COORDENADA NEGATIVA)\n#106 = #14 (INICIALIZADOR DE PROFUNDIDAD Z ACTUAL)\n\n(NOTA: EN ESTA OPERACION NO SE COMPENSA EL AVANCE PORQUE LA)\n(HERRAMIENTA TRABAJA 100% EMBUTIDA ABRIENDO UNA RANURA DE SU MISMO ANCHO)\n\n(--- CONFIGURACION INICIAL Y POSICIONAMIENTO ---)\nG90 G54 G17 G40 G80 G49\n(MOVIMIENTO DIRECTO AL PUNTO DE INICIO SOBRE EL DIAMETRO DE LA RANURA)\nG00 X[#9 + #102] Y#10 \nG43 H3 Z#8 (*** VERIFICAR CORRECTOR DE ALTURA H ***)\nS#100 M03\nM08\n\n(BAJADA RAPIDA DE APROXIMACION A 1MM DEL Z INICIAL)\nG00 Z[#14 + 1.0]\n(BAJADA CONTROLADA AL Z INICIAL)\nG01 Z#14 F[#101 / 2]\n\n(--- BUCLE PRINCIPAL DE RAMPA HELICOIDAL ---)\nWHILE [#106 GT #104] DO 1\n    #106 = #106 - #4 (CALCULA LA PROFUNDIDAD AL FINAL DE ESTA VUELTA)\n    \n    (SI LA BAJADA CALCULA MAS ABAJO DEL FONDO, SE AJUSTA EXACTO AL FONDO)\n    IF [#106 GE #104] GOTO 50\n    #106 = #104 \n    N50\n\n    (INTERPOLACION HELICOIDAL: ARCO XY SIMULTANEO CON BAJADA EN Z)\n    G03 I-[#102] J0. Z#106 F#101\nEND 1\n\n(--- PASADA FINAL DE PLANICIDAD EN EL FONDO ---)\n(ESTE CIRCULO EN Z FIJO ELIMINA LA RAMPA QUE QUEDA AL LLEGAR ABAJO)\nG03 I-[#102] J0. F#101\n\n(--- RETIRADA SEGURA ---)\n(SE LEVANTA DIRECTAMENTE DESDE LA RANURA HACIA ARRIBA)\n(NO SE MUEVE EN X NI EN Y PARA NO GOLPEAR EL NUCLEO CENTRAL)\nG00 Z#8\nM09\nM05\nG28 G91 Z0.\nG90\nM30\n\n(--- ALARMAS ---)\nN9003 #3000=3 (ERROR: Z INICIAL INFERIOR A Z FINAL)\nN9006 #3000=6 (ERROR: DIAMETRO DE RANURA CERO O NEGATIVO)"
  }
];