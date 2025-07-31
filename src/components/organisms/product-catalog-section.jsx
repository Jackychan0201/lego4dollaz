"use client";
import ProductCard from './product-card';
import Image from 'next/image';
import banner from "@/assets/banner.jpg";
import FilterDropdown from "@/components/molecules/dropdown";
import SearchBar from "@/components/molecules/search-bar";
import { useState, useMemo } from "react";

export const ProductCatalogSection = ({ stories }) => {
  const [filter, setFilter] = useState("price-asc");
  const [search, setSearch] = useState("");

  const allTitles = useMemo(() =>
    Array.from(new Set(stories.map(s => s.content.title?.trim() || ""))).filter(Boolean),
    [stories]
  );

  const filteredStories = useMemo(() => {
    if (!search) return stories;
    return stories.filter(story =>
      story.content.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [stories, search]);

  const sortedStories = useMemo(() => {
    return [...filteredStories].sort((a, b) => {
      const aTitle = a.content.title?.toLowerCase() || "";
      const bTitle = b.content.title?.toLowerCase() || "";
      const aPrice = parseFloat(a.content.price);
      const bPrice = parseFloat(b.content.price);
      switch (filter) {
        case "price-asc":
          return aPrice - bPrice;
        case "price-desc":
          return bPrice - aPrice;
        case "alpha-asc":
          return aTitle.localeCompare(bTitle);
        case "alpha-desc":
          return bTitle.localeCompare(aTitle);
        default:
          return 0;
      }
    });
  }, [filteredStories, filter]);

  return (
    <main className="flex-grow min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-100 via-blue-50 to-yellow-50">
      <header className="w-full top-0 z-20 bg-white/80 backdrop-blur-md shadow-md">
        <Image
          className="w-full h-[12.5rem] object-cover"
          src={banner}
          alt="Lego Banner"
          priority
        />
        <div className="py-4 flex flex-col max-w-7xl mx-auto w-full px-4">
          <div className='flex flex-col self-cetner justify-center'>
            <h1 className="text-2xl sm:text-3xl text-center font-extrabold text-gray-800 drop-shadow-sm tracking-wide">Main Catalog</h1>
            <h2 className="text-xl sm:text-2xl text-center text-gray-500 italic mt-2">Take a look at what we have for you</h2>
          </div>
          <div className="flex flex-col sm:flex-row mt-4">
            <div className="sm:flex-1 sm:mr-4">
              <SearchBar
                onSearch={setSearch}
                placeholder="Search bricks..."
                suggestions={allTitles}
              />
            </div>
            <div className="sm:flex-none sm:self-end mt-2 sm:mt-0 sm:ml-auto">
              <FilterDropdown onSelect={setFilter} />
            </div>
          </div>
        </div>
      </header>
      <ul className="mt-8 px-4 pb-16 w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 xl:gap-12">
        {sortedStories.map((story) => (
          <li
            key={story.id}
            className="border-3 border-black-200 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
          >
            <ProductCard blok={story.content} slug={story.slug.split('/').pop()} />
          </li>
        ))}
      </ul>
    </main>
  );
};