// in ActionProvider.jsx
import React, {ReactElement, useState} from 'react';
import {createChatBotMessage} from 'react-chatbot-kit';

export type BotMessage = typeof createChatBotMessage;

type State = {
  messages: ReturnType<BotMessage>[];
};

interface Props {
  createChatBotMessage: BotMessage;
  setState: React.Dispatch<React.SetStateAction<State>>;
  children: ReactElement;
}

export type Actions = {
  handleNeo: (ans: string) => void;
  handleGreeting: () => void;
  handlePic: () => void;
};

const ActionProvider: React.FC<Props> = props => {
  const handleNeo = (ans: string) => {
    const botMessage = props.createChatBotMessage(ans, {});

    props.setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleGreeting = () => {
    const botMessage = props.createChatBotMessage('你好，有什么可以帮到你的吗？', {});

    props.setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePic = () => {
    const botMessage = createChatBotMessage('以下是为您检索到的图片', {
      widget: 'picMessage',
    });

    props.setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          actions: {
            handleNeo,
            handleGreeting,
            handlePic,
          } as Actions,
        });
      })}
    </div>
  );
};

export default ActionProvider;
