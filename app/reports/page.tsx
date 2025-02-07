"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Download, Filter } from "lucide-react";

const salesData = [
  { month: "JAN", sales: 12500, orders: 150 },
  { month: "FEB", sales: 15000, orders: 180 },
  { month: "MAR", sales: 18000, orders: 220 },
  { month: "APR", sales: 16000, orders: 190 },
  { month: "MAY", sales: 21000, orders: 250 },
  { month: "JUN", sales: 19000, orders: 230 },
];

const topItems = [
  { name: "Chicken Parmesan", sales: 450, revenue: "$6,750" },
  { name: "Margherita Pizza", sales: 380, revenue: "$5,700" },
  { name: "Caesar Salad", sales: 320, revenue: "$3,200" },
  { name: "Spaghetti Carbonara", sales: 290, revenue: "$3,480" },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Reports & Analytics</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="bg-pink-400 hover:bg-pink-500 gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-6 bg-[#252525]">
          <h3 className="text-sm text-gray-400 mb-2">Total Revenue</h3>
          <div className="text-2xl font-bold">$101,750</div>
          <div className="text-sm text-green-400">+12.5% from last month</div>
        </Card>
        <Card className="p-6 bg-[#252525]">
          <h3 className="text-sm text-gray-400 mb-2">Total Orders</h3>
          <div className="text-2xl font-bold">1,220</div>
          <div className="text-sm text-green-400">+8.2% from last month</div>
        </Card>
        <Card className="p-6 bg-[#252525]">
          <h3 className="text-sm text-gray-400 mb-2">Average Order Value</h3>
          <div className="text-2xl font-bold">$83.40</div>
          <div className="text-sm text-green-400">+4.3% from last month</div>
        </Card>
        <Card className="p-6 bg-[#252525]">
          <h3 className="text-sm text-gray-400 mb-2">Customer Satisfaction</h3>
          <div className="text-2xl font-bold">4.8/5.0</div>
          <div className="text-sm text-green-400">+0.2 from last month</div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6 bg-[#252525]">
          <h3 className="font-semibold mb-6">Revenue Overview</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis 
                  dataKey="month" 
                  stroke="#666"
                  tick={{ fill: '#666' }}
                />
                <YAxis 
                  stroke="#666"
                  tick={{ fill: '#666' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    background: '#252525',
                    border: '1px solid #333',
                    borderRadius: '4px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#EC4899" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-[#252525]">
          <h3 className="font-semibold mb-6">Orders Overview</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis 
                  dataKey="month" 
                  stroke="#666"
                  tick={{ fill: '#666' }}
                />
                <YAxis 
                  stroke="#666"
                  tick={{ fill: '#666' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    background: '#252525',
                    border: '1px solid #333',
                    borderRadius: '4px'
                  }}
                />
                <Bar dataKey="orders" fill="#EC4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-[#252525]">
        <h3 className="font-semibold mb-4">Top Selling Items</h3>
        <div className="space-y-4">
          {topItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-[#2A2A2A] rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-pink-400/20 text-pink-400 rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.sales} orders</p>
                </div>
              </div>
              <div className="font-medium">{item.revenue}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}