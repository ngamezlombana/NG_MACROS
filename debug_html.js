const fs = require('fs');
const path = require('path');

// 1. Load macros_data.js
const macrosDataContent = fs.readFileSync(path.join(__dirname, 'macros_data.js'), 'utf8');
// Evaluate it to get MACROS_DATA
let MACROS_DATA;
eval(macrosDataContent + "; MACROS_DATA = MACROS_DATA;");

// 2. Load index.html
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// 3. Extract the drawDimension and drawToolpath scripts from index.html
const scriptRegex = /<script>([\s\S]*?)<\/script>/;
const scriptMatch = htmlContent.match(scriptRegex);
if (!scriptMatch) {
    console.error("Could not find script block in index.html");
    process.exit(1);
}
const scriptText = scriptMatch[1];

// 4. Mock the DOM environment
const canvas = {
    width: 800,
    height: 800,
    parentElement: {
        clientWidth: 400,
        clientHeight: 400
    }
};

const ctx = {
    clearRect: () => {},
    beginPath: () => {},
    moveTo: () => {},
    lineTo: () => {},
    stroke: () => {},
    arc: () => {},
    fill: () => {},
    closePath: () => {},
    strokeRect: () => {},
    translate: () => {},
    rotate: () => {},
    save: () => {},
    restore: () => {},
    fillRect: () => {},
    fillText: () => {},
    measureText: () => ({ width: 50 }),
    scale: () => {},
    setLineDash: () => {},
    strokeStyle: '',
    fillStyle: '',
    lineWidth: 1,
    font: '',
    textAlign: '',
    textBaseline: ''
};

// Global variables that the script expects
let activeMacro = null;
const window = {
    devicePixelRatio: 1,
    addEventListener: () => {}
};
const document = {
    addEventListener: () => {},
    getElementById: (id) => {
        return {
            textContent: '',
            value: '',
            style: {},
            innerHTML: '',
            querySelector: () => ({ appendChild: () => {} })
        };
    }
};

// 5. Extract and run functions
// Let's create a sandbox and evaluate the scriptText inside it
const sandbox = {
    MACROS_DATA,
    canvas,
    ctx,
    window,
    document,
    activeMacro,
    console
};

// Helper functions in scriptText that we want to run
// We can run the entire scriptText but mock out things that fail
const fullCodeToRun = `
${scriptText}

// Test running drawToolpath for all macros
for (let i = 0; i < MACROS_DATA.length; i++) {
    activeMacro = JSON.parse(JSON.stringify(MACROS_DATA[i]));
    console.log("Testing macro:", activeMacro.filename);
    try {
        // Mock variables values
        const vars = {};
        activeMacro.variables.forEach(v => { vars[v.num] = v.value; });
        
        drawToolpath();
        console.log("  SUCCESS");
    } catch (err) {
        console.error("  FAILED:", err.message);
        console.error(err.stack);
    }
}
`;

try {
    const vm = require('vm');
    vm.createContext(sandbox);
    vm.runInContext(fullCodeToRun, sandbox);
} catch (globalErr) {
    console.error("Global script execution failed:", globalErr.message);
    console.error(globalErr.stack);
}
