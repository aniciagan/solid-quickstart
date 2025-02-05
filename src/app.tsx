import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

  return (
    <div>
      <nav class="bg-gray-800 text-white px-6 py-3 shadow-lg">
        <div class="w-full">
          <ul class="flex justify-start items-center space-x-8">
            <li><a href="/" class="no-underline font-medium text-gray-300 hover:text-white transition-colors duration-300 relative">
                <span class="block rounded-md px-3 py-1 transition-all duration-300 opacity-0 hover:opacity-100 hover:scale-105 hover:px-4 hover:py-2 hover:bg-gray-600"></span>
                Home
              </a></li>
            <li><a href="/Analytics" class="no-underline font-medium text-gray-300 hover:text-white transition-colors duration-300 relative">
                <span class="block rounded-md px-3 py-1 transition-all duration-300 opacity-0 hover:opacity-100 hover:scale-105 hover:px-4 hover:py-2 hover:bg-gray-600"></span>
                Analytics
              </a></li>
            <li><a href="/Documentations" class="no-underline font-medium text-gray-300 hover:text-white transition-colors duration-300 relative">
                <span class="block rounded-md px-3 py-1 transition-all duration-300 opacity-0 hover:opacity-100 hover:scale-105 hover:px-4 hover:py-2 hover:bg-gray-600"></span>
                Documentations
              </a></li>
            <li><a href="/Reporting" class="no-underline font-medium text-gray-300 hover:text-white transition-colors duration-300 relative">
                <span class="block rounded-md px-3 py-1 transition-all duration-300 opacity-0 hover:opacity-100 hover:scale-105 hover:px-4 hover:py-2 hover:bg-gray-600"></span>
                Reporting
              </a></li>
          </ul>
        </div>
      </nav>
      {/* Here we should render the children */}
      {props.children}
    </div>
  );
};

export default App;
