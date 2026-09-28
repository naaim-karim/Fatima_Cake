"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowUpRight } from "lucide-react";
import { menuItems, categories, categoryName } from "@/lib/menu-data";

export function MenuCatalog({ initialCategory }: { initialCategory: string }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const filteredItems = useMemo(
    () =>
      menuItems.filter(
        (item) =>
          (selectedCategory === "all" || item.category === selectedCategory) &&
          `${item.name} ${item.description}`
            .toLowerCase()
            .includes(search.trim().toLowerCase()),
      ),
    [selectedCategory, search],
  );
  return (
    <section className="menu-section bakery-wrap">
      <div className="menu-heading">
        <p className="eyebrow">THE FATIMA CAKE MENU</p>
        <h1>
          Find your <em>sweet spot.</em>
        </h1>
        <p>
          Cakes for the table. Little treats for the day. Pick a favourite and
          take a closer look.
        </p>
      </div>
      <div className="menu-tools">
        <div
          className="category-filters"
          role="group"
          aria-label="Filter treats by category"
        >
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={selectedCategory === c.id}
              className={selectedCategory === c.id ? "active" : ""}
              onClick={() => setSelectedCategory(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="cake-search">
          <Search size={17} />
          <input
            aria-label="Search the menu"
            placeholder="Find a flavour…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setSearch("")}
            >
              <X size={17} />
            </button>
          )}
        </div>
      </div>
      <div className="menu-count">
        <p role="status">
          {filteredItems.length}{" "}
          {filteredItems.length === 1 ? "sweet treat" : "sweet treats"}
        </p>
        <p>Illustrative product photography</p>
      </div>
      <div className="menu-dessert-grid">
        {filteredItems.map((item) => (
          <Link
            key={item.id}
            href={`/menu/${item.id}`}
            className="dessert-card"
          >
            <div className="dessert-photo">
              <Image
                src={item.image}
                alt={`Illustrative ${item.name}`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
            </div>
            <div className="dessert-meta">
              <span>{categoryName(item.category)}</span>
              {item.price !== undefined && <span>${item.price}</span>}
            </div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span className="dessert-link">
              View details <ArrowUpRight size={16} />
            </span>
          </Link>
        ))}
      </div>
      {filteredItems.length === 0 && (
        <div className="menu-empty">
          <h2>No treats found.</h2>
          <p>Try a different flavour or category.</p>
          <button
            type="button"
            className="bakery-button"
            onClick={() => {
              setSearch("");
              setSelectedCategory("all");
            }}
          >
            Show all treats
          </button>
        </div>
      )}
    </section>
  );
}
