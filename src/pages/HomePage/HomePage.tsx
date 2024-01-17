import React from 'react';

import { ButtonLink } from './ButtonLink/ButtonLink';
import styles from './HomePage.module.scss';
import { LanguagesComponent } from './Languages/Languages';

export const HomePage: React.FC = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.textAndButtonsContainer}>
        <h1>HR Analytics</h1>
        <div className={styles.buttonContainer}>
          <ButtonLink to="/">Sign up</ButtonLink>
          <ButtonLink to="/">Sign in</ButtonLink>
        </div>
        <h5>We&apos;re looking for specialists in those technologies:</h5>
        <LanguagesComponent />
      </div>
    </main>
  );
};
