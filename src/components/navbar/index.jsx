import React from 'react';
import Dropdown from 'components/dropdown';
import { FiAlignJustify } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import navbarimage from 'assets/img/layout/Navbar.png';
import { BsArrowBarUp } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import Configurator from './Configurator';
import { IoIosNotifications } from "react-icons/io";

// import { RiMoonFill, RiSunFill } from 'react-icons/ri';
// import Configurator from './Configurator';
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from 'react-icons/io';
import avatar from 'assets/img/avatars/avatar4.png';

const Navbar = (props) => {
  const {
    onOpenSidenav,
    brandText,
    mini,
    // setMini,
    // theme,
    // setTheme,
    hovered,
  } = props;
  const [darkmode, setDarkmode] = React.useState(
    document.body.classList.contains('dark')
  );
  console.log(props?.mainlocation)
  return (
    <nav
      className={`mt-1 flex flex-row flex-wrap items-center justify-between  bg-white/30 transition-all w-full   p-2 backdrop-blur-xl shadow-xl shadow-shadow-500 dark:bg-[#0b14374d] md:right-[30px] md:top-4 xl:top-[20px]`}
     >
      <div className="ml-[6px]">
        <div className="h-6  pt-1">
          {/* <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a> */}
          {/* <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link> */}
          
            {/* <div class="text-black text-xl font-normal text-navy-700 w-full">
              Good day, Chess House Dental Practice
            </div> */}
         
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <div
           
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {
              props?.mainlocation==="chess"? "Good day, Chess House Dental Practice":"Good day, Harrow Weald Dental Practice"
            }
         
          </div>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px]  flex-grow items-center justify-between gap-2  bg-white px-2 py-2  dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
      <div className=" w-full rounded-xl border !border-gray-200 px-3 text-sm font-medium text-gray-600 outline-none dark:!border-none dark:bg-navy-700 md:w-fit">
          <select
            className="h-[45px] w-full rounded-xl text-sm font-medium text-gray-600 outline-none dark:bg-navy-700 md:w-fit md:pr-8 xl:pr-20 "
            name="location"
            id="location"
            onChange={(e)=>props.setMainlocation(e.target.value)}
          >
            <option value="chess">Chess House Dental</option>
            <option value="harrow">Harrow Weald Dental</option>
          </select>
        </div>
        <div className='flex gap-2 items-center'>
        <IoIosNotifications size={20} />

<Dropdown
  button={
    <img
      className="h-10 w-10 rounded-full"
      src={avatar}
      alt="Elon Musk"
    />
  }
  children={
    <div className="flex h-max w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat pb-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
      <div className="mt-3 ml-4">
        <div className="flex items-center gap-2">
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            👋 Hey, Adela
          </p>{" "}
        </div>
      </div>
      <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

      <div className="mt-3 ml-4 flex flex-col">
        <a
          href=" "
          className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
        >
          Profile Settings
        </a>
        <a
          href=" "
          className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
        >
          Newsletter Settings
        </a>
        <a
          href=" "
          className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
        >
          Log Out
        </a>
      </div>
    </div>
  }
  classNames={"py-2 top-8 -left-[180px] w-max"}
/>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
