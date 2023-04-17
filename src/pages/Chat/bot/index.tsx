/**
 * @author 陆劲涛
 * @description
 */

import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider, {BotMessage} from './ActionProvider';
import config from './config';
import MessageParser from './MessageParser';
import './index.scss';
import {ChatTop} from '../Top';
import {useState} from 'react';
import {RecommendList} from '../Recommend';

export const MyChatbot: React.FC = () => {
  const [showBot, toggleBot] = useState(false);

  const saveMessages = (messages: any) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const message = localStorage.getItem('chat_messages');
    if (message) {
      const messages = JSON.parse(message);
      return messages;
    }
  };

  return (
    <div className="text-black ml-56">
      <ChatTop />

      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageHistory={loadMessages()}
        messageParser={MessageParser}
        saveMessages={saveMessages}
        placeholderText="请输入问题。你可以试着问问东方明珠附近有什么好吃的"
      />
      {/* <div className="relative bottom-28">
        <RecommendList />
      </div> */}
    </div>
  );
};
