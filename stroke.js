const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','#3b5998','orange','pink'];

colorBtn.addEventListener('click',changeColor);

function changeColor (){
    bodyBcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}

let changeColor_Nathan = function () {

    let getRandomColor = function () {
  
      let r = Math.floor(Math.random() * 256);
  
      let g = Math.floor(Math.random() * 256);
  
      let b = Math.floor(Math.random() * 256);
  
      return `rgb(${r}, ${g}, ${b})`;
  
    };
  
    bodyBcg.style.backgroundColor = getRandomColor();
  
    colorBtn.style.color = getRandomColor();
  
    colorBtn.style.backgroundColor = getRandomColor();
  
    colorBtn.style.borderColor = getRandomColor();
  
  };
  
  
  colorBtn.addEventListener("click", changeColor_Nathan);