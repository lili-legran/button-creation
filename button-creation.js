const buttonCreator = document.querySelector('.button__creator');
const createdButtonsContainer = document.querySelector('.created-buttons');

const createNewButton = () => {
  let buttonProps = new ButtonProps();
  let newButton = document.createElement('button');
  newButton.classList.add('button__result');
  const updatedButton = setNewButtonProps(newButton, buttonProps);
  createdButtonsContainer.appendChild(updatedButton);
  clearButtonProps();
}

const inputs = {
  width: document.querySelector('.buttons-props__width'),
  height: document.querySelector('.buttons-props__height'),
  color: document.querySelector('.buttons-props__color'),
  background: document.querySelector('.buttons-props__background')
}

function ButtonProps() {
  this.width = inputs.width.value + 'px';
  this.height = inputs.height.value + 'px';
  this.color = inputs.color.value;
  this.background = inputs.background.value;
}

const setNewButtonProps = (newButton, props) => {
  newButton.style.width = props.width;
  newButton.style.height = props.height;
  newButton.style.color = props.color;
  newButton.style.background = props.background;
  newButton.innerText = 'Кнопка';
  return newButton;
}

const clearButtonProps = () => {
  inputs.width.value = '';
  inputs.height.value = '';
  inputs.color.value = '';
  inputs.background.value = '';
};

buttonCreator.addEventListener('click', createNewButton);
