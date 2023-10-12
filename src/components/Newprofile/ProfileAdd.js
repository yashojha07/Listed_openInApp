import "./profile-add.css";
import { ReactComponent as CloseLogo } from "../../assets/close-icon.svg";
import { useState, useContext } from "react";
import { ProfileContext } from "../../context/profile-context";

const AddProfile = ({ setDisplayAddProfile }) => {
   const [formValue, setFormValue] = useState(0);
   const { setProfile } = useContext(ProfileContext);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [instaLink, setInstaLink] = useState("");
   const [ytLink, setYtLink] = useState("");

   const highlightDivClass = (divNumber) => {
      if (divNumber === formValue) return "highlightDiv blue-div";
      else return "highlightDiv grey-div";
   };

   const renderForm = () => {
      if (formValue === 0) {
         return (
            <div className="form-container">
               <label>Enter Name*</label>
               <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Eg. John Doe"
               />
               <label>Enter Email*</label>
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Eg. John@xyz.com"
               />
               <label>Enter Phone*</label>
               <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Eg. 9123456789"
               />
            </div>
         );
      } else {
         return (
            <div className="form-container">
               <label>Instagram Link (Optional)</label>
               <input
                  type="url"
                  value={instaLink}
                  onChange={(e) => setInstaLink(e.target.value)}
                  placeholder="Eg. ..instagram.com/username"
               />
               <label>Youtube Link (Optional)</label>
               <input
                  type="url"
                  value={ytLink}
                  onChange={(e) => setYtLink(e.target.value)}
                  placeholder="Eg. ..youtube/username"
               />
            </div>
         );
      }
   };

   const submit = () => {
      setProfile({
         name,
         email,
         phone,
         instaLink,
         ytLink,
      });
      setDisplayAddProfile(false);
   };

   const renderButtons = () => {
      if (formValue === 0) {
         return (
            <div className="buttons-container">
               <button
                  onClick={() => {
                     setFormValue(1);
                  }}
               >
                  Next
               </button>
            </div>
         );
      } else {
         return (
            <div className="buttons-container">
               <button
                  onClick={() => {
                     setFormValue(0);
                  }}
               >
                  Back
               </button>
               <button onClick={submit}>Done</button>
            </div>
         );
      }
   };

   return (
      <div className="translucent-screen">
         <div className="add-profile">
            <div className="top-bar">
               <h2>Add New Profile</h2>
               <CloseLogo
                  onClick={() => {
                     setDisplayAddProfile(false);
                  }}
               />
            </div>
            <div className="main-body">
               <div className="formSwitchButtons">Basic</div>
               <div className="formSwitchButtons">Social</div>
               <div className={highlightDivClass(0)}></div>
               <div className={highlightDivClass(1)}></div>
               {renderForm()}
            </div>
            <div className="bottom-bar">{renderButtons()}</div>
         </div>
      </div>
   );
};

export default AddProfile;
