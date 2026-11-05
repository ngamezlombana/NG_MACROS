/* ARCHIVO GENERADO AUTOMATICAMENTE POR parse_macros.py. NO EDITAR A MANO. */
var MACROS_DATA = [
  {
    "id": "O8101",
    "filename": "O8101_Patron_Agujero_Angular.nc",
    "title": "O8101 - Patron de Agujero Angular",
    "subtitle": "Serie lineal equidistante orientada a cualquier angulo polar",
    "category": "patrones_agujeros",
    "category_title": "PATRONES DE AGUJEROS // TALADRADO PARAMETRICO",
    "category_label": "PATRONES DE AGUJEROS",
    "category_color": "primary",
    "sub_category": "agujero_lineal",
    "icon": "linear_scale",
    "book_chapter": "Ingeniero Nestor Gamez",
    "g65_template": "G65 P8101 X[#24] Y[#25] A[#1] Q[#17] H[#11] T[#20] F[#9] S[#19] Z[#26] R[#18] E[#8]",
    "variables": [
      {
        "num": 24,
        "letter": "X",
        "value": 50.0,
        "comment": "COORDENADA X DEL PRIMER AGUJERO",
        "full_comment": "X: COORDENADA X DEL PRIMER AGUJERO",
        "line_idx": 7,
        "original_line": "#24 = 50.0   (X: COORDENADA X DEL PRIMER AGUJERO)"
      },
      {
        "num": 25,
        "letter": "Y",
        "value": 30.0,
        "comment": "COORDENADA Y DEL PRIMER AGUJERO",
        "full_comment": "Y: COORDENADA Y DEL PRIMER AGUJERO",
        "line_idx": 8,
        "original_line": "#25 = 30.0   (Y: COORDENADA Y DEL PRIMER AGUJERO)"
      },
      {
        "num": 1,
        "letter": "A",
        "value": 30.0,
        "comment": "ANGULO DE LA LINEA EN GRADOS DESDE X+",
        "full_comment": "A: ANGULO DE LA LINEA EN GRADOS DESDE X+",
        "line_idx": 9,
        "original_line": "#1  = 30.0   (A: ANGULO DE LA LINEA EN GRADOS DESDE X+)"
      },
      {
        "num": 17,
        "letter": "Q",
        "value": 25.0,
        "comment": "PASO O DISTANCIA ENTRE AGUJEROS ADYACENTES",
        "full_comment": "Q: PASO O DISTANCIA ENTRE AGUJEROS ADYACENTES",
        "line_idx": 10,
        "original_line": "#17 = 25.0   (Q: PASO O DISTANCIA ENTRE AGUJEROS ADYACENTES)"
      },
      {
        "num": 11,
        "letter": "H",
        "value": 5.0,
        "comment": "NUMERO TOTAL DE AGUJEROS",
        "full_comment": "H: NUMERO TOTAL DE AGUJEROS",
        "line_idx": 11,
        "original_line": "#11 = 5.0    (H: NUMERO TOTAL DE AGUJEROS)"
      },
      {
        "num": 20,
        "letter": "T",
        "value": 10.0,
        "comment": "DIAMETRO DE LA BROCA / HERRAMIENTA",
        "full_comment": "T: DIAMETRO DE LA BROCA / HERRAMIENTA",
        "line_idx": 14,
        "original_line": "#20 = 10.0   (T: DIAMETRO DE LA BROCA / HERRAMIENTA)"
      },
      {
        "num": 9,
        "letter": "F",
        "value": 250.0,
        "comment": "AVANCE DE TALADRADO EN MM/MIN",
        "full_comment": "F: AVANCE DE TALADRADO EN MM/MIN",
        "line_idx": 15,
        "original_line": "#9  = 250.0  (F: AVANCE DE TALADRADO EN MM/MIN)"
      },
      {
        "num": 19,
        "letter": "S",
        "value": 1200.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "S: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 16,
        "original_line": "#19 = 1200.0 (S: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 26,
        "letter": "Z",
        "value": 20.0,
        "comment": "PROFUNDIDAD TOTAL DE PERFORACION",
        "full_comment": "Z: PROFUNDIDAD TOTAL DE PERFORACION",
        "line_idx": 19,
        "original_line": "#26 = 20.0   (Z: PROFUNDIDAD TOTAL DE PERFORACION)"
      },
      {
        "num": 18,
        "letter": "R",
        "value": 2.0,
        "comment": "PLANO DE RETROCESO Y SEGURIDAD",
        "full_comment": "R: PLANO DE RETROCESO Y SEGURIDAD",
        "line_idx": 20,
        "original_line": "#18 = 2.0    (R: PLANO DE RETROCESO Y SEGURIDAD)"
      },
      {
        "num": 8,
        "letter": "E",
        "value": 5.0,
        "comment": "PASO DE PICOTEO EN Z PARA G83",
        "full_comment": "E: PASO DE PICOTEO EN Z PARA G83",
        "line_idx": 21,
        "original_line": "#8  = 5.0    (E: PASO DE PICOTEO EN Z PARA G83)"
      }
    ],
    "full_content": "%\nO8101 (PATRON DE AGUJERO ANGULAR - VERSION 1)\n(INGENIERO NESTOR GAMEZ - FANUC CNC CUSTOM MACROS)\n(LLAMADA G65: G65 P8101 X.. Y.. A.. Q.. H.. T.. F.. S.. Z.. R.. E..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 50.0   (X: COORDENADA X DEL PRIMER AGUJERO)\n#25 = 30.0   (Y: COORDENADA Y DEL PRIMER AGUJERO)\n#1  = 30.0   (A: ANGULO DE LA LINEA EN GRADOS DESDE X+)\n#17 = 25.0   (Q: PASO O DISTANCIA ENTRE AGUJEROS ADYACENTES)\n#11 = 5.0    (H: NUMERO TOTAL DE AGUJEROS)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA BROCA / HERRAMIENTA)\n#9  = 250.0  (F: AVANCE DE TALADRADO EN MM/MIN)\n#19 = 1200.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE PERFORADO Y SEGURIDAD)\n#26 = 20.0   (Z: PROFUNDIDAD TOTAL DE PERFORACION)\n#18 = 2.0    (R: PLANO DE RETROCESO Y SEGURIDAD)\n#8  = 5.0    (E: PASO DE PICOTEO EN Z PARA G83)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#11 LT 2] GOTO9101\nIF [#17 LE 0] GOTO9102\nIF [#26 LE 0] GOTO9103\nIF [#9 LE 0]  GOTO9104\nIF [#20 LE 0] GOTO9105\nIF [#8 LE 0]  GOTO9106\nIF [#18 LT 0] #18 = 2.0\n\n(GUARDA ESTADO PREVIO DE G90/G91)\n#10 = #4003\n\n(CALCULO DE DELTAS EN X E Y)\n#14 = #17 * COS[#1]   (PASO INCREMENTAL EN X)\n#15 = #17 * SIN[#1]   (PASO INCREMENTAL EN Y)\n\n(VARIABLES DE POSICION ACTUAL)\n#31 = #24             (POSICION ACTUAL X)\n#32 = #25             (POSICION ACTUAL Y)\n#33 = 1               (CONTADOR DE AGUJEROS INICIADO EN 1)\n\n(ARRANQUE DE HUSILLO Y APROXIMACION SEGURA)\nS#19 M03 M08\nG90 G00 X#31 Y#32\nG00 Z50.0             (PLANO SEGURO INICIAL)\nG00 Z#18              (PLANO DE RETROCESO R)\n\n(TALADRADO DEL PRIMER AGUJERO)\nG99 G83 X#31 Y#32 Z-[#26] R#18 Q#8 F#9\n\n(BUCLE PARA LOS AGUJEROS RESTANTES EN G90 ABSOLUTO)\nWHILE [#33 LT #11] DO1\n  #31 = #24 + [#33 * #14]\n  #32 = #25 + [#33 * #15]\n  X#31 Y#32\n  #33 = #33 + 1\nEND1\n\nG80                   (CANCELAR CICLO FIJO)\nG90 G00 Z50.0         (SUBIR A ALTURA SEGURA)\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (NUMERO DE AGUJEROS DEBE SER MAYOR A 1)\nN9102 #3000 = 102 (EL PASO Q DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (AVANCE F DEBE SER MAYOR A CERO)\nN9105 #3000 = 105 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9106 #3000 = 106 (PASO DE PICOTEO E DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\n"
  },
  {
    "id": "O8103",
    "filename": "O8103_Patron_Agujero_Marco.nc",
    "title": "O8103 - Patron de Agujero de Marco Rectangular",
    "subtitle": "Perimetro rectangular de 4 lados con prevencion de sobretaladrado en esquinas",
    "category": "patrones_agujeros",
    "category_title": "PATRONES DE AGUJEROS // TALADRADO PARAMETRICO",
    "category_label": "PATRONES DE AGUJEROS",
    "category_color": "primary",
    "sub_category": "agujero_marco",
    "icon": "crop_free",
    "book_chapter": "Ingeniero Nestor Gamez",
    "g65_template": "G65 P8103 X[#24] Y[#25] U[#21] V[#22] I[#4] J[#5] T[#20] F[#9] S[#19] Z[#26] R[#18] E[#8]",
    "variables": [
      {
        "num": 24,
        "letter": "X",
        "value": 20.0,
        "comment": "COORDENADA X ESQUINA INFERIOR IZQUIERDA",
        "full_comment": "X: COORDENADA X ESQUINA INFERIOR IZQUIERDA",
        "line_idx": 7,
        "original_line": "#24 = 20.0   (X: COORDENADA X ESQUINA INFERIOR IZQUIERDA)"
      },
      {
        "num": 25,
        "letter": "Y",
        "value": 20.0,
        "comment": "COORDENADA Y ESQUINA INFERIOR IZQUIERDA",
        "full_comment": "Y: COORDENADA Y ESQUINA INFERIOR IZQUIERDA",
        "line_idx": 8,
        "original_line": "#25 = 20.0   (Y: COORDENADA Y ESQUINA INFERIOR IZQUIERDA)"
      },
      {
        "num": 21,
        "letter": "U",
        "value": 6.0,
        "comment": "CANTIDAD DE AGUJEROS EN EJE X HORIZONTAL",
        "full_comment": "U: CANTIDAD DE AGUJEROS EN EJE X HORIZONTAL",
        "line_idx": 9,
        "original_line": "#21 = 6.0    (U: CANTIDAD DE AGUJEROS EN EJE X HORIZONTAL)"
      },
      {
        "num": 22,
        "letter": "V",
        "value": 4.0,
        "comment": "CANTIDAD DE AGUJEROS EN EJE Y VERTICAL",
        "full_comment": "V: CANTIDAD DE AGUJEROS EN EJE Y VERTICAL",
        "line_idx": 10,
        "original_line": "#22 = 4.0    (V: CANTIDAD DE AGUJEROS EN EJE Y VERTICAL)"
      },
      {
        "num": 4,
        "letter": "I",
        "value": 25.0,
        "comment": "PASO O DISTANCIA ENTRE AGUJEROS EN X",
        "full_comment": "I: PASO O DISTANCIA ENTRE AGUJEROS EN X",
        "line_idx": 11,
        "original_line": "#4  = 25.0   (I: PASO O DISTANCIA ENTRE AGUJEROS EN X)"
      },
      {
        "num": 5,
        "letter": "J",
        "value": 20.0,
        "comment": "PASO O DISTANCIA ENTRE AGUJEROS EN Y",
        "full_comment": "J: PASO O DISTANCIA ENTRE AGUJEROS EN Y",
        "line_idx": 12,
        "original_line": "#5  = 20.0   (J: PASO O DISTANCIA ENTRE AGUJEROS EN Y)"
      },
      {
        "num": 20,
        "letter": "T",
        "value": 10.0,
        "comment": "DIAMETRO DE LA BROCA / HERRAMIENTA",
        "full_comment": "T: DIAMETRO DE LA BROCA / HERRAMIENTA",
        "line_idx": 15,
        "original_line": "#20 = 10.0   (T: DIAMETRO DE LA BROCA / HERRAMIENTA)"
      },
      {
        "num": 9,
        "letter": "F",
        "value": 250.0,
        "comment": "AVANCE DE TALADRADO EN MM/MIN",
        "full_comment": "F: AVANCE DE TALADRADO EN MM/MIN",
        "line_idx": 16,
        "original_line": "#9  = 250.0  (F: AVANCE DE TALADRADO EN MM/MIN)"
      },
      {
        "num": 19,
        "letter": "S",
        "value": 1200.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "S: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 17,
        "original_line": "#19 = 1200.0 (S: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 26,
        "letter": "Z",
        "value": 18.0,
        "comment": "PROFUNDIDAD TOTAL DE PERFORACION",
        "full_comment": "Z: PROFUNDIDAD TOTAL DE PERFORACION",
        "line_idx": 20,
        "original_line": "#26 = 18.0   (Z: PROFUNDIDAD TOTAL DE PERFORACION)"
      },
      {
        "num": 18,
        "letter": "R",
        "value": 2.0,
        "comment": "PLANO DE RETROCESO Y SEGURIDAD",
        "full_comment": "R: PLANO DE RETROCESO Y SEGURIDAD",
        "line_idx": 21,
        "original_line": "#18 = 2.0    (R: PLANO DE RETROCESO Y SEGURIDAD)"
      },
      {
        "num": 8,
        "letter": "E",
        "value": 5.0,
        "comment": "PASO DE PICOTEO EN Z PARA G83",
        "full_comment": "E: PASO DE PICOTEO EN Z PARA G83",
        "line_idx": 22,
        "original_line": "#8  = 5.0    (E: PASO DE PICOTEO EN Z PARA G83)"
      }
    ],
    "full_content": "%\nO8103 (PATRON DE AGUJERO DE MARCO RECTANGULAR)\n(INGENIERO NESTOR GAMEZ - FANUC CNC CUSTOM MACROS)\n(LLAMADA G65: G65 P8103 X.. Y.. U.. V.. I.. J.. T.. F.. S.. Z.. R.. E..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 20.0   (X: COORDENADA X ESQUINA INFERIOR IZQUIERDA)\n#25 = 20.0   (Y: COORDENADA Y ESQUINA INFERIOR IZQUIERDA)\n#21 = 6.0    (U: CANTIDAD DE AGUJEROS EN EJE X HORIZONTAL)\n#22 = 4.0    (V: CANTIDAD DE AGUJEROS EN EJE Y VERTICAL)\n#4  = 25.0   (I: PASO O DISTANCIA ENTRE AGUJEROS EN X)\n#5  = 20.0   (J: PASO O DISTANCIA ENTRE AGUJEROS EN Y)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA BROCA / HERRAMIENTA)\n#9  = 250.0  (F: AVANCE DE TALADRADO EN MM/MIN)\n#19 = 1200.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE PERFORADO Y SEGURIDAD)\n#26 = 18.0   (Z: PROFUNDIDAD TOTAL DE PERFORACION)\n#18 = 2.0    (R: PLANO DE RETROCESO Y SEGURIDAD)\n#8  = 5.0    (E: PASO DE PICOTEO EN Z PARA G83)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#4 LE 0] GOTO9101\nIF [#5 LE 0] GOTO9101\nIF [#21 LT 2] GOTO9102\nIF [#22 LT 2] GOTO9102\nIF [#21 NE FUP[#21]] GOTO9103\nIF [#22 NE FUP[#22]] GOTO9103\nIF [#26 LE 0] GOTO9104\nIF [#9 LE 0] GOTO9105\nIF [#20 LE 0] GOTO9106\nIF [#8 LE 0] GOTO9107\nIF [#18 LT 0] #18 = 2.0\n\n(GUARDA ESTADO PREVIO DE G90/G91)\n#10 = #4003\n\n(VARIABLES DE POSICION ACTUAL)\n#31 = #24             (POSICION ACTUAL X)\n#32 = #25             (POSICION ACTUAL Y)\n\n(ARRANQUE DE HUSILLO Y APROXIMACION SEGURA)\nS#19 M03 M08\nG90 G00 X#31 Y#32\nG00 Z50.0             (PLANO SEGURO INICIAL)\nG00 Z#18              (PLANO DE RETROCESO R)\n\n(TALADRADO DEL PRIMER AGUJERO EN ESQUINA INFERIOR IZQUIERDA)\nG99 G83 X#31 Y#32 Z-[#26] R#18 Q#8 F#9\n\n(1. LADO INFERIOR: HACIA X+ DERECHA)\n#33 = 1\nWHILE [#33 LT #21] DO1\n  #31 = #24 + [#33 * #4]\n  #32 = #25\n  X#31 Y#32\n  #33 = #33 + 1\nEND1\n\n(2. LADO DERECHO: HACIA Y+ ARRIBA)\n#34 = 1\nWHILE [#34 LT #22] DO2\n  #31 = #24 + [[#21 - 1.0] * #4]\n  #32 = #25 + [#34 * #5]\n  X#31 Y#32\n  #34 = #34 + 1\nEND2\n\n(3. LADO SUPERIOR: HACIA X- IZQUIERDA)\n#33 = #21 - 2.0\nWHILE [#33 GE 0] DO1\n  #31 = #24 + [#33 * #4]\n  #32 = #25 + [[#22 - 1.0] * #5]\n  X#31 Y#32\n  #33 = #33 - 1.0\nEND1\n\n(4. LADO IZQUIERDO: HACIA Y- ABAJO OMITE PRIMER AGUJERO YA TALADRADO)\n#34 = #22 - 2.0\nWHILE [#34 GE 1.0] DO2\n  #31 = #24\n  #32 = #25 + [#34 * #5]\n  X#31 Y#32\n  #34 = #34 - 1.0\nEND2\n\nG80                   (CANCELAR CICLO FIJO)\nG90 G00 Z50.0         (SUBIR A ALTURA SEGURA)\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (PASO I Y J DEBEN SER MAYORES A CERO)\nN9102 #3000 = 102 (MINIMO 2 AGUJEROS POR CADA LADO)\nN9103 #3000 = 103 (CANTIDAD DE AGUJEROS DEBE SER ENTERO)\nN9104 #3000 = 104 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9105 #3000 = 105 (AVANCE F DEBE SER MAYOR A CERO)\nN9106 #3000 = 106 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9107 #3000 = 107 (PASO DE PICOTEO E DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\n"
  },
  {
    "id": "O8104",
    "filename": "O8104_Patron_Circulo_Agujeros_BCD.nc",
    "title": "O8104 - Circulo de Agujeros de Perno (BCD / PCD)",
    "subtitle": "Circulo de barrenado parametrico con angulo inicial y seleccion de orificio de inicio",
    "category": "patrones_agujeros",
    "category_title": "PATRONES DE AGUJEROS // TALADRADO PARAMETRICO",
    "category_label": "PATRONES DE AGUJEROS",
    "category_color": "primary",
    "sub_category": "agujero_bcd",
    "icon": "donut_large",
    "book_chapter": "Ingeniero Nestor Gamez",
    "g65_template": "G65 P8104 X[#24] Y[#25] W[#23] H[#11] A[#1] S[#19] T[#20] F[#9] Z[#26] R[#18] E[#8] B[#2]",
    "variables": [
      {
        "num": 24,
        "letter": "X",
        "value": 0.0,
        "comment": "COORDENADA X DEL CENTRO DEL CIRCULO",
        "full_comment": "X: COORDENADA X DEL CENTRO DEL CIRCULO",
        "line_idx": 7,
        "original_line": "#24 = 0.0    (X: COORDENADA X DEL CENTRO DEL CIRCULO)"
      },
      {
        "num": 25,
        "letter": "Y",
        "value": 0.0,
        "comment": "COORDENADA Y DEL CENTRO DEL CIRCULO",
        "full_comment": "Y: COORDENADA Y DEL CENTRO DEL CIRCULO",
        "line_idx": 8,
        "original_line": "#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DEL CIRCULO)"
      },
      {
        "num": 23,
        "letter": "W",
        "value": 120.0,
        "comment": "DIAMETRO DEL CIRCULO DE PASO BCD / PCD",
        "full_comment": "W: DIAMETRO DEL CIRCULO DE PASO BCD / PCD",
        "line_idx": 9,
        "original_line": "#23 = 120.0  (W: DIAMETRO DEL CIRCULO DE PASO BCD / PCD)"
      },
      {
        "num": 11,
        "letter": "H",
        "value": 8.0,
        "comment": "CANTIDAD TOTAL DE AGUJEROS EQUIESPACIADOS",
        "full_comment": "H: CANTIDAD TOTAL DE AGUJEROS EQUIESPACIADOS",
        "line_idx": 10,
        "original_line": "#11 = 8.0    (H: CANTIDAD TOTAL DE AGUJEROS EQUIESPACIADOS)"
      },
      {
        "num": 1,
        "letter": "A",
        "value": 0.0,
        "comment": "ANGULO DEL PRIMER AGUJERO DESDE EJE X+",
        "full_comment": "A: ANGULO DEL PRIMER AGUJERO DESDE EJE X+",
        "line_idx": 11,
        "original_line": "#1  = 0.0    (A: ANGULO DEL PRIMER AGUJERO DESDE EJE X+)"
      },
      {
        "num": 19,
        "letter": "S",
        "value": 1.0,
        "comment": "NUMERO DEL AGUJERO INICIAL A TALADRAR",
        "full_comment": "S: NUMERO DEL AGUJERO INICIAL A TALADRAR",
        "line_idx": 12,
        "original_line": "#19 = 1.0    (S: NUMERO DEL AGUJERO INICIAL A TALADRAR)"
      },
      {
        "num": 20,
        "letter": "T",
        "value": 12.0,
        "comment": "DIAMETRO DE LA BROCA / HERRAMIENTA",
        "full_comment": "T: DIAMETRO DE LA BROCA / HERRAMIENTA",
        "line_idx": 15,
        "original_line": "#20 = 12.0   (T: DIAMETRO DE LA BROCA / HERRAMIENTA)"
      },
      {
        "num": 9,
        "letter": "F",
        "value": 280.0,
        "comment": "AVANCE DE TALADRADO EN MM/MIN",
        "full_comment": "F: AVANCE DE TALADRADO EN MM/MIN",
        "line_idx": 16,
        "original_line": "#9  = 280.0  (F: AVANCE DE TALADRADO EN MM/MIN)"
      },
      {
        "num": 2,
        "letter": "B",
        "value": 1200.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "B: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 17,
        "original_line": "#2  = 1200.0 (B: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 26,
        "letter": "Z",
        "value": 25.0,
        "comment": "PROFUNDIDAD TOTAL DE PERFORACION",
        "full_comment": "Z: PROFUNDIDAD TOTAL DE PERFORACION",
        "line_idx": 20,
        "original_line": "#26 = 25.0   (Z: PROFUNDIDAD TOTAL DE PERFORACION)"
      },
      {
        "num": 18,
        "letter": "R",
        "value": 3.0,
        "comment": "PLANO DE RETROCESO Y SEGURIDAD",
        "full_comment": "R: PLANO DE RETROCESO Y SEGURIDAD",
        "line_idx": 21,
        "original_line": "#18 = 3.0    (R: PLANO DE RETROCESO Y SEGURIDAD)"
      },
      {
        "num": 8,
        "letter": "E",
        "value": 6.0,
        "comment": "PASO DE PICOTEO EN Z PARA G83",
        "full_comment": "E: PASO DE PICOTEO EN Z PARA G83",
        "line_idx": 22,
        "original_line": "#8  = 6.0    (E: PASO DE PICOTEO EN Z PARA G83)"
      }
    ],
    "full_content": "%\nO8104 (PATRON DE CIRCULO DE AGUJEROS PERNO BCD)\n(INGENIERO NESTOR GAMEZ - FANUC CNC CUSTOM MACROS)\n(LLAMADA G65: G65 P8104 X.. Y.. W.. H.. A.. S.. T.. F.. Z.. R.. E.. B..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DEL CIRCULO)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DEL CIRCULO)\n#23 = 120.0  (W: DIAMETRO DEL CIRCULO DE PASO BCD / PCD)\n#11 = 8.0    (H: CANTIDAD TOTAL DE AGUJEROS EQUIESPACIADOS)\n#1  = 0.0    (A: ANGULO DEL PRIMER AGUJERO DESDE EJE X+)\n#19 = 1.0    (S: NUMERO DEL AGUJERO INICIAL A TALADRAR)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 12.0   (T: DIAMETRO DE LA BROCA / HERRAMIENTA)\n#9  = 280.0  (F: AVANCE DE TALADRADO EN MM/MIN)\n#2  = 1200.0 (B: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE PERFORADO Y SEGURIDAD)\n#26 = 25.0   (Z: PROFUNDIDAD TOTAL DE PERFORACION)\n#18 = 3.0    (R: PLANO DE RETROCESO Y SEGURIDAD)\n#8  = 6.0    (E: PASO DE PICOTEO EN Z PARA G83)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#23 LE 0] GOTO9101\nIF [#11 NE FUP[#11]] GOTO9102\nIF [#11 LE 0] GOTO9103\nIF [#19 EQ #0] #19 = 1.0\nIF [#19 NE FUP[#19]] GOTO9102\nIF [#19 LT 1] GOTO9104\nIF [#19 GT #11] GOTO9105\nIF [#26 LE 0] GOTO9106\nIF [#9 LE 0] GOTO9107\nIF [#2 LE 0] GOTO9108\nIF [#20 LE 0] GOTO9109\nIF [#8 LE 0] GOTO9110\nIF [#18 LT 0] #18 = 3.0\n\n(GUARDA ESTADO PREVIO DE G90/G91)\n#10 = #4003\n\n(CONSTANTES DE GEOMETRIA CIRCULAR)\n#14 = #23 / 2.0       (RADIO DEL CIRCULO DE PASO)\n#17 = 360.0 / #11     (PASO ANGULAR ENTRE AGUJEROS)\n\n(CALCULO DE POSICION DEL AGUJERO INICIAL)\n#30 = #1 + [[#19 - 1.0] * #17]\n#31 = #24 + [#14 * COS[#30]]\n#32 = #25 + [#14 * SIN[#30]]\n#33 = #19             (CONTADOR DE AGUJERO ACTUAL)\n\n(ARRANQUE DE HUSILLO Y APROXIMACION SEGURA)\nS#2 M03 M08\nG90 G00 X#31 Y#32\nG00 Z50.0             (PLANO SEGURO INICIAL)\nG00 Z#18              (PLANO DE RETROCESO R)\n\n(TALADRADO DEL AGUJERO INICIAL CON G83)\nG99 G83 X#31 Y#32 Z-[#26] R#18 Q#8 F#9\n\n(BUCLE PARA LOS AGUJEROS RESTANTES EN G90 ABSOLUTO)\nWHILE [#33 LT #11] DO1\n  #33 = #33 + 1.0\n  #30 = #1 + [[#33 - 1.0] * #17]\n  #31 = #24 + [#14 * COS[#30]]\n  #32 = #25 + [#14 * SIN[#30]]\n  X#31 Y#32\nEND1\n\nG80                   (CANCELAR CICLO FIJO)\nG90 G00 Z50.0         (SUBIR A ALTURA SEGURA)\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DIAMETRO BCD DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (CANTIDAD DE AGUJEROS DEBE SER ENTERO)\nN9103 #3000 = 103 (NUMERO DE AGUJEROS DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (AGUJERO DE INICIO S DEBE SER AL MENOS 1)\nN9105 #3000 = 105 (AGUJERO DE INICIO S NO PUEDE SUPERAR TOTAL H)\nN9106 #3000 = 106 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9107 #3000 = 107 (AVANCE F DEBE SER MAYOR A CERO)\nN9108 #3000 = 108 (VELOCIDAD DE HUSILLO B DEBE SER MAYOR A CERO)\nN9109 #3000 = 109 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9110 #3000 = 110 (PASO DE PICOTEO E DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\n"
  },
  {
    "id": "O8105",
    "filename": "O8105_Patron_Agujeros_Arco.nc",
    "title": "O8105 - Patron de Agujeros en Arco",
    "subtitle": "Barrenado en segmento circular con paso angular uniforme",
    "category": "patrones_agujeros",
    "category_title": "PATRONES DE AGUJEROS // TALADRADO PARAMETRICO",
    "category_label": "PATRONES DE AGUJEROS",
    "category_color": "primary",
    "sub_category": "agujero_arco",
    "icon": "timelapse",
    "book_chapter": "Ingeniero Nestor Gamez",
    "g65_template": "G65 P8105 X[#24] Y[#25] W[#23] H[#11] A[#1] I[#4] T[#20] F[#9] S[#19] Z[#26] R[#18] E[#8]",
    "variables": [
      {
        "num": 24,
        "letter": "X",
        "value": 0.0,
        "comment": "COORDENADA X DEL CENTRO DEL ARCO",
        "full_comment": "X: COORDENADA X DEL CENTRO DEL ARCO",
        "line_idx": 7,
        "original_line": "#24 = 0.0    (X: COORDENADA X DEL CENTRO DEL ARCO)"
      },
      {
        "num": 25,
        "letter": "Y",
        "value": 0.0,
        "comment": "COORDENADA Y DEL CENTRO DEL ARCO",
        "full_comment": "Y: COORDENADA Y DEL CENTRO DEL ARCO",
        "line_idx": 8,
        "original_line": "#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DEL ARCO)"
      },
      {
        "num": 23,
        "letter": "W",
        "value": 100.0,
        "comment": "DIAMETRO DEL ARCO DE AGUJEROS",
        "full_comment": "W: DIAMETRO DEL ARCO DE AGUJEROS",
        "line_idx": 9,
        "original_line": "#23 = 100.0  (W: DIAMETRO DEL ARCO DE AGUJEROS)"
      },
      {
        "num": 11,
        "letter": "H",
        "value": 6.0,
        "comment": "CANTIDAD DE AGUJEROS EN EL ARCO",
        "full_comment": "H: CANTIDAD DE AGUJEROS EN EL ARCO",
        "line_idx": 10,
        "original_line": "#11 = 6.0    (H: CANTIDAD DE AGUJEROS EN EL ARCO)"
      },
      {
        "num": 1,
        "letter": "A",
        "value": 15.0,
        "comment": "ANGULO DEL PRIMER AGUJERO DESDE EJE X+",
        "full_comment": "A: ANGULO DEL PRIMER AGUJERO DESDE EJE X+",
        "line_idx": 11,
        "original_line": "#1  = 15.0   (A: ANGULO DEL PRIMER AGUJERO DESDE EJE X+)"
      },
      {
        "num": 4,
        "letter": "I",
        "value": 30.0,
        "comment": "SEPARACION ANGULAR ENTRE AGUJEROS CONSECUTIVOS",
        "full_comment": "I: SEPARACION ANGULAR ENTRE AGUJEROS CONSECUTIVOS",
        "line_idx": 12,
        "original_line": "#4  = 30.0   (I: SEPARACION ANGULAR ENTRE AGUJEROS CONSECUTIVOS)"
      },
      {
        "num": 20,
        "letter": "T",
        "value": 10.0,
        "comment": "DIAMETRO DE LA BROCA / HERRAMIENTA",
        "full_comment": "T: DIAMETRO DE LA BROCA / HERRAMIENTA",
        "line_idx": 15,
        "original_line": "#20 = 10.0   (T: DIAMETRO DE LA BROCA / HERRAMIENTA)"
      },
      {
        "num": 9,
        "letter": "F",
        "value": 250.0,
        "comment": "AVANCE DE TALADRADO EN MM/MIN",
        "full_comment": "F: AVANCE DE TALADRADO EN MM/MIN",
        "line_idx": 16,
        "original_line": "#9  = 250.0  (F: AVANCE DE TALADRADO EN MM/MIN)"
      },
      {
        "num": 19,
        "letter": "S",
        "value": 1200.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "S: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 17,
        "original_line": "#19 = 1200.0 (S: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 26,
        "letter": "Z",
        "value": 20.0,
        "comment": "PROFUNDIDAD TOTAL DE PERFORACION",
        "full_comment": "Z: PROFUNDIDAD TOTAL DE PERFORACION",
        "line_idx": 20,
        "original_line": "#26 = 20.0   (Z: PROFUNDIDAD TOTAL DE PERFORACION)"
      },
      {
        "num": 18,
        "letter": "R",
        "value": 2.0,
        "comment": "PLANO DE RETROCESO Y SEGURIDAD",
        "full_comment": "R: PLANO DE RETROCESO Y SEGURIDAD",
        "line_idx": 21,
        "original_line": "#18 = 2.0    (R: PLANO DE RETROCESO Y SEGURIDAD)"
      },
      {
        "num": 8,
        "letter": "E",
        "value": 5.0,
        "comment": "PASO DE PICOTEO EN Z PARA G83",
        "full_comment": "E: PASO DE PICOTEO EN Z PARA G83",
        "line_idx": 22,
        "original_line": "#8  = 5.0    (E: PASO DE PICOTEO EN Z PARA G83)"
      }
    ],
    "full_content": "%\nO8105 (PATRON DE AGUJEROS EN ARCO CIRCULAR)\n(INGENIERO NESTOR GAMEZ - FANUC CNC CUSTOM MACROS)\n(LLAMADA G65: G65 P8105 X.. Y.. W.. H.. A.. I.. T.. F.. S.. Z.. R.. E..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DEL ARCO)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DEL ARCO)\n#23 = 100.0  (W: DIAMETRO DEL ARCO DE AGUJEROS)\n#11 = 6.0    (H: CANTIDAD DE AGUJEROS EN EL ARCO)\n#1  = 15.0   (A: ANGULO DEL PRIMER AGUJERO DESDE EJE X+)\n#4  = 30.0   (I: SEPARACION ANGULAR ENTRE AGUJEROS CONSECUTIVOS)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA BROCA / HERRAMIENTA)\n#9  = 250.0  (F: AVANCE DE TALADRADO EN MM/MIN)\n#19 = 1200.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE PERFORADO Y SEGURIDAD)\n#26 = 20.0   (Z: PROFUNDIDAD TOTAL DE PERFORACION)\n#18 = 2.0    (R: PLANO DE RETROCESO Y SEGURIDAD)\n#8  = 5.0    (E: PASO DE PICOTEO EN Z PARA G83)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#23 LE 0] GOTO9101\nIF [#11 LT 1] GOTO9102\nIF [#11 NE FUP[#11]] GOTO9103\nIF [#4 EQ 0] GOTO9104\nIF [#26 LE 0] GOTO9105\nIF [#9 LE 0] GOTO9106\nIF [#20 LE 0] GOTO9107\nIF [#8 LE 0] GOTO9108\nIF [#18 LT 0] #18 = 2.0\n\n(GUARDA ESTADO PREVIO DE G90/G91)\n#10 = #4003\n\n(CONSTANTES DE GEOMETRIA EN ARCO)\n#14 = #23 / 2.0       (RADIO DEL ARCO)\n\n(CALCULO DE POSICION DEL PRIMER AGUJERO)\n#30 = #1              (ANGULO INICIAL)\n#31 = #24 + [#14 * COS[#30]]\n#32 = #25 + [#14 * SIN[#30]]\n#33 = 1               (CONTADOR DE AGUJEROS INICIADO EN 1)\n\n(ARRANQUE DE HUSILLO Y APROXIMACION SEGURA)\nS#19 M03 M08\nG90 G00 X#31 Y#32\nG00 Z50.0             (PLANO SEGURO INICIAL)\nG00 Z#18              (PLANO DE RETROCESO R)\n\n(TALADRADO DEL PRIMER AGUJERO CON G83)\nG99 G83 X#31 Y#32 Z-[#26] R#18 Q#8 F#9\n\n(BUCLE PARA LOS AGUJEROS RESTANTES EN G90 ABSOLUTO)\nWHILE [#33 LT #11] DO1\n  #30 = #1 + [#33 * #4]\n  #31 = #24 + [#14 * COS[#30]]\n  #32 = #25 + [#14 * SIN[#30]]\n  X#31 Y#32\n  #33 = #33 + 1\nEND1\n\nG80                   (CANCELAR CICLO FIJO)\nG90 G00 Z50.0         (SUBIR A ALTURA SEGURA)\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DIAMETRO DEL ARCO DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (MINIMO 1 AGUJERO EN EL ARCO)\nN9103 #3000 = 103 (CANTIDAD DE AGUJEROS DEBE SER ENTERO)\nN9104 #3000 = 104 (INCREMENTO ANGULAR I NO PUEDE SER CERO)\nN9105 #3000 = 105 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9106 #3000 = 106 (AVANCE F DEBE SER MAYOR A CERO)\nN9107 #3000 = 107 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9108 #3000 = 108 (PASO DE PICOTEO E DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\n"
  },
  {
    "id": "O8106",
    "filename": "O8106_Cajera_Circular_Desbaste.nc",
    "title": "O8106 - Desbaste de Cajera Circular",
    "subtitle": "Vaciado concentrico con control de sobrematerial en paredes U y fondo V",
    "category": "cajeras",
    "category_title": "CAJERAS (POCKETS) // CIRCULARES Y RECTANGULARES",
    "category_label": "CAJERAS (POCKETS)",
    "category_color": "secondary",
    "sub_category": "circulares",
    "icon": "radio_button_checked",
    "book_chapter": "Ingeniero Nestor Gamez",
    "g65_template": "G65 P8106 X[#24] Y[#25] D[#7] T[#20] F[#9] S[#19] Z[#26] K[#6] W[#23] U[#21] V[#22] R[#18]",
    "variables": [
      {
        "num": 24,
        "letter": "X",
        "value": 0.0,
        "comment": "COORDENADA X DEL CENTRO DE LA CAJERA",
        "full_comment": "X: COORDENADA X DEL CENTRO DE LA CAJERA",
        "line_idx": 7,
        "original_line": "#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)"
      },
      {
        "num": 25,
        "letter": "Y",
        "value": 0.0,
        "comment": "COORDENADA Y DEL CENTRO DE LA CAJERA",
        "full_comment": "Y: COORDENADA Y DEL CENTRO DE LA CAJERA",
        "line_idx": 8,
        "original_line": "#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)"
      },
      {
        "num": 7,
        "letter": "D",
        "value": 80.0,
        "comment": "DIAMETRO FINAL DE LA CAJERA",
        "full_comment": "D: DIAMETRO FINAL DE LA CAJERA",
        "line_idx": 9,
        "original_line": "#7  = 80.0   (D: DIAMETRO FINAL DE LA CAJERA)"
      },
      {
        "num": 20,
        "letter": "T",
        "value": 10.0,
        "comment": "DIAMETRO DE LA FRESA DE CORTE",
        "full_comment": "T: DIAMETRO DE LA FRESA DE CORTE",
        "line_idx": 12,
        "original_line": "#20 = 10.0   (T: DIAMETRO DE LA FRESA DE CORTE)"
      },
      {
        "num": 9,
        "letter": "F",
        "value": 400.0,
        "comment": "AVANCE DE MECANIZADO EN MM/MIN",
        "full_comment": "F: AVANCE DE MECANIZADO EN MM/MIN",
        "line_idx": 13,
        "original_line": "#9  = 400.0  (F: AVANCE DE MECANIZADO EN MM/MIN)"
      },
      {
        "num": 19,
        "letter": "S",
        "value": 1800.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "S: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 14,
        "original_line": "#19 = 1800.0 (S: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 26,
        "letter": "Z",
        "value": 15.0,
        "comment": "PROFUNDIDAD TOTAL DE LA CAJERA",
        "full_comment": "Z: PROFUNDIDAD TOTAL DE LA CAJERA",
        "line_idx": 17,
        "original_line": "#26 = 15.0   (Z: PROFUNDIDAD TOTAL DE LA CAJERA)"
      },
      {
        "num": 6,
        "letter": "K",
        "value": 3.0,
        "comment": "PROFUNDIDAD POR PASADA EN EJE Z",
        "full_comment": "K: PROFUNDIDAD POR PASADA EN EJE Z",
        "line_idx": 18,
        "original_line": "#6  = 3.0    (K: PROFUNDIDAD POR PASADA EN EJE Z)"
      },
      {
        "num": 23,
        "letter": "W",
        "value": 6.0,
        "comment": "ANCHO DE CORTE RADIAL O PASO LATERAL",
        "full_comment": "W: ANCHO DE CORTE RADIAL O PASO LATERAL",
        "line_idx": 19,
        "original_line": "#23 = 6.0    (W: ANCHO DE CORTE RADIAL O PASO LATERAL)"
      },
      {
        "num": 21,
        "letter": "U",
        "value": 0.5,
        "comment": "SOBREMATERIAL DE ACABADO EN PAREDES LATERALES",
        "full_comment": "U: SOBREMATERIAL DE ACABADO EN PAREDES LATERALES",
        "line_idx": 20,
        "original_line": "#21 = 0.5    (U: SOBREMATERIAL DE ACABADO EN PAREDES LATERALES)"
      },
      {
        "num": 22,
        "letter": "V",
        "value": 0.2,
        "comment": "SOBREMATERIAL DE ACABADO EN EL FONDO Z",
        "full_comment": "V: SOBREMATERIAL DE ACABADO EN EL FONDO Z",
        "line_idx": 21,
        "original_line": "#22 = 0.2    (V: SOBREMATERIAL DE ACABADO EN EL FONDO Z)"
      },
      {
        "num": 18,
        "letter": "R",
        "value": 2.0,
        "comment": "PLANO DE RETROCESO Y SEGURIDAD EN Z",
        "full_comment": "R: PLANO DE RETROCESO Y SEGURIDAD EN Z",
        "line_idx": 22,
        "original_line": "#18 = 2.0    (R: PLANO DE RETROCESO Y SEGURIDAD EN Z)"
      }
    ],
    "full_content": "%\nO8106 (DESBASTE DE CAJERA CIRCULAR)\n(INGENIERO NESTOR GAMEZ - FANUC CNC CUSTOM MACROS)\n(LLAMADA G65: G65 P8106 X.. Y.. D.. T.. F.. S.. Z.. K.. W.. U.. V.. R..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS DE LA PIEZA)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)\n#7  = 80.0   (D: DIAMETRO FINAL DE LA CAJERA)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA FRESA DE CORTE)\n#9  = 400.0  (F: AVANCE DE MECANIZADO EN MM/MIN)\n#19 = 1800.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SOBREMATERIAL DE ACABADO)\n#26 = 15.0   (Z: PROFUNDIDAD TOTAL DE LA CAJERA)\n#6  = 3.0    (K: PROFUNDIDAD POR PASADA EN EJE Z)\n#23 = 6.0    (W: ANCHO DE CORTE RADIAL O PASO LATERAL)\n#21 = 0.5    (U: SOBREMATERIAL DE ACABADO EN PAREDES LATERALES)\n#22 = 0.2    (V: SOBREMATERIAL DE ACABADO EN EL FONDO Z)\n#18 = 2.0    (R: PLANO DE RETROCESO Y SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#7 LE 0]  GOTO9101\nIF [#20 LE 0] GOTO9102\nIF [#23 LE 0] GOTO9103\nIF [#26 LE 0] GOTO9104\nIF [#9 LE 0]  GOTO9105\nIF [#6 LE 0]  GOTO9107\nIF [#18 LT 0] #18 = 2.0\n\n(GUARDA ESTADO PREVIO DE G90/G91)\n#10 = #4003\n#14 = #7 / 2.0       (RADIO NOMINAL FINAL DE LA CAJERA)\n#15 = #20 / 2.0      (RADIO DE LA FRESA)\n#21 = ABS[#21]       (SOBREMATERIAL PAREDES U)\n#22 = ABS[#22]       (SOBREMATERIAL FONDO V)\n\n(CALCULO DE RADIO Y PROFUNDIDAD EFECTIVA DE DESBASTE)\n#12 = #14 - #21      (RADIO DE DESBASTE DEJANDO SOBREMATERIAL U)\nIF [#15 GE #12] GOTO9106 (RADIO FRESA MAYOR QUE EL RADIO DE DESBASTE)\n\n#4 = #12 - #15       (RADIO MAXIMO DEL CENTRO DE LA FRESA EN DESBASTE)\n\n#26 = ABS[#26]\n#6  = ABS[#6]\n#27 = #26 - #22      (PROFUNDIDAD DE DESBASTE DEJANDO SOBREMATERIAL V EN FONDO)\nIF [#27 LE 0] #27 = #26\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO EN CENTRO)\nS#19 M03 M08\nG90 G00 X#24 Y#25\nG00 Z50.0             (PLANO SEGURO INICIAL)\nG00 Z#18              (PLANO DE RETROCESO R)\n\n(BUCLE PRINCIPAL DE PROFUNDIDAD EN Z)\n#16 = 0.0\nWHILE [#16 LT #27] DO1\n  #16 = #16 + #6\n  IF [#16 GT #27] #16 = #27\n\n  (BAJADA EN Z AL CENTRO CON AVANCE DE PENETRACION CONTROLADO)\n  G90 G01 Z-[#16] F[#9 * 0.4]\n\n  (ESPIRAL CONCENTRICA HACIA AFUERA)\n  #33 = #23\n  WHILE [#33 LT #4] DO2\n    G90 G01 X[#24 + #33] F#9\n    G03 X[#24 + #33] Y#25 I-[#33] J0.0\n    #33 = #33 + #23\n  END2\n\n  (PASADA PERIMETRAL EN EL LIMITE DE DESBASTE)\n  G90 G01 X[#24 + #4] F#9\n  G03 X[#24 + #4] Y#25 I-[#4] J0.0\n\n  (DESPEGAR EN Z AL PLANO SEGURO ANTES DE VOLVER AL CENTRO)\n  G90 G00 Z#18\n  G00 X#24 Y#25\nEND1\n\n(RETIRADA A PLANO DE SEGURIDAD Z50)\nG90 G00 Z50.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DIAMETRO DE LA CAJERA DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (PASO RADIAL W DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9105 #3000 = 105 (AVANCE F DEBE SER MAYOR A CERO)\nN9106 #3000 = 106 (HERRAMIENTA Y SOBREMATERIAL EXCEDEN CAJERA)\nN9107 #3000 = 107 (PASO EN Z K DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\n"
  },
  {
    "id": "O8107",
    "filename": "O8107_Cajera_Circular_Acabado.nc",
    "title": "O8107 - Acabado de Cajera Circular",
    "subtitle": "Perfilado circular con entrada y salida tangencial en arco",
    "category": "cajeras",
    "category_title": "CAJERAS (POCKETS) // CIRCULARES Y RECTANGULARES",
    "category_label": "CAJERAS (POCKETS)",
    "category_color": "secondary",
    "sub_category": "circulares",
    "icon": "track_changes",
    "book_chapter": "Ingeniero Nestor Gamez",
    "g65_template": "G65 P8107 X[#24] Y[#25] W[#23] T[#20] F[#9] S[#19] Z[#26] R[#18]",
    "variables": [
      {
        "num": 24,
        "letter": "X",
        "value": 0.0,
        "comment": "COORDENADA X DEL CENTRO DE LA CAJERA",
        "full_comment": "X: COORDENADA X DEL CENTRO DE LA CAJERA",
        "line_idx": 7,
        "original_line": "#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)"
      },
      {
        "num": 25,
        "letter": "Y",
        "value": 0.0,
        "comment": "COORDENADA Y DEL CENTRO DE LA CAJERA",
        "full_comment": "Y: COORDENADA Y DEL CENTRO DE LA CAJERA",
        "line_idx": 8,
        "original_line": "#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)"
      },
      {
        "num": 23,
        "letter": "W",
        "value": 80.0,
        "comment": "DIAMETRO FINAL TERMINADO",
        "full_comment": "W: DIAMETRO FINAL TERMINADO",
        "line_idx": 9,
        "original_line": "#23 = 80.0   (W: DIAMETRO FINAL TERMINADO)"
      },
      {
        "num": 20,
        "letter": "T",
        "value": 10.0,
        "comment": "DIAMETRO DE LA FRESA DE ACABADO",
        "full_comment": "T: DIAMETRO DE LA FRESA DE ACABADO",
        "line_idx": 12,
        "original_line": "#20 = 10.0   (T: DIAMETRO DE LA FRESA DE ACABADO)"
      },
      {
        "num": 9,
        "letter": "F",
        "value": 250.0,
        "comment": "AVANCE DE CORTE DE ACABADO EN MM/MIN",
        "full_comment": "F: AVANCE DE CORTE DE ACABADO EN MM/MIN",
        "line_idx": 13,
        "original_line": "#9  = 250.0  (F: AVANCE DE CORTE DE ACABADO EN MM/MIN)"
      },
      {
        "num": 19,
        "letter": "S",
        "value": 2200.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "S: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 14,
        "original_line": "#19 = 2200.0 (S: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 26,
        "letter": "Z",
        "value": 15.0,
        "comment": "PROFUNDIDAD TERMINADA DE LA CAJERA",
        "full_comment": "Z: PROFUNDIDAD TERMINADA DE LA CAJERA",
        "line_idx": 17,
        "original_line": "#26 = 15.0   (Z: PROFUNDIDAD TERMINADA DE LA CAJERA)"
      },
      {
        "num": 18,
        "letter": "R",
        "value": 2.0,
        "comment": "PLANO DE SEGURIDAD EN Z",
        "full_comment": "R: PLANO DE SEGURIDAD EN Z",
        "line_idx": 18,
        "original_line": "#18 = 2.0    (R: PLANO DE SEGURIDAD EN Z)"
      }
    ],
    "full_content": "%\nO8107 (ACABADO DE CAJERA CIRCULAR)\n(INGENIERO NESTOR GAMEZ - FANUC CNC CUSTOM MACROS)\n(LLAMADA G65: G65 P8107 X.. Y.. W.. T.. F.. S.. Z.. R..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)\n#23 = 80.0   (W: DIAMETRO FINAL TERMINADO)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA FRESA DE ACABADO)\n#9  = 250.0  (F: AVANCE DE CORTE DE ACABADO EN MM/MIN)\n#19 = 2200.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SEGURIDAD)\n#26 = 15.0   (Z: PROFUNDIDAD TERMINADA DE LA CAJERA)\n#18 = 2.0    (R: PLANO DE SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#23 LE 0] GOTO9101\nIF [#20 LE 0] GOTO9102\nIF [#26 LE 0] GOTO9103\nIF [#9 LE 0]  GOTO9104\nIF [#19 LE 0] GOTO9106\nIF [#18 LT 0] #18 = 2.0\n\n(GUARDA ESTADO PREVIO DE G90/G91)\n#10 = #4003\n#14 = #23 / 2.0      (RADIO DE LA CAJERA)\n#15 = #20 / 2.0      (RADIO DE LA FRESA)\nIF [#15 GE #14] GOTO9105\n\n#4 = #14 - #15       (RADIO DE TRAYECTORIA DEL CENTRO DE HERRAMIENTA)\n#32 = #4 / 2.0       (RADIO DEL ARCO DE ENTRADA Y SALIDA TANGENCIAL)\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO EN EL CENTRO)\nS#19 M03 M08\nG90 G00 X#24 Y#25\nG00 Z50.0             (PLANO SEGURO INICIAL)\nG00 Z#18              (PLANO DE RETROCESO R)\nG01 Z-[#26] F[#9 * 0.4]\n\n(ENTRADA EN ARCO TANGENCIAL DESDE EL CENTRO)\nG91 G03 X#4 I#32 J0.0 F#9\n\n(MECANIZADO PERIMETRAL CIRCULAR COMPLETO 360 GRADOS)\nG03 I-[#4] J0.0\n\n(SALIDA EN ARCO TANGENCIAL HACIA EL CENTRO)\nG03 X-[#4] I-[#32] J0.0\n\n(RETIRADA A PLANO DE SEGURIDAD Z50)\nG90 G00 Z50.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DIAMETRO DE LA CAJERA DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (AVANCE F DEBE SER MAYOR A CERO)\nN9105 #3000 = 105 (HERRAMIENTA EXCEDE RADIO DE LA CAJERA)\nN9106 #3000 = 106 (VELOCIDAD DE HUSILLO S DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\n"
  },
  {
    "id": "O8111",
    "filename": "O8111_Corte_Circular_G13.nc",
    "title": "O8111 - Ciclo de Corte Circular (Emulacion G13)",
    "subtitle": "Trayectoria G13 emulada con G03 en fresado ascendente (climb milling)",
    "category": "cajeras",
    "category_title": "CAJERAS (POCKETS) // CIRCULARES Y RECTANGULARES",
    "category_label": "CAJERAS (POCKETS)",
    "category_color": "secondary",
    "sub_category": "circulares",
    "icon": "all_inclusive",
    "book_chapter": "Ingeniero Nestor Gamez",
    "g65_template": "G65 P8111 X[#24] Y[#25] D[#7] T[#20] F[#9] S[#19] Z[#26] R[#18]",
    "variables": [
      {
        "num": 24,
        "letter": "X",
        "value": 0.0,
        "comment": "COORDENADA X DEL CENTRO DE LA CAJERA",
        "full_comment": "X: COORDENADA X DEL CENTRO DE LA CAJERA",
        "line_idx": 9,
        "original_line": "#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)"
      },
      {
        "num": 25,
        "letter": "Y",
        "value": 0.0,
        "comment": "COORDENADA Y DEL CENTRO DE LA CAJERA",
        "full_comment": "Y: COORDENADA Y DEL CENTRO DE LA CAJERA",
        "line_idx": 10,
        "original_line": "#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)"
      },
      {
        "num": 7,
        "letter": "D",
        "value": 60.0,
        "comment": "DIAMETRO DE LA CAJERA CIRCULAR",
        "full_comment": "D: DIAMETRO DE LA CAJERA CIRCULAR",
        "line_idx": 11,
        "original_line": "#7  = 60.0   (D: DIAMETRO DE LA CAJERA CIRCULAR)"
      },
      {
        "num": 20,
        "letter": "T",
        "value": 12.0,
        "comment": "DIAMETRO DE LA FRESA DE CORTE",
        "full_comment": "T: DIAMETRO DE LA FRESA DE CORTE",
        "line_idx": 14,
        "original_line": "#20 = 12.0   (T: DIAMETRO DE LA FRESA DE CORTE)"
      },
      {
        "num": 9,
        "letter": "F",
        "value": 300.0,
        "comment": "VELOCIDAD DE AVANCE DE CORTE EN MM/MIN",
        "full_comment": "F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN",
        "line_idx": 15,
        "original_line": "#9  = 300.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)"
      },
      {
        "num": 19,
        "letter": "S",
        "value": 2000.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "S: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 16,
        "original_line": "#19 = 2000.0 (S: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 26,
        "letter": "Z",
        "value": 12.0,
        "comment": "PROFUNDIDAD DE LA CAJERA",
        "full_comment": "Z: PROFUNDIDAD DE LA CAJERA",
        "line_idx": 19,
        "original_line": "#26 = 12.0   (Z: PROFUNDIDAD DE LA CAJERA)"
      },
      {
        "num": 18,
        "letter": "R",
        "value": 2.0,
        "comment": "PLANO DE SEGURIDAD EN Z",
        "full_comment": "R: PLANO DE SEGURIDAD EN Z",
        "line_idx": 20,
        "original_line": "#18 = 2.0    (R: PLANO DE SEGURIDAD EN Z)"
      }
    ],
    "full_content": "%\nO8111 (CICLO DE CORTE CIRCULAR G13 - EMULACION CON G03)\n(INGENIERO NESTOR GAMEZ - FANUC CNC CUSTOM MACROS)\n(LLAMADA G65: G65 P8111 X.. Y.. D.. T.. F.. S.. Z.. R..)\n(NOTA: G13 NO ES UN CICLO ESTANDAR EN TODOS LOS CONTROLES;)\n(ESTA MACRO EMULA SU TRAYECTORIA CON MOVIMIENTOS G03.)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)\n#7  = 60.0   (D: DIAMETRO DE LA CAJERA CIRCULAR)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 12.0   (T: DIAMETRO DE LA FRESA DE CORTE)\n#9  = 300.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)\n#19 = 2000.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SEGURIDAD)\n#26 = 12.0   (Z: PROFUNDIDAD DE LA CAJERA)\n#18 = 2.0    (R: PLANO DE SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#7 LE 0]  GOTO9101\nIF [#20 LE 0] GOTO9102\nIF [#9 LE 0]  GOTO9103\nIF [#26 LE 0] GOTO9105\nIF [#19 LE 0] GOTO9106\nIF [#18 LT 0] #18 = 2.0\n\n(GUARDA ESTADO PREVIO DE G90/G91)\n#11 = #4001\n#13 = #4003\n\n#31 = ABS[#7] / 2.0  (RADIO DE CAJERA)\n#15 = #20 / 2.0      (RADIO DE FRESA)\n#32 = #31 - #15      (RADIO DE TRAYECTORIA DEL CENTRO DE HERRAMIENTA)\nIF [#32 LE 0] GOTO9104\n\n#33 = #32 / 2.0      (RADIO DE ARCO DE ENTRADA Y SALIDA)\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO AL FONDO)\nS#19 M03 M08\nG90 G00 X#24 Y#25\nG00 Z50.0             (PLANO SEGURO INICIAL)\nG00 Z#18              (PLANO DE RETROCESO R)\nG01 Z-[#26] F[#9 * 0.4]\n\n(CICLO G13: FRESADO EN CONCORDANCIA / CLIMB MILLING)\nG91 G03 X#32 I#33 J0.0 F#9\nG03 I-[#32] J0.0\nG03 X-[#32] I-[#33] J0.0\n\n(RESTAURA CONDICIONES Y RETIRO A Z50)\nG90 G00 Z50.0\nG#11 G#13\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DIAMETRO D DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (AVANCE F DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (HERRAMIENTA EXCEDE RADIO DE LA CAJERA)\nN9105 #3000 = 105 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9106 #3000 = 106 (VELOCIDAD DE HUSILLO S DEBE SER MAYOR A CERO)\n\nN9999 G#13\nM99\n%\n"
  },
  {
    "id": "O8112",
    "filename": "O8112_Cajera_Rectangular_Desbaste.nc",
    "title": "O8112 - Desbaste de Cajera Rectangular",
    "subtitle": "Vaciado concentrico rectangular con control de sobrematerial en paredes U y fondo V",
    "category": "cajeras",
    "category_title": "CAJERAS (POCKETS) // CIRCULARES Y RECTANGULARES",
    "category_label": "CAJERAS (POCKETS)",
    "category_color": "secondary",
    "sub_category": "rectangulares",
    "icon": "crop_free",
    "book_chapter": "Ingeniero Nestor Gamez",
    "g65_template": "G65 P8112 X[#24] Y[#25] W[#23] H[#11] R[#18] T[#20] F[#9] S[#19] Z[#26] K[#6] E[#8] U[#21] V[#22] B[#2]",
    "variables": [
      {
        "num": 24,
        "letter": "X",
        "value": 0.0,
        "comment": "COORDENADA X DEL CENTRO DE LA CAJERA",
        "full_comment": "X: COORDENADA X DEL CENTRO DE LA CAJERA",
        "line_idx": 7,
        "original_line": "#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)"
      },
      {
        "num": 25,
        "letter": "Y",
        "value": 0.0,
        "comment": "COORDENADA Y DEL CENTRO DE LA CAJERA",
        "full_comment": "Y: COORDENADA Y DEL CENTRO DE LA CAJERA",
        "line_idx": 8,
        "original_line": "#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)"
      },
      {
        "num": 23,
        "letter": "W",
        "value": 100.0,
        "comment": "LONGITUD TOTAL DE LA CAJERA EN EJE X",
        "full_comment": "W: LONGITUD TOTAL DE LA CAJERA EN EJE X",
        "line_idx": 9,
        "original_line": "#23 = 100.0  (W: LONGITUD TOTAL DE LA CAJERA EN EJE X)"
      },
      {
        "num": 11,
        "letter": "H",
        "value": 60.0,
        "comment": "ANCHURA TOTAL DE LA CAJERA EN EJE Y",
        "full_comment": "H: ANCHURA TOTAL DE LA CAJERA EN EJE Y",
        "line_idx": 10,
        "original_line": "#11 = 60.0   (H: ANCHURA TOTAL DE LA CAJERA EN EJE Y)"
      },
      {
        "num": 18,
        "letter": "R",
        "value": 10.0,
        "comment": "RADIO DE LAS ESQUINAS INTERIORES",
        "full_comment": "R: RADIO DE LAS ESQUINAS INTERIORES",
        "line_idx": 11,
        "original_line": "#18 = 10.0   (R: RADIO DE LAS ESQUINAS INTERIORES)"
      },
      {
        "num": 20,
        "letter": "T",
        "value": 10.0,
        "comment": "DIAMETRO DE LA FRESA O CORTADOR",
        "full_comment": "T: DIAMETRO DE LA FRESA O CORTADOR",
        "line_idx": 14,
        "original_line": "#20 = 10.0   (T: DIAMETRO DE LA FRESA O CORTADOR)"
      },
      {
        "num": 9,
        "letter": "F",
        "value": 350.0,
        "comment": "VELOCIDAD DE AVANCE DE CORTE EN MM/MIN",
        "full_comment": "F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN",
        "line_idx": 15,
        "original_line": "#9  = 350.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)"
      },
      {
        "num": 19,
        "letter": "S",
        "value": 1800.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "S: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 16,
        "original_line": "#19 = 1800.0 (S: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 26,
        "letter": "Z",
        "value": 15.0,
        "comment": "PROFUNDIDAD TOTAL DE LA CAJERA",
        "full_comment": "Z: PROFUNDIDAD TOTAL DE LA CAJERA",
        "line_idx": 19,
        "original_line": "#26 = 15.0   (Z: PROFUNDIDAD TOTAL DE LA CAJERA)"
      },
      {
        "num": 6,
        "letter": "K",
        "value": 3.0,
        "comment": "PASO DE PROFUNDIDAD EN Z POR PASADA",
        "full_comment": "K: PASO DE PROFUNDIDAD EN Z POR PASADA",
        "line_idx": 20,
        "original_line": "#6  = 3.0    (K: PASO DE PROFUNDIDAD EN Z POR PASADA)"
      },
      {
        "num": 8,
        "letter": "E",
        "value": 6.0,
        "comment": "PASO LATERAL RADIAL ENTRE CONTORNOS",
        "full_comment": "E: PASO LATERAL RADIAL ENTRE CONTORNOS",
        "line_idx": 21,
        "original_line": "#8  = 6.0    (E: PASO LATERAL RADIAL ENTRE CONTORNOS)"
      },
      {
        "num": 21,
        "letter": "U",
        "value": 0.5,
        "comment": "SOBREMATERIAL DE ACABADO EN PAREDES LATERALES",
        "full_comment": "U: SOBREMATERIAL DE ACABADO EN PAREDES LATERALES",
        "line_idx": 22,
        "original_line": "#21 = 0.5    (U: SOBREMATERIAL DE ACABADO EN PAREDES LATERALES)"
      },
      {
        "num": 22,
        "letter": "V",
        "value": 0.2,
        "comment": "SOBREMATERIAL DE ACABADO EN EL FONDO Z",
        "full_comment": "V: SOBREMATERIAL DE ACABADO EN EL FONDO Z",
        "line_idx": 23,
        "original_line": "#22 = 0.2    (V: SOBREMATERIAL DE ACABADO EN EL FONDO Z)"
      },
      {
        "num": 2,
        "letter": "B",
        "value": 2.0,
        "comment": "PLANO DE RETROCESO Y SEGURIDAD EN Z",
        "full_comment": "B: PLANO DE RETROCESO Y SEGURIDAD EN Z",
        "line_idx": 24,
        "original_line": "#2  = 2.0    (B: PLANO DE RETROCESO Y SEGURIDAD EN Z)"
      }
    ],
    "full_content": "%\nO8112 (DESBASTE DE CAJERA RECTANGULAR)\n(INGENIERO NESTOR GAMEZ - FANUC CNC CUSTOM MACROS)\n(LLAMADA G65: G65 P8112 X.. Y.. W.. H.. R.. T.. F.. S.. Z.. K.. E.. U.. V.. B..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS DE LA PIEZA)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)\n#23 = 100.0  (W: LONGITUD TOTAL DE LA CAJERA EN EJE X)\n#11 = 60.0   (H: ANCHURA TOTAL DE LA CAJERA EN EJE Y)\n#18 = 10.0   (R: RADIO DE LAS ESQUINAS INTERIORES)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA FRESA O CORTADOR)\n#9  = 350.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)\n#19 = 1800.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SOBREMATERIAL DE ACABADO)\n#26 = 15.0   (Z: PROFUNDIDAD TOTAL DE LA CAJERA)\n#6  = 3.0    (K: PASO DE PROFUNDIDAD EN Z POR PASADA)\n#8  = 6.0    (E: PASO LATERAL RADIAL ENTRE CONTORNOS)\n#21 = 0.5    (U: SOBREMATERIAL DE ACABADO EN PAREDES LATERALES)\n#22 = 0.2    (V: SOBREMATERIAL DE ACABADO EN EL FONDO Z)\n#2  = 2.0    (B: PLANO DE RETROCESO Y SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#23 LE 0] GOTO9101\nIF [#11 LE 0] GOTO9102\nIF [#26 LE 0] GOTO9103\nIF [#20 LE 0] GOTO9104\nIF [#6 LE 0]  GOTO9105\nIF [#9 LE 0]  GOTO9109\nIF [#19 LE 0] GOTO9110\n#15 = #20 / 2.0\nIF [#15 GE #18] GOTO9106\nIF [#2 EQ 0] #2 = 2.0\n\n(GUARDA ESTADO PREVIO DE G90/G91)\n#10 = #4003\n\n#21 = ABS[#21]       (SOBREMATERIAL PAREDES U)\n#22 = ABS[#22]       (SOBREMATERIAL FONDO V)\n\n#10 = #20 / 2.0      (RADIO DE LA FRESA)\n#12 = [#23 / 2.0] - #10 - #21\n#13 = [#11 / 2.0] - #10 - #21\n#14 = #18 - #10 - #21\nIF [#14 LT 0] #14 = 0\n\nIF [#12 LE 0] GOTO9107\nIF [#13 LE 0] GOTO9108\n\n#27 = ABS[#6]\n#28 = ABS[#8]\nIF [#28 EQ 0] #28 = #20 * 0.65\nIF [#2 EQ 0] #2 = 2.0\n\n#15 = #12\nIF [#13 GT #15] #15 = #13\n#16 = FUP[#15 / #28]\nIF [#16 LT 1] #16 = 1\n\n(CALCULO DE PROFUNDIDAD EFECTIVA CON SOBREMATERIAL DE FONDO V)\n#29 = ABS[#26] - #22\nIF [#29 LE 0] #29 = ABS[#26]\n#29 = -#29\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO EN CENTRO)\nS#19 M03 M08\nG90 G00 X#24 Y#25\nG00 Z50.0             (PLANO SEGURO INICIAL)\nG00 Z#2               (PLANO DE RETROCESO B)\n\n#30 = 0\nWHILE [#30 GT #29] DO1\n    #30 = #30 - #27\n    IF [#30 LT #29] #30 = #29\n\n    (INMERSION EN Z EN EL CENTRO CON AVANCE CONTROLADO)\n    G00 X#24 Y#25\n    G01 Z#30 F[#9 * 0.4]\n\n    (DESBASTE CONCENTRICO DE ADENTRO HACIA AFUERA)\n    #31 = 1\n    WHILE [#31 LE #16] DO2\n        #32 = [#12 * #31] / #16\n        #33 = [#13 * #31] / #16\n        #34 = [#14 * #31] / #16\n        IF [#34 LT 0.01] #34 = 0.01\n\n        G01 X[#24 + #32 - #34] Y[#25 - #33] F#9\n        G03 X[#24 + #32] Y[#25 - #33 + #34] R#34\n        G01 Y[#25 + #33 - #34]\n        G03 X[#24 + #32 - #34] Y[#25 + #33] R#34\n        G01 X[#24 - #32 + #34]\n        G03 X[#24 - #32] Y[#25 + #33 - #34] R#34\n        G01 Y[#25 - #33 + #34]\n        G03 X[#24 - #32 + #34] Y[#25 - #33] R#34\n        G01 X[#24 + #32 - #34]\n\n        #31 = #31 + 1\n    END2\n\n    (DESPEGAR EN Z AL PLANO SEGURO ANTES DEL SIGUIENTE NIVEL)\n    G00 Z#2\nEND1\n\n(RETIRADA A PLANO DE SEGURIDAD Z50)\nG90 G00 Z50.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (LONGITUD W INVALIDA)\nN9102 #3000 = 102 (ANCHURA H INVALIDA)\nN9103 #3000 = 103 (PROFUNDIDAD Z INVALIDA)\nN9104 #3000 = 104 (DIAMETRO DE HERRAMIENTA INVALIDO)\nN9105 #3000 = 105 (PASO EN Z K INVALIDO)\nN9106 #3000 = 106 (RADIO DE HERRAMIENTA MAYOR O IGUAL AL RADIO DE ESQUINA R)\nN9107 #3000 = 107 (FRESA O SOBREMATERIAL EXCEDEN LONGITUD W)\nN9108 #3000 = 108 (FRESA O SOBREMATERIAL EXCEDEN ANCHURA H)\nN9109 #3000 = 109 (AVANCE F DEBE SER MAYOR A CERO)\nN9110 #3000 = 110 (VELOCIDAD DE HUSILLO S DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\n"
  },
  {
    "id": "O8110",
    "filename": "O8110_Cajera_Rectangular_Acabado.nc",
    "title": "O8110 - Acabado de Cajera Rectangular o Marco",
    "subtitle": "Perfilado rectangular con radios de esquina R y entrada/salida por el centro",
    "category": "cajeras",
    "category_title": "CAJERAS (POCKETS) // CIRCULARES Y RECTANGULARES",
    "category_label": "CAJERAS (POCKETS)",
    "category_color": "secondary",
    "sub_category": "rectangulares",
    "icon": "crop_portrait",
    "book_chapter": "Ingeniero Nestor Gamez",
    "g65_template": "G65 P8110 X[#24] Y[#25] W[#23] H[#11] R[#18] T[#20] F[#9] S[#19] Z[#26] B[#2]",
    "variables": [
      {
        "num": 24,
        "letter": "X",
        "value": 0.0,
        "comment": "COORDENADA X DEL CENTRO DE LA CAJERA",
        "full_comment": "X: COORDENADA X DEL CENTRO DE LA CAJERA",
        "line_idx": 7,
        "original_line": "#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)"
      },
      {
        "num": 25,
        "letter": "Y",
        "value": 0.0,
        "comment": "COORDENADA Y DEL CENTRO DE LA CAJERA",
        "full_comment": "Y: COORDENADA Y DEL CENTRO DE LA CAJERA",
        "line_idx": 8,
        "original_line": "#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)"
      },
      {
        "num": 23,
        "letter": "W",
        "value": 100.0,
        "comment": "LONGITUD DE LA CAJERA EN EJE X",
        "full_comment": "W: LONGITUD DE LA CAJERA EN EJE X",
        "line_idx": 9,
        "original_line": "#23 = 100.0  (W: LONGITUD DE LA CAJERA EN EJE X)"
      },
      {
        "num": 11,
        "letter": "H",
        "value": 60.0,
        "comment": "ANCHURA DE LA CAJERA EN EJE Y",
        "full_comment": "H: ANCHURA DE LA CAJERA EN EJE Y",
        "line_idx": 10,
        "original_line": "#11 = 60.0   (H: ANCHURA DE LA CAJERA EN EJE Y)"
      },
      {
        "num": 18,
        "letter": "R",
        "value": 10.0,
        "comment": "RADIO DE LAS ESQUINAS INTERIORES",
        "full_comment": "R: RADIO DE LAS ESQUINAS INTERIORES",
        "line_idx": 11,
        "original_line": "#18 = 10.0   (R: RADIO DE LAS ESQUINAS INTERIORES)"
      },
      {
        "num": 20,
        "letter": "T",
        "value": 10.0,
        "comment": "DIAMETRO DE LA FRESA DE ACABADO",
        "full_comment": "T: DIAMETRO DE LA FRESA DE ACABADO",
        "line_idx": 14,
        "original_line": "#20 = 10.0   (T: DIAMETRO DE LA FRESA DE ACABADO)"
      },
      {
        "num": 9,
        "letter": "F",
        "value": 350.0,
        "comment": "VELOCIDAD DE AVANCE DE CORTE EN MM/MIN",
        "full_comment": "F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN",
        "line_idx": 15,
        "original_line": "#9  = 350.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)"
      },
      {
        "num": 19,
        "letter": "S",
        "value": 1800.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "S: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 16,
        "original_line": "#19 = 1800.0 (S: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 26,
        "letter": "Z",
        "value": 12.0,
        "comment": "PROFUNDIDAD TERMINADA DE LA CAJERA",
        "full_comment": "Z: PROFUNDIDAD TERMINADA DE LA CAJERA",
        "line_idx": 19,
        "original_line": "#26 = 12.0   (Z: PROFUNDIDAD TERMINADA DE LA CAJERA)"
      },
      {
        "num": 2,
        "letter": "B",
        "value": 2.0,
        "comment": "PLANO DE SEGURIDAD EN Z",
        "full_comment": "B: PLANO DE SEGURIDAD EN Z",
        "line_idx": 20,
        "original_line": "#2  = 2.0    (B: PLANO DE SEGURIDAD EN Z)"
      }
    ],
    "full_content": "%\nO8110 (ACABADO DE BOLSILLO RECTANGULAR O MARCO)\n(INGENIERO NESTOR GAMEZ - FANUC CNC CUSTOM MACROS)\n(LLAMADA G65: G65 P8110 X.. Y.. W.. H.. R.. T.. F.. S.. Z.. B..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)\n#23 = 100.0  (W: LONGITUD DE LA CAJERA EN EJE X)\n#11 = 60.0   (H: ANCHURA DE LA CAJERA EN EJE Y)\n#18 = 10.0   (R: RADIO DE LAS ESQUINAS INTERIORES)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA FRESA DE ACABADO)\n#9  = 350.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)\n#19 = 1800.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SEGURIDAD)\n#26 = 12.0   (Z: PROFUNDIDAD TERMINADA DE LA CAJERA)\n#2  = 2.0    (B: PLANO DE SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#23 LE 0] GOTO9101\nIF [#11 LE 0] GOTO9102\nIF [#18 LE 0] GOTO9103\nIF [#20 LE 0] GOTO9104\nIF [#9 LE 0]  GOTO9105\nIF [#26 LE 0] GOTO9106\nIF [#19 LE 0] GOTO9109\nIF [#2 EQ 0] #2 = 2.0\n\n#10 = #4003\n#14 = #23 / 2.0 (SEMI-LONGITUD NOMINAL EN X)\n#31 = #11 / 2.0 (SEMI-ANCHURA NOMINAL EN Y)\n#15 = #20 / 2.0 (RADIO DE LA FRESA)\n#16 = #14 - #15 (SEMI-LONGITUD DE TRAYECTORIA)\n#17 = #31 - #15 (SEMI-ANCHURA DE TRAYECTORIA)\n#33 = #18 - #15 (RADIO DE ESQUINA DE TRAYECTORIA)\n\nIF [#16 LE 0] GOTO9107\nIF [#17 LE 0] GOTO9107\nIF [#33 LE 0] GOTO9108\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO INICIAL EN EL CENTRO)\nG90 G00 S#19 M03\nG00 X#24 Y#25\nG00 Z50.0\nG00 Z#2\nG01 Z-[#26] F[#9 * 0.4]\n\n(ENTRADA AL BORDE INFERIOR DE LA CAJERA)\nG01 X#24 Y[#25 - #17] F#9\n\n(BORDE INFERIOR - MITAD DERECHA)\nG01 X[#24 + #16 - #33] Y[#25 - #17]\n\n(ESQUINA INFERIOR DERECHA)\nG03 X[#24 + #16] Y[#25 - #17 + #33] I0.0 J#33\n\n(BORDE DERECHO)\nG01 X[#24 + #16] Y[#25 + #17 - #33]\n\n(ESQUINA SUPERIOR DERECHA)\nG03 X[#24 + #16 - #33] Y[#25 + #17] I-[#33] J0.0\n\n(BORDE SUPERIOR)\nG01 X[#24 - #16 + #33] Y[#25 + #17]\n\n(ESQUINA SUPERIOR IZQUIERDA)\nG03 X[#24 - #16] Y[#25 + #17 - #33] I0.0 J-[#33]\n\n(BORDE IZQUIERDO)\nG01 X[#24 - #16] Y[#25 - #17 + #33]\n\n(ESQUINA INFERIOR IZQUIERDA)\nG03 X[#24 - #16 + #33] Y[#25 - #17] I[#33] J0.0\n\n(BORDE INFERIOR - CIERRE Y DESPEGUE SEGURO)\nG01 X#24 Y[#25 - #17]\nG90 G00 Z#2\nG00 X#24 Y#25\n\n(RETIRADA A PLANO DE SEGURIDAD)\nG90 G00 Z50.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (LONGITUD W EN EJE X DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (ANCHURA H EN EJE Y DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (RADIO DE ESQUINA R DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9105 #3000 = 105 (AVANCE F DEBE SER MAYOR A CERO)\nN9106 #3000 = 106 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9107 #3000 = 107 (HERRAMIENTA EXCEDE LAS DIMENSIONES DE LA CAJERA)\nN9108 #3000 = 108 (RADIO DE ESQUINA MENOR QUE RADIO DE HERRAMIENTA)\nN9109 #3000 = 109 (VELOCIDAD DE HUSILLO S DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\n"
  },
  {
    "id": "O8108",
    "filename": "O8108_Ranura_Recta_Angular.nc",
    "title": "O8108 - Ranura Recta Angular",
    "subtitle": "Ranurado orientado a cualquier angulo polar con arcos extremos de radio R",
    "category": "ranuras",
    "category_title": "RANURAS (SLOTS) // RECTAS Y CIRCULARES",
    "category_label": "RANURAS (SLOTS)",
    "category_color": "tertiary",
    "sub_category": "ranura_recta",
    "icon": "linear_scale",
    "book_chapter": "Ingeniero Nestor Gamez",
    "g65_template": "G65 P8108 X[#24] Y[#25] A[#1] D[#7] R[#18] T[#20] F[#9] S[#19] Z[#26] B[#2]",
    "variables": [
      {
        "num": 24,
        "letter": "X",
        "value": 30.0,
        "comment": "COORDENADA X CENTRO INICIAL RANURA",
        "full_comment": "X: COORDENADA X CENTRO INICIAL RANURA",
        "line_idx": 7,
        "original_line": "#24 = 30.0   (X: COORDENADA X CENTRO INICIAL RANURA)"
      },
      {
        "num": 25,
        "letter": "Y",
        "value": 25.0,
        "comment": "COORDENADA Y CENTRO INICIAL RANURA",
        "full_comment": "Y: COORDENADA Y CENTRO INICIAL RANURA",
        "line_idx": 8,
        "original_line": "#25 = 25.0   (Y: COORDENADA Y CENTRO INICIAL RANURA)"
      },
      {
        "num": 1,
        "letter": "A",
        "value": 25.0,
        "comment": "ORIENTACION ANGULAR EN GRADOS DESDE X+",
        "full_comment": "A: ORIENTACION ANGULAR EN GRADOS DESDE X+",
        "line_idx": 9,
        "original_line": "#1  = 25.0   (A: ORIENTACION ANGULAR EN GRADOS DESDE X+)"
      },
      {
        "num": 7,
        "letter": "D",
        "value": 60.0,
        "comment": "DISTANCIA ENTRE CENTROS EXTREMOS",
        "full_comment": "D: DISTANCIA ENTRE CENTROS EXTREMOS",
        "line_idx": 10,
        "original_line": "#7  = 60.0   (D: DISTANCIA ENTRE CENTROS EXTREMOS)"
      },
      {
        "num": 18,
        "letter": "R",
        "value": 10.0,
        "comment": "RADIO NOMINAL DE LA RANURA - ANCHO TOTAL 2R",
        "full_comment": "R: RADIO NOMINAL DE LA RANURA - ANCHO TOTAL 2R",
        "line_idx": 11,
        "original_line": "#18 = 10.0   (R: RADIO NOMINAL DE LA RANURA - ANCHO TOTAL 2R)"
      },
      {
        "num": 20,
        "letter": "T",
        "value": 10.0,
        "comment": "DIAMETRO DE LA FRESA DE CORTE",
        "full_comment": "T: DIAMETRO DE LA FRESA DE CORTE",
        "line_idx": 14,
        "original_line": "#20 = 10.0   (T: DIAMETRO DE LA FRESA DE CORTE)"
      },
      {
        "num": 9,
        "letter": "F",
        "value": 300.0,
        "comment": "VELOCIDAD DE AVANCE DE CORTE EN MM/MIN",
        "full_comment": "F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN",
        "line_idx": 15,
        "original_line": "#9  = 300.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)"
      },
      {
        "num": 19,
        "letter": "S",
        "value": 1600.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "S: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 16,
        "original_line": "#19 = 1600.0 (S: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 26,
        "letter": "Z",
        "value": 6.0,
        "comment": "PROFUNDIDAD TOTAL DE LA RANURA",
        "full_comment": "Z: PROFUNDIDAD TOTAL DE LA RANURA",
        "line_idx": 19,
        "original_line": "#26 = 6.0    (Z: PROFUNDIDAD TOTAL DE LA RANURA)"
      },
      {
        "num": 2,
        "letter": "B",
        "value": 2.0,
        "comment": "PLANO DE SEGURIDAD EN Z",
        "full_comment": "B: PLANO DE SEGURIDAD EN Z",
        "line_idx": 20,
        "original_line": "#2  = 2.0    (B: PLANO DE SEGURIDAD EN Z)"
      }
    ],
    "full_content": "%\nO8108 (MECANIZADO DE RANURA RECTA ANGULAR)\n(INGENIERO NESTOR GAMEZ - FANUC CNC CUSTOM MACROS)\n(LLAMADA G65: G65 P8108 X.. Y.. A.. D.. R.. T.. F.. S.. Z.. B..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 30.0   (X: COORDENADA X CENTRO INICIAL RANURA)\n#25 = 25.0   (Y: COORDENADA Y CENTRO INICIAL RANURA)\n#1  = 25.0   (A: ORIENTACION ANGULAR EN GRADOS DESDE X+)\n#7  = 60.0   (D: DISTANCIA ENTRE CENTROS EXTREMOS)\n#18 = 10.0   (R: RADIO NOMINAL DE LA RANURA - ANCHO TOTAL 2R)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA FRESA DE CORTE)\n#9  = 300.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)\n#19 = 1600.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SEGURIDAD)\n#26 = 6.0    (Z: PROFUNDIDAD TOTAL DE LA RANURA)\n#2  = 2.0    (B: PLANO DE SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#7 LE 0]  GOTO9101\nIF [#18 LE 0] GOTO9102\nIF [#20 LE 0] GOTO9103\nIF [#26 LE 0] GOTO9104\nIF [#9 LE 0]  GOTO9105\nIF [#19 LE 0] GOTO9107\nIF [#2 EQ 0] #2 = 2.0\n\n#10 = #4003\n#15 = #20 / 2.0 (RADIO DE LA FRESA)\nIF [#15 GE #18] GOTO9106 (LA HERRAMIENTA NO CABE EN LA RANURA)\n\n(CENTROS EXTREMOS Y VECTOR PERPENDICULAR A LA RANURA)\n#30 = #24 + #7 * COS[#1] (X DEL CENTRO DERECHO)\n#31 = #25 + #7 * SIN[#1] (Y DEL CENTRO DERECHO)\n#32 = -SIN[#1] (COMPONENTE X DEL VECTOR PERPENDICULAR)\n#33 = COS[#1]  (COMPONENTE Y DEL VECTOR PERPENDICULAR)\n\n(RADIO MAXIMO DE TRAYECTORIA DEL CENTRO Y PASO RADIAL)\n#34 = #18 - #15\n#35 = #20 * 0.65\nIF [#35 LE 0] #35 = #20 * 0.5\n#36 = FUP[#34 / #35]\nIF [#36 LT 1] #36 = 1\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO EN EL CENTRO IZQUIERDO)\nG90 G00 S#19 M03\nG00 X#24 Y#25\nG00 Z50.0\nG00 Z#2\nG01 Z-[#26] F[#9 * 0.4]\n\n(BARRIDO CONCENTRICO TIPO RACETRACK, DE DENTRO HACIA AFUERA)\n#23 = 1\nWHILE [#23 LE #36] DO1\n  #37 = [#34 * #23] / #36\n  #38 = #24 + #32 * #37\n  #39 = #25 + #33 * #37\n\n  (LADO SUPERIOR HACIA EL CENTRO DERECHO)\n  G90 G01 X#38 Y#39 F#9\n  G01 X[#30 + #32 * #37] Y[#31 + #33 * #37]\n\n  (ARCO EXTREMO DERECHO 180 GRADOS)\n  G02 X[#30 - #32 * #37] Y[#31 - #33 * #37] I[-#32 * #37] J[-#33 * #37]\n\n  (LADO INFERIOR DE REGRESO AL CENTRO IZQUIERDO)\n  G01 X[#24 - #32 * #37] Y[#25 - #33 * #37]\n\n  (ARCO EXTREMO IZQUIERDO 180 GRADOS)\n  G02 X#38 Y#39 I[#32 * #37] J[#33 * #37]\n\n  #23 = #23 + 1\nEND1\n\n(RETIRADA A PLANO DE SEGURIDAD)\nG90 G00 Z50.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DISTANCIA ENTRE CENTROS D DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (RADIO DE RANURA R DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9105 #3000 = 105 (AVANCE F DEBE SER MAYOR A CERO)\nN9106 #3000 = 106 (DIAMETRO DE HERRAMIENTA DEBE SER MENOR QUE 2R)\nN9107 #3000 = 107 (VELOCIDAD DE HUSILLO S DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\n"
  },
  {
    "id": "O8109",
    "filename": "O8109_Ranura_Circular_Profundidad_Multiple.nc",
    "title": "O8109 - Ranura Circular Multi-profundidad",
    "subtitle": "Canal anular circular concentrico con control de pasadas en Z",
    "category": "ranuras",
    "category_title": "RANURAS (SLOTS) // RECTAS Y CIRCULARES",
    "category_label": "RANURAS (SLOTS)",
    "category_color": "tertiary",
    "sub_category": "ranura_circular",
    "icon": "motion_photos_on",
    "book_chapter": "Ingeniero Nestor Gamez",
    "g65_template": "G65 P8109 X[#24] Y[#25] W[#23] T[#20] F[#9] S[#19] D[#7] C[#3] R[#18]",
    "variables": [
      {
        "num": 24,
        "letter": "X",
        "value": 0.0,
        "comment": "COORDENADA X DEL CENTRO DE LA RANURA",
        "full_comment": "X: COORDENADA X DEL CENTRO DE LA RANURA",
        "line_idx": 7,
        "original_line": "#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA RANURA)"
      },
      {
        "num": 25,
        "letter": "Y",
        "value": 0.0,
        "comment": "COORDENADA Y DEL CENTRO DE LA RANURA",
        "full_comment": "Y: COORDENADA Y DEL CENTRO DE LA RANURA",
        "line_idx": 8,
        "original_line": "#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA RANURA)"
      },
      {
        "num": 23,
        "letter": "W",
        "value": 90.0,
        "comment": "DIAMETRO DE PASO CENTRAL DE LA RANURA",
        "full_comment": "W: DIAMETRO DE PASO CENTRAL DE LA RANURA",
        "line_idx": 9,
        "original_line": "#23 = 90.0   (W: DIAMETRO DE PASO CENTRAL DE LA RANURA)"
      },
      {
        "num": 20,
        "letter": "T",
        "value": 10.0,
        "comment": "DIAMETRO DE LA FRESA DE CORTE",
        "full_comment": "T: DIAMETRO DE LA FRESA DE CORTE",
        "line_idx": 12,
        "original_line": "#20 = 10.0   (T: DIAMETRO DE LA FRESA DE CORTE)"
      },
      {
        "num": 9,
        "letter": "F",
        "value": 350.0,
        "comment": "VELOCIDAD DE AVANCE DE CORTE EN MM/MIN",
        "full_comment": "F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN",
        "line_idx": 13,
        "original_line": "#9  = 350.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)"
      },
      {
        "num": 19,
        "letter": "S",
        "value": 1500.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "S: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 14,
        "original_line": "#19 = 1500.0 (S: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 7,
        "letter": "D",
        "value": 10.0,
        "comment": "PROFUNDIDAD TOTAL DE LA RANURA",
        "full_comment": "D: PROFUNDIDAD TOTAL DE LA RANURA",
        "line_idx": 17,
        "original_line": "#7  = 10.0   (D: PROFUNDIDAD TOTAL DE LA RANURA)"
      },
      {
        "num": 3,
        "letter": "C",
        "value": 2.0,
        "comment": "PROFUNDIDAD MAXIMA POR PASADA EN Z",
        "full_comment": "C: PROFUNDIDAD MAXIMA POR PASADA EN Z",
        "line_idx": 18,
        "original_line": "#3  = 2.0    (C: PROFUNDIDAD MAXIMA POR PASADA EN Z)"
      },
      {
        "num": 18,
        "letter": "R",
        "value": 2.0,
        "comment": "PLANO DE SEGURIDAD EN Z",
        "full_comment": "R: PLANO DE SEGURIDAD EN Z",
        "line_idx": 19,
        "original_line": "#18 = 2.0    (R: PLANO DE SEGURIDAD EN Z)"
      }
    ],
    "full_content": "%\nO8109 (RANURA CIRCULAR CON PROFUNDIDAD MULTIPLE)\n(INGENIERO NESTOR GAMEZ - FANUC CNC CUSTOM MACROS)\n(LLAMADA G65: G65 P8109 X.. Y.. W.. T.. F.. S.. D.. C.. R..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA RANURA)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA RANURA)\n#23 = 90.0   (W: DIAMETRO DE PASO CENTRAL DE LA RANURA)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA FRESA DE CORTE)\n#9  = 350.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)\n#19 = 1500.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SEGURIDAD)\n#7  = 10.0   (D: PROFUNDIDAD TOTAL DE LA RANURA)\n#3  = 2.0    (C: PROFUNDIDAD MAXIMA POR PASADA EN Z)\n#18 = 2.0    (R: PLANO DE SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#23 LE 0] GOTO9101\nIF [#7 LE 0]  GOTO9102\nIF [#3 LE 0]  GOTO9103\nIF [#9 LE 0]  GOTO9104\nIF [#20 LE 0] GOTO9105\nIF [#19 LE 0] GOTO9106\nIF [#18 LT 0] #18 = 2.0\n\n#11 = #4001\n#13 = #4003\n\n#14 = #23 / 2.0 (RADIO DE LA TRAYECTORIA CIRCULAR)\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO)\nG90 G00 S#19 M03\nG00 X[#24 + #14] Y#25\nG00 Z50.0\nG00 Z#18\n\n(CALCULO DE CANTIDAD DE PASADAS ENTERAS)\n#100 = #7 / #3\n#101 = FIX[#100]\n\n(BUCLE DE PASADAS DE PROFUNDIDAD EN Z)\n#33 = 1\nWHILE [#33 LE #101] DO1\n  G91 G01 Z-[#3] F[#9 * 0.4]\n  G03 I-[#14] J0.0 F#9\n  #33 = #33 + 1\nEND1\n\n(PASADA FINAL DE LIMPIEZA SI QUEDA REMANENTE DE PROFUNDIDAD)\nIF [#100 EQ #101] GOTO900\n#102 = #7 - [#101 * #3]\nG91 G01 Z-[#102] F[#9 * 0.4]\nG03 I-[#14] J0.0 F#9\n\nN900 (RETIRADA RAPIDA A PLANO DE SEGURIDAD)\nG90 G00 Z50.0\nG#11 G#13\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DIAMETRO DE RANURA W DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (PROFUNDIDAD TOTAL D DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (PASO EN Z C DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (AVANCE F DEBE SER MAYOR A CERO)\nN9105 #3000 = 105 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9106 #3000 = 106 (VELOCIDAD DE HUSILLO S DEBE SER MAYOR A CERO)\n\nN9999 M99\n%\n"
  }
];
var MACRO_CATEGORIES_DATA = {
  "patrones_agujeros": {
    "title": "PATRONES DE AGUJEROS // TALADRADO PARAMETRICO",
    "icon": "adjust",
    "color": "primary",
    "label": "PATRONES DE AGUJEROS",
    "items": [
      {
        "id": "O8101",
        "name": "O8101 - Patron de Agujero Angular",
        "desc": "Serie lineal equidistante orientada a cualquier angulo polar",
        "sub": "agujero_lineal",
        "book": "Ing. Nestor Gamez"
      },
      {
        "id": "O8103",
        "name": "O8103 - Patron de Agujero de Marco Rectangular",
        "desc": "Perimetro rectangular de 4 lados con prevencion de sobretaladrado en esquinas",
        "sub": "agujero_marco",
        "book": "Ing. Nestor Gamez"
      },
      {
        "id": "O8104",
        "name": "O8104 - Circulo de Agujeros de Perno (BCD / PCD)",
        "desc": "Circulo de barrenado parametrico con angulo inicial y seleccion de orificio de inicio",
        "sub": "agujero_bcd",
        "book": "Ing. Nestor Gamez"
      },
      {
        "id": "O8105",
        "name": "O8105 - Patron de Agujeros en Arco",
        "desc": "Barrenado en segmento circular con paso angular uniforme",
        "sub": "agujero_arco",
        "book": "Ing. Nestor Gamez"
      }
    ]
  },
  "cajeras": {
    "title": "CAJERAS (POCKETS) // CIRCULARES Y RECTANGULARES",
    "icon": "layers",
    "color": "secondary",
    "label": "CAJERAS (POCKETS)",
    "items": [
      {
        "id": "O8106",
        "name": "O8106 - Desbaste de Cajera Circular",
        "desc": "Vaciado concentrico con control de sobrematerial en paredes U y fondo V",
        "sub": "circulares",
        "book": "Ing. Nestor Gamez"
      },
      {
        "id": "O8107",
        "name": "O8107 - Acabado de Cajera Circular",
        "desc": "Perfilado circular con entrada y salida tangencial en arco",
        "sub": "circulares",
        "book": "Ing. Nestor Gamez"
      },
      {
        "id": "O8111",
        "name": "O8111 - Ciclo de Corte Circular (Emulacion G13)",
        "desc": "Trayectoria G13 emulada con G03 en fresado ascendente (climb milling)",
        "sub": "circulares",
        "book": "Ing. Nestor Gamez"
      },
      {
        "id": "O8112",
        "name": "O8112 - Desbaste de Cajera Rectangular",
        "desc": "Vaciado concentrico rectangular con control de sobrematerial en paredes U y fondo V",
        "sub": "rectangulares",
        "book": "Ing. Nestor Gamez"
      },
      {
        "id": "O8110",
        "name": "O8110 - Acabado de Cajera Rectangular o Marco",
        "desc": "Perfilado rectangular con radios de esquina R y entrada/salida por el centro",
        "sub": "rectangulares",
        "book": "Ing. Nestor Gamez"
      }
    ]
  },
  "ranuras": {
    "title": "RANURAS (SLOTS) // RECTAS Y CIRCULARES",
    "icon": "reorder",
    "color": "tertiary",
    "label": "RANURAS (SLOTS)",
    "items": [
      {
        "id": "O8108",
        "name": "O8108 - Ranura Recta Angular",
        "desc": "Ranurado orientado a cualquier angulo polar con arcos extremos de radio R",
        "sub": "ranura_recta",
        "book": "Ing. Nestor Gamez"
      },
      {
        "id": "O8109",
        "name": "O8109 - Ranura Circular Multi-profundidad",
        "desc": "Canal anular circular concentrico con control de pasadas en Z",
        "sub": "ranura_circular",
        "book": "Ing. Nestor Gamez"
      }
    ]
  }
};
if (typeof window !== 'undefined') {
  window.MACROS_DATA = MACROS_DATA;
  window.MACRO_CATEGORIES_DATA = MACRO_CATEGORIES_DATA;
}
