import { ExperienceContainer } from "./ExperienceContainer";
import ListItem from "@/components/Listing/ListItem";
import { useProfileContext } from "@/context/ProfileContext";
import experiences from "@/constants/locales/experiences";

const ExperienceBody = () => {
  const { language } = useProfileContext();
  return (
    <div className="mt-6">
      {experiences[language]?.map((experience, index) => (
        <ExperienceContainer
          key={index}
          className="mx-4 mt-8"
          workplace={experience?.workplace}
          location={experience?.location}
          position={experience?.position}
          period={experience?.period}
        >
          <ul className="max-md:text-sm mt-3 list-disc mx-10 break-all">
            {experience.detail?.map((detail, index) => (
              <ListItem key={index}>
                <p className="ms-2 break-normal hyphens-auto">
                  {detail}
                </p>
              </ListItem>
            ))}
          </ul>
        </ExperienceContainer>
      ))}
      {/* <ExperienceContainer
        className="mx-4"
        workplace="T.C.C. Technology Co. Ltd."
        location="Bangkok, Thailand"
        position="Application Developer Associate"
        period="March 2024 - Present"
      >
        <ul className="max-md:text-sm mt-3 list-disc mx-10 break-all">
          <ListItem>
            <p className="ms-2 break-normal hyphens-auto" lang="en">
              Maintained the Distribution Management System &#40;DMS&#41;, a
              back-office website for managing distribution process such as sale
              order management, warehousing and inventory control. This system
              integrated with Web Ordering system to streamline retailers&apos;
              ordering processes.
            </p>
          </ListItem>
          <ListItem>
            <p className="ms-2 break-normal hyphens-auto" lang="en">
              Enhanced the promotion management system by refining business
              logic for promotions. For example, implemented new feature that
              allows retailers to earn points if their orders meet specific
              conditions of promotion.
            </p>
          </ListItem>
          <ListItem>
            <p className="ms-2 break-normal hyphens-auto" lang="en">
              Implemented the coupon management feature on server-side
              application, consisting of handling coupons data and calculating
              discounts when retailers applied coupon.
            </p>
          </ListItem>
          <ListItem>
            <p className="ms-2 break-normal hyphens-auto" lang="en">
              Created a user role and permission system on DMS back-office
              website for managing user access to features of each role.
            </p>
          </ListItem>
          <ListItem>
            <p className="ms-2 break-normal hyphens-auto" lang="en">
              Documenting features to describe their design, contributing
              readability, consistency and maintainability to others in team.
            </p>
          </ListItem>
        </ul>
      </ExperienceContainer>
      <ExperienceContainer
        className="mt-8 mx-4"
        position="Cooperative Operation Student"
        period="November 2023 - March 2024"
      >
        <ul className="max-md:text-sm mt-3 list-disc mx-10 break-all">
          <ListItem>
            <p className="ms-2 break-normal hyphens-auto" lang="en">
              Assisted senior engineers to create new features for
              <text className=""> Web Ordering </text>
              such as shopping cart and promotion.
            </p>
          </ListItem>
          <ListItem>
            <p className="ms-2 break-normal hyphens-auto" lang="en">
              Worked with team to developed the business logic for calculating
              promotions when order is created, consisting of discounting on
              each product and giving free products.
            </p>
          </ListItem>
          <ListItem>
            <p className="ms-2 break-normal hyphens-auto" lang="en">
              Ensured code functionality by utilizing Ginkgo for integration
              test on back-end application and perform web automation test on
              DMS back-office website along with Jest library.
            </p>
          </ListItem>
        </ul>
      </ExperienceContainer> */}
    </div>
  );
};

export { ExperienceBody };
