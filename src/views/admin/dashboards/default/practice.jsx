import React, { useEffect, useState } from 'react';

import Card from 'components/card';

import DonutChart from 'components/charts/DonutChart';
import axios from 'axios';

const Dashboard = () => {
  const [donutdata, setDonutData] = useState([]);
  const [campaign_id, setCampaign_id] = useState(1555419);
  const [campaigndata, setCampaignData] = useState({});

  let data1_dashboard_channels = [];

  let isChecked = false;
  async function handleCheckboxClick() {
    isChecked = !isChecked;
  }
  console.log(isChecked);

  let isChecked_keywords = false;
  async function handleCheckboxClickKeywords() {
    isChecked_keywords = !isChecked_keywords;
  }
  let isCheckedKeywords = false;
  async function handleCheckboxClickKeywords() {
    isCheckedKeywords = !isCheckedKeywords;
  }

  async function change_channel_period() {
    let data1_dashboard_channels_filter = [];
    let channel_filter = document.getElementById('home_channel').value;

    //nodejs
    const apiURL_dashboard_channel = `http://192.168.1.11:8003/wrapper/channelBottom?channel_filter=${channel_filter}`;

    //php
    let usr_id = 225;
    // const apiURL_dashboard_channel =    "https://app.legaciestechno.com/qualiconvert_dcp/api/get_data.php?type=viewall_dashboard_channel&user_email="+user_email+"&user_id="+usr_id+'&channel_filter='+channel_filter;
    console.log(apiURL_dashboard_channel);
    const response_dashboard_channel = await fetch(apiURL_dashboard_channel);
    data1_dashboard_channels_filter = await response_dashboard_channel.json();
    data1_dashboard_channels = data1_dashboard_channels_filter;
    console.log(data1_dashboard_channels);
  }

  const getdata = async () => {
    const res = await axios.get(
      'http://192.168.1.11:8003/wrapper/organicForm?filter_count=1'
    );
    console.log(res);
    setDonutData(res.data);
  };

  useEffect(() => {
    getdata();
    getchanneldata();
    getcampaigndata();
  }, []);

  const change_graph_period = async (e) => {
    const res = await axios.get(
      `http://192.168.1.11:8003/wrapper/organicForm?filter_count=${e.target.value}`
    );
    setDonutData(res.data);
  };

  const [channeldata, setChanneldata] = useState([]);

  const getchanneldata = async () => {
    const res = await axios.get(
      `http://192.168.1.11:8003/wrapper/channelBottom?channel_filter=3`
    );
    setChanneldata(res.data);
  };

  const filterchanneldata = async (e) => {
    const res = await axios.get(
      `http://192.168.1.11:8003/wrapper/channelBottom?channel_filter=${e.target.value}`
    );
    setChanneldata(res.data);
  };

  const getcampaigndata = async () => {
    const res = await axios.get(
      `http://192.168.1.11:8003/wrapper/chessHouse?campaign_id=${campaign_id}`
    );
    console.log(res);
    setCampaignData(res.data);
  };

  

  return (
    <div className="mt-20 h-full w-full gap-[20px]  rounded-[20px] sm:mt-10 xl:flex-row">
      <div class="mb-2 flex flex-row items-center justify-end gap-2">
        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white from-[#ffffff0f] to-white/0 text-3xl text-brand-500 shadow-xl shadow-gray-200 dark:!bg-navy-800 dark:bg-gradient-to-b dark:text-white dark:shadow-darkinset dark:shadow-white/20">
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <path fill="none" d="M0 0h24v24H0z"></path> */}
            <path d="M12 2C8.69 2 6 4.69 6 8c0 4.17 5.76 11.56 6 11.84a.5.5 0 0 0 .71 0C14.24 19.56 20 12.17 20 8c0-3.31-2.69-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
          </svg>
        </div>
        {/* <h4 class="text-base font-medium leading-6 text-navy-700 dark:text-white flex items-center">
          {' '}
          Location:{' '}
        </h4> */}

        <div className=" w-full rounded-xl border !border-gray-200 px-3 text-sm font-medium text-gray-600 outline-none dark:!border-none dark:bg-navy-700 md:w-fit">
          <select
            className="h-[45px] w-full rounded-xl text-sm font-medium text-gray-600 outline-none dark:bg-navy-700 md:w-fit md:pr-8 xl:pr-20 "
            name="location"
            id="location"
          >
            <option value="Chess House Dental">Chess House Dental</option>
            <option value="Harrow Weald Dental">Harrow Weald Dental</option>
          </select>
        </div>
      </div>

      <Card extra={'w-full pb-[80px] pt-[30px] px-[29px] h-fit xl:h-[500px]'}>
        <div className="w-full rounded-xl border !border-gray-200 px-3 text-sm font-medium text-gray-600 outline-none dark:!border-none dark:bg-navy-700 md:w-fit">
          <select
            className="h-[45px] w-full rounded-xl text-sm font-medium text-gray-600 outline-none dark:bg-navy-700 md:w-fit md:pr-8 xl:pr-20"
            onChange={change_graph_period}
            id="orgnaic_chart_id"
            name="orgnaic_chart_id"
          >
            <option value="1">Last Month</option>
            <option value="3">Last 3 Months</option>
            <option value="6">Last 6 Months</option>
            <option value="9">Last 9 Months</option>
          </select>
        </div>

        <div className="mx-auto mt-3 flex w-full items-center justify-center">
          <DonutChart
            title="Organic Forms"
            currentPercentage={donutdata?.organic_forms_percentage}
            pastPercentage={100 - donutdata?.organic_forms_percentage}
          />
          <DonutChart
            title="Organic Calls"
            currentPercentage={donutdata?.organic_calls_percentage}
            pastPercentage={100 - donutdata?.organic_calls_percentage}
          />
          <DonutChart
            title="Paid Forms"
            currentPercentage={donutdata?.paid_forms_percentage}
            pastPercentage={100 - donutdata?.paid_forms_percentage}
          />
          <DonutChart
            title="Paid Calls"
            currentPercentage={donutdata?.paid_calls_percentage}
            pastPercentage={100 - donutdata?.paid_calls_percentage}
          />
        </div>
      </Card>
      <div className="mt-3 flex  h-max w-full  gap-[20px] rounded-[20px] xl:flex-row">
        <Card extra={'w-[60%]  pt-[30px] px-[29px] '}>
          <div className="flex items-center justify-between">
            <div className="w-full rounded-xl border !border-gray-200 px-3 text-sm font-medium text-gray-600 outline-none dark:!border-none dark:bg-navy-700 md:w-fit">
              <select
                className="h-[45px] w-full rounded-xl text-sm font-medium text-gray-600 outline-none dark:bg-navy-700 md:w-fit md:pr-8 xl:pr-20"
                onChange={filterchanneldata}
                id="orgnaic_chart_id"
                name="orgnaic_chart_id"
              >
                <option value="3">Last 3 Months</option>
                <option value="6">Last 6 Months</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-scroll 2xl:overflow-x-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-[14px] pt-[29px]">
                    <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600">
                      Channel
                    </div>
                  </th>
                  {channeldata?.channel_months?.map((month, index) => (
                    <>
                      <th className="px-[14px] pt-[29px]">
                        {index == channeldata?.channel_months.length - 1 ? (
                          <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600">
                            MTD
                          </div>
                        ) : (
                          <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600">
                            {month}
                          </div>
                        )}
                      </th>
                    </>
                  ))}
                </tr>
              </thead>

              <tbody className="w-full">
                <tr className="w-full">
                  <th
                    scope="row"
                    className="font-xs px-[14px] pb-[4px] pt-[19px]"
                  >
                    <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                      Organic Forms{' '}
                    </div>
                  </th>
                  {channeldata?.channel_data?.map((month, index) => (
                    <td class="px-6 py-4">{month['Organic Forms']?.count}</td>
                  ))}
                </tr>

                <tr className="w-full">
                  <th
                    scope="row"
                    className="font-xs px-[14px] pb-[4px] pt-[19px]"
                  >
                    <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                      Organic Calls
                    </div>
                  </th>
                  {channeldata?.channel_data?.map((month, index) => (
                    <td class="px-6 py-4">{month['Organic Calls']?.count}</td>
                  ))}
                </tr>

                <tr className="w-full">
                  <th
                    scope="row"
                    className="font-xs px-[14px] pb-[4px] pt-[19px]"
                  >
                    <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                      {' '}
                      Paid Forms
                    </div>
                  </th>
                  {channeldata?.channel_data?.map((month, index) => (
                    <td class="px-6 py-4">{month['Paid Forms']?.count}</td>
                  ))}
                </tr>

                <tr className="w-full">
                  <th
                    scope="row"
                    className="font-xs px-[14px] pb-[4px] pt-[19px]"
                  >
                    <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                      Paid Calls
                    </div>
                  </th>
                  {channeldata?.channel_data?.map((month, index) => (
                    <td class="px-6 py-4">{month['Paid Calls']?.count}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
        <Card extra={'w-[40%] pb-[20px] pt-[30px] px-[29px] '}>
          <div>
            <input
              type="checkbox"
              class='undefined relative h-5 w-10 appearance-none rounded-[20px] bg-[#e0e5f2] outline-none transition 
      duration-[0.5s] before:absolute before:top-[50%] before:h-4 before:w-4 before:translate-x-[2px] before:translate-y-[-50%]
      before:rounded-[20px] before:bg-white before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition
      before:content-[""] checked:bg-brand-500
      checked:before:translate-x-[22px] hover:cursor-pointer dark:bg-white/5 dark:checked:bg-brand-400'
              name="weekly"
              id="weekly"
            />
          </div>

          <div class="mt-3 flex w-full items-center justify-between border-b border-solid border-gray-300 pb-3">
            <span class="text-black text-sm font-semibold leading-[13.41px]">
              {campaigndata?.keywords}
            </span>{' '}
            <span class="text-[20px] leading-tight text-blue-500">
              <i class="fa-solid fa-angle-up"></i>
            </span>
          </div>
          <div class="flex w-full items-center justify-between border-b border-solid border-gray-300 pb-3">
            <span class="text-black text-sm font-semibold leading-[13.41px]">
              Volume
            </span>{' '}
            <span class="font-bold">{campaigndata?.volume}</span>
          </div>

          <div className="overflow-x-scroll 2xl:overflow-x-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-[14px] pt-[29px]">
                    <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600"></div>
                  </th>
                  <th className="px-[14px] pt-[29px]">
                    <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600">
                      Rank
                    </div>
                  </th>
                  <th className="px-[14px] pt-[29px]">
                    <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600">
                      Change
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="w-full">
                <tr className="w-full">
                  <td class="flex px-6 py-4">
                  <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      class="mr-1 w-6"
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
                    </div>
                   
                  </td>
                  <td class="px-6 py-4">
                    {campaigndata && campaigndata?.organic_desktop && (
                      <>{campaigndata?.organic_desktop.rank}</>
                    )}
                  </td>
                  <td class="px-6 py-4">
                    {campaigndata && campaigndata?.organic_desktop && (
                      <>
                        {campaigndata?.organic_desktop.change}
                        {campaigndata?.organic_desktop.change > 0 ? (
                          <i class="fa-solid fa-arrow-up ml-1 text-green-500"></i>
                        ) : (
                          <i class="fa-solid fa-arrow-down ml-1 text-red-500"></i>
                        )}
                      </>
                    )}
                  </td>
                </tr>

                <tr className="w-full">
                  <td class="flex px-6 py-4">
                  <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      class="mr-1 w-6"
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
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    {campaigndata && campaigndata?.organic_mobile && (
                      <>{campaigndata?.organic_mobile.rank}</>
                    )}
                  </td>
                  <td class="px-6 py-4">
                    {campaigndata && campaigndata?.organic_mobile && (
                      <>
                        {campaigndata?.organic_mobile.change}
                        {campaigndata?.organic_mobile.change > 0 ? (
                          <i class="fa-solid fa-arrow-up ml-1 text-green-500"></i>
                        ) : (
                          <i class="fa-solid fa-arrow-down ml-1 text-red-500"></i>
                        )}
                      </>
                    )}
                  </td>
                </tr>

                <tr className="w-full">
                  <td class="flex px-6 py-4">
                  <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      class="mr-1 w-6"
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
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    {campaigndata && campaigndata?.local_pack ? (
                      campaigndata?.local_pack.rank
                    ) : (
                      <>-</>
                    )}
                  </td>
                  <td class="px-6 py-4">
                    {' '}
                    {campaigndata && campaigndata?.local_pack && (
                      <>
                        {campaigndata?.local_pack.change}
                        {campaigndata?.local_pack.change > 0 ? (
                          <i class="fa-solid fa-arrow-up ml-1 text-green-500"></i>
                        ) : (
                          <i class="fa-solid fa-arrow-down ml-1 text-red-500"></i>
                        )}
                      </>
                    )}
                  </td>
                </tr>

                <tr className="w-full">
                  <td class="flex px-6 py-4">
                  <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      class="mr-1 w-6"
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
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    {campaigndata && campaigndata?.local_finder && (
                      <>
                        {campaigndata?.local_finder?.map((item) => (
                          <>{item.rank}</>
                        ))}
                      </>
                    )}
                  </td>
                  <td class="px-6 py-4">
                    {campaigndata && campaigndata?.local_finder && (
                      <>
                        {campaigndata?.local_finder?.map((item) => (
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
