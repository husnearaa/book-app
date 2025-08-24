import BookChapters from "@/components/Book/BookChapters";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import React from "react";

const page = () => {
  return (
    <div className="mt-12">
      <BookChapters />
      {/* to scroll down to up */}
      <div className="hidden lg:block md:block">
        <ScrollToTop />
      </div>
    </div>
  );
};

export default page;
