// 1
let string = 'i am in the easycode'
let x = ''

for (let i = 0; i < string.length; i++) {
    if (string[i - 1] == ' ' || i == 0)
        x += string[i].toUpperCase()
    else {
        x += string[i]
    }
}

console.log(x)


// 2
let string = 'tseb eht ma i'
let x = ''

for (let i = string.length - 1; i >= 0; i--) {
    x += string[i]
}

console.log(x)


// 3
let number = 10
let x = 1

for (let i = 1; i <= number; i++) {
    x *= i
}

console.log(x)


// 4
let string = 'JavaScript is a pretty good language'
let x = ''

for (let i = 0; i < string.length; i++) {
    if (string[i - 1] == ' ') {
        x += string[i].toUpperCase()
    }
    else if (string[i] != ' ') {
        x += string[i]
    }
}

console.log(x)


// 5
let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let x of mass) {
    if (x % 2 != 0)
        console.log(x)
}

// 6
let list = {
    name: 'alex',
    work: 'home',
    age: 20
}

for (let key in list) {
    if (typeof(list[key]) == 'string') {
        list[key] = list[key].toUpperCase()
    }
}

console.log(list)