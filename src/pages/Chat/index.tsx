/**
 * @author 陆劲涛
 * @description 聊天组件
 */
import send from '@/assets/send.svg';
import {ChatBottom} from './Bottom';
import {ChatCenter} from './Center';
import {ChatTop} from './Top';

export const Chat: React.FC = () => {
  return (
    <>
      <ChatTop />
      <ChatCenter />
      <ChatBottom />
    </>
  );
};
