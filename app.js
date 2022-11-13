const calculateBtn = document.querySelector('ion-button');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const resultArea = document.getElementById('result');

const calculateBmi = () => {
    const enteredHeight = +heightInput.value;
    const enteredWeight = +weightInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
        <ion-card-content>
            <h2>${bmi}</h2>
        </ion-card-content>
    `;

    resultArea.innerHTML = '';
    resultArea.appendChild(resultElement);

    console.log(enteredHeight);
    console.log(enteredWeight);
    console.log(bmi);
};

calculateBtn.addEventListener('click', calculateBmi);