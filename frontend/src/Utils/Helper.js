export const secondsToTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${hours ? hours + ' час' : ''} ${minutes ? minutes + ' мин.' : ''} ${formattedSeconds ? formattedSeconds + ' сек.' : ''} `;
}