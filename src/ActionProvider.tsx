
import React, { ReactElement } from 'react';



type Action = {
  createChatBotMessage: any;
  setState: any
  children: ReactElement

}

const ActionProvider = ({ createChatBotMessage, setState, children }: Action) => {

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;