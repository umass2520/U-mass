import CustomPdfViewer from "../../components/CustomPdfViewer";
export default function Home() {
  return (
    <main className="min-h-screen pt-32 px-4">
      <CustomPdfViewer fileUrl="/umass_pdf.pdf"/>
    </main>
  );
}
