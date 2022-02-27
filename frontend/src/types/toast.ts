export type StatusType = 'success' | 'error';

export interface ToastType {
  isVisible: boolean;
  msg: string;
  status: StatusType;
}
