"use client"
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Label } from 'recharts';

const data = [
    { name: 'Referal', value: 602 },
    { name: 'Organic Search', value: 573 },
    { name: 'Direct', value: 564 },
    { name: 'Other', value: 410 },
    { name: 'Paid Search', value: 212 },
    { name: 'Social', value: 176 },
    { name: 'Display', value: 126 },
    { name: 'Email', value: 122 },
];
const COLORS = ['#006400', '#00008B', '#FFD700', '#FF8C00', '#FF1493', '#800080', '#8B0000', '#2F4F4F'];

const AnalyticsPieChart = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <ResponsiveContainer width="90%" height={200}>
            <PieChart>
                <Legend align='right' verticalAlign='middle' layout='vertical' />
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
                        value="2,787"
                        position="center"
                        dy={-7}
                        style={{ fontSize: '24px', fill: '#000', fontWeight: 'bold' }}
                    />
                    <Label
                        value="sessions"
                        className='text-gray-600'
                        position="center"
                        dy={16}
                        style={{ fontSize: '16px', }}
                    />
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default AnalyticsPieChart;