
import React, { ReactElement } from 'react';

type Message = {
  children: ReactElement;
  actions: {
    handleHello: ()=>void
    handleDog: ()=> void
  }
}

const MessageParser = ({ children, actions }: Message) => {
  const parse = (message: string) => {
    if(message.includes("hi" || "hello" || "ohayo")){
      actions.handleHello()
    }
    if (message.includes('dog')) {
      actions.handleDog();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;