import './passwordButton.css'
import { useState } from 'react'
export default function passwordButton(props){
    let [image,changeImage] = useState('/copy.svg')
    let style = {
        passContent: {
            fontSize: "1.5rem"
        },
        copy:{
            height: "1.5rem",
            width: "1.5rem"
        }
    }
    let top = props.first ? "2rem": "0"
    let len = props.pass.length
    if(len>35){
        style.passContent.fontSize = "0.8rem"
    }else if(len>30){
        style.passContent.fontSize = "0.9rem"
    }else if(len>25){
        style.passContent.fontSize = "1rem"
    }else if(len>20){
        style.passContent.fontSize = "1.2rem"
    }
    let [disable,changeDisable] = useState({pointerEvents:'',marginTop:top});
    let handleClick = () => {
        changeDisable({pointerEvents:'none',marginTop:top});
        changeImage('/checkMark.svg');    
        navigator.clipboard.writeText(props.pass).catch((error) => {
            console.error('Error copying text to clipboard:', error);
        });
        setTimeout(() => {
            changeImage('/copy.svg');
            changeDisable({pointerEvents:'',marginTop:top});
        }, 2000);
    };
    let handleKeyDown = (e)=>{
        if(e.key==='Enter'){
            handleClick()
        }
    }
    return(
        <div className='buttonParent' style={disable}>
            <div tabIndex={props.tabIndex} onKeyDown={handleKeyDown} onClick={handleClick} className='button'>
                <p className='passContent' style={style.passContent}>{props.pass}</p>
                <img className="copy" src={image} alt="copyToClipBoard" style={style.copy} />
            </div>
        </div>
    )
}