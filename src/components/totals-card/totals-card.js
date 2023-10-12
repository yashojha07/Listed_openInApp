import "./totals-card.css";
import { ReactComponent as RevenueLogo } from "../../assets/revenue_icon.svg";
import { ReactComponent as TransactionLogo } from "../../assets/transaction_icon.svg";
import { ReactComponent as LikesLogo } from "../../assets/likes_icon.svg";
import { ReactComponent as UsersLogo } from "../../assets/total_users_icon.svg";

const TotalsCard = ({ totalType, totalValue, totalPercentage }) => {
   const returnLogo = () => {
      if (totalType === "Revenues") {
         return (
            <div className="logo backgroundGreen">
               <RevenueLogo />
            </div>
         );
      } else if (totalType === "Transactions") {
         return (
            <div className="logo backgroundYellow">
               <TransactionLogo />
            </div>
         );
      } else if (totalType === "Likes") {
         return (
            <div className="logo backgroundPink">
               <LikesLogo />
            </div>
         );
      } else if (totalType === "Users") {
         return (
            <div className="logo backgroundPurple">
               <UsersLogo />
            </div>
         );
      }
   };

   return (
      <div className="totals-card">
         {returnLogo()}
         <span>Total {totalType}</span>
         <br />
         <div className="value-percentage-container">
            <span>{totalValue}</span>
            <div className="total-percentage">+{totalPercentage}%</div>
         </div>
      </div>
   );
};

export default TotalsCard;
