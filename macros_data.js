var MACROS_DATA = [
  {
    "id": "O8101",
    "filename": "O8101_Patron_Agujero_Angular.nc",
    "title": "O8101 - Patr\u00f3n de Agujero Angular",
    "subtitle": "Serie lineal equidistante orientada a cualquier \u00e1ngulo polar",
    "category": "patrones_agujeros",
    "category_title": "Patrones de Agujeros",
    "sub_category": "agujero_lineal",
    "icon": "linear_scale",
    "book_chapter": "Cap\u00edtulo 20 - Peter Smid",
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
    "full_content": "%\nO8101 (PATRON DE AGUJERO ANGULAR - VERSION 1)\n(PETER SMID - FANUC CNC CUSTOM MACROS - CAPITULO 20)\n(LLAMADA G65: G65 P8101 X.. Y.. A.. Q.. H..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 50.0   (X: COORDENADA X DEL PRIMER AGUJERO)\n#25 = 30.0   (Y: COORDENADA Y DEL PRIMER AGUJERO)\n#1  = 30.0   (A: ANGULO DE LA LINEA EN GRADOS DESDE X+)\n#17 = 25.0   (Q: PASO O DISTANCIA ENTRE AGUJEROS ADYACENTES)\n#11 = 5.0    (H: NUMERO TOTAL DE AGUJEROS)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA BROCA / HERRAMIENTA)\n#9  = 250.0  (F: AVANCE DE TALADRADO EN MM/MIN)\n#19 = 1200.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE PERFORADO Y SEGURIDAD)\n#26 = 20.0   (Z: PROFUNDIDAD TOTAL DE PERFORACION)\n#18 = 2.0    (R: PLANO DE RETROCESO Y SEGURIDAD)\n#8  = 5.0    (E: PASO DE PICOTEO EN Z PARA G83)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#11 LT 2] GOTO9101\nIF [#17 LE 0] GOTO9102\nIF [#26 LE 0] GOTO9103\nIF [#9 LE 0]  GOTO9104\n\n(GUARDA MODO ACTUAL DE G90/G91)\n#10 = #4003\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO SEGURO)\nG90 G00 S#19 M03\nG00 X#24 Y#25\nG00 Z#18\n\n(CALCULO DE INCREMENTOS X E Y POR PASO)\n#11 = #11 - 1\n#14 = #17 * COS[#1]\n#15 = #17 * SIN[#1]\n\n(CICLO FIJO DE TALADRADO G83 O G81 EN PRIMER AGUJERO)\nG99 G83 X#24 Y#25 Z-[#26] R#18 Q#8 F#9\n\n(BUCLE DE PERFORACION INCREMENTAL)\n#33 = #11\nWHILE [#33 GT 0] DO1\n  G91 X#14 Y#15\n  #33 = #33 - 1\nEND1\n\nG80 (CANCELAR CICLO FIJO)\nG90 G00 Z25.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (NUMERO DE AGUJEROS DEBE SER MAYOR A 1)\nN9102 #3000 = 102 (EL PASO Q DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (AVANCE F DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\\n"
  },
  {
    "id": "O8103",
    "filename": "O8103_Patron_Agujero_Marco.nc",
    "title": "O8103 - Patr\u00f3n de Agujero de Marco Rectangular",
    "subtitle": "Per\u00edmetro rectangular de 4 lados con prevenci\u00f3n de sobretaladrado en esquinas",
    "category": "patrones_agujeros",
    "category_title": "Patrones de Agujeros",
    "sub_category": "agujero_marco",
    "icon": "crop_free",
    "book_chapter": "Cap\u00edtulo 20 - Peter Smid",
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
    "full_content": "%\nO8103 (PATRON DE AGUJERO DE MARCO RECTANGULAR)\n(PETER SMID - FANUC CNC CUSTOM MACROS - CAPITULO 20)\n(LLAMADA G65: G65 P8103 X.. Y.. U.. V.. I.. J..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 20.0   (X: COORDENADA X ESQUINA INFERIOR IZQUIERDA)\n#25 = 20.0   (Y: COORDENADA Y ESQUINA INFERIOR IZQUIERDA)\n#21 = 6.0    (U: CANTIDAD DE AGUJEROS EN EJE X HORIZONTAL)\n#22 = 4.0    (V: CANTIDAD DE AGUJEROS EN EJE Y VERTICAL)\n#4  = 25.0   (I: PASO O DISTANCIA ENTRE AGUJEROS EN X)\n#5  = 20.0   (J: PASO O DISTANCIA ENTRE AGUJEROS EN Y)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA BROCA / HERRAMIENTA)\n#9  = 250.0  (F: AVANCE DE TALADRADO EN MM/MIN)\n#19 = 1200.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE PERFORADO Y SEGURIDAD)\n#26 = 18.0   (Z: PROFUNDIDAD TOTAL DE PERFORACION)\n#18 = 2.0    (R: PLANO DE RETROCESO Y SEGURIDAD)\n#8  = 5.0    (E: PASO DE PICOTEO EN Z PARA G83)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\n#10 = #4003\nIF [#4 LE 0] GOTO9101\nIF [#5 LE 0] GOTO9101\nIF [#21 LT 2] GOTO9102\nIF [#22 LT 2] GOTO9102\nIF [#21 NE FUP[#21]] GOTO9103\nIF [#22 NE FUP[#22]] GOTO9103\nIF [#26 LE 0] GOTO9104\nIF [#9 LE 0] GOTO9105\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO EN ESQUINA)\nG90 G00 S#19 M03\nG00 X#24 Y#25\nG00 Z#18\n\n(INICIAR CICLO FIJO DE TALADRADO G83)\nG99 G83 X#24 Y#25 Z-[#26] R#18 Q#8 F#9\n\n(1. LADO INFERIOR: HACIA X+ DERECHA)\n#33 = #21 - 1\nWHILE [#33 GT 0] DO1\n  G91 X#4\n  #33 = #33 - 1\nEND1\n\n(2. LADO DERECHO: HACIA Y+ ARRIBA)\n#33 = #22 - 1\nWHILE [#33 GT 0] DO1\n  G91 Y#5\n  #33 = #33 - 1\nEND1\n\n(3. LADO SUPERIOR: HACIA X- IZQUIERDA)\n#33 = #21 - 1\nWHILE [#33 GT 0] DO1\n  G91 X-[#4]\n  #33 = #33 - 1\nEND1\n\n(4. LADO IZQUIERDO: HACIA Y- ABAJO OMITE PRIMER AGUJERO YA TALADRADO)\n#33 = #22 - 1\nWHILE [#33 GT 1] DO1\n  G91 Y-[#5]\n  #33 = #33 - 1\nEND1\n\nG80 (CANCELAR CICLO FIJO)\nG90 G00 Z25.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (PASO I Y J DEBEN SER MAYORES A CERO)\nN9102 #3000 = 102 (MINIMO 2 AGUJEROS POR CADA LADO)\nN9103 #3000 = 103 (CANTIDAD DE AGUJEROS DEBE SER ENTERO)\nN9104 #3000 = 104 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9105 #3000 = 105 (AVANCE F DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\\n"
  },
  {
    "id": "O8104",
    "filename": "O8104_Patron_Circulo_Agujeros_BCD.nc",
    "title": "O8104 - C\u00edrculo de Agujeros de Perno (BCD / PCD)",
    "subtitle": "C\u00edrculo de barrenado param\u00e9trico con \u00e1ngulo inicial y selecci\u00f3n de orificio de inicio",
    "category": "patrones_agujeros",
    "category_title": "Patrones de Agujeros",
    "sub_category": "agujero_bcd",
    "icon": "donut_large",
    "book_chapter": "Cap\u00edtulo 20 - Peter Smid",
    "g65_template": "G65 P8104 X[#24] Y[#25] W[#23] H[#11] A[#1] S[#19] T[#20] F[#9] B[#2] Z[#26] R[#18] E[#8]",
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
    "full_content": "%\nO8104 (PATRON DE CIRCULO DE AGUJEROS PERNO BCD)\n(PETER SMID - FANUC CNC CUSTOM MACROS - CAPITULO 20)\n(LLAMADA G65: G65 P8104 X.. Y.. W.. H.. A.. S..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DEL CIRCULO)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DEL CIRCULO)\n#23 = 120.0  (W: DIAMETRO DEL CIRCULO DE PASO BCD / PCD)\n#11 = 8.0    (H: CANTIDAD TOTAL DE AGUJEROS EQUIESPACIADOS)\n#1  = 0.0    (A: ANGULO DEL PRIMER AGUJERO DESDE EJE X+)\n#19 = 1.0    (S: NUMERO DEL AGUJERO INICIAL A TALADRAR)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 12.0   (T: DIAMETRO DE LA BROCA / HERRAMIENTA)\n#9  = 280.0  (F: AVANCE DE TALADRADO EN MM/MIN)\n#2  = 1200.0 (B: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE PERFORADO Y SEGURIDAD)\n#26 = 25.0   (Z: PROFUNDIDAD TOTAL DE PERFORACION)\n#18 = 3.0    (R: PLANO DE RETROCESO Y SEGURIDAD)\n#8  = 6.0    (E: PASO DE PICOTEO EN Z PARA G83)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\n#10 = #4003\nIF [#23 LE 0] GOTO9101\nIF [#11 NE FUP[#11]] GOTO9102\nIF [#11 LE 0] GOTO9103\nIF [#19 EQ #0] THEN #19 = 1.0\nIF [#19 NE FUP[#19]] GOTO9102\nIF [#19 LT 1] GOTO9104\nIF [#19 GT #11] GOTO9105\nIF [#26 LE 0] GOTO9106\nIF [#9 LE 0] GOTO9107\n\n(RADIO DE CIRCULO DE PASO)\n#14 = #23 / 2.0\n\n(ARRANQUE DE HUSILLO)\nG90 G00 S#2 M03\n\n(BUCLE DE PERFORACION POLAR CON CICLO G83)\n#33 = #19\nWHILE [#33 LE #11] DO1\n  #30 = [#33 - 1.0] * 360.0 / #11 + #1\n  #15 = COS[#30] * #14 + #24\n  #16 = SIN[#30] * #14 + #25\n  G00 X#15 Y#16\n  G99 G83 Z-[#26] R#18 Q#8 F#9\n  #33 = #33 + 1.0\nEND1\n\nG80 (CANCELAR CICLO FIJO)\nG90 G00 Z25.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DIAMETRO BCD DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (CANTIDAD DE AGUJEROS DEBE SER ENTERO)\nN9103 #3000 = 103 (NUMERO DE AGUJEROS DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (AGUJERO DE INICIO S DEBE SER AL MENOS 1)\nN9105 #3000 = 105 (AGUJERO DE INICIO S NO PUEDE SUPERAR TOTAL H)\nN9106 #3000 = 106 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9107 #3000 = 107 (AVANCE F DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\\n"
  },
  {
    "id": "O8105",
    "filename": "O8105_Patron_Agujeros_Arco.nc",
    "title": "O8105 - Patr\u00f3n de Agujeros en Arco",
    "subtitle": "Barrenado en segmento circular con paso angular uniforme",
    "category": "patrones_agujeros",
    "category_title": "Patrones de Agujeros",
    "sub_category": "agujero_arco",
    "icon": "timelapse",
    "book_chapter": "Cap\u00edtulo 20 - Peter Smid",
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
    "full_content": "%\nO8105 (PATRON DE AGUJEROS EN ARCO CIRCULAR)\n(PETER SMID - FANUC CNC CUSTOM MACROS - CAPITULO 20)\n(LLAMADA G65: G65 P8105 X.. Y.. W.. H.. A.. I..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DEL ARCO)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DEL ARCO)\n#23 = 100.0  (W: DIAMETRO DEL ARCO DE AGUJEROS)\n#11 = 6.0    (H: CANTIDAD DE AGUJEROS EN EL ARCO)\n#1  = 15.0   (A: ANGULO DEL PRIMER AGUJERO DESDE EJE X+)\n#4  = 30.0   (I: SEPARACION ANGULAR ENTRE AGUJEROS CONSECUTIVOS)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA BROCA / HERRAMIENTA)\n#9  = 250.0  (F: AVANCE DE TALADRADO EN MM/MIN)\n#19 = 1200.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE PERFORADO Y SEGURIDAD)\n#26 = 20.0   (Z: PROFUNDIDAD TOTAL DE PERFORACION)\n#18 = 2.0    (R: PLANO DE RETROCESO Y SEGURIDAD)\n#8  = 5.0    (E: PASO DE PICOTEO EN Z PARA G83)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\n#10 = #4003\nIF [#23 LE 0] GOTO9101\nIF [#11 LT 1] GOTO9102\nIF [#11 NE FUP[#11]] GOTO9103\nIF [#4 EQ 0] GOTO9104\nIF [#26 LE 0] GOTO9105\nIF [#9 LE 0] GOTO9106\n\n(RADIO DEL ARCO)\n#14 = #23 / 2.0\n\n(ARRANQUE DE HUSILLO)\nG90 G00 S#19 M03\n\n(BUCLE DE PERFORACION EN ARCO)\n#33 = 1.0\nWHILE [#33 LE #11] DO1\n  #30 = #1 + [[#33 - 1.0] * #4]\n  #15 = COS[#30] * #14 + #24\n  #16 = SIN[#30] * #14 + #25\n  G00 X#15 Y#16\n  G99 G83 Z-[#26] R#18 Q#8 F#9\n  #33 = #33 + 1.0\nEND1\n\nG80 (CANCELAR CICLO FIJO)\nG90 G00 Z25.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DIAMETRO DEL ARCO DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (MINIMO 1 AGUJERO EN EL ARCO)\nN9103 #3000 = 103 (CANTIDAD DE AGUJEROS DEBE SER ENTERO)\nN9104 #3000 = 104 (INCREMENTO ANGULAR I NO PUEDE SER CERO)\nN9105 #3000 = 105 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9106 #3000 = 106 (AVANCE F DEBE SER MAYOR A CERO)\n\nN9999 G#10\nM99\n%\\n"
  },
  {
    "id": "O8106",
    "filename": "O8106_Cajera_Circular_Desbaste.nc",
    "title": "O8106 - Desbaste de Cajera Circular",
    "subtitle": "Vaciado conc\u00e9ntrico con control de pasadas Z y paso lateral W",
    "category": "cajeras",
    "category_title": "Cajeras (Pockets)",
    "sub_category": "circulares",
    "icon": "radio_button_checked",
    "book_chapter": "Cap\u00edtulo 20 - Peter Smid",
    "g65_template": "G65 P8106 X[#24] Y[#25] D[#7] W[#23] T[#20] F[#9] S[#19] Z[#26] K[#6] R[#18]",
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
        "num": 18,
        "letter": "R",
        "value": 2.0,
        "comment": "PLANO DE SEGURIDAD EN Z",
        "full_comment": "R: PLANO DE SEGURIDAD EN Z",
        "line_idx": 20,
        "original_line": "#18 = 2.0    (R: PLANO DE SEGURIDAD EN Z)"
      }
    ],
    "full_content": "%\nO8106 (DESBASTE DE CAJERA CIRCULAR)\n(PETER SMID - FANUC CNC CUSTOM MACROS - CAPITULO 20)\n(LLAMADA G65: G65 P8106 X.. Y.. Z.. D.. K.. W.. T.. F..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)\n#7  = 80.0   (D: DIAMETRO FINAL DE LA CAJERA)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA FRESA DE CORTE)\n#9  = 400.0  (F: AVANCE DE MECANIZADO EN MM/MIN)\n#19 = 1800.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SEGURIDAD)\n#26 = 15.0   (Z: PROFUNDIDAD TOTAL DE LA CAJERA)\n#6  = 3.0    (K: PROFUNDIDAD POR PASADA EN EJE Z)\n#23 = 6.0    (W: ANCHO DE CORTE RADIAL O PASO LATERAL)\n#18 = 2.0    (R: PLANO DE SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#7 LE 0] GOTO9101\nIF [#20 LE 0] GOTO9102\nIF [#23 LE 0] GOTO9103\nIF [#26 LE 0] GOTO9104\nIF [#9 LE 0] GOTO9105\n\n#10 = #4003\n#14 = #7 / 2.0 (RADIO DE LA CAJERA)\n#15 = #20 / 2.0 (RADIO DE LA FRESA)\nIF [#15 GE #14] GOTO9106\n\n#26 = ABS[#26]\n#6 = ABS[#6]\n#4 = #14 - #15 (RADIO MAXIMO DEL CENTRO DE LA FRESA)\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO EN CENTRO)\nG90 G00 S#19 M03\nG00 X#24 Y#25\nG00 Z#18\n\n(BUCLE PRINCIPAL DE PROFUNDIDAD EN Z)\n#16 = 0.0\nWHILE [#16 LT #26] DO1\n  #16 = #16 + #6\n  IF [#16 GT #26] THEN #16 = #26\n  \n  (BAJADA EN Z AL CENTRO)\n  G90 G01 Z-[#16] F[#9 / 2.0]\n  \n  (ESPIRAL CONCENTRICA HACIA AFUERA)\n  #33 = #23\n  WHILE [#33 LT #4] DO2\n    G90 G01 X[#24 + #33] F#9\n    G03 I-[#33]\n    #33 = #33 + #23\n  END2\n  \n  (PASADA PERIMETRAL EN EL RADIO FINAL DE DESBASTE)\n  G90 G01 X[#24 + #4] F#9\n  G03 I-[#4]\n  \n  (RETORNO RAPIDO AL CENTRO DE LA CAJERA)\n  G90 G01 X#24 F[#9 * 2.0]\nEND1\n\n(RETIRADA A PLANO DE SEGURIDAD)\nG90 G00 Z25.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DIAMETRO DE LA CAJERA DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (PASO RADIAL W DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9105 #3000 = 105 (AVANCE F DEBE SER MAYOR A CERO)\nN9106 #3000 = 106 (HERRAMIENTA DEMASIADO GRANDE PARA LA CAJERA)\n\nN9999 G#10\nM99\n%\\n"
  },
  {
    "id": "O8107",
    "filename": "O8107_Cajera_Circular_Acabado.nc",
    "title": "O8107 - Acabado de Cajera Circular",
    "subtitle": "Perfilado tangencial suave con compensaci\u00f3n G41 y salida en arco",
    "category": "cajeras",
    "category_title": "Cajeras (Pockets)",
    "sub_category": "circulares",
    "icon": "track_changes",
    "book_chapter": "Cap\u00edtulo 20 - Peter Smid",
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
        "comment": "DIAMETRO DE LA FRESA O CORRECTOR",
        "full_comment": "T: DIAMETRO DE LA FRESA O CORRECTOR",
        "line_idx": 12,
        "original_line": "#20 = 10.0   (T: DIAMETRO DE LA FRESA O CORRECTOR)"
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
    "full_content": "%\nO8107 (ACABADO DE CAJERA CIRCULAR)\n(PETER SMID - FANUC CNC CUSTOM MACROS - CAPITULO 20)\n(LLAMADA G65: G65 P8107 X.. Y.. Z.. W.. T.. F..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)\n#23 = 80.0   (W: DIAMETRO FINAL TERMINADO)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA FRESA O CORRECTOR)\n#9  = 250.0  (F: AVANCE DE CORTE DE ACABADO EN MM/MIN)\n#19 = 2200.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SEGURIDAD)\n#26 = 15.0   (Z: PROFUNDIDAD TERMINADA DE LA CAJERA)\n#18 = 2.0    (R: PLANO DE SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#23 LE 0] GOTO9101\nIF [#20 LE 0] GOTO9102\nIF [#26 LE 0] GOTO9103\nIF [#9 LE 0] GOTO9104\n\n#10 = #4003\n#14 = #23 / 2.0 (RADIO DE LA CAJERA)\n#15 = #20 / 2.0 (RADIO DE LA FRESA)\nIF [#15 GE #14] GOTO9105\n\n#4 = #14 - #15 (RADIO DE TRAYECTORIA DEL CENTRO DE HERRAMIENTA)\n#32 = #4 / 2.0 (RADIO DEL ARCO DE ENTRADA Y SALIDA TANGENCIAL)\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO)\nG90 G00 S#19 M03\nG00 X#24 Y#25\nG00 Z#18\nG01 Z-[#26] F[#9 / 2.0]\n\n(APROXIMACION EN ARCO TANGENCIAL CON G41)\nG91 G01 G41 X#32 Y#32 D20 F#9\nG03 X-[#32] Y#32 I-[#32] J0 F#9\n\n(MECANIZADO PERIMETRAL CIRCULAR COMPLETO 360 GRADOS)\nG03 I0 J-[#4]\n\n(SALIDA EN ARCO TANGENCIAL HACIA EL CENTRO)\nG03 X-[#32] Y-[#32] I0 J-[#32]\nG01 G40 X#32 Y-[#32] F[#9 * 2.0]\n\n(RETIRADA A PLANO DE SEGURIDAD EN MODO ABSOLUTO)\nG90 G00 Z25.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DIAMETRO DE LA CAJERA DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (AVANCE F DEBE SER MAYOR A CERO)\nN9105 #3000 = 105 (HERRAMIENTA EXCEDE RADIO DE LA CAJERA)\n\nN9999 G#10\nM99\n%\\n"
  },
  {
    "id": "O8111",
    "filename": "O8111_Corte_Circular_G13.nc",
    "title": "O8111 - Ciclo de Corte Circular G13",
    "subtitle": "Emulaci\u00f3n can\u00f3nica Fanuc G13 / O9013 en fresado ascendente (climb milling)",
    "category": "cajeras",
    "category_title": "Cajeras (Pockets)",
    "sub_category": "circulares",
    "icon": "all_inclusive",
    "book_chapter": "Cap\u00edtulo 21 - Peter Smid",
    "g65_template": "G65 P8111 X[#24] Y[#25] D[#7] T[#20] F[#9] S[#19] Z[#26] R[#18]",
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
        "value": 60.0,
        "comment": "DIAMETRO DE LA CAJERA CIRCULAR",
        "full_comment": "D: DIAMETRO DE LA CAJERA CIRCULAR",
        "line_idx": 9,
        "original_line": "#7  = 60.0   (D: DIAMETRO DE LA CAJERA CIRCULAR)"
      },
      {
        "num": 20,
        "letter": "T",
        "value": 12.0,
        "comment": "DIAMETRO DE LA FRESA DE CORTE",
        "full_comment": "T: DIAMETRO DE LA FRESA DE CORTE",
        "line_idx": 12,
        "original_line": "#20 = 12.0   (T: DIAMETRO DE LA FRESA DE CORTE)"
      },
      {
        "num": 9,
        "letter": "F",
        "value": 300.0,
        "comment": "VELOCIDAD DE AVANCE DE CORTE EN MM/MIN",
        "full_comment": "F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN",
        "line_idx": 13,
        "original_line": "#9  = 300.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)"
      },
      {
        "num": 19,
        "letter": "S",
        "value": 2000.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "S: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 14,
        "original_line": "#19 = 2000.0 (S: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 26,
        "letter": "Z",
        "value": 12.0,
        "comment": "PROFUNDIDAD DE LA CAJERA",
        "full_comment": "Z: PROFUNDIDAD DE LA CAJERA",
        "line_idx": 17,
        "original_line": "#26 = 12.0   (Z: PROFUNDIDAD DE LA CAJERA)"
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
    "full_content": "%\nO8111 (CICLO DE CORTE CIRCULAR G13)\n(PETER SMID - FANUC CNC CUSTOM MACROS - CAPITULO 21)\n(LLAMADA G65: G65 P8111 D.. T.. F.. O G13 D.. T.. F..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)\n#7  = 60.0   (D: DIAMETRO DE LA CAJERA CIRCULAR)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 12.0   (T: DIAMETRO DE LA FRESA DE CORTE)\n#9  = 300.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)\n#19 = 2000.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SEGURIDAD)\n#26 = 12.0   (Z: PROFUNDIDAD DE LA CAJERA)\n#18 = 2.0    (R: PLANO DE SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#7 LE 0] GOTO9101\nIF [#20 LE 0] GOTO9102\nIF [#9 LE 0] GOTO9103\n\n#11 = #4001\n#13 = #4003\n\n#31 = ABS[#7] / 2.0\n#15 = #20 / 2.0\n#32 = #31 - #15\nIF [#32 LE 0] GOTO9104\n\n#33 = #32 / 2.0\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO AL FONDO)\nG90 G00 S#19 M03\nG00 X#24 Y#25\nG00 Z#18\nG01 Z-[#26] F[#9 / 2.0]\n\n(CICLO G13: FRESADO EN CONCORDANCIA / CLIMB MILLING)\nG91 G03 X#32 I#33 J0 F#9\nG03 I-[#32]\nG03 X-[#32] I-[#33] J0\n\n(RESTAURA CONDICIONES Y RETIRO)\nG90 G00 Z25.0\nG#11 G#13\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DIAMETRO D DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (AVANCE F DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (HERRAMIENTA EXCEDE RADIO DE LA CAJERA)\n\nN9999 M99\n%\\n"
  },
  {
    "id": "O8110",
    "filename": "O8110_Cajera_Rectangular_Acabado.nc",
    "title": "O8110 - Acabado de Cajera Rectangular o Marco",
    "subtitle": "Perfilado rectangular con radios de esquina R y entrada/salida tangencial",
    "category": "cajeras",
    "category_title": "Cajeras (Pockets)",
    "sub_category": "rectangulares",
    "icon": "crop_portrait",
    "book_chapter": "Cap\u00edtulo 20 - Peter Smid",
    "g65_template": "G65 P8110 W[#23] H[#11] R[#18] D[#7] F[#9] S[#19] Z[#26] B[#2]",
    "variables": [
      {
        "num": 23,
        "letter": "W",
        "value": 100.0,
        "comment": "LONGITUD DE LA CAJERA EN EJE X",
        "full_comment": "W: LONGITUD DE LA CAJERA EN EJE X",
        "line_idx": 7,
        "original_line": "#23 = 100.0  (W: LONGITUD DE LA CAJERA EN EJE X)"
      },
      {
        "num": 11,
        "letter": "H",
        "value": 60.0,
        "comment": "ANCHURA DE LA CAJERA EN EJE Y",
        "full_comment": "H: ANCHURA DE LA CAJERA EN EJE Y",
        "line_idx": 8,
        "original_line": "#11 = 60.0   (H: ANCHURA DE LA CAJERA EN EJE Y)"
      },
      {
        "num": 18,
        "letter": "R",
        "value": 10.0,
        "comment": "RADIO DE LAS ESQUINAS INTERIORES",
        "full_comment": "R: RADIO DE LAS ESQUINAS INTERIORES",
        "line_idx": 9,
        "original_line": "#18 = 10.0   (R: RADIO DE LAS ESQUINAS INTERIORES)"
      },
      {
        "num": 7,
        "letter": "D",
        "value": 10.0,
        "comment": "DIAMETRO DE LA FRESA O NUMERO CORRECTOR",
        "full_comment": "D: DIAMETRO DE LA FRESA O NUMERO CORRECTOR",
        "line_idx": 12,
        "original_line": "#7  = 10.0   (D: DIAMETRO DE LA FRESA O NUMERO CORRECTOR)"
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
        "value": 1800.0,
        "comment": "VELOCIDAD DEL HUSILLO EN RPM",
        "full_comment": "S: VELOCIDAD DEL HUSILLO EN RPM",
        "line_idx": 14,
        "original_line": "#19 = 1800.0 (S: VELOCIDAD DEL HUSILLO EN RPM)"
      },
      {
        "num": 26,
        "letter": "Z",
        "value": 12.0,
        "comment": "PROFUNDIDAD TERMINADA DE LA CAJERA",
        "full_comment": "Z: PROFUNDIDAD TERMINADA DE LA CAJERA",
        "line_idx": 17,
        "original_line": "#26 = 12.0   (Z: PROFUNDIDAD TERMINADA DE LA CAJERA)"
      },
      {
        "num": 2,
        "letter": "B",
        "value": 2.0,
        "comment": "PLANO DE SEGURIDAD EN Z",
        "full_comment": "B: PLANO DE SEGURIDAD EN Z",
        "line_idx": 18,
        "original_line": "#2  = 2.0    (B: PLANO DE SEGURIDAD EN Z)"
      }
    ],
    "full_content": "%\nO8110 (ACABADO DE BOLSILLO RECTANGULAR O MARCO)\n(PETER SMID - FANUC CNC CUSTOM MACROS - CAPITULO 20)\n(LLAMADA G65: G65 P8110 W.. H.. Z.. R.. D.. F..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#23 = 100.0  (W: LONGITUD DE LA CAJERA EN EJE X)\n#11 = 60.0   (H: ANCHURA DE LA CAJERA EN EJE Y)\n#18 = 10.0   (R: RADIO DE LAS ESQUINAS INTERIORES)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#7  = 10.0   (D: DIAMETRO DE LA FRESA O NUMERO CORRECTOR)\n#9  = 350.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)\n#19 = 1800.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SEGURIDAD)\n#26 = 12.0   (Z: PROFUNDIDAD TERMINADA DE LA CAJERA)\n#2  = 2.0    (B: PLANO DE SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#23 LE 0] GOTO9101\nIF [#11 LE 0] GOTO9102\nIF [#18 LE 0] GOTO9103\nIF [#7 LE 0]  GOTO9104\nIF [#9 LE 0]  GOTO9105\nIF [#26 LE 0] GOTO9106\n#15 = #7 / 2.0\nIF [#15 GE #18] GOTO9107\n\n#10 = #4003\n#31 = ABS[#11 / 2.0]\n#32 = #31 / 2.0\n#33 = ABS[#23 / 2.0]\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO INICIAL)\nG90 G00 S#19 M03\nG00 X0.0 Y0.0\nG00 Z#2\nG01 Z-[#26] F[#9 / 2.0]\n\n(APROXIMACION LINEAL CON G41 Y ARCO TANGENCIAL)\nG91 G01 G41 X-[#32] Y-[#32] D7 F[#9 * 1.5]\nG03 X#32 Y-[#32] I#32 J0.0 F#9\n\n(PARED INFERIOR - MITAD DERECHA)\nG01 X[#33 - #18]\n(ESQUINA INFERIOR DERECHA)\nG03 X#18 Y#18 I0.0 J#18\n\n(PARED DERECHA)\nG01 Y[2.0 * [#31 - #18]]\n(ESQUINA SUPERIOR DERECHA)\nG03 X-[#18] Y#18 I-[#18] J0.0\n\n(PARED SUPERIOR)\nG01 X-[2.0 * [#33 - #18]]\n(ESQUINA SUPERIOR IZQUIERDA)\nG03 X-[#18] Y-[#18] I0.0 J-[#18]\n\n(PARED IZQUIERDA)\nG01 Y-[2.0 * [#31 - #18]]\n(ESQUINA INFERIOR IZQUIERDA)\nG03 X#18 Y-[#18] I#18 J0.0\n\n(PARED INFERIOR - MITAD IZQUIERDA HASTA PUNTO MEDIO)\nG01 X[#33 - #18]\n\n(SALIDA TANGENCIAL EN ARCO Y RETORNO LINEAL CANCELANDO G40)\nG03 X#32 Y#32 I0.0 J#32\nG01 G40 X-[#32] Y#32 F[#9 * 1.5]\n\n(RETIRADA A PLANO DE SEGURIDAD)\nG90 G00 Z25.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (LONGITUD W EN EJE X DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (ANCHURA H EN EJE Y DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (RADIO DE ESQUINA R DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (DIAMETRO DE HERRAMIENTA D DEBE SER MAYOR A CERO)\nN9105 #3000 = 105 (AVANCE F DEBE SER MAYOR A CERO)\nN9106 #3000 = 106 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9107 #3000 = 107 (RADIO DE HERRAMIENTA EXCEDE RADIO DE ESQUINA)\n\nN9999 G#10\nM99\n%\\n"
  },
  {
    "id": "O8108",
    "filename": "O8108_Ranura_Recta_Angular.nc",
    "title": "O8108 - Ranura Recta Angular",
    "subtitle": "Ranurado orientado a cualquier \u00e1ngulo polar con arcos extremos de radio R",
    "category": "ranuras",
    "category_title": "Ranuras (Slots)",
    "sub_category": "ranura_recta",
    "icon": "linear_scale",
    "book_chapter": "Cap\u00edtulo 20 - Peter Smid",
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
        "comment": "RADIO DE LA RANURA - ANCHO TOTAL 20MM",
        "full_comment": "R: RADIO DE LA RANURA - ANCHO TOTAL 20MM",
        "line_idx": 11,
        "original_line": "#18 = 10.0   (R: RADIO DE LA RANURA - ANCHO TOTAL 20MM)"
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
    "full_content": "%\nO8108 (MECANIZADO DE RANURA RECTA ANGULAR)\n(PETER SMID - FANUC CNC CUSTOM MACROS - CAPITULO 20)\n(LLAMADA G65: G65 P8108 X.. Y.. Z.. A.. D.. R.. T.. F..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 30.0   (X: COORDENADA X CENTRO INICIAL RANURA)\n#25 = 25.0   (Y: COORDENADA Y CENTRO INICIAL RANURA)\n#1  = 25.0   (A: ORIENTACION ANGULAR EN GRADOS DESDE X+)\n#7  = 60.0   (D: DISTANCIA ENTRE CENTROS EXTREMOS)\n#18 = 10.0   (R: RADIO DE LA RANURA - ANCHO TOTAL 20MM)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA FRESA DE CORTE)\n#9  = 300.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)\n#19 = 1600.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SEGURIDAD)\n#26 = 6.0    (Z: PROFUNDIDAD TOTAL DE LA RANURA)\n#2  = 2.0    (B: PLANO DE SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#7 LE 0]  GOTO9101\nIF [#18 LE 0] GOTO9102\nIF [#20 LE 0] GOTO9103\nIF [#26 LE 0] GOTO9104\nIF [#9 LE 0]  GOTO9105\n#15 = #20 / 2.0\nIF [#15 GE #18] GOTO9106\n\n#10 = #4003\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO EN CENTRO IZQUIERDO)\nG90 G00 S#19 M03\nG00 X#24 Y#25\nG00 Z#2\nG01 Z-[#26] F[#9 / 2.0]\n\n(1. BARRIDO CENTRAL HACIA EL SEGUNDO CENTRO)\n#124 = COS[#1] * #7\n#125 = SIN[#1] * #7\nG91 G01 X#124 Y#125 F#9\n\n(2. ARCO EXTREMO DERECHO 180 GRADOS)\n#114 = COS[#1 + 90.0] * #18\n#115 = SIN[#1 + 90.0] * #18\n#124 = COS[#1 + 90.0] * [#18 * 2.0]\n#125 = SIN[#1 + 90.0] * [#18 * 2.0]\nG03 X#124 Y#125 I#114 J#115\n\n(3. BARRIDO LATERAL SUPERIOR DE REGRESO)\n#124 = COS[#1 + 180.0] * #7\n#125 = SIN[#1 + 180.0] * #7\nG01 X#124 Y#125\n\n(4. ARCO EXTREMO IZQUIERDO 180 GRADOS)\n#114 = COS[#1 - 90.0] * #18\n#115 = SIN[#1 - 90.0] * #18\n#124 = COS[#1 - 90.0] * [#18 * 2.0]\n#125 = SIN[#1 - 90.0] * [#18 * 2.0]\nG03 X#124 Y#125 I#114 J#115\n\n(5. RETORNO AL CENTRO Y RETIRADA EN Z)\n#124 = COS[#1 + 90.0] * #18\n#125 = SIN[#1 + 90.0] * #18\nG01 X#124 Y#125 F#9\n\nG90 G00 Z25.0\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DISTANCIA ENTRE CENTROS D DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (RADIO DE RANURA R DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (DIAMETRO DE HERRAMIENTA T DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (PROFUNDIDAD Z DEBE SER MAYOR A CERO)\nN9105 #3000 = 105 (AVANCE F DEBE SER MAYOR A CERO)\nN9106 #3000 = 106 (HERRAMIENTA DEMASIADO GRANDE PARA LA RANURA)\n\nN9999 G#10\nM99\n%\\n"
  },
  {
    "id": "O8109",
    "filename": "O8109_Ranura_Circular_Profundidad_Multiple.nc",
    "title": "O8109 - Ranura Circular Multi-profundidad",
    "subtitle": "Canal anular circular conc\u00e9ntrico con control de pasadas en Z",
    "category": "ranuras",
    "category_title": "Ranuras (Slots)",
    "sub_category": "ranura_circular",
    "icon": "motion_photos_on",
    "book_chapter": "Cap\u00edtulo 20 - Peter Smid",
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
    "full_content": "%\nO8109 (RANURA CIRCULAR CON PROFUNDIDAD MULTIPLE)\n(PETER SMID - FANUC CNC CUSTOM MACROS - CAPITULO 20)\n(LLAMADA G65: G65 P8109 X.. Y.. W.. D.. C.. F..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA RANURA)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA RANURA)\n#23 = 90.0   (W: DIAMETRO DE PASO CENTRAL DE LA RANURA)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA FRESA DE CORTE)\n#9  = 350.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)\n#19 = 1500.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SEGURIDAD)\n#7  = 10.0   (D: PROFUNDIDAD TOTAL DE LA RANURA)\n#3  = 2.0    (C: PROFUNDIDAD MAXIMA POR PASADA EN Z)\n#18 = 2.0    (R: PLANO DE SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#23 LE 0] GOTO9101\nIF [#7 LE 0]  GOTO9102\nIF [#3 LE 0]  GOTO9103\nIF [#9 LE 0]  GOTO9104\n\n#11 = #4001\n#13 = #4003\n\n#14 = #23 / 2.0 (RADIO DE LA TRAYECTORIA CIRCULAR)\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO)\nG90 G00 S#19 M03\nG00 X[#24 + #14] Y#25\nG00 Z#18\n\n(CALCULO DE CANTIDAD DE PASADAS ENTERAS)\n#100 = #7 / #3\n#101 = FIX[#100]\n\n(BUCLE DE PASADAS DE PROFUNDIDAD EN Z)\n#33 = 1\nWHILE [#33 LE #101] DO1\n  G91 G01 Z-[#3] F#9\n  G03 I-[#14]\n  #33 = #33 + 1\nEND1\n\n(PASADA FINAL DE LIMPIEZA SI QUEDA REMANENTE DE PROFUNDIDAD)\nIF [#100 EQ #101] GOTO900\n#102 = #7 - [#101 * #3]\nG91 G01 Z-[#102] F#9\nG03 I-[#14]\n\nN900 (RETIRADA RAPIDA A PLANO DE SEGURIDAD)\nG90 G00 Z25.0\nG#11 G#13\nGOTO9999\n\n(MENSAJES DE ALARMA DE SEGURIDAD #3000)\nN9101 #3000 = 101 (DIAMETRO DE RANURA W DEBE SER MAYOR A CERO)\nN9102 #3000 = 102 (PROFUNDIDAD TOTAL D DEBE SER MAYOR A CERO)\nN9103 #3000 = 103 (PASO EN Z C DEBE SER MAYOR A CERO)\nN9104 #3000 = 104 (AVANCE F DEBE SER MAYOR A CERO)\n\nN9999 M99\n%\\n"
  },
  {
    "id": "O8112",
    "filename": "O8112_Cajera_Rectangular_Desbaste.nc",
    "title": "O8112 - Desbaste de Cajera Rectangular",
    "subtitle": "Vaciado conc\u00e9ntrico rectangular con radios de esquina R, pasadas en Z y paso lateral",
    "category": "cajeras",
    "category_title": "Cajeras (Pockets)",
    "sub_category": "rectangulares",
    "icon": "crop_free",
    "book_chapter": "Cap\u00edtulo 20 - Peter Smid",
    "g65_template": "G65 P8112 X[#24] Y[#25] W[#23] H[#11] R[#18] T[#20] F[#9] S[#19] Z[#26] K[#6] E[#8] B[#2]",
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
        "num": 2,
        "letter": "B",
        "value": 2.0,
        "comment": "PLANO DE RETROCESO Y SEGURIDAD EN Z",
        "full_comment": "B: PLANO DE RETROCESO Y SEGURIDAD EN Z",
        "line_idx": 22,
        "original_line": "#2  = 2.0    (B: PLANO DE RETROCESO Y SEGURIDAD EN Z)"
      }
    ],
    "full_content": "%\nO8112 (DESBASTE DE CAJERA RECTANGULAR)\n(PETER SMID - FANUC CNC CUSTOM MACROS - CAPITULO 20)\n(LLAMADA G65: G65 P8112 X.. Y.. W.. H.. R.. Z.. K.. E.. T.. F.. S.. B..)\n\n(VARIABLES DE ENTRADA DEL OPERARIO)\n(1. DIMENSIONES GEOMETRICAS DE LA PIEZA)\n#24 = 0.0    (X: COORDENADA X DEL CENTRO DE LA CAJERA)\n#25 = 0.0    (Y: COORDENADA Y DEL CENTRO DE LA CAJERA)\n#23 = 100.0  (W: LONGITUD TOTAL DE LA CAJERA EN EJE X)\n#11 = 60.0   (H: ANCHURA TOTAL DE LA CAJERA EN EJE Y)\n#18 = 10.0   (R: RADIO DE LAS ESQUINAS INTERIORES)\n\n(2. CONDICIONES DE CORTE Y HERRAMIENTA)\n#20 = 10.0   (T: DIAMETRO DE LA FRESA O CORTADOR)\n#9  = 350.0  (F: VELOCIDAD DE AVANCE DE CORTE EN MM/MIN)\n#19 = 1800.0 (S: VELOCIDAD DEL HUSILLO EN RPM)\n\n(3. ESTRATEGIA DE MECANIZADO Y SEGURIDAD)\n#26 = 15.0   (Z: PROFUNDIDAD TOTAL DE LA CAJERA)\n#6  = 3.0    (K: PASO DE PROFUNDIDAD EN Z POR PASADA)\n#8  = 6.0    (E: PASO LATERAL RADIAL ENTRE CONTORNOS)\n#2  = 2.0    (B: PLANO DE RETROCESO Y SEGURIDAD EN Z)\n\n(CONTROL DE ERRORES Y SEGURIDAD)\nIF [#23 LE 0] #3000 = 101 (LONGITUD W INVALIDA)\nIF [#11 LE 0] #3000 = 102 (ANCHURA H INVALIDA)\nIF [#26 LE 0] #3000 = 103 (PROFUNDIDAD Z INVALIDA)\nIF [#20 LE 0] #3000 = 104 (DIAMETRO DE HERRAMIENTA INVALIDO)\nIF [#6 LE 0]  #3000 = 105 (PASO EN Z K INVALIDO)\n#15 = #20 / 2.0\nIF [#15 GT #18] #3000 = 106 (RADIO FRESA MAYOR QUE RADIO ESQUINA)\n\n#26 = -ABS[#26]\n#27 = ABS[#6]\n#28 = ABS[#8]\nIF [#28 EQ 0] #28 = #20 * 0.65\nIF [#2 EQ 0]  #2 = 2.0\n\n#10 = #20 / 2.0\n#12 = [#23 / 2.0] - #10\n#13 = [#11 / 2.0] - #10\n#14 = #18 - #10\nIF [#14 LT 0] #14 = 0\n\n#15 = #12\nIF [#13 GT #15] #15 = #13\n#16 = FIUP[#15 / #28]\nIF [#16 LT 1] #16 = 1\n\n(ARRANQUE DE HUSILLO Y POSICIONAMIENTO EN CENTRO)\nG90 G00 S#19 M03\nG00 X#24 Y#25\nG00 Z#2\n\n#30 = 0\nWHILE [#30 GT #26] DO 1\n    #30 = #30 - #27\n    IF [#30 LT #26] #30 = #26\n\n    (INMERSION EN Z EN EL CENTRO)\n    G00 X#24 Y#25\n    G01 Z#30 F[#9 * 0.5]\n\n    (DESBASTE CONCENTRICO DE ADENTRO HACIA AFUERA)\n    #31 = 1\n    WHILE [#31 LE #16] DO 2\n        #32 = [#12 * #31] / #16\n        #33 = [#13 * #31] / #16\n        #34 = [#14 * #31] / #16\n\n        G01 X[#24 + #32 - #34] Y[#25 - #33] F#9\n        G03 X[#24 + #32] Y[#25 - #33 + #34] R#34\n        G01 Y[#25 + #33 - #34]\n        G03 X[#24 + #32 - #34] Y[#25 + #33] R#34\n        G01 X[#24 - #32 + #34]\n        G03 X[#24 - #32] Y[#25 + #33 - #34] R#34\n        G01 Y[#25 - #33 + #34]\n        G03 X[#24 - #32 + #34] Y[#25 - #33] R#34\n        G01 X[#24 + #32 - #34]\n\n        #31 = #31 + 1\n    END 2\n\n    (RETORNO AL PLANO SEGURO)\n    G00 Z#2\nEND 1\n\nG00 Z[#2 + 25.0]\nM99\n%\n"
  }
];
if (typeof window !== 'undefined') { window.MACROS_DATA = MACROS_DATA; }
