import React from 'react';
import { Trash } from '@phosphor-icons/react';
import type { Schedule } from '../../types/schedule';
import styles from './ScheduleList.module.css';

interface ScheduleItemProps {
  schedule: Schedule;
  onRemove: (id: string) => void;
}

export const ScheduleItem: React.FC<ScheduleItemProps> = ({ schedule, onRemove }) => {
  return (
    <div className={styles.scheduleItem}>
      <span className={styles.scheduleTime}>{schedule.time}</span>
      <span className={styles.scheduleClient}>{schedule.clientName}</span>
      <button
        type="button"
        className={styles.removeButton}
        onClick={() => onRemove(schedule.id)}
        aria-label={`Remover agendamento de ${schedule.clientName}`}
        title="Remover agendamento"
      >
        <Trash size={20} weight="regular" className={styles.trashIcon} />
      </button>
    </div>
  );
};
