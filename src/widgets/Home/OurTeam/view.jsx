import TitleBar from "@widgets/Common/TitleBar";
import Image from "next/image";
import React from "react";

export default function OurTeam() {
  const teamMembers = [
    {
      title: "Principal's Message",
      name: "Smt. Jyothilekshmi",
      position: "Principal",
      image: "/heads/jyothitr.jpeg",
      message:
        "Dear Parents,\nWelcome to NSS Higher Secondary School, Kavalam, where we shape young minds and nurture their potential. Our education goes beyond knowledge, focusing on values, critical thinking, and responsibility to prepare students for the future. With a dedicated team of teachers, we create an inspiring, student-centered environment. Blending traditional values with modern practices, we develop well-rounded individuals equipped for success. We encourage excellence in academics, extracurriculars, sports, and community service. Together with parents, teachers, and the community, we continue this journey of learning and success.",
    },
    {
      title: "Headmistress's Message",
      name: "Smt. Priya C Nair",
      position: "Headmistress",
      image: "/heads/priyatr.jpeg",
      message:
        "Dear Parents,\nIt is with great pleasure that I welcome you to NSS HSS Kavalam. As the Headmistress, I am honored to lead a school with a commitment to nurturing the minds and hearts of our students. We encourage students to explore their interests, develop their talents, and engage in activities that foster a love of learning. To our students, I encourage you to embrace every opportunity to learn, grow, and challenge yourselves. Your dedication, curiosity, and hard work are the cornerstones of your success, and we are here to support you every step of the way. To our parents, thank you for your continued partnership and trust in us. Together, we will make this a remarkable year of learning and achievement.",
    },
  ];

  return (
    <div className="flex-1 flex flex-col gap-8 px-[5vw] py-[3rem]">
      <div className="w-full text-center mb-8">
      <TitleBar title={"Our Team"} />
      </div>

      {/* Team Member Section */}
      <div className="flex md:flex-row md:space-x-[10vw] flex-col">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex-col flex flex-1 items-center justify-center border p-3 rounded-lg">
            <div>
              <h2 className="text-lg font-medium mb-2">{member.title}</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-5 mb-5">
                <Image
                  className="object-cover h-[300px]  rounded-full"
                  src={member.image}
                  height={300}
                  width={300}
                  alt={`${member.position} - ${member.name}`}
                />
                <div className="mt-4 text-center">
                  <span className="text-xl font-semibold">{member.name}</span>
                  <p>{member.position}</p>
                </div>
              </div>

              {/* Message Section */}
              <div className="">
                {member.message.split("\n").map((line, idx) => (
                  <p key={idx} className="leading-relaxed text-justify mb-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
