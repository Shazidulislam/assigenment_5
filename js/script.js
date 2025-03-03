
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
}

