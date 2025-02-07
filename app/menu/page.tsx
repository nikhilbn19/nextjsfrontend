"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

const categories = [
  { id: "all", name: "All", itemCount: "156 Items" },
  { id: "pizza", name: "Pizza", itemCount: "35 Items" },
  { id: "burger", name: "Burger", itemCount: "15 Items" },
  { id: "chicken", name: "Chicken", itemCount: "25 Items" },
  { id: "bakery", name: "Bakery", itemCount: "15 Items" },
  { id: "beverage", name: "Beverage", itemCount: "35 Items" },
  { id: "seafood", name: "Seafood", itemCount: "31 Items" },
];

const menuItems = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Chicken Parmesan",
    itemId: "#22114466",
    stock: "10 Items",
    category: "Chicken",
    price: "$15.00",
    availability: "In Stock"
  },

  {
    id: "1",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Chicken Parmesan",
    itemId: "#22114466",
    stock: "10 Items",
    category: "Chicken",
    price: "$15.00",
    availability: "In Stock"
  },

  {
    id: "1",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Chicken Parmesan",
    itemId: "#22114466",
    stock: "10 Items",
    category: "Chicken",
    price: "$15.00",
    availability: "In Stock"
  },

  {
    id: "1",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Chicken Parmesan",
    itemId: "#22114466",
    stock: "10 Items",
    category: "Chicken",
    price: "$15.00",
    availability: "In Stock"
  },

  {
    id: "1",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Chicken Parmesan",
    itemId: "#22114466",
    stock: "10 Items",
    category: "Chicken",
    price: "$15.00",
    availability: "In Stock"
  },

  {
    id: "1",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Chicken Parmesan",
    itemId: "#22114466",
    stock: "10 Items",
    category: "Chicken",
    price: "$15.00",
    availability: "In Stock"
  },

  {
    id: "1",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Chicken Parmesan",
    itemId: "#22114466",
    stock: "10 Items",
    category: "Chicken",
    price: "$15.00",
    availability: "In Stock"
  },
  
  // Add more items as needed
];

export default function MenuPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Menu</h1>
        <Button className="bg-pink-400 hover:bg-pink-500">
          <Plus className="h-4 w-4 mr-2" />
          Add New Category
        </Button>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Categories</h2>
        <div className="grid grid-cols-7 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className={`p-4 bg-[#252525] cursor-pointer hover:bg-[#2A2A2A] transition-colors
                ${category.id === 'all' ? 'bg-pink-400/20 text-pink-400' : ''}`}
            >
              <div className="text-center">
                <div className="font-medium">{category.name}</div>
                <div className="text-sm text-gray-400">{category.itemCount}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Special menu all items</h2>
          <Button className="bg-pink-400 hover:bg-pink-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Menu Item
          </Button>
        </div>
        <div className="space-y-4">
          {menuItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-[#252525] rounded-lg">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.itemId}</p>
                </div>
              </div>
              <div className="text-sm text-gray-400">{item.stock}</div>
              <div className="text-sm">{item.category}</div>
              <div className="font-medium">{item.price}</div>
              <div className="text-sm text-green-400">{item.availability}</div>
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}