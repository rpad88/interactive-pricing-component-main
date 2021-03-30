const views = document.querySelector('#views');
const myRange = document.querySelector('#myRange');
const price = document.querySelector('#price');
const toggle = document.querySelector('#toggle');

//pick the slider value on selector movement or on click
myRange.oninput = setValues;
//refresh values when click the toggle button
toggle.addEventListener('click', setValues);

function setValues() {    
    if(myRange.value == 1) {
        let originalPrice = 8.00;
        price.innerHTML = printPrice(originalPrice);
        views.innerHTML = '10K';
        //set background to linear-gradient from 0% to 100%
        myRange.style.background = 'linear-gradient(to right, hsl(224, 65%, 95%) 0% 100%)';              
    }
    if(myRange.value == 2) {
        let originalPrice = 12.00;
        price.innerHTML = printPrice(originalPrice);        
        views.innerHTML = '50K';
        //set background to linear-gradient color Green from 0% to 25%
        //set background to linear-gradient color Pale Blue from 25% to 100%
        myRange.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0% 25%, hsl(224, 65%, 95%) 25% 100%)';                
    }
    if(myRange.value == 3) {
        let originalPrice = 16.00;
        price.innerHTML = printPrice(originalPrice);        
        views.innerHTML = '100K';
        myRange.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0% 50%, hsl(224, 65%, 95%) 50% 100%)';                
    }
    if(myRange.value == 4) {
        let originalPrice = 24.00;
        price.innerHTML = printPrice(originalPrice);        
        views.innerHTML = '500K';
        myRange.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0% 75%, hsl(224, 65%, 95%) 75% 100%)';               
    }
    if(myRange.value == 5) {
        let originalPrice = 36.00;
        price.innerHTML = printPrice(originalPrice);        
        views.innerHTML = '1M';
        myRange.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0% 100%)';
    }
}

function printPrice(originalPrice) {
    let discount = 0.75; //25% discount
    if(toggle.checked) {
        let total = originalPrice * discount;
        return total.toFixed(2);
    } else {
        return originalPrice.toFixed(2);
    }
}