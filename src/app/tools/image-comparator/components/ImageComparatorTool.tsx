"use client";

import { useState, useRef, ChangeEvent } from "react";

interface ImageState {
  file: File | null;
  preview: string;
}

export default function ImageComparatorTool() {
  const [beforeImage, setBeforeImage] = useState<ImageState>({
    file: null,
    preview: "",
  });
  const [afterImage, setAfterImage] = useState<ImageState>({
    file: null,
    preview: "",
  });
  const [sliderPosition, setSliderPosition] = useState(50);
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
    "horizontal"
  );
  const beforeInputRef = useRef<HTMLInputElement>(null);
  const afterInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (
    type: "before" | "after",
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "before") {
          setBeforeImage({ file, preview: reader.result as string });
        } else {
          setAfterImage({ file, preview: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const handleDrop = (type: "before" | "after", e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const inputRef = type === "before" ? beforeInputRef : afterInputRef;
      if (inputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        inputRef.current.files = dataTransfer.files;
        const event = new Event("change", { bubbles: true });
        inputRef.current.dispatchEvent(event);
      }
    }
  };

  return (
    <div className="card space-y-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="relative">
        {/* Image Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before Image Upload */}
          <div className="space-y-4">
            <label className="block text-lg font-medium text-accent">
              Before Image
            </label>
            <div
              className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-xl border-accent/30 hover:border-accent/50 transition-colors bg-white/5"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop("before", e)}
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
                    <span>Upload before image</span>
                    <input
                      ref={beforeInputRef}
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={(e) => handleImageSelect("before", e)}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* After Image Upload */}
          <div className="space-y-4">
            <label className="block text-lg font-medium text-accent">
              After Image
            </label>
            <div
              className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-xl border-accent/30 hover:border-accent/50 transition-colors bg-white/5"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop("after", e)}
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
                    <span>Upload after image</span>
                    <input
                      ref={afterInputRef}
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={(e) => handleImageSelect("after", e)}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison View */}
        {beforeImage.preview && afterImage.preview && (
          <div className="space-y-6 mt-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-accent">
                Image Comparison
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setOrientation("horizontal")}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    orientation === "horizontal"
                      ? "bg-accent text-primary"
                      : "glass-effect text-white/80 hover:text-accent"
                  }`}
                >
                  Horizontal
                </button>
                <button
                  onClick={() => setOrientation("vertical")}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    orientation === "vertical"
                      ? "bg-accent text-primary"
                      : "glass-effect text-white/80 hover:text-accent"
                  }`}
                >
                  Vertical
                </button>
              </div>
            </div>

            <div className="relative w-full h-[500px] bg-black/20 rounded-xl overflow-hidden border border-accent/20">
              <div className="absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={afterImage.preview}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div
                className="absolute inset-0"
                style={{
                  clipPath:
                    orientation === "horizontal"
                      ? `inset(0 ${100 - sliderPosition}% 0 0)`
                      : `inset(0 0 ${100 - sliderPosition}% 0)`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={beforeImage.preview}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              {/* Custom Slider */}
              <div
                className={`absolute ${
                  orientation === "horizontal"
                    ? "bottom-4 left-0 right-0 px-4"
                    : "left-1/2 top-0 bottom-0 -translate-x-1/2"
                }`}
              >
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className={`
                    w-full appearance-none bg-transparent cursor-pointer
                    ${
                      orientation === "vertical"
                        ? "rotate-90 origin-center translate-y-[250px]"
                        : ""
                    }
                    [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:bg-accent/30 [&::-webkit-slider-runnable-track]:rounded-full
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:-mt-2 [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-black/20
                    hover:[&::-webkit-slider-thumb]:bg-accent-light
                  `}
                />
              </div>

              {/* Slider Line */}
              <div
                className={`absolute ${
                  orientation === "horizontal"
                    ? "h-full w-1 bg-accent/30"
                    : "w-full h-1 bg-accent/30"
                } transition-all duration-100`}
                style={{
                  left: orientation === "horizontal" ? `${sliderPosition}%` : 0,
                  top: orientation === "vertical" ? `${sliderPosition}%` : 0,
                }}
              >
                <div
                  className={`absolute ${
                    orientation === "horizontal"
                      ? "-translate-x-1/2 top-1/2 -translate-y-1/2"
                      : "left-1/2 -translate-x-1/2 -translate-y-1/2"
                  } w-8 h-8 bg-accent rounded-full shadow-lg shadow-black/20 flex items-center justify-center`}
                >
                  <div className="w-6 h-6 rounded-full bg-accent-light"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
