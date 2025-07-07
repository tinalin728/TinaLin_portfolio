import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PrimaryCta({ to, label, icon: Icon = ArrowRight, additionalClass, iconSize = '18' }) {
    const isInternal = (to?.startsWith('/') && !to.endsWith('.pdf')) || to?.startsWith(':');
    const isAnchor = to?.startsWith('#'); // in-page anchor
    const baseClass = `group relative uppercase border-black w-fit rounded-full cursor-pointer flex justify-center items-center border pr-6 py-1.5 pl-1 overflow-hidden ${additionalClass}`;

    const Content = (
        <>
            {/* Expanding background */}
            <span className="absolute left-1 top-1/2 -translate-y-1/2 bg-black w-12 h-12 rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full group-hover:left-0" />

            {/* Foreground content */}
            <span className="relative z-10 flex justify-center items-center gap-3">
                <span className="w-11 h-11 p-1 rounded-full flex justify-center items-center translate-x-[2px]">
                    <Icon size={iconSize} color="#ffffff" />
                </span>
                <span className="font-inter font-normal text-sm transition-colors duration-300 group-hover:text-white">
                    {label}
                </span>
            </span>
        </>
    );

    // render buttons with different tags
    if (isInternal) {

        return <Link to={to} className={baseClass}>{Content}</Link>;

    } else {

        return (
            <a
                href={to}
                className={baseClass}
                {...(isAnchor ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            >
                {Content}
            </a>
        );
    }
}
