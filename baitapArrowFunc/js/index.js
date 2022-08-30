let arrColor = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
 

window.renderButton = (colors) => {
  let output = ""; //string html
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    output += `
        <button class="color-button ${color}"  onclick="changeColor('${color}')"></button>
        `;
  }

  //hiển thị output lên giao diện
  document.querySelector("#colorContainer").innerHTML = output;
};

renderButton(arrColor);

window.changeColor = (color) => {
  // debugger
  let result =  document.querySelector('#house');
  if (result.classList == 'house pallet') {
    result.classList.remove('pallet');
  } else if (result.classList == 'house viridian') {
    result.classList.remove('viridian');
  } else if (result.classList == 'house pewter') {
    result.classList.remove('pewter');
  } else if (result.classList == 'house cerulean') {
    result.classList.remove('cerulean');
  } else if (result.classList == 'house vermillion') {
    result.classList.remove('vermillion');
  } else if (result.classList == 'house lavender') {
    result.classList.remove('lavender');
  } else if (result.classList == 'house celadon') {
    result.classList.remove('celadon');
  } else if (result.classList == 'house saffron') {
    result.classList.remove('saffron');
  } else if (result.classList == 'house fuschia') {
    result.classList.remove('fuschia');
  } else if (result.classList == 'house cinnabar') {
    result.classList.remove('cinnabar');
  }
   result.classList.add(color);
};