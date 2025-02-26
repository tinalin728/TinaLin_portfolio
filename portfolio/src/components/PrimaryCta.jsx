import { Link } from "react-router-dom";

export default function PrimaryCta({ to, text }) {
    return (
        <Link to={to} className="primary-cta group w-fit flex items-center justify-center cursor-pointer leading-none ">
            <div className="relative z-10 transition duration-100 ease-in-out h-full text-dark group-hover:text-black flex items-center justify-center">{text}
            </div>
            <div className="text-xl ml-1 scale-[.9] group-hover:scale-100 group-hover:translate-x-[3px] transition-all duration-200 ease-in-out">⟿</div>
        </Link>
    )
}
