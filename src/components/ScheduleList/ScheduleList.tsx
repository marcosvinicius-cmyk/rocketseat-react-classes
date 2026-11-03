import React, { useRef } from 'react';
import { CalendarBlank, CaretDown } from '@phosphor-icons/react';
import { PERIODS } from '../../constants/periods';
import type { Schedule, PeriodKey } from '../../types/schedule';
import { formatDateToBR, groupSchedulesByPeriod } from '../../utils/date';
import { PeriodSection } from './PeriodSection';
import styles from './ScheduleList.module.css';

interface ScheduleListProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
  schedules: Schedule[];
  onRemoveSchedule: (id: string) => void;
}

export const ScheduleList: React.FC<ScheduleListProps> = ({
  selectedDate,
  onDateChange,
  schedules,
  onRemoveSchedule,
}) => {
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleOpenDatePicker = () => {
    if (dateInputRef.current) {
      if ('showPicker' in HTMLInputElement.prototype) {
        try {
          dateInputRef.current.showPicker();
        } catch {
          dateInputRef.current.focus();
        }
      } else {
        dateInputRef.current.focus();
      }
    }
  };

  // Filtra agendamentos apenas para a data selecionada usando filter
  const dateSchedules = schedules.filter(
    (schedule) => schedule.date === selectedDate
  );

  // Agrupa os agendamentos usando reduce
  const groupedSchedules: Record<PeriodKey, Schedule[]> =
    groupSchedulesByPeriod(dateSchedules);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerInfo}>
          <h1 className={styles.headerTitle}>Sua agenda</h1>
          <p className={styles.headerSubtitle}>
            Consulte os seus cortes de cabelo agendados por dia
          </p>
        </div>

        {/* Date Selector no cabeçalho da Agenda */}
        <div
          className={styles.headerDateSelector}
          onClick={handleOpenDatePicker}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleOpenDatePicker();
            }
          }}
        >
          <CalendarBlank size={20} weight="bold" className={styles.dateSelectorIcon} />
          <span className={styles.dateSelectorValue}>
            {formatDateToBR(selectedDate)}
          </span>
          <CaretDown size={16} weight="bold" className={styles.dateSelectorCaret} />
          <input
            ref={dateInputRef}
            type="date"
            className={styles.headerHiddenDateInput}
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
          />
        </div>
      </header>

      <div className={styles.periodsList}>
        {PERIODS.map((period) => (
          <PeriodSection
            key={period.key}
            period={period}
            schedules={groupedSchedules[period.key]}
            onRemoveSchedule={onRemoveSchedule}
          />
        ))}
      </div>
    </main>
  );
};
