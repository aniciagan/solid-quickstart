import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Documentation from './pages/Documentation';
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
    path: '/Documentation',
    component: lazy(() => import('./pages/Documentation')),
    data: Documentation,
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
