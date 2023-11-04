import React from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { LineChart } from '@mui/x-charts/LineChart';
import "./dashboard.css";


const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
];

const size = {
    width: 400,
    height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

export default function DashboardChart() {
    return (
        <>
            <h2>Charts</h2>
            <div className="chart">

                <div className="chart-child">
                    <p><b>Revenue</b></p>
                    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>

                        <PieCenterLabel>Center label</PieCenterLabel>
                    </PieChart>
                </div>
                <div className="chart-child">
                    <p><b>Traffic</b></p>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        width={500}
                        height={300}
                    />
                </div>
            </div>
        </>
    );
}