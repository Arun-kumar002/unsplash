let list=document.querySelector("#list");
let  grid=document.querySelector("#griddata");


list.addEventListener("click",e=>{
    let value=e.target.innerText;
    getPhotos(value)
})

// promise 
async function getPhotos(value){
    let accesskey="CO_MHJArjCm_RwoKaGwyMOjNdONYs4nNW-GOKHOwp7I";
    let base_url=`https://api.unsplash.com/search/collections?client_id=${accesskey}&&page=1&query=${value}`;
    let data=await window.fetch(base_url);
    let{results}=await data.json();
    console.log(results);
    let output="";
    for(let [index , photo] of results.entries()){
        let{preview_photos,links}=photo;
        output+=`
        <div id='grid-data'>
        <img src=${preview_photos[0].urls.thumb}/>
        <a href=${links.html} target='_blank'>view more</a>
        </div>
        `;
    }
    grid.innerHTML=output;


    grid.addEventListener("click",e=>{
        let img=e.path[0].currentSrc;
        grid.style. filter= "blur(8px)";
        let slider=document.querySelector("#slide");
        // let src=`<button id="cancel">X</button><img src=${img} />`
        let src=`<button id="cancel">X</button>`
        slider.style.background=`url(${img})`
        slider.style.backgroundSize="contain" ;
        slider.style.backgroundRepeat="no-repeat";
        slider.style.backgroundPosition="center";

        slider.innerHTML=src;
        slider.style. transform="translate(0px, -723px)";
         
        
        let btn=document.querySelector("#cancel");
        btn.addEventListener("click",e=>{
            slider.style. transform="translate(-1359px, -723px)";
            grid.style. filter= "none";

            
        });
        
    })

   
    // let btn=document.querySelector("#cancel");
    // let slide=document.querySelector("#slide")
    // grid.addEventListener("click",e=>{
    //     grid.style.display="none";
    //     slide.style.display="block";
    //     let section=document.querySelector("#slide");
    //     let value=e.target.src;
    //     section.innerHTML=`<img src=${value}/> <button id="cancel">X</button>`;
    
    // });
   
    // btn.addEventListener("click",e=>{
    //     grid.style.display="block";
    //     slide.style.display="none";
    //     let comp=document.querySelector("#comp");
        
    //     getPhotos(comp)

       

    
    // })
    
}
//ajax
// function getPhotos(value){
//     let accesskey="CO_MHJArjCm_RwoKaGwyMOjNdONYs4nNW-GOKHOwp7I";
//     let base_url=`https://api.unsplash.com/search/collections?client_id=${accesskey}&&page=1&query=${value}`;
//     let ajaxreq=new XMLHttpRequest();
//     ajaxreq.open("GET",base_url);
//     ajaxreq.onload=function(){
//         if(this.status>=200 && this.status<300){
//             let data=JSON.parse(this.response);
//             let output="";
//             for(let photo of data.results){
//                 output+=`<div id='grid-data'>
//                 <img src=${photo.preview_photos[0].urls.thumb}/>
                
//                 </div>`
//             }
//             grid.innerHTML=output;
//         }
//     };
//     ajaxreq.send();

// }
