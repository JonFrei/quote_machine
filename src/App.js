import { useEffect, useState } from "react";

function App() {

  const [viewQuote, setQuote] = useState([]);
  const [viewRandQuote, setRandQuote] = useState("");
  const [getColor, setColor] = useState("")
  

  var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

 


  useEffect(()=>{
    async function fetchData(){
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuote(data);
      //console.log("first val: ", viewQuote);

      const randIndex = Math.floor(Math.random() * data.length);
      setRandQuote(data[randIndex]);
      //setAuthor(data.author(randIndex));

      let colIndex = Math.floor(Math.random() * colors.length);
      setColor(colors[colIndex]);

    }
    fetchData();
  }, [])

  
  const getRandomQuote = () =>{
    let randIndex = Math.floor(Math.random() * viewQuote.length);
    setRandQuote(viewQuote[randIndex]);

    let colIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[colIndex]);

    console.log("Index: ", randIndex);
    console.log("quote: ", viewQuote[randIndex]);
    console.log("color: ", getColor);
  }

  const TwitterLink = (text, author) =>{
    let link = "https://www.twitter.com/intent/tweet?text="
    let link_ext = encodeURIComponent('"'+text+'"'+' -'+author)
    console.log("Link: ", link);
    console.log("Link_ext: ", link_ext);
    return link + link_ext
  }

  //console.log(TwitterLink())


  return (
    <div id="container" style={{backgroundColor: getColor}}>
      <div id="quote-box">

        <div id="display-area">
          <div id="text" style={{color: getColor}}> <span>" </span>{viewRandQuote.text || "Loading.."}<span> "</span> </div>

          <div id="author" style={{color: getColor}}>{viewRandQuote.author || "Loading.."}</div>
        </div>
        

        <div id="btn-container">

        <button id="new-quote" onClick={getRandomQuote} style={{backgroundColor: getColor}} className="btn btn-lg">New Quote</button>
          <a href={TwitterLink(viewRandQuote.text, viewRandQuote.author)}
          id="tweet-quote"  
          target="_blank">
            <i className="fa-brands fa-twitter" style={{color: getColor}}></i>
          </a>
          
        </div>
      </div>

      <div id="btn-links">
        <a id="return-icon" href="http://jonfrei.com/Resume_Project_Page/" className="btn btn-lg"><i class="fa-solid fa-arrow-left"  style={{color: getColor}}></i></a>
        <button id="git-button" type="button" className="btn btn-lg"><a href="https://github.com/JonFrei" target="_blank" style={{color: getColor}}>View Solution on GitHub</a></button>          
      </div>


    </div>

  );
}

export default App;
