var count = 0

function init() {
    var access = document.getElementById("new")
    var myClass = document.getElementsByClassName("new2")
    
    access.innerHTML = "Hi, Alex!"
    console.log(myClass)
    
    access.setAttribute("class", "redText")
}
window.onload = init

function buttonClick(button) {
    alert("Clicked!" + button.name)
}

function counter(element) {
    count++
    element.innerHTML = "Наведено " + count + " раз"
}