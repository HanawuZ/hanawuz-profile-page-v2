import { ExperienceContainer } from "./ExperienceContainer";
import ListItem from "@/components/Listing/ListItem";

const ExperienceBody = () => {
  return (
    <div className="h-90vh md:overflow-y-auto sm:px-8 max-sm:mt-6">
      <div
        className="grid md:grid-cols-5 lg:grid-cols-4 max-md:pb-20 "
        style={{
          zIndex: 100,
        }}
      >
        <div />
        <div className="justify-self-center md:col-span-4 lg:col-span-3 min-h-[96vh] md:pb-6">
          <div className="w-full flex justify-center">
            <text className="text-2xl text-center font-bold max-md:mt-5 mt-10 max-md:ms-3">
              EXPERIENCES
            </text>
          </div>
          <div className="mt-6">
            <ExperienceContainer
              className="mx-4"
              workplace="T.C.C. Technology Co. Ltd."
              location="Bangkok, Thailand"
              position="Application Developer Associate"
              period="March 2024 - Present"
            >
              <ul className="max-md:text-sm mt-3 list-disc mx-10 break-all">
                <ListItem>
                  <p className="ms-2">
                    Maintained the Distribution Management System &#40;DMS&#41;,
                    a back-office website for managing distribution process such as 
                    sale order management, warehousing and inventory control. 
                    This system integrated with Web Ordering system to streamline retailers&apos; ordering processes.
                  </p>
                </ListItem>
                <ListItem>
                  <p className="ms-2">
                    Enhanced the promotion management system by refining business logic for promotions. 
                    For example, implemented new feature that allows retailers to earn points if 
                    their orders meet specific conditions of promotion. 
                  </p>
                </ListItem>
                <ListItem>
                  <p className="ms-2">
                    Implemented the coupon management feature on server-side application, 
                    consisting of handling coupons data 
                    and calculating discounts when retailers applied coupon.
                  </p>
                </ListItem>
                <ListItem>
                  <p className="ms-2">
                    Created a user role and permission system on DMS back-office website for managing user
                    access to features of each role.
                  </p>
                </ListItem>
                <ListItem>
                  <p className="ms-2">
                    Documenting features to describe their design,
                    contributing readability, consistency and maintainability to
                    others in team.
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
                  <p className="ms-2">
                    Assisted senior engineers to create new features for
                    <text className=""> Web Ordering </text>
                    such as shopping cart and promotion.
                  </p>
                </ListItem>
                <ListItem>
                  <p className="ms-2">
                    Work with team to developed the business logic for calculating promotions 
                    when order is created, consisting of discounting on each product
                    and giving free products.
                  </p>
                </ListItem>
                <ListItem>
                  <p className="ms-2">
                    Ensured code functionality by utilizing Ginkgo for
                    integration test on back-end application and perform web
                    automation test on DMS back-office website along with Jest
                    library.
                  </p>
                </ListItem>
              </ul>
            </ExperienceContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ExperienceBody };
