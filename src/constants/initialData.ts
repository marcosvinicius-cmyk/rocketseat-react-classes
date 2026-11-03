import type { Schedule } from '../types/schedule';
import { getTodayDateString } from '../utils/date';

const today = getTodayDateString();

export const INITIAL_SCHEDULES: Schedule[] = [
  {
    id: '1',
    clientName: 'Ryan Dorwart',
    date: today,
    time: '11:00',
  },
  {
    id: '2',
    clientName: 'Livia Curtis',
    date: today,
    time: '13:00',
  },
  {
    id: '3',
    clientName: 'Randy Calzoni',
    date: today,
    time: '14:00',
  },
  {
    id: '4',
    clientName: 'Marley Franci',
    date: today,
    time: '16:00',
  },
  {
    id: '5',
    clientName: 'Jaylon Korsgaard',
    date: today,
    time: '17:00',
  },
  {
    id: '6',
    clientName: 'Maria Herwitz',
    date: today,
    time: '21:00',
  },
];
