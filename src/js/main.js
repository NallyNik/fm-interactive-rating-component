//container with all inputs
const scores = document.getElementById('scores');
//button 1st part
const btn = document.getElementById("submit");
//2nd part
const thanks = document.getElementById("thanks");
//score number chosen
const rating = document.getElementById('rating-number')


scores.addEventListener('click', function(e) {
    
    btn.addEventListener('click', (e) => {
        const position = thanks.classList.contains('-z-10')
        if (position) {
            thanks.classList.remove('-z-10')
            thanks.classList.add('z-10')
        }
    })

    rating.innerHTML =`<p>You selected ${e.target.id} out of 5</p>`

});

    

    



        
