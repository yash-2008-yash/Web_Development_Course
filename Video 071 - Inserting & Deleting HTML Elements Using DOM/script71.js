// ---------- .innerHTML ----------

console.log(document.querySelector(".box"))
// This'll print the first HTML element with class="box", which is div.box

console.log(document.querySelector(".box").innerHTML)
// This'll print the HTML written inside the box
// This'll print 'I AM A BOX' in the console

console.log(document.querySelector(".container").innerHTML)
// It'll print '<div class="box" title="element">I AM A BOX</div>'

// We can change the HTML content using .innerHTML
console.log(document.querySelector(".box").innerHTML = "NO, I AM NOT A BOX")
// Now, 'I AM A BOX' will be converted into 'I AM NOT A BOX'

// ---------- .innerText ----------

//But, innerText prints it as a text
console.log(document.querySelector(".container").innerText)
// It'll print 'I AM NOT A BOX' in the console

// ---------- .outerHTML ----------

console.log(document.querySelector(".container").outerHTML)
// It'll print the element itself, and it's children
// This'll print :
// <div class="container">
//      <div class="box" title="element">I AM NOT A BOX</div>
// </div>

// ---------- .tagName & .nodeName ----------

console.log(document.querySelector(".container").tagName)
// It'll print the tag of the element
// In this case, .container is a div, so it'll print 'DIV'

// There is one more similar method called .nodeName
// It's same as .tagName, but .tagName works only for HTML elements
// Whereas, .nodeName even works for nodes like 'text','comment',etc.

// ---------- .textContent ----------

console.log(document.querySelector(".container").textContent)
// This'll print all the text content inside the given element

// ---------- .hasAttribute ----------

console.log(document.querySelector(".box").hasAttribute("title"))
// It'll check whether the element has the given attribute or not
// In this case, .box does have 'title' attribute, so 'true'

// ---------- .getAttribute ----------

console.log(document.querySelector(".box").getAttribute("title"))
// It'll print the value of the given atrribute of the element
// In this case, it'll print "element"

// ---------- .setAttribute ----------

document.querySelector(".box").setAttribute("title", "html_element")
// It'll change the attribute value
// If the attribute doesn't exist, it'll create one

console.log(document.querySelector(".box").getAttribute("title"))
// Now, "element" will be changed to "html_element"

// NOTE: You can't see the changes in the .html file because JS can't overwrite in the source code
// But it'll change it in the DOM tree

// ---------- .removeAttribute ----------

document.querySelector(".box").removeAttribute("title")
// It'll remove the given attribute from the HTML element

// ---------- .attributes ----------

console.log(document.querySelector(".box").attributes)
// It'll print all the attributes of the given HTML element

// ---------- .dataset ----------

// We can create custom attributes in HTML elements to store information
// Go to HTML element and type 'data-'
// After the hypen, you can write a custom attribute name and value
// Example: data-CodeWriter="Yashwanth"

console.log(document.querySelector(".box").dataset)
// It'll show the custom data attributes on the HTML element
// In this case, it'll print {codewriter: 'Yashwanth'}

// ---------- INSERTION METHODS ----------

let insertion = document.createElement("div") // Creating the element
insertion.setAttribute("class", "inserted_element") // Setting the class
insertion.setAttribute("title", "example") // Setting custom attribute
insertion.innerHTML = "I am an inserted element" // Setting the HTML content

// document.body.append(insertion) // Inserting into body

// document.querySelector(".container").append(insertion)
// 'append' adds the new element in the end of .container

// document.querySelector(".container").prepend(insertion)
// 'prepend' adds the new element at the beginning of .container

// document.querySelector(".container").before(insertion)
// 'before' adds the new element before the .container itself

// document.querySelector(".container").after(insertion)
// 'after' adds the new element after the .container itself

// document.querySelector(".container").replaceWith(insertion)
// 'replaceWith' replaces the whole .container by the new element

// document.querySelector(".container").replaceChildren(insertion)
// 'replaceChildren' replaces the children of .container by the new element

// ---------- INSERTION METHODS by .insertAdjacentHTML/Text/Element ----------

let container = document.querySelector(".container")

// container.insertAdjacentHTML("afterbegin","<b>HELLO, THERE</b>")
// 'afterbegin' will insert the element at the beginning of .container

// container.insertAdjacentHTML("beforeend","<b>HELLO, THERE</b>")
// 'beforeend' will insert the element at the ending of .container

// container.insertAdjacentHTML("beforebegin","<b>HELLO, THERE</b>")
// 'beforebegin' will insert the element before the beginning of .container

// container.insertAdjacentHTML("afterend","<b>HELLO, THERE</b>")
// 'afterend' will insert the element after the ending of .container

// ---------- DELETION METHODS ----------

// document.querySelector(".box").remove()
// This'll remove the fisrt HTML element of class="box"

// ---------- classList METHODS ----------

let box = document.querySelector(".box")

// box.classList.add("new_class")
// It'll add a new class into the .box

// box.classList.remove("box")
// It'll remove the existing class from the .box

// box.classList.toggle("new_class")
// It'll add the new class if it doesn't exist
// It'll remove the new class if it alreay exists
// Toggle: "Close the door if it's opened, Open the door if it's closed"

console.log(box.classList.contains("new_class"))
// It'll check whether the element has the given class or not
// In this case, it'll return 'false'