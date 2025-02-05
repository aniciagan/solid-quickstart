import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

const App: Component = (props: { children: Element }) => {
  const location = useLocation();

  return (
    <div>
      {/* Updated Nav: Blue background and larger text */}
      <nav class="bg-blue-200 text-white px-6 py-2 shadow-lg transition-all duration-300 hover:bg-blue-800">
        <div class="max-w-5xl mx-auto">
          <ul class="flex justify-start items-center space-x-6">
            <li><A href="/" class="no-underline hover:underline text-lg">Home</A></li>
            <li><A href="/Analytics" class="no-underline hover:underline text-lg">Analytics</A></li>
            <li><A href="/Documentations" class="no-underline hover:underline text-lg">Documentations</A></li>
            <li><A href="/Reporting" class="no-underline hover:underline text-lg">Reporting</A></li>
          </ul>
        </div>
      </nav>

      {/* Here we should render the children */}
      {props.children}
    </div>
  );
};

export default App;
