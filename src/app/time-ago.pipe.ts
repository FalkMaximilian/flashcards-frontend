import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {
    if (!value) {
      return '';
    }

    const now = new Date();
    const updatedAt = new Date(value);
    const diffInMs = now.getTime() - updatedAt.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);

    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;

    if (diffInSeconds < secondsInMinute) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < secondsInHour) {
      const minutes = Math.floor(diffInSeconds / secondsInMinute);
      return `${minutes} minutes ago`;
    } else if (diffInSeconds < secondsInDay) {
      const hours = Math.floor(diffInSeconds / secondsInHour);
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(diffInSeconds / secondsInDay);
      return `${days} days ago`;
    }
  }

}