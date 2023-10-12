import "./signin.css";

import SignInBoard from "../../components/board/signin-board";
import SignInForm from "../../components/form/SignIn";

const SignIn = () => {
   return (
      <div className="sign-in-container">
         <SignInBoard />
         <SignInForm />
      </div>
   );
};

export default SignIn;
