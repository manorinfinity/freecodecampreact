import React, {useState, useEffect} from "react";
import axios from "axios";
import './randomQuote.css'
const RandomQuote = (props) => {
  const [state, setState] = useState({
    quotes: [],
    quote:{
      text: "",
      author: ""
    },
    color: '#'
  });
  const [colors,setColors] = useState({
    randColor1: "",
    randColor2: "",
  });

  useEffect(() => {
    async function fetchData(){
      const quotesData = await axios('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
      const random = Math.floor(Math.random() * quotesData.data.quotes.length);
      setState({quotes: quotesData.data.quotes, quote: quotesData.data.quotes[random]});
      async function randomColor(){
        let randColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        let randColor2 = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColors({randColor1: randColor, randColor2: randColor2});
      }
      randomColor();
    }
    fetchData();
  },[]);{/*We pass empty array to run use_effect only once*/}
  async function randomColor(){
    let randColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    let randColor2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColors({randColor1: randColor, randColor2: randColor2});
  }
 function handleClick(e) {
    const quotesData = state.quotes;
    const random = Math.floor(Math.random() * 102);
    console.log(random);
    setState({...state, quote: quotesData[random]});
    randomColor();
  }
  return(
    <div className="wrapper" style={{backgroundColor: colors.randColor1}}>
      <div id="quote-box" style={{backgroundColor: colors.randColor1}}>
      <h1>Welcome to RandomQuote</h1>
        <p id="text">{state.quote.quote}</p>
        <p id="author">-{state.quote.author}</p>
        <div id="inner">
          <button id="new-quote" onClick={handleClick} className="btn" style={{backgroundColor: colors.randColor2, color: "white"}}>New Quote</button>
          <a className="btn btn-primary" href={`https://twitter.com/intent/tweet?text=${state.quote.quote}`} id="tweet-quote"><i class="fab fa-twitter fa-lg"></i>Tweet</a>
        </div>
      </div>
    </div>

  )
}

export default RandomQuote;
// What we need?
// Fetch a random quote and update it in the quote box with click on button
// A tweet button with the content of the quote box as body
// https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Either%20you%20run%20the%20day%2C%20or%20the%20day%20runs%20you.%22%20Jim%20Rohn
