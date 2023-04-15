/**
 * @author 陆劲涛
 * @description
 */
import avatar from '@/assets/avatar.svg';

export const ChatTop: React.FC = () => {
  return (
    <>
      <div className="w-full h-14 p-6 mx-auto bg-transprent rounded shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src={avatar} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-white">机器人旅游小助手</div>
          <p className="text-slate-200">你好，你可以问问我关于上海的旅游信息哦</p>
        </div>
      </div>
    </>
  );
};
