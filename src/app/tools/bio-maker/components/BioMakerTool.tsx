"use client";

import { useState, useEffect } from "react";

interface BioTemplate {
  id: string;
  name: string;
  template: string;
}

interface FormData {
  name: string;
  role: string;
  interests: string;
  achievements: string;
  location: string;
  contact: string;
}

const bioTemplates: BioTemplate[] = [
  {
    id: "professional",
    name: "Professional",
    template:
      "{{name}} | {{role}} 💼\n{{achievements}}\n📍 {{location}}\n{{contact}}",
  },
  {
    id: "creative",
    name: "Creative",
    template:
      "✨ {{name}} ✨\n🎨 {{role}}\n🌟 {{interests}}\n🌍 {{location}}\n📱 {{contact}}",
  },
  {
    id: "minimal",
    name: "Minimal",
    template: "{{name}} • {{role}}\n{{interests}}\n{{contact}}",
  },
  {
    id: "student",
    name: "Student",
    template:
      "📚 {{name}}\n🎓 {{role}}\n💡 {{interests}}\n🏆 {{achievements}}\n📍 {{location}}",
  },
];

const platformLimits = {
  instagram: 150,
  twitter: 160,
  linkedin: 220,
  tiktok: 80,
};

export default function BioMakerTool() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    role: "",
    interests: "",
    achievements: "",
    location: "",
    contact: "",
  });

  const [selectedTemplate, setSelectedTemplate] =
    useState<string>("professional");
  const [generatedBio, setGeneratedBio] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    generateBio();
  }, [formData, selectedTemplate]);

  const generateBio = () => {
    const template = bioTemplates.find((t) => t.id === selectedTemplate);
    if (!template) return;

    let bio = template.template;
    Object.entries(formData).forEach(([key, value]) => {
      bio = bio.replace(new RegExp(`{{${key}}}`, "g"), value.trim());
    });

    bio = bio
      .split("\n")
      .filter((line) => line.trim() !== "")
      .join("\n")
      .replace(/\s+/g, " ")
      .trim();

    setGeneratedBio(bio);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedBio);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Form */}
      <div className="card relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="relative space-y-6">
          <h3 className="text-lg font-medium text-accent mb-6">
            Your Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-accent mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-field w-full"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-accent mb-1">
                Role/Title
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="input-field w-full"
                placeholder="Software Engineer | Student"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-accent mb-1">
                Interests
              </label>
              <input
                type="text"
                name="interests"
                value={formData.interests}
                onChange={handleInputChange}
                className="input-field w-full"
                placeholder="AI, Web Development, Photography"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-accent mb-1">
                Achievements
              </label>
              <input
                type="text"
                name="achievements"
                value={formData.achievements}
                onChange={handleInputChange}
                className="input-field w-full"
                placeholder="Award winner | Published author"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-accent mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="input-field w-full"
                placeholder="San Francisco, CA"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-accent mb-1">
                Contact/Links
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="input-field w-full"
                placeholder="📧 email@example.com | 🔗 portfolio.com"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview and Templates */}
      <div className="space-y-6">
        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
          <div className="relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-accent">
                Template Style
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {bioTemplates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    selectedTemplate === template.id
                      ? "bg-accent text-primary"
                      : "glass-effect text-white/80 hover:text-accent hover:border-accent/30"
                  }`}
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-accent">Preview</h3>
              <button onClick={handleCopy} className="btn-primary text-sm">
                {copied ? "Copied!" : "Copy Bio"}
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-4 whitespace-pre-wrap break-words border border-accent/20">
              {generatedBio || "Your bio will appear here..."}
            </div>
          </div>
        </div>

        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
          <div className="relative">
            <h3 className="text-lg font-medium text-accent mb-4">
              Character Count
            </h3>
            <div className="space-y-2">
              {Object.entries(platformLimits).map(([platform, limit]) => (
                <div
                  key={platform}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="capitalize text-white/80">{platform}</span>
                  <span
                    className={`${
                      generatedBio.length > limit
                        ? "text-red-400"
                        : "text-accent"
                    }`}
                  >
                    {generatedBio.length} / {limit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
