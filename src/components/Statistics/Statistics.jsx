

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis, Tooltip 
} from "recharts";
import JobBanner from "../JobBanner/JobBanner";

const data = [
  {
    subject: "Assignment 1",
    A: 49,
   
    fullMark: 60
  },
  {
    subject: "Assignment 2",
    A: 60,
   
    fullMark: 60
  },
  {
    subject: "Assignment 3",
    A: 55,
    
    fullMark: 60
  },
  {
    subject: "Assignmen 4",
    A: 58,
    
    fullMark: 60
  },
  {
    subject: "Assignment 5",
    A: 60,
   
    fullMark: 60
  },
  {
    subject: "Assignment 6",
    A: 58,
    
    fullMark: 60
  },
  {
    subject: "Assignment 7",
    A: 60,
    
    fullMark: 60
  },
  {
    subject: "Assignment 8",
    A: 60,
    
    fullMark: 60
  }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
       
      </div>
    );
  }return null;
};

const  Statistics =()=> {
  return (
    <div>
     <JobBanner
            
            text = {`Assignment Marks`}
            />
   <div className="my-container">
    <h1 className="text-3xl font-bold text-center">Assignment Marks in Radar Chart</h1>
     <RadarChart
      cx={400}
      cy={350}
      outerRadius={200}
      width={800}
      height={700}
      data={data}
      className="mx-auto -mt-16"
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Tooltip content={<CustomTooltip />} />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#96031A"
        fill="#960200"
        fillOpacity={0.4}
      />
    </RadarChart>
   </div>
   </div>
  );
}


export default Statistics;