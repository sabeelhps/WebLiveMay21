import './App.css';
import Hello from './Hello';
import Card from './Card';
import Todo from './Todo'


function getMood() {
  
  const moods = ['Happy', 'Paranoid', 'Quit', 'Angry', 'Hungry'];

  return moods[Math.floor(Math.random() * moods.length)];
}



function App() {
  
  const subHeading = 'This is my New Subheading'
  
  const randomNum = Math.round(Math.random() * 10);

  let dispElement=null;

  if (randomNum === 7) {
    dispElement=<img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344" alt="gifs" />
  } else {
    dispElement=<p>It is not a Lukcy Number</p>
  }


  return (
    <div>
      <h1>This is my First React App {10 + 20 + 30} </h1>
      <h2>{subHeading}</h2>
      
      <h3>My Mood is : { getMood() }</h3>
      <h3>My Random Number is : {randomNum}</h3>
      {/* {randomNum === 7
        ? <img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344" alt="gifs" />
        : 'Not A Lucky Number'} */}
      {randomNum === 7 &&
        < img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344" alt="gifs" />
       }
      
      {/* {dispElement} */}
      <p>This is some random paragraph {Math.floor(Math.random() * 10)} </p>
      <Hello />
      <Card />
      <Card />

      <h2>My Todos</h2>
       <Todo/>
    </div>
  );
}

export default App;
