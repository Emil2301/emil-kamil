import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { GoGitBranch } from 'react-icons/go';

import type { Framework } from 'types/languages';

import { LevelComponent } from '../Level/Level';

import styles from './Framework.module.scss';

interface FrameworkProps {
  framework: Framework;
}

export const FrameworkComponent: React.FC<FrameworkProps> = ({ framework }) => {
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
        className={styles.frameworkContainer}
      >
        <div className={styles.iconAndFrameworkName}>
          <GoGitBranch /> {framework.name}
        </div>
        {framework.levels &&
          (showChildren ? <IoIosArrowUp /> : <IoIosArrowDown />)}
      </div>
      {showChildren &&
        framework.levels &&
        framework.levels.map((level) => {
          return <LevelComponent level={level} key={level.name} />;
        })}
    </>
  );
};
