import { labStaff, teachingStaffDetails } from "@utils/utils";
import TitleBar from "@widgets/Common/TitleBar";
import React from "react";

export default function Content() {
  return (
    <div className="px-5vw py-8">
      <div className="flex flex-col gap-8">
        <TitleBar title={"Staff"} />
        <div className="flex">
          <p className="text-lg">
            The teaching faculty of NSSPS forms a tremendous task force
            comprising of around 50. <br />
            <br /> They are highly qualified and well-equipped to handle their
            respective classes. Every year, faculty improvement programmes are
            arranged in order to make the teachers aware of the developments
            occurring in the field of education and to keep them abreast of the
            advances in the field of educational technology. <br />
            <br /> Our school has various clubs functioning under the able
            guidance of the teachers. The students and teachers work together to
            make the Cultural Fest, Sports Meet, Fun Streak and the Annual day
            programme a grand success. The smooth conduct of the daily
            activities is ensured by the non-teaching staffs who work
            round-the-clock with precision and meticulous care.
            <br />
            <br />
            The staff members function as a single unit to fulfill the mission
            of our school.
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center  mt-4">
          <div className="flex gap-8 w-[50vw] items-center justify-center">
            <div className="w-full flex-1 flex flex-col gap-6 items-center justify-center">
              {/* <span className="text-2xl text-primary font-semibold">
                 Staff
              </span> */}
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50  text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Designation
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {teachingStaffDetails?.map((detail, index) => (
                    <tr key={`${detail?.name}_${index}`}>
                      <th className="border-t-0 capitalize px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {detail?.name}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 ">
                        {detail?.designation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
