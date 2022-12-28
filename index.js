const btn = document.getElementsByTagName("button");
const card1= document.getElementsByClassName("form");
const card2= document.getElementsByClassName("thankyou");
const rating= document.getElementsByClassName("rating");
let rate;

for(let i=0; i<btn.length-1; i++){
btn[i].addEventListener('click', () => {
    btn[i].classList.add("clicked");
    rate = btn[i].innerHTML;
  })
}

btn[btn.length-1].addEventListener('click', () =>{
  card1[0].classList.add("hidden");
  card2[0].classList.remove("hidden");
  rating[0].innerHTML = "You selected " + rate + " out of 5";
})
