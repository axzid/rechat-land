import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="container mx-auto">
        <nav className="flex justify-between pt-16">
          <Image src="/images/logo.png" width={35} height={35} />
          <ul className="flex justify-between gap-14">
            <li className="font-medium">Beranda</li>
            <li>Fitur-Fitur</li>
            <li>Teknologi</li>
            <li>FAQ</li>
          </ul>
          <a
            href="/"
            className="px-5 py-2 text-white font-semibold bg-blue-500 rounded-md"
          >
            Download
          </a>
        </nav>
      </div>
    </>
  );
}
