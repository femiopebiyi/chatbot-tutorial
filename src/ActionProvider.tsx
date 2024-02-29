import React, { ReactNode } from 'react';

interface ActionProviderProps {
  createChatBotMessage: (message: string) => any; // Adjust the type according to your needs
  setState: React.Dispatch<React.SetStateAction<any>>; // Adjust the type according to your needs
  children: ReactNode;
}
interface Message {
  messages: string;
}

const ActionProvider: React.FC<ActionProviderProps> = ({ createChatBotMessage, setState, children }) => {

  const initialAction = ()=>{
    const message = createChatBotMessage("just type in your name")
    updateState(message)
  }

  const updateState = (message: string) => {

    setState((prev: Message) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          actions: {
            initialAction,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
