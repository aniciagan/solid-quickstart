import { createSignal, Suspense } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <main class="max-w-2xl mx-auto h-screen flex flex-col justify-center px-4">
      <h1 class="text-5xl text-center text-slate-600 font-light mb-8">
        Transforming Complex Systems into Streamlined Solutions
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Children content would go here if you expect them */}
      </Suspense>
    </main>
  );
}
