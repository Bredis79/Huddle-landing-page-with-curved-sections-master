//select input
let input = document.querySelector("#footer__input")

//select submit button
let submitBtn = document.querySelector("#footer__submit")

//create new paragraph 
let newParagraph = document.createElement("p")

//set class name to newParagraph
newParagraph.className = "test"

//set value to the paragraph
newParagraph.textContent = "Check your email please" 

//select right side of the footer
let rightSide = document.querySelector(".footer__right_side")

//check if email address is valid
submitBtn.addEventListener("click", function (event){
    
    if(input.value.includes('@') === false || input.value.includes(".") === false) {
        event.preventDefault()
        rightSide.appendChild(newParagraph)
        newParagraph.style.color = "#ff4242"
        newParagraph.style.fontSize = "0.8rem"
        input.style.border = "1px solid #ff4242"
        input.style.cursor = "pointer"
    } 

    // set margint-top of error message according to screen width    
    if (window.innerWidth < 1201 || window.innerWidth > 481) {
        newParagraph.style.marginTop = "-6rem"
    }
    
    if (window.innerWidth < 482) {
        newParagraph.style.marginTop = "-4rem"
    } 

    if (window.innerWidth >= 1201) {
        newParagraph.style.marginTop = "0rem"
    }
   
    form.reset()
    
    })
   


