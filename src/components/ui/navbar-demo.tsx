"use client"

import { Home, BookOpen, Sparkles, CreditCard } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Features', url: '#features', icon: Sparkles },
    { name: 'About Us', url: '#about', icon: BookOpen },
    { name: 'Pricing', url: '#pricing', icon: CreditCard }
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <NavBar items={navItems} />
    </div>
  );
}
