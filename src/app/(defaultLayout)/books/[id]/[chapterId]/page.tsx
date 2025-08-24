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

const ChapterPage = () => {
  const params = useParams();
  const bookId = parseInt(params.id as string) - 1; // Convert to 0-based index
  const chapterId = parseInt(params.chapterId as string) - 1; // Convert to 0-based index

  const [book, setBook] = useState<Book | null>(null);
  const [chapter, setChapter] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bookId >= 0 && bookId < (bookData as Book[]).length) {
        const selectedBook = (bookData as Book[])[bookId];
        setBook(selectedBook);

        if (chapterId >= 0 && chapterId < selectedBook.chapters.length) {
          setChapter(selectedBook.chapters[chapterId]);
        }
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [bookId, chapterId]);

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

  if (!book || !chapter) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-black text-xl">Chapter not found</div>
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
        <div className="mb-6">
          <Link
            href={`/books/${bookId + 1}`}
            className="text-amber-600 hover:text-amber-800"
          >
            ← Back to {book.name}
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-black">
              {book.name} - Chapter {chapterId + 1}
            </h1>
            <span className="bg-amber-100 text-black py-1 px-3 rounded-full">
              {chapter.length} Verses
            </span>
          </div>

          <div className="space-y-3">
            {chapter.map((verse, verseIndex) => (
              <div key={verseIndex} className="flex">
                <span className="text-sm font-medium text-amber-600 min-w-[2rem]">
                  {verseIndex + 1}.
                </span>
                <p className="text-gray-700">{verse}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-amber-200 flex justify-between">
            {chapterId > 0 ? (
              <Link
                href={`/books/${bookId + 1}/${chapterId}`}
                className="text-amber-600 hover:text-amber-800 font-medium"
              >
                ← Previous Chapter
              </Link>
            ) : (
              <div></div>
            )}

            {chapterId < book.chapters.length - 1 ? (
              <Link
                href={`/books/${bookId + 1}/${chapterId + 2}`}
                className="text-amber-600 hover:text-amber-800 font-medium"
              >
                Next Chapter →
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
