import React, { useEffect, useState } from 'react';



import DonutChart from 'components/charts/DonutChart';
import axios from 'axios';
import LineChart from 'components/charts/LineChart';
import {
  lineChartDataMiniArea1,
  lineChartOptionsMiniArea1,
  lineChartDataMiniArea2,
  lineChartOptionsMiniArea2,
} from 'variables/charts';
import Stock from 'views/admin/main/account/billing/components/Stock';
import Card from './components/card';

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
      <div className="mb-5 mt-10 flex items-center justify-between px-5">
        <h3 class="text-[#00000] font-[600]">Performance Data</h3>
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
      </div>
      <div className="flex gap-4 px-5">
        <Card extra={'flex-1 '} backgroundcolor={"bg-[#E3F5FF]"}>
          <DonutChart
            title="Organic Forms"
            currentPercentage={donutdata?.organic_forms_percentage}
            pastPercentage={100 - donutdata?.organic_forms_percentage}
          />
        </Card>
        <Card extra={'flex-1 ' } backgroundcolor={"bg-[#E5ECF6]"}>
          <DonutChart
            title="Organic Calls"
            currentPercentage={donutdata?.organic_calls_percentage}
            pastPercentage={100 - donutdata?.organic_calls_percentage}
          />
        </Card>
        <Card extra={'flex-1'} backgroundcolor={"bg-[#E3F5FF]"}>
          <DonutChart
            title="Paid Forms"
            currentPercentage={donutdata?.paid_forms_percentage}
            pastPercentage={100 - donutdata?.paid_forms_percentage}
          />
        </Card>
        <Card extra={'flex-1'} backgroundcolor={"bg-[#E5ECF6]"}>
          <DonutChart
            title="Paid Calls"
            currentPercentage={donutdata?.paid_calls_percentage}
            pastPercentage={100 - donutdata?.paid_calls_percentage}
          />
        </Card>
      </div>
      <div className="mt-3 flex  h-max w-full  gap-[20px] rounded-[20px] xl:flex-row px-5">
        <Card extra={'w-[40%] pb-[20px] pt-[30px] px-[29px] '}>
          <div class="flex w-full items-center justify-between pb-0">
            <span class="text-[#031390] font-[600]">Volume</span>
            <span class="font-bold">{campaigndata?.volume}</span>
          </div>

          <div className="">
            <table className="w-full">
              <thead className="border-b border-solid border-gray-300">
                <tr >
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
                    {campaigndata && campaigndata?.organic_desktop && (
                      <>{campaigndata?.organic_desktop.rank}</>
                    )}
                  </td>
                  <td class=" px-6 py-4  text-sm font-bold text-navy-700 dark:text-white ">
                    Organic Desktop
                    {/* <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white mt-auto">
                      Organic Desktop
                    </div> */}
                  </td>

                  <td class="px-6 py-4">
                    {campaigndata && campaigndata?.organic_desktop && (
                      <>
                        {campaigndata?.organic_desktop > 0 ? (
                          <>
                            <Stock
                              growth={campaigndata?.organic_desktop.toString()}
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
                            growth={campaigndata?.organic_desktop.change.toString()}
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
                  </td> */}
                </tr>

                <tr className="w-full">
                  <td class="px-6 py-4">
                    {campaigndata && campaigndata?.organic_mobile && (
                      <>{campaigndata?.organic_mobile.rank}</>
                    )}
                  </td>
                  <td class="px-6 py-4  text-sm font-bold text-navy-700 dark:text-white">
                      Organic Mobile
                   
                  </td>
                  <td class=" px-6 py-4">
                    {campaigndata && campaigndata?.organic_mobile && (
                      <>
                        {campaigndata?.organic_mobile.change > 0 ? (
                          <>
                            <Stock
                              growth={campaigndata?.organic_mobile.change.toString()}
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
                            growth={campaigndata?.organic_mobile.change.toString()}
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
                  </td> */}
                </tr>

                <tr className="w-full">
                  <td class="px-6 py-4">
                    {campaigndata && campaigndata?.local_pack ? (
                      campaigndata?.local_pack.rank
                    ) : (
                      <>-</>
                    )}
                  </td>
                  <td class="px-6 py-4  text-sm font-bold text-navy-700 dark:text-white">
                      Local Pack
                  
                  </td>
                  <td class=" px-6 py-4">
                    {campaigndata && campaigndata?.local_pack && (
                      <>
                        {campaigndata?.local_pack.change > 0 ? (
                          <>
                            <Stock
                              growth={campaigndata?.local_pack.change.toString()}
                              chart={
                                <LineChart
                                  chartData={lineChartDataMiniArea1}
                                  chartOptions={lineChartOptionsMiniArea1}
                                />
                              }
                            />
                          </>
                        ) :campaigndata?.local_pack.change < 0? (
                          <Stock
                            growth={campaigndata?.local_pack.change.toString()}
                            chart={
                              <LineChart
                                chartData={lineChartDataMiniArea2}
                                chartOptions={lineChartOptionsMiniArea2}
                              />
                            }
                          />
                        ):(<>-</>)}
                      </>
                    )}
                  </td>
                  {/* <td class="px-6 py-4">
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
                  </td> */}
                </tr>

                <tr className="w-full">
                  <td class="px-6 py-4">
                    {campaigndata && campaigndata?.local_finder && (
                      <>
                        {campaigndata?.local_finder?.map((item) => (
                          <>{item.rank}</>
                        ))}
                      </>
                    )}
                  </td>
                  <td class="px-6 py-4  text-sm font-bold text-navy-700 dark:text-white">
                      Local Finder
                    
                  </td>
                  <td class=" px-6 py-4">

                   {
                    campaigndata && campaigndata?.local_finder &&(
                      <>
                      {
                       campaigndata?.local_finder?.map((item)=>(
                        <>
                        {
                          item?.change>0?(<>
                            <Stock
                              growth={item?.change.toString()}
                              chart={
                                <LineChart
                                  chartData={lineChartDataMiniArea1}
                                  chartOptions={lineChartOptionsMiniArea1}
                                />
                              }
                            />
                          
                          
                          
                          </>):(<>
                            <Stock
                              growth={item?.change.toString()}
                              chart={
                                <LineChart
                                  chartData={lineChartDataMiniArea2}
                                  chartOptions={lineChartOptionsMiniArea2}
                                />
                              }
                            />
                          
                          
                          
                          </>)
                        }
                        
                        
                        
                        </>
                       ))
                      }
                      
                      
                      </>
                    )
                   }






                  </td>
                  {/* <td class="px-6 py-4">
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
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
        <Card extra={'w-[60%] pb-[20px] pt-[30px] px-[29px] h-max'}>
        <div className="flex items-center justify-between">
          <div class="text-[#031390] font-[600]">Performance data</div>
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
      </div>
    </div>
  );
};

export default Dashboard;
