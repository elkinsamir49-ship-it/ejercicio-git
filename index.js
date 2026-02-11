// PARAMETROS DE FUNCIONES

// RETORNAR FUNCION CON PARAMETRO

// function hello(name) {
//         return 'hola' + name
// } 

// console.log(hello(' elkin'))
// console.log(hello(' daniel'))



// retornar funcion con varios parametros


// function add(x, y){
//     return x + y
// }

// console.log(add(10, 20))
// console.log(add(4, 5))
// console.log(add(10, 7))



// default paremeters

// function add(x = 0, y = 0 ){
//     return x + y
// }

// console.log(add(10, 20))


// objetos

// const user = {
//     name: 'elkin',
//     lastname: 'montoya',
//     age: 30,
//     address:  {
//         country: 'colombia',
//         coty: 'bogota',
//         street: 'main street 123'
//     },
//     friends : ['brandon','elena'],
//     active: true,
//     sendMail(){

//         return'sending email...'
//     },

// };

// console.log(user.address.city)
// console.log(user.friends)
// console.log(user.active)
// console.log(user.sendMail())


// shorthand property names

// const name = 'lapto'
// const price = 3000

// const newProduct = {
//     name,
//     price
// }

// console.log(newProduct)

// manipulacion del Dom

// const title = document.createElement('h1')
// title.innerText = 'hola mundo desde JS'

// const button = document.createElement
// ('button')
// button.innerText = 'click'

// button.addEventListener('click', function (){
//     title.innerText = 'texto actualizado con JS'
//     alert ('se realizo un click')
// })

// document.body.append(title)
// document.body.append(button)


// destructuracion

// const user = {
//     name: 'joel',
//     age: 30
// }

// function printInfo({name}){
//     const {name , age } = user;

//     console.log (name, age);
//     return'<h1>hola '+ name +'</h1>'
// }

// console.log(printInfo(user))

// document.body.innerHTML = printInfo(user)


// funciones anonimas


// const button = document.createElement('button')
// button.innerText ='click me'

// button.addEventListener('click', function (){
//     alert('clicked')
// })

// document.body.append(button)


// Arrow functiones

// const showText = () => 'hola mndo'
// const showNumber = () => 22;
// const showBoolean = () => true;
// const showArray = () => [1,2,3]
// const showObject = () => ({ name: 'elkin'})


// console.log(showText())
// console.log(showNumber())
// console.log(showBoolean())
// console.log(showArray())
// console.log(showObject())





// const button = document.createElement('button')
// button.innerText ='click me'

// button.addEventListener('click', () => {
//     alert('clicked')
// })

// document.body.append(button)



// return en funciones



// const button = document.createElement('button')
// button.innerText ='click me'

// const isaAuthorizad = true

// button.addEventListener('click', () => {
//     if (isaAuthorizad){
//        return alert('esta autorizado ')  
//     }
//         alert ('no esta autorizado')
    
    
// });

// document.body.append(button)


// string literals
// const background = 'yellow'
// const color = 'white'
// const isAuthorized = true;


// const button = document.createElement('button')
// button.innerText ='click me'
// button.style = 'background: ; color: white;'
// button.style = `background: ${isAuthorized ? background : 'red'}; color: ${color}`



// button.addEventListener('click', () => {
//     if (isAuthorized){
//        return alert('esta autorizado ')  
//     }
//         alert ('no esta autorizado')
    
    
// });

// document.body.append(button)

// ..........................................................
//  String literals


// document.body.append(button);
// const background = 'yellow'
// const color = 'blue'
// const isAuthorized = true;

// const button = document.createElement("button");
// button.innerText = "click me";
// button.style = "background: ; color: white;"
// button.style = background: ${isAuthorized ? "blue" : "red"}; color: ${color}

// button.addEventListener("click", () => {
//     if (isAuthorized) {
//         return alert("esta autorizado");
//     }

//     alert("no esta autorizado");
// });

// document.body.append(button);
//..................................................
//  METODOS DE ARRAYS 



// const names = ['ryan', 'joe', 'maria']
// const newNames = ['marcos', 'mario', 'john']

// console.log(names)
// console.log(newNames)
// console.log(names.concat(newNames))
//...........................................
// SPREAD OPERATOR





// const user = {
//     name: "ryan",
//     lastname: "ray"
// }

// const address= {
//     street: 'main street 123',
//     city: 'bogota'
// }

// const userInfo = {
//     ...user,
//     ...address
// }

// console.log(user)
// console.log(address)
// console.log(userInfo)




// Ecmascript modules


// export function add(x, y) {
//     return x + y
// }

// export function multiply(x, y) {
//     return x * y
// }

// export const title = 'js for react'
// export const active = true
// export const points = [10, 20, 30]

// export default add
// import addModule from "./add";
// console.log(addModule())
//.....................................

//   optional Chaining



// const person = {
//     name: 'ryan',
//     address: {
//         city: 'london'
//     },
// }

// // console.log(person.location?.city)
// const ul = document.createElement("ul")
//......................................................
//  Async/await


// async function loadData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     data.forEach(function (post) {
//         const li = document.createElement("li");
//         li.innerText = post.title;
//         ul.append(li);
//     });
//     document.body.append(ul);
// }

// loadData()
// console.log("linea 2");

 