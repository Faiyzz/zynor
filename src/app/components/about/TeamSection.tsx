"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Aisha Khan",
    role: "Project Manager",
    image: "/team/aisha.jpg",
  },
  {
    name: "Ahmed Raza",
    role: "Lead Developer",
    image: "/team/ahmed.jpg",
  },
  {
    name: "Sara Malik",
    role: "UI/UX Designer",
    image: "/team/sara.jpg",
  },
    {
    name: "Aisha Khan",
    role: "Project Manager",
    image: "/team/aisha.jpg",
  },
  {
    name: "Ahmed Raza",
    role: "Lead Developer",
    image: "/team/ahmed.jpg",
  },
  {
    name: "Sara Malik",
    role: "UI/UX Designer",
    image: "/team/sara.jpg",
  },
    {
    name: "Aisha Khan",
    role: "Project Manager",
    image: "/team/aisha.jpg",
  },
  {
    name: "Ahmed Raza",
    role: "Lead Developer",
    image: "/team/ahmed.jpg",
  },
  {
    name: "Sara Malik",
    role: "UI/UX Designer",
    image: "/team/sara.jpg",
  },  {
    name: "Aisha Khan",
    role: "Project Manager",
    image: "/team/aisha.jpg",
  },
  {
    name: "Ahmed Raza",
    role: "Lead Developer",
    image: "/team/ahmed.jpg",
  },
  {
    name: "Sara Malik",
    role: "UI/UX Designer",
    image: "/team/sara.jpg",
  },
  // ➕ Add more team members here
];

export default function TeamSection() {
  return (
    <section className="w-full py-20 bg-gray-50 text-center px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-10">
          Our <span className="text-indigo-600">Team</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative w-full h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="py-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
