export interface EducationEntry {
  school: string;
  degree: string;
  gpa: string;
  location: string;
  dates?: string;
}

export const education: EducationEntry[] = [
  {
    school: "George Mason University",
    degree: "Master of Science in Computer Science",
    gpa: "3.67 / 4.00",
    location: "Fairfax, Virginia",
  },
  {
    school: "University of Mumbai",
    degree: "Bachelor of Engineering, Computer Engineering",
    gpa: "3.8 / 4.0",
    location: "Mumbai, India",
  },
];
