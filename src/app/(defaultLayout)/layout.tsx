import Navbar from "@/components/common/navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar />
      <main>{children}</main>
    </>
  );
};

export default CommonLayout;
