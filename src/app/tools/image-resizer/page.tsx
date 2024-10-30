import { Metadata } from "next";
import Link from "next/link";
import ImageResizerTool from "./components/ImageResizerTool";

export const metadata: Metadata = {
  title: "Image Resizer - Student Tools",
  description:
    "Free online tool to resize your images while maintaining quality. No sign-up required.",
  openGraph: {
    title: "Image Resizer - Student Tools",
    description:
      "Free online tool to resize your images while maintaining quality. No sign-up required.",
    type: "website",
  },
};

export default function ImageResizer() {
  return (
    <div className="min-h-screen gradient-bg">
      <header className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-4">
            <Link
              href="/"
              className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 group"
            >
              <span className="text-xl transform group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              <span>Back to Tools</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
            Image Resizer
          </h1>
          <p className="text-xl text-white/80">
            Resize your images while maintaining quality. Free and easy to use.
          </p>
        </div>

        <ImageResizerTool />

        <section className="mt-16 card relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-4 text-accent">How to Use</h2>
            <ol className="list-decimal list-inside space-y-3 text-white/80">
              <li className="hover:text-white hover:pl-2 transition-all">
                Click the upload button or drag and drop your image
              </li>
              <li className="hover:text-white hover:pl-2 transition-all">
                Enter your desired dimensions or use the preset options
              </li>
              <li className="hover:text-white hover:pl-2 transition-all">
                Choose to maintain aspect ratio if needed
              </li>
              <li className="hover:text-white hover:pl-2 transition-all">
                Click resize and download your image
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-8 card relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-4 text-accent">Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="text-accent">✓</span>
                Maintain aspect ratio
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="text-accent">✓</span>
                Common size presets
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="text-accent">✓</span>
                Preview before download
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="text-accent">✓</span>
                High-quality resizing
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="text-accent">✓</span>
                Support for JPG, PNG, WebP
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="text-accent">✓</span>
                Instant processing
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="glass-effect mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} Student Tools. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
