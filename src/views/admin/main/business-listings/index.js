import React, { useEffect, useState } from 'react';

const BusinessListings = () => {
  const [data1, setData1] = useState([]);
  async function getData(data1) {
    let report_id = 2042004; // Chess House Dental Practice
    const apiURL =
      'https://app.legaciestechno.com/brightlocal/Examples/CitationTracker/citation_tracker_all.php?report_id=' +
      report_id;

    // console.log(apiURL);
    const response = await fetch(apiURL);
    const res = await response.json();
    // console.log(res)
    setData1(res);
    console.log(data1);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="w-full p-0">
      <div class="mb-10 mt-5 w-full px-10">
        <div class="mb-4 w-full">
          <h2 class="text-black mb-2 text-base font-[700]">
            Local Business Listings{' '}
            <span class="text-black text-[11px] font-semibold text-opacity-50">
              {' '}
            </span>
          </h2>
          <div class="text-[15px] leading-normal text-[blue]">
            Business Listings Tracker looks for your business information on the
            most important business listing sites in the selected country and
            lists the details here. Inaccuracies and incomplete business
            information are also highlighted.
          </div>
        </div>

        <div class="pt-15 relative rounded-lg border border-gray-200 bg-[#F3F9FF] p-10 shadow-xl shadow-gray-300">
          <div class="grid grid-cols-1 gap-5 lg:grid-cols-5">
            <div class="w-full">
              <div class="grid grid-cols-1 gap-2">
                <div class="min-h[250px] w-full rounded-[10px] border-none bg-[#E3F5FF] p-2">
                  <div class="mb-1 flex items-center justify-center space-x-2">
                    <div class="text-lg font-bold  text-[black] text-opacity-80">
                      Business Listings Score
                    </div>
                  </div>
                  <div class="flex items-center justify-center ">
                    {data1 ? (
                      <div class="text-4xl font-bold text-[#00129F] ">
                        {data1.keyCitationScore ? data1.keyCitationScore : '0'}
                        /100
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div class="min-h[250px] w-full rounded-[10px] border-none bg-[#E5ECF6] p-2">
                  <div class="mb-1 flex items-center justify-center space-x-2">
                    <div class="text-lg font-bold  text-[black] text-opacity-80 ">
                      Percentage Found
                    </div>
                  </div>
                  <div class="flex items-center justify-center ">
                    {data1 ? (
                      <div class="text-4xl font-bold text-[#00129F] ">
                        {data1.percentage_found ? data1.percentage_found : '0'}%
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className="min-h[450px] w-full rounded-[10px] border-none bg-[#E5ECF6]">
                  <span class="text-black  mr-2 flex justify-center text-center text-[19px] font-semibold">
                    Summary
                  </span>
                  <div className=" grid grid-cols-2 gap-4 p-2">
                    <div className=" p-1">
                      <div class="w-full rounded-[12px]  bg-white p-3">
                        <div class="space-x mb-2 flex items-center justify-center">
                          <div class="flex flex-col text-[9px] text-sm font-medium text-[#00129F]">
                            {/* <span class="text-black mr-2 font-semibold text-center">Summary</span> */}
                            <span class=" py-.5 rounded bg-[#E3F5FF] px-2 text-center text-[12px] font-semibold  text-[#00129F]">
                              Found
                            </span>
                          </div>
                        </div>
                        <div class="mt-5 flex items-center justify-center">
                          {data1 ? (
                            <div class="text-[30px] font-bold text-[#363987]">
                              {data1.citations_summery_found
                                ? data1.citations_summery_found
                                : '0'}
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                    <div className=" p-1">
                      <div class="w-full rounded-[12px]  bg-white p-3">
                        <div class="space-x mb-2 flex items-center justify-center">
                          <div class="flex flex-col text-sm font-medium text-[#363987]">
                            {/* <span class="text-black mr-2 font-semibold text-center">Summary</span> */}
                            <span class="py-.5  rounded bg-[#E3F5FF] px-2 text-center text-[12px] font-semibold text-[#00129F] text-white">
                              Not Found
                            </span>
                          </div>
                        </div>
                        <div class="mt-5 flex items-center justify-center">
                          {data1 ? (
                            <div class="text-[30px] font-bold text-[gray]">
                              {data1.citations_summery_not_found
                                ? data1.citations_summery_not_found
                                : '0'}
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                    <div className=" p-1">
                      <div class="w-full rounded-[12px]  bg-white p-3">
                        <div class="space-x mb-2 flex items-center justify-center">
                          <div class="flex flex-col text-sm font-medium text-[#363987]">
                            {/* <span class="text-black mr-2 font-semibold text-center">Summary</span> */}
                            <span class="py-.5 rounded bg-[#E3F5FF] px-2 text-center text-[12px] font-semibold text-[#00129F] text-white">
                              Correct
                            </span>
                          </div>
                        </div>
                        <div class="mt-5 flex items-center justify-center">
                          {data1 ? (
                            <div class="text-[30px] font-bold text-[green]">
                              {data1.citations_summery_correct
                                ? data1.citations_summery_correct
                                : '0'}
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                    <div className=" p-1">
                      <div class="w-full rounded-[12px]  bg-white p-3">
                        <div class="space-x mb-2 flex items-center justify-center">
                          <div class="flex flex-col text-sm font-medium text-[#363987]">
                            {/* <span class="text-black mr-2 font-semibold text-center">Summary</span> */}
                            <span class="py-.5 rounded bg-[#E3F5FF] px-2 text-center text-[12px] font-semibold  text-red">
                              Nap Eroors
                            </span>
                          </div>
                        </div>
                        <div class="mt-5 flex items-center justify-center">
                          {data1 ? (
                            <div class="text-[30px] font-bold text-[red]">
                              {data1.citations_summery_with_nap_errors
                                ? data1.citations_summery_with_nap_errors
                                : '0'}
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="w-full rounded-[10px] border border-gray-500 bg-white p-3">
              <div class="mb-2 flex items-center justify-start space-x-2">
                <div class="flex text-sm font-medium text-[#363987]">
                  <span class="text-black mr-2 font-semibold">Summary:</span>
                  <span class="text-black py-.5 rounded bg-[#363987] px-2 font-semibold text-white">
                    Found
                  </span>
                </div>
              </div>
              <div class="mt-10 flex items-center justify-center">
                {data1 ? (
                  <div class="text-5xl font-bold text-[#363987]">
                    {data1.citations_summery_found
                      ? data1.citations_summery_found
                      : '0'}
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div class="w-full rounded-[10px] border border-gray-500 bg-white p-3">
              <div class="mb-2 flex items-center justify-start space-x-2">
                <div class="flex text-sm font-medium text-[#838383]">
                  <span class="text-black mr-2 font-semibold">Summary:</span>
                  <span class="text-black py-.5 rounded bg-[#838383] px-2 font-semibold text-white">
                    Not Found
                  </span>
                </div>
              </div>
              <div class="mt-10 flex items-center justify-center">
                {data1 ? (
                  <div class="text-5xl font-bold text-[#838383]">
                    {data1.citations_summery_not_found
                      ? data1.citations_summery_not_found
                      : '0'}
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div class="w-full rounded-[10px] border border-gray-500 bg-white p-3">
              <div class="mb-2 flex items-center justify-start space-x-2">
                <div class="flex text-sm font-medium text-[#0b9229]">
                  <span class="text-black mr-2 font-semibold">Summary:</span>
                  <span class="text-black py-.5 rounded bg-[#0b9229] px-2 font-semibold text-white">
                    Correct
                  </span>
                </div>
              </div>
              <div class="mt-10 flex items-center justify-center">
                {data1 ? (
                  <div class="text-5xl font-bold text-[#0b9229] ">
                    {data1.citations_summery_correct
                      ? data1.citations_summery_correct
                      : '0'}
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div class="w-full rounded-[10px] border border-gray-500 bg-white p-3">
              <div class="mb-2 flex items-center justify-start space-x-2">
                <div class="flex text-sm font-medium text-[#c70509]">
                  <span class="text-black mr-2 font-semibold">Summary:</span>
                  <span class="text-black py-.5 rounded bg-[#c70509] px-2 font-semibold text-white">
                    With NAP Errors
                  </span>
                </div>
              </div>
              <div class="mt-10 flex items-center justify-center">
                {data1 ? (
                  <div class="text-5xl font-bold text-[#c70509]">
                    {data1.citations_summery_with_nap_errors
                      ? data1.citations_summery_with_nap_errors
                      : '0'}
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div> */}
            <div className="h-[500px] w-[1100px] w-full overflow-y-auto rounded-[10px] border border-gray-500 bg-white p-3  ">
              <h2 class="text-[#00129F] mb-2 text-base font-[700]">
                Live Business Listings{' '}
              </h2>
              <table class="w-full     divide-y divide-blue-200 ">
                <thead className='w-[#E3F5FF]'>
                  <tr>
                    <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Name
                    </th>
                    <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Date
                    </th>
                    <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Rating Value
                    </th>
                    <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Rating
                    </th>
                    <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Network
                    </th>
                    <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Satus
                    </th>
                    <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody class="w-full  bg-[white]">
                  {/* <tr>
      <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
      <td class="px-6 py-4 whitespace-nowrap">30</td>
      <td class="px-6 py-4 whitespace-nowrap">New York</td>
    </tr>
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">Jane Smith</td>
      <td class="px-6 py-4 whitespace-nowrap">25</td>
      <td class="px-6 py-4 whitespace-nowrap">Los Angeles</td>
    </tr> */}
                  {data1 &&
                    data1.active_citations?.map((row) => (
                      <tr>
                        <td class="px-2 py-4 text-[#818181]">
                        
                        {row['source']}</td>
                        <td class="px-2 py-4 text-[#818181]">
                          {/* <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>{' '} */}
                          {row['date-identified']}
                        </td>
                        <td class="px-2 py-4 text-[#818181]">
                          {/* <i class="fa-regular fa-window-restore mr-2 text-[15px]"></i>{' '} */}
                          {row['domain-authority']}/100
                        </td>
                        <td class="px-2 py-4 text-[#818181]">
                          
                          {row['citation-value']}
                        </td>
                        <td class="px-2 py-4 text-[#818181]">
                          {/* <i class="fa-solid fa-globe  mr-2 text-[15px]"></i>{' '} */}
                          {row['site-type']}
                        </td>
                        <td className='px-2 py-4 text-[#818181]'>
                        {row['need_to_fix'].length > 0 ? (
                        <a
                          href="#!"
                          // on:click={()=>loadpopup(row)}
                        >
                          <i class="fa-solid fa-triangle-exclamation text-[24px] text-red-500"></i>
                        </a>
                      ) : (
                        <i class="fa-solid fa-circle-check text-[24px] text-green-500"></i>
                      )}
                        </td>
                        <td class="px-2 py-4 text-[#818181]">
                          <a
                            href="{row['url']}"
                            target="_blank"
                            class="inline-flex items-center rounded-[30px] bg-[#E3F5FF] px-5 py-2 text-[13px] font-medium leading-normal text-[#00129F] hover:bg-[#d5e3fa] hover:text-[#1c498e]"
                          >
                            View Link{' '}
                            <i class="fa-solid fa-arrow-right ml-2 text-[15px]"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            
          </div>
          <div className=" w-[full] mt-10 w-full  rounded-[10px] border border-gray-500 bg-white p-3  ">
              <h2 class="text-[#00129F] mb-2 text-base font-[700]">
                 Business Listings{' '}
              </h2>
              <table class="w-full     divide-y divide-blue-200 ">
                <thead className='w-[#E3F5FF]'>
                  <tr>
                  <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Site/Directory
                    </th>
                    <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Name
                    </th>
                    <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Adress
                    </th>
                    <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Postcode
                    </th>
                    <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Phone
                    </th>
                    {/* <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Network
                    </th> */}
                    <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Satus
                    </th>
                    {/* <th class="bg-gray-50 px-2 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#00129F]">
                      Link
                    </th> */}
                  </tr>
                </thead>
                <tbody class="w-full bg-[white]">
                  {/* <tr>
      <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
      <td class="px-6 py-4 whitespace-nowrap">30</td>
      <td class="px-6 py-4 whitespace-nowrap">New York</td>
    </tr>
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">Jane Smith</td>
      <td class="px-6 py-4 whitespace-nowrap">25</td>
      <td class="px-6 py-4 whitespace-nowrap">Los Angeles</td>
    </tr> */}
                  {data1 &&
                    data1.active_citations?.map((row) => (
                      <tr>
                        <td class="px-2 py-4 text-[#818181]">
                        
                        {row['source']}</td>
                        <td class="px-2 py-4 text-[#818181] w-[190px] ">
                          {/* <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>{' '} */}
                          {row['business-name']}
                        </td>
                        <td class="px-2 py-4 text-[#818181] w-[190px]">
                          {/* <i class="fa-regular fa-window-restore mr-2 text-[15px]"></i>{' '} */}
                          {row['address']}
                        </td>
                        <td class="px-2 py-4 text-[#818181]">
                          
                          {row['postcode']}
                        </td>
                        <td class="px-2 py-4 text-[#818181]">
                          {/* <i class="fa-solid fa-globe  mr-2 text-[15px]"></i>{' '} */}
                          {row['telephone']}
                        </td>
                        <td className='px-2 py-4 text-[#818181] text-[center]'>
                        {row['need_to_fix'].length > 0 ? (
                        <a
                          href="#!"
                          // on:click={()=>loadpopup(row)}
                        >
                          <i class="fa-solid fa-triangle-exclamation text-[24px] text-red-500"></i>
                        </a>
                      ) : (
                        <i class="fa-solid fa-circle-check text-[24px] text-green-500"></i>
                      )}
                        </td>
                        {/* <td class="px-2 py-4 text-[#818181]">
                          <a
                            href="{row['url']}"
                            target="_blank"
                            class="inline-flex items-center rounded-[30px] bg-[#E3F5FF] px-5 py-2 text-[13px] font-medium leading-normal text-[#00129F] hover:bg-[#d5e3fa] hover:text-[#1c498e]"
                          >
                            View Link{' '}
                            <i class="fa-solid fa-arrow-right ml-2 text-[15px]"></i>
                          </a>
                        </td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
        </div>

        {/* <div class="mb-4 mt-10 w-full">
          <h2 class="text-black mb-2 text-base font-[700]">
            Live Business Listings{' '}
          </h2>
        </div> */}

        {/* <div class="w-full">
          <div class="grid w-full grid-cols-4 gap-5 2xl:grid-cols-4">
            {data1 &&
              data1.active_citations?.map((row) => (
                <div>
                  <div class="group relative flex flex-col items-start gap-4 rounded-[20px] border border-solid border-[#8d2995] bg-white p-4 2xl:rounded-[30px] 2xl:p-6">
                    <div class="mt-0 flex w-full items-center justify-between">
                      <div class="text-black mb-3 flex w-full items-center justify-start text-left text-left font-semibold">
                      
                      { /\.co\.uk/.test(row['source']) ? ( 
                                            <img src="/img/listings/{row['source'].split('.co.uk').join('.png')} " alt="" class="w-[30px] h-[30px] mr-2 capitalize"/>)
                                         : /\.com/.test(row['source']) ? (  
                                            <img src="/img/listings/{row['source'].split('.com').join('.png')} " alt="" class="w-[30px] h-[30px] mr-2 capitalize"/>)
                                         : /\.net/.test(row['source']) ? (  
                                            <img src="/img/listings/{row['source'].split('.net').join('.png')} " alt="" class="w-[30px] h-[30px] mr-2 capitalize"/> )     
                                         : ""}                          
                                       
                                         { /\.co\.uk/.test(row['source']) ?
                                            (row['source'].split('.co.uk').join('')) 
                                         : /\.com/.test(row['source']) ?
                                            (row['source'].split('.com').join('')) 
                                         : /\.net/.test(row['source']) ? (
                                            row['source'].split('.net').join(''))    
                                        :"" }     
                                                            
                                        
                                         
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-3.5 text-[14px] 2xl:text-[15px]">
                      <div class="flex w-full">
                        <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>{' '}
                        {row['date-identified']}
                      </div>
                      <div class="flex w-full">
                        <i class="fa-regular fa-window-restore mr-2 text-[15px]"></i>{' '}
                        {row['domain-authority']}/100
                      </div>
                      <div class="flex w-full">
                        <i class="fa-solid fa-star mr-2 text-[15px]"></i>{' '}
                        {row['citation-value']}
                      </div>
                      <div class="flex w-full">
                        <i class="fa-solid fa-globe  mr-2 text-[15px]"></i>{' '}
                        {row['site-type']}
                      </div>
                    </div>
                    <div class="mt-2 flex w-full items-center justify-between">
                      <a
                        href="{row['url']}"
                        target="_blank"
                        class="inline-flex items-center rounded-[30px] bg-[#1c498e] px-5 py-2 text-[13px] font-medium leading-normal text-white hover:bg-[#d5e3fa] hover:text-[#1c498e]"
                      >
                        View Link{' '}
                        <i class="fa-solid fa-arrow-right ml-2 text-[15px]"></i>
                      </a>
                    </div>

                    <div class="absolute right-5 top-5">
                      {row['need_to_fix'].length > 0 ? (
                        <a
                          href="#!"
                          // on:click={()=>loadpopup(row)}
                        >
                          <i class="fa-solid fa-triangle-exclamation text-[24px] text-red-500"></i>
                        </a>
                      ) : (
                        <i class="fa-solid fa-circle-check text-[24px] text-green-500"></i>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div> */}

         {/* <div class="mb-4 mt-10 w-full">
           <h2 class="text-black text-base font-[700] mb-2">Not Found </h2>             
        </div>  */}

        {/* <div class="main_tabs blisting_tabs w-full">
          {/* <Tabs>
                
                <div class="w-full flex-wrap">
                    <div class="flex items-center justify-between">
                        <div class="flex">
                            <div class="text-black text-base font-[700]">Business Listings</div>
                        </div>
                        <div class="flex ml-auto bg-[#d3f26a] px-3 rounded-md">
                            <Tab label="All Listings"/>
                            <Tab label="With NAP issues" />
                            <Tab label="To be added" />
                        </div>
                    </div>
                </div>
                
                 
                    <TabContent>
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-left rtl:text-right">
                                <thead class="font-semibold uppercase1 bg-[#1c498e] text-white ">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Site/Directory
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Address
                                        </th>                        
                                        <th scope="col" class="px-6 py-3">
                                            
                                            Postcode
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Phone
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Status
                                        </th>                         
                                    </tr>
                                </thead>
                                <tbody>
            
                                    {  data1.topDirectories.length > 0 && data1.topDirectories.map((row)=>( 
                                           
                                       
                                        <tr class="bg-white border-b border-solid border-[#e5e5e1]">
                                            <th scope="row" class="px-6 py-4 text-gray-900 capitalize">
                                                {row['source'].split('.com').join('')}    
                                            </th>
                                            <td class="px-6 py-4">
                                                {row['business-name'] !== 'n/a' ? row['business-name'] : ''}
                                            </td>
                                            <td class="px-6 py-4"> 
                                                {row['address'] ? row['address'] : ''}
                                            </td>
                                            <td class="px-6 py-4">
                                                {row['postcode'] !== 'n/a' ? row['postcode'] : ''}
                                            </td>
                                            <td class="px-6 py-4">
                                                {row['telephone'] !== 'n/a' ? row['telephone'] : ''}
                                            </td>
                                            <td class="px-6 py-4">
                                                { row['need_to_fix'].length > 0 ?
                                                    <a href="#!" onClick={()=>loadpopup(row)}><i class="fa-solid fa-triangle-exclamation text-red-500 text-[24px]"></i></a>
                                                :   
                                                    ""
                                                }
                                               
                                            </td>
                                        </tr>
                                        
                                    ))} 
                
                                </tbody>
                            </table>
                        </div>
                    </TabContent>
                    <TabContent>
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-left rtl:text-right">
                                <thead class="font-semibold uppercase1 bg-[#1c498e] text-white">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Site/Directory
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Address
                                        </th>                        
                                        <th scope="col" class="px-6 py-3">
                                            <!-- Zip/Post -->
                                            Postcode
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Phone
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Status
                                        </th>                         
                                    </tr>
                                </thead>
                                <tbody>
            
                                    {#if data1 && data1.topDirectories && data1.topDirectories.length > 0}
                                        {#each data1.topDirectories as row}   
                                            {#if row['need_to_fix'].length > 0}
                                                <tr class="bg-white border-b border-solid border-[#e5e5e1]">
                                                    <th scope="row" class="px-6 py-4 text-gray-900 capitalize">
                                                        {row['source'].split('.com').join('')}    
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        {row['business-name'] !== 'n/a' ? row['business-name'] : ''}
                                                    </td>
                                                    <td class="px-6 py-4"> 
                                                        {row['address'] ? row['address'] : ''}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {row['postcode'] !== 'n/a' ? row['postcode'] : ''}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {row['telephone'] !== 'n/a' ? row['telephone'] : ''}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {#if row['need_to_fix'].length > 0}
                                                            <a href="#!" on:click={()=>loadpopup(row)}><i class="fa-solid fa-triangle-exclamation text-red-500 text-[24px]"></i></a>
                                                        {:else}    
                                                            <!-- <i class="fa-solid fa-circle-check text-green-500 text-[24px]"></i> -->
                                                        {/if}
                                                        <!-- <a href="#!" on:click={loadpopup}><i class="fa-solid fa-triangle-exclamation text-red-500 text-[24px]"></i></a> -->
                                                    </td>
                                                </tr>
                                            {/if}
                                        {/each}
                                    {/if} 
                
                                </tbody>
                            </table>
                        </div>
                    </TabContent>
                    <TabContent>
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-left rtl:text-right">
                                <thead class="font-semibold uppercase1 bg-[#1c498e] text-white">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Site/Directory
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Address
                                        </th>                        
                                        <th scope="col" class="px-6 py-3">
                                            <!-- Zip/Post -->
                                            Postcode
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Phone
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Status
                                        </th>                         
                                    </tr>
                                </thead>
                                <tbody>
            
                                    {#if data1 && data1.topDirectories && data1.topDirectories.length > 0}
                                        {#each data1.topDirectories as row}   
                                                <!-- {console.log(row['business-name'],row['address'],row['postcode'],row['telephone'])} -->
                                            {#if row['business-name'] == 'n/a' && row['address'] == '' && row['postcode'] == 'n/a' && row['telephone'] == 'n/a'}
                                                <tr class="bg-white border-b border-solid border-[#e5e5e1]">
                                                    <th scope="row" class="px-6 py-4 text-gray-900 capitalize">
                                                        {row['source'].split('.com').join('')}    
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        {row['business-name'] !== 'n/a' ? row['business-name'] : '-'}
                                                    </td>
                                                    <td class="px-6 py-4"> 
                                                        {row['address'] ? row['address'] : '-'}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {row['postcode'] !== 'n/a' ? row['postcode'] : '-'}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {row['telephone'] !== 'n/a' ? row['telephone'] : '-'}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                      -
                                                    </td>
                                                </tr>
                                            {/if} 
                                        {/each}
                                    {/if} 
                
                                </tbody>
                            </table>
                        </div>
                    </TabContent>
                
            </Tabs> */}
      </div>
    </div>
  );
};
export default BusinessListings;
