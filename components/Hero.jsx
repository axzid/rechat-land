import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="container mx-auto" id="home">
        <div className="grid grid-cols-2 mt-24">
          <div>
            <h1 className="text-sm text-blue-500 py-4">CHAT N’ RECHAT</h1>
            <h3 className="text-[34px]">
              Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi
              tidak lupa jasa pahlawan!
            </h3>
            <p className="text-lg text-slate-500 py-4 font-light">
              Sebenernya banyak banget aplikasi chatting yang lebih bagus dari
              ini, maka dari itu lebih baik pake yang lain aja deh ya daripada
              pake aplikasi yang ini.
            </p>
            <div className="mt-8">
              <a
                href="/"
                className="px-8 py-3 text-white bg-blue-500 rounded-md mr-3 hover:bg-blue-600 duration-200"
              >
                Register &#8594;
              </a>
              <a
                href="/"
                className="px-8 py-3 text-blue-500 bg-slate-200 rounded-md mr-3 hover:bg-slate-100 duration-200"
              >
                Learn More
              </a>
            </div>
            <div className="mt-20 flex items-center gap-20">
              <div className="flex items-start gap-4">
                <Image src="/images/download.png" width={24} height={24} />
                <div>
                  <p className="text-sm text-slate-500 pb-1 font-light">
                    TOTAL DOWNLOAD
                  </p>
                  <p className="text-2xl font-medium">1,501,234</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image src="/images/user.png" width={24} height={24} />
                <div>
                  <p className="text-sm text-slate-500 pb-1 font-light">
                    TOTAL USERS
                  </p>
                  <p className="text-2xl font-medium">1,318,829</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Image src="/images/Hero.png" width={500} height={500} />
            </div>
          </div>
        </div>
        <div className="bg-blue-100 h-[140px] mt-36 flex justify-center gap-12 items-center px-20  rounded-xl">
          <Image src="/images/5.png" width={120} height={50} />
          <Image src="/images/4.png" width={100} height={20} />
          <Image src="/images/6.png" width={120} height={50} />
          <Image src="/images/7.png" width={120} height={50} />
          <Image src="/images/8.png" width={120} height={60} />
        </div>
      </div>
    </>
  );
}
