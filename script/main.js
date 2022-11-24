const app = {
  leftChevron: document.querySelector(".chevron-left-box"),
  rightChevron: document.querySelector(".chevron-right-box"),
  carousel: document.querySelector(".carousel"),
  caption: document.querySelector(".caption-carousel"),
  movieIndex: 0,
};
// event listeners
app.leftChevron.addEventListener("click", function (e) {
  console.log(e.target);
  let index = app.movieIndex;
  let previous = app.getPrevious(index);
  let image = `./images/${movies[previous].img}`;
  app.changeImage(image);
  app.movieIndex = previous;
  //change caption
  let caption = movies[previous].msg;
  //use caption change function
  app.changeCaption(caption);
});
app.rightChevron.addEventListener("click", function (e) {
  console.log(e.target);
  let index = app.movieIndex;
  let next = app.getNext(index);
  let image = `./images/${movies[next].img}`;
  app.changeImage(image);
  app.movieIndex = next;

  //change caption
  let caption = movies[next].msg;
  //use caption change function
  app.changeCaption(caption);
});

app.getPrevious = function (index) {
  if (index == 0) {
    return movies.length - 1;
  }
  return index - 1;
};

app.getNext = function (index) {
  if (index == movies.length - 1) {
    return 0;
  }
  return index + 1;
};
//functions
app.changeImage = function (newImage) {
  app.carousel.style.backgroundImage = `url('${newImage}')`;
};
app.changeCaption = function (caption) {
  app.caption.innerHTML = caption;
};

//load window/page function
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  let image = `./images/${movies[0].img}`;
  app.changeImage(image);
});
