import React, { useEffect, useState } from 'react';
import {
  MdOutlineBarChart,
  MdPerson,
  MdFileCopy,
  MdPhone,
  MdChat,
} from 'react-icons/md';
import MiniStatistics from './components/MiniStatistics';
import { SiGoogleforms } from 'react-icons/si';
import Card from 'components/card';
import InnerData from './components/InnerData';
import axios from 'axios';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,

} from '@chakra-ui/modal';
import SolidSubtleAlert from 'views/admin/main/others/notifications/components/SolidSubtleAlert';
import ModalComponent from './components/Modal';


const Organic = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [leadsData, setLeadsData] = useState('');
  let user_email = '';
  let currentDate = new Date().toJSON().slice(0, 10);
  let [data1_dashboard_organic, setdata1_dashboard_organic] = useState([]);
  let organic_booked_filter = [];
  let organic_newlead_filter = [];
  let organic_no_consultation_filter = [];
  let verified_organic_calls_count = 0;
  let verified_forms_count = 0;
  let verified_chatbot_count = 0;
  const [organic_booked, setorganic_booked] = useState([]);
  // let organic_booked = [];
  // let organic_newlead = [];

  const [organic_newlead, setorganic_newlead] = useState([]);
  const [organic_no_consultation, setorganic_no_consultation] = useState([]);
  // let organic_no_consultation = [];
  let response_data_d_change = [];
  let open = false;
  let [verified_booked, setverified_booked] = useState([]);

  let [organicdata, setOrganicdata] = useState([]);

  async function filter_data(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    let usr_id = 225;
    console.log(data);

    const res_filter = await fetch(
      'http://192.168.1.11:8003/wrapper/organicfilter',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
        }),
      }
    );

    let data1_dashboard_organic1 = await res_filter.json();
    setdata1_dashboard_organic(data1_dashboard_organic1);
    console.log(data1_dashboard_organic1);

    organic_booked_filter = [];
    organic_newlead_filter = [];
    organic_no_consultation_filter = [];

    for (let item of data1_dashboard_organic1.total_forms) {
      // console.log(item.status);
      item.type = 'website_form';
      if (item.status == 'booked' || item.status == 'enquiry') {
        organic_booked_filter.push(item);
      }
      if (item.status == 'newlead') {
        organic_newlead_filter.push(item);
      }
      if (
        item.status == 'no_consultation' ||
        item.status == 'existing_patient'
      ) {
        organic_no_consultation_filter.push(item);
      }
    }
    for (let item of data1_dashboard_organic1.total_organic_calls) {
      // console.log(item.status);
      item.type = 'phone_call';
      if (item.status == 'booked' || item.status == 'enquiry') {
        organic_booked_filter.push(item);
      }
      if (item.status == 'newlead') {
        organic_newlead_filter.push(item);
      }
      if (
        item.status == 'no_consultation' ||
        item.status == 'existing_patient'
      ) {
        organic_no_consultation_filter.push(item);
      }
    }
    for (let item of data1_dashboard_organic1.total_chatboat) {
      // console.log(item.status);
      item.type = 'chat_boat';
      if (item.status == 'booked' || item.status == 'enquiry') {
        organic_booked_filter.push(item);
      }
      if (item.status == 'newlead') {
        organic_newlead_filter.push(item);
      }
      if (
        item.status == 'no_consultation' ||
        item.status == 'existing_patient'
      ) {
        organic_no_consultation_filter.push(item);
      }
    }
    setorganic_booked(organic_booked_filter);
    setorganic_newlead(organic_newlead_filter);
    setorganic_no_consultation(organic_no_consultation_filter);

    console.log(organic_booked);
    console.log(organic_newlead);
    console.log(organic_no_consultation);
  }

  async function get_filter() {
    let search_type = document.getElementById('search_by').value;
    if (search_type == 'custom') {
      let element = document.getElementById('custom_search');
      element.classList.remove('hidden');
    } else {
      console.log(search_type);
      let range = dates_calculation(search_type);

      const data = {};
      data['start_date'] = range.end_date;
      data['end_date'] = range.start_date;
      let usr_id = 225;

      const res_filter = await fetch(
        'http://192.168.1.11:8003/wrapper/organicfilter',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data,
          }),
        }
      );

      let data1_dashboard_organic1 = await res_filter.json();

      setdata1_dashboard_organic(data1_dashboard_organic1);
      organic_booked_filter = [];
      organic_newlead_filter = [];
      organic_no_consultation_filter = [];

      for (let item of data1_dashboard_organic1.total_forms) {
        item.type = 'website_form';
        if (item.status == 'booked' || item.status == 'enquiry') {
          organic_booked_filter.push(item);
        }
        if (item.status == 'newlead') {
          organic_newlead_filter.push(item);
        }
        if (
          item.status == 'no_consultation' ||
          item.status == 'existing_patient'
        ) {
          organic_no_consultation_filter.push(item);
        }
      }
      for (let item of data1_dashboard_organic1.total_organic_calls) {
        item.type = 'phone_call';
        if (item.status == 'booked' || item.status == 'enquiry') {
          organic_booked_filter.push(item);
        }
        if (item.status == 'newlead') {
          organic_newlead_filter.push(item);
        }
        if (
          item.status == 'no_consultation' ||
          item.status == 'existing_patient'
        ) {
          organic_no_consultation_filter.push(item);
        }
      }
      for (let item of data1_dashboard_organic1.total_chatboat) {
        // console.log(item.status);
        item.type = 'chat_boat';
        if (item.status == 'booked' || item.status == 'enquiry') {
          organic_booked_filter.push(item);
        }
        if (item.status == 'newlead') {
          organic_newlead_filter.push(item);
        }
        if (
          item.status == 'no_consultation' ||
          item.status == 'existing_patient'
        ) {
          organic_no_consultation_filter.push(item);
          //verified_booked.push(item);
          //  verified_chatbot_count = verified_chatbot_count+1;
        }
      }
      setorganic_booked(organic_booked_filter);
      setorganic_newlead(organic_newlead_filter);
      setorganic_no_consultation(organic_no_consultation_filter);

      console.log(organic_booked);
      console.log(organic_newlead);
      console.log(organic_no_consultation);

      // custom_search block hidding purpose
      let element = document.getElementById('custom_search');
      element.classList.add('hidden');
    }
  }
  function dates_calculation(days) {
    if (days == '30 days') {
      let currentDate = new Date();
      let endDate = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
      let formattedStartDate = currentDate.toISOString().slice(0, 10);
      let formattedEndDate = endDate.toISOString().slice(0, 10);
      return {
        start_date: formattedStartDate,
        end_date: formattedEndDate,
      };
    }
    if (days == '60 days') {
      let currentDate = new Date();
      let endDate = new Date(currentDate.getTime() - 60 * 24 * 60 * 60 * 1000);
      let formattedStartDate = currentDate.toISOString().slice(0, 10);
      let formattedEndDate = endDate.toISOString().slice(0, 10);
      return {
        start_date: formattedStartDate,
        end_date: formattedEndDate,
      };
    }
    if (days == '90 days') {
      let currentDate = new Date();
      let endDate = new Date(currentDate.getTime() - 60 * 24 * 60 * 60 * 1000);
      let formattedStartDate = currentDate.toISOString().slice(0, 10);
      let formattedEndDate = endDate.toISOString().slice(0, 10);
      return {
        start_date: formattedStartDate,
        end_date: formattedEndDate,
      };
    }
    if (days == '--') {
      let currentDate = new Date();
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let formattedMonth = month < 10 ? '0' + month : month;
      let formattedStartDate = year + '-' + formattedMonth + '-01';
      let formattedEndDate = currentDate.toISOString().slice(0, 10);

      return {
        start_date: formattedEndDate,
        end_date: formattedStartDate,
      };
    }
  }

  function loadremaining(rev_data) {
    setLeadsData(rev_data);
    openModal();
  
  }
  function open_popover(id) {
    console.log(id);
    let div_block = document.getElementById(id);
    console.log(div_block);
    if (div_block.style.display === 'none' || div_block.style.display === '') {
      div_block.style.display = 'block';
    } else {
      div_block.style.display = 'none';
    }
  }

  async function change_status(rid, tname, status_type) {
    const apiURL_change = `http://192.168.1.11:8003/wrapper/dashboardstatus?rid=${rid}&status_type=${status_type}`;

    // const apiURL_change = "https://app.legaciestechno.com/qualiconvert_dcp/api/get_data.php?type=dashboard_change_status_data&id="+rid+"&tname="+tname+'&status='+status_type;
    console.log(apiURL_change);
    const response_change = await fetch(apiURL_change);
    response_data_d_change = await response_change.json();
    console.log(response_data_d_change);
    if (response_data_d_change.status) {
      alert('Status Changed Successfully', 'info');
      // window.location.href="/";

      //nodejs
      const apiURL_dashboard_organic = `http://192.168.1.11:8003/wrapper/organic`;

      //php
      // auto load code start
      //    let usr_id = 225;
      //    const apiURL_dashboard_organic =    "https://app.legaciestechno.com/qualiconvert_dcp/api/get_data.php?type=viewall_leads_new&user_email="+user_email+"&user_id="+usr_id

      console.log(apiURL_dashboard_organic);
      const response_dashboard_organic = await fetch(apiURL_dashboard_organic);
      let data1_dashboard_organic_autoload =
        await response_dashboard_organic.json();
      let data1_dashboard_organic1 = data1_dashboard_organic_autoload;
      setdata1_dashboard_organic(data1_dashboard_organic1);
      console.log(data1_dashboard_organic);

      let organic_booked_autoload = [];
      let organic_newlead_autoload = [];
      let verified_booked_autoload = [];
      let verified_forms_count_autoload = 0;
      let organic_no_consultation_autoload = [];
      let verified_organic_calls_count_autoload = 0;
      let verified_chatbot_count_autoload = 0;
      for (let item of data1_dashboard_organic1.total_forms) {
        // console.log(item.status);
        item.type = 'website_form';
        if (item.status == 'booked' || item.status == 'enquiry') {
          organic_booked_autoload.push(item);
        }
        if (item.status == 'newlead') {
          organic_newlead_autoload.push(item);
          verified_booked_autoload.push(item);
          verified_forms_count_autoload = verified_forms_count_autoload + 1;
        }
        if (
          item.status == 'no_consultation' ||
          item.status == 'existing_patient'
        ) {
          organic_no_consultation_autoload.push(item);
          verified_booked_autoload.push(item);
          verified_forms_count_autoload = verified_forms_count_autoload + 1;
        }
      }
      for (let item of data1_dashboard_organic1.total_organic_calls) {
        // console.log(item.status);
        item.type = 'phone_call';
        if (item.status == 'booked' || item.status == 'enquiry') {
          organic_booked_autoload.push(item);
        }
        if (item.status == 'newlead') {
          organic_newlead_autoload.push(item);
          verified_booked_autoload.push(item);
          verified_organic_calls_count_autoload =
            verified_organic_calls_count_autoload + 1;
        }
        if (
          item.status == 'no_consultation' ||
          item.status == 'existing_patient'
        ) {
          organic_no_consultation_autoload.push(item);
          verified_booked_autoload.push(item);
          verified_organic_calls_count_autoload =
            verified_organic_calls_count_autoload + 1;
        }
      }
      for (let item of data1_dashboard_organic1.total_chatboat) {
        // console.log(item.status);
        item.type = 'chat_boat';
        if (item.status == 'booked' || item.status == 'enquiry') {
          organic_booked_autoload.push(item);
        }
        if (item.status == 'newlead') {
          organic_newlead_autoload.push(item);
          verified_booked_autoload.push(item);
          verified_chatbot_count_autoload = verified_chatbot_count_autoload + 1;
        }
        if (
          item.status == 'no_consultation' ||
          item.status == 'existing_patient'
        ) {
          organic_no_consultation_autoload.push(item);
          verified_booked_autoload.push(item);
          verified_chatbot_count_autoload = verified_chatbot_count_autoload + 1;
        }
      }

      setorganic_booked(organic_booked_autoload);
      setorganic_newlead(organic_newlead_autoload);

      setverified_booked(verified_booked_autoload);
      verified_forms_count = verified_forms_count_autoload;
      setorganic_no_consultation(organic_no_consultation_autoload);
      verified_organic_calls_count = verified_organic_calls_count_autoload;
      verified_chatbot_count = verified_chatbot_count_autoload;

      console.log(organic_booked);
      console.log(organic_newlead);
      console.log(organic_no_consultation);

      if (document.getElementById('outcome_' + rid)) {
        let div_block = document.getElementById('outcome_' + rid);
        div_block.style.display = 'none';
      }
      if (document.getElementById('outcome_v' + rid)) {
        let div_block = document.getElementById('outcome_v' + rid);
        div_block.style.display = 'none';
      }

      // end
    }
  }

  const getorganicdata = async () => {
    const res = await axios.get('http://192.168.1.11:8003/wrapper/organic');
    console.log(res);
    // setdata1_dashboard_organic(res.data);
    let data1_dashboard_organic1 = res.data;

    setdata1_dashboard_organic(data1_dashboard_organic1);
    console.log(data1_dashboard_organic1);

    organic_booked_filter = [];
    organic_newlead_filter = [];
    organic_no_consultation_filter = [];

    for (let item of data1_dashboard_organic1.total_forms) {
      // console.log(item.status);
      item.type = 'website_form';
      if (item.status == 'booked' || item.status == 'enquiry') {
        organic_booked_filter.push(item);
      }
      if (item.status == 'newlead') {
        organic_newlead_filter.push(item);
      }
      if (
        item.status == 'no_consultation' ||
        item.status == 'existing_patient'
      ) {
        organic_no_consultation_filter.push(item);
      }
    }
    for (let item of data1_dashboard_organic1.total_organic_calls) {
      // console.log(item.status);
      item.type = 'phone_call';
      if (item.status == 'booked' || item.status == 'enquiry') {
        organic_booked_filter.push(item);
      }
      if (item.status == 'newlead') {
        organic_newlead_filter.push(item);
      }
      if (
        item.status == 'no_consultation' ||
        item.status == 'existing_patient'
      ) {
        organic_no_consultation_filter.push(item);
      }
    }
    for (let item of data1_dashboard_organic1.total_chatboat) {
      // console.log(item.status);
      item.type = 'chat_boat';
      if (item.status == 'booked' || item.status == 'enquiry') {
        organic_booked_filter.push(item);
      }
      if (item.status == 'newlead') {
        organic_newlead_filter.push(item);
      }
      if (
        item.status == 'no_consultation' ||
        item.status == 'existing_patient'
      ) {
        organic_no_consultation_filter.push(item);
      }
    }
    setorganic_booked(organic_booked_filter);
    setorganic_newlead(organic_newlead_filter);
    setorganic_no_consultation(organic_no_consultation_filter);

    console.log(organic_booked);
    console.log(organic_newlead);
    console.log(organic_no_consultation);

    // setorganic_booked(res.data)
  };
  useEffect(() => {
    getorganicdata();
  }, []);



  return (
    <div className="mt-3 h-full w-full rounded-[20px]">
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3 3xl:grid-cols-4">
        <div>
          <MiniStatistics
            icon={<MdPhone className="text-4xl" />}
            title="Total organic calls"
            value={data1_dashboard_organic?.total_organic_calls_count}
            bgColor={'bg-white dark:!bg-navy-800'}
            growth={''}
            growthColor="text-red-500"
            cardBg="bg-white"
            titleColor="text-gray-600"
            valueColor="text-navy-700 dark:text-white"
            detailColor="text-gray-600"
            iconColor="text-brand-500"
          />
        </div>
        <div>
          <MiniStatistics
            icon={<SiGoogleforms className="text-4xl" />}
            title="Total Forms"
            value={data1_dashboard_organic?.total_forms_count}
            bgColor={'bg-white dark:!bg-navy-800'}
            growth={''}
            growthColor="text-red-500"
            cardBg="bg-white"
            titleColor="text-gray-600"
            valueColor="text-navy-700 dark:text-white"
            detailColor="text-gray-600"
            iconColor="text-brand-500"
          />
        </div>
        <div>
          <MiniStatistics
            icon={<MdChat className="text-4xl" />}
            title="Total Chatbots"
            value={data1_dashboard_organic?.total_chatboat_count}
            bgColor={'bg-white dark:!bg-navy-800'}
            growth={''}
            growthColor="text-red-500"
            cardBg="bg-white"
            titleColor="text-gray-600"
            valueColor="text-navy-700 dark:text-white"
            detailColor="text-gray-600"
            iconColor="text-brand-500"
          />
        </div>
      </div>
      <div className="mb-5 mt-5 ">
        <div class={'h-full w-full px-9 py-3'}>
          <div class="min-w-0 flex-1"></div>
          <div class="flex">
            <div
              class="flex hidden w-full items-center justify-center space-x-5"
              id="custom_search"
            >
              <form
                onSubmit={filter_data}
                enctype="multipart/form-data"
                class="flex w-full items-center space-x-3"
              >
                <span class="flex w-36">
                  <strong class="mr-1.5">Filter By:</strong> Start{' '}
                </span>
                <input
                  max={currentDate}
                  type="date"
                  name="start_date"
                  id="start_date"
                  required
                  class="w-38 rounded-xl border border-solid border-gray-600 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                <span>To </span>
                <input
                  max={currentDate}
                  type="date"
                  name="end_date"
                  id="end_date"
                  required
                  class="w-38 rounded-xl border border-solid border-gray-600 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {/* <input
                  type="submit"
                  value="Go"
                  class="bg-primarycolor-500 hover:bg-secondarycolor-500 text-md cursor-pointer rounded-full px-4 py-2 font-normal text-white shadow-xl"
                /> */}
                <button
                  type="submit"
                  class="flex items-center justify-center rounded-full bg-brand-500 p-2 text-3xl text-white transition duration-200 hover:cursor-pointer hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                  fdprocessedid="uuvz8k"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                  </svg>
                </button>
              </form>
            </div>
            <div className="w-full rounded-xl border !border-gray-200 px-3 text-sm font-medium text-gray-600 outline-none dark:!border-none dark:bg-navy-700 md:w-fit ml-auto">
              <select
                onChange={() => get_filter()}
                name="search_by"
                id="search_by"
                className="h-[45px] w-full rounded-xl text-sm font-medium text-gray-600 outline-none dark:bg-navy-700 md:w-fit md:pr-8 xl:pr-20"
              >
                <option value="--" class="">
                  Current Month
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
          </div>

          <div class="mb-10 mt-10 grid w-full grid-cols-1 gap-6  lg:grid-cols-3 2xl:gap-10">
            <div class="flex w-full flex-shrink-0 flex-col">
              <div class="mb-3 flex h-10 flex-shrink-0 items-center px-10">
                <span class="block text-[18px] font-[600]">Enquires</span>
                <span class="ml-2 flex h-5 w-5 items-center justify-center rounded bg-gray-500 bg-opacity-70 text-sm font-semibold text-white">
                  {data1_dashboard_organic && organic_booked?.length > 0 && (
                    <>{organic_booked?.length}</>
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
              <div class="overflow-auto1 mt-5 flex flex-col gap-5">
                {data1_dashboard_organic && organic_booked?.length > 0 && (
                  <>
                    {organic_booked?.map((row) => (
                      <>
                        {row.type === 'website_form' ? (
                          <>
                            <Card
                              extra={
                                'group relative flex flex-col items-start gap-4 rounded-[20px] border  bg-white  p-4 2xl:rounded-[30px] 2xl:p-6'
                              }
                            >
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
                                            <i class="fa-solid fa-eye text-brand-500"></i>

                                     
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
                                  onClick={() =>
                                    open_popover('outcome_' + row.id)
                                  }
                                  class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                                >
                                  Status
                                </a>
                                <div
                                  // id="outcome_{row.id}"
                                  id={`outcome_${row.id}`}
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
                            </Card>
                          </>
                        ) : row.type == 'phone_call' ? (
                          <>
                            {' '}
                            <div class="group relative flex flex-col items-start gap-4 rounded-[20px] border border-solid border-[#8d2995] bg-white p-4 2xl:rounded-[30px] 2xl:p-6">
                              <div class="mt-0 flex w-full items-center justify-between">
                                <div class="flex items-center">
                                  <div class="text-[16px] font-[600]">
                                    Phone Call
                                  </div>
                                  <div class="ml-3 rounded-full bg-[#f5f5eb] p-2">
                                    <i class="fa-solid fa-phone text-[20px]"></i>
                                  </div>
                                </div>
                                <div class="flex items-center">
                                  <div class="text-[16px] font-[600]">
                                    <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>
                                    {row.date}
                                  </div>
                                </div>
                              </div>
                              <div class="justify-between1 relative mt-5 flex w-full items-start">
                                <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                                  <div class="w-full">
                                    <i class="fa-solid fa-user mr-2 text-[15px]"></i>{' '}
                                    --
                                  </div>
                                  <div class="w-full">
                                    <i class="fa-solid fa-envelope mr-2 text-[15px]"></i>{' '}
                                    --
                                  </div>
                                  <div class="w-full">
                                    <i class="fa-solid fa-phone mr-2 text-[15px]"></i>
                                    {row.ph_number}
                                  </div>
                                  <div class="w-full">
                                    <i class="fa-solid fa-message mr-2 text-[15px]"></i>
                                    {row.reason}
                                  </div>
                                </div>
                                <a
                                  href="#!"
                                  onClick={() =>
                                    open_popover('outcome_' + row.id)
                                  }
                                  class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                                >
                                  Status
                                </a>
                                <div
                                  id={`outcome_${row.id}`}
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
                                        Existing Patient
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="mt-2 flex w-full items-center justify-between">
                                <div class=""></div>
                                <div class="inline-flex rounded-[30px] bg-[#d5e3fa] px-3 py-1 text-[13px] font-medium capitalize leading-normal text-[#1c498e]">
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
                                        <i class="fa-solid fa-eye text-brand-500"></i>
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
                          </>
                        ) : row.type == 'chat_boat' ? (
                          <>
                            {' '}
                            <div class="group relative flex flex-col items-start gap-4 rounded-[20px] border border-solid border-[#95b721] bg-white p-4 2xl:rounded-[30px] 2xl:p-6">
                              <div class="mt-0 flex w-full items-center justify-between">
                                <div class="flex items-center">
                                  <div class="text-[16px] font-[600]">
                                    Chatboat
                                  </div>
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
                                    <i class="fa-solid fa-user mr-2 text-[15px]"></i>{' '}
                                    Marie
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
                                    <i class="fa-solid fa-message mr-2 text-[15px]"></i>{' '}
                                    I Would Like To Have A Quote ...
                                  </div>
                                </div>
                                <a
                                  href="#!"
                                  onClick={() =>
                                    open_popover('outcome_' + row.id)
                                  }
                                  class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                                >
                                  Status
                                </a>
                                <div
                                  id={`outcome_${row.id}`}
                                  class="status_drop absolute right-0 top-8 hidden w-[10rem] rounded-[10px] border border-solid border-[#ddd] bg-white p-3 shadow-sm"
                                >
                                  <div class="w-full gap-3">
                                    <div class="mb-2">
                                      <a
                                        href="#!"
                                        class="text-black leading-normal"
                                      >
                                        Consult Booked
                                      </a>
                                    </div>
                                    <div class="mb-2">
                                      <a
                                        href="#!"
                                        class="text-black leading-normal"
                                      >
                                        New Leads
                                      </a>
                                    </div>
                                    <div class="mb-2">
                                      <a
                                        href="#!"
                                        class="text-black leading-normal"
                                      >
                                        No Consultation
                                      </a>
                                    </div>
                                    <div class="mb-2">
                                      <a
                                        href="#!"
                                        class="text-black leading-normal"
                                      >
                                        Existing Patient
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="mt-2 flex w-full items-center justify-between">
                                <div class=""></div>
                                <div class="inline-flex rounded-[30px] bg-[#d3f26a] px-3 py-1 text-[13px] font-medium leading-normal text-[#398700]">
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
                                        <i class="fa-solid fa-eye text-brand-500"></i>
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
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* Form */}

            <div class="flex w-full flex-shrink-0 flex-col">
              <div class="mb-3 flex h-10 flex-shrink-0 items-center px-10">
                <span class="block text-[18px] font-[600]">New Leads</span>
                <span class="ml-2 flex h-5 w-5 items-center justify-center rounded bg-gray-500 bg-opacity-70 text-sm font-semibold text-white">
                  {organic_newlead?.length}
                </span>

                <div class="ml-3 flex items-center gap-3">
                  <a
                    href="#!"
                    class="bg-primarycolor-500 flex h-8 w-8 items-center justify-center rounded-full text-white"
                  >
                    <i class="fa-solid fa-calendar-days"></i>
                  </a>
                  <a
                    href="#!"
                    class="text-black flex h-8 w-8 items-center justify-center rounded-full bg-[#d3f26a]"
                  >
                    <i class="fa-solid fa-arrow-up-wide-short"></i>
                  </a>
                </div>
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

              <div class="overflow-auto1 mt-5 flex flex-col gap-5">
                {data1_dashboard_organic && organic_newlead?.length && (
                  <>
                    {organic_newlead?.map((row) => (
                      <>
                        {row?.type === 'website_form' ? (
                          <>
                            <Card class="group relative flex flex-col items-start gap-4 rounded-[20px] border bg-white p-4 2xl:rounded-[30px] 2xl:p-6">
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
                                    <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>
                                    {row.date}
                                  </div>
                                </div>
                              </div>
                              <div class="justify-between1 relative mt-5 flex w-full items-start">
                                <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                                  <div class="w-full">
                                    <i class="fa-solid fa-user mr-2 text-[15px]"></i>
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
                                            <i class="fa-solid fa-eye text-brand-500"></i>
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
                                  onClick={() =>
                                    open_popover('outcome_' + row.id)
                                  }
                                  class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                                >
                                  Status
                                </a>
                                <div
                                  id={`outcome_${row.id}`}
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
                                        Existing Patient
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="mt-2 flex w-full items-center justify-between">
                                <div class=""></div>
                                <div class="inline-flex rounded-[30px] bg-[#fff3e5] px-3 py-1 text-[13px] font-medium leading-normal text-[#ff540f]">
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
                                        <i class="fa-solid fa-eye text-brand-500"></i>
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
                            </Card>
                          </>
                        ) : row.type === 'phone_call' ? (
                          <>
                            <div class="group relative flex flex-col items-start gap-4 rounded-[20px] border border-solid border-[#8d2995] bg-white  p-4 2xl:rounded-[30px] 2xl:p-6">
                              <div class="mt-0 flex w-full items-center justify-between">
                                <div class="flex items-center">
                                  <div class="text-[16px] font-[600]">
                                    Phone Call
                                  </div>
                                  <div class="ml-3 rounded-full bg-[#f5f5eb] p-2">
                                    <i class="fa-solid fa-phone text-[20px]"></i>
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
                                    --
                                  </div>
                                  <div class="w-full">
                                    <i class="fa-solid fa-envelope mr-2 text-[15px]"></i>{' '}
                                    --
                                  </div>
                                  <div class="w-full">
                                    <i class="fa-solid fa-phone mr-2 text-[15px]"></i>{' '}
                                    {row.ph_number}
                                  </div>
                                  <div class="w-full">
                                    <i class="fa-solid fa-message mr-2 text-[15px]"></i>{' '}
                                    {row.reason}
                                  </div>
                                </div>
                                <a
                                  href="#!"
                                  onClick={() =>
                                    open_popover('outcome_' + row.id)
                                  }
                                  class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                                >
                                  Status
                                </a>
                                <div
                                  id={`outcome_${row.id}`}
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
                                <div class="inline-flex rounded-[30px] bg-[#d5e3fa] px-3 py-1 text-[13px] font-medium leading-normal text-[#1c498e]">
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
                                        <i class="fa-solid fa-eye text-brand-500"></i>
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
                          </>
                        ) : row.type == 'chat_boat' ? (
                          <>
                            {' '}
                            <div class="group relative flex flex-col items-start gap-4 rounded-[20px] border border-solid border-[#95b721] bg-white p-4 2xl:rounded-[30px] 2xl:p-6">
                              <div class="mt-0 flex w-full items-center justify-between">
                                <div class="flex items-center">
                                  <div class="text-[16px] font-[600]">
                                    Chatboat
                                  </div>
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
                                    <i class="fa-solid fa-user mr-2 text-[15px]"></i>{' '}
                                    Marie
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
                                    <i class="fa-solid fa-message mr-2 text-[15px]"></i>{' '}
                                    I Would Like To Have A Quote ...
                                  </div>
                                </div>
                                <a
                                  href="#!"
                                  onClick={() =>
                                    open_popover('outcome_' + row.id)
                                  }
                                  class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                                >
                                  Status
                                </a>
                                <div
                                  id={`outcome_${row.id}`}
                                  class="status_drop absolute right-0 top-8 hidden w-[10rem] rounded-[10px] border border-solid border-[#ddd] bg-white p-3 shadow-sm"
                                >
                                  <div class="w-full gap-3">
                                    <div class="mb-2">
                                      <a
                                        href="#!"
                                        class="text-black leading-normal"
                                      >
                                        Consult Booked
                                      </a>
                                    </div>
                                    <div class="mb-2">
                                      <a
                                        href="#!"
                                        class="text-black leading-normal"
                                      >
                                        New Leads
                                      </a>
                                    </div>
                                    <div class="mb-2">
                                      <a
                                        href="#!"
                                        class="text-black leading-normal"
                                      >
                                        No Consultation
                                      </a>
                                    </div>
                                    <div class="mb-2">
                                      <a
                                        href="#!"
                                        class="text-black leading-normal"
                                      >
                                        Existing Patient
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="mt-2 flex w-full items-center justify-between">
                                <div class=""></div>
                                <div class="inline-flex rounded-[30px] bg-[#d3f26a] px-3 py-1 text-[13px] font-medium leading-normal text-[#398700]">
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
                                        <i class="fa-solid fa-eye text-brand-500"></i>
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
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
                  </>
                )}
              </div>
            </div>

            <div class="flex w-full flex-shrink-0 flex-col">
              <div class="relative mb-3 flex h-10 flex-shrink-0 items-center px-10">
                <span class="block text-[18px] font-[600]">
                  No Consultation / Existing Patient
                </span>
                <span class="ml-2 flex h-5 w-5 items-center justify-center rounded bg-gray-500 bg-opacity-70 text-sm font-semibold text-white">
                  {organic_no_consultation?.length}
                </span>

                <button
                  onClick={() => open_popover('outcome_filter')}
                  class="bg-transperent hover:text-black ml-auto flex h-6 w-6 items-center justify-center rounded text-[#b0b0ae] hover:bg-white"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                <div
                  id="outcome_filter"
                  class="status_drop absolute right-0 top-8 z-50 hidden w-[10rem] rounded-[10px] border border-solid border-[#ddd] bg-white p-3 shadow-sm"
                >
                  <div class="w-full gap-3">
                    <select
                      name="change_status"
                      id="change_status"
                      class="shadow-mdd w-full rounded-lg border-0 border-gray-400 bg-white px-4 py-1.5 font-normal leading-tight focus:border-blue-500 focus:bg-white focus:outline-none"
                    >
                      <option value="All" class="">
                        All
                      </option>
                      <option value="No Consultation" class="">
                        No Consultation
                      </option>
                      <option value="Existing Patient" class="">
                        Existing Patient
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="overflow-auto1 mt-5 flex flex-col gap-5">
                {data1_dashboard_organic &&
                  organic_no_consultation?.length > 0 && (
                    <>
                      {organic_no_consultation?.map((row) => (
                        <>
                          {row.type === 'website_form' ? (
                            <>
                              <Card class="group relative flex flex-col items-start gap-4 rounded-[20px] border  bg-white p-4 2xl:rounded-[30px] 2xl:p-6">
                                <div class="mt-0 flex w-full flex-col items-center justify-between">
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
                                        <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>
                                        {row.date}
                                      </div>
                                    </div>
                                  </div>

                                  <div class="justify-between1 relative mt-5 flex w-full items-start">
                                    <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                                      <div class="w-full">
                                        <i class="fa-solid fa-user mr-2 text-[15px]"></i>
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
                                                {row.message.substring(0, 30)}{' '}
                                                ...
                                              </span>
                                              <a
                                                href="#!"
                                                title="View More"
                                                onClick={() =>
                                                  loadremaining(row.message)
                                                }
                                              >
                                                <i class="fa-solid fa-eye text-brand-500"></i>
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
                                      onClick={() =>
                                        open_popover('outcome_' + row.id)
                                      }
                                      class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                                    >
                                      Status
                                    </a>
                                    <div
                                      id={`outcome_${row.id}`}
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
                                            Existing Patient
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="mt-2 flex w-full items-center justify-between">
                                    <div class=""></div>
                                    <div class="inline-flex rounded-[30px] bg-[#fff3e5] px-3 py-1 text-[13px] font-medium leading-normal text-[#ff540f]">
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
                                            <i class="fa-solid fa-eye text-brand-500"></i>
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
                              </Card>
                            </>
                          ) : row.type === 'phone_call' ? (
                            <>
                              <div class="group relative flex flex-col items-start gap-4 rounded-[20px] border  bg-white p-4 2xl:rounded-[30px] 2xl:p-6">
                                <div class="mt-0 flex w-full items-center justify-between">
                                  <div class="flex items-center">
                                    <div class="text-[16px] font-[600]">
                                      Phone Call
                                    </div>
                                    <div class="ml-3 rounded-full bg-[#f5f5eb] p-2">
                                      <i class="fa-solid fa-phone text-[20px]"></i>
                                    </div>
                                  </div>
                                  <div class="flex items-center">
                                    <div class="text-[16px] font-[600]">
                                      <i class="fa-solid fa-calendar-days mr-2 text-[15px]"></i>
                                      {row.date}
                                    </div>
                                  </div>
                                </div>
                                <div class="justify-between1 relative mt-5 flex w-full items-start">
                                  <div class="flex flex-wrap items-center gap-3 text-[14px] 2xl:text-[15px]">
                                    <div class="w-full">
                                      <i class="fa-solid fa-user mr-2 text-[15px]"></i>{' '}
                                      --
                                    </div>
                                    <div class="w-full">
                                      <i class="fa-solid fa-envelope mr-2 text-[15px]"></i>{' '}
                                      --
                                    </div>
                                    <div class="w-full">
                                      <i class="fa-solid fa-phone mr-2 text-[15px]"></i>
                                      {row.ph_number}
                                    </div>
                                    <div class="w-full">
                                      <i class="fa-solid fa-message mr-2 text-[15px]"></i>
                                      {row.reason}
                                    </div>
                                  </div>
                                  <a
                                    href="#!"
                                    onClick={() =>
                                      open_popover('outcome_' + row.id)
                                    }
                                    class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                                  >
                                    Status
                                  </a>
                                  <div
                                    id={`outcome_${row.id}`}
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
                                          Existing Patient
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="mt-2 flex w-full items-center justify-between">
                                  <div class=""></div>
                                  <div class="inline-flex rounded-[30px] bg-[#d5e3fa] px-3 py-1 text-[13px] font-medium leading-normal text-[#1c498e]">
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
                                          <i class="fa-solid fa-eye text-brand-500"></i>
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
                            </>
                          ) : row.type == 'chat_boat' ? (
                            <>
                              <Card class="group relative flex flex-col items-start gap-4 rounded-[20px] border  bg-white p-4 2xl:rounded-[30px] 2xl:p-6">
                                <div class="mt-0 flex w-full items-center justify-between">
                                  <div class="flex items-center">
                                    <div class="text-[16px] font-[600]">
                                      Chatboat
                                    </div>
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
                                      <i class="fa-solid fa-user mr-2 text-[15px]"></i>{' '}
                                      Marie
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
                                      <i class="fa-solid fa-message mr-2 text-[15px]"></i>{' '}
                                      I Would Like To Have A Quote ...
                                    </div>
                                  </div>
                                  <a
                                    href="#!"
                                    onClick={() =>
                                      open_popover('outcome_' + row.id)
                                    }
                                    class="absolute right-0 rounded-[30px] bg-[#f3f3f3] px-3 py-1 text-[13px] font-medium leading-normal text-[#000] hover:bg-[#000] hover:text-white"
                                  >
                                    Status
                                  </a>
                                  <div
                                    id={`outcome_${row.id}`}
                                    class="status_drop absolute right-0 top-8 hidden w-[10rem] rounded-[10px] border border-solid border-[#ddd] bg-white p-3 shadow-sm"
                                  >
                                    <div class="w-full gap-3">
                                      <div class="mb-2">
                                        <a
                                          href="#!"
                                          class="text-black leading-normal"
                                        >
                                          Consult Booked
                                        </a>
                                      </div>
                                      <div class="mb-2">
                                        <a
                                          href="#!"
                                          class="text-black leading-normal"
                                        >
                                          New Leads
                                        </a>
                                      </div>
                                      <div class="mb-2">
                                        <a
                                          href="#!"
                                          class="text-black leading-normal"
                                        >
                                          No Consultation
                                        </a>
                                      </div>
                                      <div class="mb-2">
                                        <a
                                          href="#!"
                                          class="text-black leading-normal"
                                        >
                                          Existing Patient
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="mt-2 flex w-full items-center justify-between">
                                  <div class=""></div>
                                  <div class="inline-flex rounded-[30px] bg-[#d3f26a] px-3 py-1 text-[13px] font-medium leading-normal text-[#398700]">
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
                                          <i class="fa-solid fa-eye text-brand-500"></i>
                   
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
                              </Card>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      ))}
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} leadsData={leadsData}/>

    </div>
  );
};

export default Organic;



