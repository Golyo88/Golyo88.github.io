import React from 'react';

export type ProjectsProps = {
  readonly sections: Array<{
    readonly title: string
    readonly technologies: Array<string>
  }>
};

function Projects(props: ProjectsProps) {
  const { sections } = props;
  return (
    <>
      <b>Technologies</b>
      {sections.map((technology) => (
        <div style={{ paddingLeft: '5%' }}>
          <h2>{technology.title}</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '5%' }}>
            {technology.technologies.map((name) => <li>{name}</li>)}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Projects;
