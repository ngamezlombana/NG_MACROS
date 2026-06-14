import os
import re
import json

workspace_dir = "d:/Antigravity/Aplicacion macros"
nc_files = [f for f in os.listdir(workspace_dir) if f.endswith(".nc")]

macros = []

for filename in nc_files:
    filepath = os.path.join(workspace_dir, filename)
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
        
    lines = content.splitlines()
    
    # Try to find a title from the first non-empty line
    title = filename.replace(".nc", "")
    for line in lines:
        if line.strip().startswith("O"):
            title = line.strip()
            break
            
    # Find the bounds of the operator variables section
    start_idx = -1
    for idx, line in enumerate(lines):
        if "VARIABLES DE ENTRADA DEL OPERARIO" in line or "VARIABLES DE ENTRADA" in line:
            start_idx = idx
            break
            
    if start_idx == -1:
        start_idx = 0
        
    # We scan up to 30 lines after start_idx
    end_idx = min(start_idx + 30, len(lines))
        
    # Parse variables ONLY within the range and ensure variable number is < 100
    variables = []
    # Match "#1 = 150.0  (DIAMETRO...)" or "#1=150 (DIAMETRO...)"
    var_pattern = re.compile(r"^\s*#(\d+)\s*=\s*(-?[\d.]+)\s*(\(.*\))?")
    
    for i in range(start_idx, end_idx):
        line = lines[i]
        match = var_pattern.match(line)
        if match:
            var_num = int(match.group(1))
            # Operator inputs are always < 100
            if var_num < 100:
                var_val = float(match.group(2))
                var_comment = match.group(3) if match.group(3) else ""
                comment_text = var_comment.strip("() ")
                
                variables.append({
                    "num": var_num,
                    "value": var_val,
                    "comment": comment_text,
                    "line_idx": i,
                    "original_line": line
                })
            
    macros.append({
        "filename": filename,
        "title": title,
        "variables": variables,
        "full_content": content
    })

# Output as a JS file for the browser
output_path = os.path.join(workspace_dir, "macros_data.js")
js_content = f"const MACROS_DATA = {json.dumps(macros, indent=2)};"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Parsed {len(macros)} macros and wrote to {output_path}")
