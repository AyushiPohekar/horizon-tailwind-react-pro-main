import React from 'react'

const Modal = (props) => {
    const submit=(e)=>{
        e.preventDefault();
    }
  return (
       
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
             <form action="#" class="w-full" method="POST" onSubmit={submit}> 
        
        <div class="grid grid-cols-1 gap-3">
  
          <div class="w-full">
            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Phone</label>
            <input type="text" value="{data1['telephone']}" name="phone_number"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          </div>
          <div class="w-full">
            <label for="email" class="block mb-1 text-sm font-medium text-gray-900">Email</label>
            <input type="email" value="{data1['contact-email']}" name="email"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          </div>
          <div class="w-full">
            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Website</label>
            <input type="text" value="{data1['location-url']}" name="website_url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          </div>
          <h4 class="font-bold">Address</h4>
  
          <div class="w-full">
            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Name</label>
            <input type="text" value="{data1['location-name']}" name="business_name"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          </div>
          <div class="w-full">
            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Address</label>
            <input type="text" value="{data1['address1']} {data1['address2']}" name="address"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          </div>
          <div class="w-full">
            <label for="" class="block mb-1 text-sm font-medium text-gray-900">City</label>
            <input type="text" value="{data1['town']}" name="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          </div>
          <div class="w-full">
            <label for="" class="block mb-1 text-sm font-medium text-gray-900">State</label>
            <input type="text" value="{data1['region']}" name="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          </div>
          <div class="w-full">
            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Country</label>
            <input type="text" value=" {data1['country']}" name="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          </div>
          <div class="w-full">
            <label for="" class="block mb-1 text-sm font-medium text-gray-900">Zipcode</label>
            <input type="text" value="{data1['postcode']}" name="postcode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
          </div>
  
          <div class="w-full">
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
          </div>
  
  
        </div>
    
      
    </form>
   
          </div>
          </div>
  
        
       
      
          
            
  )
}

export default Modal
