const less = document.querySelector('#less')
const quantity = document.querySelector('#quantity')
const more = document.querySelector('#more')

more.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
less.addEventListener('click', () => {
  if (quantity.value < 1) {
    return 0;
  } else (quantity.value = Number(quantity.value) - 1);
});