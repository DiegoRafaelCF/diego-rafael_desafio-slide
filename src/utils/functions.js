export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        day: '2-digit',
        month: 'short',
        year: '2-digit'
    };
    const formattedDate = date.toLocaleDateString('pt-br', options).replaceAll('de ', '');

    return formattedDate
}