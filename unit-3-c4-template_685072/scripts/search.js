// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let  search = document.getElementById("search_input")

let results =  document.getElementById("results")

import { appendData} from "../components/fetch.js";

search.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

      event.preventDefault();  

let query = document.getElementById("search_input").value
console.log(query)

results.innerHTML = null;

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








