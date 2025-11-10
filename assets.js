// Import RHDS design tokens CSS
import tokensCSS from "@rhds/tokens/css/global.css";
import tableCSS from "@rhds/elements/rh-table/rh-table-lightdom.css";

// Inject the CSS into the document
const style = document.createElement("style");
style.textContent = tokensCSS;
document.head.appendChild(style);

const tableStyle = document.createElement("style");
tableStyle.textContent = tableCSS;
document.head.appendChild(tableStyle);

console.log("✅ RHDS design tokens loaded");
console.log("✅ RHDS table styles loaded");
