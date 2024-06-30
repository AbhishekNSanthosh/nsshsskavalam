import TitleBar from '@widgets/Common/TitleBar'
import React from 'react'
import { DisciplinaryRules } from '../../common/Utils/utils'

export default function GeneralRules() {
  return (
    <div className='w-screen py-8 px-5vw'>
      <div className="flex flex-col gap-4">
        <TitleBar title={"Rules and Regulations"}/>
        <div className="">
          <p className="text-lg text-justify">We expect our students, their parents / guardians and the family members concerned to co-operate with us to maintain discipline in the school. We believe that no disciplinary action needs to be taken against any child,but indiscipline should be nipped in the bud. Therefore, pay attention to the following disciplinary rules.</p>
        </div>
        <div className="">
          <span className="text-2xl font-semibold text-primary">DISCIPLINARY RULES</span>
        </div>
        <div className="w-full flex flex-col gap-1">
          {DisciplinaryRules?.map((rule,index)=>(
            <div className="w-full" key={`${rule}_${index}`}>
              <p className="text-lg">{index+1}.{" "}{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
