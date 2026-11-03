import React, { useState, useRef } from 'react';
import { CalendarBlank, CaretDown, User } from '@phosphor-icons/react';
import { PERIODS } from '../../constants/periods';
import { formatDateToBR } from '../../utils/date';
import styles from './Sidebar.module.css';

interface SidebarProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
  occupiedHours: string[];
  onAddSchedule: (schedule: { clientName: string; date: string; time: string }) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  selectedDate,
  onDateChange,
  occupiedHours,
  onAddSchedule,
}) => {
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
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

  const handleTimeSelect = (time: string) => {
    if (occupiedHours.includes(time)) return;
    setSelectedTime(time);
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate) {
      setErrorMessage('Por favor, selecione uma data.');
      return;
    }

    if (!selectedTime) {
      setErrorMessage('Por favor, selecione um horário para o agendamento.');
      return;
    }

    if (!clientName.trim()) {
      setErrorMessage('Por favor, informe o nome do cliente.');
      return;
    }

    if (occupiedHours.includes(selectedTime)) {
      setErrorMessage('Este horário já está ocupado nesta data.');
      return;
    }

    onAddSchedule({
      clientName: clientName.trim(),
      date: selectedDate,
      time: selectedTime,
    });

    // Reset formulário mantendo a data
    setSelectedTime('');
    setClientName('');
    setErrorMessage('');
  };

  const isSubmitDisabled = !selectedTime || !clientName.trim();

  return (
    <aside className={styles.sidebarCard}>
      <header className={styles.header}>
        <h2 className={styles.title}>Agende um atendimento</h2>
        <p className={styles.subtitle}>
          Selecione data, horário e informe o nome do cliente para criar o agendamento
        </p>
      </header>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Campo de Data */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Data</label>
          <div
            className={styles.dateInputWrapper}
            onClick={handleOpenDatePicker}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleOpenDatePicker();
              }
            }}
          >
            <CalendarBlank size={20} weight="bold" className={styles.inputIcon} />
            <span className={styles.dateDisplay}>{formatDateToBR(selectedDate)}</span>
            <CaretDown size={16} weight="bold" className={styles.caretIcon} />
            <input
              ref={dateInputRef}
              type="date"
              className={styles.hiddenDateInput}
              value={selectedDate}
              onChange={(e) => {
                onDateChange(e.target.value);
                setSelectedTime('');
                setErrorMessage('');
              }}
            />
          </div>
        </div>

        {/* Seção de Horários */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Horários</label>

          <div className={styles.periodsContainer}>
            {PERIODS.map((period) => (
              <div key={period.key} className={styles.periodGroup}>
                <span className={styles.periodTitle}>{period.title}</span>
                <div className={styles.hoursGrid}>
                  {period.availableHours.map((time) => {
                    const isOccupied = occupiedHours.includes(time);
                    const isSelected = selectedTime === time;

                    return (
                      <button
                        type="button"
                        key={time}
                        disabled={isOccupied}
                        onClick={() => handleTimeSelect(time)}
                        className={`
                          ${styles.timeButton}
                          ${isSelected ? styles.timeButtonSelected : ''}
                          ${isOccupied ? styles.timeButtonDisabled : ''}
                        `}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campo de Cliente */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Cliente</label>
          <div className={styles.textInputWrapper}>
            <User size={20} weight="bold" className={styles.inputIcon} />
            <input
              type="text"
              placeholder="Nome do cliente"
              value={clientName}
              onChange={(e) => {
                setClientName(e.target.value);
                setErrorMessage('');
              }}
              className={styles.textInput}
            />
          </div>
        </div>

        {errorMessage && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}

        {/* Botão de Agendar */}
        <button
          type="submit"
          disabled={isSubmitDisabled}
          className={`
            ${styles.submitButton}
            ${isSubmitDisabled ? styles.submitButtonDisabled : ''}
          `}
        >
          AGENDAR
        </button>
      </form>
    </aside>
  );
};
