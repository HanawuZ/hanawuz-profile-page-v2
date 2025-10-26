import { TbTargetArrow } from "react-icons/tb";
import { BiTestTube } from "react-icons/bi";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";

type Experience = {
  workplace?: string;
  location?: string;
  position?: string;
  period?: string;
  details: ExperienceDetail[];
};

export type ExperienceDetail = {
  title?: string;
  titleIcon?: JSX.Element;
  type: "introduction" | "body" | "summary";
  list: ExperienceDetailList[];
};

export type ExperienceDetailList = {
  description: string | JSX.Element;
  sublist: string[] | JSX.Element[];
};

/* 
  {
    title = 'title test'
    icon = icon
    type = 'body'
    list = [
      {
        description: 'Sale promotion bra,bra,bra,bra'
        sublist: [
          'first, second, third',
          <> Hello test </>
        ]
      }
    ]
  }
*/

const experiences: Record<string, Experience[]> = {
  en: [
    {
      workplace: "T.C.C. Technology Co. Ltd.",
      location: "Bangkok, Thailand",
      position: "Application Developer",
      period: "March 2024 - Present",
      details: [
        {
          title: "",
          type: "introduction",
          list: [
            {
              description: (
                <>
                  Collaborated with a cross-functional team to build and enhance a large-scale B2B e-commerce 
                  platform in the food and beverage industry, serving thousands of retailers and handling purchase 
                  volumes exceeding a billion baht annually.
                  Focused on backend development of the back-office system, 
                  implementing and refining features for sales promotions, 
                  loyalty programs, coupons, and reporting to streamline business operations.
                  Contributed to API design, system reliability improvements, 
                  and chat integration in the mobile ordering app, while also 
                  supporting code reviews, deployment coordination, and 
                  mentorship of junior developers.
                </>
              ),
              sublist: [],
            },
          ],
        },
        {
          title: "Key Contributions",
          titleIcon: <TbTargetArrow color="red" size={22} />,
          type: "body",
          list: [
            {
              description: (
                <strong>
                  Contributed improvements of sales promotion features:
                </strong>
              ),
              sublist: [
                <>
                  Refined the business logic of promotion calculations to
                  support new promotion patterns including point-based rewards
                  promotion and bundle promotion with fixed-value discounts.
                </>,
                <>
                  Refactored backend logic for managing promotions to improve
                  code readability and maintainability.
                </>,
              ],
            },
            {
              description: (
                <>
                  <strong> Created loyalty feature: </strong>
                </>
              ),
              sublist: [
                <>
                  I, with front-end developer, collaborated to create a loyalty program
                  feature that records retailers total purchases and give rewards if
                  retailer reach purchase milestones within a specified period.
                </>,
                <>
                  Developed CRUD backend APIs for loyalty program management,
                  integrated into the wholesaler back-office website.
                </>,
                <>
                  Built business logic to calculate reward progress based on total spend or product quantity,
                  following configurable program rules
                  e.g. retailer will gain progress if order has defined products or brands in the program.
                </>,
                <>
                  Designed a tiered reward system, enabling retailers to gain reward e.g. merchandise,
                  discount coupons, or order-wide discounts as they reach purchase milestones.
                </>,
                <>
                  Collected and organized orders data from loyalty program, enabling the
                  data visualization team to create effective reports for
                  strategic decision-making.
                </>,
              ],
            },
            {
              description: (
                <strong>
                  Implemented coupon managements features:
                </strong>
              ),
              sublist: [
                <>
                  Built APIs for managing coupon data, allowing user
                  to set predefined products or brands to enable coupon usage,
                  and define either fixed-value discount or discount
                  based on percentage-based from order total purchase.
                </>,
                <>
                  Provided API documentation to facilitate integration and
                  collaboration with team members.
                </>,
              ],
            },
            {
              description: <strong>Created APIs for Banner management</strong>,
              sublist: [
                <>
                  Built APIs to support banner creation and management, enabling
                  wholesalers to promote their ongoing loyalty programs, promotions and
                  marketing content.
                </>,
                <>
                  Wrote API documentation to assist team members in feature
                  integration and usage.
                </>,
              ],
            },
            {
              description: (
                <strong> Enhanced several features in back-office website: </strong>
              ),
              sublist: [
                <>
                  Improved inventory adjustment backend logic to support product stock adjustments,
                  allowing users to add new items or update quantities across
                  multiple stock.
                </>,
                <>
                  Integrated online maps platform into features using map including
                  vansales visiting, displaying retailer location that will be visited and purchase report,
                  displaying orders location on map. Additionally,
                  I have added configuration to determine what map platforms wholesaler used between
                  Longdo map or Google map.
                </>,
                <>
                  Enhanced the order scheduling system that sends orders to the
                  Van Sales and Merchandising System (VSMS) by adding an automatic retry mechanism to handle sending errors
                  and implemented a logging system to record request and response data,
                  track processing time, and monitor sending status — improving system reliability and visibility.
                </>
              ],
            },
            {
              description: (
                <strong> Involved in enhancing features in Van sale application: </strong>
              ),
              sublist: [
                <>
                  I have involved in team of mobile application developers in a short period. My responsibility is to enhanced
                  some features in Van sale application to meet requirements.
                </>,
                <>
                  Improved user experience of uploading image feature by adding uploading multiple images,
                  enabling sale representatives to upload multiple images of sale procress when checkin
                  and checkout retailer shop.
                </>,
                <>
                  Fixed application crash caused by fetching all retailer informations at once by adding pagination on
                  retailer page and add search by their name or phone number.
                </>,
              ],
            },
            {
              description: (
                <strong>
                  Integrated chat platform into sale ordering mobile application:
                </strong>
              ),
              sublist: [
                <>
                  I participated in integrating Sendbird chat platform into e-commerce system. My focus was to
                  integrate chat functionality into React Native sales ordering app using built-in UI.
                </>,
                <>
                  Developed custom chat screens for wholesalers, featuring a retailer
                  list and one-on-one chat interface
                </>,
                <>
                  Designed the UI to follow modern chat experience standards,
                  inspired by popular messaging apps, ensuring familiarity and ease of use.
                </>
              ],
            },
            {
              description: (
                <strong>Worked on sales report visualization:</strong>
              ),
              sublist: [
                <>
                  Experienced in querying sales orders data, and built reports
                  using{" "}
                  <strong style={{ color: "#20A7C9" }}>Apache Superset</strong>{" "}
                  , improving visibility into wholesaler and retailer
                  performance for decision-making.
                </>,
              ],
            },
          ],
        },
        {
          title: "Leadership & Mentorship",
          titleIcon: <FaPersonArrowUpFromLine color="cyan" size={22} />,
          type: "body",
          list: [
            {
              description: (
                <strong>Reviewed and maintained code quality across the team:</strong>
              ),
              sublist: [
                <>
                  Reviewed feature implementations by other developers, validating database schema changes and perform some tests
                  in feature.
                </>,
                <>
                  Assisted in resolving conflicts between main and development branches by collaborating with task owners
                  to ensure smooth integration and reduce issues in deployment.
                </>
              ],
            },
            {
              description: (
                <strong>Mentorship Experience:</strong>
              ),
              sublist: [
                <>
                  Acted as a mentor for 3 application development interns, providing guidance
                  on application development, testing practices, and collaborative workflows
                  to help them contribute effectively to production-level projects.
                </>,
              ],
            },
          ]
        }
        //+----------------------------------------------------------------
      ],
    },
    {
      position: "Co-operative Education Student",
      period: "November 2023 - March 2024",
      details: [
        {
          type: "introduction",
          list: [
            {
              description: (
                <>
                  Assisted a team of 8 developers in building core features for
                  an e-commerce platform, including a shopping cart, coupon
                  system, payment gateway integration and sales promotions,
                  leading to an improved user experience for retailers.
                </>
              ),
              sublist: [],
            },
          ],
        },
        {
          title: "Key Contributions",
          titleIcon: <TbTargetArrow color="red" size={22} />,
          type: "body",
          list: [
            {
              description: (
                <strong>Built core features used in e-commerce platform:</strong>
              ),
              sublist: [
                <>
                  {" "}
                  Developed Shopping cart system for
                  an ordering platform, enabling retailers to place orders
                  seamlessly.{" "}
                </>,
                <>
                  Create logic for coupon listing and discount calculation
                  during checkout, supporting both fixed and percentage-based discounts.
                </>
              ],
            },
            {
              description: (
                <strong> Collaborated on sales promotions feature: </strong>
              ),
              sublist: [
                <>
                  Developed the first version of sales promotions feature,
                  defining requirements from wholesalers and developing the
                  business logic for promotion calculation.
                </>,
                <>
                  Created business logic for promotion calculation including
                  per-product discounts and free product offers to help
                  wholesalers attract more retailers.
                </>,
              ],
            },
            {
              description: (
                <strong> Testing and automation on back-office website: </strong>
              ),
              sublist: [
                <>
                  Ensured code functionality of back-office website by conducting automation
                  tests using Jest, achieving 80.22% on Statement coverage,
                  59.44% on Branch coverage, 80.36% on Functional coverage and
                  80.15% on Line coverage.
                </>,
              ],
            },
          ],
        },
      ],
    },
  ],
  th: [
    {
      workplace: "T.C.C. Technology Co. Ltd.",
      location: "กรุงเทพมหานคร, ประเทศไทย",
      position: "นักพัฒนาแอพพลิเคชัน",
      period: "มีนาคม 2024 - ปัจจุบัน",
      details: [

        {
          title: "",
          type: "introduction",
          list: [
            {
              description: (
                <>
                  Collaborated with team to develop a web-based e-commerce
                  platform for wholesale and retail distribution of food and
                  beverage products. My role focused on backend development for
                  the back-office system, supporting product, order, sales
                  promotion, coupon, and report management features to
                  streamline operations for business users.
                </>
              ),
              sublist: [],
            },
          ],
        },
        {
          title: "Key Contributions",
          titleIcon: <TbTargetArrow color="red" size={22} />,
          type: "body",
          list: [
            {
              description: (
                <strong>
                  Contributed improvements of sales promotion features:
                </strong>
              ),
              sublist: [
                <>
                  Refined the business logic of promotion calculations to
                  support new promotion patterns including point-based rewards
                  promotion and bundle promotion with fixed-value discounts.
                </>,
                <>
                  Refactored backend logic for managing promotions to improve
                  code readability and maintainability.
                </>,
              ],
            },
            {
              description: (
                <>
                  <strong> Created campaign feature: </strong> a purchase
                  accumulation tracking feature that records retailers total
                  purchases within a specified campaign period.
                </>
              ),
              sublist: [
                <>Created backend APIs for campaign management being used in backoffice website.</>,
                <>
                  Built complex business logic for accurately counting campaign
                  progress, allowing retailer purchase data to be counted by
                  total price or product quantity, based on predefined campaign
                  rules.
                </>,
                <>
                  Designed a tiered reward system, enabling retailers to earn
                  free products, discount coupons, or order-wide discounts upon
                  reaching accumulation milestones.
                </>,
                <>
                  Collected and organized campaign purchase data, enabling the
                  data visualization team to create effective reports for
                  strategic decision-making.
                </>,
              ],
            },
            {
              description: (
                <strong>
                  ออกแบบและสร้างฟีเจอร์การจัดการคูปอง:
                </strong>
              ),
              sublist: [
                <>
                  สร้าง logic สำหรับการสร้างและแก้ไขคูปอง โดยให้ผู้ใช้สามารถกําหนดสินค้า
                  หรือแบรนด์สินค้าที่เป็นเงื่อนไขในการใช้คูปองได้ และกำหนดส่วนลดจากคูปองใน
                  รูปแบบกำหนดจำนวนหรือเปอร์เซ็นต์จากรายการสั่งซื้อทั้งหมด
                </>,
                <>
                  เขียนเอกสาร API ให้ทีมอ่านเพื่อให้ทีมสามารถเข้าใจระบบและพัฒนาต่อได้ง่ายขึ้น
                </>,
              ],
            },
            {
              description: <strong>เขียน APIs สำหรับจัดการแบนเนอร์</strong>,
              sublist: [
                <>
                  เขียน API เพื่อรองรับการสร้างและจัดการแบนเนอร์ ช่วยให้ผู้ค่าส่งสามารถ
                  โปรโมตแคมเปญ, โปรโมชั่น และเนื้อหาเพื่อการตลาดได้
                </>,
                <>
                  ทำเอกสารประกอบ API เพื่อช่วยให่ทีมสามารถอ่านระบบและพัฒนาต่อได้ง่ายขึ้น
                </>,
              ],
            },
            {
              description: (
                <strong> ปรับปรุงฟีเจอร์การปรับสินค้าในสต็อก: </strong>
              ),
              sublist: [
                <>
                  ปรับปรุง logic ระบบหลังบ้านให้สามารถเพิ่มสินค้าใหม่
                  หรือปรับปรุงจํานวนสินค้าในสต็อกหลายที่ได้ถูกต้อง
                </>,
              ],
            },
            {
              description: (
                <strong>Worked on sales report visualization:</strong>
              ),
              sublist: [
                <>
                  Experienced in querying sales order data, and built reports
                  using{" "}
                  <strong style={{ color: "#20A7C9" }}>Apache Superset</strong>{" "}
                  , improving visibility into wholesaler and retailer
                  performance for decision-making.
                </>,
              ],
            },
          ],
        },
      ],
      // detail: [
      //   <>
      //     เป็นหนึ่งในทีมพัฒนา
      //     <strong>
      //       ระบบหลังบ้าน DMS &#40;Distributed Management System&#41;
      //     </strong>{" "}
      //     สำหรับบริหารจัดการกระบวนการขายระหว่างเอเจ้นต์และร้านค้า เช่น
      //     จัดการข้อมูลคำสั่งซื้อ สินค้า โปรโมชัน เป้ายอดขายของร้านค้า
      //     แคมเปญยอดขาย การควบคุมสต๊อก รายงานข้อมูลการขาย
      //     และติดตามการสั่งซื้อของร้านค้า
      //   </>,
      //   <>
      //     รับผิดชอบในการพัฒนาและปรับปรุง API ของฟีเจอร์เกี่ยวกับส่งเสริมการขาย
      //     เช่น ปรับปรุง logic การคำนวนโปรโมชันเพื่อรองรับโปรโมชันรูปแบบใหม่
      //     พัฒนาฟีเจอร์จัดการเป้ายอดขายของร้านค้า และคูปองสำหรับร้านค้า
      //   </>,
      //   <>
      //     ออกแบบ API ของฟีเจอร์คูปอง ได้แก่ จัดการข้อมูลคูปอง
      //     แสดงคูปองที่สามารถใช้ได้เมื่อสั่งซื้อตามเงื่อนไข
      //     และคำนวนส่วนลดเมื่อร้านค้าใช้คูปองในการสั่งซื้อ
      //   </>,
      //   <>
      //     พัฒนาระบบจัดการสิทธิ์ผู้ใช้ เพื่อควบคุมการเข้าถึงฟีเจอร์ต่าง ๆ ในระบบ
      //     DMS ทั้งฝั่ง Frontend และ Backend
      //   </>,
      //   <>
      //     มีประสบการณ์ในการดึงข้อมูลการสั่งซื้อจากฐานข้อมูล มาแสดงผลเป็นรายงานบน{" "}
      //     <strong style={{ color: "#20A7C9" }}>Apache Superset</strong>{" "}
      //     เพื่อแสดงยอดขายของแต่ละร้านค้า หรือเอเจ้นต์
      //   </>,
      // ],
    },
    {
      position: "นักศึกษาสหกิจศึกษา",
      period: "พฤศจิกายน 2023 - มีนาคม 2024",
      details: [
        {
          type: "introduction",
          list: [
            {
              description: (
                <>
                  ช่วยเหลือทีมนักพัฒนา 8 คน สร้างฟีเจอร์หลักให้แพลตฟอร์ม e-commerce
                  ผมมีหน้าที่สร้างฟีเจอร์ตะกร้าสินค้า, ระบบคูปอง, นำ Payment gateway มาใช้กับระบบชําระเงิน
                  และระบบโปรโมชัน
                </>
              ),
              sublist: [],
            },
          ],
        },
        {
          title: "Key Contributions",
          titleIcon: <TbTargetArrow color="red" size={22} />,
          type: "body",
          list: [
            {
              description: (
                <>
                  <strong>พัฒนาระบบตะกร้าสินค้า: </strong>
                  เพิ่มฟีเจอร์ตะกร้าสินค้าบน Ordering platform เพื่อให้ลูกค้าสามารถสั่งซื้อสินค้าได้
                </>
              ),
              sublist: [],
            },
            {
              description: (
                <>
                  <strong>สร้างฟีเจอร์หลักของระบบคูปอง:</strong>
                  พัฒนา logic สำหรับลิสต๋รายการคูปอง และการคํานวณส่วนลดในระหว่างการชําระเงิน โดย
                  ส่วนลดเป็นได้ทั้งจำนวนที่กำหนดและเป็นเปอร์เซ็นต์ในราคาสินค้าทั้งหมด
                </>
              ),
              sublist: [],
            },
            {
              description: (
                <strong> มีส่วนร่วมในการพัฒนาฟีเจอร์การส่งเสริมการขาย: </strong>
              ),
              sublist: [
                <>
                  พัฒนาฟีเจอร์ระบบ Promotions สําหรับการส่งเสริมการขายจากการวิเคราะห์
                  ความต้องการของผู้ค่าส่ง
                </>,
                <>
                  สร้าง Business logic สำหรับคำนวณโปรโมชันเพื่อกำหนดสิ่งที่ได้จากการสั่งซื้อ
                  ได้แก่ ลดราคารายสินค้า และให้สินค้าแถมเพื่อดึงดูดให้ร้านค้าสั่งซื้อมากขึ้น
                </>,
              ],
            },
            {
              description: (
                <strong> ทดสอบการทำงานอัตโนมัติบนเว็บไซต์ Backoffice: </strong>
              ),
              sublist: [
                <>
                  เขียนทดสอบการทำงานอัตโนมัติบนเว็บไซต์ Backoffice ด้วยไลบรารี่ Jest
                  ได้ผลลัพธ์คือ จำนวน Statement ที่ถูกเรียกใช้งาน คลอบคลุม 80.22%,
                  จำนวนเงื่อนไข if else ที่ถูกเรียกใช้งาน คลอบคลุม 59.44%, จำนวนฟังก์ชันที่ถูกเรียกใช้งาน คลอบคลุม 80.36% และ
                  จำนวนบรรทัดที่ถูกเรียกใช้งาน คลอบคลุม 80.15%.
                </>,
              ],
            },
          ],
        },
      ],
      // detail: [
      //   <>
      //     ช่วยทีมพัฒนาฟีเจอร์ใหม่บนเว็บสั่งซื้อสินค้า &#40;Ordering web&#41;
      //     โดยงานแรกคือพัฒนาระบบตะกร้าสินค้า
      //   </>,
      //   <>
      //     เขียน Business logic สำหรับคำนวณโปรโมชัน
      //     ซึ่งครอบคลุมการคำนวณส่วนลดสำหรับแต่ละสินค้า
      //     และการเพิ่มสินค้าฟรีในคำสั่งซื้อ
      //   </>,
      //   <>
      //     เขียน integration tests บนระบบหลังบ้านโดยใช้ไลบรารี Ginkgo และทำ web
      //     automation บนระบบหลังบ้าน DMS ด้วย Jest
      //   </>,
      // ],
    },
  ],
};

export default experiences;
