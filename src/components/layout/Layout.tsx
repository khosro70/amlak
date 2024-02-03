import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="min-h-[600px] container mx-auto xl:max-w-[1200px] px-3">
        {children}
      </div>
      <Footer />
    </div>
  );
}
