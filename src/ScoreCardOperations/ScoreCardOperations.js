function ScoreCardOperations(props){ 
    //onClick={incerment}
    console.log("Score Card Operations Component",props);
    const {incrementScore}=props;
    // function incrementBy1(){
    //     incrementScore(1);
    // }
    // function checking(){

    // }
    // //function Expression 
    // const marks=34;
    // const checkingFunExpress=function(){
    //     console.log("asdflassdjkj")
    // }
    // checkingFunExpress();
    const checkingFunExpress=()=> {
        console.log("assssdf;lkj");
    }

    return (
        <div className="flex-center">
    <button className="scoreButton" onClick={() => {
        incrementScore(1);
    }} >+1</button>
    <button className="scoreButton" onClick={ () => {
        incrementScore(5);
    }} >+5</button>
    <button className="scoreButton" onClick={() => {
        incrementScore(5);
    }} >-5</button>

    </div>
    )
}
export default ScoreCardOperations;