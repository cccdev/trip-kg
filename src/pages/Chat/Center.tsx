/**
 * @author 陆劲涛
 * @description
 */
import logo from '@/assets/react.svg';
import {useChatStore} from '../../store';
import {useEffect, useRef} from 'react';
import {getAnswer} from './Bottom';

type MessageProps = {
  messages: string[];
};

// const AskMessage: React.FC<MessageProps> = props => {
//   const listItems = props.messages.map(message => (
//     <div className="py-2">
//       <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
//         {message}
//       </span>
//     </div>
//   ));
//   return (
//     <div className="chat-message">
//       <div className="flex items-end justify-end">
//         <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
//           <ul>{listItems}</ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ResponseMessage: React.FC<MessageProps> = props => {
//   const listItems = props.messages.map(message => (
//     <div className="py-2">
//       <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
//         {message}
//       </span>
//     </div>
//   ));

//   return (
//     <div className="chat-message">
//       <div className="flex items-end">
//         <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
//           <ul>{listItems}</ul>
//         </div>
//         <img src={logo} alt="My profile" className="w-6 h-6 rounded-full order-1" />
//       </div>
//     </div>
//   );
// };

export const ChatCenter: React.FC = () => {
  const messageEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageEl.current) {
      messageEl.current.addEventListener('DOMNodeInserted', (event: any) => {
        const {currentTarget: target} = event;
        // 自动滚动到底部
        target.scroll({top: target.scrollHeight, behavior: 'smooth'});
      });
    }
  }, []);

  const messages = useChatStore(state => state.messages);

  return (
    <div
      id="chat-scrollbar"
      ref={messageEl}
      className="w-full h-96 flex flex-col space-y-4 p-3 overflow-y-auto"
    >
      {/* <ResponseMessage messages={['你好！你可以随便问我关于上海文旅的知识信息']} />

      <AskMessage messages={messages} /> */}
      {/* <ResponseMessage messages={answers}></ResponseMessage> */}
    </div>
  );
};
