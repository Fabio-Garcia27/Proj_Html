export const formatRelativeTime = (date: Date) => {

    const now = new Date();
    const diffInMilliseconds = now.getTime() - date.getTime();

    type Unit = {
        unit: Intl.RelativeTimeFormatUnit;
        milliseconds:number;
    }

    const units: Unit[] = [
        {unit: 'year', milliseconds: 1000 * 60 * 60 * 24 * 365},
        {unit: 'month', milliseconds: 1000 * 60 * 60 * 24 * 12},
        {unit: 'day', milliseconds: 1000 * 60 * 60 * 24},
        {unit: 'hour', milliseconds: 1000 * 60 * 60},
        {unit: 'minute', milliseconds: 1000 * 60},
        {unit: 'second', milliseconds: 1000},
    ]

    for (const { unit, milliseconds} of units) {
        const difference = diffInMilliseconds /milliseconds;
        if (Math.abs(difference) >= 1) {
            const rtf = new Intl.RelativeTimeFormat('pt-BR', {numeric: 'auto'});
            return rtf.format(Math.round(difference), unit);
        }
    }

    return 'agora';
}