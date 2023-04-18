/**
 * @author 陆劲涛
 * @description 错误页
 */

import {useRouteError} from 'react-router-dom';

export const Errors: React.FC = () => {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p>页面出错了，原因是：</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
