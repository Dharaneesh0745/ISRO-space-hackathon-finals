import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function App() {
  const [salesData, setSalesData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get_json_data", {
        baseURL: "http://localhost:5000",
      })
      .then((response) => {
        console.log("Data received:", response.data);
        setSalesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <div>Error fetching data. Please check the console for details.</div>
    );
  }

  const data = salesData.sales || [];

  return (
    <div>
      <h1>Sales Data Visualization</h1>
      {data.length > 0 && (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`#${(index + 1) * 123456}`} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default App;
