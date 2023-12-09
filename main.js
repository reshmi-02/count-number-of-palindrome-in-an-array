let arr=[123,454,678,98789,355,222]
document.write(`given array [${arr}] <br><br>`)
let count=0

for(let i=0;i<arr.length;i++){

var temp=arr[i]; 
var b; 
var c=0;

while(arr[i]>0){
    b=arr[i]%10; 
    arr[i]=parseInt(arr[i]/10);
    c=c*10+b;
}

if(temp==c){
    count=count+1
}

}

document.write(`count of palindrome in an array = ${count}`)





