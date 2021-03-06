import { useJotaiStore } from '../store/useJotaiStore';

export default function Toolbar() {
  const { state, updateStateProp, updateState } = useJotaiStore();
  const { counter } = state;

  const handleClick = action => {
    const value = action === '+' ? counter + 1 : counter - 1;
    updateStateProp('counter', value);
  };

  const handleReset = () => {
    updateState({
      counter: 0,
    });
  };

  return (
    <div className="space-y-2">
      <div className="space-x-2">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => handleClick('-')}
        >
          -1
        </button>

        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => handleClick('+')}
        >
          +1
        </button>
      </div>
      <div>
        <button
          type="button"
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
