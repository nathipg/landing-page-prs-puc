import { createContext, ReactNode, useState } from 'react';

import { StatusType, ToastType } from '../../types/toast';

interface createContextProps {
  toast: ToastType;
  showHandler: (msg: string, status: StatusType) => void;
  hideHandler: () => void;
}

interface ToastContextProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<createContextProps>({
  toast: {
    isVisible: false,
    msg: '',
    status: 'success',
  },
  showHandler: (msg: string, status: StatusType) => {},
  hideHandler: () => {},
});

export const ToastContextProvider = ({
  children,
}: ToastContextProviderProps) => {
  const [toast, setToast] = useState<ToastType>({
    isVisible: false,
    msg: '',
    status: 'success',
  });

  const showHandler = (msg: string, status: StatusType) => {
    setToast({
      isVisible: true,
      msg,
      status,
    });
  };

  const hideHandler = () => {
    setToast({
      isVisible: false,
      msg: '',
      status: 'success',
    });
  };

  return (
    <ToastContext.Provider value={{ toast, showHandler, hideHandler }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContext;
