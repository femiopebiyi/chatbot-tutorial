import React, { ReactNode, ReactElement, cloneElement, JSXElementConstructor } from 'react';

interface MessageParserProps {
  children: ReactNode;
  actions: any; // Adjust the type according to your needs
}

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: string) => {
    if(message.includes("hello")){
      actions.handleHello()
    }
    
  };

  return (
    <div>
      {React.Children.map(children, (child: ReactNode) => {
        if (React.isValidElement(child)) {
          return cloneElement(child as ReactElement<any, string | JSXElementConstructor<any>>, {
            parse: parse,
            actions: {},
          });
        }
        return child;
      })}
    </div>
  );
};

export default MessageParser;
