"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Next.js requires us to set up the PDF.js worker so it doesn't block the main thread.
// Using the CDN is the easiest way to avoid Webpack configuration headaches in Next.js.
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Required CSS files for react-pdf to render text and annotations correctly
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function CustomPdfViewer({ fileUrl }: { fileUrl: string }) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  // Callback when the PDF loads successfully
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1); // Reset to page 1 on new load
  }

  return (
    <div className="flex flex-col items-center rounded-xl bg-slate-100 p-6 shadow-lg">
      
      {/* The PDF Document */}
      <div className="overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex h-[600px] w-[400px] items-center justify-center text-slate-500">
              Loading PDF...
            </div>
          }
        >
          {/* We render a single page at a time. The width prop ensures it stays responsive */}
          <Page 
            pageNumber={pageNumber} 
            width={Math.min(window.innerWidth * 0.9, 800)} // Responsive max-width
            renderTextLayer={true} 
            renderAnnotationLayer={true}
          />
        </Document>
      </div>

      {/* Custom UI Controls (Your fully custom "toolbar") */}
      {numPages && (
        <div className="mt-6 flex items-center gap-4 rounded-full bg-slate-900 px-6 py-3 text-white shadow-md">
          
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((prev) => prev - 1)}
            className="rounded-full px-4 py-1 text-sm font-semibold transition-colors hover:bg-slate-700 disabled:opacity-50"
          >
            Previous
          </button>
          
          <p className="text-sm font-medium">
            Page {pageNumber} of {numPages}
          </p>
          
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber((prev) => prev + 1)}
            className="rounded-full px-4 py-1 text-sm font-semibold transition-colors hover:bg-slate-700 disabled:opacity-50"
          >
            Next
          </button>

        </div>
      )}
      
    </div>
  );
}