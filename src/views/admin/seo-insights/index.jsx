import React,{useState,useEffect} from 'react';

import nft1 from '../../../assets/img/nfts/Nft1.png';
import nft2 from '../../../assets/img/nfts/Nft3.png';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { SiSessionize } from "react-icons/si";
import { TbUserScan } from "react-icons/tb";
import { PiUsersFour } from "react-icons/pi";
const SeoInsights = () => {
    const [data1,setData]=useState([]);
   // const [data_seo,setDataSeo]=useState([]);

    async function getData(){
        let campaign_id = 1555419;  //Chess House Dental Practice
        const apiURL =   "https://app.legaciestechno.com/brightlocal/Examples/RankChecker/rankchecker_all.php?campaign_id="+campaign_id;

      //  console.log(apiURL);
        const response = await fetch(apiURL);          
        const res= await response.json(); 
        //console.log(res); 
        setData(res)
        positional_movement = data1.positional_movement;
    }
    // async function seoData(){
    //     let name="chess";
    //     const apiURL_seo =   "https://app.legaciestechno.com/brightlocal/Examples/OffsiteSeoAndSocialProfiles/OffsiteSeo_all.php?name="+name;
    //    // console.log(apiURL_seo);
    //     const response_seo = await fetch(apiURL_seo);          
    //     let seoData = await response_seo.json(); 
    //     setDataSeo(seoData); 
    // }
    useEffect(()=>{
        getData()
        //seoData();
    },[data1])
//console.log(data_seo);
  //console.log(data1.local_pack)
  let positional_movement='';
  let organicRank=5;
 // let organicRank=data1.positional_movement.organic_desktop.rank;
 // let organicChange=data1.positional_movement.organic_desktop.change;
  //let positional_movement['google'].up=0
  return (
    <div className="w-full p-0">
      <div className="mb-10 mt-5 w-full px-10">
        <div className="mb-3 flex w-full items-center justify-between">
          <h2 className="text-black text-base font-[700]">
            SEO Statistics{' '}
            <span className="text-black text-[11px] font-semibold text-opacity-50">
              (Last 30Days)
            </span>
          </h2>
        </div>

        <div
          className="relative min-h-[400px] rounded-lg bg-[#f5f5eb] p-5"
          style={{ backgroundImage: `url(${nft1})` }}
        >
          <div className="lg:flex">
            <div className="w-full lg:w-1/4 lg:pr-3">
              <div className="w-full">
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-1 2xl:grid-cols-1">
                  <div className="w-full rounded-[10px] border border-gray-500 bg-white p-4 ">
                    <div className="mb-2 flex items-center justify-start space-x-2">
                      <GrFormView/>
                      <div className="text-sm font-medium text-gray-400 ">
                        Views
                      </div>
                    </div>
                    <div className="flex items-center justify-center ">
                      <div className="text-2xl font-bold text-gray-900 ">
                        58
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-[10px] border border-gray-500 bg-white p-4">
                    <div className="mb-2 flex items-center justify-start space-x-2">
                      <SiSessionize className='color-gray'/>
                      <div className="text-sm font-medium text-gray-400 ">
                        Sessions
                      </div>
                    </div>
                    <div className="flex items-center justify-center ">
                      <div className="text-2xl font-bold text-gray-900 ">
                        285
                      </div>
                    </div>
                  </div>
                  <div className="w-full min-h-[122px] rounded-[10px] border border-gray-500 bg-white p-4">
                    <div className="mb-2 flex items-center justify-start space-x-2">
                      <TbUserScan/>
                      <div className="text-sm font-medium text-gray-400 ">
                        New Users
                      </div>
                    </div>
                    <div className="flex items-center justify-center ">
                      <div className="text-2xl font-bold text-gray-900 ">
                        29
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-[10px] min-h-[122px] border border-gray-500 bg-white p-4">
                    <div className="mb-2 flex items-center justify-start space-x-2">
                      <PiUsersFour/>
                      <div className="text-sm font-medium text-gray-400 ">
                        Active Users
                      </div>
                    </div>
                    <div className="flex items-center justify-center ">
                      <div className="text-2xl font-bold text-gray-900 ">
                        115
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 sm:mt-1">
              <div className="min-h-[450px] w-full rounded-[10px] bg-white p-3">
                <div className="mb-2 flex items-center justify-start space-x-2">
                  <i className="fa-solid fa-chart-line"></i>
                  <div className="text-sm font-medium text-gray-400 ">
                    Traffic sources
                  </div>
                </div>
                <div className="w-full lg:mt-7">
                  <div
                    className="chart-container cds--chart-holder"
                    data-carbon-theme="white"
                    style={{ height: '230px' }}
                  >
                    <div
                      className="cds--cc--chart-wrapper cds--cc--layout-column"
                      id="chart-1b95fe63dd3cf"
                      style={{ height: '100%', width: '100%' }}
                    >
                      <g className="DONT_STYLE_ME_css_styles_verifier"></g>
                      <div
                        className="layout-child layout-child-31298255842 header cds--cc--layout-row cds--cc--layout-alignitems-center"
                        style={{ height: '0px', width: '100%' }}
                      >
                        <div
                          className="layout-child layout-child-31298255840 title"
                          style={{ height: '100%' }}
                        >
                          <div
                            className="cds--cc--title"
                            width="100%"
                            height="100%"
                          >
                            <p className="title" role="heading" aria-level="2">
                              Donut
                            </p>
                          </div>
                        </div>
                        <div
                          className="layout-child layout-child-31298255840 toolbar"
                          style={{ height: '100%' }}
                        >
                          <div
                            className="cds--cc--toolbar"
                            width="100%"
                            height="100%"
                            role="toolbar"
                            aria-label="chart- toolbar"
                          >
                            <div
                              className="cds--overflow-menu-options cds--overflow-menu--flip cds--overflow-menu-options cds--overflow-menu--flip"
                              tabindex="-1"
                            >
                              <ul role="menu"></ul>
                            </div>
                            <div
                              className="toolbar-control cds--overflow-menu"
                              role="button"
                              aria-disabled="false"
                              aria-label="Show as table"
                            >
                              <button
                                className="cds--overflow-menu__trigger cds--overflow-menu__trigger"
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="chart--control-toolbar-showasdatatable"
                                aria-label="Show as table"
                              >
                                {/* <svg
                                  focusable="false"
                                  preserveAspectRatio="xMidYMid meet"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="cds--overflow-menu__icon cds--overflow-menu__icon"
                                  viewBox="0 0 32 32"
                                  aria-hidden="true"
                                  style={{
                                    willChange: 'transform',
                                    width: '20px',
                                    height: '20px',
                                  }}
                                >
                                  <rect
                                    x="4"
                                    y="6"
                                    width="18"
                                    height="2"
                                  ></rect>
                                  <rect
                                    x="4"
                                    y="12"
                                    width="18"
                                    height="2"
                                  ></rect>
                                  <rect
                                    x="4"
                                    y="18"
                                    width="18"
                                    height="2"
                                  ></rect>
                                  <rect
                                    x="4"
                                    y="24"
                                    width="18"
                                    height="2"
                                  ></rect>
                                  <rect
                                    x="26"
                                    y="6"
                                    width="2"
                                    height="2"
                                  ></rect>
                                  <rect
                                    x="26"
                                    y="12"
                                    width="2"
                                    height="2"
                                  ></rect>
                                  <rect
                                    x="26"
                                    y="18"
                                    width="2"
                                    height="2"
                                  ></rect>
                                  <rect
                                    x="26"
                                    y="24"
                                    width="2"
                                    height="2"
                                  ></rect>
                                </svg> */}
                              </button>
                            </div>
                            <div
                              className="toolbar-control cds--overflow-menu"
                              role="button"
                              aria-disabled="false"
                              aria-label="Make fullscreen"
                            >
                              <button
                                className="cds--overflow-menu__trigger cds--overflow-menu__trigger"
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="chart--control-toolbar-makefullscreen"
                                aria-label="Make fullscreen"
                              >
                                {/* <svg
                                  focusable="false"
                                  preserveAspectRatio="xMidYMid meet"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="cds--overflow-menu__icon cds--overflow-menu__icon"
                                  viewBox="0 0 32 32"
                                  aria-hidden="true"
                                  style={{
                                    willChange: 'transform',
                                    width: '15px',
                                    height: '15px',
                                  }}
                                >
                                  <polygon points="21 2 21 4 26.59 4 17 13.58 18.41 15 28 5.41 28 11 30 11 30 2 21 2"></polygon>
                                  <polygon points="15 18.42 13.59 17 4 26.59 4 21 2 21 2 30 11 30 11 28 5.41 28 15 18.42"></polygon>
                                </svg> */}
                              </button>
                            </div>
                            <div
                              className="toolbar-control cds--overflow-menu"
                              role="button"
                              aria-disabled="false"
                              aria-label="More options"
                            >
                              <button
                                className="cds--overflow-menu__trigger cds--overflow-menu__trigger"
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="chart--control-toolbar-overflow-menu"
                                aria-label="More options"
                              >
                                {/* <svg
                                    focusable="false"
                                      preserveAspectRatio="xMidYMid meet"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="cds--overflow-menu__icon"
                                          viewBox="0 0 32 32"
                                          aria-hidden="true"
                                          style={{
                                             willChange: 'transform',
                                             width: '20px',
                                              height: '20px',
  }}
                                           >
  <circle cx="16" cy="8" r="2"></circle>
  <circle cx="16" cy="16" r="2"></circle>
  <circle cx="16" cy="24" r="2"></circle>
</svg> */}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="layout-child layout-child-31298255842 spacer"
                        style={{ height: '15px', width: '100%' }}
                      >
                        <div
                          className="cds--cc--spacer"
                          width="100%"
                          height="100%"
                          opacity="0"
                          style={{ width: '15px', height: '15px' }}
                        ></div>
                      </div>
                      <div
                        className="layout-child layout-child-31298255842 full-frame cds--cc--layout-column-reverse"
                        style={{ height: '215px', width: '100%' }}
                      >
                        <div
                          className="layout-child layout-child-31298255841 legend"
                          style={{ height: '16px', width: '100%' }}
                        >
                          <div
                            className="cds--cc--legend center-aligned null clickable"
                            width="100%"
                            height="100%"
                            role="group"
                            aria-label="Data groups"
                            data-name="legend-items"
                          >
                            <div className="legend-item active mt-2">
                              <div
                                className="checkbox background-3-1-1 active"
                                role="checkbox"
                                tabindex="0"
                                aria-labelledby="chart--legend-datagroup-0-title"
                                aria-checked="true"
                                width="13"
                                height="13"
                              >
                                {/* <svg
                                  focusable="false"
                                  preserveAspectRatio="xMidYMid meet"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="11"
                                  height="11"
                                  viewBox="0 0 31 28"
                                  aria-hidden="true"
                                  style={{ willChange: 'transform' }}
                                >
                                  <path d="M13 21.2l-7.1-7.1-1.4 1.4 7.1 7.1L13 24 27.1 9.9l-1.4-1.5z"></path>
                                </svg> */}
                              </div>
                              <p id="chart--legend-datagroup-0-title">Views</p>
                            </div>
                            <div className="legend-item active">
                              <div
                                className="checkbox background-3-1-2 active"
                                role="checkbox"
                                tabindex="0"
                                aria-labelledby="chart--legend-datagroup-1-title"
                                aria-checked="true"
                                width="13"
                                height="13"
                              >
                                {/* <svg
                                  focusable="false"
                                  preserveAspectRatio="xMidYMid meet"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="11"
                                  height="11"
                                  viewBox="0 0 31 28"
                                  aria-hidden="true"
                                  style={{ willChange: 'transform' }}
                                >
                                  <path d="M13 21.2l-7.1-7.1-1.4 1.4 7.1 7.1L13 24 27.1 9.9l-1.4-1.5z"></path>
                                </svg> */}
                              </div>
                              <p id="chart--legend-datagroup-1-title">
                                Sessions
                              </p>
                            </div>
                            <div className="legend-item active">
                              <div
                                className="checkbox background-3-1-3 active"
                                role="checkbox"
                                tabindex="0"
                                aria-labelledby="chart--legend-datagroup-2-title"
                                aria-checked="true"
                                width="13"
                                height="13"
                              >
                                {/* <svg
                                  focusable="false"
                                  preserveAspectRatio="xMidYMid meet"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="11"
                                  height="11"
                                  viewBox="0 0 31 28"
                                  aria-hidden="true"
                                  style={{ willChange: 'transform' }}
                                >
                                  <path d="M13 21.2l-7.1-7.1-1.4 1.4 7.1 7.1L13 24 27.1 9.9l-1.4-1.5z"></path>
                                </svg> */}
                              </div>
                              <p id="chart--legend-datagroup-2-title">Users</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="layout-child layout-child-31298255841 spacer"
                          style={{ height: '24px', width: '100%' }}
                        >
                          <div
                            classNameName="cds--cc--spacer"
                            width="100%"
                            height="100%"
                            opacity="0"
                            style={{ width: '24px', height: '24px' }}
                          ></div>
                        </div>
                        <div
                          classNameName="layout-child layout-child-31298255841 graph-frame"
                          style={{ height: '175px', width: '100%' }}
                        >
                          <svg
                            className="layout-svg-wrapper cds--cc--donut cds--cc--skeleton"
                            width="100%"
                            height="100%"
                          >
                            <svg
                              className="cds--cc--donut"
                              width="100%"
                              height="100%"
                              x="167"
                              y="92.5"
                            >
                              <g
                                className="slices"
                                role="group"
                                data-name="slices"
                              ></g>
                              <g
                                className="labels"
                                role="group"
                                data-name="labels"
                              ></g>
                              <g
                                className="callouts"
                                role="group"
                                data-name="callouts"
                              ></g>
                              <g className="center">
                                <text
                                  className="donut-figure"
                                  text-anchor="middle"
                                  style={{
                                    dominantBaseline: 'initial',
                                    fontSize: '17.4px',
                                  }}
                                >
                                  263
                                </text>
                                <text
                                  className="donut-title"
                                  text-anchor="middle"
                                  y="18.125"
                                  style={{ fontSize: '10.875px' }}
                                >
                                  Total
                                </text>
                              </g>
                            </svg>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cds--cc--tooltip hidden"
                      role="tooltip"
                      aria-hidden="true"
                    ></div>
                    <div
                      className="cds--modal cds--modal"
                      data-modal="true"
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="modal-title"
                      aria-describedby="modal-description"
                      tabindex="-1"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 lg:pl-3 sm:mt-1">
              <div className="min-h-[450px] w-full rounded-[10px] bg-white p-3">
                <div className="mb-2 flex items-center justify-start space-x-2">
                  <i className="fa-solid fa-chart-line"></i>
                  <div className="text-sm font-medium text-gray-400 ">
                    Keywords
                  </div>
                </div>
                <div className="mt-5 grid w-full grid-cols-1 gap-4">
                  <div className="flex w-full items-center justify-between border-b border-solid border-gray-300 pb-3">
                    <span className="text-black text-sm font-semibold leading-[13.41px]">
                      {data1.keywords}
                    </span>{' '}
                    <span className="text-[20px] leading-tight text-blue-500">
                      <i className="fa-solid fa-angle-up"></i>
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between border-b border-solid border-gray-300 pb-3">
                    <span className="text-black text-sm font-semibold leading-[13.41px]">
                      Volume
                    </span>{' '}
                    <span className="font-bold">{data1.volume}</span>
                  </div>
                  <table className="w-full   text-left rtl:text-right ">
                    <thead className="uppercase1 bg-gray-50 font-semibold ">
                      <tr>
                        <th scope="col" className="px-2 py-3"></th>
                        <th scope="col" className="px-2 py-3">
                          Rank
                        </th>
                        <th scope="col" className="px-2 py-3">
                          Change
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-solid border-[#e5e5e1] bg-white">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-2 py-4 text-gray-900"
                        >
                          <span className="text-black flex items-center text-sm font-semibold leading-[13.41px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              className="mr-1 w-6"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#fbc02d"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                              <path
                                fill="#e53935"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                              ></path>
                              <path
                                fill="#4caf50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                              ></path>
                              <path
                                fill="#1565c0"
                                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                            </svg>
                            Organic Desktop
                          </span>
                        </th>

                        <td className="">
                          { data1 && data1.organic_desktop ?("1")
                                            
                                          : ""}
                        </td>
                        <td className="">
                        { data1 && data1.organic_desktop ?(<p style={{color:"red", display:"flex",columnGap:"2px"}}>-1<FaArrowDown className='mt-1'/></p>)
                                            
                                            : ""}
                        </td>
                      </tr>

                      <tr className="border-b border-solid border-[#e5e5e1] bg-white">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-2 py-4 text-gray-900"
                        >
                          <span className="text-black flex items-center text-sm font-semibold leading-[13.41px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              className="mr-1 w-6"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#fbc02d"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                              <path
                                fill="#e53935"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                              ></path>
                              <path
                                fill="#4caf50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                              ></path>
                              <path
                                fill="#1565c0"
                                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                            </svg>
                            Organic Mobile
                          </span>
                        </th>
                        <td className="">
                        { data1 && data1.organic_mobile ?("1")
                                            
                                            : ""}
                        </td>
                        <td className="">
                        { data1 && data1.organic_mobile ?(<p style={{color:"red", display:"flex",columnGap:"2px"}}>-1<FaArrowDown className='mt-1'/></p>)
                                            
                                            : ""}
                        </td>
                      </tr>

                      <tr className="border-b border-solid border-[#e5e5e1] bg-white">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-2 py-4 text-gray-900"
                        >
                          <span className="text-black flex items-center text-sm font-semibold leading-[13.41px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              className="mr-1 w-6"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#fbc02d"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                              <path
                                fill="#e53935"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                              ></path>
                              <path
                                fill="#4caf50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                              ></path>
                              <path
                                fill="#1565c0"
                                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                            </svg>
                            Local Pack
                          </span>
                        </th>
                        <td className="">
                        {
                            data1 && data1.local_pack ? "0" : "-"
                        }
                          {/* {#if data1 && data1.local_pack}
                                               {data1.local_pack.rank}
                                          {:else}     
                                              -
                                          {/if} */}
                        </td>
                        <td className="px-2 py-4">
                        {
                            data1 && data1.local_pack ? "1" : "-"
                        }
                        </td>
                      </tr>

                      <tr className="border-b border-solid border-[#e5e5e1] bg-white">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-2 py-4 text-gray-900"
                        >
                          <span className="text-black flex items-center text-sm font-semibold leading-[13.41px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              className="mr-1 w-6"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#fbc02d"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                              <path
                                fill="#e53935"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                              ></path>
                              <path
                                fill="#4caf50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                              ></path>
                              <path
                                fill="#1565c0"
                                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                            </svg>
                            Local Finder
                          </span>
                        </th>
                        <td className="">
                        {
                            data1 && data1.local_finder ? "1" : "0"
                        }
                          {/* {#if data1 && data1.local_finder}
                                              {#each data1.local_finder as row} 
                                                  <span className="font-bold"> 
                                                      {row.rank} 
                                                  </span>
                                              {/each}
                                          {/if} */}
                        </td>
                        <td className="px-2 py-4">
                        {
                            data1 && data1.local_finder ?   (<p style={{color:"red", display:"flex",columnGap:"2px"}}>-1<FaArrowDown className='mt-1'/></p>): 0
                        }
                          {/* {#if data1 && data1.local_finder}
                                              {#each data1.local_finder as row} 
                                                  <span className="font-bold">  
                                                      {#if row.change}
                                                          {row.change}
                                                          {#if row.change > 0}
                                                              <i className="fa-solid fa-arrow-up text-green-500 ml-1"></i>
                                                          {:else}
                                                              <i className="fa-solid fa-arrow-down text-red-500 ml-1"></i>
                                                          {/if}
                                                      {/if}
                                                      {#if row.gained}
                                                          +
                                                      {/if}
                                                  </span>
                                              {/each}
                                          {/if} */}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 lg:pl-3 sm:mt-1">
              <div className="min-h-[450px] w-full rounded-[10px] bg-white p-3">
                <div className="mb-2 flex items-center justify-start space-x-2">
                  <i className="fa-solid fa-chart-line"></i>
                  <div className="text-sm font-medium text-gray-400 ">
                    SEO &amp; Website Authority
                  </div>
                </div>
                <div className="mt-4 grid w-full grid-cols-1 gap-2">
                  <div className="text-black w-full rounded border border-solid border-gray-300 p-1.5 px-3 text-sm font-normal leading-[13.41px]">
                    <div className="mb-3 flex w-full items-center justify-between">
                      <span className="text-black flex items-center text-sm font-semibold leading-[13.41px]">
                        Google Page Index Count
                      </span>{' '}
                      <span className="font-bold">
                        <div style={{ position: 'relative' }}>
                          <div
                            id="ccs-0.sjhqhp103f"
                            className="bx--tooltip__label"
                          >
                            {' '}
                            <div
                              role="button"
                              aria-haspopup="true"
                              className="bx--tooltip__trigger"
                              aria-expanded="false"
                              aria-describedby="ccs-0.atm10oyxnxg"
                              aria-label=""
                              tabindex="0"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                                preserveAspectRatio="xMidYMid meet"
                                width="16"
                                height="16"
                                aria-hidden="true"
                                name=""
                              >
                                <path d="M17 22L17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22zM16 8a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 8z"></path>
                                <path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"></path>
                              </svg>
                            </div>
                          </div>{' '}
                        </div>
                      </span>
                    </div>
                    <div className="mb-1.5 flex w-full items-center border-b border-solid border-gray-300 pb-2"></div>
                    <div className="flex w-full items-center">
                      <div className="w-1/2">
                        {/* {#if data1_seo && data1_seo.pages_indexed}
                                              {data1_seo.pages_indexed}
                                          {/if} */}
                      </div>
                    </div>
                  </div>
                  <div className="text-black w-full rounded border border-solid border-gray-300 p-1.5 px-3 text-sm font-normal leading-[13.41px]">
                    <div className="mb-3 flex w-full items-center justify-between">
                      <span className="text-black flex items-center text-sm font-semibold leading-[13.41px]">
                        Link Count
                      </span>{' '}
                      <span className="font-bold">
                        <div style={{ position: 'relative' }}>
                          <div
                            id="ccs-0.dq46w9q0egl"
                            className="bx--tooltip__label"
                          >
                            {' '}
                            <div
                              role="button"
                              aria-haspopup="true"
                              className="bx--tooltip__trigger"
                              aria-expanded="false"
                              aria-describedby="ccs-0.ia6rp12grai"
                              aria-label=""
                              tabindex="0"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                                preserveAspectRatio="xMidYMid meet"
                                width="16"
                                height="16"
                                aria-hidden="true"
                                name=""
                              >
                                <path d="M17 22L17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22zM16 8a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 8z"></path>
                                <path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"></path>
                              </svg>
                            </div>
                          </div>{' '}
                        </div>
                      </span>
                    </div>
                    <div className="mb-1.5 flex w-full items-center border-b border-solid border-gray-300 pb-2">
                      <div className="w-1/2">Domain External Links</div>
                      <div className="w-1/2">Domain. Linking</div>
                    </div>
                    <div className="flex w-full items-center">
                      <div className="w-1/2">
                        {/* {#if data1_seo && data1_seo.root_domain_external_links}
                                              {data1_seo.root_domain_external_links}
                                          {/if} */}
                      </div>
                      <div className="flex w-1/2 items-center ">
                        {/* {#if data1_seo && data1_seo.root_domain_external_links}
                                              {data1_seo.root_domains_linking}
                                          {/if} */}
                      </div>
                    </div>
                  </div>
                  <div className="text-black w-full rounded border border-solid border-gray-300 p-1.5 px-3 text-sm font-normal leading-[13.41px]">
                    <div className="mb-3 flex w-full items-center justify-between">
                      <span className="text-black flex items-center text-sm font-semibold leading-[13.41px]">
                        Linking Domains
                      </span>{' '}
                      <span className="font-bold">
                        <div style={{ position: 'relative' }}>
                          <div
                            id="ccs-0.p0lte9hgnzn"
                            className="bx--tooltip__label"
                          >
                            {' '}
                            <div
                              role="button"
                              aria-haspopup="true"
                              className="bx--tooltip__trigger"
                              aria-expanded="false"
                              aria-describedby="ccs-0.35100aaqfks"
                              aria-label=""
                              tabindex="0"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                                preserveAspectRatio="xMidYMid meet"
                                width="16"
                                height="16"
                                aria-hidden="true"
                                name=""
                              >
                                <path d="M17 22L17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22zM16 8a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 8z"></path>
                                <path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"></path>
                              </svg>
                            </div>
                          </div>{' '}
                        </div>
                      </span>
                    </div>
                    <div className="mb-1.5 flex w-full items-center border-b border-solid border-gray-300 pb-2">
                      <div className="w-1/2">Domain Authority</div>
                      <div className="w-1/2">URL Authority</div>
                    </div>
                    <div className="flex w-full items-center">
                      <div className="w-1/2">
                        {/* {#if data1_seo && data1_seo.domain_authority}
                                                  {data1_seo.domain_authority}
                                              {/if} */}
                      </div>
                      <div className="flex w-1/2 items-center ">
                        {/* {#if data1_seo && data1_seo.domain_authority}
                                              {data1_seo.url_authority}
                                          {/if} */}
                      </div>
                    </div>
                  </div>
                  <div className="text-black w-full rounded border border-solid border-gray-300 p-1.5 px-3 text-sm font-normal leading-[13.41px]">
                    <div className="mb-3 flex w-full items-center justify-between">
                      <span className="text-black flex items-center text-sm font-semibold leading-[13.41px]">
                        Age
                      </span>{' '}
                      <span className="font-bold">
                        <div style={{ position: 'relative' }}>
                          <div
                            id="ccs-0.p0lte9hgnzn"
                            className="bx--tooltip__label"
                          >
                            {' '}
                            <div
                              role="button"
                              aria-haspopup="true"
                              className="bx--tooltip__trigger"
                              aria-expanded="false"
                              aria-describedby="ccs-0.35100aaqfks"
                              aria-label=""
                              tabindex="0"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                                preserveAspectRatio="xMidYMid meet"
                                width="16"
                                height="16"
                                aria-hidden="true"
                                name=""
                              >
                                <path d="M17 22L17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22zM16 8a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 8z"></path>
                                <path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"></path>
                              </svg>
                            </div>
                          </div>{' '}
                        </div>
                      </span>
                    </div>
                    <div className="mb-1.5 flex w-full items-center border-b border-solid border-gray-300 pb-2">
                      <div className="w-1/2">Age</div>
                      <div className="w-1/2">Reg Year</div>
                    </div>
                    <div className="flex w-full items-center">
                      <div className="w-1/2">
                        {/* {#if data1_seo && data1_seo.website_age}
                                                {data1_seo.website_age}
                                            {/if} */}
                      </div>
                      <div className="flex w-1/2 items-center ">
                        {/* {#if data1_seo && data1_seo.registration_date}
                                            {data1_seo.registration_date}
                                        {/if} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 mt-10 flex w-full items-center justify-between">
          <h2 className="text-black text-base font-[700]">
            Positional Movement{' '}
          </h2>
        </div>

        <div className="relative min-h-[400px] rounded-lg  p-5" style={{backgroundImage: `url(${nft2})`}}>
          <div className="grid w-full grid-cols-4 gap-4">
            <div className="grid w-full grid-cols-1 gap-3">
              <div className="w-full rounded-[10px] border border-solid border-[#0b9229] bg-white">
                <div className="flex w-full items-center justify-center py-3.5 text-center text-8xl font-bold text-[#0b9229]">
                  <span className="">
                  {  positional_movement.all_search_engines ?
                                      {positional_movement} 
                                  :
                                  0
                                  } 
                  </span>{' '}
                  <FaArrowUp className="fa-solid fa-down-long ml-2 text-5xl"/>
                </div>
                <div className="flex w-full items-center justify-center rounded-b-[10px] mt-2.5 bg-[#0b9229] py-3.5 text-center text-xl font-bold text-white">
                  <span className="">Gained</span>
                </div>
              </div>

              <div className="w-full rounded-[10px] border border-solid border-[#c70509] bg-white">
                <div className="flex w-full items-center justify-center py-3.5 text-center text-8xl font-bold text-[#c70509]">
                  <span className="">
                  {  positional_movement.all_search_engines ?
                                      {positional_movement} 
                                  :
                                  0
                                  } 
                  </span>{' '}
                  <FaArrowDown className="fa-solid fa-down-long ml-2 text-5xl"/>
                </div>
                <div className="flex w-full items-center justify-center rounded-b-[10px] bg-[#c70509] mt-2.5 py-3.5 text-center text-xl font-bold text-white">
                  <span className="">Lost</span>
                </div>
              </div>

              <div className="w-full  rounded-[10px] border border-solid border-[#020435] bg-white">
                <div className="flex w-full  items-center justify-center py-3.5  text-center text-8xl font-bold text-[#020435]">
                  <span className="">
                     {  positional_movement.all_search_engines ?
                                      {positional_movement} 
                                  :
                                  0
                                  } 
                  </span>{' '}
                  <FaArrowDown className="fa-solid fa-down-long ml-2 text-5xl"/>
                </div>
                <div className="flex w-full items-center justify-center rounded-b-[10px] bg-[#020435] mt-2.5  py-3.5 text-center text-xl font-bold text-white">
                  <span className="">Change</span>
                </div>
              </div>
            </div>

            <div className="col-span-3 w-full">
              <div className="min-h-[597px] w-full rounded-[10px] bg-white p-3">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-left rtl:text-right">
                    <thead className="uppercase1 bg-gray-50 font-semibold ">
                      <tr>
                        <th scope="col" className="px-2 py-3">
                          Source
                        </th>
                        <th scope="col" className="px-2 py-3">
                          New
                        </th>
                        <th scope="col" className="px-2 py-3">
                          Gained
                        </th>
                        <th scope="col" className="px-2 py-3">
                          Lost
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-solid border-[#e5e5e1] bg-white">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 text-gray-900"
                        >
                          <span className="text-black flex items-center text-lg font-semibold leading-[13.41px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              className="mr-1 w-6"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#fbc02d"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                              <path
                                fill="#e53935"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                              ></path>
                              <path
                                fill="#4caf50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                              ></path>
                              <path
                                fill="#1565c0"
                                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                            </svg>
                            Organic Desktop
                          </span>
                        </th>
                        <td className="px-6 py-4">
                          { positional_movement['google'] > 0 ?
                                                  
                                                      "1" 
                                                    
                                                  : "-"}
                        </td>
                        <td className="px-6 py-4">
                        { positional_movement['google']> 0 ?
                                                  
                                                  "1" 
                                                
                                              : "-"}
                        </td>
                        <td className="px-6 py-4">
                        { positional_movement['google'] > 0 ?
                                                  
                                                  "1" 
                                                
                                              : "-"}
                        </td>
                      </tr>
                      <tr className="border-b border-solid border-[#e5e5e1] bg-white">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 text-gray-900"
                        >
                          <span className="text-black flex items-center text-lg font-semibold leading-[13.41px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              className="mr-1 w-6"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#fbc02d"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                              <path
                                fill="#e53935"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                              ></path>
                              <path
                                fill="#4caf50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                              ></path>
                              <path
                                fill="#1565c0"
                                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                            </svg>
                            Organic Mobile
                          </span>
                        </th>
                        <td className="px-6 py-4">
                        { positional_movement['google-mobile'] > 0 ?
                                                  
                                                  "1" 
                                                
                                              : "-"}
                        </td>
                        <td className="px-6 py-4">
                        { positional_movement['google-mobile'] > 0 ?
                                                  
                                                  "1" 
                                                
                                              : "-"}
                        </td>
                        <td className="px-6 py-4">
                        { positional_movement['google-mobile'] > 0 ?
                                                  
                                                  "1" 
                                                
                                              : "-"}
                        </td>
                      </tr>

                      <tr className="border-b border-solid border-[#e5e5e1] bg-white">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 text-gray-900"
                        >
                          <span className="text-black flex items-center text-lg font-semibold leading-[13.41px]">
                            <img
                              src="https://tools.brightlocal.com/assets/core/images/search-engines/google-places.svg"
                              alt=""
                              className="mr-2 w-4"
                            />
                            Local Finder
                          </span>
                        </th>
                        <td className="px-6 py-4">
                        { positional_movement['google-places'] > 0 ?
                                                  
                                                  "1" 
                                                
                                              : "-"}
                        </td>
                        <td className="px-6 py-4">
                        { positional_movement['google-places'] > 0 ?
                                                  
                                                  "1" 
                                                
                                              : "-"}
                        </td>
                        <td className="px-6 py-4">
                        { positional_movement['google-places'] > 0 ?
                                                  
                                                  "1" 
                                                
                                              : "-"}
                        </td>
                      </tr>
                      <tr className="border-b border-solid border-[#e5e5e1] bg-white">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 text-gray-900"
                        >
                          <span className="text-black flex items-center text-lg font-semibold leading-[13.41px]">
                            <img
                              src="https://tools.brightlocal.com/assets/core/images/search-engines/bing.svg"
                              alt=""
                              className="mr-2 w-4"
                            />
                            Bing
                          </span>
                        </th>
                        <td className="px-6 py-4">
                        { positional_movement['bing'] > 0 ?
                                                  
                                                  "1" 
                                                
                                              : "-"}
                        </td>
                        <td className="px-6 py-4">
                        { positional_movement['bing'] > 0 ?
                                                  
                                                  "1" 
                                                
                                              : "-"}
                        </td>
                        <td className="px-6 py-4">
                        { positional_movement['bing'] > 0 ?
                                                  
                                                  "1" 
                                                
                                              : "-"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeoInsights;
