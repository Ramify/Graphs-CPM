import React from "react";
import { useRouter } from "next/router";
import { ResponsivePie } from "@nivo/pie";

const PieChart = (): JSX.Element => {
  const query = useRouter();

  const { data } = query.query;
  if (data === undefined) {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <h1>No data</h1>
      </div>
    );
  }

  const { chartData, symbol } = JSON.parse(data as string);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ResponsivePie
        arcLabel={(d) => (d.value > 0 ? `${d.value} ${symbol}` : "")}
        innerRadius={0.45}
        sortByValue
        legends={[
          {
            anchor: "top-left",
            direction: "column",
            justify: false,
            translateX: 20,
            translateY: 20,
            itemWidth: 100,
            itemHeight: 20,
            itemsSpacing: 5,
            symbolSize: 20,
            itemDirection: "left-to-right",
          },
        ]}
        margin={{
          top: 24,
          bottom: 24,
          left: 24,
          right: 24,
        }}
        colors={{ scheme: "set3" }}
        activeOuterRadiusOffset={12}
        enableArcLinkLabels={false}
        data={chartData}
        tooltip={(e) => {
          return (
            <div
              style={{
                padding: "8px",
                background: "#fdfdfd",
                border: "1px solid #3D3D3D",
                borderRadius: "4px",
              }}
            >
              <div style={{ fontWeight: "bold" }}>
                {e.datum.id} : {e.datum.value} {symbol}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default PieChart;
