import React from 'react';

const InnerData = ({ data1_dashboard_organic, organic_booked,verified_organic_calls_count,organic_no_consultation, verified_chatbot_count,verified_forms_count,verified_booked,organic_newlead, user_email,response_data_d_change,open  }) => {
    
  return (
    <>
      {/* <div class="mb-10 grid w-full grid-cols-1 gap-6 px-10 lg:grid-cols-3 2xl:gap-10">
        <div class="flex w-full flex-shrink-0 flex-col">
          <div class="mb-3 flex h-10 flex-shrink-0 items-center px-0">
            <span class="block text-[18px] font-[600]">Enquires</span>
            <span class="ml-2 flex h-5 w-5 items-center justify-center rounded bg-gray-500 bg-opacity-70 text-sm font-semibold text-white">
              {data1_dashboard_organic && organic_booked.length && (
                <>{organic_booked.length}</>
              )}
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
            {data1_dashboard_organic && organic_booked.length > 0 && (
              <>
                {organic_booked?.map((row) => (
                  <>
                    {row.type === 'website_form' && (
                      <>
                        <div class="group relative flex flex-col items-start gap-4 rounded-[20px] border border-solid border-[#ff601e] bg-white  p-4 2xl:rounded-[30px] 2xl:p-6">
                          <div class="mt-0 flex w-full items-center justify-between">
                            <div class="flex items-center">
                              <div class="text-[16px] font-[600]">
                                Website Form
                              </div>
                              <div class="ml-3 rounded-full bg-[#f5f5eb] p-2">
                                <i class="fa-solid fa-globe text-[20px]"></i>
                              </div>
                            </div>
                            <div class="flex items-center">
                              <div class="text-[16px] font-[600]">
                                <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>{' '}
                                {row.date}
                              </div>
                            </div>
                          </div>
                          <div class="justify-between1 relative mt-5 flex w-full items-start">
                            <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                              <div class="w-full">
                                <i class="fa-solid fa-user mr-2 text-[15px]"></i>{' '}
                                {row.first_name}
                              </div>
                              <div class="w-full">
                                <i class="fa-solid fa-phone mr-2 text-[15px]"></i>
                                {row.ph_number}
                              </div>
                              <div class="w-full">
                                <i class="fa-solid fa-envelope mr-2 text-[15px]"></i>
                                {row.email}
                              </div>
                              <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                                <div class="w-full">
                                  <i class="fa-solid fa-message mr-2 text-[15px]"></i>
                                  {row.message != '' &&
                                  row.message.length > 14 ? (
                                    <>
                                      <span>
                                        {row.message.substring(0, 30)} ...
                                      </span>
                                      <a
                                        href="#!"
                                        title="View More"
                                        onClick={() =>
                                          loadremaining(row.message)
                                        }
                                      >
                                        <i class="fa-solid fa-eye"></i>
                                      </a>
                                    </>
                                  ) : (
                                    <>
                                      {row.message != '' ||
                                      row.message == ' ' ||
                                      row.message == '-' ? (
                                        <>
                                          <span>---</span>
                                        </>
                                      ) : (
                                        <>
                                          <span>{row.message} </span>
                                        </>
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                            <a
                              href="#!"
                              onCclick={() => open_popover('outcome_' + row.id)}
                              class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                            >
                              Status
                            </a>
                            <div
                              id="outcome_{row.id}"
                              class="status_drop absolute right-0 top-8 hidden w-[10rem] rounded-[10px] border border-solid border-[#ddd] bg-white p-3 shadow-sm"
                            >
                              <div class="w-full gap-3">
                                <div class="mb-2">
                                  <a
                                    href="#!"
                                    onClick={() =>
                                      change_status(
                                        row.id,
                                        row.tablename,
                                        'booked'
                                      )
                                    }
                                    class="text-black leading-normal"
                                  >
                                    Consult Booked
                                  </a>
                                </div>
                                <div class="mb-2">
                                  <a
                                    href="#!"
                                    onClick={() =>
                                      change_status(
                                        row.id,
                                        row.tablename,
                                        'newlead'
                                      )
                                    }
                                    class="text-black leading-normal"
                                  >
                                    New Leads
                                  </a>
                                </div>
                                <div class="mb-2">
                                  <a
                                    href="#!"
                                    onClick={() =>
                                      change_status(
                                        row.id,
                                        row.tablename,
                                        'no_consultation'
                                      )
                                    }
                                    class="text-black leading-normal"
                                  >
                                    No Consultation
                                  </a>
                                </div>
                                <div class="mb-2">
                                  <a
                                    href="#!"
                                    onClick={() =>
                                      change_status(
                                        row.id,
                                        row.tablename,
                                        'existing_patient'
                                      )
                                    }
                                    class="text-black leading-normal"
                                  >
                                    Existing Patient{' '}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="mt-2 flex w-full items-center justify-between">
                            <div class=""></div>
                            <div class="inline-flex rounded-[30px] bg-[#fff3e5] px-3 py-1 text-[13px] font-medium capitalize leading-normal text-[#ff540f]">
                              {row.status == 'newlead' ? (
                                <>
                                  <span> New Lead</span>
                                </>
                              ) : row.status == 'no_consultation' ? (
                                <>
                                  <span>No Consultation</span>
                                </>
                              ) : row.status == 'existing_patient' ? (
                                <>
                                  <span> Existing Patient</span>
                                </>
                              ) : (
                                <> {row.status}</>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default InnerData;
