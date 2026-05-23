import { ImageResponse } from "next/og";

export const alt = "Profithub – Freelance contracts, invoices, and business calculators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #2563eb 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.15)",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            PH
          </div>
          <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em" }}>Profithub</span>
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 900, letterSpacing: "-0.03em" }}>
          Contracts, invoices, proposals &amp; profit calculators
        </div>
        <div style={{ marginTop: 28, fontSize: 28, lineHeight: 1.4, color: "rgba(255,255,255,0.88)", maxWidth: 820 }}>
          Free tools for freelancers, agencies, and online businesses
        </div>
      </div>
    ),
    { ...size },
  );
}
