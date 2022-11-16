import { useRouter } from "next/router";
import { ResponsiveLine } from "@nivo/line";

const LineChart = (): JSX.Element => {
  const router = useRouter();
  const { data } = router.query;
  let json = [];

  if (data) {
    json = JSON.parse(data as string);
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <ResponsiveLine
          data={json}

          margin={{
            left: 100,
            top: 50,
            right: 100,
            bottom: 48,
          }}
          colors={{
            scheme: "category10",
          }}
          enableGridX={false}
          axisBottom={{
            legend: "Années",
            legendOffset: 44,
            legendPosition: "middle",
          }}
          axisLeft={{
            legend: "Valorisation",
            legendOffset: -80,
            legendPosition: "middle",
          }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto"
          }}
          yFormat=">-.0f"
          isInteractive={true}
          useMesh={true}
          enableCrosshair={true}
          crosshairType="cross"
          animate={true}
          motionConfig="stiff"
        />
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <h1>No data</h1>
      </div>
    );
  }
};

export default LineChart;
