"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import logo from "@/images/onlylogo.png";

export default function CTAWithLogoColor() {
  const [bgColor, setBgColor] = useState<string | null>(null);
  const [textColor, setTextColor] = useState<string>("#ffffff");
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // create an Image to draw on canvas and sample pixels
    const img = new Image();
    img.src = logo.src || logo;
    img.crossOrigin = "anonymous";

    const handleLoad = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // downscale for faster sampling
        const w = 60;
        const h = 60;
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);
        const data = ctx.getImageData(0, 0, w, h).data;

        let r = 0,
          g = 0,
          b = 0,
          count = 0;

        // sample every 4th pixel to speed up
        for (let i = 0; i < data.length; i += 16) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }

        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);

        const rgb = `rgb(${r}, ${g}, ${b})`;
        setBgColor(rgb);

        // compute luminance to choose text color
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        setTextColor(luminance > 0.6 ? "#0f172a" : "#ffffff");
      } catch (e) {
        // fallback if cross-origin or other error
        setBgColor(null);
        setTextColor("#ffffff");
      }
    };

    img.addEventListener("load", handleLoad);
    imgRef.current = img;

    return () => {
      img.removeEventListener("load", handleLoad);
    };
  }, []);

  const sectionStyle: React.CSSProperties = {
    background: bgColor || "#0f172a",
    color: textColor,
  };

  const buttonStyle: React.CSSProperties = {
    background: textColor === "#ffffff" ? "#f59e0b" : "#ffffff",
    color: textColor === "#ffffff" ? "#0f172a" : "#0f172a",
  };

  return (
    <section className="rounded-3xl p-12 text-center" style={sectionStyle}>
      <h2 className="text-3xl font-bold">
        Let’s Build Something <span className="text-yellow-400">Great</span>
      </h2>

      <p className="mt-4 max-w-2xl mx-auto" style={{ color: textColor === "#ffffff" ? "#e5e7eb" : "#0f172a" }}>
        Whether you’re a startup, business, or institution — TantraDOT is ready to transform your ideas into powerful digital solutions.
      </p>

      <Link href="/contact" className="inline-block mt-8 px-8 py-3 rounded-md font-semibold shadow-md" style={buttonStyle}>
        Contact Us
      </Link>
    </section>
  );
}
