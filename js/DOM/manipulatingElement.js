// 1. createElement()
console.log("1. createElement()");
let div = document.createElement('div');
div.innerHTML = "<p>Hello</p>";
div.id = "idOfElement";
document.body.appendChild(div);
console.log("Created a <div> with innerHTML '<p>Hello</p>' and appended to body:", div);

// 2. appendChild()
console.log("\n2. appendChild()");
let menu = document.getElementById('menu');
let list = document.createElement('li');
list.innerHTML = 'contact';
menu.appendChild(list);
console.log("Added <li> 'contact' to the end of #menu:", menu);

// 3. textContent
console.log("\n3. textContent");
console.log("menu.textContent BEFORE change:", menu.textContent);
menu.textContent = "hi";
console.log("menu.textContent AFTER change:", menu.textContent);

// 4. innerHTML
console.log("\n4. innerHTML");
console.log("menu.innerHTML BEFORE change:", menu.innerHTML);
menu.innerHTML = "<h1>good morning</h1>";
console.log("menu.innerHTML AFTER change:", menu.innerHTML);

// 5. after()
console.log("\n5. after()");
let heading = document.createElement('h2');
heading.textContent = "I'm placed after the div";
div.after(heading);
console.log("Inserted <h2> after <div>:", heading);

// 6. append()
console.log("\n6. append()");
let footer = document.createElement('footer');
footer.append("Footer text ", document.createElement('span'));
document.body.appendChild(footer);
console.log("Appended text and <span> into <footer>:", footer);

// 7. prepend()
console.log("\n7. prepend()");
let header = document.createElement('header');
header.textContent = "This is the header";
document.body.prepend(header);
console.log("Prepended <header> to the body:", header);

// 8. insertAdjacentHTML()
console.log("\n8. insertAdjacentHTML()");
div.insertAdjacentHTML("beforeend", "<p>Inserted with insertAdjacentHTML()</p>");
console.log("Inserted <p> inside <div> using insertAdjacentHTML:", div);

// Recreate #menu since textContent/innerHTML changed it
menu = document.createElement('ul');
menu.id = "menu";
menu.innerHTML = "<li>home</li><li>about</li><li>blog</li><li>contact</li>";
document.body.appendChild(menu);
console.log("Recreated #menu for further operations:", menu);

// 9. replaceChild()
console.log("\n9. replaceChild()");
let newItem = document.createElement('li');
newItem.textContent = "services";
menu.replaceChild(newItem, menu.children[1]);
console.log("Replaced 2nd item with 'services':", menu);

// 10. cloneNode()
console.log("\n10. cloneNode()");
let clonedMenu = menu.cloneNode(true);
clonedMenu.id = "clonedMenu";
document.body.appendChild(clonedMenu);
console.log("Cloned #menu and appended as #clonedMenu:", clonedMenu);

// 11. removeChild()
console.log("\n11. removeChild()");
console.log(menu.lastElementChild)
menu.removeChild(menu.lastElementChild);
console.log("Removed last item from #menu:", menu);

// 12. insertBefore()
console.log("\n12. insertBefore()");
let firstItem = document.createElement('li');
firstItem.textContent = "first";
menu.insertBefore(firstItem, menu.firstElementChild);
console.log("Inserted 'first' before the first menu item:", menu);
