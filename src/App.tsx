import reactLogo from '~/assets/react.svg';
import viteLogo from '~/assets/vite.svg';

function App() {
  return (
    <div className="grid h-screen place-items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex justify-around ">
          <img src={viteLogo} className="h-20" alt="Vite logo" />
          <img src={reactLogo} className="h-20" alt="React logo" />
        </div>
        <h1 className="mt-10 font-bold text-center text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text">
          Into the Vite Verse
        </h1>
        <p className="mt-5 font-bold text-transparent bg-gradient-to-r from-cyan-400 to-slate-500 bg-clip-text">
          Minimal Starter Template for React ft. Vite
        </p>
      </div>
    </div>
  );
}

export default App;
