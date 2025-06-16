import Footer from "../../components/Footer";

export default function HomeLayout({ children }) {
  return (
    <>
      <main className="flex h-auto min-h-screen flex-col">{children}</main>
      <Footer />
    </>
  );
}
