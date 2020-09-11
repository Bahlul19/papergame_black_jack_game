
function greeting()
{
    //var name = prompt('What is your name ?');
    var answer = "My name is" + " "+ name;
    //console.log(answer);
}
greeting();

//argument 

function introduction()
{
    var result = "My name is" + " "+ name;
    //console.log(result); 
}
//var name = prompt('what your name');
introduction();

let numbers = [1,2,3,4,5,6,7,8,9,10,11,2,1,1,23,1,233,1234566,12];
console.log(numbers.sort(function(a,b){
    return (a-b);//assending order
}));
console.log(numbers.sort(function(a,b){
    return (b-a);//desending order
}));

//pushing the value into the array

let emptyArray = new Array();
for(let num = 0; num<10; num++)
{
    emptyArray.push(num);
}
console.log(emptyArray);

let emptyArray12 = new Array();
for (let num = 0; num <= 10; num++)
{
    emptyArray12.push(num);
}
console.log(emptyArray12);