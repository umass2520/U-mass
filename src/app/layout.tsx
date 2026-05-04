import Link from "next/link";
import "./globals.css"; // Make sure Tailwind is imported here

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 antialiased">
        <div className="fixed top-6 left-1/2 z-50 w-[95%] max-w-4xl -translate-x-1/2">
          <nav className="flex items-center justify-between rounded-full border border-white/20 bg-white/90 px-6 py-2.5 shadow-lg backdrop-blur-md transition-all hover:shadow-xl">
            <h1 className="text-xl font-bold tracking-tighter text-red-800">
              Umass
            </h1>
            <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
              <li className="inline-block scale-125">
                Company Profile
              </li>
            </ul>
            <Link 
              href="https://www.u-mass.com/" 
              className="rounded-full bg-red-700 px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              Back
            </Link>
          </nav>
        </div>
        <main> 
          {children}
        </main>
      </body>
    </html>
  );
}