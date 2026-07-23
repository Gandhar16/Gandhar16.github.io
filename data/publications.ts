export interface Publication {
  title: string;
  year: string;
  type: "Patent" | "Publication";
  note?: string;
}

export const publications: Publication[] = [
  {
    title: "Methods to Identify New Molecules using Machine Learning",
    year: "Filed August 9, 2024",
    type: "Patent",
  },
  {
    title: "Face Recognition for the Visually Impaired",
    year: "2021, 2022",
    type: "Publication",
  },
  {
    title: "Intelligent Chatbot for College Enquiry",
    year: "2021",
    type: "Publication",
  },
  {
    title: "Digital Medical Records with Blockchain",
    year: "2021",
    type: "Publication",
  },
];
