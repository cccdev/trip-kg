import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import {IGraphPage} from './pages/Map/index';

import {Errors} from './pages/Errors';
import {NodeVis} from './pages/Nodes';
import {MyChatbot} from './pages/Chat/bot';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Errors />,
    children: [
      {
        path: 'node',
        element: <NodeVis />,
      },
      {
        path: 'chat',
        element: <MyChatbot />,
      },
      {
        path: 'map',
        element: <IGraphPage />,
      },
    ],
  },
]);
