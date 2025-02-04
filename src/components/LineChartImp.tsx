"use client"
import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'P1',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'P2',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'P3',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'P4',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'P5',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'P6',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'P7',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const LineChartImp = () => {
    return (
        <ResponsiveContainer width="100%" height="50%">
            <LineChart width={300} height={100} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#0D92EA" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
};


export default LineChartImp;
