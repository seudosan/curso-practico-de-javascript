const APP = document.querySelector("body");
const PI = 3.14159265359;
const figures_buttons = document.querySelectorAll(".__figure_button__");
const types_buttons = document.querySelectorAll(".__type_button__");
const inputs_boxes = document.querySelectorAll(".ghost-box");
const figure_image = document.getElementById("figure_img");
const inputs = document.querySelectorAll("INPUT");
const result = document.getElementById("result");
const input = {
  "square": {
    "a": document.getElementById("square_a")
  },
  "circle": {
    "r": document.getElementById("circle_r")
  },
  "triangle": {
    "a": document.getElementById("triangle_a"),
    "b": document.getElementById("triangle_b"),
    "c": document.getElementById("triangle_c"),
  },
}
const selected = {
  "figure": figures_buttons[0],
  "type": types_buttons[0],
  "input_box": inputs_boxes[0]
}
const formulas = {
  "square": {
    "perimeter": () => {
      const a = parseFloat(input.square.a.value);
      const perimeter = a * 4;

      return `${perimeter.toFixed(2)} cm`;
    },
    "area": () => {
      const a = parseFloat(input.square.a.value);
      const area = Math.pow(a, 2);

      return `${area.toFixed(2)} cm²`;
    }
  },
  "triangle": {
    "perimeter": () => {
      const a = parseFloat(input.triangle.a.value);
      const b = parseFloat(input.triangle.b.value);
      const c = parseFloat(input.triangle.c.value);
      const perimeter = a + b + c;

      return `${perimeter.toFixed(2)} cm`;
    },
    "area": () => {
      const a = parseFloat(input.triangle.a.value);
      const b = parseFloat(input.triangle.b.value);
      const c = parseFloat(input.triangle.c.value);
      const height = Math.sqrt(Math.pow(a, 2) - Math.pow((b/2), 2));
      const area = (height * b) / 2;

      return `${area.toFixed(2)} cm²`;
    }
  },
  "circle": {
    "perimeter": () => {
      const r = parseFloat(input.circle.r.value);
      const perimeter = (r * 2) * PI;

      return `${perimeter.toFixed(2)} cm²`;
    },
    "area": () => {
      const r = parseFloat(input.circle.r.value);

      let area = Math.pow(r, 2) * PI;

      return `${area.toFixed(2)} cm²`;
    }
  }
}

const resolveOperation = () => {
  const figure = selected.figure.dataset.figure;
  const type = selected.type.dataset.type;
  const operationToResolve = formulas[figure][type];
  try {
    inputsVerify();

  } catch (error) {
    result.innerText = error;
    return;
  }

  result.innerText = operationToResolve();
}

const inputsVerify = () => {
  const parentNode = selected.input_box;
  const inputs = parentNode.querySelectorAll("INPUT");
  let error = false;

  inputs.forEach(input => {
    if (input.value <= 0) {
      input.parentNode.classList.add("input__container--invalid");
      error = true;
    } else {
      input.parentNode.classList.remove("input__container--invalid");
    }
  });

  if(error) {
    throw "Revise los campos";
  }
}

const updateFigureImage = () => {
  figure_image.src = `../images/${selected.figure.dataset.figure}-img.svg`;
}

const updateInputBox = () => {
  inputs_boxes.forEach(node => {
    node.classList.add("ghost-box--hidden");
    
    if(node.dataset.figure === selected.figure.dataset.figure) {
      node.classList.remove("ghost-box--hidden");
      selected.input_box = node;
    }
  })

}

inputs.forEach(input => {
  input.addEventListener("keyup", resolveOperation);
})

APP.addEventListener("click", e => {
  const target = e.target;
  
  if(target.nodeName === "BUTTON") {
    if(target.classList.contains("__figure_button__") && target != selected.figure) {
      figures_buttons.forEach(node => {
        node.classList.remove("selector__button--active");
        if (node === target) {
          node.classList.add("selector__button--active");
          selected.figure = node;

          updateFigureImage();
          updateInputBox();
        }
      });
    }

    if(target.classList.contains("__type_button__") && target != selected.type) {
      types_buttons.forEach(node => {
        node.classList.remove("selector__button--active");
        if (node === target) {
          node.classList.add("selector__button--active");
          selected.type = node;

          resolveOperation();
        }
      });
    }
    
  }
});