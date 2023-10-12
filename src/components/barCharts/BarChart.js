import {
   ResponsiveContainer,
   BarChart,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Legend,
   Bar,
} from "recharts";
import "./bar-chart.css";

const Barchart = () => {
   const data = [
      {
         week: "Week 1",
         User: 500,
         Guest: 400,
      },
      {
         week: "Week 2",
         User: 350,
         Guest: 450,
      },
      {
         week: "Week 3",
         User: 200,
         Guest: 300,
      },
      {
         week: "Week 4",
         User: 400,
         Guest: 360,
      },
   ];
   return (
      <div className="bar-chart-container">
         <h2 className="title">Activities</h2>
         <h4 className="subtitle">May - June 2021</h4>
         <ResponsiveContainer width="100%" height="90%">
            <BarChart width={500} height={500} data={data}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="week" />
               <YAxis />
               <Tooltip />
               <Legend
                  iconType="circle"
                  verticalAlign="top"
                  align="right"
                  wrapperStyle={{ top: -10 }}
               />
               <Bar dataKey="User" barSize={20} fill="#98d89e" />
               <Bar dataKey="Guest" barSize={20} fill="#ee8484" />
            </BarChart>
         </ResponsiveContainer>
      </div>
   );
};

export default Barchart;
