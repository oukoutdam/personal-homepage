import React from 'react'

export type ToolCardProps = {
    name: string;
    description: string;
    status: 'to-do' | 'in-progress' | 'brushing-up' | 'completed';
    link: string;
}

function ToolCard({tool} : {tool : ToolCardProps}) {
  return (
        <a href={tool.link} target='_blank'>
            <div className="mt-3 border hover:bg-neutral-100 border-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-600 p-4 rounded-lg">
                <h2 className="text-lg font-bold">{tool.name}</h2>
                <p>{tool.description}</p>
                <p><strong>Status:</strong> {tool.status}</p>
            </div>
        </a>
  )
}

export default ToolCard