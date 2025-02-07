"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, ChevronLeft, Pencil } from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "John Doe",
    email: "johndoe123@gmail.com",
    address: "123 Street USA, Chicago",
    newPassword: "",
    confirmPassword: "",
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDiscard = () => {
    setIsEditing(false);
    setFormData({
      firstName: "John Doe",
      email: "johndoe123@gmail.com",
      address: "123 Street USA, Chicago",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleSave = () => {
    // Here you would typically make an API call to save the changes
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] p-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-white">Profile</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="mb-6 rounded-lg bg-[#1a1d1e] p-6">
          <div className="flex items-center gap-4 border-b border-gray-800 pb-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold text-white">John Doe</h2>
              <p className="text-gray-400">Manager</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-auto"
              onClick={handleEdit}
            >
              <Pencil className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                First Name
              </label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                readOnly={!isEditing}
                className="bg-[#2a2d2e] border-gray-700"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Email
              </label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                readOnly={!isEditing}
                className="bg-[#2a2d2e] border-gray-700"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Address
              </label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                readOnly={!isEditing}
                className="bg-[#2a2d2e] border-gray-700"
              />
            </div>

            {isEditing && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    New Password
                  </label>
                  <Input
                    name="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="bg-[#2a2d2e] border-gray-700"
                    placeholder="********"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Confirm Password
                  </label>
                  <Input
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="bg-[#2a2d2e] border-gray-700"
                    placeholder="********"
                  />
                </div>
              </div>
            )}

            {isEditing && (
              <div className="flex justify-end gap-4 pt-4">
                <Button 
                  variant="ghost" 
                  onClick={handleDiscard}
                  className="text-gray-400 hover:text-white"
                >
                  Discard Changes
                </Button>
                <Button 
                  onClick={handleSave}
                  className="bg-pink-400 hover:bg-pink-500"
                >
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}