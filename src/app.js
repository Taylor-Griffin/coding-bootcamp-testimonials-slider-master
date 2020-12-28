
const card1= document.querySelector('.card1');
const card2= document.querySelector('.card2');
const button1=document.querySelector('.btn1')
const button2=document.querySelector('.btn2')



button1.addEventListener('click', function(){
    card1.classList.remove("active");
    card1.classList.add("prev");
    card2.classList.remove("prev");
    card2.classList.add("active");
})

button2.addEventListener('click', function(){
    card2.classList.remove("active");
    card2.classList.add("prev");
    card1.classList.remove("prev");

    card1.classList.add("active");
})

