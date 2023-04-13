import './Quote_app.css'
import { useState } from 'react';

function Quote_App() {
    const quotes = ['bleh bluh quote 1', 'another bleh quote 2', 'oh here comes one more', 'i get bored of quoting'];
    const authors = ['@bus', '@trap', '@shark', '@nyan']
    const colors = ['blue', 'red', 'yellow', 'pink']
    const [index, setIndex] = useState(0);

    const handleClick = () => {
        if(index > quotes.length - 2){
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return(
        <div className={`upperWrapper ${colors[index]}`}>
        <div className='wrapper'>
            <div id="quote-box">
                <h1 id='text'>{quotes[index]}</h1>
                <div className='bottom'>
                    <div className='bottom-top'>
                        <a href='twitter.com/intent/tweet'>
                            <div className='icon'>
                                <img src='https://cdn-icons-png.flaticon.com/512/733/733635.png' title='Post on twitter!'/>
                            </div>
                        </a>
                        <div className='icon'>
                            <img src='https://cdn-icons-png.flaticon.com/512/49/49323.png' title='Post on tumblr!'/>
                        </div>
                    </div>
                    <div className='bottom-bot'>
                        <p id='author'>- {authors[index]}</p>
                        <button id='new-quote' onClick={handleClick}>Next Quote</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Quote_App