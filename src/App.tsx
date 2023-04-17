import {Outlet} from 'react-router-dom';
import HeaderTab from './components/HeaderTab';
import {SideMenu} from './components/SideMenu';

function App() {
  return (
    <div className="" id="root">
      <div className="w-full h-screen bg-center bg-cover" id="bg">
        <HeaderTab />
        <div className="space-x-4 flex">
          <SideMenu />
          <div className="text-white flex flex-col justify-center items-center h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
