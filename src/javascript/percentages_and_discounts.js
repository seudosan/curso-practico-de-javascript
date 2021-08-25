const expressions = {
  all: /^.$/,
  numbers: /^[0-9]{1,}$/,
  dot: /\./,
  decimals: /^[0-9]{1,}\.[0-9]{2,2}$/,
}
const inputs = document.querySelectorAll("input");
const priceInput = document.getElementById("price");
const discountInput = document.getElementById("discount");
const description = document.getElementById("description");
const result = document.getElementById("result");

const resolveNumber = (data) => {
  if(expressions.numbers.test(data)) {
    return true
  }
  return false;
}

const inputsVerify = (e) => {
  const target = e.target;
  const pressKey = e.key;

  
  if(expressions.all.test(pressKey)) {
    e.preventDefault();

    if(expressions.decimals.test(target.value)) {
      return;
    }
    if(expressions.numbers.test(target.value) && expressions.dot.test(pressKey)) {
      return target.value += pressKey;
    }
    if(resolveNumber(pressKey)) {
      return target.value += pressKey;
    }
  }
}

const valueVerify = (target) => {
  if (target.value <= 0) {
    target.parentNode.classList.add("input__container--invalid");
  } else {
    target.parentNode.classList.remove("input__container--invalid");
  }
}
const resolveOperation = (e) => {
  const target = e.target;

  valueVerify(target);

  let price = parseFloat(priceInput.value);
  let discount = parseFloat(discountInput.value);

  if (price > 0 && discount > 0) {
    let finally_price = (price * (100 - discount)) / 100;
    
    if (finally_price <= 0) {
      description.innerText = `El precio final de $${price} con un descuento del ${discount}% es:`;
      result.innerText = `$ Gratis`;
    } else {
      description.innerText = `El precio final de $${price} con un descuento del ${discount}% es:`;
      result.innerText = `$ ${finally_price}`;
    }
  }
}

inputs.forEach(input => {
  input.addEventListener("keypress", inputsVerify);
  input.addEventListener("keyup", resolveOperation);
});
