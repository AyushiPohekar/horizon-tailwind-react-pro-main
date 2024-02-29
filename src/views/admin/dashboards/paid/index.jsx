import React from 'react';

const Paid = () => {
  function get_filter_paid(){
    let search_type = document.getElementById('search_by_paid').value;
    if(search_type == 'custom'){
        let element = document.getElementById('custom_search_paid');
        element.classList.remove('hidden'); 
    } else {
        let element = document.getElementById('custom_search_paid');
        element.classList.add('hidden'); 
    }
}

  function open_popover(id){  
    let div_block = document.getElementById(id);
   // alert(div_block.style.display);
    if (div_block.style.display === "none" || div_block.style.display === "") {
        div_block.style.display = "block";
    } else {
        div_block.style.display = "none";
    }
}

  return (
    <>
      <div class="relative w-full">
        <div class="absolute left-0 top-0 z-50 flex h-full w-full items-start justify-center bg-white/80 pt-96">
          <div class=" text-center text-3xl font-bold">
            There is no Live campaign Currently Running
          </div>
        </div>

        <div class="mb-8 mt-5 w-full items-center justify-between border-b border-solid border-[#e5e5e1] px-10 pb-4 lg:flex">
          <div class="relative w-full ">
            <div class="relative w-full rounded-lg bg-[#f5f5eb] p-5">
              <div class="grid grid-cols-1 gap-5 lg:grid-cols-5">
                <div class="w-full">
                  <div class="grid grid-cols-1 gap-2">
                    <div class="w-full rounded-[10px] border border-gray-500 bg-white p-2">
                      <div class="mb-1 flex items-center justify-center space-x-2">
                        <div class="text-black text-sm font-medium text-opacity-80 ">
                          Total Leads
                        </div>
                      </div>
                      <div class="flex items-center justify-center ">
                        <div class="text-2xl font-bold text-gray-900 ">05</div>
                      </div>
                    </div>
                    <div class="w-full rounded-[10px] border border-gray-500 bg-white p-2">
                      <div class="mb-1 flex items-center justify-center space-x-2">
                        <div class="text-black text-sm font-medium text-opacity-80 ">
                          Cost per Lead
                        </div>
                      </div>
                      <div class="flex items-center justify-center ">
                        <div class="text-2xl font-bold text-gray-900 ">
                          27.95
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full rounded-[10px] border border-gray-500 bg-white p-3">
                  <div class="mb-2 flex items-center justify-start space-x-2">
                    <img
                      class="mb-2 w-8"
                      src="/img/pound-sterling.png"
                      alt=""
                    />
                    <div class="text-sm font-medium text-gray-400 ">Spend</div>
                  </div>
                  <div class="mt-5 flex items-center justify-center">
                    <div class="text-2xl font-bold ">£922.34</div>
                  </div>
                </div>
                <div class="w-full rounded-[10px] border border-gray-500 bg-white p-3">
                  <div class="mb-2 flex items-center justify-start space-x-2">
                    <img class="mb-2 w-8" src="/img/clicks.png" alt="" />
                    <div class="text-sm font-medium text-gray-400 ">Clicks</div>
                  </div>
                  <div class="mt-5 flex items-center justify-center">
                    <div class="text-2xl font-bold ">159</div>
                  </div>
                </div>
                <div class="w-full rounded-[10px] border border-gray-500 bg-white p-3">
                  <div class="mb-2 flex items-center justify-start space-x-2">
                    <img class="mb-2 w-8" src="/img/Impressions.png" alt="" />
                    <div class="text-sm font-medium text-gray-400 ">
                      Impressions
                    </div>
                  </div>
                  <div class="mt-5 flex items-center justify-center">
                    <div class="text-2xl font-bold ">2803</div>
                  </div>
                </div>
                <div class="w-full rounded-[10px] border border-gray-500 bg-white p-3">
                  <div class="mb-2 flex items-center justify-start space-x-2">
                    <img
                      class="mb-2 w-7"
                      src="https://cdn-icons-png.flaticon.com/512/4563/4563244.png"
                      alt=""
                    />
                    <div class="text-sm font-medium text-gray-400 ">
                      Avg.CPC
                    </div>
                  </div>
                  <div class="mt-5 flex items-center justify-center">
                    <div class="text-2xl font-bold ">£5.80</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-10 w-full items-center justify-between border-b border-solid border-[#e5e5e1] px-10 pb-4 lg:flex">
          <div class="min-w-0 flex-1 pr-10">
            {/* <Search light /> */}Search
          </div>
          <div class="text-black text-sm">
            <form
              enctype="multipart/form-data"
              class="mr-4 w-full items-center space-x-3 lg:flex"
            >
              <span>
                <strong class="mr-1.5">Filter By:</strong> Start{' '}
              </span>
              <input
                max="{currentDate}"
                type="date"
                name="start_date"
                id="start_date"
                required
                class="w-38 border-1 rounded-xl border-solid border-gray-600 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
              />
              <span>To </span>
              <input
                max="{currentDate}"
                type="date"
                name="end_date"
                id="end_date"
                required
                class="w-38 border-1 rounded-xl border-solid border-gray-600 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
              />
              <input
                type="submit"
                value="Go"
                class="bg-primarycolor-500 hover:bg-secondarycolor-500 text-md cursor-pointer rounded-full px-4 py-2 font-normal text-white shadow-xl"
              />
            </form>
          </div>
          <div class="ml-auto flex items-center space-x-2 sm:space-x-3"></div>
        </div>
        <div class="mb-10 mt-10 flex w-full items-center border-b border-t border-solid border-[#e5e5e1] px-10 py-4">
          <div class="min-w-0 flex-1">
            {/* <Search light /> */}Search
          </div>
          <div class="ml-auto flex items-center space-x-4">
            <div
              class="flex hidden w-full items-center justify-center space-x-5"
              id="custom_search_paid"
            >
              <span class="flex w-36">
                <strong class="mr-1.5">Filter By:</strong> Start{' '}
              </span>
              <input
                max="{currentDate}"
                type="date"
                name="start_date"
                id="start_date"
                required
                class="w-38 rounded-xl border border-solid border-gray-600 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
              />
              <span>To </span>
              <input
                max="{currentDate}"
                type="date"
                name="end_date"
                id="end_date"
                required
                class="w-38 rounded-xl border border-solid border-gray-600 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
              />
              <input
                type="submit"
                value="Go"
                class="bg-primarycolor-500 hover:bg-secondarycolor-500 text-md cursor-pointer rounded-full px-4 py-2 font-normal text-white shadow-xl"
              />
            </div>

            <div class="flex items-center  ">
              <div class="ml-auto flex gap-5 rounded-md px-5 py-2">
                <div class="flex items-center">
                  <strong class="text-black pl-2 text-lg font-bold">
                    Search by{' '}
                  </strong>
                </div>
                <span class="text-black min-w-[20rem] rounded-md border border-solid border-[#d0efdb] bg-white p-2 text-sm">
                  <select
                    // onChange={() => get_filter()}
                    name="search_by"
                    id="search_by"
                    class="shadow-mdd w-full rounded-lg border-0 border-gray-400 bg-white px-4 py-1.5 font-normal leading-tight focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="--" class="">
                      --
                    </option>
                    <option value="30 days" class="">
                      Last 30 Days
                    </option>
                    <option value="60 days" class="">
                      Last 60 days
                    </option>
                    <option value="90 days" class="">
                      Last 90 Days
                    </option>
                    <option value="custom" class="">
                      Custom
                    </option>
                  </select>
                </span>
              </div>
            </div>

            <form
              enctype="multipart/form-data"
              class="flex w-full items-center space-x-3"
            >
              <div class="flex w-full min-w-[30rem] items-center space-x-3  rounded-md bg-[#d3f26a] px-3 py-2">
                <span class="text-black mr-1 w-24 whitespace-nowrap pl-2 text-lg font-bold">
                  Search by{' '}
                </span>
                <select
                  onChange={get_filter_paid}
                  name="search_by_paid"
                  id="search_by_paid"
                  class="shadow-mdd w-full rounded-lg border-0 border-gray-400 bg-white px-5 py-2.5 font-normal leading-tight focus:border-blue-500 focus:bg-white focus:outline-none"
                >
                  <option value="--" class="">
                    --
                  </option>
                  <option value="30 days" class="">
                    Last 30 Days
                  </option>
                  <option value="60 days" class="">
                    Last 60 days
                  </option>
                  <option value="90 days" class="">
                    Last 90 Days
                  </option>
                  <option value="custom" class="">
                    Custom
                  </option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <div class="mb-10 grid w-full grid-cols-1 gap-6 px-10 lg:grid-cols-3 2xl:gap-10">
          <div class="flex w-full flex-shrink-0 flex-col">
            <div class="mb-3 flex h-10 flex-shrink-0 items-center px-0">
              <span class="block text-[18px] font-[600]">Consult Booked</span>
              <span class="ml-2 flex h-5 w-5 items-center justify-center rounded bg-gray-500 bg-opacity-70 text-sm font-semibold text-white">
                2
              </span>
              <button class="bg-transperent hover:text-black ml-auto flex h-6 w-6 items-center justify-center rounded text-[#b0b0ae] hover:bg-white">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>

            <div class="overflow-auto1 flex flex-col gap-5">
              <div class="group relative flex flex-col items-start gap-4 rounded-[20px] border border-solid border-[#8d2995] bg-white  p-4 2xl:rounded-[30px] 2xl:p-6">
                <div class="mt-0 flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <div class="text-[16px] font-[600]">Campaign Call</div>
                    <div class="ml-3 rounded-full bg-[#f5f5eb] p-2">
                      <i class="fa-solid fa-phone text-[20px]"></i>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="text-[16px] font-[600]">
                      <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>{' '}
                      2024-01-18
                    </div>
                  </div>
                </div>
                <div class="justify-between1 relative mt-5 flex w-full items-start">
                  <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                    <div class="w-full">
                      <i class="fa-solid fa-user mr-2 text-[15px]"></i> --
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-envelope mr-2 text-[15px]"></i> --
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-phone mr-2 text-[15px]"></i>{' '}
                      347-9658-649
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-message mr-2 text-[15px]"></i>{' '}
                      Answered
                    </div>
                  </div>
                  <a
                    href="javascripct://"
                    onClick={() => open_popover('outcome_7')}
                    class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                  >
                    Status
                  </a>
                  <div
                    id="outcome_7"
                    class="status_drop absolute right-0 top-8 hidden w-[10rem] rounded-[10px] border border-solid border-[#ddd] bg-white p-3 shadow-sm"
                  >
                    <div class="w-full gap-3">
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          Consult Booked
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          New Leads
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          No Consultation
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          Existing Patient{' '}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-2 flex w-full items-center justify-between">
                  <div class=""></div>
                  <div class="inline-flex rounded-[30px] bg-[#d5e3fa] px-3 py-1 text-[13px] font-medium leading-normal text-[#1c498e]">
                    Booked
                  </div>
                </div>
              </div>

              <div class="group relative flex flex-col items-start gap-4 rounded-[20px] border border-solid border-[#ff601e] bg-white  p-4 2xl:rounded-[30px] 2xl:p-6">
                <div class="mt-0 flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <div class="text-[16px] font-[600]">Campaign Form</div>
                    <div class="ml-3 rounded-full bg-[#f5f5eb] p-2">
                      <i class="fa-solid fa-globe text-[20px]"></i>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="text-[16px] font-[600]">
                      <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>{' '}
                      2024-02-12
                    </div>
                  </div>
                </div>
                <div class="justify-between1 relative mt-5 flex w-full items-start">
                  <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                    <div class="w-full">
                      <i class="fa-solid fa-user mr-2 text-[15px]"></i> John
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-phone mr-2 text-[15px]"></i>{' '}
                      347-794-0747
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-envelope mr-2 text-[15px]"></i>{' '}
                      Mariepaule8394@Gmail.Com
                    </div>
                    <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                      <div class="w-full">
                        <i class="fa-solid fa-message mr-2 text-[15px]"></i> I
                        Would Like To Have A Quote ...
                      </div>
                    </div>
                  </div>
                  <a
                    href="javascripct://"
                    onClick={() => open_popover('outcome_8')}
                    class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                  >
                    Status
                  </a>
                  <div
                    id="outcome_8"
                    class="status_drop absolute right-0 top-8 hidden w-[10rem] rounded-[10px] border border-solid border-[#ddd] bg-white p-3 shadow-sm"
                  >
                    <div class="w-full gap-3">
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          Consult Booked
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          New Leads
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          No Consultation
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          Existing Patient{' '}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-2 flex w-full items-center justify-between">
                  <div class=""></div>
                  <div class="inline-flex rounded-[30px] bg-[#fff3e5] px-3 py-1 text-[13px] font-medium leading-normal text-[#ff540f]">
                    Booked
                  </div>
                </div>
              </div>

              <div class="group relative flex flex-col items-start gap-4 rounded-[20px] border border-solid border-[#95b721] bg-white p-4 2xl:rounded-[30px] 2xl:p-6">
                <div class="mt-0 flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <div class="text-[16px] font-[600]">Chatboat</div>
                    <div class="ml-3 rounded-full bg-[#f5f5eb] p-2">
                      <i class="fa-solid fa-robot text-[20px]"></i>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="text-[16px] font-[600]">
                      <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>{' '}
                      2024-02-14
                    </div>
                  </div>
                </div>
                <div class="justify-between1 relative mt-5 flex w-full items-start">
                  <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                    <div class="w-full">
                      <i class="fa-solid fa-user mr-2 text-[15px]"></i> Marie
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-phone mr-2 text-[15px]"></i>{' '}
                      347-794-0747
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-envelope mr-2 text-[15px]"></i>{' '}
                      Mariepaule8394@Gmail.Com
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-message mr-2 text-[15px]"></i> I
                      Would Like To Have A Quote ...
                    </div>
                  </div>
                  <a
                    href="javascripct://"
                    onClick={() => open_popover('outcome_9')}
                    class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                  >
                    Status
                  </a>
                  <div
                    id="outcome_9"
                    class="status_drop absolute right-0 top-8 hidden w-[10rem] rounded-[10px] border border-solid border-[#ddd] bg-white p-3 shadow-sm"
                  >
                    <div class="w-full gap-3">
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          Consult Booked
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          New Leads
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          No Consultation
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          Existing Patient{' '}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-2 flex w-full items-center justify-between">
                  <div class=""></div>
                  <div class="inline-flex rounded-[30px] bg-[#d3f26a] px-3 py-1 text-[13px] font-medium leading-normal text-[#398700]">
                    Booked
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex w-full flex-shrink-0 flex-col">
            <div class="mb-3 flex h-10 flex-shrink-0 items-center px-0">
              <span class="block text-[18px] font-[600]">New Leads</span>
              <span class="ml-2 flex h-5 w-5 items-center justify-center rounded bg-gray-500 bg-opacity-70 text-sm font-semibold text-white">
                1
              </span>
              <button class="bg-transperent hover:text-black ml-auto flex h-6 w-6 items-center justify-center rounded text-[#b0b0ae] hover:bg-white">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>

            <div class="overflow-auto1 flex flex-col gap-5">
              <div class="group relative flex flex-col items-start gap-4 rounded-[20px] border border-solid border-[#95b721] bg-white p-4 2xl:rounded-[30px] 2xl:p-6">
                <div class="mt-0 flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <div class="text-[16px] font-[600]">Chatboat</div>
                    <div class="ml-3 rounded-full bg-[#f5f5eb] p-2">
                      <i class="fa-solid fa-robot text-[20px]"></i>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="text-[16px] font-[600]">
                      <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>{' '}
                      2024-02-14
                    </div>
                  </div>
                </div>
                <div class="justify-between1 relative mt-5 flex w-full items-start">
                  <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                    <div class="w-full">
                      <i class="fa-solid fa-user mr-2 text-[15px]"></i> Marie
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-phone mr-2 text-[15px]"></i>{' '}
                      347-794-0747
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-envelope mr-2 text-[15px]"></i>{' '}
                      Mariepaule8394@Gmail.Com
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-message mr-2 text-[15px]"></i> I
                      Would Like To Have A Quote ...
                    </div>
                  </div>
                  <a
                    href="javascripct://"
                    onClick={() => open_popover('outcome_10')}
                    class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                  >
                    Status
                  </a>
                  <div
                    id="outcome_10"
                    class="status_drop absolute right-0 top-8 hidden w-[10rem] rounded-[10px] border border-solid border-[#ddd] bg-white p-3 shadow-sm"
                  >
                    <div class="w-full gap-3">
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          Consult Booked
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          New Leads
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          No Consultation
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          Existing Patient{' '}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-2 flex w-full items-center justify-between">
                  <div class=""></div>
                  <div class="inline-flex rounded-[30px] bg-[#d3f26a] px-3 py-1 text-[13px] font-medium leading-normal text-[#398700]">
                    Booked
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex w-full flex-shrink-0 flex-col">
            <div class="mb-3 flex h-10 flex-shrink-0 items-center px-0">
              <span class="block text-[18px] font-[600]">
                No Consultation / Existing Patient
              </span>
              <span class="ml-2 flex h-5 w-5 items-center justify-center rounded bg-gray-500 bg-opacity-70 text-sm font-semibold text-white">
                1
              </span>
              <button class="bg-transperent hover:text-black ml-auto flex h-6 w-6 items-center justify-center rounded text-[#b0b0ae] hover:bg-white">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>

            <div class="overflow-auto1 flex flex-col gap-5">
              <div class="group relative flex flex-col items-start gap-4 rounded-[20px] border border-solid border-[#ff601e] bg-white  p-4 2xl:rounded-[30px] 2xl:p-6">
                <div class="mt-0 flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <div class="text-[16px] font-[600]">Campaign Form</div>
                    <div class="ml-3 rounded-full bg-[#f5f5eb] p-2">
                      <i class="fa-solid fa-globe text-[20px]"></i>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="text-[16px] font-[600]">
                      <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>{' '}
                      2024-02-12
                    </div>
                  </div>
                </div>
                <div class="justify-between1 relative mt-5 flex w-full items-start">
                  <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                    <div class="w-full">
                      <i class="fa-solid fa-user mr-2 text-[15px]"></i> John
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-phone mr-2 text-[15px]"></i>{' '}
                      347-794-0747
                    </div>
                    <div class="w-full">
                      <i class="fa-solid fa-envelope mr-2 text-[15px]"></i>{' '}
                      Mariepaule8394@Gmail.Com
                    </div>
                    <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                      <div class="w-full">
                        <i class="fa-solid fa-message mr-2 text-[15px]"></i> I
                        Would Like To Have A Quote ...
                      </div>
                    </div>
                  </div>
                  <a
                    href="javascripct://"
                    onClick={() => open_popover('outcome_11')}
                    class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                  >
                    Status
                  </a>
                  <div
                    id="outcome_11"
                    class="status_drop absolute right-0 top-8 hidden w-[10rem] rounded-[10px] border border-solid border-[#ddd] bg-white p-3 shadow-sm"
                  >
                    <div class="w-full gap-3">
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          Consult Booked
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          New Leads
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          No Consultation
                        </a>
                      </div>
                      <div class="mb-2">
                        <a href="#!" class="text-black leading-normal">
                          Existing Patient{' '}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-2 flex w-full items-center justify-between">
                  <div class=""></div>
                  <div class="inline-flex rounded-[30px] bg-[#fff3e5] px-3 py-1 text-[13px] font-medium leading-normal text-[#ff540f]">
                    Booked
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paid;
