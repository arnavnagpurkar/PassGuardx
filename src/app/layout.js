import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PassGuard",
  description: "PassGuard ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-zinc-950 dark:text-white">
        <Navbar />
        {children}
        <script className="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload"></script>
      </body>
    </html>
  );
}
