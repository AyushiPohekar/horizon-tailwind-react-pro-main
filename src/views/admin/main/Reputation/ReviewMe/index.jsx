import React from 'react';
import image1 from '../../../../../assets/img/users/logo_chesshousedental.jpg'
import Nft1 from "assets/img/nfts/Nft1.png";
const ReviewMe=()=>{
    return(
        <div class="w-full px-10 mt-5">
        <section class="block mb-6">
          <div class="flex items-center gap-80 justify-space-evenly mb-5 pt-0 lg:pt-0">
            <h4
              class="text-[16px] xl:text-[18px] 2xl:text-[22px] font-[700]"
            >
              Reviews
            </h4>
            <div
              class="flex items-center  space-x-4 xl:space-x-4 xl:w-[15rem]"
            >
              <h4
                class="text-[16px] xl:text-[16px] 2xl:text-[18px] font-[700]"
              >
                Location
              </h4>

              <select
                name="location"
                id="location"
                class="w-full bg-white font-normal text-md text-gray-700 border border-gray-400 rounded-lg py-1.5 px-4 leading-tight shadow-md focus:outline-none focus:bg-white focus:border-blue-500 min-w-[20rem]"
              >
                <option value="Chess House Dental"
                  >Chess House Dental</option
                >
                <option value="Harrow Weald Dental"
                  >Harrow Weald Dental</option
                >
              </select>
            </div>
          </div>
          <div class="flex flex-wrap px-5 py-8 rounded-xl border-2 ">
            <div class="revewme_tabs w-full mx-auto svelte-rxpop9">
              <div class="rewtab-content rounded-b-[25px]">
                <div class="tab-panel svelte-rxpop9 active">
                  <div class="w-full mb-6">
                    <h2 class="flex items-center text-[20px] font-[600]">
                      <i
                        class="fa-solid fa-envelope text-xl mr-3 px-3 py-2 bg-primarycolor-500 text-white rounded-full"
                      ></i>
                      Request Reviews from Individual Customers
                    </h2>
                  </div>
                  <form
                    class="mt-6 mb-0 space-y-4 rounded-lg p-8 border shadow-2xl"
                  >
                    <div class="w-full lg:flex lg:-mx-4">
                      <div class="w-full lg:w-1/3 lg:px-4">
                        <input
                          type="hidden"
                          name="user_email"
                          value="monica@fullertonhearing.com"
                        />
                        <div class="relative">
                          <label
                            for="name"
                            class="text-[16px] font-medium text-gray-800 mb-1 ml-1 block"
                            >To</label
                          >
                          <input
                            type="text"
                            name="to_email"
                            id="to_email"
                            placeholder="Please Enter email address"
                            class="w-full bg-gray-100 bg-opacity-100 text-base text-gray-700 py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none"
                            required=""
                          />
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 lg:px-4">
                        <div class="relative">
                          <label
                            for="name"
                            class="text-[16px] font-medium text-gray-800 mb-1 ml-1 block"
                            >Subject</label
                          >
                          <input
                            type="text"
                            name="mail_subject"
                            id="mail_subject"
                            placeholder="We value your feedback"
                            class="w-full bg-gray-100 bg-opacity-100 text-base text-gray-700 py-2.5 px-5 rounded-[10px] border border-gray-300 outline-none"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="w-full lg:flex lg:-mx-4 mt-5">
                      <div class="w-full lg:px-4">
                        <div class="relative">
                          <label
                            for="name"
                            class="text-[16px] font-medium text-gray-800 mb-1 ml-1 block"
                            >Mail Content</label
                          >
                          <div
                            class="w-full p-5 border bg-gray-100 outline-none"
                          ></div>
                          <div
                            class="editable w-full p-5 border outline-none"
                            contenteditable="false"
                          >
                            <div
                              class='bg-[white] p-10 rounded-lg border border-gray-200 pt-15 shadow-xl shadow-gray-300  'style={{ width:"70%",margin: "0px auto", padding: "0px", border: "1px solid #6b7280"}}
                            >
                              <div
                                style={{  textAlign: "center", padding: "15px 10px", display: "block",background:"#E5ECF6"}}
                              >
                                <img
                                  style={{width: "150px", height: "auto", margin: "0 auto", background:"#ffffff", padding:"5px", borderRadius:"4px"}}
                                  src={image1}
                                  alt="logo.png"
                                />
                              </div>
                              <div
                                style={{display: "block",clear:"both", textAlign: "center" ,padding: "20px"}}
                              >
                                <p
                                  style={{texAtlign: "center", margin:"16px 0px 32px 0px" ,fontSize:"16px", color:"#25282b"}}
                                >
                                  Thank you for visiting our office, we
                                  truly hope you enjoyed your visit.
                                </p>
                                <p
                                  style={{textAlign: "center", fontSize:"20px", color:"#25282b",fontFamily:"nunito"}}
                                >
                                  Our goal is to provide the best service
                                  possible. In order to do that, we are
                                  asking that you help us improve our
                                  services by providing your feedback. Your
                                  input helps build our relationship with
                                  each other as well as improve the
                                  experience of future patients at our
                                  practice.
                                </p>
                                <h2
                                  style={{textAlign: "center", fontWeight:" 600", fontSize: "16px", margin:"32px 64px" ,color:"#25282b"}}
                                >
                                  Please leave us a review by clicking the
                                  stars below.
                                </h2>
                                <div
                                  style={{textAlign: "center", padding: "0px 40px"}}
                                >
                                  <a href="#" target="_blank">
                                    <img
                                      src="https://app.legaciestechno.com/dcp/img/stars_img.webp"
                                      alt=""
                                      style={{width: "100%"}}
                                    />
                                  </a>
                                </div>
                              </div>
                              <div
                                style={{color: "black", lineHeight: "18px",textAlign: "center",padding: "15px 10px", display: "block",clear: "both", fontSize:"14px",background:"#E5ECF6"}}
                              >
                                Copyright © 2024 Chess House Dental
                                Practice.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="right-0">
                      <i
                        class="fa fa-refresh"
                        aria-hidden="true"
                        style={{float: "right"}}
                      ></i>
                    </div>
                   
                    <div class="flex mt-5 space-x-2 lg:space-x-3 hidden">
                      <a
                        href="#!"
                        class="hidden rounded-full bg-gray-700 px-6 py-2 text-md font-normal text-white shadow-xl hover:bg-gray-500"
                        >Download History</a
                      >
                      <a
                        href="#!"
                        class="rounded-full bg-primarycolor-500 px-6 py-2 text-md font-normal text-white shadow-xl hover:bg-secondarycolor-500 hidden"
                        >Clear History</a
                      >
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div role="presentation" id="ccs-0.q6rh3nqkl4i" class="bx--modal">
          <div
            tabindex="-1"
            role="dialog"
            aria-modal="true"
            aria-label=""
            class="bx--modal-container"
          >
            <div class="bx--modal-header">
              <button
                type="button"
                aria-label="Close the modal"
                class="bx--modal-close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  class="bx--modal-close__icon"
                >
                  <path
                    d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"
                  ></path>
                </svg>
              </button>
              <h3
                id="bx--modal-header__heading--modal-ccs-0.q6rh3nqkl4i"
                class="bx--modal-header__heading"
              ></h3>
            </div>
            <div
              id="bx--modal-body--ccs-0.q6rh3nqkl4i"
              aria-labelledby="bx--modal-header__heading--modal-ccs-0.q6rh3nqkl4i"
              class="bx--modal-content"
            >
              <h4 id="message" class="text-center"></h4>
            </div>
          </div>
        </div>
      </div>
    
    
    )
}
export default ReviewMe