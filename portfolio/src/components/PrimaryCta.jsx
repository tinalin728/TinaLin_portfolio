import { Link } from "react-router-dom";

export default function PrimaryCta({ to, text }) {
    return (
        <Link to={to} className="border-2 rounded-full px-4 py-3 group w-fit flex items-center  cursor-pointer leading-none shadow-button hover:shadow-none hover:translate-y-1 transition-all duration-200 ease-in-out">
            <div className="relative z-10 transition duration-100 ease-in-out h-full text-dark group-hover:text-black flex items-center justify-center">{text}
            </div>
            <div className="text-xl ml-1 scale-[.9] group-hover:scale-100 group-hover:-rotate-[10deg] group-hover:-translate-y-1 transition-all duration-200 ease-in-out -translate-y-[2px]">⟿</div>
        </Link>
    )
}
