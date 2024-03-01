import React, { useState, useEffect } from 'react';

import nft1 from '../../../assets/img/nfts/Nft1.png';
import nft2 from '../../../assets/img/nfts/Nft3.png';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { GrFormView } from 'react-icons/gr';
import { SiSessionize } from 'react-icons/si';
import { TbUserScan } from 'react-icons/tb';
import { PiUsersFour } from 'react-icons/pi';
import Card from './components/card';
import LineChart from 'components/charts/LineChart';
import Stock from '../main/account/billing/components/Stock';
import {
  lineChartDataMiniArea1,
  lineChartOptionsMiniArea1,
  lineChartDataMiniArea2,
  lineChartOptionsMiniArea2,
} from 'variables/charts';
import DonutChart2 from 'components/charts/DonutChart2';
import DonutChart from 'components/charts/DonutChart';


const SeoInsights = () => {
  const [data1, setData] = useState([]);
  const viewsPercentage = 33.3;
  const sessionsPercentage =33.3;
  const usersPercentage = 33.3;
  
  async function getData() {
    let campaign_id = 1555419; //Chess House Dental Practice
    const apiURL =
      'https://app.legaciestechno.com/brightlocal/Examples/RankChecker/rankchecker_all.php?campaign_id=' +
      campaign_id;

    //  console.log(apiURL);
    const response = await fetch(apiURL);
    const res = await response.json();
    //console.log(res);
    setData(res);
    positional_movement = data1.positional_movement;
  }

  useEffect(() => {
    getData();
  }, []);

  let positional_movement = '';


  return (
    <div className="w-full p-0">
      <div className="mb-10 mt-5 w-full px-10">
        <div className="flex gap-10">
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex flex-1 gap-8">
              <Card
                extra={
                  'flex-1 p-2 flex flex-col items-center justify-center gap-2 '
                }
                backgroundcolor={'bg-[#E3F5FF]'}
              >
                <div className="mb-2 flex items-center justify-start space-x-2">
                  <GrFormView />
                  <div className="text-sm font-medium text-[#363987] ">
                    Views
                  </div>
                </div>
                <div className="flex items-center justify-center ">
                  <div className="text-2xl font-bold text-gray-900 ">58</div>
                </div>
              </Card>
              <Card
                extra={
                  'flex-1 p-2 flex flex-col items-center justify-center gap-2'
                }
                backgroundcolor={'bg-[#E5ECF6]'}
              >
                <div className="mb-2 flex items-center justify-start space-x-2">
                  <SiSessionize className="color-gray" />
                  <div className="text-sm font-medium text-[#363987] ">
                    Sessions
                  </div>
                </div>
                <div className="flex items-center justify-center ">
                  <div className="text-2xl font-bold text-gray-900 ">285</div>
                </div>
              </Card>
            </div>
            <div className="flex flex-1 gap-8">
              <Card
                extra={
                  'flex-1 p-2 flex flex-col items-center justify-center gap-2 py-5'
                }
                backgroundcolor={'bg-[#E5ECF6]'}
              >
                <div className="mb-2 flex items-center justify-start space-x-2">
                  <TbUserScan />
                  <div className="text-sm font-medium text-[#363987]">
                    New Users
                  </div>
                </div>
                <div className="flex items-center justify-center ">
                  <div className="text-2xl font-bold text-gray-900 ">29</div>
                </div>
              </Card>
              <Card
                extra={
                  'flex-1 p-2 flex flex-col items-center justify-center gap-2'
                }
                backgroundcolor={'bg-[#E3F5FF]'}
              >
                <div className="mb-2 flex items-center justify-start space-x-2">
                  <PiUsersFour />
                  <div className="text-sm font-medium text-[#363987]">
                    Active Users
                  </div>
                </div>
                <div className="flex items-center justify-center ">
                  <div className="text-2xl font-bold text-gray-900 ">115</div>
                </div>
              </Card>
            </div>
          </div>

          <Card extra={'flex-1 p-3'} backgroundcolor={'bg-[#fffff]'}>
          <p class="font-[600] text-[#031390]">Traffic Sources</p>
            <DonutChart2
              usersPercentage={usersPercentage}
              viewsPercentage={viewsPercentage}
              sessionsPercentage={sessionsPercentage}
            />
        
          </Card>
          <Card
            extra={'flex-1 p-3 flex flex-col gap-2 '}
            backgroundcolor={'bg-[#E8EBFF]'}
          >
            <div className="font-[600] text-[#031390]">
              SEO and website Authority
            </div>
            <div class="flex gap-1">
              <div class="flex flex-1 flex-col items-center justify-center gap-2 rounded-md bg-white px-3 py-2">
                <div class="rounded bg-[#E8EBFF] text-sm font-[500] ">
                  Google page index count
                </div>
                <div class="text-[24px] font-[600] text-[#363987]">10</div>
              </div>
              <div class="flex flex-1 flex-col items-center justify-center rounded-md bg-white px-3 py-2">
                <div class="rounded bg-[#E3F5FF] text-sm font-[500]">
                  Link Count
                </div>
                <p class="text-[10px] text-[#818181]">External links</p>
                <div class="text-[16px] font-[600] text-[#363987]">90</div>
                <p class="text-[10px] text-[#818181]">Domain Links</p>
                <div class="text-[16px] font-[600] text-[#363987]">53</div>
              </div>
              <div class="flex flex-1 flex-col items-center justify-center rounded-md bg-white px-3 py-2">
                <div class="rounded bg-[#E8EBFF] text-sm font-[500]">Age</div>
                <p class="text-[10px] text-[#818181]"> Age</p>
                <div class="text-[16px] font-[600] text-[#363987]">5</div>
                <p class="text-[10px] text-[#818181]">Reg Year</p>
                <div class="text-[16px] font-[600] text-[#363987]">2018</div>
              </div>
            </div>
            <div class="flex w-full  flex-1 items-center justify-between  gap-2 rounded-md bg-white px-3 py-2">
              <div class="rounded bg-[#E8EBFF] text-sm font-[500]">
                Linking Domains
              </div>
              <div class="flex flex-col items-center gap-2">
                <p class="text-[10px] text-[#818181]"> Domain Authority</p>
                <div class="text-[16px] font-[600] text-[#363987]">12</div>
              </div>
              <div class="flex flex-col items-center gap-2">
                <p class="text-[10px] text-[#818181]">Url Authority</p>
                <div class="text-[16px] font-[600] text-[#363987]">27</div>
              </div>
            </div>
          </Card>
        </div>

        <div class="mt-5 flex gap-5">
          <Card extra={'w-[60%] p-2  gap-2'} backgroundcolor={'bg-white'}>
            <div class="flex flex-row gap-5">
              <div class="flex w-[20%] flex-col gap-2">
                <div class="flex flex-col items-center justify-between rounded bg-[#E9FFEA] p-2">
                  <p class="rounded-lg bg-[#0B9229] px-5 py-1 text-[12px] text-[white]">
                    Gained
                  </p>
                  <div class="flex gap-2">
                    <p class="text-[24px] font-[600]">0</p>
                  </div>
                </div>
                <div class="flex flex-col items-center justify-between rounded bg-[#FFDBD8] p-2">
                  <p class="rounded-lg bg-[#C70509] px-5 py-1 text-[12px] text-[white]">
                    Lost
                  </p>
                  <div class="flex gap-2">
                    <p class="text-[24px] font-[600]">0</p>
                  </div>
                </div>
                <div class="flex flex-col items-center justify-between rounded bg-[#E1E2FF] p-2">
                  <p class="rounded-lg bg-[#020435] px-5 py-1 text-[12px] text-[white]">
                    Changed
                  </p>
                  <div class="flex gap-2">
                    <p class="text-[24px] font-[600]">0</p>
                  </div>
                </div>
              </div>
              <div class="w-[80%]">

              <table className="w-full text-left rtl:text-right">
                    <thead className="uppercase1 font-semibold ">
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
                          className="whitespace-nowrap px-6 py-4 text-[#818181] font-[500] text-sm"
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
                          {positional_movement['google'] > 0 ? '1' : '-'}
                        </td>
                        <td className="px-6 py-4">
                          {positional_movement['google'] > 0 ? '1' : '-'}
                        </td>
                        <td className="px-6 py-4">
                          {positional_movement['google'] > 0 ? '1' : '-'}
                        </td>
                      </tr>
                      <tr className="border-b border-solid border-[#e5e5e1] bg-white">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 text-[#818181] font-[500]  text-sm"
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
                          {positional_movement['google-mobile'] > 0 ? '1' : '-'}
                        </td>
                        <td className="px-6 py-4">
                          {positional_movement['google-mobile'] > 0 ? '1' : '-'}
                        </td>
                        <td className="px-6 py-4">
                          {positional_movement['google-mobile'] > 0 ? '1' : '-'}
                        </td>
                      </tr>

                      <tr className="border-b border-solid border-[#e5e5e1] bg-white">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 1] text-[#818181] font-[500]  text-sm"
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
                          {positional_movement['google-places'] > 0 ? '1' : '-'}
                        </td>
                        <td className="px-6 py-4">
                          {positional_movement['google-places'] > 0 ? '1' : '-'}
                        </td>
                        <td className="px-6 py-4">
                          {positional_movement['google-places'] > 0 ? '1' : '-'}
                        </td>
                      </tr>
                      <tr className="border-b border-solid border-[#e5e5e1] bg-white">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 text-[#818181] font-[500]  text-sm"
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
                          {positional_movement['bing'] > 0 ? '1' : '-'}
                        </td>
                        <td className="px-6 py-4">
                          {positional_movement['bing'] > 0 ? '1' : '-'}
                        </td>
                        <td className="px-6 py-4">
                          {positional_movement['bing'] > 0 ? '1' : '-'}
                        </td>
                      </tr>
                    </tbody>
                  </table>





              </div>
            </div>
          </Card>
          <Card extra={'w-[40%] p-2'} backgroundcolor={'bg-white'}>
          <div className="flex justify-between">
              <p className="font-[600]  text-[#031390]">Keywords</p>
              <p className="font-[600]  text-[#031390]"> {data1.keywords}</p>
            </div>

            <div>
              <table className="w-full">
                <thead className="border-b border-solid border-gray-300">
                  <tr>
                    <th className="px-[14px] pt-[29px]">
                      <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600">
                        Rank
                      </div>
                    </th>
                    <th className="px-[14px] pt-[29px]">
                      <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600">
                        Name
                      </div>
                    </th>
                    <th className="px-[14px] pt-[29px]">
                      <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600"></div>
                    </th>

                    {/* <th className="px-[14px] pt-[29px]">
                    <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600">
                      Change
                    </div>
                  </th> */}
                  </tr>
                </thead>

                <tbody className="w-full">
                  <tr className="w-full">
                    <td class="px-6 py-4">
                      {data1 && data1?.organic_desktop && (
                        <>{data1?.organic_desktop.rank}</>
                      )}
                    </td>
                    <td class=" px-6 py-4  text-sm font-bold text-navy-700 dark:text-white ">
                      Organic Desktop
                      {/* <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white mt-auto">
                      Organic Desktop
                    </div> */}
                    </td>

                    <td class="px-6 py-4">
                      {data1 && data1?.organic_desktop && (
                        <>
                          {data1?.organic_desktop > 0 ? (
                            <>
                              <Stock
                                growth={data1?.organic_desktop.toString()}
                                chart={
                                  <LineChart
                                    chartData={lineChartDataMiniArea1}
                                    chartOptions={lineChartOptionsMiniArea1}
                                  />
                                }
                              />
                            </>
                          ) : (
                            <Stock
                              growth={data1?.organic_desktop.change.toString()}
                              chart={
                                <LineChart
                                  chartData={lineChartDataMiniArea2}
                                  chartOptions={lineChartOptionsMiniArea2}
                                />
                              }
                            />
                          )}
                        </>
                      )}
                    </td>

                    {/* <td class="px-6 py-4">
                    {data1 && data1?.organic_desktop && (
                      <>
                        {data1?.organic_desktop.change}
                        {data1?.organic_desktop.change > 0 ? (
                          <i class="fa-solid fa-arrow-up ml-1 text-green-500"></i>
                        ) : (
                          <i class="fa-solid fa-arrow-down ml-1 text-red-500"></i>
                        )}
                      </>
                    )}
                  </td> */}
                  </tr>

                  <tr className="w-full">
                    <td class="px-6 py-4">
                      {data1 && data1?.organic_mobile && (
                        <>{data1?.organic_mobile.rank}</>
                      )}
                    </td>
                    <td class="px-6 py-4  text-sm font-bold text-navy-700 dark:text-white">
                      Organic Mobile
                    </td>
                    <td class=" px-6 py-4">
                      {data1 && data1?.organic_mobile && (
                        <>
                          {data1?.organic_mobile.change > 0 ? (
                            <>
                              <Stock
                                growth={data1?.organic_mobile.change.toString()}
                                chart={
                                  <LineChart
                                    chartData={lineChartDataMiniArea1}
                                    chartOptions={lineChartOptionsMiniArea1}
                                  />
                                }
                              />
                            </>
                          ) : (
                            <Stock
                              growth={data1?.organic_mobile.change.toString()}
                              chart={
                                <LineChart
                                  chartData={lineChartDataMiniArea2}
                                  chartOptions={lineChartOptionsMiniArea2}
                                />
                              }
                            />
                          )}
                        </>
                      )}
                    </td>
                    {/* <td class="px-6 py-4">
                    {data1 && data1?.organic_mobile && (
                      <>
                        {data1?.organic_mobile.change}
                        {data1?.organic_mobile.change > 0 ? (
                          <i class="fa-solid fa-arrow-up ml-1 text-green-500"></i>
                        ) : (
                          <i class="fa-solid fa-arrow-down ml-1 text-red-500"></i>
                        )}
                      </>
                    )}
                  </td> */}
                  </tr>

                  <tr className="w-full">
                    <td class="px-6 py-4">
                      {data1 && data1?.local_pack ? (
                        data1?.local_pack.rank
                      ) : (
                        <>-</>
                      )}
                    </td>
                    <td class="px-6 py-4  text-sm font-bold text-navy-700 dark:text-white">
                      Local Pack
                    </td>
                    <td class=" px-6 py-4">
                      {data1 && data1?.local_pack && (
                        <>
                          {data1?.local_pack.change > 0 ? (
                            <>
                              <Stock
                                growth={data1?.local_pack.change.toString()}
                                chart={
                                  <LineChart
                                    chartData={lineChartDataMiniArea1}
                                    chartOptions={lineChartOptionsMiniArea1}
                                  />
                                }
                              />
                            </>
                          ) : data1?.local_pack.change < 0 ? (
                            <Stock
                              growth={data1?.local_pack.change.toString()}
                              chart={
                                <LineChart
                                  chartData={lineChartDataMiniArea2}
                                  chartOptions={lineChartOptionsMiniArea2}
                                />
                              }
                            />
                          ) : (
                            <>-</>
                          )}
                        </>
                      )}
                    </td>
                    {/* <td class="px-6 py-4">
                    {' '}
                    {data1 && data1?.local_pack && (
                      <>
                        {data1?.local_pack.change}
                        {data1?.local_pack.change > 0 ? (
                          <i class="fa-solid fa-arrow-up ml-1 text-green-500"></i>
                        ) : (
                          <i class="fa-solid fa-arrow-down ml-1 text-red-500"></i>
                        )}
                      </>
                    )}
                  </td> */}
                  </tr>

                  <tr className="w-full">
                    <td class="px-6 py-4">
                      {data1 && data1?.local_finder && (
                        <>
                          {data1?.local_finder?.map((item) => (
                            <>{item.rank}</>
                          ))}
                        </>
                      )}
                    </td>
                    <td class="px-6 py-4  text-sm font-bold text-navy-700 dark:text-white">
                      Local Finder
                    </td>
                    <td class=" px-6 py-4">
                      {data1 && data1?.local_finder && (
                        <>
                          {data1?.local_finder?.map((item) => (
                            <>
                              {item?.change > 0 ? (
                                <>
                                  <Stock
                                    growth={item?.change.toString()}
                                    chart={
                                      <LineChart
                                        chartData={lineChartDataMiniArea1}
                                        chartOptions={lineChartOptionsMiniArea1}
                                      />
                                    }
                                  />
                                </>
                              ) : (
                                <>
                                  <Stock
                                    growth={item?.change.toString()}
                                    chart={
                                      <LineChart
                                        chartData={lineChartDataMiniArea2}
                                        chartOptions={lineChartOptionsMiniArea2}
                                      />
                                    }
                                  />
                                </>
                              )}
                            </>
                          ))}
                        </>
                      )}
                    </td>
                    {/* <td class="px-6 py-4">
                    {data1 && data1?.local_finder && (
                      <>
                        {data1?.local_finder?.map((item) => (
                          <>
                            {item.change && (
                              <>
                                {item?.change}
                                {item?.change > 0 ? (
                                  <i class="fa-solid fa-arrow-up ml-1 text-green-500"></i>
                                ) : (
                                  <i class="fa-solid fa-arrow-down ml-1 text-red-500"></i>
                                )}
                                {item?.gained && <>+</>}
                              </>
                            )}
                          </>
                        ))}
                      </>
                    )}
                  </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
           
         
          </Card>
        </div>
      </div>
    </div>
  );
};
export default SeoInsights;
