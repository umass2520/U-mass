export default function Page() {
  return (
    <div className="fixed inset-0 h-screen w-screen bg-slate-100">
      <iframe
        src="/umass_pdf.pdf#toolbar=0&navpanes=0&scrollbar=0"
        className="h-full w-full border-none"
        title=""
      />
    </div>
  );
}