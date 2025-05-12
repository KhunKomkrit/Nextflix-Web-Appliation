import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("AppName");
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="flex justify-between items-center px-6 py-4 ">
        <div className="flex items-center gap-4">
          <Image
            src="/logos/nextflix-logo.png"
            alt="Nextflix Logo"
            width={150}
            height={40}
            sizes="100vw"
          />
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="#"  className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Movies
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:underline">
                  New & Popular
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  MyList
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Browse By Languages 
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="#" className="hover:underline">
                XXXXX
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                XXXXX
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                XXXXX
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
