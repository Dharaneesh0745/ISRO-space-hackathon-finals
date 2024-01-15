/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
  dashboardData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";

const DropDown = ({ currentMode }) => (
  <div classNameNameNameName="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-32">
      <div className="px-2">
        <div className="flex -mx-2">
          {dashboardData.map((item) => (
            <div className="w-1/3 px-2">
              <div
                className="h-12 rounded-md items-center justify-center flex"
                style={{ backgroundColor: currentColor }}
              >
                <div className="h-18 w-18 text-white">{item.icon}</div>
                <div className="ml-4 text-white">|</div>
                <div className="ml-4 text-white">{item.project}</div>
              </div>
            </div>
          ))}
          {/* <div className="w-1/3 px-2">
            <div
              className="h-12 rounded-md"
              style={{ backgroundColor: currentColor }}
            ></div>
          </div>
          <div className="w-1/3 px-2">
            <div
              className="h-12 rounded-md"
              style={{ backgroundColor: currentColor }}
            ></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
