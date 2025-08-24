import Footer from "@/components/common/Footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
