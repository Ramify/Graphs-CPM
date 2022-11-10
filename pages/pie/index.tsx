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
        arcLabel={(d) => `${d.value}${symbol}`}
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
        colors={{ scheme: "pastel1" }}
        activeOuterRadiusOffset={12}
        arcLabelsRadiusOffset={0.75}
        enableArcLinkLabels={false}
        data={chartData}
      />
    </div>
  );
};

export default PieChart;
