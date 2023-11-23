import "./style.scss";
import $ from "jquery";

$(document).ready(function () {
  let i = 0;
  // Set HTML content
  $("#app").html(`
  <div class="container">
  <div class="shape-container">
    <div class="shape square">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Donald_Trump_mug_shot.jpg/270px-Donald_Trump_mug_shot.jpg"/>
    </div>
    <div class="shape rectangle visible">
    <img src="https://i.kym-cdn.com/entries/icons/facebook/000/025/054/SOMEBODY_TOUCHA_MY_SPAGHET.jpg"/>
    </div>
    <div class="shape triangle"></div>
    <div class="shape circle">
      <img src="https://media.tenor.com/CuFjWMqFr18AAAAd/jerry-bathroom.gif"/>
    </div>
    <div class="shape oval ">
      <img src="https://pyxis.nymag.com/v1/imgs/37e/828/1e2a2943b3871f23576937330a0fbdd9f6-squidward.rsquare.w400.jpg"/>
    </div>
    <div class="shape right-triangle "></div>
    <div class="shape para">
      <img src="https://storage.googleapis.com/mytour-prod/blog/1668098834135_tower-of-pisa-jpg.jpeg"/>
    </div>
    <div class="shape trap "></div>
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
  <div class="shape-switch">
    <button id="shape-switch">Switch Shape</button>
    <select id="shape">
    <option value="select">Select Shape</option>
    <option value="0">Rectangle</option>
    <option value="1">Square</option>
    <option value="2">Circle</option>
    <option value="3">Triangle</option>
    <option value="4">Oval</option>
    <option value="5">Right Triangle</option>
    <option value="6">Trapozoid</option>
    <option value="7">Parallelogram</option>
    </select>
  </div>
</div>
  `);
  const shapes = [
    ".rectangle",
    ".square",
    ".circle",
    ".triangle",
    ".oval",
    ".right-triangle",
    ".trap",
    ".para",
  ];
  const colors = {
    "color-mmb": "rgba(6, 82, 221, 1)",
    "color-bm": "rgba(18, 203, 196, 1)",
    "color-lus20000": "rgba(27, 20, 100, 1)",
    "color-sunflower": "rgba(255, 195, 18, 1)",
    "color-android": "rgba(163, 203, 56, 1)",
    "color-default": "rgba(237, 76, 103, 1)",
  };
  const switchShapeBtn = $("#shape-switch");
  const switchColorBtn = $("#color-switch");
  const colorSwitch = $("#color");
  const triangle = $(".triangle");
  const rightTriangle = $(".right-triangle");
  const trapaziod = $(".trap");
  const square = $(".square");
  const rectangle = $(".rectangle");
  const parallel = $(".para");
  const circle = $(".circle");
  const oval = $(".oval");
  const switchShapeSelect = $("#shape");
  switchShapeBtn.on("click", () => {
    if (switchShapeSelect.val() === "select") {
      return;
    }
    $(shapes[i]).removeClass("visible");
    i = switchShapeSelect.val();
    $(shapes[i]).addClass("visible");
  });

  switchColorBtn.on("click", () => {
    if (colorSwitch.value === "select") {
      return;
    } else {
      switchClorBorders(colors[colorSwitch.val()]);
      switchClorBackground(colors[colorSwitch.val()]);
    }
  });
  function switchClorBorders(color) {
    triangle.css("border-bottom-color", color);
    trapaziod.css("border-bottom-color", color);
    rightTriangle.css("border-bottom-color", color);
  }

  function switchClorBackground(color) {
    rectangle.css("background-color", color);
    square.css("background-color", color);
    parallel.css("background-color", color);
    circle.css("background-color", color);
    oval.css("background-color", color);
  }
});
