import type { RouteRecord } from 'vite-react-ssg'
import ALayout from './ALayout'
import BLayout from './BLayout'
import APage from './pages/APage'
import BPage from './pages/BPage'



export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: ALayout,
  },
  {
    path: '/doc',
    Component: BLayout,
    children: [
      {
        index: true,
        Component: APage,
      },
      {
        path: 'b-page',
        Component: BPage,
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <NoMatch />,
  // },
]
