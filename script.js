let bars=document.querySelector(".fa-bars");
let cut=document.querySelector(".fa-xmark");
bars.addEventListener("click",()=>
{
  let menu = document.querySelector(".ulnav");
  menu.classList.toggle("menu");
  menu.classList.toggle("d-none");
//   menu.classList.toggle("position-absolute");
//     menu.classList.toggle("top-4");
//      menu.classList.toggle("end-0");
//        menu.classList.toggle("bg-primary");
})