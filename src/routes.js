import {
  MdDashboard,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { SiCodereview } from "react-icons/si";

// Admin Imports
import DashboardsDefault from "views/admin/dashboards/default";
import DashboardsRTLDefault from "views/admin/dashboards/rtl";
import DashboardsCarInterface from "views/admin/dashboards/carInterface";
import DashboardsSmartHome from "views/admin/dashboards/smartHome";

// NFT Imports
import NFTMarketplace from "views/admin/nfts/marketplace";
import NFTPage from "views/admin/nfts/page";
import NFTCollection from "views/admin/nfts/collection";
import NFTProfile from "views/admin/nfts/profile";

// Main Imports
import AccountBilling from "views/admin/main/account/billing";
import AccountApplications from "views/admin/main/account/application";
import AccountInvoice from "views/admin/main/account/invoice";
import AccountSettings from "views/admin/main/account/settings";
import AccountAllCourses from "views/admin/main/account/courses";
import AccountCoursePage from "views/admin/main/account/coursePage";

import UserNew from "views/admin/main/users/newUser";
import UsersOverview from "views/admin/main/users/overview";
import UsersReports from "views/admin/main/users/reports";

import ProfileSettings from "views/admin/main/profile/settings";
import ProfileOverview from "views/admin/main/profile/overview";
import ProfileNewsfeed from "views/admin/main/profile/newsfeed";

import ApplicationsKanban from "views/admin/main/applications/kanban";
import ApplicationsDataTables from "views/admin/main/applications/dataTables";
//import ApplicationsCalendar from "views/admin/main/applications/calendar";

import EcommerceNewProduct from "views/admin/main/ecommerce/newProduct";
import EcommerceProductSettings from "views/admin/main/ecommerce/settingsProduct";
import EcommerceProductPage from "views/admin/main/ecommerce/productPage";
import EcommerceOrderList from "views/admin/main/ecommerce/orderList";
import EcommerceOrderDetails from "views/admin/main/ecommerce/orderDetails";
import EcommerceReferrals from "views/admin/main/ecommerce/referrals";

// Others
import OthersNotifications from "views/admin/main/others/notifications";
//import OthersPricing from 'views/admin/main/others/pricing';
import OthersPricing from "views/admin/main/others/pricing";
import OthersError from "views/admin/main/others/404";
import Buttons from "views/admin/main/others/buttons";
import Messages from "views/admin/main/others/messages";

// Auth Imports
import ForgotPasswordCentered from "views/auth/forgotPassword/ForgotPasswordCenter.jsx";
import ForgotPasswordDefault from "views/auth/forgotPassword/ForgotPasswordDefault.jsx";
import LockCentered from "views/auth/lock/LockCenter.jsx";
import LockDefault from "views/auth/lock/LockDefault.jsx";
import SignInCentered from "views/auth/signIn/SignInCenter.jsx";
import SignInDefault from "views/auth/signIn/SignInDefault.jsx";
import SignUpCentered from "views/auth/signUp/SignUpCenter.jsx";
import SignUpDefault from "views/auth/signUp/SignUpDefault.jsx";
import VerificationCentered from "views/auth/verification/VerificationCenter.jsx";
import VerificationDefault from "views/auth/verification/VerificationDefault.jsx";

import Organic from "views/admin/dashboards/organic";
import Paid from "views/admin/dashboards/paid";

import Business from "views/admin/main/business-info";
import Review from "views/admin/main/Reputation/Review";
import ReviewMe from "views/admin/main/Reputation/ReviewMe";
import Contact2 from "views/admin/main/marketing/Contact";
import Email from "views/admin/main/marketing/Email/Email";
import VerifiedLeads from "views/admin/dashboards/verfiednewleads";


const routes = [
  
  {
    name: "Home",
    path: "/dashboards",
    icon: <MdHome className="text-inherit h-5 w-5" />,
    collapse: true,
    items: [
      {
        name: "Dashboard",
        layout: "/admin",
        path: "/dashboards/default",
        component: <DashboardsDefault />,
      },
    
      {
        name: "Organic",
        layout: "/admin",
        path: "/dashboards/organic",
        component: <Organic />,
      },
    
      {
        name: "Paid",
        layout: "/admin",
        path: "/dashboards/paid",
        component: <Paid />,
      },
      {
        name: "Verified New Leads",
        layout: "/admin",
        path: "/dashboards/verified",
        component: <VerifiedLeads />,
      },
    ],
  },
 

  {
    name: "Business-info",
        layout: "/admin",
        path: "/nfts/business-info",
        component: <Business />,
        icon: <FaBusinessTime className="text-inherit h-5 w-5" />,
        secondary: true,
  },

  {
    name: "Reputation",
    path: "/reputation",
    collapse: true,
    icon: <SiCodereview className="text-inherit h-5 w-5" />,
    items: [
      {
        name: "Review",
        layout: "/admin",
        path: "/main/reputation/review",
        exact: false,
        component: <Review />,
      },
      {
        name: "Review me",
        layout: "/admin",
        path: "/main/reputation/reviewme",
        exact: false,
        component: <ReviewMe />,
      }]
    },
    {
      name: "Marketing",
      path: "/marketing",
      collapse: true,
      icon: <SiCodereview className="text-inherit h-5 w-5" />,
      items: [
        {
          name: "Contacts",
          layout: "/admin",
          path: "/main/marketing/contact",
          exact: false,
          component: <Contact2 />,
        },
        {
          name: "Email",
          layout: "/admin",
          path: "/main/marketing/email",
          exact: false,
          component: <Email />,
        }]
      },
  
  
];
export default routes;
