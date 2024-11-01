type Experience = {
  workplace?: string;
  location?: string;
  position?: string;
  period?: string;
  detail?: string[] | JSX.Element[];
};

const experiences: Record<string, Experience[]> = {
  en: [
    {
      workplace: "T.C.C. Technology Co. Ltd.",
      location: "Bangkok, Thailand",
      position: "Application Developer Associate",
      period: "March 2024 - Present",
      detail: [
        <>
          Worked with team to develop <strong>DMS backoffice</strong> for
          managing distribution process such as managing sales orders, products,
          sales promotions, sales targets, warehousing, sales report, and
          tracking sales.
        </>,
        <>
          Refined features involving sales promotion such as
          improving promotion calculation logic to support new promotion
          patterns, developing <strong>campaign system</strong> to manage sales
          target for each retailer, and{" "}
          <strong>coupon management system</strong> to manage coupons for
          retailers.
        </>,
        <>
          Implemented a coupon management feature for the backend application,
          consisting of handling coupons data and calculating discounts when
          retailers apply coupons during sales order creation.
        </>,
        <>
          Created a user role and permission system on backoffice website for
          managing user access to features of each role.
        </>,
        <>
          Experienced in querying sales order data from the database and visualizng reports in{" "}
          <strong style={{ color: "#20A7C9" }}>Apache Superset</strong> to
          display sales data of each agent or retailer that improved data accessibility and decision-making.
        </>,
      ],
    },
    {
      position: "Cooperative Operation Student",
      period: "November 2023 - March 2024",
      detail: [
        <>
          Assisted team to create new features for Ordering website. My first
          assignment was to create Shopping cart system.
        </>,
        <>
          Developed the business logic for calculating promotions when order is
          created, consisting of discounting on each product and giving free
          products.
        </>,
        <>
          Ensured code functionality by utilizing Ginkgo for integration test on
          back-end application and perform web automation test on DMS backoffice
          website along with Jest library.
        </>,
      ],
    },
  ],
  th: [
    {
      workplace: "T.C.C. Technology Co. Ltd.",
      location: "กรุงเทพมหานคร, ประเทศไทย",
      position: "ผู้ช่วยนักพัฒนาแอพพลิเคชัน",
      period: "มีนาคม 2024 - ปัจจุบัน",
      detail: [
        <>
          เป็นหนึ่งในทีมพัฒนา
          <strong>
            ระบบหลังบ้าน DMS &#40;Distributed Management System&#41;
          </strong>{" "}
          สำหรับบริหารจัดการกระบวนการขายระหว่างเอเจ้นต์และร้านค้า เช่น
          จัดการข้อมูลคำสั่งซื้อ สินค้า โปรโมชัน เป้ายอดขายของร้านค้า
          แคมเปญยอดขาย การควบคุมสต๊อก รายงานข้อมูลการขาย
          และติดตามการสั่งซื้อของร้านค้า
        </>,
        <>
          รับผิดชอบในการพัฒนาและปรับปรุง API ของฟีเจอร์เกี่ยวกับส่งเสริมการขาย
          เช่น ปรับปรุง logic การคำนวนโปรโมชันเพื่อรองรับโปรโมชันรูปแบบใหม่
          พัฒนาฟีเจอร์จัดการเป้ายอดขายของร้านค้า และคูปองสำหรับร้านค้า
        </>,
        <>
          ออกแบบ API ของฟีเจอร์คูปอง ได้แก่ จัดการข้อมูลคูปอง
          แสดงคูปองที่สามารถใช้ได้เมื่อสั่งซื้อตามเงื่อนไข
          และคำนวนส่วนลดเมื่อร้านค้าใช้คูปองในการสั่งซื้อ
        </>,
        <>
          พัฒนาระบบจัดการสิทธิ์ผู้ใช้ เพื่อควบคุมการเข้าถึงฟีเจอร์ต่าง ๆ ในระบบ
          DMS ทั้งฝั่ง Frontend และ Backend
        </>,
        <>
          มีประสบการณ์ในการดึงข้อมูลการสั่งซื้อจากฐานข้อมูล มาแสดงผลเป็นรายงานบน{" "}
          <strong style={{ color: "#20A7C9" }}>Apache Superset</strong>{" "}
          เพื่อแสดงยอดขายของแต่ละร้านค้า หรือเอเจ้นต์
        </>,
      ],
    },
    {
      position: "นักศึกษาสหกิจศึกษา",
      period: "พฤศจิกายน 2023 - มีนาคม 2024",
      detail: [
        <>
          ช่วยทีมพัฒนาฟีเจอร์ใหม่บนเว็บสั่งซื้อสินค้า &#40;Ordering web&#41;
          โดยงานแรกคือพัฒนาระบบตะกร้าสินค้า
        </>,
        <>
          เขียน Business logic สำหรับคำนวณโปรโมชัน
          ซึ่งครอบคลุมการคำนวณส่วนลดสำหรับแต่ละสินค้า
          และการเพิ่มสินค้าฟรีในคำสั่งซื้อ
        </>,
        <>
          เขียน integration tests บนระบบหลังบ้านโดยใช้ไลบรารี Ginkgo และทำ web
          automation บนระบบหลังบ้าน DMS ด้วย Jest
        </>,
      ],
    },
  ],
};

export default experiences;
