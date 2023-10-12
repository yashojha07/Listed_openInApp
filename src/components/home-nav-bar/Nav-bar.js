import "./home-nav-bar.css";
import { ReactComponent as DashboardLogo } from "../../assets/dashboard_icon.svg";
import { ReactComponent as TransactionLogo } from "../../assets/transaction_icon.svg";
import { ReactComponent as ScheduleLogo } from "../../assets/schedule_icon.svg";
import { ReactComponent as SettingLogo } from "../../assets/setting_icon.svg";
import { ReactComponent as UserLogo } from "../../assets/user_icon.svg";

const HomeNavBar = () => {
   return (
      <div className="nav-bar-container">
         <div className="nav-bar">
            <h1 className="title">Board.</h1>
            <div className="nav-bar-button">
               <DashboardLogo />
               <span className="button-text bold">Dashboard</span>
            </div>
            <div className="nav-bar-button">
               <TransactionLogo />
               <span className="button-text">Transactions</span>
            </div>
            <div className="nav-bar-button">
               <ScheduleLogo />
               <span className="button-text">Schedules</span>
            </div>
            <div className="nav-bar-button">
               <UserLogo />
               <span className="button-text">Users</span>
            </div>
            <div className="nav-bar-button">
               <SettingLogo />
               <span className="button-text">Settings</span>
            </div>
            <div className="help-contact-container">
               <span className="small-text">Help</span>
               <br />
               <br />
               <span className="small-text">Contact Us</span>
            </div>
         </div>
      </div>
   );
};

export default HomeNavBar;
