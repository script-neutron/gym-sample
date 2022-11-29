import "./globals.css";
import Header from "./header/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-gradient-to-r from-[#232526] to-[#414345] snap-y snap-mandatory ">
        <Header />
        {children}
      </body>
    </html>
  );
}
