
import React from "react";
import {
  Home,
  Settings,
  Heart,
  BarChart2,
  Briefcase,
  BookOpen,
  Users,
  Mail,
} from "lucide-react";

const navItems = [
  { id: "#accueil", icon: <Home size={18} />, label: "Accueil" },
  { id: "#services", icon: <Settings size={18} />, label: "Services" },
  { id: "#valeurs", icon: <Heart size={18} />, label: "Valeurs" },
  { id: "#expertises", icon: <BarChart2 size={18} />, label: "Expertises" },
  { id: "#emplois", icon: <Briefcase size={18} />, label: "Emplois" },
  { id: "#formations", icon: <BookOpen size={18} />, label: "Formations" },
  { id: "#clients", icon: <Users size={18} />, label: "Clients" },
  { id: "#contact", icon: <Mail size={18} />, label: "Contact" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-blue-900 text-white fixed top-0 left-0 p-6">
      <h2 className="text-2xl font-bold mb-10">Consilia-Data</h2>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.id} className="flex items-center gap-2 hover:underline">
              {item.icon}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
