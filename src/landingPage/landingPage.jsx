import React, { useState, useEffect } from "react";
import JobCard from "../jobCard/jobCard";

const LandingPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://dev-example.sanbercloud.com/api/job-vacancy"
        );
        const data = await response.json();
        setJobs(data.data); 
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/thumbnails/010/075/448/small_2x/businessman-hand-use-computer-laptop-to-find-jobs-searching-for-job-with-minimalist-and-elegant-design-vector.jpg)",
          backgroundAttachment: "fixed", // parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white p-6 space-y-4">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg text-transparent bg-clip-text bg-yellow-500">
            {Array.from("Temukan Pekerjaan Impian Anda").map((char, index) => (
              <span
                key={index}
                className="inline-block border-b-2 border-yellow-500 animate-text"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className="text-lg mb-6 drop-shadow-md">
            Temukan pekerjaan yang sesuai dengan keterampilan dan minat anda.
            Mulai pencarian Anda sekarang!
          </p>
          <a
            href="#vacancy"
            className="bg-yellow-500 text-black py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Lihat Lowongan
          </a>
        </div>
      </section>

      {/* Vacancy Section */}
      <section id="vacancy" className="container mx-auto p-4 py-16">
        <h1 className="text-3xl font-bold mb-12 text-yellow-500 text-center">
          Lowongan Pekerjaan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black text-white py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 text-yellow-500">About Us</h1>
            <p className="text-lg leading-relaxed mb-4">
              Welcome to our job portal! Job portal ini dibuat untuk memenuhi tugas projek akhir dari bootcamp Sanbercode.
            </p>
            <p className="text-lg leading-relaxed">
              Apabila terdapat kekurangan dan kesalahan saya mohon maaf 
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://sanbercode.com/assets/img/identity/logo@2x.jpg"
              alt="about"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
