import "./style.scss";
let i = 0;
const shapes = [
  `<div class="shape rectangle">
  <img src="https://i.kym-cdn.com/entries/icons/facebook/000/025/054/SOMEBODY_TOUCHA_MY_SPAGHET.jpg"/>
  </div>`,
  `<div class="shape square">
  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Donald_Trump_mug_shot.jpg/270px-Donald_Trump_mug_shot.jpg"/>
</div>`,
  ` <div class="shape circle">
  <img src="https://media.tenor.com/CuFjWMqFr18AAAAd/jerry-bathroom.gif"/>
</div>`,
  `<div class="shape triangle"></div>`,
  `<div class="shape oval ">
  <img src="https://pyxis.nymag.com/v1/imgs/37e/828/1e2a2943b3871f23576937330a0fbdd9f6-squidward.rsquare.w400.jpg"/>
</div>`,
  ` <div class="shape right-triangle "></div>`,
  `<div class="shape trap "></div>`,
  `<div class="shape para">
  <img src="https://storage.googleapis.com/mytour-prod/blog/1668098834135_tower-of-pisa-jpg.jpeg"/>
</div>`,
];
const shapesClasses = [
  ".rectangle",
  ".square",
  ".circle",
  ".triangle",
  ".oval",
  ".right-triangle",
  ".trap",
  ".para",
];
document.querySelector("#app").innerHTML = `
  <div class="container">
    <div class="shape-container">
      ${shapes[i]}
    </div>
    <div class="color-switch">
      <select id="color">
      <option value="select">Select Color</option>
      <option value="color-default">Default</option>
      <option value="color-lus20000">20000 Leagues Under the Sea</option>
      <option value="color-mmb">Merchant Marine Blue</option>
      <option value="color-sunflower">Sunflower</option>
      <option value="color-android">Android</option>
      <option value="color-bm">Blue Martina</option>
      </select>
      <button id="color-switch">Switch Color</button>
    </div>
    <button id="shape-switch">Switch Shape</button>
  </div>
`;

const colors = {
  "color-mmb": "rgba(6, 82, 221, 1)",
  "color-bm": "rgba(18, 203, 196, 1)",
  "color-lus20000": "rgba(27, 20, 100, 1)",
  "color-sunflower": "rgba(255, 195, 18, 1)",
  "color-android": "rgba(163, 203, 56, 1)",
  "color-default": "rgba(237, 76, 103, 1)",
};
const shapeContainer = document.querySelector(".shape-container");
const switchColorBtn = document.querySelector("#color-switch");
const switchShapeBtn = document.querySelector("#shape-switch");
const colorSwitch = document.querySelector("#color");

switchShapeBtn.addEventListener("click", () => {
  if (i + 1 === shapes.length) {
    i = 0;
    shapeContainer.innerHTML = shapes[i];
    return;
  }
  i++;
  shapeContainer.innerHTML = shapes[i];
});

switchColorBtn.addEventListener("click", () => {
  if (colorSwitch.value === "select") {
    return;
  } else {
    console.log(document.styleSheets);
    switchColor(colors[colorSwitch.value]);
  }
});

function switchColor(color) {
  const stylesheets = document.styleSheets;
  for (let i = 0; i < stylesheets.length; i++) {
    const rules = stylesheets[i].cssRules;
    for (let j = 0; j < rules.length; j++) {
      if (rules[j].selectorText === ".shape") {
        rules[j].style.backgroundColor = color;
      }
      if (rules[j].selectorText === ".triangle") {
        rules[j].style.borderColor = color;
      }
      if (rules[j].selectorText === ".trap") {
        rules[j].style.borderBottomColor = color;
      }
      if (rules[j].selectorText === ".right-triangle") {
        rules[j].style.borderBottomColor = color;
      }
    }
  }
}
