export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex md:flex lg:flex">
    {children}
    </div>
  );
}
