export interface TimeTracker {
  task: string;
  buttonText: string;
  timer: string;
  history: Array<TaskHistory>;
  interval: any;
}

export class TimeTracker implements TimeTracker {
  task: string;
  buttonText: string;
  timer: string;
  history: Array<TaskHistory>;
  interval: any;
  constructor(d: any = {}) {
    this.task = d.task;
    this.buttonText = d.buttontext || 'Start';
    this.timer = d.timer || '00:00:00';
    this.history = d.history || [];
    this.interval = d.interval || null;
  }
}
export interface TaskHistory {
  startDateAndTime: string;
  stopDateAndTime: string;
}

export class TaskHistory implements TaskHistory {
  startDateAndTime: string;
  stopDateAndTime: string;
  constructor(d: any = {}) {
    this.startDateAndTime = d.startDateAndTime || null;
    this.stopDateAndTime = d.stopDateAndTime || null;
  }
}
