import "./signin.css";
import { ReactComponent as GoogleLogo } from "../../assets/google_logo.svg";
import { ReactComponent as AppleLogo } from "../../assets/apple_logo.svg";
import { useGoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { UserContext } from "../../context/user-context";

const SignInForm = () => {
   const { setUser } = useContext(UserContext);

   const googleLogin = useGoogleLogin({
      onSuccess: (tokenResponse) => setUser(tokenResponse),
   });

   return (
      <div className="left-half">
         <div className="form-content">
            <h2 className="title">Sign In</h2>
            <span className="subtitle">Sign in to your account</span>
            <div className="signin-btn">
               <button
                  onClick={() => googleLogin()}
                  className="sign-in-btn"
               >
                  <GoogleLogo />
                  <span className="sign-text">Sign in with Google</span>
               </button>
               <button className="sign-in-btn">
                  <AppleLogo />
                  <span className="sign-text">Sign in with Google</span>
               </button>
            </div>
            <div className="sign-in-form">
               <label className="small-text" id="email-label">
                  Email Address
               </label>
               <input className="form-inputs" type="email" name="email" />
               <label className="small-text" for="password">
                  Password
               </label>
               <input className="form-inputs" type="password" name="password" />
               <span className="small-text color-blue">Forgot password?</span>
               <button className="submit-button" type="submit">
                  Sign In
               </button>
            </div>
            <br />
            <p className="register-txt">
               Don't have an account?{" "}
               <span className="color-blue">Register here</span>
            </p>
         </div>
      </div>
   );
};

export default SignInForm;
