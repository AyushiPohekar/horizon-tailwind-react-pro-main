import React from 'react';

import Card from 'components/card';

import DonutChart from 'components/charts/DonutChart';

const Dashboard = () => {
  const tabledataleft = [
    {
      Channel: 'Organic Forms',
      November: 0,
      December: 1,
      January: 1,
      MTD: 4,
    },
    {
      Channel: 'Organic Calls',
      November: 0,
      December: 1,
      January: 1,
      MTD: 2,
    },
    {
      Channel: 'Paid Forms',
      November: 2,
      December: 3,
      January: 2,
      MTD: 3,
    },
    {
      Channel: 'Paid Calls',
      November: 0,
      December: 1,
      January: 1,
      MTD: 1,
    },
  ];

  async function change_graph_period() {
    // let data1_dashboard_filter = [];
    // let filter_id_val = document.getElementById('orgnaic_chart_id').value;
    // let usr_id = 225;
    // const apiURL_dashboard_filter =
    //   'https://app.legaciestechno.com/qualiconvert_dcp/api/get_data.php?type=viewall_dashboard&user_email=' +
    //   user_email +
    //   '&user_id=' +
    //   usr_id +
    //   '&filter_count=' +
    //   filter_id_val;
    // console.log(apiURL_dashboard_filter);
    // const response_dashboard_filter = await fetch(apiURL_dashboard_filter);
    // data1_dashboard_filter = await response_dashboard_filter.json();
    // data1_dashboard = data1_dashboard_filter;
    // console.log(data1_dashboard);
  }
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
            onChange={() => change_graph_period()}
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
         
          <DonutChart title="Organic Forms" currentPercentage={80} pastPercentage={20}  />
          <DonutChart title="Organic Calls" currentPercentage={66.7} pastPercentage={33.3} />
          <DonutChart title="Paid Forms" currentPercentage={60} pastPercentage={40} />
          <DonutChart title="Paid Calls" currentPercentage={50} pastPercentage={50} />
        </div>
      </Card>
      <div className="mt-3 flex  h-max w-full  gap-[20px] rounded-[20px] xl:flex-row">
        <Card extra={'w-[60%]  pt-[30px] px-[29px] '}>
          <div className="flex items-center justify-between">
            <div className="w-full rounded-xl border !border-gray-200 px-3 text-sm font-medium text-gray-600 outline-none dark:!border-none dark:bg-navy-700 md:w-fit">
              <select
                className="h-[45px] w-full rounded-xl text-sm font-medium text-gray-600 outline-none dark:bg-navy-700 md:w-fit md:pr-8 xl:pr-20"
                onChange={() => change_graph_period()}
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
                  <th className="px-[14px] pt-[29px]">
                    <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600">
                      November
                    </div>
                  </th>
                  <th className="px-[14px] pt-[29px]">
                    <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600">
                      December
                    </div>
                  </th>
                  <th className="px-[14px] pt-[29px]">
                    <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600">
                      January
                    </div>
                  </th>
                  <th className="px-[14px] pt-[29px]">
                    <div className="text-left text-xs font-bold uppercase tracking-wide text-gray-600">
                      MTD
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="w-full">
                {tabledataleft?.map((row, index) => {
                  return (
                    <>
                      <tr key={index} className="w-full">
                        <td className="font-xs px-[14px] pb-[4px] pt-[19px]">
                          <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                            {row.Channel}
                          </div>
                        </td>
                        <td className="font-xs px-[14px] pb-[4px] pt-[19px]">
                          <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                            {row.November}
                          </div>
                        </td>
                        <td className="font-xs px-[14px] pb-[4px] pt-[19px]">
                          <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                            {row.December}
                          </div>
                        </td>
                        <td className="font-xs px-[14px] pb-[4px] pt-[19px]">
                          <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                            {row.January}
                          </div>
                        </td>
                        <td className="font-xs px-[14px] pb-[4px] pt-[19px]">
                          <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                            {row.MTD}
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
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
          <div class="flex w-full items-center justify-between border-b border-solid border-gray-300 pb-3 mt-3">
            <span class="text-black text-sm font-semibold leading-[13.41px]">
              keywords
            </span>{' '}
            <span class="text-[20px] leading-tight text-blue-500">
              <i class="fa-solid fa-angle-up"></i>
            </span>
          </div>
          <div class="flex w-full items-center justify-between border-b border-solid border-gray-300 pb-3">
            <span class="text-black text-sm font-semibold leading-[13.41px]">
              Volume
            </span>{' '}
            <span class="font-bold">volume</span>
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
                {tabledataleft?.map((row, index) => {
                  return (
                    <>
                      <tr key={index} className="w-full">
                        <td className="font-xs px-[14px] pb-[4px] pt-[19px]">
                          <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                            {row.Channel}
                          </div>
                        </td>
                        <td className="font-xs px-[14px] pb-[4px] pt-[19px]">
                          <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                            {row.November}
                          </div>
                        </td>
                        <td className="font-xs px-[14px] pb-[4px] pt-[19px]">
                          <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
                            {row.December}
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
