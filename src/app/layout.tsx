import Link from "next/link";
import "@/app/globals.css"; // Make sure Tailwind is imported here

function Footer({}) {
  return (
    <footer>
      <p>
        © Copyright {new Date().getFullYear()}{" "}
        {/* ลิงก์ภายในเว็บตัวเอง */}
        <Link href="/about" className="hover:underline">
          U-MASS
        </Link>
        . All Rights Reserved.
      </p>
      <p>
        <small className="text-sm font-medium text-slate-600 md:flex">
          Developed By <Link href="https://ourgamedeveloper.github.io/ourgamedev/" target="_blank" className="hover:underline">
            OurGameStudio
          </Link>. 
          Powered by{" "}
          {/* ลิงก์ออกไปภายนอก */}
          <Link href="https://github.com" target="_blank" className="hover:underline">
            GitHub
          </Link>
          {" "}&{" "}
          <Link href="https://nextjs.org" target="_blank" className="hover:underline">
            Next.js
          </Link>
        </small>
      </p>
    </footer>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 antialiased">
        <div className="fixed top-6 left-1/2 z-50 w-[95%] max-w-4xl -translate-x-1/2">
          <nav className="opacity-75 flex items-center justify-between rounded-full border border-white/20 bg-white/90 px-6 py-2.5 shadow-lg backdrop-blur-md transition-all hover:shadow-xl">
            <img src="/U-mass/logo_png.png" alt="Logo" className=" h-7"/>
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
        <Footer/>
      </body>
    </html>
  );
}
