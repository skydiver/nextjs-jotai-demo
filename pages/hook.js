import { useState } from '../useState'

export default function IndexPage() {
  const [state, setState] = useState();
  const { status, owner, counter } = state;

  const hanldeClick = () => {
    setState('counter', state.counter + 1);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center border-4 border-red-400 space-y-8">
      <h1 className="text-3xl text-indigo-800 font-bold border-b-4 border-b-indigo-800">
        Next.js + Jotai + Custom Hook
      </h1>

      <div className="font-bold">Counter: {counter}</div>

      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={hanldeClick}
      >
        Increment +1
      </button>
    </div>
  );
}
