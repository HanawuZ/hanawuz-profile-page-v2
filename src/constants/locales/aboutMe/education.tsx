// Define type for education object
interface EducationDetails {
  title: string;
  university: string;
  degree: string;
  major: string;
  location: string;
  graduatedDate: string;
  relevantCourse: {
    title: string;
    list: {
      name: string;
      description: string;
    }[];
  };
}

export const education: Record<string, EducationDetails> = {
  th: {
    title: "การศึกษา",
    university: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
    degree: "วิศวกรรมศาสตรบัณฑิต",
    major: "สาขาวิศวกรรมคอมพิวเตอร์",
    location: "นครราชสีมา, ประเทศไทย",
    graduatedDate: "พฤษภาคม 2024",
    relevantCourse: {
      title: "เคยเรียนอะไรบ้าง",
      list: [
        {
          name: "วิศวกรรมซอฟต์แวร์",
          description:
            "ได้เรียนรู้กระบวนการพัฒนาซอฟต์แวร์โดยทำโปรเจกต์กับเพื่อนในสาขา",
        },
        {
          name: "การวิเคราะห์และออกแบบระบบ",
          description:
            "เก็บเกี่ยวความรู้พื้นฐานเกี่ยวกับการวิเคราะห์ระบบ เช่น การวิเคราะห์ความต้องการของผู้ใช้และการออกแบบซอฟต์แวร์",
        },
        {
          name: "การทดสอบซอฟต์แวร์",
          description: "ศึกษาเรื่องการทดสอบซอฟต์แวร์ในรูปแบบต่าง ๆ",
        },
        {
          name: "เว็บแอปพลิเคชัน",
          description:
            "ได้ลองใช้เฟรมเวิร์กต่าง ๆ เช่น React, Angular และ Express.js",
        },
        {
          name: "การเขียนโปรแกรมเชิงวัตถุ",
          description:
            "เข้าใจพื้นฐานของการเขียนโปรแกรมเชิงวัตถุ ด้วย ♨️ ภาษา Java!",
        },
      ],
    },
  },
  en: {
    title: "Education",
    university: "Suranaree University of Technology",
    degree: "Bachelor of Engineering",
    major: "Computer Engineering",
    location: "Nakhon Ratchasima, Thailand",
    graduatedDate: "May 2024",
    relevantCourse: {
      title: "Relevant courses",
      list: [
        {
          name: "Software Engineering",
          description:
            "Learned processes of software development by implementing a course project with my team.",
        },
        {
          name: "System Analysis & Design",
          description:
            "Gathered knownledge of the fundamental concepts of system analysis like analyzing user requirement or software design.",
        },
        {
          name: "Software Testing",
          description: "Studied various types of software testing.",
        },
        {
          name: "Web Application",
          description:
            "Learned the various full stack frameworks such as React, Angular and Express.js.",
        },
        {
          name: "Object-oriented Programming",
          description:
            "Understood the fundamental concepts of Object-oriented programming with ♨️ Java.",
        },
      ],
    },
  },
};
