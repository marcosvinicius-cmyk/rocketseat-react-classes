import React from 'react';
import { Scissors } from '@phosphor-icons/react';
import styles from './HeaderLogo.module.css';

export const HeaderLogo: React.FC = () => {
  return (
    <div className={styles.logoBadge}>
      <span className={styles.brandName}>HairDay</span>
      <Scissors size={18} weight="bold" className={styles.brandIcon} />
    </div>
  );
};
