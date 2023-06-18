import './Options.css'
import React, { useEffect , useState } from 'react';
export default function Options(props){
    
    const {values, changeValue} = props;
    function handleChange(e){
        let v = e.nativeEvent.data
        let inputType = e.nativeEvent.inputType
        let id = e.nativeEvent.explicitOriginalTarget.id
        if(inputType=='insertReplacementText'){
            if(v>0&&v<=40){
                changeValue(old=>{
                    return {...old,length:v}
                })
            }
        }else if(e.target.type=="checkbox"){
            if(id==='symbols'){
                changeValue(old=>{
                    return {...old,symbols:!old.symbols}
                })
            }else if(id==='numbers'){
                changeValue(old=>{
                    return {...old,numbers:!old.numbers}
                })
            }else if(id==='upperCase'){
                changeValue(old=>{
                    return {...old,upLetter:!old.upLetter}
                })
            }else if(id==='lowerCase'){
                changeValue(old=>{
                    return {...old,lowLetter:!old.lowLetter}
                })
            }
        }
    }
    let handleKeyDown = (e)=>{
        let id = e.target.id;
        if(e.key==='Enter'){
            if(id==='symbols'){
                changeValue(old=>{
                    return {...old,symbols:!old.symbols}
                })
            }else if(id==='numbers'){
                changeValue(old=>{
                    return {...old,numbers:!old.numbers}
                })
            }else if(id==='upperCase'){
                changeValue(old=>{
                    return {...old,upLetter:!old.upLetter}
                })
            }else if(id==='lowerCase'){
                changeValue(old=>{
                    return {...old,lowLetter:!old.lowLetter}
                })
            }
        }
    }
    return (
        <div id='options'>
            <div id='passLength'>
                <label htmlFor="length" tabIndex={3}>Password Length</label>
                <input tabIndex={4} onChange={handleChange} value={values.length} id='length' type="number" max="40"/>
            </div>            
            <div id='symbols'>
                <label htmlFor="symbols" tabIndex={5}>Include Symbols</label>
                <input onKeyDown={handleKeyDown} type="checkbox" id='symbols' tabIndex={6} checked={values.symbols} onChange={handleChange} />
            </div>
            <div id='numbers'>
                <label htmlFor="numbers" tabIndex={7}>Include Numbers</label>
                <input onKeyDown={handleKeyDown} tabIndex={8} type="checkbox" id='numbers' checked={values.numbers} onChange={handleChange} />
            </div>
            <div id='upperCaseLetters'>
                <label tabIndex={9} htmlFor="upperCase" >Include UpperCase Letters</label>
                <input onKeyDown={handleKeyDown} tabIndex={10} type="checkbox" id='upperCase' checked={values.upLetter} onChange={handleChange} />
            </div>
            <div id='lowerCaseLetters'>
                <label tabIndex={11} htmlFor="lowerCase" >Include Lowercase Letters</label>
                <input onKeyDown={handleKeyDown} tabIndex={12} type="checkbox" id='lowerCase' checked={values.lowLetter} onChange={handleChange} />
            </div>
        </div>
    )
}