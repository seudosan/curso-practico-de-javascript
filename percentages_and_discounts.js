const ELEMENTS = {
  "price": document.getElementById("price"),
  "discount": document.getElementById("discount"),
  "result": document.getElementById("result"),
  "button": document.getElementById("calculate")
}

function getFinallyPrice() {
  let price = parseInt(ELEMENTS.price.value);
  let discount = parseInt(ELEMENTS.discount.value);

  if (price > 0 && discount > 0) {
    let finally_price = (price * (100 - discount)) / 100;
    ELEMENTS.result.innerText = 
    `El precio final de $${price} con un descuento del ${discount}% es $${finally_price}`;
  } else {
    return alert(`
    Por favor, revisa las entradas y asegurese de ingresar números válidos para la operación. 
    `);
  }  
}

ELEMENTS.button.addEventListener("click", getFinallyPrice)
