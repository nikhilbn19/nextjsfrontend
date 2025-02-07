"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Search, Filter, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";

const inventoryItems = [
  {
    id: "#INV001",
    name: "Chicken Breast",
    category: "Meat",
    quantity: "50 kg",
    unitPrice: "$8.99/kg",
    totalValue: "$449.50",
    status: "In Stock",
    lastUpdated: "2024-04-10",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "#INV002",
    name: "Tomato Sauce",
    category: "Condiments",
    quantity: "100 bottles",
    unitPrice: "$3.99/bottle",
    totalValue: "$399.00",
    status: "Low Stock",
    lastUpdated: "2024-04-09",
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },

  {
    id: "#INV001",
    name: "Chicken Breast",
    category: "Meat",
    quantity: "50 kg",
    unitPrice: "$8.99/kg",
    totalValue: "$449.50",
    status: "In Stock",
    lastUpdated: "2024-04-10",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "#INV002",
    name: "Tomato Sauce",
    category: "Condiments",
    quantity: "100 bottles",
    unitPrice: "$3.99/bottle",
    totalValue: "$399.00",
    status: "Low Stock",
    lastUpdated: "2024-04-09",
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },

  {
    id: "#INV001",
    name: "Chicken Breast",
    category: "Meat",
    quantity: "50 kg",
    unitPrice: "$8.99/kg",
    totalValue: "$449.50",
    status: "In Stock",
    lastUpdated: "2024-04-10",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "#INV002",
    name: "Tomato Sauce",
    category: "Condiments",
    quantity: "100 bottles",
    unitPrice: "$3.99/bottle",
    totalValue: "$399.00",
    status: "Low Stock",
    lastUpdated: "2024-04-09",
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },

  {
    id: "#INV001",
    name: "Chicken Breast",
    category: "Meat",
    quantity: "50 kg",
    unitPrice: "$8.99/kg",
    totalValue: "$449.50",
    status: "In Stock",
    lastUpdated: "2024-04-10",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "#INV002",
    name: "Tomato Sauce",
    category: "Condiments",
    quantity: "100 bottles",
    unitPrice: "$3.99/bottle",
    totalValue: "$399.00",
    status: "Low Stock",
    lastUpdated: "2024-04-09",
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  
];

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Inventory Management</h1>
        <div className="flex items-center gap-4">
          <Button className="bg-pink-400 hover:bg-pink-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
          <Button variant="outline">
            Export
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search inventory..."
            className="pl-10 bg-[#252525] border-none"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="p-6 bg-[#252525]">
          <h3 className="text-sm text-gray-400 mb-2">Total Items</h3>
          <div className="text-2xl font-bold">1,234</div>
        </Card>
        <Card className="p-6 bg-[#252525]">
          <h3 className="text-sm text-gray-400 mb-2">Low Stock Items</h3>
          <div className="text-2xl font-bold text-yellow-500">12</div>
        </Card>
        <Card className="p-6 bg-[#252525]">
          <h3 className="text-sm text-gray-400 mb-2">Out of Stock</h3>
          <div className="text-2xl font-bold text-red-500">3</div>
        </Card>
      </div>

      <div className="space-y-4">
        {inventoryItems.map((item) => (
          <Card key={item.id} className="p-4 bg-[#252525] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-sm text-gray-400">{item.id}</span>
                </div>
                <div className="text-sm text-gray-400">{item.category}</div>
              </div>
            </div>
            <div>
              <div className="font-medium">{item.quantity}</div>
              <div className="text-sm text-gray-400">{item.unitPrice}</div>
            </div>
            <div>
              <div className="font-medium">{item.totalValue}</div>
              <div className="text-sm text-gray-400">Total Value</div>
            </div>
            <div>
              <div className={`text-sm ${
                item.status === "In Stock" 
                  ? "text-green-400" 
                  : item.status === "Low Stock"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}>
                {item.status}
              </div>
              <div className="text-sm text-gray-400">
                Last updated: {item.lastUpdated}
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}