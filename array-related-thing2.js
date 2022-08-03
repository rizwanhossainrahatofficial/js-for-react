const number=[1,12,15,16];
const name=['rafiq','borkat'];
const products=[
    {id:1, name:'laptop',price:5000},
    {id:2, name:'mobile',price:1000},
    {id:3, name:'tablet',price:2000}
];

// map korle array pabo
const product=products.map(product=>product.name);
const price=products.map(pd=>pd.price);
const id=products.map(pd=>{
   return pd.id;
})
// console.log(id)

// forEach korle oi element ar object ar value pawa jai 
// products.forEach(product=>console.log(product.name))


// filter hocche amra kisu jinish nibo r kisu jinish nibo na ,filter korle object pabo,array dai
const cheaper=products.filter(product=>product.price<2000);
// console.log(cheaper)
// remove an item using filter
const remaining=products.filter(pd=>pd.id!=2)
// console.log(remaining);

// find use kora hoi kona akta item particularly ase ki na ta check korar jonno 
const hasMobile=products.find(pd=>pd.name==='mobile')
console.log(hasMobile);

// reduce 
// includes
// push
// pop
// indexOf
// length a item gula somporke jante hobe 
