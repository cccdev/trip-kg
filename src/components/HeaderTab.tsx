/**
 * @author 陆劲涛
 * @description
 */
import React from 'react';

export class HeaderTabProps {}

const HeaderTab: React.FC<HeaderTabProps> = props => {
  return (
    <div className="flex text-center bg-[url('./assets/images/headerBg.png')] w-full h-16 bg-center bg-cover justify-center items-center">
      <p className="text-2xl text-cyan-300 text-center">上海市文旅知识图谱-问答系统</p>
    </div>
  );
};

HeaderTab.defaultProps = new HeaderTabProps();
export default HeaderTab;
