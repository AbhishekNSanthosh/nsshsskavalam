import React from "react";

export default function CommitteeTable(props) {
  return (
    <div className="w-full">
      {/* For larger screens: Table view */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="items-center bg-transparent w-full border-collapse">
          <thead>
            <tr>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Name
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Designation
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Contact No.
              </th>
            </tr>
          </thead>

          <tbody>
            {props?.data?.map((detail, index) => (
              <tr key={`${detail?.name}_${index}`}>
                <th className="border-t-0 capitalize px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-blueGray-700 ">
                  {detail?.name}
                </th>
                <td className="border-t-0 px-6 capitalize align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 ">
                  {detail?.designation}
                </td>
                <td className="border-t-0 px-6 capitalize align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  +91 {detail?.mobNo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* For mobile view: Card-based layout */}
      <div className="block lg:hidden">
        {props?.data?.map((detail, index) => (
          <div
            key={`${detail?.name}_${index}`}
            className="flex flex-col gap-4 p-4 mb-4 bg-white shadow-md rounded-lg border border-gray-200"
          >
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-blueGray-700">{detail?.name}</span>
              <span className="text-sm text-blueGray-500">{detail?.designation}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base text-blueGray-600 font-sans">+91 {detail?.mobNo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
