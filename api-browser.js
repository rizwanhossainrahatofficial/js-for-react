// json,object k  json a convert korte google converter o use kora jai
const person={
    name:'rafi',
    age:20
}
// object k json a convert korte stringify use kora hoi
// const data=JSON.stringify(person);
// json k object a convert korte stringify use kora hoi
// const dataparsed=JSON.parse(person);

// api
// fetch(url)
// .then(res=>res.json())
// .then(data=>console.log(data))

// local storage k dewar jonno setItme r pawar jonno getItem kora lage

// const userId=localStorage.setItem('user',4501);

// const userId=localStorage.getItem('user',4501);
// console.log(userId);
// local storage ar obeject k json kore pathaise hobe string a conver kore r paite abr parse kore json thake object a convert kore pathaite hobe
localStorage.setItem(JSON.stringify(person))
const user=localStorage.getItem('person')
const userparse=JSON.parse(user)
// keys gula jante hole
const keys=Object.keys(userparse)
// keys  ar value gula jante hole
const values=Object.values(userparse)
