
const link = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const tweet = document.getElementById('text');
const authors = document.getElementById('author');
const postItem = document.getElementById('tweet-quote');
let quote

fetch(link)
.then((res)=> res.json())
.then((data)=> {
  quote = data.quotes;
   });


getQuote=()=>{
const ranNum = Math.floor(Math.random()*quote.length);
   const html = quote[ranNum].quote;
   const quoteAuthor = quote[ranNum].author;
   tweet.innerHTML = html;
   authors.innerHTML = `- ${quoteAuthor}`;
};

tweetQuote=()=>{
	postItem.href=`https://twitter.com/share?text=${tweet.textContent}-${authors.textContent}`;
}

document.querySelector('#new-quote').addEventListener('click', getQuote);
postItem.addEventListener('click', tweetQuote);



 

