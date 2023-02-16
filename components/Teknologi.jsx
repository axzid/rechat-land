import Image from "next/image";

export default function Teknologi() {
  return (
    <>
      <div className="container mx-auto pb-52" id="teknologi">
        <div className="grid grid-cols-2">
          <div className="flex justify-end pr-20">
            <Image src="/images/teknologi.png" width={500} height={700} />
          </div>
          <div>
            <h4 className="text-sm py-6">TEKNOLOGI YANG DIGUNAKAN</h4>
            <h3 className="text-2xl pb-4 w-[500px] leading-8">
              Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH
              Dan Jason Fried Pensiun! 😱
            </h3>
            <p className="text-slate-500 leading-7 text-sm w-[493px]">
              Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara
              aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo
              pake dan daftar di aplikasi ini jadi kita harus bayar server DO
              tiap bulan, mana pas bayar harus tunjuk-tunjukan. Inilah alasan
              kenapa gak usah daftar:
            </p>
            <div className="mt-4">
              <div className="flex justify-start items-start gap-6 pt-4">
                <Image src={"/images/emot3.png"} width={60} height={60} />
                <div>
                  <p>Kamu Adalah Beban Kami</p>
                  <p className="text-slate-500 leading-7 pt-2 text-sm w-[493px]">
                    Semakin banyak kamu yang mendaftar di aplikasi ini, artinya
                    semakin banyak data yang perlu disimpan, nah kan jadi perlu
                    server gede tuh. Makanya kamu beban!
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-6 pt-4">
                <Image src={"/images/emot1.png"} width={60} height={60} />
                <div>
                  <p>Males Buat Ngembangin</p>
                  <p className="text-slate-500 leading-7 pt-2 text-sm w-[493px]">
                    Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa
                    dikirim padahal lo belom pencet tombol enter atau masalah
                    lainnya. Nah soal itu kita males buat benerin.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-6 pt-4">
                <Image src={"/images/emot2.png"} width={60} height={60} />
                <div>
                  <p>Kamu Adalah Beban Kami</p>
                  <p className="text-slate-500 leading-7 pt-2 text-sm w-[493px]">
                    Nggak tau lagi harus ngomong apa, pokoknya males aja sih
                    kita bikin aplikasi chat kek gini. Makannya mending lo pake
                    WhatsApp aja udah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
