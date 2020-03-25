// basics onclick
function func() {
    alert('func is working!')
}

function func1() {
    alert('func1 is working!')
}

function func2() {
    alert('func2 is working!')
}

// second
function second() {
    var elem = document.getElementById('test')
    alert(elem.value)
    elem.value = 'www'
}

function nameOfClass() {
    var elem = document.getElementById('test1')
    alert(elem.className)
}

// this
function testFunc(elem) {
    alert(elem.value)
}