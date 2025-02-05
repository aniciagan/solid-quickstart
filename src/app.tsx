import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

  return (
    <div>
      <nav class="bg-slate-100 text-slate-900 px-4">
        <ul class="flex items-center">
          <li class="py-2 px-4">
            <A href="/" class="no-underline hover:underline">
              Home
            </A>
          </li>
          <li class="py-2 px-4">
            <A href="/Analytics" class="no-underline hover:underline">
              Analytics
            </A>
          </li>
          <li class="py-2 px-4">
            <A href="/Documentations" class="no-underline hover:underline">
              Documentations
            </A>
          </li>
          <li class="py-2 px-4">
            <A href="/Reporting" class="no-underline hover:underline">
              Reporting
            </A>
          </li>

          <li class="text-sm flex items-center space-x-1 ml-auto">
            <span>URL:</span>
            <input
              class="w-75px p-1 bg-white text-sm rounded-lg"
              type="text"
              readOnly
              value={location.pathname}
            />
          </li>
        </ul>
      </nav>

      {/* Here we should render the children */}
      {props.children}
    </div>
  );
};

export default App;
