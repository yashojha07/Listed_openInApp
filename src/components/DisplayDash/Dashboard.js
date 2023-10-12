import "./dashboard.css";
import UserImage from "../../assets/user_image.png";
import TotalsCard from "../totals-card/totals-card";
import Barchart from "../barCharts/BarChart";
import Donutchart from "../Charts/Chart";
import AddProfile from "../Newprofile/ProfileAdd";
import { useContext, useState } from "react";
import { DeviceContext } from "../../context/device-width-context";
import { ProfileContext } from "../../context/profile-context";
import { ReactComponent as NotifLogo } from "../../assets/notification_icon.svg";
import { ReactComponent as PlusLogo } from "../../assets/plus_icon.svg";
import { ReactComponent as HamburgerLogo } from "../../assets/hamburger_icon.svg";
import { ReactComponent as WhatsappLogo } from "../../assets/whatsapp_icon.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/youtube_icon.svg";
import { ReactComponent as InstagramLogo } from "../../assets/instagram_icon.svg";
import { ReactComponent as EmailLogo } from "../../assets/email_icon.svg";

const HomeDashboard = ({ showNavBar, setShowNavBar }) => {
   const { isMobile } = useContext(DeviceContext);
   const { profile } = useContext(ProfileContext);

   const [displayAddProfile, setDisplayAddProfile] = useState(false);

   const toggleNavbar = () => setShowNavBar(!showNavBar);
   const showAddProfile = () => setDisplayAddProfile(true);

   return (
      <div className="dashboard-container">
         <div className="dashboard">
            <div className="top-navbar-container">
               
               <div className="title">
                  {isMobile && <HamburgerLogo onClick={toggleNavbar} />}{" "}
                  Dashboard
               </div>
               <div className="search-notif-container">
                  <input type="search" placeholder="Search..." />
                  <NotifLogo />
                  <img src={UserImage} alt="User" />
               </div>
            </div>
            <div className="totals-card-container">
               <TotalsCard
                  totalType="Revenues"
                  totalValue="$2,129,430"
                  totalPercentage="2.5"
               />
               <TotalsCard
                  totalType="Transactions"
                  totalValue="1,520"
                  totalPercentage="1.7"
               />
               <TotalsCard
                  totalType="Likes"
                  totalValue="9,721"
                  totalPercentage="1.4"
               />
               <TotalsCard
                  totalType="Users"
                  totalValue="9,721"
                  totalPercentage="4.2"
               />
            </div>
            <Barchart />
            <div className="pie-chart-addprofile-container">
               <Donutchart />
               {!profile && (
                  <div
                     className="add-profile-container"
                     onClick={showAddProfile}
                  >
                     <div>
                        <div className="plus-logo-container">
                           <PlusLogo />
                        </div>
                        <span className="add-profile-text">Add Profile</span>
                     </div>
                  </div>
               )}
               {profile && (
                  <div className="profile-container">
                     <h2>{profile.name}</h2>
                     <div>
                        <div className="logo-wrapper light-green-bgcolor">
                           <WhatsappLogo />
                        </div>
                        &nbsp;&nbsp;
                        <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                     </div>
                     <div>
                        <div className="logo-wrapper light-pink-bgcolor">
                           <InstagramLogo />
                        </div>
                        &nbsp;&nbsp;
                        <a href={profile.instaLink}>{profile.name}</a>
                     </div>
                     <div>
                        <div className="logo-wrapper light-purple-bgcolor">
                           <EmailLogo />
                        </div>
                        &nbsp;&nbsp;
                        <a href={`mailto:${profile.email}`}>Email</a>
                     </div>
                     <div>
                        <div className="logo-wrapper light-pink-bgcolor">
                           <YoutubeLogo />
                        </div>
                        &nbsp;&nbsp;
                        <a href={profile.ytLink}>{profile.name}</a>
                     </div>
                  </div>
               )}
            </div>
            {displayAddProfile && (
               <AddProfile setDisplayAddProfile={setDisplayAddProfile} />
            )}
         </div>
      </div>
   );
};

export default HomeDashboard;
