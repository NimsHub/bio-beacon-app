export interface Session {
  sessionId: string;
  deviceId: number;
  startDateTime: string;
  endDateTime: string;
  sessionDuration: number;
  complete: boolean;
  isFed: boolean
}
