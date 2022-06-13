

function thanks(){
    event.preventDefault();

    setTimeout(function(){
        alert("Your Order if Accepted")
    },0);

    clearTimeout();

    setTimeout(function(){
        alert("Your Order is being Cooked")
    },3000);

    clearTimeout();
    
    setTimeout(function(){
        alert("Your Order is Ready")
    },8000);

    clearTimeout();

    setTimeout(function(){
        alert("Order Out For Delivery")
    },10000);

    clearTimeout();

    setTimeout(function(){
        alert("Order Delivered");
    },12000);

    clearTimeout();
}



