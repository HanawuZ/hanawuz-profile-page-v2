import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useProfileContext } from "@/context/ProfileContext";
import acknowledgement from "@/constants/locales/acknowledgement";
import themes from "@/theme";
const AcknowledgementBody = () => {
  const { language, mode } = useProfileContext();

  return (
    <div>
      <div className="mt-3">
        <div className="grid p-5">
          <FaQuoteLeft color="#7e7e7e" size={20} />
          <p
            className="text-center text-md md:mx-14 break-normal hyphens-auto"
            style={{
              color: themes[mode].secondaryText,
            }}
          >
            🌟 {acknowledgement[language || "en"].detail} 😊
          </p>
          <div className="flex justify-end">
            <FaQuoteRight color="#7e7e7e" size={20} />
          </div>
        </div>
      </div>
      <div
        className="w-full flex justify-end pt-4 pe-10 mb-8"
        style={{
          color: themes[mode].secondaryText,
        }}
      >
        <div className="text-center">
          <div className="text-lg"> Thanawut Tuamprajak </div>
          <text>{acknowledgement[language || "en"].sincely} </text>
        </div>
      </div>
    </div>
  );
};

export { AcknowledgementBody };
