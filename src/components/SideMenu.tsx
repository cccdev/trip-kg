/**
 * @author 陆劲涛
 * @description
 */

import {Link} from 'react-router-dom';

export const SideMenu: React.FC = () => {
  return (
    <div className="flex w-16">
      <div className="ml-6 flex w-6 flex-col items-center space-y-10 py-6">
        <div className="space-y-48 rounded-md ">
          <ul>
            <li className="p-5">
              <Link to={'chat'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-cyan-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </Link>
            </li>
            <li className="p-5">
              <Link to={'node'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-cyan-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
