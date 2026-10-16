import "./App.css";
import { useState } from 'react';

function App() {

const [greetingText,setGreetingText] = useState("Greeting Message")

const language1 = "Thai";
const language2 = "English";
const language3 = "China" ;


function language(language){
let lang = ""
switch (language){
case "Thai" : lang = "สวัสดี!";
break;
case "English" : lang = "Hi!";
break;
case "China" : lang = "你好!";
break;
}
return lang;
}


function clickEvent(text){
    return ()=>{setGreetingText(text)}
  }


  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>
      <div className="buttons">
        <button onClick={clickEvent(language(language1))}>{language(language1)}</button>
        <button onClick={clickEvent(language(language2))}>{language(language2)}</button>
        <button onClick={clickEvent(language(language3))}>{language(language3)}</button>
      </div>
    </div>
  );
}

export default App;
