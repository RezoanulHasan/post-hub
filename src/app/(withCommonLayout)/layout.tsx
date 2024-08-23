import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PostHub",
  description: "Generated by create next app",
};

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-hidden">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
