(function () {
    // logic here
    let pricePounds;
    const exchangeRate = 0.68;
    let priceEuros;
    const convertForm = document.getElementById("myForm")
    const msg = document.getElementById("msg")
    convertForm.addEventListener("submit", (ev) => {
        console.info("form submitted");
        ev.preventDefault();
        priceEuros = 0;
        pricePounds = parseFloat(document.getElementById("pounds").value);
        console.info(priceEuros)
    })
    
    console.info(document.getElementById(".pounds").value)


    if (isNaN(pricePounds)){
        msg.style.display = "block";
        msg.innerHTML="You must enter a number!";
        msg.setAttribute("class", "error")
    }

    if (pricePounds === 0){
        msg.style.display = "block";
        msg.innerHTML = "You must enter more than zero!";
        msg.setAttribute('class', 'error');
    }
    else{
        priceEuros = pricePounds * exchangeRate;
        msg.style.display = "block";
        priceEuros = priceEuros.toFixed(2);
        msg.innerHTML = "You will get &euro;"+priceEuros;
        msg.removeAttribute('class');
    }
})();
