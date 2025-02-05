import { createSignal, Suspense } from "solid-js";
import myImage from 'src/Picture1.png'; // Import your image

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="h-screen flex flex-col"> {/* Added flex-col to the main div */}
      <main class="max-w-2xl mx-auto flex-grow flex flex-col justify-center items-center px-4"> {/* flex-grow and removed h-full */}
        <img src={myImage} alt="Your Image Description" class="max-w-full h-auto mb-8" />
        <h1 class="text-5xl text-center text-slate-600 font-light mb-8">
          Transforming Complex Systems into Streamlined Solutions
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          {/* Children content would go here if you expect them */}
        </Suspense>
      </main>

      <section class="bg-slate-200 p-8">
        <div class="max-w-2xl mx-auto"> {/* Added a container for consistent width */}
          <h3 class="text-3xl font-semibold text-slate-700">Tech Business Analyst!</h3>
          <p class="mt-4 text-slate-600">
            Being a Business Analyst means that you wear multiple hats and you are not doing a mundane job.
          </p>
        </div>
      </section>
    </div>
  );
}
