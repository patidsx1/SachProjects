import { Injectable } from '@angular/core';

@Injectable()
export class TimeTrackerService {
  private dataKey = 'tasklist';

  getData(): any {
    const data: any = localStorage.getItem(this.dataKey);
    if (data) return JSON.parse(data);
    return [];
  }

  setData(data: any): void {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(this.dataKey, jsonData);
  }

  clearData(): void {
    localStorage.removeItem(this.dataKey);
  }
}
