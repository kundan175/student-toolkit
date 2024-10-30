"use client";

import { useState } from "react";

interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: string[];
}

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },
  education: [],
  experience: [],
  skills: [],
};

const templates = [
  { id: "modern", name: "Modern" },
  { id: "classic", name: "Classic" },
  { id: "minimal", name: "Minimal" },
  { id: "professional", name: "Professional" },
];

export default function ResumeBuilderTool() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [activeSection, setActiveSection] = useState<string>("personal");

  const handlePersonalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setResumeData((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }));
  };

  const updateEducation = (
    id: string,
    field: keyof Education,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setResumeData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExperience],
    }));
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const skills = e.target.value.split(",").map((skill) => skill.trim());
    setResumeData((prev) => ({
      ...prev,
      skills,
    }));
  };

  const generatePDF = () => {
    // TODO: Implement PDF generation
    console.log("Generating PDF with data:", resumeData);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <div className="space-y-6">
        {/* Navigation */}
        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
          <div className="relative">
            <nav className="flex space-x-4">
              {["personal", "education", "experience", "skills"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeSection === section
                        ? "bg-accent text-primary"
                        : "glass-effect text-white/80 hover:text-accent hover:border-accent/30"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Personal Information */}
        {activeSection === "personal" && (
          <div className="card relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
            <div className="relative space-y-4">
              <h3 className="text-lg font-medium text-accent mb-4">
                Personal Information
              </h3>
              <div>
                <label className="block text-sm font-medium text-accent mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={resumeData.personalInfo.fullName}
                  onChange={handlePersonalInfoChange}
                  className="input-field w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-accent mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={resumeData.personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  className="input-field w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-accent mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={resumeData.personalInfo.phone}
                  onChange={handlePersonalInfoChange}
                  className="input-field w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-accent mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={resumeData.personalInfo.location}
                  onChange={handlePersonalInfoChange}
                  className="input-field w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-accent mb-1">
                  Professional Summary
                </label>
                <textarea
                  name="summary"
                  value={resumeData.personalInfo.summary}
                  onChange={handlePersonalInfoChange}
                  rows={4}
                  className="input-field w-full"
                />
              </div>
            </div>
          </div>
        )}

        {/* Education */}
        {activeSection === "education" && (
          <div className="card relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
            <div className="relative">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-accent">Education</h3>
                <button onClick={addEducation} className="btn-primary text-sm">
                  Add Education
                </button>
              </div>
              <div className="space-y-6">
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="p-4 glass-effect rounded-xl">
                    <div className="flex justify-end mb-2">
                      <button
                        onClick={() => removeEducation(edu.id)}
                        className="text-accent hover:text-accent-light"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-accent mb-1">
                          School
                        </label>
                        <input
                          type="text"
                          value={edu.school}
                          onChange={(e) =>
                            updateEducation(edu.id, "school", e.target.value)
                          }
                          className="input-field w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent mb-1">
                          Degree
                        </label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) =>
                            updateEducation(edu.id, "degree", e.target.value)
                          }
                          className="input-field w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent mb-1">
                          Field of Study
                        </label>
                        <input
                          type="text"
                          value={edu.field}
                          onChange={(e) =>
                            updateEducation(edu.id, "field", e.target.value)
                          }
                          className="input-field w-full"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-accent mb-1">
                            Start Date
                          </label>
                          <input
                            type="date"
                            value={edu.startDate}
                            onChange={(e) =>
                              updateEducation(
                                edu.id,
                                "startDate",
                                e.target.value
                              )
                            }
                            className="input-field w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-accent mb-1">
                            End Date
                          </label>
                          <input
                            type="date"
                            value={edu.endDate}
                            onChange={(e) =>
                              updateEducation(edu.id, "endDate", e.target.value)
                            }
                            className="input-field w-full"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent mb-1">
                          Description
                        </label>
                        <textarea
                          value={edu.description}
                          onChange={(e) =>
                            updateEducation(
                              edu.id,
                              "description",
                              e.target.value
                            )
                          }
                          rows={3}
                          className="input-field w-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Experience */}
        {activeSection === "experience" && (
          <div className="card relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
            <div className="relative">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-accent">Experience</h3>
                <button onClick={addExperience} className="btn-primary text-sm">
                  Add Experience
                </button>
              </div>
              <div className="space-y-6">
                {resumeData.experience.map((exp) => (
                  <div key={exp.id} className="p-4 glass-effect rounded-xl">
                    <div className="flex justify-end mb-2">
                      <button
                        onClick={() => removeExperience(exp.id)}
                        className="text-accent hover:text-accent-light"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-accent mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) =>
                            updateExperience(exp.id, "company", e.target.value)
                          }
                          className="input-field w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent mb-1">
                          Position
                        </label>
                        <input
                          type="text"
                          value={exp.position}
                          onChange={(e) =>
                            updateExperience(exp.id, "position", e.target.value)
                          }
                          className="input-field w-full"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-accent mb-1">
                            Start Date
                          </label>
                          <input
                            type="date"
                            value={exp.startDate}
                            onChange={(e) =>
                              updateExperience(
                                exp.id,
                                "startDate",
                                e.target.value
                              )
                            }
                            className="input-field w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-accent mb-1">
                            End Date
                          </label>
                          <input
                            type="date"
                            value={exp.endDate}
                            onChange={(e) =>
                              updateExperience(
                                exp.id,
                                "endDate",
                                e.target.value
                              )
                            }
                            className="input-field w-full"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent mb-1">
                          Description
                        </label>
                        <textarea
                          value={exp.description}
                          onChange={(e) =>
                            updateExperience(
                              exp.id,
                              "description",
                              e.target.value
                            )
                          }
                          rows={3}
                          className="input-field w-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Skills */}
        {activeSection === "skills" && (
          <div className="card relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
            <div className="relative">
              <h3 className="text-lg font-medium text-accent mb-4">Skills</h3>
              <div>
                <label className="block text-sm font-medium text-accent mb-1">
                  Enter your skills (comma-separated)
                </label>
                <textarea
                  value={resumeData.skills.join(", ")}
                  onChange={handleSkillsChange}
                  rows={4}
                  placeholder="e.g., JavaScript, React, Node.js, Project Management"
                  className="input-field w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Preview Section */}
      <div className="space-y-6">
        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-accent">
                Template Style
              </h3>
              <button onClick={generatePDF} className="btn-primary text-sm">
                Download PDF
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {templates.map((template) => (
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
            <h3 className="text-lg font-medium text-accent mb-4">Preview</h3>
            <div className="bg-white p-8 rounded-xl border border-accent/20 min-h-[800px]">
              {/* Preview content */}
              <div className="space-y-6">
                {/* Personal Info */}
                <div className="text-center border-b border-accent/20 pb-6">
                  <h1 className="text-3xl font-bold mb-2 text-primary">
                    {resumeData.personalInfo.fullName}
                  </h1>
                  <div className="text-primary/70 space-y-1">
                    <p>{resumeData.personalInfo.email}</p>
                    <p>{resumeData.personalInfo.phone}</p>
                    <p>{resumeData.personalInfo.location}</p>
                  </div>
                </div>

                {/* Summary */}
                {resumeData.personalInfo.summary && (
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-primary">
                      Professional Summary
                    </h2>
                    <p className="text-primary/80">
                      {resumeData.personalInfo.summary}
                    </p>
                  </div>
                )}

                {/* Experience */}
                {resumeData.experience.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4 text-primary">
                      Experience
                    </h2>
                    <div className="space-y-4">
                      {resumeData.experience.map((exp) => (
                        <div key={exp.id}>
                          <h3 className="font-semibold text-primary">
                            {exp.position}
                          </h3>
                          <p className="text-primary/70">{exp.company}</p>
                          <p className="text-sm text-primary/60">
                            {exp.startDate} - {exp.endDate}
                          </p>
                          <p className="mt-2 text-primary/80">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education */}
                {resumeData.education.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4 text-primary">
                      Education
                    </h2>
                    <div className="space-y-4">
                      {resumeData.education.map((edu) => (
                        <div key={edu.id}>
                          <h3 className="font-semibold text-primary">
                            {edu.school}
                          </h3>
                          <p className="text-primary/70">
                            {edu.degree} in {edu.field}
                          </p>
                          <p className="text-sm text-primary/60">
                            {edu.startDate} - {edu.endDate}
                          </p>
                          <p className="mt-2 text-primary/80">
                            {edu.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                {resumeData.skills.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-primary">
                      Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
