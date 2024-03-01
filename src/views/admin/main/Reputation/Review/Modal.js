import React from 'react'

const Modal=(props)=>{
    console.log(props)
    return(
        // <div className='bg-white w-2/4  shadow-lg flex-1 mr-1 modal2 bg-[white] p-10 rounded-lg border border-gray-200 pt-15 shadow-xl shadow-gray-300'>
        //     <button className='button' onClick={props.loadremaining}>Close</button>
        //     <div className='modalSpan'>
        //     <span className='p-2'>{props.text}</span>
        //     </div>
           
            
        // </div>
        <div className="fixed inset-0 overflow-y-auto modal12 flex items-center justify-center">
          {/* Blurred background */}
          <div className="fixed inset-0 bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

          {/* Modal content */}
          <div className="relative p-8 bg-white w-1/2 rounded shadow-md">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={props.loadremaining}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-lg font-semibold mb-4">Review</h2>

            <span className='p-2'>{props.text}</span>
          </div>
        </div>
    )
}

export default Modal
