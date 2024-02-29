// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import StartBtn from './components/StartBtn';
import { ReactElement } from 'react';


const botName = 'FemiBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`, {
    widget: "startBtn"
  })],
  botName: botName,
  customComponents: {
    
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props: ReactElement) => <StartBtn {...props} />,
    }
  ]
};

export default config;