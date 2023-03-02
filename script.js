//dugme za meni
const mobileMenu = () => {
  let menu = document.querySelector(".header ul");
  let btn = document.querySelector(".header button");
  //takodje je u css-u kao stajl
  //   .header ul {
  //   display: flex;
  //   list-style: none;
  //   font-size: 18px;
  //   justify-content: space-around;
  //     z-index: 9;
  // }

  if (btn.innerText === "MENU") {
    menu.style.display = "block";
    btn.innerText = "CLOSE";
  } else {
    menu.style.display = "none";
    btn.innerText = "MENU";
  }

  //menu.style.display = "block"; //direktno preko js menjamo stajl... pisemo varijablu MENU(".header ul") pa STYLE i sta hocemo da menjamo DISPLAY

  //btn.innerText = "CLOSE"; //kada kliknemo dugme umesto MENU pise CLOSE
};

//ovo je galerija
let rightBtn = document.querySelector("#right-btn");
let leftBtn = document.querySelector("#left-btn");
let pictures = document.querySelectorAll(".slider-images img");

let imgNum = 0;

//Pomeramo slike u desno
const moveRight = () => {
  displayNone();
  imgNum++;

  //ako je imgNum === poslednjij fotografiji vracamo na poctak
  if (imgNum === pictures.length) {
    imgNum = 0;
  }

  //fotografije [po rednom broju]. style.display da su vidljive
  pictures[imgNum].style.display = "block";
};

//pomeramo slike u levo
const moveLeft = () => {
  displayNone();
  imgNum--;

  if (imgNum === -1) {
    imgNum = pictures.length - 1;
  }

  pictures[imgNum].style.display = "block";
};

//event listeneri za strlice
rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

//Ova funkcija ce da sakriju sve slike
//funkcija.za svaku sliku(img) da displej bude none tj da budu nevidljive;
const displayNone = () => {
  pictures.forEach((img) => {
    img.style.display = "none";
  });
};

//Portfolio
const portfolioSort = (button) => {
  let category = button.getAttribute("data-category"); //iz dugmeta uzimamo atribut data-category <button data-category='sve' onclick="portfolioSort(this)">Sve</button>
  let portfolioItems = document.querySelectorAll(".portfolio-single-item");

  portfolioItems.forEach((item) => {
    item.style.display = "none"; //za svaki pojedinacni div (portfolio items  <div class="portfolio-items">
    //   <div class="portfolio-single-item blue" data-category='hoteli'>
    //     <h3>Hotel 1</h3>
    //   </div>) njegov item ce biti nevidljiv
  });

  if (category === "sve") {
    portfolioItems.forEach((item) => {
      item.style.display = "block";
    });
  }

  portfolioItems.forEach((item) => {
    if (item.getAttribute("data-category").includes(category)) {
      item.style.display = "block";
    }
  });
};

//otvramo modal
const openModal = () => {
  let modalWindow = document.querySelector(".popup-modal");
  let overlay = document.querySelector(".overlay");
  modalWindow.style.display = "block";
  overlay.style.display = "block";
};

//zatvaramo modal
const closemodal = () => {
  let modalWindow = document.querySelector(".popup-modal");
  let overlay = document.querySelector(".overlay");
  modalWindow.style.display = "none";
  overlay.style.display = "none";
};
