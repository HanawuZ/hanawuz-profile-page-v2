type LocaleData = {
  about: string;
  skills: string;
  projects: string;
  experiences: string;
  acknowledgement: string;
};

const pageLocales: Record<string, LocaleData> = {
  th: {
    about: "ตัวผมเอง",
    skills: "ทักษะ",
    projects: "โปรเจคที่เคยทำ",
    experiences: "ประสบการณ์การทำงาน",
    acknowledgement: "คำขอบคุณ",
  },
  en: {
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    experiences: "Experiences",
    acknowledgement: "Acknowledgement",
  }
};

export default pageLocales