// Import RHDS design tokens CSS
import tokensCSS from "@rhds/tokens/css/global.css";

// Inject the CSS into the document
const style = document.createElement("style");
style.textContent = tokensCSS;
document.head.appendChild(style);

console.log("✅ RHDS design tokens loaded");
