import React from "react";

export default function Home() {
  return (
    <>
      (
      <section className=" flex flex-col justify-center ">
        <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-indigo-600 leading-tight">
              Bootstrap 5 theme
            </h1>

            <p className="mt-2 text-2xl font-semibold text-gray-700">
              crafted by <span className="font-bold text-gray-600">public</span>
            </p>

            <p className="mt-4 text-gray-600 max-w-md">
              public offers a wide array of category-oriented free and premium
              Bootstrap HTML templates and themes.
            </p>

            <button className="mt-6 px-6 py-3 rounded-xl bg-indigo-600 text-white shadow-md hover:opacity-90 transition">
              Check Demo
            </button>
          </div>

          {/* IMAGEN HERO */}
          <div className="flex justify-center">
            <img
              src="/1.home/illustration1.png"
              alt="Hero Illustration"
              className="w-full max-w-xl"
            />
          </div>
        </div>

        {/* LOGOS */}
        <div className="flex justify-center gap-10 opacity-60 mt-10 flex-wrap">
          <img src="/1.home/google.png" className="h-10" alt="Google" />
          <img src="/1.home/netflix.png" className="h-10" alt="Netflix" />
          <img src="/1.home/microsoft.png" className="h-10" alt="Microsoft" />
          <img
            src="/1.home/mailbuster.png"
            className="h-10"
            alt="Mailbluster"
          />
          <img src="/1.home/themewagon.png" className="h-10" alt="public" />
        </div>
      </section>
      );
    </>
  );
}
