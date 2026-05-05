import ClientPDFViewer from "@/components/ClientPDFViewer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* You can now use this anywhere! */}
      <ClientPDFViewer 
        file="/U-MASS/umass_pdf.pdf" 
        maxWidth={1000} 
      />
    </main>
  );
}