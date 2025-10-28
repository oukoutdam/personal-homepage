import React from 'react';

export type ProjectCardProps = {
  name: string;
  description: string;
  status: 'to-do' | 'in-progress' | 'brushing-up' | 'completed';
  link: string;
};

function ProjectCard({ Project }: { Project: ProjectCardProps }) {
  return (
    <a href={Project.link} target='_blank'>
      <div className='mt-3 rounded-lg border border-neutral-200 p-4 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-600'>
        <h2 className='text-lg font-bold'>{Project.name}</h2>
        <p>{Project.description}</p>
        <p>
          <strong>Status:</strong> {Project.status}
        </p>
      </div>
    </a>
  );
}

export default ProjectCard;
