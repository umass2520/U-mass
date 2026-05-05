import PDFViewer from "@/components/PDFViewer";


export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* You can now use this anywhere! */}
      <PDFViewer 
        file="/umass_pdf.pdf" 
        maxWidth={900} 
      />
    </main>
  );
}