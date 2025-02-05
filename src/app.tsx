import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

  return (
    <div>
      {/* Updated Nav: Blue background and larger text */}
    
      <nav class="bg-blue-900 text-white px-6 py-2 shadow-lg transition-all duration-300 hover:bg-blue-800">
        <ul class="flex items-center space-x-4">
          <li class="flex items-center space-x-2">
            <A href="/" class="no-underline hover:underline text-2xl">
              Home
            </A>
          </li>
          <li class="py-2 px-6">
            <A href="/Analytics" class="no-underline hover:underline text-2xl">
              Analytics
            </A>
          </li>
          <li class="py-2 px-6">
            <A href="/Documentations" class="no-underline hover:underline text-2xl">
              Documentations
            </A>
          </li>
          <li class="py-2 px-6">
            <A href="/Reporting" class="no-underline hover:underline text-2xl">
              Reporting
            </A>
          </li>
          {/* Removed the URL input field */}
        </ul>
      </nav>

      {/* Here we should render the children */}
      {props.children}
    </div>
  );
};

export default App;
