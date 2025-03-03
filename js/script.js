
document.getElementById("discover-container").addEventListener("click",function(){
  window.location.href="blog.html";
});

const cardBtn =document.querySelectorAll(".card-btn");
const quantityDecrement = document.getElementById("quantity-decrement");
const quantityIncrement = document.getElementById("quantity-increment");
const cartContainer = document.getElementById("card-sms-container");
const cardHeadings  = document.querySelectorAll(".heading-card");

let headingIndex = 0;
for(let i =0; i<cardBtn.length; i++){
  let btn = cardBtn[i];

  btn.addEventListener("click",function(event){
    const clickedBtn = event.target;
    alert("Board updated successfully");
    clickedBtn.disabled =true;
    quantityIncrement.innerText++;
    quantityDecrement.innerText--;

    if(headingIndex < cardHeadings.length){
      const headingText = cardHeadings[headingIndex].innerText;
      const div =document.createElement("div");
      div.classList.add("m-2","p-2","rounded-lg","bg-gray-100");
      div.innerHTML=`
       <p>You have completed the task <span>${headingText}</span>at ${new Date().toLocaleTimeString()}</p> 
  
      `
      cartContainer.appendChild(div);
      headingIndex++;

    }

   
  });
};

document.getElementById("history-btn").addEventListener("click",function(){
  document.getElementById("card-sms-container").innerText = "";
})
 
const todayDate =  new Date();
const dmy = { day:"numeric", month:"long", year:"numeric"};
const localDate = todayDate.toLocaleDateString("en-US",dmy);
document.getElementById("date-daynamic").innerText = localDate;


const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightskyblue', 'lightpink', 'lightyellow'];
let currentBgColor = 0;

// document.getElementById("bgcolor-change-btn").addEventListener("click",function(event){
//   event.target.st
// })

const bgBtnColor = document.getElementById("bgcolor-change-btn");
bgBtnColor.addEventListener("click",function(){
  document.getElementById("body-container").style.backgroundColor = colors[currentBgColor];
  currentBgColor=(currentBgColor+1)%colors.length;
});

