import { QRCodeSVG } from "qrcode.react";
import { Printer, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const siteUrl = window.location.origin;

export default function QRCodePage() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-[#fdf8f3] flex flex-col items-center justify-center p-8 print:p-0 print:bg-white">
      {/* Print-only: full-page centered layout */}
      <div className="w-full max-w-sm mx-auto">
        {/* Card */}
        <div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e8ddd0] print:shadow-none print:border-none"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {/* Header band */}
          <div className="bg-[#2c6e6a] px-8 py-6 text-center">
            <p className="text-[#a8d5d2] text-xs font-semibold uppercase tracking-[0.2em] mb-1">
              DiscoveryGate Publishing
            </p>
            <h1
              className="text-white text-2xl font-bold leading-tight"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              We Read Too
            </h1>
            <p className="text-[#a8d5d2] text-sm mt-1">
              by Dr. Amy Salter
            </p>
          </div>

          {/* QR Code area */}
          <div className="px-10 py-8 flex flex-col items-center gap-5">
            <div className="bg-white rounded-2xl p-4 shadow-md border border-[#f0e8e0]">
              <QRCodeSVG
                value={siteUrl}
                size={200}
                bgColor="#ffffff"
                fgColor="#1a3a38"
                level="H"
                includeMargin={false}
              />
            </div>

            <div className="text-center space-y-1">
              <p
                className="text-[#2c6e6a] text-base font-semibold"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Scan to visit our bookstore
              </p>
              <p
                className="text-[#9a8070] text-xs break-all"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {siteUrl}
              </p>
            </div>

            {/* Decorative divider */}
            <div className="w-full border-t border-dashed border-[#e8ddd0]" />

            <p
              className="text-center text-[#7a6a5a] text-xs leading-relaxed"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Celebrate diversity · Inspire young readers<br />
              Beautiful books for every child
            </p>
          </div>

          {/* Footer band */}
          <div className="bg-[#fdf0e6] px-8 py-4 text-center">
            <p
              className="text-[#c1714a] text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              discoverygate.com
            </p>
          </div>
        </div>

        {/* Action buttons — hidden on print */}
        <div className="mt-8 flex gap-3 justify-center print:hidden">
          <Button
            onClick={handlePrint}
            className="bg-[#2c6e6a] hover:bg-[#1e4f4c] text-white rounded-xl px-6"
          >
            <Printer className="w-4 h-4 mr-2" />
            Print / Save as PDF
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open(siteUrl, "_blank")}
            className="border-[#2c6e6a] text-[#2c6e6a] hover:bg-[#f0faf9] rounded-xl px-6"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Open Site
          </Button>
        </div>

        <p className="mt-4 text-center text-[#bbb] text-xs print:hidden">
          Navigate to <span className="font-mono">/qr</span> anytime to access this page
        </p>
      </div>

      <style>{`
        @media print {
          @page { margin: 0; size: auto; }
          body { background: white; }
        }
      `}</style>
    </div>
  );
}
