import { CircleCheck } from "lucide-react"; // Import the Check icon from Lucide React
import FadeInSection from "../../components/FadeInSection";

const MissionVision = () => {
  const visionPoints = [
    {
      title: "Optimized Cost, Assured Value",
      description:
        "We consistently offer industry-leading prices without compromising on service — made possible through strong sourcing networks & procurement processes.",
    },
    {
      title: "On-Time Delivery",
      description:
        "Our robust logistics and PAN-India supply chain ensure that your materials arrive exactly when needed, reducing downtime and project delays.",
    },
    {
      title: "Quality Without Compromise",
      description:
        "Every product goes through stringent quality checks, with sourcing only from certified, reliable suppliers — ensuring consistency, performance, and compliance.",
    },
  ];

  return (
    <div className="p-4 sm:p-8 md:p-12 bg-[#5683AD1A] mt-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Heading and Paragraphs */}
        <FadeInSection className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Our Mission & Vision
          </h1>
          <div className="mt-6 md:mt-12 space-y-4 relative">
            <div className="absolute left-0 w-1 h-[50%] bg-primary"></div>{" "}
            {/* Vertical line starting from paragraph */}
            <div className="pl-4 gap-12 flex flex-col">
              <p className="text-sm sm:text-base md:text-lg font-normal">
                At Supercon Chemicals, our mission is to become a preferred
                partner in industrial chemicals by aligning with our clients’
                goals and ensuring quality at every step. We envision a future
                where our growth is shared — with customers, suppliers, and the
                industries we serve.
              </p>
            </div>
          </div>
        </FadeInSection>
        {/* Right Section: Vision Points */}
        <FadeInSection className="flex-1 space-y-4">
          {visionPoints.map((visionPoint, index) => (
            <div
              key={index}
              className="vi sion-point bg-[#ffffff] p-4 rounded-lg shadow-md flex items-start gap-4 border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-2"
              style={{ perspective: "1000px" }}
            >
              <div className="p-7 bg-[#5683AD] rounded-[1rem] flex items-center justify-center custom-space-head">
                <CircleCheck className="w-12 h-12 text-[1rem] text-[#ffffff]" />
              </div>
              <div className="gap-4 flex flex-col">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                  {visionPoint.title}
                </h3>
                <p className="text-sm sm:text-base md:text-[1rem]   ">
                  {visionPoint.description}
                </p>
              </div>
            </div>
          ))}
        </FadeInSection>
      </div>
    </div>
  );
};

export default MissionVision;
