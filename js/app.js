const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

// data
let movies = [
  {
    name: "falcon and the winter soldier",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "assets/images/slider 2.PNG",
  },
  {
    name: "loki",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "assets/images/slider 1.PNG",
  },
  {
    name: "wanda vision",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "assets/images/slider 3.PNG",
  },
  {
    name: "raya and the last dragon",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "assets/images/slider 4.PNG",
  },
  {
    name: "luca",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "assets/images/slider 5.PNG",
  },
];

// createSlide arrow function
const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating Dom element
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // Setting up Image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // Setting elements className
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  // adding sliding effect
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// querySelector returns a node list.
const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach(item => {
  item.addEventListener('mouseover', () => {
    let video = item.children[1];
    video.play();
  })
  item.addEventListener('mouseleave', () => {
    let video = item.children[1];
    video.pause();
  })
})

let cardContainer = document.querySelectorAll(".card-container"),
preBtn = document.querySelectorAll(".pre-btn"),
nxtBtn = document.querySelectorAll(".nxt-btn");

cardContainer.forEach((item, i) => {
  let containerDimentions = item.getBoundingClientRect();
  let containerWidth = containerDimentions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  })


  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  })
})