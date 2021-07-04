let modal = document.getElementById('myModal');
let btn = document.querySelectorAll(".btn");
var span = document.getElementsByClassName("close")[0];

btn.forEach((item)=> {
  item.addEventListener('click', ()=>{
    modal.style.display = "block";
  }) 
}) 
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}