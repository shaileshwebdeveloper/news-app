// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let results =  document.getElementById("results")

import { appendData} from "../components/fetch.js";

document.getElementById("ch").onclick = function china(){

    results.innerHTML = null;
  
    let url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch"


     let newsresults  = async (url) => {

        try{
     
         let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch");
         console.log(res)
         let data = await res.json()
         data = data.articles
         console.log(data)
     
         appendData(data)
     
        }catch(err){
            console.log(err)
        }
     
     
     
     }
  

     newsresults();

    //  appendData()


}






let newsdata  = async (url) => {

   try{

    let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in");
    // console.log(res)
    let data = await res.json()
    data = data.articles
    // console.log(data)

    append(data)

   }catch(err){
       console.log(err)
   }



}

newsdata()

function append(data){

data.forEach((el) => {

    let news =  document.createElement("div")
    news.id =  "news"


    let imgDiv =  document.createElement("div")

    let newsDiv = document.createElement("div")
    
    let img =  document.createElement("img")
    img.src = el.urlToImage

    let title =  document.createElement("h3")
    title.innerText =  el.title
    title.id = "title"

    let desc =  document.createElement("p")
    desc.innerText =  el.description

    newsDiv.append(title, desc)

    news.append(img, newsDiv)

    results.append(news)


});

}


document.getElementById("in").onclick = function india(){

    results.innerHTML = null;
  
    let url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"


     let newsresults  = async (url) => {

        try{
     
         let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in");
         console.log(res)
         let data = await res.json()
         data = data.articles
         console.log(data)
     
         appendData(data)
     
        }catch(err){
            console.log(err)
        }
     
     
     
     }
  

     newsresults();




}


document.getElementById("us").onclick = function usa(){

    results.innerHTML = null;
  
    let url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=us"


     let newsresults  = async (url) => {

        try{
     
         let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=us");
         console.log(res)
         let data = await res.json()
         data = data.articles
         console.log(data)
     
         appendData(data)
     
        }catch(err){
            console.log(err)
        }
     
     
     
     }
  

     newsresults();




}



document.getElementById("uk").onclick = function uk(){

    results.innerHTML = null;
  
    let url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk"


     let newsresults  = async (url) => {

        try{
     
         let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk");
         console.log(res)
         let data = await res.json()
         data = data.articles
         console.log(data)
     
         appendData(data)
     
        }catch(err){
            console.log(err)
        }
     
     
     
     }
  

     newsresults();



}




document.getElementById("nz").onclick = function nz(){

    results.innerHTML = null;
  
    let url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz"


     let newsresults  = async (url) => {

        try{
     
         let res = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz");
         console.log(res)
         let data = await res.json()
         data = data.articles
         console.log(data)
     
         appendData(data)
     
        }catch(err){
            console.log(err)
        }
     
     
     
     }
  

     newsresults();




}


let  search = document.getElementById("search_input")


search.addEventListener("keypress", function(event) {


    if (event.key === "Enter") {

        
    let query = document.getElementById("search_input").value
    console.log(query)

    // event.preventDefault(); 
    
    window.location.href = "search.html"


let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`


let newsresults  = async (url) => {

  try{

   let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
   console.log(res)
   let data = await res.json()
   data = data.articles
   console.log(data)

   appendData(data)

  }catch(err){
      console.log(err)
  }



}


newsresults();

// appendData()
       
    }

    
  });

