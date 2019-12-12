const buttonPropsWidth = document.querySelector('.buttons-props__width');
let newButtonWidth;
const buttonPropsHeight = document.querySelector('.buttons-props__height');
let newButtonHeight;
const buttonPropsColor = document.querySelector('.buttons-props__color');
let newButtonColor;
const buttonPropsBackground = document.querySelector('.buttons-props__background');
let newButtonBackground;

const createdButtonsContainer = document.querySelector('.created-buttons');
const buttonCreator = document.querySelector('.button__creator');

const getButtonParameters = () => {
  newButtonWidth = buttonPropsWidth.value;
  newButtonHeight = buttonPropsHeight.value;
  newButtonColor = buttonPropsColor.value;
  newButtonBackground = buttonPropsBackground.value;

  // console.log(newButtonWidth, newButtonHeight);
  createNewButton();
}

const createNewButton = () => {
  let newButton = document.createElement('button');
  newButton.classList.add('button__result');
  newButton.innerText = 'Кнопка';
  
  newButton.style.width = newButtonWidth + 'px';
  newButton.style.height = newButtonHeight + 'px';
  newButton.style.color = newButtonColor;
  newButton.style.background = newButtonBackground;
 
  createdButtonsContainer.appendChild(newButton);
}

buttonCreator.addEventListener('click', getButtonParameters);

