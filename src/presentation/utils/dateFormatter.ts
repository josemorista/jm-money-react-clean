const intlDateFormatter = new Intl.DateTimeFormat('pt-BR');

export const dateFormatter = (date: Date): string => intlDateFormatter.format(date);