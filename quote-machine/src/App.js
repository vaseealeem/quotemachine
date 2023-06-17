import './App.css';
import React from 'react';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"/>


let quoteBank = [
  {quoteText: "If you can't explain it simply, you don't understand it well enough.", authorName: "-Albert Einstein"},
  {quoteText: "Science is not only a disciple of reason but, also, one of romance and passion.", authorName: "-Albert Einstein"},
  {quoteText: "There is no greater education than one that is self-driven.", authorName: "-Neil deGrasse Tyson"},
  {quoteText: "When one has not had a good father, one must create one.", authorName: "-Friedrich Nietzsche"},
  {quoteText: "I know of no time in human history where ignorance was better than knowledge.", authorName: "-Neil deGrasse Tyson"},
  {quoteText: "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.", authorName: "-Albert Einstein"},
  {quoteText: "Life would be tragic if it weren't funny.", authorName: "-Stephen Hawking"},
  {quoteText: "The most creative people are motivated by the grandest of problems that are presented before them.", authorName: "-Neil deGrasse Tyson"},
  {quoteText: "All truths are easy to understand once they are discovered; the point is to discover them.", authorName: "-Galileo Galilei"},
  {quoteText: "The theory of evolution, like the theory of gravity, is a scientific fact.", authorName: "-Neil deGrasse Tyson"},
  {quoteText: "People who boast about their I.Q. are losers.", authorName: "-Stephen Hawking"},
  {quoteText: "Thoughts are the shadows of our feelings - always darker, emptier and simpler.", authorName: "-Friedrich Nietzsche"},
  {quoteText: "Nationalism is an infantile disease. It is the measles of mankind.", authorName: "-Albert Einstein"},
  {quoteText: "Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.", authorName: "-Isaac Newton"},
  {quoteText: "The Bible shows the way to go to heaven, not the way the heavens go.", authorName: "-Galileo Galilei"},
  {quoteText: "Without imperfection, you or I would not exist.", authorName: "-Stephen Hawking"},
  {quoteText: "Blessed are the forgetful: for they get the better even of their blunders.", authorName: "-Friedrich Nietzsche"},
  {quoteText: "I can calculate the motion of heavenly bodies, but not the madness of people.", authorName: "-Isaac Newton"},
  {quoteText: "When one's expectations are reduced to zero, one really appreciates everything one does have.", authorName: "-Stephen Hawking"},
  {quoteText: "The true sign of intelligence is not knowledge but imagination.", authorName: "-Albert Einstein"},
  {quoteText: "If I were again beginning my studies, I would follow the advice of Plato and start with mathematics.", authorName: "-Galileo Galilei"},
  {quoteText: "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.", authorName: "-Alan Turing"},
  {quoteText: "Who would set a limit to the mind of man? Who would dare assert that we know all there is to be known.", authorName: "-Galileo Galilei"},
  {quoteText: "However difficult life may seem, there is always something you can do, and succeed at. It matters that you don't just give up.", authorName: "-Stephen Hawking"},
  {quoteText: "One must still have chaos in oneself to be able to give birth to a dancing star.", authorName: "-Friedrich Nietzsche"},
  {quoteText: "Science is a differential equation. Religion is a boundary condition.", authorName: "-Alan Turing"},
  {quoteText: "The monotony and solitude of a quiet life stimulates the creative mind.", authorName: "-Albert Einstein"},
  {quoteText: "There is no heaven or afterlife for broken-down computers; that is a fairy story for people afraid of the dark.", authorName: "-Stephen Hawking"},
  {quoteText: "My powers are ordinary. Only my application brings me success.", authorName: "-Isaac Newton"}
]

let colorScheme = ['#dfc30f', '#0077df', '#07a953', '#ac1515', '#4e2dc4', '#ca215c', '#06c1c4', '#dc731d', '#26c1dc']

let randomNum = (maxNum) => {
  return Math.floor(Math.random() * (maxNum - 1 + 1) + 1)
};

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      color: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.removeClass = this.removeClass.bind(this);
  }
  componentDidMount() {
    document.getElementById("text").classList.add("fadeIn");
    document.getElementById("author").classList.add("fadeIn");

    const colorIndex = randomNum(colorScheme.length) -1;
    const index = randomNum(quoteBank.length) - 1;
    this.setState({
      quote: quoteBank[index].quoteText,
      author: quoteBank[index].authorName,
      color: colorScheme[colorIndex]
    });
  }
  handleClick() {
    document.getElementById("text").classList.add("fadeOut");
    document.getElementById("author").classList.add("fadeOut");
    const colorIndex = randomNum(colorScheme.length) -1;
    const index = randomNum(quoteBank.length) - 1;
      this.setState({
      quote: quoteBank[index].quoteText,
      author: quoteBank[index].authorName,
      color: colorScheme[colorIndex]
    })  
  }
 removeClass() {
    document.getElementById("text").classList.remove("fadeOut");
    document.getElementById("author").classList.remove("fadeOut");
 }

  render() {
    return (
      <div id="body" style={{backgroundColor: this.state.color}}>
        <div id="quote-box">
          <p id="text" style={{color: this.state.color}}>{this.state.quote}</p>
          <p id="author" style={{color: this.state.color}}>{this.state.author}</p>
          <div class="buttons">
            <div class="share-links">
              <div class="twitter" style={{backgroundColor: this.state.color}}>
                <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.quote} ${this.state.author}`} text={this.state.quote} target="_blank">
                  <img src={require("./img/twitter.png")}></img>
                </a>
              </div>
          
            </div>
            <button id="new-quote" onClick={() => {this.handleClick(); setTimeout(this.removeClass, 0);}} style={{backgroundColor: this.state.color}}>New Quote</button>
          </div>
        </div>
        <p id="signature">-by VaseeAleem</p>
      </div>
    )
  }
  

}

function App() {
  return (
    <div>
      <QuoteMachine />
    </div>
  );
}

export default App;
