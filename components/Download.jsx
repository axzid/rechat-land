import Image from "next/image";

export default function Download() {
  return (
    <>
      <div className="container mx-auto pb-20">
        <div className=" grid grid-cols-2 bg-[#4A72FF] w-[1024px] h-[538px] rounded-2xl mx-auto drop-shadow-xl shadow-blue-400">
          <div className="py-24 pl-20">
            <h2
              className="text-white text-sm tracking-wide
            "
            >
              DOWNLOAD APLIKASINYA
            </h2>
            <h3 className="text-white text-2xl leading-10">
              Download Aplikasi Chat n’ Rechat Di Play Store, App Store, atau
              Symbian Store
            </h3>
            <ul className="text-white opacity-60 list-disc pl-4 mt-6 mb-10">
              <li>Android version: Lolipop</li>
              <li>IOS Version: 10+</li>
              <li>Symbian: 20+</li>
            </ul>
            <div className="flex gap-6">
              <Image src="/images/appstore.png" width={150} height={46}></Image>
              <Image src="/images/play.png" width={150} height={46}></Image>
            </div>
          </div>
          <div className="h-[538px] w-[331px] relative">
            <Image
              src="/images/phone.png"
              fill="cover"
              className="object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
