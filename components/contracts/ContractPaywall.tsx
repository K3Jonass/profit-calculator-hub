"use client";

type ContractPaywallProps = {
  hasContract: boolean;
  contractText: string;
  isUnlocked: boolean;
  onUnlock: () => void;
};

function buildFileName() {
  const date = new Date().toISOString().slice(0, 10);
  return `revenue-share-contract-${date}`;
}

function downloadTextFile(contractText: string) {
  const blob = new Blob([contractText], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${buildFileName()}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

async function downloadPdfFile(contractText: string) {
  const { jsPDF } = await import("jspdf");

  const doc = new jsPDF({
    unit: "pt",
    format: "a4",
  });

  const marginLeft = 40;
  const marginTop = 50;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const maxTextWidth = pageWidth - marginLeft * 2;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Revenue Share Contract", marginLeft, marginTop);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  const lines = doc.splitTextToSize(contractText, maxTextWidth);

  let y = marginTop + 30;
  const lineHeight = 16;

  for (const line of lines) {
    if (y > pageHeight - 50) {
      doc.addPage();
      y = 50;
    }

    doc.text(line, marginLeft, y);
    y += lineHeight;
  }

  doc.save(`${buildFileName()}.pdf`);
}

export default function ContractPaywall({
  hasContract,
  contractText,
  isUnlocked,
  onUnlock,
}: ContractPaywallProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Download Access
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Preview first, then unlock the document download.
        </p>
      </div>

      <div className="p-6">
        {!hasContract ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center">
            <p className="text-sm text-slate-600">
              Generate a contract first to continue.
            </p>
          </div>
        ) : isUnlocked ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Access Unlocked
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  Your contract is ready
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  You can now download your contract as a TXT file or a PDF
                  document.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => downloadTextFile(contractText)}
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Download TXT
                </button>

                <button
                  type="button"
                  onClick={() => downloadPdfFile(contractText)}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
                  Locked
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  Unlock this contract for $1
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  This is the MVP lock state. Real payment will be connected
                  next. For now, use the button below to simulate access.
                </p>
              </div>

              <button
                type="button"
                onClick={onUnlock}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Simulate Unlock
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}