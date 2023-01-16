import React from "react";
import { ResponsiveLine } from "@nivo/line";

export default function LineChart({ data }) {
	return (
		<div className="min-w-0 h-full">
			<ResponsiveLine
				data={data}
				tooltip={({ point }) => {
					console.log(point);
					return (
						<div
							style={{
								background: "white",
								padding: "9px 12px",
								borderRadius: "5px",
							}}
						>
							<div className="flex flex-col gap-1">
								<h1 className="font-medium">{point.data.x}</h1>
								<h1>
									{point.serieId}: {`${point.data.y * 100}%`}
								</h1>
							</div>
						</div>
					);
				}}
				stacked={false}
				colors={["hsl(230, 96%, 73%)", "hsl(126, 94%, 94%)"]}
				margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
				xScale={{ type: "point" }}
				yScale={{
					type: "linear",
					min: "0",
					max: "auto",
					stacked: false,
					reverse: false,
				}}
				yFormat=">-.0p"
				curve="catmullRom"
				axisTop={null}
				axisRight={null}
				axisBottom={{
					orient: "bottom",
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "",
					legendOffset: 36,
					legendPosition: "middle",
				}}
				axisLeft={{
					orient: "left",
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					tickValues: 10,
					legend: "",
					legendOffset: -40,
					legendPosition: "middle",
				}}
				enableGridX={false}
				enableGridY={false}
				pointSize={10}
				pointColor={{ theme: "background" }}
				pointBorderWidth={2}
				pointBorderColor={{ from: "serieColor" }}
				pointLabelYOffset={-12}
				enableCrosshair={false}
				useMesh={true}
				legends={[
					{
						anchor: "bottom-right",
						direction: "column",
						justify: false,
						translateX: 70,
						translateY: -10,
						itemWidth: 103,
						itemHeight: 25,
						itemsSpacing: 4,
						symbolSize: 20,
						symbolShape: "circle",
						itemDirection: "left-to-right",
						itemTextColor: "#1d2029",
						effects: [
							{
								on: "hover",
								style: {
									itemBackground: "rgba(0, 0, 0, .03)",
									itemOpacity: 1,
								},
							},
						],
					},
				]}
			/>
		</div>
	);
}
