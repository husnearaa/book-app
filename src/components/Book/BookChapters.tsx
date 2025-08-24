"use client";

import { useState, useEffect } from "react";
import bookData from "@/json/bok1.json";
import Link from "next/link";

interface Book {
  abbrev: string;
  name: string;
  chapters: string[][];
}

const BooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooks(bookData as Book[]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="min-h-screen bg-amber-50 flex items-center justify-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 rounded-full animate-pulse bg-[#1b1b1b]"></div>
              <div className="w-8 h-8 rounded-full animate-pulse bg-[#1b1b1b]"></div>
              <div className="w-8 h-8 rounded-full animate-pulse bg-[#1b1b1b]"></div>
            </div>
          </div>
          <div className="text-black text-xl">Loading books...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 underline">Books</h1>
        <p className="text-lg mb-6">All books and their chapters</p>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-black">
              Books Collection
            </h2>
            <span className="bg-amber-100 text-black py-1 px-3 rounded-full">
              {books.length} Books
            </span>
          </div>

          <div className="space-y-4">
            {books.map((book, index) => (
              <div
                key={index}
                className="flex items-center p-4 border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center mr-4">
                  <p className="text-black font-semibold">{index + 1}</p>
                </div>
                <div className="flex-grow">
                  <Link href={`/books/${index + 1}`} className="block">
                    <h3 className="text-lg font-semibold text-black hover:text-amber-700">
                      {book.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600">
                    {book.chapters.length} Chapters
                  </p>
                </div>
                <div className="text-sm text-gray-500">{book.abbrev}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
