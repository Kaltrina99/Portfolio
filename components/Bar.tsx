import React, { FunctionComponent } from 'react'
import { ISkill } from '../type'

const Bar :FunctionComponent<{data:ISkill}> = ({data:{Icon,level,name}}) => {
  return (
    <div className='my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300'>
<div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-yellowCS"
style={{width:level}}>
    <Icon className='mr-3'/>
    {name}
</div>


    </div>
  )
}

export default Bar