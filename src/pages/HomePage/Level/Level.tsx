import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import type { Level } from 'types/languages';

import { ProjectComponent } from '../Project/Project';

import styles from './Level.module.scss';

interface LevelProps {
  level: Level;
}

export const LevelComponent: React.FC<LevelProps> = ({ level }) => {
  const [showChildren, setShowChildren] = useState(false);
  const changeShowChildrenState = () => {
    setShowChildren(!showChildren);
  };
  return (
    <>
      <div
        role="presentation"
        onClick={changeShowChildrenState}
        onKeyDown={changeShowChildrenState}
        className={styles.levelContainer}
      >
        <div className={styles.levelName}>{level.name}</div>
        {level.projects &&
          (showChildren ? <IoIosArrowUp /> : <IoIosArrowDown />)}
      </div>
      {showChildren &&
        level.projects &&
        level.projects.map((project) => {
          return <ProjectComponent project={project} key={project.name} />;
        })}
    </>
  );
};
