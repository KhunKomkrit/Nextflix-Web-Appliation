import { BiInfoCircle } from "react-icons/bi";

export default function MoreInfoButton() {
  return (
    <button className="bg-zinc-400 text-white py-2 pl-3 pr-4 rounded font-medium flex items-center gap-2 shadow-md">
      <BiInfoCircle className="w-6 h-6" /> More Info
    </button>
  );
}
