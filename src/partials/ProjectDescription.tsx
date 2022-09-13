import React from 'react';
import Projects, { ProjectsProps } from './Projects';

type ProjectDescriptionProps = ProjectsProps & {
  readonly description: string
};

function ProjectDescription(props: ProjectDescriptionProps) {
  const { description, sections } = props;

  return (
    <>
      <p>{description}</p>
      <br />
      <Projects sections={sections} />

      {/* eslint-disable-next-line react/jsx-closing-tag-location */}
    </>
  );
}

export default ProjectDescription;
