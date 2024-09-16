import { ExperienceContainer } from "./ExperienceContainer";

const ExperienceBody = () => {
  return (
    <div className="h-90vh md:overflow-y-auto sm:px-8 max-sm:mt-6">
      <div
        className="grid md:grid-cols-5 lg:grid-cols-4 max-md:pb-20 pb-10"
        style={{
          zIndex: 100,
        }}
      >
        <div></div>
        <div className="grid justify-self-center md:col-span-4 lg:col-span-3">
          <text className="text-2xl font-bold sm:mt-10 max-md:ms-3">
            Experiences
          </text>
          <div className="">
            <ExperienceContainer
              className=""
              workplace="T.C.C. Technology Co. Ltd."
              location="Bangkok, Thailand"
              position="Application Development Associate"
              period="March 2024 - Now"
            >
              <ul className="max-md:text-sm mt-3 list-disc mx-10">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque tincidunt eleifend mauris ac tempus. Aliquam erat
                  volutpat.
                </li>
                <li>
                  Cras ac dolor sit amet libero congue mattis. In nec libero
                  mauris.
                </li>
                <li>
                  Donec sollicitudin risus non sagittis scelerisque. Nullam
                  lacinia faucibus facilisis. Aenean faucibus, eros vitae porta
                  accumsan, massa est porttitor est, id consequat justo sapien
                  nec massa. Fusce nisl tellus, vulputate sit amet mollis a,
                  molestie sed nunc. Aenean eu lectus orci. In finibus purus sed
                  lacus ultricies, sed tristique enim pretium.
                </li>
              </ul>
            </ExperienceContainer>
            <ExperienceContainer
              className="mt-4"
              position="Application Development Associate"
              period="March 2024 - Now"
            >
              <ul className="max-md:text-sm mt-3 list-disc mx-10">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque tincidunt eleifend mauris ac tempus. Aliquam erat
                  volutpat.
                </li>
                <li>
                  Cras ac dolor sit amet libero congue mattis. In nec libero
                  mauris.
                </li>
                <li>
                  Donec sollicitudin risus non sagittis scelerisque. Nullam
                  lacinia faucibus facilisis. Aenean faucibus, eros vitae porta
                  accumsan, massa est porttitor est, id consequat justo sapien
                  nec massa. Fusce nisl tellus, vulputate sit amet mollis a,
                  molestie sed nunc. Aenean eu lectus orci. In finibus purus sed
                  lacus ultricies, sed tristique enim pretium.
                </li>
              </ul>
            </ExperienceContainer>
            <ExperienceContainer
              className="mt-10"
              workplace="T.C.C. Technology Co. Ltd."
              location="Bangkok, Thailand"
              position="Application Development Associate"
              period="March 2024 - Now"
            >
              <ul className="max-md:text-sm mt-3 list-disc mx-10">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque tincidunt eleifend mauris ac tempus. Aliquam erat
                  volutpat.
                </li>
                <li>
                  Cras ac dolor sit amet libero congue mattis. In nec libero
                  mauris.
                </li>
                <li>
                  Donec sollicitudin risus non sagittis scelerisque. Nullam
                  lacinia faucibus facilisis. Aenean faucibus, eros vitae porta
                  accumsan, massa est porttitor est, id consequat justo sapien
                  nec massa. Fusce nisl tellus, vulputate sit amet mollis a,
                  molestie sed nunc. Aenean eu lectus orci. In finibus purus sed
                  lacus ultricies, sed tristique enim pretium.
                </li>
              </ul>
            </ExperienceContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ExperienceBody };
