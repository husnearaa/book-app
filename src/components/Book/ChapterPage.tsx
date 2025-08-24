"use client";

import { useState, useEffect } from "react";
import bookData from "@/json/bok1.json";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Book {
  abbrev: string;
  name: string;
  chapters: string[][];
}

interface Chapter {
  id: number;
  title: string;
  verses: string[];
}

const BookChaptersPage = () => {
  const params = useParams();
  const bookId = parseInt(params.id as string) - 1; // Convert to 0-based index

  const [book, setBook] = useState<Book | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bookId >= 0 && bookId < (bookData as Book[]).length) {
        const selectedBook = (bookData as Book[])[bookId];
        setBook(selectedBook);

        // Transform the chapters data
        const transformedChapters = selectedBook.chapters.map(
          (chapterVerses, index) => ({
            id: index + 1,
            title: `Chapter ${index + 1}`,
            verses: chapterVerses,
          })
        );

        setChapters(transformedChapters);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [bookId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-8 h-8 rounded-full animate-pulse bg-[#1b1b1b]"></div>
          <div className="w-8 h-8 rounded-full animate-pulse bg-[#1b1b1b]"></div>
          <div className="w-8 h-8 rounded-full animate-pulse bg-[#1b1b1b]"></div>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-black text-xl">Book not found</div>
        <Link
          href="/books"
          className="text-amber-600 hover:text-amber-800 ml-4"
        >
          ← Back to Books
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="container mx-auto">
        <Link
          href="/books"
          className="text-amber-600 hover:text-amber-800 mb-4 inline-block"
        >
          ← Back to Books
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-black">
              {book.name} - Chapters
            </h1>
            <span className="bg-amber-100 text-black py-1 px-3 rounded-full">
              {chapters.length} Chapters
            </span>
          </div>

          <div className="space-y-4">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="flex items-center p-4 border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <p className="text-black font-semibold">{chapter.id}</p>
                </div>
                <div className="flex-grow">
                  <Link
                    href={`/books/${bookId + 1}/${chapter.id}`}
                    className="block"
                  >
                    <h3 className="text-lg font-semibold text-black hover:text-amber-700">
                      {chapter.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {chapter.verses[0]} {/* Show first verse as preview */}
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  {chapter.verses.length} verses
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookChaptersPage;
