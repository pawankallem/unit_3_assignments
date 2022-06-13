

async function getItems(url) {

    try {
        let responce = await fetch(url);

        let data = await responce.json();

        return data.meals;
    }

    catch (error) {
        console.log('error:', error)

    }


}

const appenedData = (data,location) => {

    data.forEach (function(elem){

        let div=document.createElement("div");

        let title=document.createElement("p");
        title.innerText=elem.strMeal;

        let image=document.createElement("img");
        image.src=elem.strMealThumb;
        // image.height="300px";
        // image.width="350px";

        div.append(image,title);

        location.append(div);
    })
};

export { getItems , appenedData };