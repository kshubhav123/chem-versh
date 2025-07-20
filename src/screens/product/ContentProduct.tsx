import React, { useEffect, useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import FadeInSection from "../../components/FadeInSection";

countries.registerLocale(enLocale);

const EfficientWaterReducer = ({ Details }) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    if (!Details?.countries || !Array.isArray(Details.countries)) {
      setCountryList([]);
      return;
    }

    const mapped = Details.countries.map((countryName) => {
      if (countryName.trim().toLowerCase() === "local") {
        return { name: "Local", iso2: "in" }; // Use India flag for "Local"
      }

      const codeUpper = countries.getAlpha2Code(countryName.trim(), "en");
      return {
        name: countryName,
        iso2: codeUpper ? codeUpper.toLowerCase() : null,
      };
    });

    setCountryList(mapped);
  }, [Details?.countries]);

  return (
    <section className="p-4 lg:mt-12 lg:p-12">
      {/* Title */}
      <FadeInSection>
        <h2 className="text-3xl font-bold mb-4 lg:mb-12">
          {Details?.longTitle}
        </h2>
      </FadeInSection>

      <FadeInSection className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 space-y-8">
          {/* Imported From */}
          <div>
            <h3 className="text-[1.1rem] font-semibold text-[#5683AD] mb-4">
              Imported From
            </h3>
            <div className="flex flex-wrap gap-4">
              {countryList.length > 0 ? (
                countryList.map(({ name, iso2 }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 min-w-[140px]"
                  >
                    {iso2 ? (
                      <img
                        src={`https://flagcdn.com/w40/${iso2}.png`}
                        alt={name}
                        className="h-5 object-cover rounded border border-gray-300"
                      />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-gray-300 border border-gray-300" />
                    )}
                    <span className="text-base text-gray-800">{name}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No countries provided.</p>
              )}
            </div>
          </div>

          {/* Major Industries */}
          <div>
            <h3 className="text-[1.1rem] font-semibold text-[#5683AD] mb-4">
              Major Industries
            </h3>
            <div className="flex flex-wrap gap-3">
              {Details?.majorIndustries.map((industry) => (
                <span
                  key={industry}
                  className="inline-block border border-blue-300 rounded-[10px] px-4 py-2 text-sm text-[#5683AD]"
                >
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#5683AD] mr-2"></span>
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-2/3 space-y-6 whitespace-pre-line text-[18px]">
          {Details?.longDescription}
        </div>
      </FadeInSection>
    </section>
  );
};

export default EfficientWaterReducer;
