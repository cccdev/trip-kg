/**
 * @author 陆劲涛
 * @description 聊天页底部发送框
 */

import {useRef} from 'react';
import {RecommendList} from './Recommend';
import {useChatStore} from '../../store';
import send from '@/assets/send.svg';
import clear from '@/assets/clear.svg';
import {request} from '@/utils/requests';

export const getAnswer = async (message: string) => {
  return await request<{
    answer: string[];
  }>({
    url: '/ask/' + message,
    method: 'get',
  });
};

export const ChatBottom: React.FC = () => {
  const sendQuestion = useChatStore(state => state.sendQuestion);
  const clearMessage = useChatStore(state => state.clearMessage);

  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const sendMessageByBtn = async () => {
    console.log('发送按钮被点击了');
    if (inputRef.current && inputRef.current.value !== '') {
      sendQuestion(inputRef.current.value);
      const ans = (await getAnswer(inputRef.current.value)).data.answer[0];
      console.log(ans);
      inputRef.current.value = '';
    }
  };

  return (
    <div className="absolute bottom-4 text-black">
      <RecommendList />
      <div className="flex space-x-5">
        <textarea className="" name="" id="" cols={100} rows={1} ref={inputRef} />
        <img src={send} onClick={sendMessageByBtn} alt="" className="mt-1 cursor-pointer" />
        <img src={clear} onClick={clearMessage} alt="" className="mt-1 cursor-pointer" />
      </div>
    </div>
  );
};
