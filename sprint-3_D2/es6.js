


let search = document.getElementById("search");
search.addEventListener("keyup", (event) =>{
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});


const api = "AIzaSyBEEh1QOS90kFLgAtfxhB_RafXB3b_i-Xw";

youtube();

async function youtube() {

    let search=JSON.parse(localStorage.getItem('homePage'))||document.getElementById("search").value;

    try {
        let x = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${api}&maxResults=20`);

        let res = await x.json();

        console.log('res:', res)

        let videos = res.items;

        appendVideos(videos);

        localStorage.removeItem("homePage");

    }
    catch (er) {
        console.log('er:', er)

    }

};

const showdata=document.getElementById("showdata");


const appendVideos = (item) => {

    showdata.innerHTML="";

    item.forEach(({snippet ,id:{videoId}}) => {

        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=snippet.thumbnails.medium.url;

        let title=document.createElement("p");
        title.innerText=snippet.title;

        let obj={
            snippet,
            videoId
        }

        div.onclick=()=>{
            nextpage(obj);
        }

        div.append(img,title);

        showdata.append(div);

    });
};

function nextpage(data){

    localStorage.setItem("pavan",JSON.stringify(data));

    console.log(data);
    
    window.location.href="playvideo.html";
}

