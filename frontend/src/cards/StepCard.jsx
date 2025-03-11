import React from 'react'

const StepCard = ({step}) => {
  return (
    <div className="flex gap-4 items-center p-6 px-8 border border-gray-300 justify-start rounded-md shadow">
          <img src={step.icon} alt="" className="h-full w-auto"/>
          <div className="flex flex-col">
            <h1 className="text-xl font-medium">{step.title}</h1>
            <p className="text-sm text-stone-500">"{step.description}"</p>
          </div>
        </div>
  )
}

export default StepCard
