import React from 'react'

const Modal=(props)=>{
    console.log(props)
    return(
        <div className='bg-white w-3/4  shadow-lg flex-1 mr-1 modal2 bg-[white] p-10 rounded-lg border border-gray-200 pt-15 shadow-xl shadow-gray-300'>
            <button className='button' onClick={props.loadremaining}>Close</button>
            <div className='modalSpan'>
            <span className='p-2'>{props.text}</span>
            </div>
           
            
        </div>
    )
}

export default Modal
