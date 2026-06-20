// DARK MODE

const themeBtn =
document.getElementById(
"theme-toggle"
);

themeBtn.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark-mode"
);

if(
document.body.classList.contains(
"dark-mode"
)
){
themeBtn.innerHTML="☀️";
}
else{
themeBtn.innerHTML="🌙";
}

}
);

// MOBILE MENU

const menuBtn =
document.querySelector(
".menu-btn"
);

const navLinks =
document.querySelector(
".nav-links"
);

menuBtn.addEventListener(
"click",
()=>{
navLinks.classList.toggle(
"active"
);
}
);