import { useJotaiStore } from '../store/useJotaiStore';

import Toolbar from '../components/Toolbar';

export default function IndexPage() {
  const { state } = useJotaiStore();
  const { counter } = state;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center border-4 border-red-400 space-y-8">
      <h1 className="text-3xl text-indigo-800 font-bold border-b-4 border-b-indigo-800">
        Next.js + Jotai + Custom Hook
      </h1>

      <div className="font-bold">Counter: {counter}</div>

      <Toolbar />
    </div>
  );
}
