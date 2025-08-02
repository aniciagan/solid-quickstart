import { createSignal } from "solid-js";

export default function Documentations() {
  const [count, setCount] = createSignal(0);

  return (
    <section class="bg-slate-200 text-slate-700 p-8 rounded-md">
      <h2 class="text-2xl">Hi! My name is Akiva!!</h2>
      <p class="mt-4">This is a page introducing myself and my skillsets</p>
    </section>
  );
}
