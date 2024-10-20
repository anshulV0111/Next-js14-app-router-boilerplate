export default function CustomSkeleton({ type, count }) {
  switch (type) {
    case 'card':
      return Array.from({ length: count }, (_, index) => index + 1).map((item) => (
        <div key={`id-${item}-skeleton`} className="elative mt-4 rounded-lg overflow-hidden group h-[200px] w-[150px] bg-gray-600  animate-pulse">
          {/* <div class="flex items-center mb-4">
            <div class="w-[169px] h-[230px] bg-gray-300 rounded-full" />
            <div class="ml-4 w-48 h-6 bg-gray-300 rounded" />
          </div>
          <div class="w-full h-4 bg-gray-300 rounded mb-2" />
          <div class="w-full h-4 bg-gray-300 rounded mb-2" />
          <div class="w-full h-4 bg-gray-300 rounded" /> */}
        </div>
      ));
    default:
      return (
        <div class="bg-gray-200 p-4 rounded-lg shadow-md animate-pulse">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-gray-300 rounded-full" />
            <div class="ml-4 w-48 h-6 bg-gray-300 rounded" />
          </div>
          <div class="w-full h-4 bg-gray-300 rounded mb-2" />
          <div class="w-full h-4 bg-gray-300 rounded mb-2" />
          <div class="w-full h-4 bg-gray-300 rounded" />
        </div>
      );
  }
}
