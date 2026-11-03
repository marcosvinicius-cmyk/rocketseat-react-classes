import { useState, useEffect } from 'react';
import type { Schedule } from './types/schedule';
import { INITIAL_SCHEDULES } from './constants/initialData';
import { getTodayDateString } from './utils/date';
import { HeaderLogo } from './components/HeaderLogo/HeaderLogo';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ScheduleList } from './components/ScheduleList/ScheduleList';
import styles from './App.module.css';

const STORAGE_KEY = '@hairday:schedules';

export function App() {
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    return getTodayDateString();
  });

  const [schedules, setSchedules] = useState<Schedule[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // caso o JSON esteja corrompido, utiliza os dados iniciais
    }
    return INITIAL_SCHEDULES;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(schedules));
    } catch (e) {
      console.error('Erro ao salvar no localStorage', e);
    }
  }, [schedules]);

  // Horários já ocupados na data selecionada
  const occupiedHours = schedules
    .filter((schedule) => schedule.date === selectedDate)
    .map((schedule) => schedule.time);

  // Adicionar novo agendamento
  const handleAddSchedule = (data: {
    clientName: string;
    date: string;
    time: string;
  }) => {
    const newSchedule: Schedule = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      clientName: data.clientName,
      date: data.date,
      time: data.time,
    };

    setSchedules((prev) => [...prev, newSchedule]);
  };

  // Remover agendamento pelo ID
  const handleRemoveSchedule = (id: string) => {
    setSchedules((prev) => prev.filter((schedule) => schedule.id !== id));
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.layoutWrapper}>
        <div className={styles.topLogoArea}>
          <HeaderLogo />
        </div>

        <div className={styles.contentWrapper}>
          <Sidebar
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            occupiedHours={occupiedHours}
            onAddSchedule={handleAddSchedule}
          />

          <ScheduleList
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            schedules={schedules}
            onRemoveSchedule={handleRemoveSchedule}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
