import { createSignal, Suspense } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="h-screen">
      <main class="max-w-2xl mx-auto h-full flex flex-col justify-center px-4">
        <h1 class="text-5xl text-center text-slate-600 font-light mb-8">
          Transforming Complex Systems into Streamlined Solutions
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          {/* Children content would go here if you expect them */}
        </Suspense>
      </main>

      {/* Scrollable second section */}
      <section class="bg-slate-200 p-8">
        <h2 class="text-3xl font-semibold text-slate-700">Next Page Content</h2>
        <p class="mt-4 text-slate-600">
          This is the second section, and it will be visible once you scroll down. You can add more content here!
        </p>
      </section>
    </div>
  );
}
