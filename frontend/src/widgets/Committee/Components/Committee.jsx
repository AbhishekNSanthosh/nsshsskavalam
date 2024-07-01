import React from "react";

export default function (props) {
  return (
    <div>
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Name
            </th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Designation
            </th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Occupation
            </th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Contact No.
            </th>
          </tr>
        </thead>

        <tbody>
          {props?.data?.map((detail, index) => (
            <tr key={`${detail?.name}_${index}`}>
              <th class="border-t-0 capitalize px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-blueGray-700 ">
                {detail?.name}
              </th>
              <td class="border-t-0 px-6 capitalize align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 ">
                {detail?.designation}
              </td>
              <td class="border-t-0 px-6 capitalize align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {detail?.occupation}
              </td>
              <td class="border-t-0 px-6 capitalizek align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {detail?.contact}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
