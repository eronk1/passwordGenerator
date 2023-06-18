import './GeneratePassword.css'
import Button from './passwordButton.jsx'
import { useEffect } from 'react'
export default function GeneratePassword(props){
    
    let renderPasswords = ()=>{
        let passwords = props.passwords
        let allButtons = [];
        let count = 0;
        for(let val of passwords){
            let first = count?false:true
            allButtons.push(<Button tabIndex={14+passwords.length-count} first={first} key={count} pass={val} />)
            count++;
        }
        return allButtons;
    }
    let renderClickMe = (
            <div id='clickMeParent'>
                <div id='upArrow'>
                    <img src="/upArrow.svg" alt="^" />
                    <img src="/upArrow.svg" alt="^" />
                    <img src="/upArrow.svg" alt="^" />
                </div>
            </div>
        )
    let containerRef = props.useRef
    useEffect(()=>{
        if(containerRef!=null&&containerRef.current!=null&&containerRef.current.lastChild!=null){
            containerRef.current.lastChild.scrollIntoView({ behavior: 'smooth' });
        }
    })
    return( 
        <div id='generatePasswordParent'>
            <div id='gpTop'>
                <button tabIndex={13} className={!props.valid?'disable':''} onClick={props.handleClick} id='generatePasswordButton'>Generate Password</button>
            </div>
            <div id='generatedPassword' ref={props.useRef}>
                {props.passwords.length!=0 && <button tabIndex={14} onClick={props.clearAll} id='clearAll'>Clear All</button>}
                {props.passwords.length==0 && renderClickMe}
                {renderPasswords()}
            </div>
        </div>
    )
}