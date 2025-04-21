
import React from "react";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 flex-1">
        <section id="accueil" className="py-10">
          <h1 className="text-3xl font-bold mb-4">Bienvenue chez Consilia-Data</h1>
          <p>Libérez la puissance de vos données avec nos solutions BI.</p>
        </section>
        <section id="services" className="py-10">
          <h2 className="text-2xl font-bold mb-2">Nos Services</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Conseil</li>
            <li>Réalisation de projet</li>
            <li>Assistance technique</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
