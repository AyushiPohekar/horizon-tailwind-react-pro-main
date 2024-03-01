import React,{useState} from 'react';
import { templates } from './template';

const Email=()=>{
 const [toggle,setToggle]=useState(false)
 const [toggle1,setToggle1]=useState(false)
 const [data,setData]=useState('');
 const [data1,setData1]=useState('');
 console.log(toggle1)
 const selectTemplate=(data)=>{
  setData(data)
 }
 const handleToggle1=()=>{
  setToggle1(!toggle1)
 }
 const useTemplate=(data1)=>{
  setData1(data1)
  
 }
 const handleToggle=()=>{
    setToggle(!toggle)
 }
 const htmlContent = data1.body;
    let senderemail=false;
    let openEmailModal=false;
    let selectedSubject=false;
    let selectedbody=false;
    let openPreviewModal=false;
    return(
    <>
<div className="bg-white shadow-lg flex-1 mr-1" >
            
              <div
                className="flex justify-between border-b border-solid border-gray-100 px-8 pt-4 pb-4"
              >
              {toggle ?<Modal2 toggle={toggle} handleToggle={handleToggle} setToggle={setToggle} data={data} setData={setData} selectTemplate={selectTemplate} useTemplate={useTemplate}/>:""}
              {toggle1 ?<Modal toggle1={toggle1} handleToggle1={handleToggle1} setToggle1={setToggle1} data1={data1} setData1={setData1} />:""}
                <div className="flex items-center">
                  <span>1.</span>
                  <span className="pl-2">
                    <i
                      className="fa-solid fa-envelope bg-[#f3f5eb] p-2 rounded-full"
                    ></i></span
                  >
                  <div className="pl-2">
                    <p>Email</p>
                    <p className="text-gray-400">Send automatic email</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold text-base overflow-hidden transition-none whitespace-nowrap templtebtn"
                    style={{borderRadius: "10px", border: "1px solid lightgrey"}}
                    onClick={handleToggle}
                  
                  >
                    <i
                      className="fas fa-swatchbook"
                      style={{color: "rgb(49, 107, 255)"}}
                    ></i>
                    <span style={{color: "rgb(49, 107, 255)"}}>Templates</span>
                  </button>
                </div>
              </div>
             
              <div className="px-8 pt-4 pb-4">
                <div className="relative">
                  <label
                    for="name"
                    className="text-[16px] font-medium text-gray-800 mb-1 ml-1 block"
                    >Sender's email</label
                  >
                  <input
                    type="text"
                    name="to_email"
                    id="to_email"
                   
                    placeholder="Please Enter email address"
                    className=" bg-gray-100 bg-opacity-100 text-base text-gray-700 py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none"
                    required=""
                    
                    
                  />
                </div>
              </div>
             
              <div className="px-8 pt-2 pb-8">
                <h5>Email</h5>
                <input
                  type="text"
                  value={data1.name}
                  className="w-full bg-opacity-100 text-base py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none mt-3"
                  required=""
                 
                />
                 <input
                  type="text"
                  value={data1.subject}
                  className="w-full  bg-opacity-100 text-base py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none mt-3 overflow-auto"
                  required=""
                /> 
                <div
                  contenteditable="true"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                  className="bodyinput border-gray-500"
                ></div>
              </div>
             

              <button onClick={handleToggle1} className="ml-8 lemlistbtn mb-4"><i className="mr-2 fa-solid fa-eye"></i>Preview</button>
            </div>
                    </>
)
}
const Modal2=(props)=>{
  const htmlContent = props.data.body;
  return(
  <div className='fixed inset-0 overflow-y-auto flex items-center justify-center modal12 '>
          {/* <div className="fixed inset-0 bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-sm"></div> */}
          <div className="fixed inset-0 bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

{/* Modal content */}
   <div className='relative p-8 bg-white w-1/2 rounded shadow-md '>
  <button
    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
    onClick={props.loadpopup}
  >
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </button>
  <div className='fixed inset-0 overflow-y-auto flex items-center justify-center modal12 '>
          {/* <div className="fixed inset-0 bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-sm"></div> */}
          <div className="fixed inset-0 bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

{/* Modal content */}
   <div className='relative p-8 bg-white w-1/2 rounded shadow-md '>
  <button
    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
    onClick={props.handleToggle}
  >
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </button>
  <div class="flex w-full">
    <div class="w-2/5 bg-white p-2">
      <button class="btn lemlistbtn">Lemlist</button>
      <ul>
        { templates && templates.map((item)=>(
          <li 
           onClick={() => props.selectTemplate(item)} 
          class="templateli">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
    <div class="w-4/5">
      <div class="px-8 pt-2 pb-8">
        <h4>{props.data.name}</h4>
        
        <input
          type="text"
          class="w-full bg-opacity-100 text-base py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none mt-3"
          required=""
          value={props.data.subject}
          readonly
        />
        {/* <!-- <textarea
      type="text"
      class="bodyinput border-gray-300"
      required=""
      bind:value={body}
    /> --> */}
        <div
          contenteditable="false"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="bodyinput border-gray-300"
        >
        </div>
      </div>
      <button 
       onClick={props.useTemplate(props.data)}
       className="lemlistbtn ml-4"
        >Use this template</button
      >
    </div>
  </div>
   
          </div>
          </div>
  
        
   
          </div>
          </div>
  
  )       
}
const Modal=(props)=>{
    let senderemail=false;
    let openEmailModal=false;
    let selectedSubject=false;
    let selectedbody=false;
    let openPreviewModal=false;
    let sendemail=false;
    console.log(props.toggle1);
    const htmlContent = props.data1.body;
 return(
  <>
  <div className="fixed inset-0 overflow-y-auto flex items-center justify-center modal12" >
  <div className="fixed inset-0 bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>
    <div className='relative p-8 bg-white w-1/2 rounded shadow-md'>
    <div class="px-8 pt-4 pb-4">
    <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={props.handleToggle1}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
      <div class="relative">
        <label
          for="name"
          class="text-[16px] font-medium text-gray-800 mb-1 ml-1 block"
          >Sender's email {props.toggle1}</label
        >
        <input
          type="text"
          name="to_email"
          id="to_email"
          
          placeholder="Please Enter email address"
          class=" bg-gray-100 bg-opacity-100 text-base text-gray-700 py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none"
          required=""
         
        />
      </div>
    </div>
    
    <div class="px-8 pt-2 pb-8">
      <h5>Email</h5>
      <input
        type="text"
        value={props.data1.name}
        class="w-full bg-opacity-100 text-base py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none mt-3"
        required=""
       
      />
       <input
      type="text"
          value={props.data1.subject}
      class="w-full  bg-opacity-100 text-base py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none mt-3 overflow-auto"
      required=""
    /> 
      <div
        contenteditable="true"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        class="bodyinput border-gray-500"
      ></div>
    </div>
    
  </div>
  <input
    type="email"
    placeholder="email address"
    class=" bg-white bg-opacity-100 text-base  py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none mt-5"
    required=""
  />
  <button class="mt-5 lemlistbtn" onClick={sendemail}>Send Email</button>
  </div>
  </>
 )
}



export default Email