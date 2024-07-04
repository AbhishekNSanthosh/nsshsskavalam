import TitleBar from '@widgets/Common/TitleBar'
import React from 'react'
import Committee from '@widgets/Committee/Components/Committee'
import { committee, managementCommittee } from '@utils/utils'

export default function Content() {
  return (
    <div className='flex px-5vw py-8 w-full'>
        <div className="flex flex-col gap-8 w-full">
            <TitleBar title={"Committe"}/>
            <div className="w-full items-center justify-center flex flex-col gap-6">
                <span className="text-xl font-semibold text-primary">SCHOOL MANAGEMENT COMMITTEE 2024-25</span>
                <div className="">
                    <Committee data={managementCommittee}/>
                </div>
            </div>
        </div>
    </div>
  )
}
