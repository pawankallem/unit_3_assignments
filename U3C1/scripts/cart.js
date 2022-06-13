
    let arr=JSON.parse(localStorage.getItem("cartStorage"))||[];

    let cartDisplay=document.querySelector("#showCartItems");

    let count=document.getElementById("totalNumberOfItems");

    console.log(arr);

    count.textContent=arr.length;

    showItems(arr);

    function showItems(arr){

        cartDisplay.innerHTML="";

        arr.map(function(elem,index){

            let div=document.createElement("div");

            let img=document.createElement("img");
            img.src=elem.img;

            let name=document.createElement("p");
            name.innerHTML=elem.name;

            let price=document.createElement("p");
            price.innerHTML=elem.price;

            let remove=document.createElement("button");
            remove.textContent="Remove Items";
            remove.addEventListener("click",function(){
                removeItems(arr,elem,index);
            })

            div.append(img,name,price,remove);

            cartDisplay.append(div);
        });
    }

    function removeItems(arr,elem,index){
       arr.splice(index,1);

       localStorage.setItem("cartStorage",JSON.stringify(arr));

       countAddition(arr);

       showItems(arr);

    }

    function countAddition(arr){
        count.textContent=arr.length;
    }

    function checkout(){
        window.location.href="/checkout.html";
    }


