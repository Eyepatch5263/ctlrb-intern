"use client"
import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'April 5',
        New: 4000,
        Lost: -2400,
        amt: 2400,
    },
    {
        name: 'April 8',
        New: 12000,
        Lost: -1398,
        amt: 2210,
    },
    {
        name: 'April 12',
        New: 2000,
        Lost: -9800,
        amt: 2290,
    },
    {
        name: 'April 15',
        New: 2780,
        Lost: -3908,
        amt: 2000,
    },
    {
        name: 'April 19',
        New: 1890,
        Lost: -4800,
        amt: 2181,
    },
    {
        name: 'April 22',
        New: 2390,
        Lost: -3800,
        amt: 2500,
    },
    {
        name: 'April 26',
        New: 3490,
        Lost: -4300,
        amt: 2100,
    },
];

export default class BacklinksChart extends PureComponent {

    render() {
        return (
            <ResponsiveContainer width="100%" height="60%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    stackOffset="sign"
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" interval={1} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="Lost" fill="#E20A0A" stackId="stack" barSize={30} />
                    <Bar dataKey="New" fill="#04A148" stackId="stack" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
