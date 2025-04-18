"use client";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="w-full flex justify-between items-center p-4">
        <button
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </header>
      <nav
        className={`absolute top-16 left-0 w-3xl bg-gray-800 text-white p-4 transform transition-all duration-300 ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link href="/">Página Inicial</Link>
          </li>
          <li>
            <Link href="/creatina">Creatina</Link>
          </li>
          <li>
            <Link href="/pretreino">Pré-treino</Link>
          </li>
          <li>
            <Link href="/slimfit">Slim-fit</Link>
          </li>
          <li>
            <Link href="/whey">Whey Protein</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}