let newsresults  = async (url) => {

    try{
 
     let res = await fetch(url);
     // console.log(res)
     let data = await res.json()
     data = data.articles
     // console.log(data)
 
     append(data)
 
    }catch(err){
        console.log(err)
    }
 
 
 
 }
 
//  newsdata()
 
 function appendData(data){
 
 data.forEach((el) => {
 
     let news =  document.createElement("div")
     news.id =  "news"
 
     let results =  document.getElementById("results")
 
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

 export { appendData}
 