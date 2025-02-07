"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';


const data = [
  { name: "JAN", value: 2.5 },
  { name: "FEB", value: 3.0 },
  { name: "MAR", value: 2.8 },
  { name: "APR", value: 3.2 },
  { name: "MAY", value: 2.7 },
  { name: "JUN", value: 3.5 },
  { name: "JUL", value: 3.2 },
  { name: "AUG", value: 2.9 },
  { name: "SEP", value: 3.4 },
  { name: "OCT", value: 3.0 },
  { name: "NOV", value: 3.3 },
  { name: "DEC", value: 3.6 },
];

const popularDishes = [
  {
    name: "Chicken Parmesan",
    price: "$15.00",
    status: "In Stock",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Chicken Parmesan",
    price: "$15.00",
    status: "In Stock",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Chicken Parmesan",
    price: "$15.00",
    status: "Out of Stock",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Chicken Parmesan",
    price: "$15.00",
    status: "In Stock",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Chicken Parmesan",
    price: "$15.00",
    status: "In Stock",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Chicken Parmesan",
    price: "$15.00",
    status: "Out of Stock",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  // Add more dishes as needed
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Link href="/profile">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5"  />
          </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="p-6 bg-[#252525]">
          <h3 className="text-sm text-gray-400 mb-2">Daily Sales</h3>
          <div className="text-2xl font-bold">$2k</div>
          <div className="h-[60px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.slice(-7)}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#EC4899" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-[#252525]">
          <h3 className="text-sm text-gray-400 mb-2">Monthly Revenue</h3>
          <div className="text-2xl font-bold">$45k</div>
          <div className="h-[60px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#EC4899" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-[#252525]">
          <h3 className="text-sm text-gray-400 mb-2">Table Occupancy</h3>
          <div className="text-2xl font-bold">25 Tables</div>
          <div className="h-[60px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#EC4899" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6 bg-[#252525]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Popular Dishes</h3>
            <Button variant="link" className="text-pink-400">See All</Button>
          </div>
          <div className="space-y-4">
            {popularDishes.map((dish, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-[#2A2A2A] rounded-lg">
                <div className="flex items-center gap-4">
                  <img src={dish.image} alt={dish.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <h4 className="font-medium">{dish.name}</h4>
                    <p className="text-sm text-gray-400">{dish.price}</p>
                  </div>
                </div>
                <span className="text-sm text-green-400">{dish.status}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-[#252525]">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="default" className="bg-pink-400">Monthly</Button>
            <Button variant="ghost">Daily</Button>
            <Button variant="ghost">Weekly</Button>
            <Button variant="ghost">Export</Button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis 
                  dataKey="name" 
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
                  dataKey="value" 
                  stroke="#EC4899" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}