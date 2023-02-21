import { useState } from "react";

export default function Faq() {
  const [active, setActive] = useState(0);
  //create logic got accrodion in tailwind react
  function accrod(e) {
    e.preventDefault();
    //onclik active state
    setActive(!active);
  }

  return (
    <>
      <div className="container mx-auto pt-16 pb-20 relative">
        <div className="mx-auto text-center flex-col flex items-center">
          <h3 className="text-sm">BANYAK YANG TANYA</h3>
          <h2 className="text-2xl py-4  leading-8">
            Pertanyaan Yang Sering Ditanyain
          </h2>
          <p className="text-slate-500 leading-7 text-sm w-[493px]">
            Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi
            ya ditaruh sini aja siapa tau lo mau baca ‘kan.
          </p>
        </div>
        {/* crate acrodion in tailwind react */}
        <div className="relative mx-auto  min-h-[400px] min-w-full">
          <div className="w-[673px] mx-auto  ">
            <button onClick={accrod}>klik ini akan mengeluarkan teks</button>
            <p className={active == 0 ? "hidden" : "block"}>
              ini adalah teks yang akan di keluarkan
            </p>
            <button onClick={accrod}>klik ini akan mengeluarkan teks</button>
            <p className={active == 0 ? "hidden" : "block"}>
              ini adalah teks yang akan di keluarkan
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
