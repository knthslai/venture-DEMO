import { createContext, PropsWithChildren, useState } from 'react';

export const DialogContext = createContext({
  messages: [''],
  idx: 0,
  setIdx: (num) => {},
  setMessages: (_value: any[]) => {},
  clearMessages: (_value: string) => {}
});

export default function DialogContextProvider({
  children
}: PropsWithChildren<{}>) {
  const [messages, setMessages] = useState<any[]>([
    'Welcome traveler!',
    'Select your character to get started'
  ]);
  const [idx, setIdx] = useState(0);
  const clearMessages = (newText) => {
    setIdx(0);
    setMessages([newText]);
  };
  return (
    <DialogContext.Provider
      value={{ messages, setMessages, clearMessages, idx, setIdx }}
    >
      {children}
    </DialogContext.Provider>
  );
}
