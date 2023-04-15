/**
 * @author 陆劲涛
 * @description
 */

type ItemProps = {
  message: string;
};

import wenhao from '@/assets/wenhao.svg';
import {useChatStore} from '../../store';
import {getAnswer} from './Bottom';

const RecommendItem: React.FC<ItemProps> = props => {
  const sendQuestion = useChatStore(state => state.sendQuestion);

  const handleClick = () => {
    sendQuestion(props.message);
    getAnswer(props.message);
  };
  return (
    <button
      className="w-fit h-10 text-center justify-center bg-white hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-2 px-4 mx-5 mb-3 border-solid rounded-xl"
      onClick={handleClick}
    >
      {props.message}
    </button>
  );
};

export const RecommendList: React.FC = () => {
  return (
    <div className="flex">
      <img src={wenhao} alt="" className="mb-3" />
      <ul className="">
        <RecommendItem message="东方明珠开放时间是几点？" />
        <RecommendItem message="广富林文化遗址周围有什么好吃的？" />
        <RecommendItem message="上海科技馆附近有什么酒店？" />
      </ul>
    </div>
  );
};
