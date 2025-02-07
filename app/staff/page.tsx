"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, MoreVertical, Plus, User } from "lucide-react";
import { useState } from "react";

const staffMembers = [
  {
    id: "#C11",
    name: "William Joyce",
    email: "williamjoyce@gmail.com",
    phone: "+1 (012) 123 4454",
    age: "41 yr",
    salary: "$220.00",
    timing: "9am to 5pm",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "#C12",
    name: "William Joyce",
    email: "williamjoyce@gmail.com",
    phone: "+1 (012) 123 4454",
    age: "41 yr",
    salary: "$220.00",
    timing: "9am to 5pm",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },

  {
    id: "#C11",
    name: "William Joyce",
    email: "williamjoyce@gmail.com",
    phone: "+1 (012) 123 4454",
    age: "41 yr",
    salary: "$220.00",
    timing: "9am to 5pm",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },

  {
    id: "#C12",
    name: "William Joyce",
    email: "williamjoyce@gmail.com",
    phone: "+1 (012) 123 4454",
    age: "41 yr",
    salary: "$220.00",
    timing: "9am to 5pm",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },

  {
    id: "#C11",
    name: "William Joyce",
    email: "williamjoyce@gmail.com",
    phone: "+1 (012) 123 4454",
    age: "41 yr",
    salary: "$220.00",
    timing: "9am to 5pm",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },

  {
    id: "#C12",
    name: "William Joyce",
    email: "williamjoyce@gmail.com",
    phone: "+1 (012) 123 4454",
    age: "41 yr",
    salary: "$220.00",
    timing: "9am to 5pm",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },

  {
    id: "#C11",
    name: "William Joyce",
    email: "williamjoyce@gmail.com",
    phone: "+1 (012) 123 4454",
    age: "41 yr",
    salary: "$220.00",
    timing: "9am to 5pm",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },

  {
    id: "#C12",
    name: "William Joyce",
    email: "williamjoyce@gmail.com",
    phone: "+1 (012) 123 4454",
    age: "41 yr",
    salary: "$220.00",
    timing: "9am to 5pm",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },

];

const attendanceRecords = [
  {
    id: "#C11",
    name: "William Joyce",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "10-Apr-2024",
    timing: "9am to 5pm",
    status: "Present"
  },
  {
    id: "#C12",
    name: "William Joyce",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "10-Apr-2024",
    timing: "9am to 5pm",
    status: "Absent"
  },
];

type TabType = "staff" | "attendance";

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState<TabType>("staff");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Staff Management</h1>
        <div className="flex items-center gap-4">
          <Button className="bg-pink-400 hover:bg-pink-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Staff
          </Button>
          <Button variant="outline">
            Sort by
            <MoreVertical className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      <div className="flex gap-4 border-b border-gray-800">
        <Button
          variant="ghost"
          className={`pb-4 rounded-none ${
            activeTab === "staff"
              ? "border-b-2 border-pink-400 text-pink-400"
              : ""
          }`}
          onClick={() => setActiveTab("staff")}
        >
          Staff Management
        </Button>
        <Button
          variant="ghost"
          className={`pb-4 rounded-none ${
            activeTab === "attendance"
              ? "border-b-2 border-pink-400 text-pink-400"
              : ""
          }`}
          onClick={() => setActiveTab("attendance")}
        >
          Attendance
        </Button>
      </div>

      {activeTab === "staff" ? (
        <div className="space-y-4">
          {staffMembers.map((staff) => (
            <Card key={staff.id} className="p-4 bg-[#252525] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={staff.avatar}
                  alt={staff.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{staff.name}</span>
                    <span className="text-sm text-gray-400">{staff.id}</span>
                  </div>
                  <div className="text-sm text-gray-400">{staff.email}</div>
                </div>
              </div>
              <div className="text-sm text-gray-400">{staff.phone}</div>
              <div className="text-sm text-gray-400">{staff.age}</div>
              <div className="font-medium">{staff.salary}</div>
              <div className="text-sm text-gray-400">{staff.timing}</div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {attendanceRecords.map((record) => (
            <Card key={record.id} className="p-4 bg-[#252525] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={record.avatar}
                  alt={record.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{record.name}</span>
                    <span className="text-sm text-gray-400">{record.id}</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-400">{record.date}</div>
              <div className="text-sm text-gray-400">{record.timing}</div>
              <div className={`text-sm ${
                record.status === "Present" 
                  ? "text-green-400" 
                  : "text-red-400"
              }`}>
                {record.status}
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                className={record.status === "Present" ? "text-green-400" : ""}
              >
                <Check className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}