// console.log("helli js");
// console.log("wellcome to collge")
// fullname= "azhar abbas";
// console.log(fullname)
// x=null;
// console.log(x);
// y=undefined;
// console.log(y);
// let name =false;
// console.log(name);

// // const student = { //student object
// //     firstname : "azhar",
// //     age:35,
// //     cgps:3.27,

// // };
// // console.log(student.age);
// // student["age"] =student["age"]+1;
// // console.log(student.age);

// // const profile={
// //     usernme: "shardha",
// //     followers: "4 million",
// //     noofpost:100,
// //     following:2,
// //     isFollow:true,
// // };
// let age=15;
// if(age > 18){
//     console.log("can vote")
// }
// else{
//     console.log("cant vote")
// }

// let number =12;
// if(number%2==0){
//     console.log("even number")
// }
// else{
//     console.log("odd numbwer");
// }

// ternary operstor
// let age=15;
// let result=age>18?"adult":"not adult";
// console.log(result);


// problem!!!
// let number= prompt("enter a number");
// if(number%5===0){
//     console.log("number is ok")
// }else{
//     console.log("number is not okkk")
// }


// student grade system numerical

// let no =prompt("enter you score");
// if(no >=80 & no <=100){
//     console.log("your grade is A")
// }else if(no >=70& no < 80){
//      console.log("your grade is B")
// }else if(no >=50& no < 70){
//      console.log("your grade is C")
// }else{
//     console.log("you are Fail")
// };


// Loops

// for(i=1; i<=5;i++){
//     console.log("hello azhar ");
// }

// Calculate sum of 1 to 5

// let sum=0;
// for(i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log("sume value = ",sum);

// while loop
// let i=1;
// while(i<=5){
//     console.log("i = ",i)
//     i++;

// }


// // Do while loop
// let i=20;
// do{
//     console.log("i  =",i)
//     i++;
// }while(i<=5);


// for-of loop
// let string ="javascript"
// let size=0;
// for(let i of string){
//     console.log("i= ",i)
//     size++;
    
// }
//    console.log("size =",size)

// for-in loop

// let student={
//     name:"azhar",
//     age:25,
//     gpa:3.23,
//     isPass:true
// };
// for(let i in student){
//     console.log("i = ",i, "value",student[i]);
// }


// print all the even numbers 0-100

// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log("even numbrs are = ",i)
//     }
// }


// gussing the correct number game
// let number =25;
// let new_number=prompt("Guess the number : "); 

// while(new_number != number){
//     new_number = prompt("Guess the number : ");
// }
// console.log("congratulation you have guess correct");

// STRINGS IN JAVASCRIPT
// let str="hello world";
// str.length;
// //console.log(str[3])
// str.toLowerCase();
// console.log(str);

// //Array object
// let arr=[12,12,13,56,77,88];
// console.log(arr);
// arr[2]=55;
// console.log(arr);

// let arr=[1,2,3,4,5,6,7,8];
// for(let i=0;i<=arr.length;i++){
//     console.log("values are :", [i]);
// }

// let arr = [11,22,33,44,55,66];
// for(i of arr){
//     console.log("values are :",i)
// }

// Find average of students

// let marks = [85,97,44,37,76,60];
// let sum =0;
// for(i of marks){
//     sum = sum +i;
// }
// let average=sum/marks.length;
//     console.log("average marks eare: ",average);

// let items=[25,645,300,900,50];
// for(let i=0;i<items.length;i++){
//     let offer = items[i]/10;
//     items[i] = items[i]-offer;
// }
// console.log(items);


// pUSH AND POP IN ARRAY

// let arr = [1,2,3,4,5,6];
// arr.push(9,9,9);
// console.log(arr);

// let arr = [1,2,3,4,5,6];
// arr.pop(6);
// console.log(arr);

// //Functions
// function myFunc(m,n){
//     sum=m+n;
//     console.log(sum)
// }
// myFunc(2,2);

// Arrow functions

// const mulFunc = (a,b) =>{
//     console.log(a*b)
// }
// mulFunc(5,5);


// print vovels in a string using function

// // function countvowels(str){
// //     for(let i=0;i<str.length;i++){
// //         console.log(i)
// //     }

// // }
// countvowels("hello");

// function countvowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char=== "e" || char === "i" || char === "o" || char ==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countvowels("hellooo");




// HTML CSS JAVASCRIPT COMBINE

// alert("CLICK TO CONTINUE")

// let header = document.getElementById("heading");
// console.log(header);

// let button = document.getElementsByClassName("btn");
// console.dir(button);
// console.log(button);

// let para = document.querySelector("p1"); //access single tag
// console.dir(para);

// let paragraphs = document.querySelectorAll("p"); //access all tags
// console.dir(paragraphs);


//append text with h1 tag using js

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText)
// h2.innerText = h2.innerText + " from apna college";


//create 3 divs with same class and change unqui value in each div

// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "hello azhar";
// divs[1].innerText = 'how are yiu';
// divs[2].innerText  = 'wellcome to JS';
// divs[1].innerHTML = 'hhahahhah'

//Event handling!!!!!

//  let btn1=document.querySelector("#btn-1");
// // let box=document.querySelector('.box');

// btn1.onclick = () =>{
//     console.log("button was clicked");
// }

// // box.ondblclick = () =>{
// //     console.log('you are in a box!!!')
// // }

// //event object (e)!!!

// // btn1.onclick = (e) =>{
// //     console.log(e);
// // }

// //event handling with eventlistener

// btn1.addEventListener("click",() =>{
//     console.log("clicked by event listner")
// })

// btn1.addEventListener("click",(e) =>{
//     console.log("clicked by event listner 2")
//     console.log(e)
// })


//create a toggle btn that on click it chage the color
 let mode = document.querySelector('#mode');
 let curntmode = "ligh";
 mode.addEventListener("click", () =>{
    if(curntmode === "ligh"){
        curntmode = "dark";
        document.querySelector('body').style.backgroundColor="black";
    }else{
        curntmode= "ligh";
        document.querySelector('body').style.backgroundColor = "white";
    }
    console.log(curntmode);
 })