// const btn=document.querySelector('button');
// const body=document.querySelector('body');
// const color=['pink','rosebrown','green','blue'];
// body.style.backgroundColor = 'aqura';
// document.addEventListener('click',function(){
//     const colorIndex= parseInt (Math.random()*color.length);
//     body.style.backgroundColor = color[colorIndex];
// });




const btn = document.querySelector('button');
const body = document.querySelector('body');
const color = ['pink','black','green','yellow','viloet','blue','rosebrown'];
body.style.backgroundColor = 'black';
document.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
});