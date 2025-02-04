"use client"
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianAxis } from 'recharts';

const data = [
    { name: '18 Oct', '51+': 4000, '21-50': 2400, '11-20': 2400, '4-10': 2400, '1-3': 2400 },
    { name: '22 Oct', '51+': 3000, '21-50': 1398, '11-20': 2210, '4-10': 2210, '1-3': 2210 },
    { name: '26 Oct', '51+': 2000, '21-50': 9800, '11-20': 2290, '4-10': 2290, '1-3': 2290 },
    { name: '30 Oct', '51+': 2780, '21-50': 3908, '11-20': 2000, '4-10': 2000, '1-3': 2000 },
    { name: '4 Nov', '51+': 1890, '21-50': 4800, '11-20': 2181, '4-10': 2181, '1-3': 2181 },
    { name: '8 Nov', '51+': 2390, '21-50': 3800, '11-20': 2500, '4-10': 2500, '1-3': 2500 },
    { name: '14 Nov', '51+': 3490, '21-50': 4300, '11-20': 2100, '4-10': 2100, '1-3': 2100 },
    { name: '16 Nov', '51+': 3490, '21-50': 4300, '11-20': 2100, '4-10': 2100, '1-3': 2100 },
];

export default class RankingBarChart extends PureComponent {

    render() {
        return (
            <div className='flex flex-col h-[30rem]'>
                <ResponsiveContainer width="89%" height="50%" className={" pb-2"}>
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianAxis strokeDasharray="3" />
                        <Legend />

                        <XAxis interval={1} scale={"auto"} dataKey="name" />
                        <YAxis interval={1} tickFormatter={(value) => `${value / 1000}`} />

                        <Tooltip />
                        <Bar dataKey="51+" stackId="a" fill="#ff0000" barSize={14} />
                        <Bar dataKey="21-50" stackId="a" fill="#FFC45E" barSize={14} />
                        <Bar dataKey="11-20" stackId="a" fill="#FFF700" barSize={14} />
                        <Bar dataKey="4-10" stackId="a" fill="#91E589" barSize={14} />
                        <Bar dataKey="1-3" stackId="a" fill="#0D8202" barSize={14} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        );
    }
}
