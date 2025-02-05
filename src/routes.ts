import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Documentations from './pages/Documentations';
import Reporting from './pages/Reporting';


export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/Analytics',
    component: lazy(() => import('./pages/Analytics')),
    data: Analytics,
  },
  {
    path: '/Documentations',
    component: lazy(() => import('./pages/Documentations')),
    data: Documentations,
  },
  {
    path: '/Reporting',
    component: lazy(() => import('./pages/Reporting')),
    data: Reporting,
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
