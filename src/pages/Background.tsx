/**
 * @author 陆劲涛
 * @description 探索节点页
 */

import HeaderTab from '@/components/HeaderTab';

import {Outlet} from 'react-router-dom';

export const Background: React.FC = () => {
  return (
    <div className=" w-full h-screen bg-center bg-cover" id="bg">
      <HeaderTab />
      <div className="space-x-4">
        <div className="text-white flex flex-col justify-center items-center h-full">
          <Outlet />
          {/* <MainMap></MainMap> */}
          {/* <Query></Query> */}
        </div>
      </div>
    </div>
  );
};
