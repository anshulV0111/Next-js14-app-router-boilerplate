'use client';

function GameLoader() {
  return (
    <div className="flex justify-center">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default GameLoader;
