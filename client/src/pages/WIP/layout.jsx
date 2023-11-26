export default function WIPLayout({ children }) {
  return (
    <main className="fixed flex h-screen w-screen flex-col items-center justify-center space-y-4 bg-base-100 p-24">
      {children}
    </main>
  );
}
