const calculate = document.getElementById('calculate');
const score = document.getElementById('bmi-score');
const result = document.getElementById('bmi-result');


calculate.addEventListener('click',e => {
    e.preventDefault();
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const type = document.getElementById('type');

    let bmi;

    if(type.value == 1){
        bmi = `${Math.round(weight.value / (height.value*height.value)*10)/10}`;
    }else{
        bmi = `${Math.round((weight.value*703) / (height.value*height.value)*10)/10}`;
    }


    score.innerHTML = `${bmi}`;
    
    if(bmi >= 30){
        score.style.color = '#e5281a';
        result.innerHTML = 'Obese';
    }
    else if(bmi >= 25){
        score.style.color = '#ed9512';
        result.innerHTML = 'Overweight';
    }
    else if(bmi >= 18.5){
        score.style.color = '#30cf79';
        result.innerHTML = 'Normal BMI';
    }
    else if(bmi >= 16){
        score.style.color = '#e9ff00';
        result.innerHTML = 'Underweight';
    }
    else if(bmi < 16){
        score.style.color = '#f00f45';
        result.innerHTML = 'Severely thin';
    }
    
    
})

