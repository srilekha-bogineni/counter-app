// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ScoreCard from './Components/ScoreCard';
import ScoreCardOperations from './ScoreCardOperations/ScoreCardOperations';
import Message from './Message';
function App() {
  // let counter=10;
  let [score,scoreFun]=useState(100);
  console.log("App component Rendering",score);
  // counter=counter+1;
  function increment(value){
    console.log("I am incrementing");
    score=score+value;
    scoreFun(score);
    console.log("updated Score",score);
    // counter=counter+1;
    // console.log("updated counter",counter);
    /*Component will render when state is updated*/ 
  }
  // function incrementBy5Counter(){
  //   console.log("I am incrementing");
  //   score=score+5;
  //   scoreFun(score);
  //   console.log("updated Score",score);
  // //useCall,useMemo,React.memo -not to render
  // }
  return (
  <div>
    <ScoreCard score={score}/>
    {/* <Score */}
    <ScoreCardOperations incrementScore={increment} 
    // incrementBy5={incrementBy5Counter}
    />
    <Message/>
  </div>
  );
}
export default App;
