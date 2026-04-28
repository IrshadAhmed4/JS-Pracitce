/*
let number=[10,20,30,40];
let user=["ahmed", 50, true, 60.0];
console.log(number);
console.log(user);
*/
////////////////////////////////////////////////////

/*
const isPalindrome= function(str) {
    return str===str.split("").reverse().join("");
}
const result=isPalindrome("malayalam");
console.log(result);
*/
/////////////////////////////////////////////////////

/*
const isPalindrome=function(x){
    return x===+x.toString().split("").reverse().join("");
}
const res=isPalindrome(12321);
console.log(res);
*/
/////////////////////////////////////////////////////


/*
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
const node1=new Node(100);
const node2=new Node(200);
const node3=new Node(300);
const node4=new Node(400);
const node5=new Node(500);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;

//console.log(node1);
let current=node1;
while(current!==null){
    console.log(current.data);
    current=current.next;
}
*/

// class LinkedList{
//     constructor(){
//         this.head=null;
//     }
// }
// LinkedList.prototype.insertAtStart=function(data){
// }


/*
let fibonacci=function(n){
    const arr=[0,1];
    for (let i=0; i<=n; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n];
}
const result=fibonacci(5);
console.log(result);
*/
