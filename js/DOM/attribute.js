// Attribute Methods Demo
let link = document.getElementById("myLink");

console.log("Original <a> element:", link);

// 1. getAttribute()
console.log("\n1. getAttribute()");
let hrefValue = link.getAttribute("href");
console.log("link.getAttribute('href'):", hrefValue);

// 2. setAttribute()
console.log("\n2. setAttribute()");
link.setAttribute("href", "https://openai.com");
link.setAttribute("target", "_blank");
link.setAttribute("title", "Go to OpenAI site");
console.log("Updated href and added title attribute:", link);

// 3. hasAttribute()
console.log("\n3. hasAttribute()");
console.log("Does link have 'target'? ->", link.hasAttribute("target"));
console.log("Does link have 'rel'? ->", link.hasAttribute("rel"));

// 4. removeAttribute()
console.log("\n4. removeAttribute()");
link.removeAttribute("target");
console.log("Removed 'target' attribute. Now link is:", link);
