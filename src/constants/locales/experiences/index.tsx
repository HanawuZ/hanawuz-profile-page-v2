/* 
  className?: string;
  workplace?: string;
  location?: string;
  position: string;
  period: string;
*/

type Experience = {
  workplace?: string;
  location?: string;
  position?: string;
  period?: string;
  detail?: string[];
};

const experiences: Record<string, Experience[]> = {
  en: [
    {
      workplace: "T.C.C. Technology Co. Ltd.",
      location: "Bangkok, Thailand",
      position: "Application Developer Associate",
      period: "March 2024 - Present",
      detail: [
        "Maintained the Distribution Management System (DMS), a back-office website for managing distribution process such as sale order management, warehousing and inventory control. This system integrated with Web Ordering system to streamline retailers' ordering processes.",
        "Enhanced the promotion management system by refining business logic for promotions. For example, implemented new feature that allows retailers to earn points if their orders meet specific conditions of promotion.",
        "Implemented the coupon management feature on server-side application, consisting of handling coupons data and calculating discounts when retailers applied coupon.",
        "Created a user role and permission system on DMS back-office website for managing user access to features of each role.",
        "Documenting features to describe their design, contributing readability, consistency and maintainability to others in team."
      ]
    },
    {
      position: "Cooperative Operation Student",
      period: "November 2023 - March 2024",
      detail: [
        "Assisted senior engineers to create new features for Web Ordering such as shopping cart and promotion.",
        "Worked with team to developed the business logic for calculating promotions when order is created, consisting of discounting on each product and giving free products.",
        "Ensured code functionality by utilizing Ginkgo for integration test on back-end application and perform web automation test on DMS back-office website along with Jest library.",
      ]
    }
  ],
  th: [
    {
      workplace: "T.C.C. Technology Co. Ltd.",
      location: "กรุงเทพมหานคร, ประเทศไทย",
      position: "ผู้ช่วยนักพัฒนาแอพพลิเคชัน",
      period: "มีนาคม 2024 - ปัจจุบัน",
      detail: [
        "ดูแลระบบจัดการการกระจายสินค้า (DMS) ซึ่งเป็นเว็บแบ็คออฟฟิศสำหรับจัดการกระบวนการกระจาย เช่น การจัดการออเดอร์ขาย การจัดการคลังสินค้า และการควบคุมสินค้าคงคลัง ระบบนี้เชื่อมต่อกับระบบสั่งซื้อออนไลน์เพื่อทำให้การสั่งซื้อของร้านค้าสะดวกยิ่งขึ้น",
        "ปรับปรุงระบบจัดการโปรโมชั่นโดยการปรับแต่งตรรกะทางธุรกิจให้ดียิ่งขึ้น ยกตัวอย่างเช่น เพิ่มฟีเจอร์ใหม่ที่ให้ร้านค้าได้รับคะแนนถ้าคำสั่งซื้อตรงตามเงื่อนไขของโปรโมชั่น",
        "ทำฟีเจอร์จัดการคูปองในแอปพลิเคชันฝั่งเซิร์ฟเวอร์ ซึ่งรวมถึงการจัดการข้อมูลคูปองและคำนวณส่วนลดเมื่อร้านค้าใช้คูปอง",
        "สร้างระบบจัดการบทบาทและสิทธิ์ผู้ใช้ในเว็บแบ็คออฟฟิศของ DMS เพื่อควบคุมการเข้าถึงฟีเจอร์ของแต่ละบทบาท",
        "ทำเอกสารฟีเจอร์ต่าง ๆ เพื่อบอกถึงการออกแบบ ช่วยเพิ่มความอ่านง่าย ความสม่ำเสมอ และทำให้ทีมงานดูแลรักษาง่ายขึ้น"
      ]
    },
    {
      position: "นักศึกษาสหกิจศึกษา",
      period: "พฤศจิกายน 2023 - มีนาคม 2024",
      detail: [
        "ช่วยพี่พนักงานพัฒนาฟีเจอร์ใหม่ให้เว็บสั่งสินค้า เช่น ระบบตะกร้าสินค้าและโปรโมชั่น",
        "พัฒนา Business logic ไว้คำนวนโปรโมชันเมื่อมีการสั่งซื้อ ประกอบไปด้วย คำนวนส่วนลดแต่ละสินค้า และให้สินค้าฟรี",
        "เขียน integration test บนระบบหลังบ้านด้วยไลบรารี Ginkgo และทำ Web automation บนเว็บไซต์แบ็คออฟฟิศด้วย Jest",
      ]
    }
  ],
};

export default experiences;