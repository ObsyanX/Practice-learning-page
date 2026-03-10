import React from "react";
import { CheckCircle2, Dice1 } from "lucide-react";
const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex  flex-wrap">
        {pricingOptions.map((pricing, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {pricing.title}
                {pricing.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-4xl font-bold">{pricing.price}</span>
                <span className="text-sm text-neutral-500">/Month</span>
              </p>
              <ul>
                {pricing.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-4">
                    <CheckCircle2 className="text-green-400 mr-2" />
                    <span className="ml-2"> {feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight border border-orange-900 rounded-lg transition duration 200 hover:bg-orange-900 text-xl"
              >
                {" "}
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
