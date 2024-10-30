import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Tools - Free Online Utilities",
  description:
    "Free online tools for students including image resizing, PDF editing, bio maker, and more",
  openGraph: {
    title: "Student Tools - Free Online Utilities",
    description:
      "Free online tools for students including image resizing, PDF editing, bio maker, and more",
    type: "website",
  },
};

const tools = [
  {
    title: "Image Resizer",
    description: "Resize your images while maintaining quality",
    icon: "🖼️",
    href: "/tools/image-resizer",
  },
  {
    title: "Image Comparator",
    description: "Compare two images side by side",
    icon: "🔍",
    href: "/tools/image-comparator",
  },
  {
    title: "Bio Maker",
    description: "Create professional social media bios",
    icon: "📝",
    href: "/tools/bio-maker",
  },
  {
    title: "Resume Builder",
    description: "Build professional resumes with ease",
    icon: "📄",
    href: "/tools/resume-builder",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl glass-effect flex items-center justify-center border border-accent/20">
                <span className="text-xl">🛠️</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                Student Tools
              </h1>
            </div>
            <nav className="hidden sm:flex gap-8">
              <a href="#tools" className="nav-link">
                Tools
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
          <div className="max-w-4xl mx-auto relative">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
              Your All-in-One Student Toolkit
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Access powerful tools designed to help you create, edit, and
              manage your academic content with ease.
            </p>
            <a href="#tools" className="btn-primary inline-block glow">
              Explore Tools
            </a>
          </div>
        </section>

        {/* Tools Grid */}
        <section id="tools" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center">Our Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="tool-card group"
                >
                  <div className="flex flex-col items-center text-center">
                    <span
                      className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-200"
                      role="img"
                      aria-label={tool.title}
                    >
                      {tool.icon}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-white/70 group-hover:text-white/90">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
          <div className="max-w-7xl mx-auto relative">
            <h2 className="section-title text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="feature-card relative">
                <span className="text-4xl mb-6 block">⚡️</span>
                <h3 className="text-xl font-semibold mb-3 text-accent">
                  Fast & Easy
                </h3>
                <p className="text-white/70">
                  No sign-up required. Just select a tool and start using it
                  instantly.
                </p>
              </div>
              <div className="feature-card relative">
                <span className="text-4xl mb-6 block">🔒</span>
                <h3 className="text-xl font-semibold mb-3 text-accent">
                  Secure
                </h3>
                <p className="text-white/70">
                  Your data stays on your device. We prioritize your privacy and
                  security.
                </p>
              </div>
              <div className="feature-card relative">
                <span className="text-4xl mb-6 block">💯</span>
                <h3 className="text-xl font-semibold mb-3 text-accent">
                  Free Forever
                </h3>
                <p className="text-white/70">
                  All tools are completely free to use. No hidden fees or
                  subscriptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">About Student Tools</h2>
            <p className="text-lg text-white/80">
              We&apos;re dedicated to providing students with the tools they
              need to succeed. Our platform offers a suite of free, easy-to-use
              utilities designed to help you create professional content and
              manage your academic work efficiently.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="glass-effect mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Contact
              </h3>
              <p className="text-white/70">
                Have questions or suggestions? Reach out to us!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#tools" className="nav-link">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="nav-link">
                  Twitter
                </a>
                <a href="#" className="nav-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
            <p>
              &copy; {new Date().getFullYear()} Student Tools. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
