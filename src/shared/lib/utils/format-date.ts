export const formatDate = (value: Date | string) => {
  if (!value) return '-';

  const date = new Date(value);

  return new Intl.DateTimeFormat('pt-br', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};
