import { useRef, useState } from 'react'
import './App.css'
import Top from './components/Top.jsx'
import Options from './components/Options.jsx'
import GeneratePassword from './components/GeneratePassword.jsx'
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
function App() {
  const [values, changeValue] = useState({length:12,symbols:true,numbers:true,upLetter:true,lowLetter:true})
  const [passwordArr,addPassword] = useState([]);
  let containerRef = useRef(null)
  function getRandom(){
    let ch = '';
    while(true){
      let val = Math.floor(Math.random()*90);
      if(val<=25){
        if(values.upLetter){
          ch = upperCase[val]
          break;
        }
      }else if(val<=51){
        if(values.lowLetter){
          ch = lowerCase[val-26]
          break;
        }
      }else if(val<=60){
        if(values.numbers){
          ch = numbers[val-52]
          break;
        }
      }else{
        if(values.symbols){
          ch = symbols[val-61]
          break;
        }
      }
    }
    return ch;
  }
  let handleClick = ()=>{
    let pass = '';
    for(let i=0;i<values.length;i++){
      pass+=getRandom();
    }
    addPassword(prev=>[...prev,pass]);
  }
  let clearAll = ()=>{
    addPassword([])
  }
  return (
    <div id='parent'>
      <Top />
      <div id='mainContent'>
        <Options values={values} changeValue={changeValue}/>
        <GeneratePassword 
          useRef={containerRef} 
          valid={values.symbols||values.numbers||values.lowLetter||values.upLetter}
          passwords={passwordArr} 
          handleClick={handleClick}
          clearAll={clearAll}
        />
      </div>
    </div>
  )
}

export default App
