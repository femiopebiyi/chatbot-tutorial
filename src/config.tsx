// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './components/BotAvatar';


const botName = 'ExcitementBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`, {})],
  botName: botName,
  customComponents: {
    botAvatar:(props: any) => <BotAvatar {...props}/>
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;