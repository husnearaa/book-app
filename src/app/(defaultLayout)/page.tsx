// import BookChapters from "@/components/Book/BookChapters";
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";



const HomePage = () => {

const router = useRouter();
const pathname = usePathname();

useEffect(() => {
  if (pathname === "/") {
    router.push("/books");
  }
}, [pathname, router]);


  // return (
  //   <div>
  //     <h1>Home</h1>
  //   </div>
  // );
};

export default HomePage;
