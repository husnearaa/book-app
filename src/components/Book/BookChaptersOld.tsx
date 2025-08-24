"use client";

import { useState, useEffect, useRef } from "react";
import bookData from "@/json/bok1.json";

// Define the Chapter type
interface Chapter {
  id: number;
  title: string;
  verses: string[]; // Changed from content to verses array
}

interface Book {
  abbrev: string;
  name: string;
  chapters: string[][];
}

const BookChaptersOld = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const chaptersSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading for a better UX (optional)
    const timer = setTimeout(() => {
      setBooks(bookData as Book[]);
      
      // Get the selected book
      const selectedBook = (bookData as Book[])[selectedBookIndex];
      
      // Transform the chapters data to match our Chapter interface
      const transformedChapters = selectedBook.chapters.map((chapterVerses, index) => ({
        id: index + 1,
        title: `Chapter ${index + 1}`,
        verses: chapterVerses, // Store verses as array
      }));
      
      setChapters(transformedChapters);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedBookIndex]);

  const handleBookClick = (index: number) => {
    setSelectedBookIndex(index);
    
    // Scroll to the chapters section after a short delay to allow state update
    setTimeout(() => {
      if (chaptersSectionRef.current) {
        chaptersSectionRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-black text-xl">Loading chapters...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 underline">Books</h1>
        <p className="text-lg mb-6">All books and their chapters</p>

        {/* Books List */}
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
                className={`flex items-center p-4 border border-amber-200 rounded-lg transition-colors duration-200 cursor-pointer ${
                  index === selectedBookIndex 
                    ? "bg-amber-100 border-amber-400" 
                    : "hover:bg-amber-50"
                }`}
                onClick={() => handleBookClick(index)}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center mr-4">
                  <p className="text-black font-semibold">{index + 1}</p>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-black">{book.name}</h3>
                  <p className="text-gray-600">{book.chapters.length} Chapters</p>
                </div>
                <div className="text-sm text-gray-500">{book.abbrev}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Chapters of Selected Book */}
        <div ref={chaptersSectionRef} className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-black">
              {books[selectedBookIndex]?.name} - Table of Contents
            </h2>
            <span className="bg-amber-100 text-black py-1 px-3 rounded-full">
              {chapters.length} Chapters
            </span>
          </div>

          <div className="space-y-6">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="p-4 border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <p className="text-black font-semibold">{chapter.id}</p>
                  </div>
                  <h3 className="text-lg font-semibold text-black">{chapter.title}</h3>
                </div>
                
                <div className="ml-14 space-y-2">
                  {chapter.verses.map((verse, verseIndex) => (
                    <div key={verseIndex} className="flex">
                      <span className="text-sm font-medium text-amber-600 min-w-[2rem]">
                        {verseIndex + 1}.
                      </span>
                      <p className="text-gray-700">{verse}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookChaptersOld;