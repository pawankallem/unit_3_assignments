
    let meals=document.querySelector("#showMeals");
    searchMeal();
    async function searchMeal(){
           
        let x=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);

        let res=await x.json();

        showItems(res.categories)
    }

    function showItems(res){


        res.map (function (elem){

            let div=document.createElement("div");

            let img=document.createElement("img");
            img.src=elem.strCategoryThumb;

            let name=document.createElement("p");
            name.innerText=elem.strCategory;

            let price=document.createElement("p");
            price.innerText=Math.floor(Math.random()*(500-100)+100);

            let button=document.createElement("button");
            button.textContent="Add to Cart";
            button.addEventListener("click",function(){
                gotoCart(img,name,price);
            });

            div.append(img,name,price,button);

            meals.append(div);
        
        })

    }

    let count=document.getElementById("totalNumberOfItems");

    let arr=JSON.parse(localStorage.getItem("cartStorage"))||[];

    count.textContent=arr.length;

    function gotoCart(img,name,price){

        let obj={
            img:img.src,
            name:name.innerText,
            price:price.innerText,
        }
        arr.push(obj);
        countAddition(arr);
        localStorage.setItem("cartStorage",JSON.stringify(arr));

        console.log(arr.length,arr);
    }

    function countAddition(arr){
        count.textContent=arr.length;
    }

    function moveToCart(){
        window.location.href="/cart.html";
    }


