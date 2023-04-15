// in MessageParser.js
import React, {ReactElement} from 'react';
import {getAnswer} from '../Bottom';
import {Actions} from './ActionProvider';

interface Props {
  children: ReactElement;
  actions: Actions;
}
const MessageParser: React.FC<Props> = props => {
  const parse = async (message: string) => {
    if (message.includes('hello') || message.includes('你好') || message.includes('hi')) {
      props.actions.handleGreeting();
    } else if (message.includes('图')) {
      actions.handlePic();
    } else {
      const answer = await (await getAnswer(message)).data.answer[0];
      props.actions.handleNeo(answer);
    }
  };
  const actions = props.actions;

  return (
    <div>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
