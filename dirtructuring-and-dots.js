// array distructuring mane ak line a onk kaj kore pala 
const numbers=[45,80];
// const x=numbers[0];
// const y=numbers[1];
// // console.log(x,y)
// const [x,y]=[45,80];
// const [x,y]=numbers;
// console.log(x,y);

function boxify(num1){
    return [num1,num1+5];
}
// const box=boxify(8);
const [box1,box2]=boxify(8);
console.log(box1,box2)

// object distructuring 
// const person={name:'raffi',age:20,id:1}
const {name,age}={name:'raffi',age:20,id:1}
const person={name:'raffi',age:20,id:1}
const {id}=person;
console.log(id)

// create object shortcut
const one=25
const two=30
const obj={x:one,y:two}
const obj2={one,two}
console.log(obj2)
// new array create kora hoi three dots diye 
// r push diye oi array te e akta element push kora hoi
const newNumbers=[...numbers,57];
console.log(newNumbers);
