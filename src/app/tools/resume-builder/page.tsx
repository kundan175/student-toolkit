import { Metadata } from "next";
import ResumeBuilderTool from "./components/ResumeBuilderTool";

export const metadata: Metadata = {
  title: "Resume Builder - Student Tools",
  description:
    "Create professional resumes with our easy-to-use builder. Perfect for students and job seekers.",
  openGraph: {
    title: "Resume Builder - Student Tools",
    description:
      "Create professional resumes with our easy-to-use builder. Perfect for students and job seekers.",
    type: "website",
  },
};

export default function ResumeBuilder() {
  return (
    <div className="min-h-screen gradient-bg">
      <header className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-4">
            <a
              href="/"
              className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 group"
            >
              <span className="text-xl transform group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              <span>Back to Tools</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
            Resume Builder
          </h1>
          <p className="text-xl text-white/80">
            Create a professional resume in minutes with our easy-to-use
            builder.
          </p>
        </div>

        <ResumeBuilderTool />

        <section className="mt-16 card relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-4 text-accent">How to Use</h2>
            <ol className="list-decimal list-inside space-y-3 text-white/80">
              <li className="hover:text-white hover:pl-2 transition-all">
                Fill in your personal information
              </li>
              <li className="hover:text-white hover:pl-2 transition-all">
                Add your work experience, education, and skills
              </li>
              <li className="hover:text-white hover:pl-2 transition-all">
                Choose a template style
              </li>
              <li className="hover:text-white hover:pl-2 transition-all">
                Preview and download your resume
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
                Multiple professional templates
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="text-accent">✓</span>
                Customizable sections
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="text-accent">✓</span>
                Real-time preview
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="text-accent">✓</span>
                ATS-friendly formats
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="text-accent">✓</span>
                PDF export
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <span className="text-accent">✓</span>
                Save and edit later
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
