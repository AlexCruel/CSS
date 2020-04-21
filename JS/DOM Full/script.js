//const span = document.querySelector('span')
//const spanParent = document.querySelector('.parent-1')

//function isParent(parent, child) {
//    console.log(parent === child.parentElement)
//}
//
//isParent(spanParent, span)

//function isParent(parent, child) {
//    let currentParent = child.parentElement
//    let isParent = false
//    
//    while(currentParent) {
//        isParent = parent === currentParent
//        
//        if (isParent) {
//            currentParent = null
//        } else {
//            currentParent = currentParent.parentElement
//        }
//    }
//    
//    return isParent
//}
//
//console.log(isParent(spanParent, span))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//const p = document.querySelector('p')
//const [...childNodes] = p.childNodes
//
//childNodes.forEach((node) => {
//    if (node.nodeType === 3) {
//        node.textContent = '-text-'
//    }
//})
//
//console.log(childNodes)
/////////////////////////////////////////////////////////////////////////////////////////////////////


//const ul = document.querySelector('ul')
//const counts = 4
//const totalCounts = ul.children.length + counts
//
//for (let i = ul.children.length; i < totalCounts; i++) {
//    const li = document.createElement('li')
//    li.classList.add('new-item')
//    li.textContent = `item ${i}`
//    ul.appendChild(li)
//}


//let links = Array.from(document.querySelectorAll('body a')).filter(link => !link.closest('ul'));
//console.log(links)

//function preUl() {
//    const ulPrev = document.querySelector('ul').previousElementSibling
//    const ulNext = document.querySelector('ul').nextElementSibling
//    console.log(ulPrev)
//    console.log(ulNext)
//}
//preUl()

///////////////////////////////////////////////////////////////////////////////////////////////////
//const p = document.querySelector('p')
//console.log(p.textContent)



//const p = document.querySelector('p')
//function info(el) {
//    return {
//        type: p.nodeType,
//        name: p.nodeName,
//        child: p.children
//    }
//}
//console.log(info(p))


//const ul = document.querySelector('ul')
//const mass = []
//function getTextFromUl(ul) {
//    for (let i = 0; i < ul.children.length; i++) {
//        mass.push(ul.children[i].textContent)
//    }
//    return mass
//}
//console.log(getTextFromUl(ul))


/////////////////////////////////////////////////////////////////////////////////////////////////
//const ul = document.querySelector('ul')
//const a = document.querySelectorAll('a')
//a.forEach(item => item.classList.add('custom-link'))
//
//function fn() {
//    ul.classList.add('list')
//    const span = ul.nextElementSibling
//    const a = span.nextElementSibling
//    a.setAttribute('id', 'link')
//
//    for (let i = 0; i < ul.children.length; i += 2) {
//        ul.children[i].classList.add('item')
//    }
//}
//fn()
//
//function fn2() {
//    const li = document.querySelectorAll('ul li a')
//
//    for (let i = 0; i < li.length; i++) {
//        li[i].appendChild(document.createElement('strong'))
//    }
//}
//fn2()
//
//function addImg() {
//    const body = document.querySelector('body')
//    const img = document.createElement('img')
//    img.setAttribute('src', 'https://www.google.com/search?q=wallpapers&client=firefox-b-d&sxsrf=ALeKk00w-ZXUHaQWcddH-aAux9bO7fI8NQ:1587396959424&tbm=isch&source=iu&ictx=1&fir=R_9olS3GuaO6DM%253A%252CPiWThYokDkcowM%252C_&vet=1&usg=AI4_-kTElnFswokJAeoaevv0npWy1sR-PA&sa=X&ved=2ahUKEwid54i_qvfoAhVQjqQKHeKODU0Q9QEwA3oECAoQHg#imgrc=c1qyNrAGQk4yJM')
//    img.setAttribute('alt', 'Not Found')
//    body.prepend(img)
//
//}
//addImg()
//
//function mark() {
//    const el = document.querySelector('mark')
//    el.textContent += ' green'
//    el.classList.add('green')
//    el.style.backgroundColor = 'green'
//    console.log(el)
//}
//mark()
//
//function last() {
//    const ul = document.querySelector('ul')
//    
//    for (let i = ul.children.length; i >= 0; i--) {
//        console.log(ul.children[i])
//    }
//}
//last()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const map = ["_id", "name", "isActive", "balance"];
const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  }
];

const tableSchema = {
    index: '#',
    name: 'Name',
    email: 'Email',
    balance: 'Balance'
}

function generateThead(tableSchema) {
    const thead = document.createElement('thead')
    const tr = generateTr(tableSchema, 'th')
    thead.appendChild(tr)
    
    return thead
}

function generateTr(tableSchema, tagName = 'td') {
    const tr = document.createElement('tr')
    Object.values(tableSchema).forEach(val => {
        const td = document.createElement(tagName)
        td.textContent = val
        tr.appendChild(td)
    })
    
    return tr
}

function generateTBody(tableSchema, items) {
    const tbody = document.createElement('tbody')
    items.forEach((item, index) => {
        item.index = index + 1
        const itemSchema = genereateItemsSchema(tableSchema, item)
        const tr = generateTr(itemSchema, 'td')
        tbody.appendChild(tr)
    })
    
    return tbody
}

function genereateItemsSchema(tableSchema, item) {
    const itemSchema = Object.keys(tableSchema).reduce((acc, key) => {
        if (key in item) {
            acc[key] = item[key]
        }
        
        return acc
    }, {})
    
    return itemSchema
}

function generateTableTemplate() {
    const table = document.createElement('table')
    table.classList.add('table')
    return table
}

function generateTotalBalance(tableSchema, items) {
    const total = items.reduce((acc, item) => acc + parseFloat(item.balance), 0)
    const tr = document.createElement('tr')
    const td = document.createElement('td')
    const columnCounts = Object.keys(tableSchema).length
    
    td.insertAdjacentHTML('beforeend', `Total balance: <b>${total}</b>`)
    td.setAttribute('colspan', columnCounts)
    td.setAttribute('align', 'right')
    
    tr.appendChild(td)
    
    return tr
}

function initTable(tableSchema, items) {
    const container = document.querySelector('.table-container')
    const table = generateTableTemplate()
    const header = generateThead(tableSchema)
    const body = generateTBody(tableSchema, items)
    const total = generateTotalBalance(tableSchema, items)
    
    table.appendChild(header)
    table.appendChild(body)
    table.appendChild(total)
    
    container.appendChild(table)
}

initTable(tableSchema, users)





































