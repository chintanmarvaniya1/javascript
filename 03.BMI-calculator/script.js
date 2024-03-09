const form = document.querySelector('form')

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const weightguide = document.querySelector('#weight-guide')
    let BMI =null;

   
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Not a valid height`
    }else if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Not a valid weight`
    } else {
        console.log(height);
        console.log(weight);
        BMI = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = BMI;
    }

    if (BMI) {
        if(BMI < 18.6){
            weightguide.innerHTML = `You are Under Weight`
            weightguide.setAttribute("style", "background-color:red;")
        }else if(18.6 <= BMI && BMI< 24.9){
            weightguide.innerHTML = `You are in Great Shape`
            weightguide.setAttribute("style", "background-color:green;")
        }else{
            weightguide.innerHTML = `You are Over Weight`
            weightguide.setAttribute("style", "background-color:red;")
        }
    }else{
        weightguide.innerHTML = ``
    }
});