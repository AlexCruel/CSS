//const xhr = new XMLHttpRequest();
//const btn = document.querySelector('button');
//const container = document.querySelector('.container');
//
//function getPosts(callback) {
//    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//
//    xhr.addEventListener('load', () => {
//        const response = JSON.parse(xhr.responseText);
//        callback(response);
//    });
//
//    xhr.addEventListener('error', () => {
//        console.log('error');
//    })
//
//    xhr.send();
//}
//
//function renderPosts(response) {
//    const fragment = document.createDocumentFragment();
//    response.forEach((post) => {
//        const card = document.createElement('div');
//        card.classList.add('card');
//
//        const cardBody = document.createElement('div');
//        cardBody.classList.add('card-body');
//
//        const title = document.createElement('h5');
//        title.classList.add('card-title');
//        title.textContent = post.title;
//
//        const article = document.createElement('p');
//        article.classList.add('card-text');
//        article.textContent = post.body;
//
//        cardBody.appendChild(title);
//        cardBody.appendChild(article);
//
//        card.appendChild(cardBody);
//
//        fragment.appendChild(card);
//    });
//    container.appendChild(fragment);
//}
//
//btn.addEventListener('click', (e) => {
//    getPosts(renderPosts);
//});


// 1 ---------------------------------------------------------------
//const xhr = new XMLHttpRequest();
//const container = document.querySelector('.container');
//const container2 = document.querySelector('.container2');
//const btn = document.querySelector('.show');

//function getUsers(callback) {
//    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
//
//    xhr.addEventListener('load', () => {
//        const response = JSON.parse(xhr.responseText);
//        callback(response);
//    });
//
//    xhr.addEventListener('error', () => {
//        console.log(new Error);
//    });
//
//    xhr.send();
//}
//
//function getNameUser(response) {
//    const fragment = document.createDocumentFragment();
//    response.forEach((user) => {
//        const btn = document.createElement('button');
//        btn.classList.add('btn', 'btn-primary');
//        btn.textContent = user.name;
//
//        const p = document.createElement('p');
//
//        fragment.appendChild(btn);
//        fragment.appendChild(p);
//    });
//    container.appendChild(fragment);
//}
//
//getUsers(getNameUser);

//btn.addEventListener('click', e => {
//    getUsers(getNameUser);
//})

//container.addEventListener('click', (e) => {
//    getUsers((response) => {
//        const fragment = document.createDocumentFragment();
//        response.some((user) => {
//            if (e.target.textContent === user.name) {
//                const p = document.createElement('p');
//                p.textContent = user.email;
//
//                fragment.appendChild(p);
//            }
//        });
//        container2.appendChild(fragment);
//    });
//});

const btn = document.querySelector("button");
const container = document.querySelector(".container");
const containerUserInfo = document.querySelector('.info-user');
console.log('containerUserInfo: ', containerUserInfo);

function getUsers(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', () => {



        const response = JSON.parse(xhr.responseText);

        cb(response);
    });

    xhr.addEventListener('error', () => {
        console.error('Ошибка в адресе!!!');
    });

    xhr.send();
}

btn.addEventListener('click', () => {
    getUsers(response => {
        console.log(response);
        const fragment = document.createDocumentFragment();
        response.forEach(user => {
            const userName = document.createElement('p');
            userName.classList.add('name_user');
            userName.textContent = user.name;
            fragment.append(userName);
        });
        container.append(fragment);
    });
});

container.addEventListener('click', e => {

    if (e.target.classList.contains('name_user')) {
        getUsers(response => {
            response.some(user => {

                const {
                    name,
                    username,
                    email,
                    address: {
                        street,
                        city,
                    }
                } = user;


                if (e.target.textContent === name) {

                    return containerUserInfo.innerHTML = `<div class="card" style="width: 18rem;">
                                            <div class="card-header">
                                              Name: ${name}<br>
                                              UserName: ${username}<br>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                              <li class="list-group-item">Email: ${email}</li>
                                              <li class="list-group-item">Street: ${street}</li>
                                              <li class="list-group-item">City: ${city}</li>
                                            </ul>
                                          </div>
                                          `;

                }

            });
        })
    }
})
