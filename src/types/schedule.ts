export type PeriodKey = 'morning' | 'afternoon' | 'night';

export interface Schedule {
  id: string;
  clientName: string;
  date: string; // formato YYYY-MM-DD
  time: string; // formato HH:mm
}

export interface PeriodInfo {
  key: PeriodKey;
  title: string;
  range: string;
  availableHours: string[];
}
