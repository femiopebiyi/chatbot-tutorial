import React, { ReactNode, ReactElement, cloneElement, JSXElementConstructor } from 'react';

interface MessageParserProps {
  children: ReactNode;
  actions: Actions; // Adjust the type according to your needs
}
interface Actions{
  updateState: ()=>void
}

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: string) => {
    if(message.includes("hello")){
      
    }
    
  };

  return (
    <div>
      {React.Children.map(children, (child: ReactNode) => {
        if (React.isValidElement(child)) {
          return cloneElement(child as ReactElement<any, string | JSXElementConstructor<ReactNode>>, {
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
