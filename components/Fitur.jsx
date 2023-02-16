import Image from "next/image";

export default function Fitur() {
  return (
    <>
      <div className="container mx-auto mt-16 pb-52">
        <div className="text-center">
          <h4 className="text-sm py-6">NGGAK HARUS SIH SEBENARNYA</h4>
          <h3 className="text-2xl pb-4">Kenapa Harus Pakai Chat N’ Rechat?</h3>
          <p className="text-slate-500 leading-6 text-sm w-[493px] mx-auto">
            Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp
            aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp.
          </p>
        </div>
        <div className="flex justify-center gap-16 items-center mt-32">
          <div className="w-[321px] flex flex-col items-center py-4">
            <Image src="/images/fitur1.png" width={170} height={170} />
            <div>
              <p className="text-lg text-center mt-6">
                Groups to keep in touch
              </p>
              <p className="font-light text-center text-sm leading-6 pt-1 text-slate-500">
                Keep in touch with the groups of people that matter the most,
                like your family or coworkers. With group chats, you can share
                messages, photos, and videos.
              </p>
            </div>
          </div>
          <div className="w-[321px] flex flex-col items-center py-4">
            <Image src="/images/fitur2.png" width={170} height={170} />
            <div>
              <p className="text-lg text-center mt-6">
                Simple, Reliable Messaging
              </p>
              <p className="font-light text-center text-sm leading-6 pt-1 text-slate-500">
                Message your friends and family for free*. WhatsApp uses your
                phone's Internet connection to send messages so you can avoid
                SMS fees.
              </p>
            </div>
          </div>
          <div className="w-[321px] flex flex-col items-center py-4">
            <Image src="/images/fitur3.png" width={170} height={170} />
            <div>
              <p className="text-lg text-center mt-6">Speak Freely</p>
              <p className="font-light text-center text-sm leading-6 pt-1 text-slate-500">
                With voice calls, you can talk to your friends and family for
                free*, even if they're in another country. And with free* video
                calls, you can have face-to-face conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
