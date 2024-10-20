import Image from 'next/image';

function ComingSoon() {
  const CommingSoonImage = '/assets/layout2/images/homePage/Webp/ComingSoon.webp';

  return (
    <div className="dark:bg-arcCustomBackground bg-yellowIshFilter py-6 px-8 rounded-lg">
      <div className="flex justify-around items-center">
        <div>
          <Image src={CommingSoonImage} width={400} height={400} alt="" />
        </div>
        <div className="w-1/2">
          <span className="text-5xl font-bold leading-[4rem] flex items-center">
            Exciting Updates Coming Soon!
          </span>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
