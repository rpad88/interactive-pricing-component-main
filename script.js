const views = document.querySelector('#views');
const myRange = document.querySelector('#myRange');
const price = document.querySelector('#price');
const toggle = document.querySelector('#toggle');

//pick the slider value on move
myRange.addEventListener('input', setValues);

//refresh values when click the toggle button
toggle.addEventListener('click', setValues);


function setValues() {
    var discount = 0.75; //25% discount
    
    if(myRange.value == 1) {
        let originalPrice = 8.00;
        let total = originalPrice * discount;
        toggle.checked ? price.innerHTML = `$${total.toFixed(2)}` : price.innerHTML = `$${originalPrice.toFixed(2)}`; 
        
        views.innerHTML = '10K';
        myRange.style.background = 'linear-gradient(to right, hsl(224, 65%, 95%) 0% 100%)';              
    }
    if(myRange.value == 2) {
        let originalPrice = 12.00;
        let total = originalPrice * discount;
        toggle.checked ? price.innerHTML = `$${total.toFixed(2)}` : price.innerHTML = `$${originalPrice.toFixed(2)}`; 
        
        views.innerHTML = '50K';
        myRange.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0% 25%, hsl(224, 65%, 95%) 25% 100%)';                
    }
    if(myRange.value == 3) {
        let originalPrice = 16.00;
        let total = originalPrice * discount;
        toggle.checked ? price.innerHTML = `$${total.toFixed(2)}` : price.innerHTML = `$${originalPrice.toFixed(2)}`; 
        
        views.innerHTML = '100K';
        myRange.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0% 50%, hsl(224, 65%, 95%) 50% 100%)';                
    }
    if(myRange.value == 4) {
        let originalPrice = 24.00;
        let total = originalPrice * discount;
        toggle.checked ? price.innerHTML = `$${total.toFixed(2)}` : price.innerHTML = `$${originalPrice.toFixed(2)}`; 
        
        views.innerHTML = '500K';
        myRange.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0% 75%, hsl(224, 65%, 95%) 75% 100%)';               
    }
    if(myRange.value == 5) {
        let originalPrice = 36.00;
        let total = originalPrice * discount;
        toggle.checked ? price.innerHTML = `$${total.toFixed(2)}` : price.innerHTML = `$${originalPrice.toFixed(2)}`; 
        
        views.innerHTML = '1M';
        myRange.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0% 100%)';
    }
}