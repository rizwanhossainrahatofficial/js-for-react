const money=150;
let food;
const active=true;
let cssClass;
if(money>100){
    food='biriyani'
}
else{
    food='alur borta'
}

// ternary /if ar shortcut
// condition ?true valuie :false value
// let food=money>100?'biriyani' :'alur borta'
if(active===true){
    cssClass='active'
}
else{
    cssClass='inactive'
}

const cssClass2=active?'active':'inactive'
// function call shortcut alternative
// active?displayuser():hideuser()

// && hoile true hoile porer ta te jabe r false hoile porer ta te jabe na
const x=active && 5;
// || hoile true hoile porer ta te  jabe na r false hoile porer ta te jabe
const y=active || 5;
// console.log(y);

// string to number convert
const number=+'45'
// number to string convert
const numberText=45+""
console.log(numberText)

// function default perameter
function add(num1,num2=5){
    // num2=num2||5
    return num1+num2;
}
add(5)
