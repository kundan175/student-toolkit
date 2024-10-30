"use client";

import { useState, useRef, ChangeEvent } from "react";

interface ImageDimensions {
  width: number;
  height: number;
}

export default function ImageResizerTool() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [dimensions, setDimensions] = useState<ImageDimensions>({
    width: 800,
    height: 600,
  });
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [originalDimensions, setOriginalDimensions] =
    useState<ImageDimensions | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const presets = [
    { name: "Instagram Post", width: 1080, height: 1080 },
    { name: "Twitter Post", width: 1200, height: 675 },
    { name: "Facebook Cover", width: 851, height: 315 },
    { name: "LinkedIn Cover", width: 1584, height: 396 },
  ];

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new window.Image();
        img.onload = () => {
          setOriginalDimensions({
            width: img.width,
            height: img.height,
          });
          setDimensions({
            width: img.width,
            height: img.height,
          });
        };
        img.src = reader.result as string;
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDimensionChange = (
    dimension: "width" | "height",
    value: number
  ) => {
    if (!originalDimensions) return;

    if (maintainAspectRatio) {
      const aspectRatio = originalDimensions.width / originalDimensions.height;
      if (dimension === "width") {
        setDimensions({
          width: value,
          height: Math.round(value / aspectRatio),
        });
      } else {
        setDimensions({
          width: Math.round(value * aspectRatio),
          height: value,
        });
      }
    } else {
      setDimensions((prev) => ({
        ...prev,
        [dimension]: value,
      }));
    }
  };

  const handlePresetSelect = (preset: { width: number; height: number }) => {
    setDimensions(preset);
  };

  const handleDownload = async () => {
    if (!selectedFile || !preview) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new window.Image();

    img.onload = () => {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      ctx?.drawImage(img, 0, 0, dimensions.width, dimensions.height);

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `resized-${selectedFile.name}`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
      }, selectedFile.type);
    };

    img.src = preview;
  };

  return (
    <div className="card space-y-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="relative">
        {/* File Upload */}
        <div className="space-y-4">
          <label className="block text-lg font-medium text-accent">
            Upload Image
          </label>
          <div
            className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-xl border-accent/30 hover:border-accent/50 transition-colors bg-white/5"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              if (file && file.type.startsWith("image/")) {
                if (fileInputRef.current) {
                  const dataTransfer = new DataTransfer();
                  dataTransfer.items.add(file);
                  fileInputRef.current.files = dataTransfer.files;
                  const event = new Event("change", { bubbles: true });
                  fileInputRef.current.dispatchEvent(event);
                }
              }
            }}
          >
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-accent/60"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-white/80">
                <label className="relative cursor-pointer rounded-md font-medium text-accent hover:text-accent-light">
                  <span>Upload a file</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleFileSelect}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-white/60">PNG, JPG, WebP up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Preview */}
        {preview && (
          <div className="space-y-4 mt-8">
            <label className="block text-lg font-medium text-accent">
              Preview
            </label>
            <div className="relative h-64 bg-black/20 rounded-xl overflow-hidden border border-accent/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview}
                alt="Preview"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Dimensions */}
        {selectedFile && (
          <>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <label className="block text-sm font-medium text-accent mb-1">
                  Width (px)
                </label>
                <input
                  type="number"
                  value={dimensions.width}
                  onChange={(e) =>
                    handleDimensionChange("width", parseInt(e.target.value))
                  }
                  className="input-field w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-accent mb-1">
                  Height (px)
                </label>
                <input
                  type="number"
                  value={dimensions.height}
                  onChange={(e) =>
                    handleDimensionChange("height", parseInt(e.target.value))
                  }
                  className="input-field w-full"
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <input
                id="maintain-aspect-ratio"
                type="checkbox"
                checked={maintainAspectRatio}
                onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                className="checkbox"
              />
              <label
                htmlFor="maintain-aspect-ratio"
                className="ml-2 block text-sm text-white"
              >
                Maintain aspect ratio
              </label>
            </div>

            {/* Presets */}
            <div className="space-y-4 mt-8">
              <label className="block text-lg font-medium text-accent">
                Common Sizes
              </label>
              <div className="grid grid-cols-2 gap-3">
                {presets.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => handlePresetSelect(preset)}
                    className="btn-secondary text-sm hover:border-accent/30"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="btn-primary w-full mt-8 glow"
            >
              Download Resized Image
            </button>
          </>
        )}
      </div>
    </div>
  );
}
