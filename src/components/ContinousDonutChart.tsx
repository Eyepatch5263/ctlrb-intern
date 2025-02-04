"use client"
import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
const data = [
    { name: 'Referal', value: 30 },
    { name: 'Organic Search', value: 70 },
];

//
const ContinousDonutChart = ({color,ColorRes,value}:{color:string,ColorRes:string,value:string}) => {
    const [isClient, setIsClient] = useState(false);
    const COLORS = [ColorRes, color,];

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }
    return (
        <ResponsiveContainer width="100%" height={160}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={1}
                    dataKey="value"
                >
                    <Label
                        value={value}
                        position="center"
                        style={{ fontSize: '40px', fill: '#000', fontWeight: 'bold' }}
                    />
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}

                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default ContinousDonutChart
