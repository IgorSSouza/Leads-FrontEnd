export const formatDate = (dateString: Date): string => {
    const date = new Date(dateString);
  
    const monthNames: string[] = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    const month: string = monthNames[date.getMonth()];
  
    const day: number = date.getDate();
  
    let hours: number = date.getHours();
    const minutes: number = date.getMinutes();
  
    const amPm: string = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
  
    const formattedDate: string = `${month} ${day} @ ${hours}:${minutes.toString().padStart(2, '0')} ${amPm}`;
  
    return formattedDate;
  };