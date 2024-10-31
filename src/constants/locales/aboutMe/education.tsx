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
      description: string | JSX.Element;
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
      title: "เคยเรียนอะไรมาบ้าง",
      list: [
        {
          name: "วิศวกรรมซอฟต์แวร์",
          description:
            <>เป็นวิชาที่อัพสกิลทักษะการพัฒนาซอฟต์แวร์ของผมได้เยอะมาก จากการเรียนรู้กระบวนการพัฒนาซอฟต์แวร์โดยทำโปรเจกต์กลุ่มกับเพื่อนในสาขา</>
        },
        {
          name: "การวิเคราะห์และออกแบบระบบ",
          description:
            <>
              เป็นวิชาก่อนหน้าที่จะเรียนวิศวกรรมซอฟต์แวร์ ระหว่างเรียนจะเน้นความรู้การวิเคราะห์ระบบ เช่น 
              การวิเคราะห์ความต้องการของผู้ใช้ และการออกแบบการทำงานของซอฟต์แวร์ด้วย <strong>UML Diagrams</strong>
            </>
        },
        {
          name: "การทดสอบซอฟต์แวร์",
          description: 
            <>เรียนต่อจากวิชา Software Engineering โดยได้ศึกษาเรื่องการทดสอบซอฟต์แวร์ในรูปแบบต่าง ๆ</>
        },
        {
          name: "เว็บแอปพลิเคชัน",
          description:
            <>
              ผมได้ลองใช้เฟรมเวิร์กเพิ่มเติมในการพัฒนาเว็บ เช่น <strong style={{ color: "#88dded"}}>React</strong>,{" "} 
              <strong style={{ color: "#DD0031" }}>Angular</strong> และ <strong>Express.js</strong>
            </>  
        },
        {
          name: "การเขียนโปรแกรมเชิงวัตถุ",
          description:
            <>เข้าใจพื้นฐานของการเขียนโปรแกรมเชิงวัตถุ ด้วย ♨️ <text style={{ color: "#ED8B00", fontWeight: "bold" }}>ภาษา Java</text></>,
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
            <>
              This course has greatly improved my software development skills. I learned processes of 
              software development by working on a course project with my team.
            </>
        },
        {
          name: "System Analysis & Design",
          description:
            <>
              A prerequisite course before Software Engineering. During the course,
              I gathered knownledge of system analysis skills, such as analyzing user requirement
              and designing software functionality using <strong>UML Diagrams.</strong>
            </>
        },
        {
          name: "Software Testing",
          description: 
            <>
              Studied various types of software testing.
            </>
        },
        {
          name: "Web Application",
          description:
            <>
              I have learned various web application frameworks such as <strong style={{ color: "#88dded"}}>React</strong>,{" "} 
              <strong style={{ color: "#DD0031" }}>Angular</strong> and <strong>Express.js.</strong>
            </>
        },
        {
          name: "Object-oriented Programming",
          description:
            <>Understand the fundamental concepts of Object-oriented programming with ♨️ <text style={{ color: "#ED8B00", fontWeight: "bold" }}>Java</text>.</>
        },
      ],
    },
  },
};
