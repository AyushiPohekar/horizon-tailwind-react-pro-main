import React, {useState, useEffect } from 'react';
import Nft1 from "assets/img/nfts/Nft1.png";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { FaMessage } from "react-icons/fa6";
import Modal from './Modal';
import { FaCalendarAlt } from "react-icons/fa";
const Review=()=>{
    let [toggle,setToggle]=useState(false)
    let total_rating_facebook=12;
    let total_rating_yelp=0;
    let total_reviews_facebook=0;
    //let total_reviews_google;
    let total_rating_google=9;
   
    let total_rating=9;
    let total_reviews_yelp=9;
    
    let total_reviews=9;
    let filter_data=[];
    
    //let main_columnheader=10;
    let user_email='demo@chesshousedental.com';

  //  let data1_all=[];
    let [data1,setData]=useState([])
    let [text,setText]=useState('')
    let [data1_all,setDataAll]=useState([])
    
    // const apiURL =  "https://app.legaciestechno.com/qualiconvert_dcp/api/get_data.php?type=review_data&email="+user_email;
    // const response = await fetch(apiURL);
    // data1 = await response.json();  

    // total_reviews_google=data1.total_reviews_google;
    // total_reviews_facebook=data1.total_reviews_facebook;
    // total_reviews_yelp=data1.total_reviews_yelp;
    // total_reviews=data1.total_reviews;
    // total_rating=data1.total_rating;
    // total_rating_google=data1.total_rating_google;
    // total_rating_facebook=data1.total_rating_facebook;
    // total_rating_yelp=data1.total_rating_yelp;
    // console.log(apiURL);

    
    // const apiURL_all =  "https://app.legaciestechno.com/qualiconvert_dcp/api/get_data.php?type=viewall_review_insights&user_email="+user_email;

    // console.log(apiURL_all);
    // const response_all = await fetch(apiURL_all);          
    // data1_all = await response_all.json(); 
    // console.log(data1_all);
    // main_columnheader= data1_all.all_data_google;
    // reviews_count= data1_all.facebook_count;

    // console.log(reviews_count);

    // let currentDate = new Date().toJSON().slice(0, 10);
   
  async function getData(){
     const apiURL =  "https://app.legaciestechno.com/qualiconvert_dcp/api/get_data.php?type=review_data&email="+user_email;
    const response = await fetch(apiURL);
     setData(await response.json());  

    total_reviews_google=data1.total_reviews_google;
    total_reviews_facebook=data1.total_reviews_facebook;
    total_reviews_yelp=data1.total_reviews_yelp;
    total_reviews=data1.total_reviews;
    total_rating=data1.total_rating;
    total_rating_google=data1.total_rating_google;
    total_rating_facebook=data1.total_rating_facebook;
    total_rating_yelp=data1.total_rating_yelp;
    
   // console.log(apiURL);
   // console.log(total_reviews_google)

  }
  async function getAll(){
     const apiURL_all =  "https://app.legaciestechno.com/qualiconvert_dcp/api/get_data.php?type=viewall_review_insights&user_email="+user_email;

   /// console.log(apiURL_all);
    const response_all = await fetch(apiURL_all);          
    setDataAll (await response_all.json()); 
   // console.log(data1_all);
    main_columnheader= data1_all.all_data_google;
    reviews_count= data1_all.facebook_count;

    //console.log(reviews_count);

    let currentDate = new Date().toJSON().slice(0, 10);
  }
  function loadremaining(text){
   // document.getElementById('leads_data').innerHTML = rev_data;
   setText(text)
    setToggle(!toggle);   
    }
  useEffect(()=>{
      getData();
      getAll();
  },[data1_all])
  
 let  total_reviews_google=data1.total_reviews_google
 let main_columnheader=data1_all.all_data_google;
 let reviews_count=data1_all.facebook_count;
 console.log(reviews_count)
  
    
    
    
return(
    <div class="w-full bg-white1 p-0">

    <div class="w-full main_tabs">

        
            
                
                
                <div class="w-full px-10 mt-5">
                    <div class="w-full">            
                     
                         <div class="w-full flex items-center justify-between mb-3 opacity-70">
                            <h2 class="text-black text-base font-[700]">Review </h2>  
                        
                        </div> 
                                    
                        <div class="relative bg-[white] p-10 rounded-lg border border-gray-200 pt-15 shadow-xl shadow-gray-300  min-h-[300px]"> 
                            <div class="w-full h-full absolute1 z-40 top-0 left-0 bg-white/70"></div>
                            <div class="w-full p-7  rounded-[20px] mb-3 lg:mb-0 " style={{ backgroundImage: `url(${Nft1})` }}>
    
                                <div class="grid grid-cols-1 lg:grid-cols-5 gap-5">
    
                                
                                    <div class="w-full bg-black border border-gray-500 p-3 text-center bg-white rounded-[10px]">
                                        <div class="flex1 items-center justify-start space-x-2 mb-2 py-3 bg-[] rounded-md">
                                        <i class="fa-brands fa-google text-[20px]"></i> <span class="font-bold text-[26px] pb-2">({total_reviews_google})</span>
                                            <div class="text-sm font-medium text-black mt-2 ">Google  Reviews</div>
                                        </div>      
    
                                        <div class="flex items-center justify-center mt-3">
                                        <div class="text-3xl font-bold text-black">{total_rating_facebook.toFixed(1)}</div>
                                        </div>
                                        <div class="flex items-center justify-center text-[16px] xl:text-[15px] 2xl:text-[15px] space-x-1">
                                        <i class="fa-solid fa-star text-yellow-400"></i>
                                        <i class="fa-solid fa-star text-yellow-400"></i>
                                        <i class="fa-solid fa-star text-yellow-400"></i>
                                        <i class="fa-solid fa-star text-yellow-400"></i>
                                        <i class="fa-solid fa-star text-yellow-400"></i>
                                        </div>
                                        <div class="text-black mt-3 pb-2 ">Average Star Rating</div>
    
                                    </div>
                                    
    
                                    
                                    <div class="w-full bg-black border border-gray-500 p-3 text-center bg-[#ffffff]  rounded-[10px]">
                                    <div class="flex1 items-center justify-start space-x-2 mb-2 py-3 bg-[white] rounded-md">
                                        <i class="fa-brands fa-facebook-f text-[20px]"></i> <span class="font-bold text-[26px] pb-2">({total_reviews_facebook})</span>
                                        <div class="text-sm font-medium text-black mt-2  ">Facebook Reviews</div>
                                    </div>      
    
                                    <div class="flex items-center justify-center mt-3">
                                        <div class="text-3xl font-bold text-black">
                                            { total_rating_facebook ?
                                                <span>{total_rating_facebook.toFixed(1)}</span>: ""
                                            } 
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center text-[16px] xl:text-[15px] 2xl:text-[15px] space-x-1">
                                        <i class="fa-solid fa-star text-gray-400"></i>
                                        <i class="fa-solid fa-star text-gray-400"></i>
                                        <i class="fa-solid fa-star text-gray-400"></i>
                                        <i class="fa-solid fa-star text-gray-400"></i>
                                        <i class="fa-solid fa-star text-gray-400"></i>
                                    </div>
                                    <div class="text-black mt-3 pb-2">Average Star Rating</div>
                                </div>
                                
                                        <div class="w-full bg-black border border-gray-500 p-3 text-center bg-white  rounded-[10px]">
                                        <div class="flex1 items-center justify-start space-x-2 mb-2 py-3 bg-[white] rounded-md">
                                            <i class="fa-brands fa-yelp text-[20px]"></i> <span class="font-bold text-[26px] pb-2">({total_reviews_yelp})</span>
                                            <div class="text-sm font-medium text-black mt-2  ">Yelp Reviews</div>
                                        </div>      
                    
                                        <div class="flex items-center justify-center mt-3">
                                            <div class="text-3xl font-bold text-black">
                                            { total_rating_yelp ?
                                                <span>{total_rating_yelp.toFixed(1)}</span>: ""
                                            } 
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-center text-[16px] xl:text-[15px] 2xl:text-[15px] space-x-1">
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                        </div>
                                        <div class="text-black mt-3 pb-2">Average Star Rating</div>
                                    </div>
                                    
                                        <div class="w-full bg-white border border-gray-500 p-3 text-center bg-white rounded-[10px]">
                                        <div class="flex1 items-center justify-start space-x-2 mb-2 py-3 bg-[white] rounded-md">
                                            <div class="text-sm font-medium text-black mt-2  ">Total <br/>Reviews</div>
                                        </div>      
                    
                                        <div class="flex items-center justify-center mt-3">
                                            <div class="text-3xl font-bold text-black">{total_reviews}</div>
                                        </div>
                                        <div class="flex items-center justify-center text-[16px] xl:text-[15px] 2xl:text-[15px] space-x-1">
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                        </div>
    
                                        <div class="text-black mt-3 pb-2"> 
                                            <i class="fa-brands fa-google text-[18x] mr-2"></i> 
                                            <i class="fa-brands fa-facebook-f text-[18px] mr-2"></i>
                                            <i class="fa-brands fa-yelp text-[18x]"></i> 
                                        </div>
                                    </div>
                                    
                                        <div class="w-full bg-white border border-gray-500 p-3 text-center  rounded-[10px]">
                                        <div class="flex1 items-center justify-start space-x-2 mb-2 py-3 bg-[#f5f5f7] rounded-md">
                                            <div class="text-sm font-medium text-black mt-2  ">Average <br/> Star Rating</div>
                                        </div>      
                    
                                        <div class="flex items-center justify-center mt-3">
                                            <div class="text-3xl font-bold text-black"> 
                                            { total_rating ?
                                                <span>{total_rating.toFixed(1)}</span>: ""
                                            } 
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-center text-[16px] xl:text-[15px] 2xl:text-[15px] space-x-1">
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                            <i class="fa-solid fa-star text-yellow-400"></i>
                                        </div>
    
                                        <div class="text-black mt-3 pb-2"> 
                                            <i class="fa-brands fa-google text-[18x] mr-2"></i> 
                                            <i class="fa-brands fa-facebook-f text-[18px] mr-2"></i>
                                            <i class="fa-brands fa-yelp text-[18x]"></i> 
                                        </div>
                                    </div>
                                    
    
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="w-full flex items-center px-10 py-4 mt-10 mb-10 border-t border-b border-solid border-[#e5e5e1]">
                    <div class="min-w-0 flex-1"> </div> 
                    <div class="flex items-center ml-auto space-x-4">
                        <form onSubmit={(e)=>e.preventDefault={filter_data}} enctype="multipart/form-data" class="w-full flex items-center space-x-3">	 
                            <div class="w-full flex items-center space-x-3 min-w-[16rem]">
                                <span class="mr-1">Source by </span>
                                <select onChange="{() => getreviewcount()}" name="source" id="source" class="w-[8rem] bg-white text-gray-700 border border-gray-600 rounded-xl py-1.5 px-2.5 leading-tight ">
                                    <option value="All" class="">All</option>
                                    <option value="Google" class="">Google</option> 
                                    <option value="Facebook" class="">Facebook</option>
                                    <option value="Yelp" class="">Yelp</option>
                                   
                                </select>
                            </div>

                            <div class="w-full flex items-center space-x-3 min-w-[16rem]">
                                <span class="mr-1">Rate by </span>
                                <select name="rate_by" id="rate_by" onChange="{() => getreviewcount()}" class="w-[8rem] bg-white text-gray-700 border border-gray-600 rounded-xl py-1.5 px-2.5 leading-tight ">
                                    <option value="All" class="">All</option>
                                    <option value="5" class="">5</option> 
                                    <option value="4" class="">4</option>
                                    <option value="3" class="">3</option>
                                    <option value="2" class="">2</option>
                                    <option value="1" class="">1</option>
                                    
                                </select>
                            </div>
                            
                            <div class="w-full flex items-center justify-center space-x-5"> 
                                    <span class="flex w-36"><strong class="mr-1.5">Filter By:</strong> Start </span>
                                    <input max="{currentDate}" type="date" name="start_date" id="start_date" required 
                                    class="w-38 bg-white text-gray-700 border border-solid border-gray-600 rounded-xl py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
                                    <span>To </span>
                                    <input max="{currentDate}" type="date" name="end_date" id="end_date" required 
                                    class="w-38 bg-white text-gray-700 border border-solid border-gray-600 rounded-xl py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
                                    <input type="submit" value="Go" class="cursor-pointer rounded-full bg-primarycolor-500 hover:bg-secondarycolor-500 px-4 py-2 text-md font-normal text-white shadow-xl"/> 
                            </div> 
                        </form>    
                    </div>                      
                </div>
                
    
                <div class="w-full px-10 mt-8">

                    <div class="grid grid-cols-1   lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-6 py-0 xl:py-10">
                        { reviews_count ? reviews_count.map((item)=>( 
                         
                        <div class="flex items-center  p-4 rounded-lg shadow-lg bg-white">
                            <div class="p-3 mr-4 text-black bg-[white] text-lg rounded-full flex-none lg:cols-3 md:cols-6 sm:cols-6">
                                { item.key=='Google'  ?
                                (<FaGoogle/>)
                                : item.key=='Facebook'? (
                                    <FaFacebook/>
                                )
                                
                               : <i class="fa-brands fa-yelp"></i>} 
                            </div>
                            <div>
                              <p class="text-[18px] font-[600] text-gray-800 mb-0">{item.key}</p>
                              <p class="text-[32px] font-[700] text-black">{item.value}</p>
                            </div>
                          </div>
                        )): ""}
                        
                      
                    </div>

                    

                    <div class="w-full grid grid-cols-4 2xl:grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-2 mt-5">
                    {toggle ?   <Modal toggle={toggle} setToggle={setToggle}  loadremaining={loadremaining} setText={setText} text={text}/>: ""}
                           
                            {  main_columnheader  ? main_columnheader.map((item)=>(
                                 
 

                                <div class="relative flex flex-col items-start group bg-[white]  p-10 rounded-lg border border-gray-200 pt-15 shadow-xl shadow-gray-300  gap-4 ">                                     
                                    <div class="w-full flex items-center justify-between mt-0 ">
                                        <div class="flex items-center lg:cols-3 md:cols-6 sm:cols-12">
                                            <div class="">
                                                <div class="inline-flex px-3 py-1 text-[22px] capitalize font-medium leading-normal rounded-[30px] bg-[#C0B8FE] text-[blue]">
                                                    {item.source}
                                                </div> 
                                            </div>
                                            <div class="p-2 ml-3 bg-[#f5f5eb] rounded-full hidden">
                                                <i class="fa-solid fa-globe text-[20px]"></i>
                                            </div>                                            
                                        </div>                                         
                                        <div class=" w-1/2  items-center  "> 
                                            <div class="text-[14px] font-[600] flex flex-row gap-2"><FaCalendarAlt className='mt-1'/> {item.date}</div>
                                        </div>
                                    </div>
                                    <div class="w-full flex items-start justify-between1 mt-5 relative">
                                        <div class="flex flex-row flex-wrap items-center gap-5 text-[14px] 2xl:text-[15px]">
                                            <div class="w-full flex flex-row gap-4 ml-4">
                                                <FaStar/> {item.rating}
                                            </div> 
                                            <div class="flex flex-wrap items-center gap-3 text-[12px] 2xl:text-[15px]">
                                                <div class="w-full flex gap-3"><i class="fa-solid fa-message text-[15px] mr-2"></i>
                                                    {/* { item.review!='' && item.review.length > 14 ?(
                                                    {main_columnheader.review.substring(0,30)} ...
                                                        <a href="#!" title="View More" on:click={() =>loadremaining(main_columnheader.review)  }><i class="fa-solid fa-eye"></i></a> 
                                                        {:else}        
                                                            {#if main_columnheader.review == '' || main_columnheader.review == ' ' || main_columnheader.review == '-'}
                                                                    ---
                                                            {:else}
                                                                {main_columnheader.review} 
                                                            {/if}
                                                     ) : ""}  */}
                                                     <FaMessage className='mt-2'/>
                                                     {item.review != '' && item.review.length > 14 ? (
                                                    <div className='flex flex-row gap-0'>  <span className='mt-1.5'>{item.review.substring(0,30)}...</span><GrFormView onClick={()=>loadremaining(item.review.substring(0,200))} className='text-4xl text-green'/></div>
                                                    ):""}
                                                    
                                                </div> 
                                            </div>
                                        </div>                                         
                                    </div>                                     

                                </div>

 
                                
                              )):  " "}
                        
                        </div>
                        </div>
                        </div>
                        </div>
)
}

export default Review