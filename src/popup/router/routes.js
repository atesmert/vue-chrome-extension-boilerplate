import Home from './pages/home/index';
import Settings from './pages/settings/index';
import Test from './pages/test/index';

export default [
  {
    path: '/',
    component: Home,
  },
  { 
    path: '/test', 
    component: Test
  },
  {
    path: '/settings',
    component: Settings
  }
]
