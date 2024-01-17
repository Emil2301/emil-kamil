import React from 'react';

import type { Project } from 'types/languages';

import styles from './Project.module.scss';

interface ProjectProps {
  project: Project;
}

export const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
  return <div className={styles.projectName}>{project.name}</div>;
};
