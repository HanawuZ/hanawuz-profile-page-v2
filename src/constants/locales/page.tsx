type LocaleData = {
  about: string;
  skills: string;
  projects: string;
  experiences: string;
  acknowledgement: string;
};

const pageLocales: Record<string, LocaleData> = {
  th: {
    about: "ชั้นเป็นใคร",
    skills: "ทักษะและความเชี่ยวชาญ",
    projects: "โปรเจคที่เคยทำ",
    experiences: "ประสบการณ์การทำงาน",
    acknowledgement: "คำขอบคุณ",
  },
  en: {
    about: "About Me",
    skills: "Skills & Proficiencies",
    projects: "Projects",
    experiences: "Experiences",
    acknowledgement: "Acknowledgement",
  }
};

export default pageLocales