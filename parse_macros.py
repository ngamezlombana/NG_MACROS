import os
import re
import json

workspace_dir = os.path.dirname(os.path.abspath(__file__))
nc_files = [f for f in sorted(os.listdir(workspace_dir)) if f.lower().endswith(".nc")]

# Mapping of macro ID to category, subcategory and metadata
METADATA = {
    "O8101": {
        "id": "O8101",
        "category": "patrones_agujeros",
        "category_title": "Patrones de Agujeros",
        "sub_category": "agujero_lineal",
        "title": "O8101 - Patrón de Agujero Angular",
        "subtitle": "Serie lineal equidistante orientada a cualquier ángulo polar",
        "icon": "linear_scale",
        "book_chapter": "Capítulo 20 - Peter Smid",
        "g65_template": "G65 P8101 X[#24] Y[#25] A[#1] Q[#17] H[#11] T[#20] F[#9] S[#19] Z[#26] R[#18] E[#8]"
    },
    "O8103": {
        "id": "O8103",
        "category": "patrones_agujeros",
        "category_title": "Patrones de Agujeros",
        "sub_category": "agujero_marco",
        "title": "O8103 - Patrón de Agujero de Marco Rectangular",
        "subtitle": "Perímetro rectangular de 4 lados con prevención de sobretaladrado en esquinas",
        "icon": "crop_free",
        "book_chapter": "Capítulo 20 - Peter Smid",
        "g65_template": "G65 P8103 X[#24] Y[#25] U[#21] V[#22] I[#4] J[#5] T[#20] F[#9] S[#19] Z[#26] R[#18] E[#8]"
    },
    "O8104": {
        "id": "O8104",
        "category": "patrones_agujeros",
        "category_title": "Patrones de Agujeros",
        "sub_category": "agujero_bcd",
        "title": "O8104 - Círculo de Agujeros de Perno (BCD / PCD)",
        "subtitle": "Círculo de barrenado paramétrico con ángulo inicial y selección de orificio de inicio",
        "icon": "donut_large",
        "book_chapter": "Capítulo 20 - Peter Smid",
        "g65_template": "G65 P8104 X[#24] Y[#25] W[#23] H[#11] A[#1] S[#19] T[#20] F[#9] B[#2] Z[#26] R[#18] E[#8]"
    },
    "O8105": {
        "id": "O8105",
        "category": "patrones_agujeros",
        "category_title": "Patrones de Agujeros",
        "sub_category": "agujero_arco",
        "title": "O8105 - Patrón de Agujeros en Arco",
        "subtitle": "Barrenado en segmento circular con paso angular uniforme",
        "icon": "timelapse",
        "book_chapter": "Capítulo 20 - Peter Smid",
        "g65_template": "G65 P8105 X[#24] Y[#25] W[#23] H[#11] A[#1] I[#4] T[#20] F[#9] S[#19] Z[#26] R[#18] E[#8]"
    },
    "O8106": {
        "id": "O8106",
        "category": "cajeras",
        "category_title": "Cajeras (Pockets)",
        "sub_category": "circulares",
        "title": "O8106 - Desbaste de Cajera Circular",
        "subtitle": "Vaciado concéntrico con control de pasadas Z y paso lateral W",
        "icon": "radio_button_checked",
        "book_chapter": "Capítulo 20 - Peter Smid",
        "g65_template": "G65 P8106 X[#24] Y[#25] D[#7] W[#23] T[#20] F[#9] S[#19] Z[#26] K[#6] R[#18]"
    },
    "O8107": {
        "id": "O8107",
        "category": "cajeras",
        "category_title": "Cajeras (Pockets)",
        "sub_category": "circulares",
        "title": "O8107 - Acabado de Cajera Circular",
        "subtitle": "Perfilado tangencial suave con compensación G41 y salida en arco",
        "icon": "track_changes",
        "book_chapter": "Capítulo 20 - Peter Smid",
        "g65_template": "G65 P8107 X[#24] Y[#25] W[#23] T[#20] F[#9] S[#19] Z[#26] R[#18]"
    },
    "O8111": {
        "id": "O8111",
        "category": "cajeras",
        "category_title": "Cajeras (Pockets)",
        "sub_category": "circulares",
        "title": "O8111 - Ciclo de Corte Circular G13",
        "subtitle": "Emulación canónica Fanuc G13 / O9013 en fresado ascendente (climb milling)",
        "icon": "all_inclusive",
        "book_chapter": "Capítulo 21 - Peter Smid",
        "g65_template": "G65 P8111 X[#24] Y[#25] D[#7] T[#20] F[#9] S[#19] Z[#26] R[#18]"
    },
    "O8110": {
        "id": "O8110",
        "category": "cajeras",
        "category_title": "Cajeras (Pockets)",
        "sub_category": "rectangulares",
        "title": "O8110 - Acabado de Cajera Rectangular o Marco",
        "subtitle": "Perfilado rectangular con radios de esquina R y entrada/salida tangencial",
        "icon": "crop_portrait",
        "book_chapter": "Capítulo 20 - Peter Smid",
        "g65_template": "G65 P8110 W[#23] H[#11] R[#18] D[#7] F[#9] S[#19] Z[#26] B[#2]"
    },
    "O8108": {
        "id": "O8108",
        "category": "ranuras",
        "category_title": "Ranuras (Slots)",
        "sub_category": "ranura_recta",
        "title": "O8108 - Ranura Recta Angular",
        "subtitle": "Ranurado orientado a cualquier ángulo polar con arcos extremos de radio R",
        "icon": "linear_scale",
        "book_chapter": "Capítulo 20 - Peter Smid",
        "g65_template": "G65 P8108 X[#24] Y[#25] A[#1] D[#7] R[#18] T[#20] F[#9] S[#19] Z[#26] B[#2]"
    },
    "O8109": {
        "id": "O8109",
        "category": "ranuras",
        "category_title": "Ranuras (Slots)",
        "sub_category": "ranura_circular",
        "title": "O8109 - Ranura Circular Multi-profundidad",
        "subtitle": "Canal anular circular concéntrico con control de pasadas en Z",
        "icon": "motion_photos_on",
        "book_chapter": "Capítulo 20 - Peter Smid",
        "g65_template": "G65 P8109 X[#24] Y[#25] W[#23] T[#20] F[#9] S[#19] D[#7] C[#3] R[#18]"
    }
}

