document.querySelector("form").querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.className="field-label",t.htmlFor=e.id,t.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),e.placeholder=e.name.charAt(0).toUpperCase()+e.name.slice(1),e.parentNode.insertBefore(t,e)});
//# sourceMappingURL=index.e2a3a803.js.map
