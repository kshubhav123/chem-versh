import React, { useState } from "react";
import { Building2, Home } from "lucide-react";

// Simple FadeInSection component that forwards props to a div
const FadeInSection = ({ children, className, onClick, ...rest }) => (
  <div className={className} onClick={onClick} {...rest}>
    {children}
  </div>
);

// Location data
const locations = [
  {
    id: "office",
    title: "Office",
    description:
      "209, 2nd Floor, Conwood Paragon, Walbhat Rd, Cama Industrial Estate, Goregaon, Mumbai, Maharashtra 400063",
    hasDirections:
      "https://www.google.com/maps/place/Supercon+Chemicals+Pvt+Ltd/@19.1570595,72.856362,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7b792958b23:0x8570a59c77477592!8m2!3d19.1570595!4d72.856362!16s%2Fg%2F11krfhc26r?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D",
    embedUrl: "https://www.google.com/maps?q=19.1570595,72.856362&output=embed",
    icon: <Building2 size={20} />,
  },
  {
    id: "warehouse",
    title: "Warehouse",
    description: [
      "Sri Ram Logistics",
      "Godown No. 6, 2nd Line, Dropadichhaya Compound",
      "Behind Choudhary Compound, Near Anpurna Hotel",
      "Purna Village, Bhiwandi - 421302",
    ],
    hasDirections:
      "https://www.google.co.in/maps/place/Sri+Ram+Logistics/@19.2592983,73.0313917,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7bd3cfe0ee779:0xe95a053604ae8b60!8m2!3d19.2592983!4d73.0313917!16s%2Fg%2F11j7f00tqh?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D",
    embedUrl:
      "https://www.google.com/maps?q=19.2592983,73.0313917&output=embed",
    icon: <Home size={20} />,
  },
];

// Main MapWithAddress component
export default function MapWithAddress() {
  const [selected, setSelected] = useState(locations[0].id);
  const activeLocation = locations.find((loc) => loc.id === selected);

  return (
    <div className="px-4 md:p-12 flex flex-col md:flex-row gap-24 custom-map-section">
      {/* Left side: Address cards */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-12">Address:</h2>
        {locations.map((loc) => (
          <FadeInSection
            key={loc.id}
            className={`flex flex-col gap-4 p-4 cursor-pointer transition ease-in-out duration-200 ${
              selected === loc.id
                ? "bg-[#EEF3F7]"
                : "bg-white hover:bg-[#DBEEFF]"
            }`}
            onClick={() => setSelected(loc.id)}
          >
            <div className="text-gray-700">{loc.icon}</div>
            <h3 className="text-xl font-semibold opacity-80">{loc.title}</h3>
            {Array.isArray(loc.description) ? (
              <div className="flex flex-col gap-1">
                {loc.description.map((line, idx) => (
                  <p key={idx} className="text-base opacity-80">
                    {line}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-base opacity-80">{loc.description}</p>
            )}
            {loc.hasDirections && (
              <a
                href={loc.hasDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-base"
              >
                Get Directions
              </a>
            )}
          </FadeInSection>
        ))}
      </div>

      {/* Right side: Embedded map */}
      <div className="w-full md:w-2/3 rounded-[30px] overflow-hidden">
        <iframe
          title={activeLocation.title}
          src={activeLocation.embedUrl}
          className="w-full h-[600px] border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
