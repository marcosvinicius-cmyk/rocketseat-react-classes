import React from 'react';
import { SunHorizon, CloudSun, MoonStars } from '@phosphor-icons/react';
import type { PeriodInfo, Schedule } from '../../types/schedule';
import { ScheduleItem } from './ScheduleItem';
import styles from './ScheduleList.module.css';

interface PeriodSectionProps {
  period: PeriodInfo;
  schedules: Schedule[];
  onRemoveSchedule: (id: string) => void;
}

export const PeriodSection: React.FC<PeriodSectionProps> = ({
  period,
  schedules,
  onRemoveSchedule,
}) => {
  const renderPeriodIcon = () => {
    switch (period.key) {
      case 'morning':
        return <SunHorizon size={22} weight="bold" className={styles.periodHeaderIcon} />;
      case 'afternoon':
        return <CloudSun size={22} weight="bold" className={styles.periodHeaderIcon} />;
      case 'night':
        return <MoonStars size={22} weight="bold" className={styles.periodHeaderIcon} />;
    }
  };

  const hasSchedules = schedules.length > 0;

  return (
    <section className={styles.periodCard}>
      <header className={styles.periodHeader}>
        <div className={styles.periodTitleWrapper}>
          {renderPeriodIcon()}
          <h3 className={styles.periodTitleText}>{period.title}</h3>
        </div>
        <span className={styles.periodRange}>{period.range}</span>
      </header>

      <div className={styles.periodContent}>
        {hasSchedules ? (
          <div className={styles.scheduleList}>
            {schedules.map((schedule) => (
              <ScheduleItem
                key={schedule.id}
                schedule={schedule}
                onRemove={onRemoveSchedule}
              />
            ))}
          </div>
        ) : (
          <p className={styles.emptyMessage}>
            Você ainda não tem agendamentos cadastrados nesse período.
          </p>
        )}
      </div>
    </section>
  );
};
