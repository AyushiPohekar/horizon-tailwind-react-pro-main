import React, { useState, useEffect } from 'react';
import Nft1 from 'assets/img/nfts/Nft1.png';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { GrFormView } from 'react-icons/gr';
import { FaMessage } from 'react-icons/fa6';
import Modal from './Modal';
import { FaCalendarAlt } from 'react-icons/fa';
import Card from 'components/card';
const Review = () => {
  let [toggle, setToggle] = useState(false);
  let total_rating_facebook = 12;
  let total_rating_yelp = 0;
  let total_reviews_facebook = 0;
  //let total_reviews_google;
  let total_rating_google = 9;

  let total_rating = 9;
  let total_reviews_yelp = 9;

  let total_reviews = 9;
  let filter_data = [];

  //let main_columnheader=10;
  let user_email = 'demo@chesshousedental.com';

  //  let data1_all=[];
  let [data1, setData] = useState([]);
  let [text, setText] = useState('');
  let [data1_all, setDataAll] = useState([]);

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

  async function getData() {
    const apiURL =
      'https://app.legaciestechno.com/qualiconvert_dcp/api/get_data.php?type=review_data&email=' +
      user_email;
    const response = await fetch(apiURL);
    setData(await response.json());

    total_reviews_google = data1.total_reviews_google;
    total_reviews_facebook = data1.total_reviews_facebook;
    total_reviews_yelp = data1.total_reviews_yelp;
    total_reviews = data1.total_reviews;
    total_rating = data1.total_rating;
    total_rating_google = data1.total_rating_google;
    total_rating_facebook = data1.total_rating_facebook;
    total_rating_yelp = data1.total_rating_yelp;

    // console.log(apiURL);
    // console.log(total_reviews_google)
  }
  async function getAll() {
    const apiURL_all =
      'https://app.legaciestechno.com/qualiconvert_dcp/api/get_data.php?type=viewall_review_insights&user_email=' +
      user_email;

    /// console.log(apiURL_all);
    const response_all = await fetch(apiURL_all);
    setDataAll(await response_all.json());
    // console.log(data1_all);
    main_columnheader = data1_all.all_data_google;
    reviews_count = data1_all.facebook_count;

    //console.log(reviews_count);

    let currentDate = new Date().toJSON().slice(0, 10);
  }
  function loadremaining(text) {
    // document.getElementById('leads_data').innerHTML = rev_data;
    setText(text);
    setToggle(!toggle);
  }
  useEffect(() => {
    getData();
    getAll();
  }, []);

  let total_reviews_google = data1.total_reviews_google;
  let main_columnheader = data1_all.all_data_google;
  let reviews_count = data1_all.facebook_count;
  console.log(reviews_count);

  return (
    <>
      <div class="bg-white1 w-full p-0">
        <div class="main_tabs w-full">
          <div class="mt-5 w-full px-10">
            <div class="w-full">
              <div class="mb-3 flex w-full items-center justify-between opacity-70">
                <h2 class="text-black text-base font-[700]">Review </h2>
              </div>

              <div class="pt-15 relative min-h-[300px] rounded-lg border border-gray-200 bg-[white] p-10 shadow-xl  shadow-gray-300">
                <div class="absolute1 left-0 top-0 z-40 h-full w-full bg-white/70"></div>
                <div
                  class="mb-3 w-full  rounded-[20px] p-7 lg:mb-0 "
                  style={{ backgroundImage: `url(${Nft1})` }}
                >
                  <div class="grid grid-cols-1 gap-5 lg:grid-cols-5">
                    <div class="bg-black w-full rounded-[10px] border border-gray-500 bg-white p-3 text-center">
                      <div class="flex1 mb-2 items-center justify-start space-x-2 rounded-md bg-[] py-3">
                        <i class="fa-brands fa-google text-[20px]"></i>{' '}
                        <span class="pb-2 text-[26px] font-bold">
                          ({total_reviews_google})
                        </span>
                        <div class="text-black mt-2 text-sm font-medium ">
                          Google Reviews
                        </div>
                      </div>

                      <div class="mt-3 flex items-center justify-center">
                        <div class="text-black text-3xl font-bold">
                          {total_rating_facebook.toFixed(1)}
                        </div>
                      </div>
                      <div class="flex items-center justify-center space-x-1 text-[16px] xl:text-[15px] 2xl:text-[15px]">
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                      </div>
                      <div class="text-black mt-3 pb-2 ">
                        Average Star Rating
                      </div>
                    </div>

                    <div class="bg-black w-full rounded-[10px] border border-gray-500 bg-[#ffffff] p-3  text-center">
                      <div class="flex1 mb-2 items-center justify-start space-x-2 rounded-md bg-[white] py-3">
                        <i class="fa-brands fa-facebook-f text-[20px]"></i>{' '}
                        <span class="pb-2 text-[26px] font-bold">
                          ({total_reviews_facebook})
                        </span>
                        <div class="text-black mt-2 text-sm font-medium  ">
                          Facebook Reviews
                        </div>
                      </div>

                      <div class="mt-3 flex items-center justify-center">
                        <div class="text-black text-3xl font-bold">
                          {total_rating_facebook ? (
                            <span>{total_rating_facebook.toFixed(1)}</span>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                      <div class="flex items-center justify-center space-x-1 text-[16px] xl:text-[15px] 2xl:text-[15px]">
                        <i class="fa-solid fa-star text-gray-400"></i>
                        <i class="fa-solid fa-star text-gray-400"></i>
                        <i class="fa-solid fa-star text-gray-400"></i>
                        <i class="fa-solid fa-star text-gray-400"></i>
                        <i class="fa-solid fa-star text-gray-400"></i>
                      </div>
                      <div class="text-black mt-3 pb-2">
                        Average Star Rating
                      </div>
                    </div>

                    <div class="bg-black w-full rounded-[10px] border border-gray-500 bg-white p-3  text-center">
                      <div class="flex1 mb-2 items-center justify-start space-x-2 rounded-md bg-[white] py-3">
                        <i class="fa-brands fa-yelp text-[20px]"></i>{' '}
                        <span class="pb-2 text-[26px] font-bold">
                          ({total_reviews_yelp})
                        </span>
                        <div class="text-black mt-2 text-sm font-medium  ">
                          Yelp Reviews
                        </div>
                      </div>

                      <div class="mt-3 flex items-center justify-center">
                        <div class="text-black text-3xl font-bold">
                          {total_rating_yelp ? (
                            <span>{total_rating_yelp.toFixed(1)}</span>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                      <div class="flex items-center justify-center space-x-1 text-[16px] xl:text-[15px] 2xl:text-[15px]">
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                      </div>
                      <div class="text-black mt-3 pb-2">
                        Average Star Rating
                      </div>
                    </div>

                    <div class="w-full rounded-[10px] border border-gray-500 bg-white bg-white p-3 text-center">
                      <div class="flex1 mb-2 items-center justify-start space-x-2 rounded-md bg-[white] py-3">
                        <div class="text-black mt-2 text-sm font-medium  ">
                          Total <br />
                          Reviews
                        </div>
                      </div>

                      <div class="mt-3 flex items-center justify-center">
                        <div class="text-black text-3xl font-bold">
                          {total_reviews}
                        </div>
                      </div>
                      <div class="flex items-center justify-center space-x-1 text-[16px] xl:text-[15px] 2xl:text-[15px]">
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                      </div>

                      <div class="text-black mt-3 pb-2">
                        <i class="fa-brands fa-google mr-2 text-[18x]"></i>
                        <i class="fa-brands fa-facebook-f mr-2 text-[18px]"></i>
                        <i class="fa-brands fa-yelp text-[18x]"></i>
                      </div>
                    </div>

                    <div class="w-full rounded-[10px] border border-gray-500 bg-white p-3  text-center">
                      <div class="flex1 mb-2 items-center justify-start space-x-2 rounded-md bg-[#f5f5f7] py-3">
                        <div class="text-black mt-2 text-sm font-medium  ">
                          Average <br /> Star Rating
                        </div>
                      </div>

                      <div class="mt-3 flex items-center justify-center">
                        <div class="text-black text-3xl font-bold">
                          {total_rating ? (
                            <span>{total_rating.toFixed(1)}</span>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                      <div class="flex items-center justify-center space-x-1 text-[16px] xl:text-[15px] 2xl:text-[15px]">
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <i class="fa-solid fa-star text-yellow-400"></i>
                      </div>

                      <div class="text-black mt-3 pb-2">
                        <i class="fa-brands fa-google mr-2 text-[18x]"></i>
                        <i class="fa-brands fa-facebook-f mr-2 text-[18px]"></i>
                        <i class="fa-brands fa-yelp text-[18x]"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-10 mt-10 flex w-full items-center border-b border-t border-solid border-[#e5e5e1] px-10 py-4">
            <div class="min-w-0 flex-1"> </div>
            <div class="ml-auto flex items-center space-x-4">
              <form
                onSubmit={(e) => (e.preventDefault = { filter_data })}
                enctype="multipart/form-data"
                class="flex w-full items-center space-x-3"
              >
                <div class="flex w-full min-w-[16rem] items-center space-x-3">
                  <span class="mr-1">Source by </span>
                  <select
                    onChange="{() => getreviewcount()}"
                    name="source"
                    id="source"
                    class="w-[8rem] rounded-xl border border-gray-600 bg-white px-2.5 py-1.5 leading-tight text-gray-700 "
                  >
                    <option value="All" class="">
                      All
                    </option>
                    <option value="Google" class="">
                      Google
                    </option>
                    <option value="Facebook" class="">
                      Facebook
                    </option>
                    <option value="Yelp" class="">
                      Yelp
                    </option>
                  </select>
                </div>

                <div class="flex w-full min-w-[16rem] items-center space-x-3">
                  <span class="mr-1">Rate by </span>
                  <select
                    name="rate_by"
                    id="rate_by"
                    onChange="{() => getreviewcount()}"
                    class="w-[8rem] rounded-xl border border-gray-600 bg-white px-2.5 py-1.5 leading-tight text-gray-700 "
                  >
                    <option value="All" class="">
                      All
                    </option>
                    <option value="5" class="">
                      5
                    </option>
                    <option value="4" class="">
                      4
                    </option>
                    <option value="3" class="">
                      3
                    </option>
                    <option value="2" class="">
                      2
                    </option>
                    <option value="1" class="">
                      1
                    </option>
                  </select>
                </div>

                <div class="flex w-full items-center justify-center space-x-5">
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
              </form>
            </div>
          </div>

          <div class="mt-8 w-full px-10">
            <div class="grid grid-cols-1   gap-6 py-0 lg:grid-cols-2 xl:grid-cols-4 xl:py-10 2xl:grid-cols-6">
              {reviews_count
                ? reviews_count.map((item) => (
                    <div class="flex items-center  rounded-lg bg-white p-4 shadow-lg">
                      <div class="text-black lg:cols-3 md:cols-6 sm:cols-6 mr-4 flex-none rounded-full bg-[white] p-3 text-lg">
                        {item.key == 'Google' ? (
                          <FaGoogle />
                        ) : item.key == 'Facebook' ? (
                          <FaFacebook />
                        ) : (
                          <i class="fa-brands fa-yelp"></i>
                        )}
                      </div>
                      <div>
                        <p class="mb-0 text-[18px] font-[600] text-gray-800">
                          {item.key}
                        </p>
                        <p class="text-black text-[32px] font-[700]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))
                : ''}
            </div>

            <div class="mt-5 grid w-full grid-cols-4 gap-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
              {toggle ? (
                <Modal
                  toggle={toggle}
                  setToggle={setToggle}
                  loadremaining={loadremaining}
                  setText={setText}
                  text={text}
                />
              ) : (
                ''
              )}

              {main_columnheader
                ? main_columnheader.map((item) => (
                    <Card extra={'w-full  py-[10px] px-[20px] h-fit '}>
                      <div class="mt-0 flex w-full items-center justify-between ">
                        <div class="lg:cols-3 md:cols-6 sm:cols-12 flex items-center">
                          <div class="">
                            <div class="inline-flex  font-medium capitalize leading-normal text-[blue]">
                              {item.source}
                            </div>
                          </div>
                          <div class="ml-3 hidden rounded-full bg-[#f5f5eb] p-2">
                            <i class="fa-solid fa-globe text-[20px]"></i>
                          </div>
                        </div>
                        <div class=" w-1/2  items-center  ">
                          <div class="flex flex-row gap-2 text-[14px] font-[600]">
                            <FaCalendarAlt className="mt-1" /> {item.date}
                          </div>
                        </div>
                      </div>
                      <div class="justify-between1 relative mt-5 flex w-full items-start">
                        <div class="flex flex-row flex-wrap items-center gap-5 text-[14px] 2xl:text-[15px]">
                          <div class=" flex w-full flex-row gap-4">
                            <FaStar /> {item.rating}
                          </div>
                          <div class="flex flex-wrap items-center gap-3 text-[12px] 2xl:text-[15px]">
                            <div class="flex w-full gap-3">
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
                              <FaMessage className="mt-2" />
                              {item.review != '' && item.review.length > 14 ? (
                                <div className="flex flex-row gap-0">
                                  {' '}
                                  <span className="mt-1.5">
                                    {item.review.substring(0, 30)}...
                                  </span>
                                  <GrFormView
                                    onClick={() =>
                                      loadremaining(
                                        item.review.substring(0, 200)
                                      )
                                    }
                                    className="text-green text-4xl"
                                  />
                                </div>
                              ) : (
                                ''
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                : ' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
