"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, Menu as MenuIcon, Package, FileText, ClipboardList, Info, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: MenuIcon, label: "Menu", href: "/menu" },
  { icon: Users, label: "Staff", href: "/staff" },
  { icon: Package, label: "Inventory", href: "/inventory" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: ClipboardList, label: "Order/Table", href: "/orders" },
  { icon: Info, label: "Information", href: "/information" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-[90px] flex-col bg-[#252525] py-4">
      <div className="mb-8 flex justify-center">
        <span className="text-xl font-bold text-pink-400">COSY</span>
      </div>
      <nav className="flex flex-1 flex-col gap-2 px-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "w-full h-[60px] flex flex-col items-center justify-center gap-1",
                  isActive && "bg-pink-400/20 text-pink-400"
                )}
              >
                <Icon size={24} />
                <span className="text-xs">{item.label}</span>
              </Button>
            </Link>
          );
        })}
      </nav>
      <div className="px-2">
        <Button
          variant="ghost"
          size="icon"
          className="w-full h-[60px] flex flex-col items-center justify-center gap-1"
        >
          <Settings size={24} />
          <span className="text-xs">Layout</span>
        </Button>
        <div className="px-2">
        <Button variant="ghost" className="w-full h-[60px] flex flex-col items-center justify-center gap-1">
          <LogOut className="sidebar-icon" />
          Logout
        </Button>
      </div>
      </div>
    </div>
  );
}