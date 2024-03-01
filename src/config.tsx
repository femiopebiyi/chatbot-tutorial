// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './components/DogPicture';

const botName = 'FemiBot';



const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`, {})],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props: any) => <DogPicture {...props} />,
    },
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
      fontFamily: "Poppins"
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;