# Mapping of Fanuc Local Variable numbers to standard Letter addresses (List 1)
FANUC_LETTER_MAP = {
    1: "A", 2: "B", 3: "C", 4: "I", 5: "J", 6: "K",
    7: "D", 8: "E", 9: "F", 11: "H", 17: "Q", 18: "R",
    19: "S", 20: "T", 21: "U", 22: "V", 23: "W", 24: "X",
    25: "Y", 26: "Z"
}

macros = []

for filename in nc_files:
    filepath = os.path.join(workspace_dir, filename)
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
        
    lines = content.splitlines()
    
    # Try to extract program ID (e.g. O8101)
    prog_id = None
    title = filename.replace(".nc", "")
    for line in lines:
        match_id = re.search(r"\b(O81\d\d)\b", line)
        if match_id:
            prog_id = match_id.group(1)
            title = line.strip().strip("%").strip()
            break
            
    # Find the bounds of the operator variables section
    start_idx = -1
    end_idx = len(lines)
    for idx, line in enumerate(lines):
        if "VARIABLES DE ENTRADA" in line:
            start_idx = idx + 1
            break
            
    if start_idx == -1:
        start_idx = 0
        
    for idx in range(start_idx, len(lines)):
        line_clean = lines[idx].strip()
        if "CONTROL DE ERRORES" in line_clean or line_clean.startswith("IF [") or line_clean.startswith("G90"):
            end_idx = idx
            break
        
    variables = []
    # Match "#1 = 150.0  (DIAMETRO...)" or "#1=150 (DIAMETRO...)"
    var_pattern = re.compile(r"^\s*#(\d+)\s*=\s*(-?[\d.]+)\s*(\(.*\))?")
    
    for i in range(start_idx, end_idx):
        line = lines[i]
        match = var_pattern.match(line)
        if match:
            var_num = int(match.group(1))
            if var_num < 100:
                var_val = float(match.group(2))
                var_comment = match.group(3) if match.group(3) else ""
                comment_text = var_comment.strip("() ")
                
                # Check for explicit letter in comment like "(X: COORDENADA...)"
                letter_match = re.match(r"^([A-Z]):\s*(.*)", comment_text)
                if letter_match:
                    arg_letter = letter_match.group(1)
                    clean_desc = letter_match.group(2)
                else:
                    arg_letter = FANUC_LETTER_MAP.get(var_num, f"#{var_num}")
                    clean_desc = comment_text
                
                variables.append({
                    "num": var_num,
                    "letter": arg_letter,
                    "value": var_val,
                    "comment": clean_desc,
                    "full_comment": comment_text,
                    "line_idx": i,
                    "original_line": line
                })
                
    meta = METADATA.get(prog_id, {
        "id": prog_id or filename,
        "category": "otros",
        "category_title": "Otros Ciclos",
        "sub_category": "general",
        "title": title,
        "subtitle": "Ciclo Fanuc Custom Macro B",
        "icon": "settings",
        "book_chapter": "Peter Smid - Fanuc CNC Custom Macros",
        "g65_template": f"G65 P{prog_id[1:] if prog_id else '0000'}"
    })
            
    macros.append({
        "id": prog_id or filename,
        "filename": filename,
        "title": meta["title"],
        "subtitle": meta["subtitle"],
        "category": meta["category"],
        "category_title": meta["category_title"],
        "sub_category": meta["sub_category"],
        "icon": meta["icon"],
        "book_chapter": meta["book_chapter"],
        "g65_template": meta["g65_template"],
        "variables": variables,
        "full_content": content
    })

# Sort according to program order: O8101, O8103, O8104, O8105, O8106, O8107, O8111, O8110, O8108, O8109
prog_order = ["O8101", "O8103", "O8104", "O8105", "O8106", "O8107", "O8111", "O8110", "O8108", "O8109"]
macros.sort(key=lambda m: prog_order.index(m["id"]) if m["id"] in prog_order else 999)

# Output as a JS file for the browser
output_path = os.path.join(workspace_dir, "macros_data.js")
js_content = f"var MACROS_DATA = {json.dumps(macros, indent=2)};\nif (typeof window !== 'undefined') {{ window.MACROS_DATA = MACROS_DATA; }}\n"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Parsed {len(macros)} macros and wrote to {output_path}")
for m in macros:
    print(f" - [{m['id']}] {m['title']} ({m['category']} / {m['sub_category']}) - {len(m['variables'])} variables")
