import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

  return (
    <div>
      {/* Updated Nav: Blue background and larger text */}
      <nav class="bg-blue-900 text-white px-6 py-2 shadow-md hover:bg-blue-600 transition-all duration-300">
        <ul class="flex items-center">
          <li class="py-2 px-4">
            <A href="/" class="no-underline hover:underline text-2xl">
              Home
            </A>
          </li>
          <li class="py-2 px-4">
            <A href="/Analytics" class="no-underline hover:underline text-2xl">
              Analytics
            </A>
          </li>
          <li class="py-2 px-4">
            <A href="/Documentations" class="no-underline hover:underline text-2xl">
              Documentations
            </A>
          </li>
          <li class="py-2 px-4">
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
