export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <ul className="flex gap-5">
         <li>Shoes</li>
         <li>fashion</li>
         <li>tech</li>
        </ul>
        {children}   
    </>
  );
}
