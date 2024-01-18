import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import type { Language } from 'types/languages';

import { FrameworkComponent } from '../Framework/Framework';

import styles from './Language.module.scss';

interface LanguageProps {
  language: Language;
}

export const LanguageComponent: React.FC<LanguageProps> = ({ language }) => {
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
        className={styles.languageContainer}
      >
        {language.name}
        {language.frameworks &&
          (showChildren ? <IoIosArrowUp /> : <IoIosArrowDown />)}
      </div>
      {showChildren &&
        language.frameworks &&
        language.frameworks.map((framework) => {
          return (
            <FrameworkComponent framework={framework} key={framework.name} />
          );
        })}
    </>
  );
};
