import { createSignal } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="bg-slate-200 text-slate-700 p-8 rounded-md">
      <h2 class="text-2xl">Testing for creation of new tab</h2>
      <p class="mt-4">Testing for creation of new tab</p>
    </section>
  );
}
