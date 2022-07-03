// create div called "btnContainer" & my 7 buttons
const btnContainer = document.createElement("div");
btnContainer.classList.add("btn-container");

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

const eraserBtn = document.createElement("button");
eraserBtn.textContent = "Eraser";

const moreBtn = document.createElement("button");
moreBtn.textContent = "More";

const lessBtn = document.createElement("button");
lessBtn.textContent = "Less";

const whiteBtn = document.createElement("button");
whiteBtn.textContent = "White";

const blackBtn = document.createElement("button");
blackBtn.textContent = "Black";

const colorBtn = document.createElement("button");
colorBtn.textContent = "Random";

// put buttons in div
btnContainer.append(
  resetBtn,
  eraserBtn,
  moreBtn,
  lessBtn,
  whiteBtn,
  blackBtn,
  colorBtn
);

// get title and insert btnContainer after it
const h1 = document.getElementsByTagName("h1");
h1[0].insertAdjacentElement("afterend", btnContainer);

// give buttons each a class of btn
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.className = "btn";
});

// add event listener to button container (instead of each button)
btnContainer.addEventListener("click", (event) => {
  // find out the click's target & call the appropriate function
  switch (event.target) {
    case resetBtn:
      resetDivs();
      break;
    case eraserBtn:
      eraseDivs();
      break;
    case whiteBtn:
      whiteDivs();
      break;
    case blackBtn:
      blackDivs();
      break;
    case colorBtn:
      coloredDivs();
      break;
  }
});

// I need num to be available everywhere
var num = 16;

function makeDivs() {
  container.style.display = "grid";
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  for (let i = 0; i < num * num; i++) {
    const square = document.createElement("div");
    square.className = "square";
    container.append(square);
  }
}

makeDivs(num);

function resetDivs() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.background = "cornsilk";
  });
}

function eraseDivs() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("pointerover", (event) => {
      event.stopPropagation();
      square.style.background = "cornsilk";
    });
  });
}

moreBtn.addEventListener("click", (event) => {
  moreDivs(event);
  event.stopPropagation();
});

moreBtn.onclick = () => num++;

moreBtn.addEventListener("dblclick", (event) => {
  moreDivs(event);
  event.stopPropagation();
});

moreBtn.ondblclick = () => (num += 3);

lessBtn.addEventListener("click", (event) => {
  lessDivs(event);
  event.stopPropagation();
});

function moreDivs(event) {
  let clicks = num;
  event.stopPropagation();
  killDivs();
  makeDivs(clicks);
}

lessBtn.addEventListener("dblclick", (event, num) => {
  lessDivs(event);
  event.stopPropagation();
});

lessBtn.onclick = () => num--;

lessBtn.ondblclick = () => (num -= 3);

function lessDivs(event) {
  let clicks = num;
  event.stopPropagation();
  killDivs();
  makeDivs(clicks);
}

function whiteDivs() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("pointerover", (event) => {
      event.stopPropagation();
      square.style.background = "white";
    });
  });
}

function blackDivs() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("pointerover", (event) => {
      event.stopPropagation();
      square.style.background = "black";
    });
  });
}

function coloredDivs() {
  const squares = document.querySelectorAll(".square");
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${r}, ${g}, ${b})`;

  squares.forEach((square) => {
    square.addEventListener("pointerover", (event) => {
      event.stopPropagation();
      square.style.background = randomColor;
    });
  });
}

function killDivs() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
