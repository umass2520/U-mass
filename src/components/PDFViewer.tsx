"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// CSS imports are required for the text and annotation layers to align correctly
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
  maxWidth?: number;
}

export default function PDFViewer({ file, maxWidth = 1000 }: PDFViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [numPages, setNumPages] = useState<number>(0);

  // Observer to handle container resizing automatically
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center bg-gray-50 py-4">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<div className="p-10 text-gray-500">Loading PDF...</div>}
        error={<div className="p-10 text-red-500">Failed to load PDF.</div>}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <div key={`page_container_${index + 1}`} className="mb-6 shadow-xl">
            <Page
              pageNumber={index + 1}
              // Calculate width: screen width minus some padding, capped at maxWidth
              width={containerWidth ? Math.min(containerWidth - 40, maxWidth) : 300}
              renderAnnotationLayer={true}
              renderTextLayer={true}
            />
          </div>
        ))}
      </Document>
    </div>
  );
}