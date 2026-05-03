declare type Candidate = {
  id: string;
  fullName: string;
  headline: string;
  location: string;
  yearsOfExperience: number;
  skills: string[];
  availability: string;
  updatedAt: string;
  status: string;
  score: number;
  summary?: string;
  languages?: string[];
  education?: string;
  links?: {
    portfolio?: string;
    github?: string;
    linkedin?: string;
  };
  experience?: Experience[];
  projects?: Project[];
  notes?: Note[];
};

declare type Experience = {
  company: string;
  title: string;
  start: string;
  end: string;
  highlights: string[];
};

declare type Project = {
  name: string;
  description: string;
  tech: string[];
};

declare type Note = {
  date: string;
  text: string;
};
