import React from "react";

export default function Services() {
  return (
    <>
      <section
        className=" w-full py-24 
      "
      >
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl font-bold text-[#1F1F2E]">Service</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We offer youth with chances for career development in their
            practice. We also support a wide range of services to ensure client
            satisfaction.
          </p>
        </div>

        {/* GRID DE CARDS */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {/* CARD 1 */}
          <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-10 shadow-sm border border-white/40">
            <img
              src="/2.services/icon1.png"
              alt="Send Texts"
              className="w-20 mb-6"
            />
            <h3 className="text-xl font-semibold text-[#1F1F2E]">
              Send Texts Instantly
            </h3>
            <p className="text-gray-600 mt-3">
              Financial planning, forecasting and adjusting rapidly with
              customer demands and budgets.
            </p>
            <a
              href="#"
              className="text-[#4E7EFF] mt-6 inline-block font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-10 shadow-sm border border-white/40">
            <img
              src="/2.services/icon2.png"
              alt="Better Organized"
              className="w-20 mb-6"
            />
            <h3 className="text-xl font-semibold text-[#1F1F2E]">
              Better Organized
            </h3>
            <p className="text-gray-600 mt-3">
              Latest technology and experienced guidance, trained HR specialists
              to keep updated.
            </p>
            <p className="text-[#4E7EFF] mt-6 inline-block font-medium hover:underline">
              Learn More →
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-10 shadow-sm border border-white/40">
            <img
              src="/2.services/icon3.png"
              alt="Analytics"
              className="w-20 mb-6"
            />
            <h3 className="text-xl font-semibold text-[#1F1F2E]">
              Analytical Statistics
            </h3>
            <p className="text-gray-600 mt-3">
              Messages, real-time reminders, memos, and many more will keep your
              team in sync.
            </p>
            <a
              href="#"
              className="text-[#4E7EFF] mt-6 inline-block font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* <div>
          <img src="/2.services/service.png" alt="" />
        </div> */
}
