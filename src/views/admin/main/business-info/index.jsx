import React,{useState,useEffect} from 'react';
import nft1 from "assets/img/nfts/NftBanner1.png";
import Nft2 from "assets/img/nfts/Nft3.png";
import Nft1 from "assets/img/nfts/Nft1.png";
import CircularProgressMini from 'components/charts/CircularProgressMini';
import CircularProgress from 'components/charts/CircularProgress';
import Modal from './Modal'

const Business=()=>{
    const data1=[];
    const [popup,setPopup]=useState(false);
    const loadpopup=()=>{
        setPopup(!popup);
    }
    return(
        <div class="w-full p-0">

        <div class="w-full px-10 mt-5 mb-10">
      
        
      
            
              <div className="flex w-full flex-row  rounded-[20px] bg-cover bg-no-repeat px-[15px] py-[20px] md:px-[64px] md:py-[30px]"
      style={{ backgroundImage: `url(${nft1})`,backgroundRepeat:"no-repeat" }}>
                <div class="flex">
                  <i class="fa-solid fa-check bg-black p-[7px] text-white text-[14px] rounded-full"></i> 
                  <strong class="text-lg font-bold text-white pl-2 mt-2 ">Claimed</strong> 
                </div>            
                <span class="bg-white text-black rounded-md text-sm p-2 border border-solid border-[#d0efdb] mt-2 ml-10 lg:mt-0 block lg:inline">
                  Congratulations! Your business is claimed and verified on Google. It's time to optimize it for ranking higher in search engines.
                </span>
              </div>
            
      {popup ? <Modal popup={popup} setPopup={setPopup} loadpopup={loadpopup}/> : "" }
          
          <div class="w-full lg:flex mb-4 ">
            
            <div class="w-full lg:wd-4/5 lg:pdl-3">
              
              <div class="w-full flex items-center justify-between1 mb-3 mt-10">
                <h2 class="text-black text-base font-[700]">Google Business Profile</h2> 
                <span class="ml-2"><a href="#!" onClick={loadpopup} class=""><i class="fa-solid fa-pen-to-square"></i></a></span>
              </div>
              
              <div class="relative bg-[white] p-10 rounded-lg border border-gray-200 pt-15 shadow-xl shadow-gray-300  min-h-[300px]">
                <p class="text-lg text-black text-center mb-4">Google Business Profile is one of the most important optimization tools that can help your business to appear and rank higher on Google Search and Google Maps.</p>
                <div class="w-full lg:grid grid-cols-2 gap-5">
      
                  <div class="w-full">
                    <div class="w-full p-7  rounded-[20px] mb-3 lg:mb-0 " style={{ backgroundImage: `url(${Nft1})` }}>
                      <div class="flex items-center justify-between space-x-2 mb-2">
                        <div class="text-xl font-bold text-white ">Business Details</div>
                        <i class="fa-solid fa-location-dot bg-[#f5f5eb] p-2 rounded-full"></i>
                      </div>
                      <div class="w-full pr-0 lg:pr-0">
                        <div class="py-2 border-solid bg-[white] p-5 rounded-[20px] border-b border-gray-200 mt-2">
                          <span class="block text-md font-bold mb-1 text-black">Name</span>
                          <span class="text-black text-sm font-normal leading-[13.41px]">                    
                          Chess House Dental Practice
                          </span>
                        </div>
                        <div class="py-2 border-solid bg-[white] p-5 rounded-[20px] border-b border-gray-200 mt-2">
                          <span class="block text-md font-bold mb-1 text-black">Address</span>
                          <span class="text-black text-sm font-normal leading-[13.41px]">
                             
                          Dental Implants Department, 105 High Street Invisalign
                          </span>
                        </div>
                        <div class="py-2 border-solid bg-[white] p-5 rounded-[20px] border-b border-gray-200 mt-2">
                          <span class="block text-md font-bold mb-1 text-black">City</span>
                          <span class="text-black text-sm font-normal leading-[13.41px]">
                          Chesham
                          </span>
                        </div>
                        <div class="py-2 border-solid bg-[white] p-5 rounded-[20px] border-b border-gray-200 mt-2">
                          <span class="block text-md font-bold mb-1 text-black">State</span>
                          <span class="text-black text-sm font-normal leading-[13.41px]">
                          Buckinghamshire
                          </span>
                        </div>
                        <div class="py-2 border-solid bg-[white] p-5 rounded-[20px] border-b border-gray-200 mt-2">
                          <span class="block text-md font-bold mb-1 text-black">Country, Zipcode</span>
                          <span class="text-black text-sm font-normal leading-[13.41px]">
                          GBR,HP5 1DE
                          </span>
                        </div>
                         
                      </div>
                    </div>
                  </div>
      
                  <div class="w-full p-7  rounded-[20px] mb-3 lg:mb-0" style={{ backgroundImage: `url(${Nft2})` }} >
      
                    <div class="w-full p-3 bg-white rounded-[10px] mb-1 mt-10">
                      <div class="flex items-center justify-between space-x-2">
                        <div class="text-lg font-bold text-black mt-5">Phone</div>
                        <i className="fa-solid fa-phone bg-[#f5f5eb] p-2 rounded-full"></i>
                      </div>
                      <div class="w-full">
                        <div class="py-2 mt-5">
                          <span class="text-black text-sm font-normal leading-[13.41px]">
                          +44 1494 771856
                          </span>
                        </div>
                      </div>
                    </div>
      
                    <div class="w-full p-3 bg-white rounded-[10px] mb-1">
                      <div class="flex items-center justify-between space-x-2">
                        <div class="text-lg font-bold text-black">Email</div>
                        <i class="fa-solid fa-envelope bg-[#f5f5eb] p-2 rounded-full"></i>
                      </div>
                      <div class="w-full">
                        <div class="py-2">
                          <span class="text-black text-sm font-normal leading-[13.41px]">
                          INFO@CHESSHOUSEDENTAL.COM
                          </span>
                        </div>
                      </div>
                    </div>
      
                    <div class="w-full p-3 bg-white rounded-[10px] mb-1">
                      <div class="flex items-center justify-between space-x-2">
                        <div class="text-lg font-bold text-black">Website</div>
                        <i class="fa-solid fa-globe bg-[#f5f5eb] p-2 rounded-full"></i>
                      </div>
                      <div class="w-full">
                        <div class="py-2">
                          <span class="text-black text-sm font-normal leading-[13.41px]">
                          https://www.chesshousedental.com/  
                          </span>
                        </div>
                      </div>
                    </div>
    
                     
      
                  </div>
      
                </div>
              </div>
            </div>
          </div>
          
      
          
          <div class="w-full my-2 lg:my-8 lg:flex  mb-4 ">
      
            <div class="w-full">
      
              <h2 class="text-black text-base font-[700]">Website Speed and Page Performance</h2>
              <div class="relative bg-[white] p-10 rounded-lg border border-gray-200 pt-15 shadow-xl shadow-gray-300  min-h-[300px]">
                
                <div class="w-full p-3 bg-white rounded-[10px] mb-4">
                  <div class="text-md font-bold text-black border-solid border-b border-gray-100 pb-3">Server Response Time</div>
                  <div class="w-full">
                    <div class="py-2 mb-2">
                      <div class="flex items-center justify-between space-x-2">
                        <p class="text-black text-sm">The response time of the server was - sec Response time Good Should be 2 sec MAX</p>
                        <i class="fa-solid fa-check bg-green-300 p-[5px] text-white text-[12px] rounded-full"></i>
                      </div>
                    </div>            
                  </div>
                </div>
                
      
                
                <div class="w-full p-3 bg-white rounded-[10px] mb-4">
                  <div class="text-md font-bold text-black border-solid border-b border-gray-100 pb-3 mb-4"><i class="fa-solid fa-display"></i> Desktop</div>
                  <div class="w-full">
                    
                    <div class="grid grid-cols-4 gap-6 score md:grid-cols-4 sm:grid-cols-2">
                      
                      
                      <div className="mx-auto mb-5 mt-4 flex h-40 w-36 items-center justify-center">
        <CircularProgress title="Perfomance" percentage={88} />
      </div>
                      
                      
                     
                      <div className="mx-auto mb-5 mt-4 flex h-40 w-36 items-center justify-center">
        <CircularProgress title="Accesibility" percentage={82} />
      </div>
                      
                      
      <div className="mx-auto mb-5 mt-4 flex h-40 w-36 items-center justify-center">
        <CircularProgress title="Best Pratices" percentage={96} />
      </div>
                      
      <div className="mx-auto mb-5 mt-4 flex h-40 w-36 items-center justify-center">
        <CircularProgress title="Seo" percentage={92} />
      </div>
                      
                    </div>
                    
                  </div>
                </div>
                
                <div class="w-full p-3 bg-white rounded-[10px] mb-4">
                  <div class="text-md font-bold text-black border-solid border-b border-gray-100 pb-3 mb-4"><i class="fa-solid fa-mobile-screen-button"></i> Mobile</div>
                  <div class="w-full">
                    
                    <div class="grid grid-cols-4 gap-8 score md:grid-cols-4 sm:grid-cols-2">
                      
                    <div className="mx-auto mb-5 mt-4 flex h-40 w-36 items-center justify-center">
        <CircularProgress title="Perfomance" percentage={34} />
      </div>
                      
      <div className="mx-auto mb-5 mt-4 flex h-40 w-36 items-center justify-center">
        <CircularProgress title="Accesibility" percentage={82} />
      </div>
                      
      <div className="mx-auto mb-5 mt-4 flex h-40 w-36 items-center justify-center">
        <CircularProgress title="Best Pratices" percentage={96} />
      </div>
                      
      <div className="mx-auto mb-5 mt-4 flex h-40 w-36 items-center justify-center">
        <CircularProgress title="Seo" percentage={92} />
      </div>
                      
                    </div>
                    
                  </div>
                </div>
                
      
      
              </div>
            </div>
      
            
      
          </div>
         
      
        </div>
      </div>
    )
}
    
     
    
    
    

export default Business