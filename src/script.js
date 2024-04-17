const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");
const phoneContainer = document.getElementById("phone");

const noInputError = () => {
  if (isPhoneOn) {
    alert("Please provide a phone number");
  }
};
const createResultParagraph = (resultString) => {
  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  pTag.style.color = resultString.includes('Valid') ? '#00471b' : '#FF0000';
  pTag.appendChild(document.createTextNode(resultString));
  return pTag; 
};

const checkNumberValidity = (input) => {
  if (input === "") {
    noInputError();
    return;
  }
  let textString;
  const countryCode = "^(1\\s?)?";
  const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
  const spacesDashes = "[\\s\\-]?";
  const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
  const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);
  if (phoneRegex.test(input)) {
    textString = "Valid US number: " + input;
  } else {
    textString = "Invalid US number: " + input;
  }
  const resultParagraph = createResultParagraph(textString);
  resultDiv.appendChild(resultParagraph);
};

clearButton.addEventListener("click", () => {
  userInput.value = "";
  resultDiv.textContent = "";
});

checkButton.addEventListener("click", () => {
  event.stopPropagation();
  checkNumberValidity(userInput.value);
  userInput.value = "";
});

const button = document.getElementById("buttonOnOff");
let isPhoneOn = true;

button.addEventListener("click", function () {
  console.log(isPhoneOn);
  if (isPhoneOn) {
    isPhoneOn = false;
    phoneContainer.style.backgroundColor = "black";
    userInput.classList.add("turn-off");
    checkButton.classList.add("turn-off");
    clearButton.classList.add("turn-off");
    resultDiv.style.color= "black";
  } else {
    isPhoneOn = true;
    userInput.value = "";
    phoneContainer.style.removeProperty("background-color");
    userInput.style.removeProperty("background-color");
    checkButton.classList.remove("turn-off");
    clearButton.classList.remove("turn-off");
    userInput.classList.remove("turn-off");
  }
});
