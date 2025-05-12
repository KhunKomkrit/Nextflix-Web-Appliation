
import { useTranslations } from "next-intl";
import { BiPlay } from "react-icons/bi";

export default function PlayButton() {
    const t = useTranslations();
    return (
        <button className="bg-white text-black py-2 pl-3 pr-4 rounded font-medium flex items-center gap-2 shadow-md">
        <BiPlay className="w-6 h-6"/> {t('Play')}
        </button>
    );
}