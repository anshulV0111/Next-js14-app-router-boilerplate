import Image from 'next/image';

function NoDataFound() {
  const noDataFound = '/assets/layout2/images/homePage/Webp/nodatafound (1).webp';

  return (
    <div className="dark:bg-arcCustomBackground bg-yellowIshFilter py-6 px-8 rounded-lg">
      <div className="flex justify-around items-center">
        <div>
          <Image src={noDataFound} width={400} height={400} alt="" />
        </div>
        <div className="w-1/2">
          <span className="text-5xl font-bold leading-[4rem] flex items-center justify-center">
            No Data Found!
          </span>
        </div>
      </div>
    </div>
  );
}

export default NoDataFound;
