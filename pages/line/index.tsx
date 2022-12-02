import { useRouter } from "next/router";
import { ResponsiveLine } from "@nivo/line";

const LineChart = (): JSX.Element => {
  const router = useRouter();
  const { data } = router.query;
  let json = [];

  if (data) {
    json = JSON.parse(data as string);
    const values = json[0].data.map((e: { x: number; y: number }) => +e.y);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const { axisBottom, axisLeft } = json[0];

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
            right: 100,
            bottom: 48,
          }}
          colors={{
            scheme: "category10",
          }}
          enableGridX={false}
          axisBottom={{
            legend: axisBottom ?? "Années",
            legendOffset: 44,
            legendPosition: "middle",
          }}
          axisLeft={{
            legend: axisLeft ?? "Valorisation",
            legendOffset: -80,
            legendPosition: "middle",
          }}
          yScale={{
            type: "linear",
            min: "auto",
            max: max + (max - min) * 0.25,
          }}
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
                  {e.point.data.xFormatted} : {e.point.data.yFormatted}
                </div>
              </div>
            );
          }}
          yFormat=">-.0f"
          isInteractive={true}
          useMesh={true}
          enableCrosshair={true}
          enablePoints={false}
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
