const dataArr = [
  {
    name: "Jennifer",
    img: "images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "assets/images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "assets/images/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "assets/images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

// burger

const burger = document.querySelector(".header__burger-menu-pets");
const menuList = document.querySelector(".header__menu-list-pets");
const wrapperheader = document.querySelector(".header__menu-wrapper-pets");
const bodyWrapper = document.querySelector(".wrapper-pets");

/*const makeOpacityWrapper = (str) => {
    bodyWrapper.style.opacity = str;
  };*/

const removeClassBurger = () => {
  menuList.classList.remove("header__menu-list--active");
  wrapperheader.classList.remove("header__menu-wrapper--active");
  bodyWrapper.classList.remove("wrapper--active");
};

const addClassBurger = () => {
  menuList.classList.add("header__menu-list--active");
  wrapperheader.classList.add("header__menu-wrapper--active");
  bodyWrapper.classList.add("wrapper--active");
};

const toggleBurger = () => {
  burger.classList.toggle("header__burger-menu--active");

  if (burger.classList.contains("header__burger-menu--active")) {
    addClassBurger();
  } else {
    removeClassBurger();
  }
};

const lazyNewPage = (anchor) => {
  setTimeout(() => {
    window.location.href = `https://rolling-scopes-school.github.io/anjeli-art-JSFE2023Q1/shelter/${anchor.getAttribute(
      "href"
    )}`;
  }, 750);
};

const lazyScroll = (anchor) => {
  const targetElementId = anchor.getAttribute("href").substring(1);
  if (!targetElementId) {
    return;
  }
  setTimeout(() => {
    document.getElementById(targetElementId).scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }, 750);
};

const lazyLoading = (e) => {
  const menuLink = e.target;
  e.preventDefault();

  if (menuLink.getAttribute("href").includes("html")) {
    lazyNewPage(menuLink);
  }

  if (menuLink.getAttribute("href").startsWith("#")) {
    lazyScroll(menuLink);
  }
};

const handlerVisibility = (e) => {
  const burgerPath = e.composedPath().includes(burger);
  const menuListPath = e.composedPath().includes(menuList);

  if (e.target.classList.contains("header__menu-link-pets")) {
    toggleBurger();
    lazyLoading(e);
  }
  if (burgerPath) {
    toggleBurger();
  } else if (!menuListPath) {
    burger.classList.remove("header__burger-menu--active");
    removeClassBurger();
  }
};

document.addEventListener("click", handlerVisibility);

//pagination

const petCardsContainer = document.querySelector(".our-friends-pets__items");
const firstPageBtn = document.getElementById("firstpage");
const prevPageBtn = document.getElementById("prevpage");
const nextPageBtn = document.getElementById("nextpage");
const lastPageBtn = document.getElementById("lastpage");
const currentPageSpan = document.querySelector(".currentpage");

let currentPage = 1;
let petsPerPage = 8;
let totalPages = 6;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const createShuffledPets = () => {
  let shuffledPets = [];
  for (let i = 0; i < 6; i++) {
    shuffledPets = shuffledPets.concat(shuffleArray([...dataArr]));
  }
  return shuffledPets;
};

const updatePetCards = (petsToDisplay) => {
  petCardsContainer.innerHTML = "";
  petsToDisplay.forEach((pet) => {
    const img = `../../${pet.img.split("").slice(13).join("")}`;
    const petCard = document.createElement("div");
    petCard.className = "our-friends__slider-item-pets";
    petCard.addEventListener("click", () => {});
    petCardsContainer.append(petCard);
    const petCardImg = document.createElement("img");
    petCardImg.className = "our-friends__slider-img-pets";
    petCardImg.src = img;
    petCard.append(petCardImg);
    const petCardSpan = document.createElement("span");
    petCardSpan.className = "our-friends__sider-name-pets";
    petCardSpan.innerHTML = pet.name;
    petCard.append(petCardSpan);
    const petCardButton = document.createElement("button");
    petCardButton.className = "our-friends__sider-btn-pets";
    petCardButton.innerHTML = "Learn more";
    petCard.append(petCardButton);
  });
};

const updatePagination = () => {
  currentPageSpan.textContent = currentPage;

  firstPageBtn.disabled = currentPage === 1;
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages;
  lastPageBtn.disabled = currentPage === totalPages;
};

const displayCurrentPage = () => {
  const startIndex = (currentPage - 1) * petsPerPage;
  const endIndex = startIndex + petsPerPage;
  const petsToDisplay = shuffledPets.slice(startIndex, endIndex);

  updatePetCards(petsToDisplay);
  updatePagination();
};

const updatePetsPerPageAndTotalPages = () => {
  const width = window.innerWidth;

  if (width >= 1280) {
    petsPerPage = 8;
    totalPages = 6;
  } else if (width >= 768) {
    petsPerPage = 6;
    totalPages = 8;
  } else if (width >= 750) {
    petsPerPage = 4;
    totalPages = 12;
  } else {
    petsPerPage = 3;
    totalPages = 16;
  }
};

const shuffledPets = createShuffledPets();
updatePetsPerPageAndTotalPages();
displayCurrentPage();

firstPageBtn.addEventListener("click", () => {
  currentPage = 1;
  displayCurrentPage();
});

prevPageBtn.addEventListener("click", () => {
  currentPage--;
  displayCurrentPage();
});

nextPageBtn.addEventListener("click", () => {
  currentPage++;
  displayCurrentPage();
});

lastPageBtn.addEventListener("click", () => {
  currentPage = totalPages;
  displayCurrentPage();
});

window.addEventListener("resize", () => {
  updatePetsPerPageAndTotalPages();
  displayCurrentPage();
});

//modal

const body = document.querySelector("body");
const popupBtn = document.querySelector(".our-friends__popup-close-btn");
const itemsPets = document.querySelectorAll(".our-friends__slider-item-pets");
const popupWrapper = document.querySelector(".our-friends__popup-wrapper");
const titlePopup = document.querySelector(".our-friends__popup-title");
const subtitlePopup = document.querySelector(".our-friends__popup-subtitle");
const textPopup = document.querySelector(".our-friends__popup-text");
const agePetsPopup = document.querySelector(".our-friends__popup--age");
const inoculationsPetsPopup = document.querySelector(
  ".our-friends__popup--inoculations"
);
const diseasesPetsPopup = document.querySelector(
  ".our-friends__popup--diseases"
);
const parasitesPetsPopup = document.querySelector(
  ".our-friends__popup--parasites"
);
const imgPetsPopup = document.querySelector(".our-friends__popup-img");
const popup = document.querySelector(".our-friends__popup");

const makePopupContent = (pet) => {
  titlePopup.innerHTML = "";
  subtitlePopup.innerHTML = "";
  textPopup.innerHTML = "";
  agePetsPopup.innerHTML = "";
  inoculationsPetsPopup.innerHTML = "";
  diseasesPetsPopup.innerHTML = "";
  parasitesPetsPopup.innerHTML = "";

  titlePopup.innerHTML = pet.name;
  subtitlePopup.innerHTML = `${pet.type} - ${pet.breed}`;
  textPopup.innerHTML = pet.description;
  agePetsPopup.innerHTML = pet.age;
  inoculationsPetsPopup.innerHTML = pet.inoculations.join(", ");
  diseasesPetsPopup.innerHTML = pet.diseases.join(", ");
  parasitesPetsPopup.innerHTML = pet.parasites.join(", ");
  imgPetsPopup.src = `${pet.img.split("").slice(13).join("")}`;
};

const searchPet = (arr, name) => {
  return arr.find((el) => el.name === name);
};

const removeClassPopup = () => {
  popupWrapper.classList.remove("our-friends__popup--active");
  popup.classList.remove("friends__popup--active");
  body.classList.remove("disable-scroll");
};

const addClassPopup = () => {
  popupWrapper.classList.add("our-friends__popup--active");
  popup.classList.add("friends__popup--active");
  body.classList.add("disable-scroll");
};

itemsPets.forEach((itemPets) =>
  itemPets.addEventListener("click", (e) => {
    const petName = itemPets.childNodes[1].innerHTML;
    const pet = searchPet(dataArr, petName);
    makePopupContent(pet);
    addClassPopup();
  })
);
const popupToggle = (e) => {
  if (e.target === popupWrapper) {
    removeClassPopup();
  }
};

document.addEventListener("click", popupToggle);

popupBtn.addEventListener("click", removeClassPopup);
