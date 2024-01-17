import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ButtonLink.module.scss';

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className={styles.buttonLink}>
      {children}
    </Link>
  );
};
