import React,{useState} from 'react';
const Email=()=>{
 const [toggle,setToggle]=useState(false)
 const handleToggle=()=>{
    setToggle(!toggle)
 }
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
              {toggle ?<Modal toggle={toggle} handleToggle={handleToggle} setToggle={setToggle}/>:""}
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
                  className="w-full bg-opacity-100 text-base py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none mt-3"
                  required=""
                 
                />
                 <input
                  type="text"
                  className="w-full h-60 bg-opacity-100 text-base py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none mt-3 overflow-auto"
                  required=""
                /> 
                <div
                  contenteditable="true"
                 
                  className="bodyinput border-gray-500"
                ></div>
              </div>
             

              <button onClick={handleToggle} className="ml-8 lemlistbtn mb-4"><i className="mr-2 fa-solid fa-eye"></i>Preview</button>
            </div>
                    </>
)
}
const Modal=(props)=>{
    let senderemail=false;
    let openEmailModal=false;
    let selectedSubject=false;
    let selectedbody=false;
    let openPreviewModal=false;
    let sendemail=false;
    console.log(props.toggle);
 return(
  <>
  <div className="bg-white w-1/2 shadow-lg flex-1 mr-1 modal bg-[white] p-10 rounded-lg border border-gray-200 pt-15 shadow-xl shadow-gray-300" >
  
    <div class="px-8 pt-4 pb-4">
    <button className='button' onClick={props.handleToggle}>CLose</button>
      <div class="relative">
        <label
          for="name"
          class="text-[16px] font-medium text-gray-800 mb-1 ml-1 block"
          >Sender's email {props.toggle}</label
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
        class="w-full bg-opacity-100 text-base py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none mt-3"
        required=""
       
      />
       <input
      type="text"
      class="w-full h-60 bg-opacity-100 text-base py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none mt-3 overflow-auto"
      required=""
    /> 
      <div
        contenteditable="true"
        
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
  <button onClick={props.handleToggle}>CLose</button>
  </>
 )
}



export default Email