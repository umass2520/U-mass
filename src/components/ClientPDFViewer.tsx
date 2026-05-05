"use client";

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import("./PDFViewer"), {
  ssr: false,
  loading: () => <div className="p-10 text-center text-gray-500">Loading Company Profile...</div>
});

export default PDFViewer;
