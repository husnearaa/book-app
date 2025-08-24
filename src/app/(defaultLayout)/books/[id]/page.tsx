import ChapterPage from "@/components/Book/ChapterPage";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import React from "react";

const page = () => {
  return (
    <div>
      <ChapterPage />
      {/* to scroll down to up */}
      <div className="hidden lg:block md:block">
        <ScrollToTop />
      </div>
    </div>
  );
};

export default page;
