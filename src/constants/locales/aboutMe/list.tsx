export interface AboutMeListInterface {
  title: string;
  presentJob: string;
  doing: string;
  sleep: string;
}

export const aboutMeList: Record<string, AboutMeListInterface> = {
  th: {
    title: "ชั้นคือใคร",
    presentJob: "ปัจจุบันทำงานตำแหน่ง \"ผู้ช่วยนักพัฒนาแอพพลิเคชัน\" ที่",
    doing: "กำลังลงลึกการพัฒนาหลังบ้านด้วยการเขียนโค๊ด Java spring boot และภาษา Go นอกจากนี้ผมก็ศึกษาแนวทางปฏิบัติเพิ่มเติมเกี่ยวกับการพัฒนาซอฟต์แวร์ด้วย เช่น Clean architecture, React design patterns และ Behavior-driven development.",
    sleep: "ตอนนี้อยากนอน 69 ชั่วโมงต่อวันมากกกก!!",
  },
  en: {
    title: "Who am I",
    presentJob: "I'm currently working as Application developer associate at",
    doing: "Presently deep diving into back-end development by coding ♨️ Java Spring Boot and Golang with widely used web frameworks. Moreover, I am learning software development practices like Clean architecture, React design patterns and Behavior-driven development.",
    sleep: "I want 69 hours per day for sleeping!!",
  },
};

