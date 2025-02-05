import { createSignal, Suspense } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <main class="max-w-2xl mx-auto h-screen flex flex-col justify-center px-4">
      <h1 class="text-5xl mx-auto mb-8 text-slate-600 font-light">Welcome to my Page!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Children content would go here if you expect them */}
      </Suspense>

      <section class="bg-slate-200 text-slate-700 p-8 rounded-md">
        <h2 class="text-2xl">Transforming Complex Systems into Streamlined Solutions</h2>
        <p class="mt-4">This is a page introducing myself and my skillsets</p>
      </section>
    </main>
  );
}
