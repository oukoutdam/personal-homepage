import React from 'react'

export type ToolCardProps = {
    name: string;
    description: string;
    status: 'to-do' | 'in-progress' | 'brushing-up' | 'completed';
}

function ToolCard({tool} : {tool : ToolCardProps}) {
  return (
        <div className="mt-2 border border-neutral-200 dark:border-neutral-700 p-4 rounded-lg">
            <h2 className="text-lg font-bold">{tool.name}</h2>
            <p>{tool.description}</p>
            <p><strong>Status:</strong> {tool.status}</p>
        </div>
  )
}

export default ToolCard