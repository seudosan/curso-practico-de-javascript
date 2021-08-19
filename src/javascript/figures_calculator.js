const APP = document.getElementsByTagName("body")[0];
// Figures data
let 
  square_measure = document.getElementById("square_measure"),
  triangle_a_side = document.getElementById("triangle_a_side"),
  triangle_base = document.getElementById("triangle_base"),
  triangle_c_side = document.getElementById("triangle_c_side"),
  calculator_button = document.getElementById("calculator_button"),
  calculator_result = document.getElementById("result");
const NODE = {
  "figure_image": document.getElementById("figure_img"),
  "calculator_description": document.getElementsByClassName("figure-calculator__description")[0],
  "figure_selector": document.getElementsByClassName("figure-display__selector")[0],
  "operation_type": document.getElementsByClassName("figure-calculator__selector")[0],
  "data_container": document.getElementsByClassName("figure-calculator")[0]
}
const FIGURES_IMAGE = {
  "square": "../images/square-img.svg",
  "triangle": "../images/triangle-img.svg",
  "circle": "../images/triangle-img.svg"
}
const FIGURES = {
  "square": document.getElementById("square_figure"),
  "triangle": document.getElementById("triangle_figure"),
  "circle": document.getElementById("circle_figure")
};

const CALCULATOR_TYPE = {
  "square": {
    "perimeter": document.getElementById("perimeter_calculator"),
    "area": document.getElementById("area_calculator"),
  },
  "triangle": {
    "perimeter": document.getElementById("perimeter_calculator"),
    "area": document.getElementById("area_calculator"),
  },
  "circle": {
    "perimeter": document.getElementById("perimeter_calculator"),
    "area": document.getElementById("area_calculator"),
  }
} 
const FORMULAS = {
  "square": {
    "perimeter": () => {
      let measure = square_measure.value;
      let square_perimeter = measure * 4;

      return `${square_perimeter} cm`;
    },
    "area": () => {
      let measure = square_measure.value;
      let square_area = Math.pow(measure, 2);
      return `${square_area} cm²`;
    }
  },
  "triangle": {
    "perimeter": () => {
      let a_side = parseFloat(triangle_a_side.value);
      let b_side = parseFloat(triangle_c_side.value);
      let base = parseFloat(triangle_base.value);
      let triangle_perimeter = a_side + base + b_side;
      return `${triangle_perimeter} cm`;
    },
    "area": () => {
      let a_side = parseFloat(triangle_a_side.value);
      let b_side = parseFloat(triangle_c_side.value);
      let base = parseFloat(triangle_base.value);
      let height = Math.sqrt(Math.pow(a_side, 2) - Math.pow((base/2), 2));
      console.log(height)
      let triangle_area = (height * base) / 2;
      return `${triangle_area} cm²`;
    }
  }
}

const printResult = result => {
  calculator_result.innerHTML = result 
};

const getFigure = () => {
  for (let key in FIGURES) {
    if(FIGURES[key].checked) {
      return FIGURES[key].value;
    }
  }
}

function getCalculatorType(figure) {
  for (const key in CALCULATOR_TYPE[figure]) {
    if(CALCULATOR_TYPE[figure][key].checked) {
      return CALCULATOR_TYPE[figure][key].value;
    }
  }
}
const makeDescription = (figure, calculator_type) => {
  return `Ingresa los datos correspondientes para cualcular el <strong>${calculator_type}</strong> de un <strong>${figure}</strong>.`
}
function testOp() {
  let figure = getFigure();
  let calculator_type = getCalculatorType(figure);
  
  let result = FORMULAS[figure][calculator_type];
  printResult(result());
}
const renderROM = (figure, calculator_type) => {

  NODE.figure_image.src = FIGURES_IMAGE[figure];

  NODE.calculator_description.innerHTML = makeDescription(figure, calculator_type);

  NODE.data_container.setAttribute("id", figure);

}
calculator_button.addEventListener("click", testOp);

APP.addEventListener("input", event => {
  let figure = getFigure();
  let calculator_type = getCalculatorType(figure);

  if(
    event.target === FIGURES[figure] 
    || event.target === CALCULATOR_TYPE[figure][calculator_type]) {
    renderROM(figure, calculator_type);
  }
})