const navList = document.querySelector("#navbar__list");
const sec = Array.from(document.querySelectorAll("section"));
// make a function that helps us to navigate the link with the section
let createlistMenu = function() {
    for (i of sec) {
        let list = document.createElement("li");
        list.innerHTML = `<li><a href="#${i.id}" data-nav="${i.id}" class="menu__link">${i.dataset.nav}</a></li>`;
        navList.appendChild(list);
    }
};
createlistMenu();

// create active in each section
window.addEventListener("scroll", (e) => {
    sec.forEach((section) => {
        const topDistance = section.getBoundingClientRect().top;
        // loop over the page to set active class
        if (topDistance > 0 && topDistance < 200) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    });
});
// add smooth effect
navList.addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.dataset.nav) {
        document
            .getElementById(`${e.target.dataset.nav}`)
            .scrollIntoView({ behavior: "smooth" });
        setTimeout(function() {
            location.hash = `${e.target.dataset.nav}`;
        }, 150);
    }
});

// set time out to hide the navigator will not scrolling
const nav = document.querySelector("header");
let lastScrollY = window.scrollY;
// function to hidden the navbar
function navHiddin(item) {
    item.classList.add("nav-hidden");
}
//function to show the navbar
function navVisible(item) {
    item.classList.remove("nav-hidden");
}
window.addEventListener("scroll", function() {
    if (pageYOffset >= 200 && pageYOffset != 0) {
        navVisible(nav);
        setTimeout(function() {
            if (lastScrollY == window.scrollY && pageYOffset >= 200) {
                navHiddin(nav);
            }
        }, 5000);
    }
    lastScrollY = window.scrollY;
});

//add buttom
const btn = document.createElement("button");
btn.innerHTML = "Top &uarr;";
document.body.appendChild(btn);
btn.style.cssText =
    "width:70px; height:50px; font-size:16px; background-color:white; color:navy; border: 1px solid transparent; border-radius:7px; position:fixed; bottom:50px ; right:50px ; display:none";

// when click go to the top
btn.onclick = function() {
    document.body.scrollTop = 0;
};
// how the button apears while scrolling
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};