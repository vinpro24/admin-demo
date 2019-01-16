import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'Recharts';

const PieChartView = props => {
    const { data, size, value, onMouseEnter } = props;
    return (
        <ResponsiveContainer width="100%" height={size}>
            <PieChart onMouseEnter={onMouseEnter} >
                <Pie dataKey="value" data={data} innerRadius={30} outerRadius={35}>
                    <Label value={value} position="center" />
                    {
                        data.map((i, idx) => <Cell key={idx} fill={i.color} />)
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default PieChartView;
