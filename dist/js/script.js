const dropdown = document.querySelectorAll(".dropdownItem");
dropdown.forEach((dropdowns) => {
  dropdowns.addEventListener("click", () => {
    dropdowns.classList.toggle("active");
  });
});

const burgerbtn = document.querySelector(".burger__menu");
const headerA = document.querySelector("nav");
burgerbtn.addEventListener("click", () => {
  burgerbtn.classList.toggle("open");
  headerA.classList.toggle("open");
});

const links = document.querySelectorAll(".links__item h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});

var menu1 = document.getElementById("menu-1");
var menu2 = document.getElementById("menu-2");
var menu3 = document.getElementById("menu-3");
var menu1ctn = document.getElementById("menu1ctn");
var menu2ctn = document.getElementById("menu2ctn");
var menu3ctn = document.getElementById("menu3ctn");

menu1.addEventListener('click', () =>{
menu1ctn.style.display='block';
menu2ctn.style.display='none';
menu3ctn.style.display='none';
});

menu2.addEventListener('click', () =>{
    menu1ctn.style.display='none';
    menu2ctn.style.display='block';
    menu3ctn.style.display='none';
    });

menu3.addEventListener('click', () =>{
        menu1ctn.style.display='none';
        menu2ctn.style.display='none';
        menu3ctn.style.display='block';
        });

// accordions
let accordions = document.querySelectorAll('.accordion-container .accordion');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => { subAcco.classList.remove('active') });
        acco.classList.add('active');
    }
})
