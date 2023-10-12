import {
   ResponsiveContainer,
   PieChart,
   Pie,
   Legend,
   Cell,
   Tooltip,
} from "recharts";
import "./Charts.css";
import { Sector } from 'recharts'; 

const Donutchart = () => {
   const data = [
      {
         name: "Basic Tees",
         value: 55,
      },
      {
         name: "Short Pants",
         value: 31,
      },
      {
         name: "Super Hoodies",
         value: 14,
      },
   ];

   const COLORS = ["#FF5733", "#5BC0EB", "#FFD700"];

   return (
      <div className="donut-chart-container">
         <div className="title-subtitle-container">
            <h2 className="title">Activities</h2>
            <h4 className="subtitle">May - June 2021</h4>
         </div>
         <ResponsiveContainer width="100%" height="80%">
            <PieChart width={100} height={100}>
               <Legend
                  iconType="circle"
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  wrapperStyle={{ right: -5 }}
               />
               <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#FF5733"
               >
                  {data.map((entry, index) => (
                     <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                     />
                  ))}
               </Pie>
               <Tooltip />
               {
                  data.map((entry, index) => (
                     <Sector
                        key={`sector-${index}`}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        startAngle={entry.startAngle}
                        endAngle={entry.endAngle}
                        fill={COLORS[index % COLORS.length]}
                        cornerRadius={40} 
                     />
                  ))
               }
            </PieChart>
         </ResponsiveContainer>
      </div>
   );
};

export default Donutchart;
