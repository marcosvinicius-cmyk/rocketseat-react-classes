import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import type { Schedule, PeriodKey } from '../types/schedule';

dayjs.locale('pt-br');

export function formatDateToBR(dateString: string): string {
  // dateString: YYYY-MM-DD
  return dayjs(dateString).format('DD/MM/YYYY');
}

export function getTodayDateString(): string {
  return dayjs().format('YYYY-MM-DD');
}

export function getPeriodFromHour(time: string): PeriodKey {
  const hour = parseInt(time.split(':')[0], 10);
  if (hour >= 9 && hour <= 12) {
    return 'morning';
  }
  if (hour >= 13 && hour <= 18) {
    return 'afternoon';
  }
  return 'night';
}

/**
 * Agrupa os agendamentos por período utilizando `reduce` conforme especificado no desafio.
 */
export function groupSchedulesByPeriod(schedules: Schedule[]): Record<PeriodKey, Schedule[]> {
  const initialGroups: Record<PeriodKey, Schedule[]> = {
    morning: [],
    afternoon: [],
    night: [],
  };

  const grouped = schedules.reduce((acc, schedule) => {
    const period = getPeriodFromHour(schedule.time);
    acc[period].push(schedule);
    return acc;
  }, initialGroups);

  // Ordena os agendamentos de cada período cronologicamente
  (Object.keys(grouped) as PeriodKey[]).forEach((key) => {
    grouped[key].sort((a, b) => a.time.localeCompare(b.time));
  });

  return grouped;
}
