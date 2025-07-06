import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';

import './tinderCard.css';

import coffee from "../../../public/assets/about/coffee.jpg"
import jellycat from "../../../public/assets/about/jellycat.jpg"
import preschool from "../../../public/assets/about/preschool.jpg"
import capybara from "../../../public/assets/about/capybara.jpg"
import pokemon from "../../../public/assets/about/pokemon.jpg"
import eggy from "../../../public/assets/about/eggy.jpg"

const cards = [jellycat, coffee, pokemon, eggy, preschool, capybara];
const texts = [
    'Collecting JellyCat',
    'I love dark roast coffee. No cream, no sugar',
    'Pokemon TCGP is my only game',
    'Hanging out with my niec',
    'I teach kids',
    'I love Capybara',
];

const to = (i) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
});
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) => `rotate(${r}deg) scale(${s})`;

export default function TinderCard() {
    const [gone] = useState(() => new Set());
    const [springs, api] = useSprings(cards.length, (i) => ({
        ...to(i),
        from: from(i),
    }));
    const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
        const trigger = velocity > 0.2
        const dir = xDir < 0 ? -1 : 1
        if (!down && trigger) gone.add(index)
        api.start(i => {
            if (index !== i) return
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0
            const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0)
            const scale = down ? 1.1 : 1
            return {
                x,
                rot,
                scale,
                delay: undefined,
                config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
            }
        })
        if (!down && gone.size === cards.length)
            setTimeout(() => {
                gone.clear()
                api.start(i => to(i))
            }, 600)
    })


    return (
        <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
            <h2 className="text-nowrap text-center font-extralight absolute top-30 left-1/2 -translate-x-1/2 -translate-y-1/2">Pieces about me.</h2>
            <p className='font-inter italic font-medium text-sm tracking-wide absolute top-[25%] right-10 -translate-x-1/2 -translate-y-1/2 inline-block rotate-14 text-gray-500'>Swipe</p>


            {springs.map(({ x, y, rot, scale }, i) => (
                <animated.div
                    key={i}
                    {...bind(i)}
                    className="deck h-full"
                    style={{
                        transform: interpolate(
                            [x, y, rot, scale],
                            (x, y, r, s) => `translate3d(${x}px, ${y}px, 0) rotate(${r}deg) scale(${s})`
                        ),
                        zIndex: cards.length - i,
                        touchAction: 'none',
                    }}
                >
                    <div className="card max-w-[340px] min-h-[300px] bg-white shadow-md overflow-hidden cursor-grab active:cursor-grabbing rounded-md ">
                        <div
                            className="h-[250px] max-w-[340px] rounded-md overflow-hidden"
                            style={{ pointerEvents: 'auto', touchAction: 'none' }}
                        >
                            <img
                                src={cards[i]}
                                alt={`Card ${i}`}
                                className="object-cover h-full w-full pointer-events-auto"
                                draggable={false}
                            />
                        </div>
                        <p className="mt-2 text-center font-patrick-hand leading-[1.5] whitespace-pre-line px-3 pb-3">
                            {texts[i]}
                        </p>
                    </div>
                </animated.div>
            ))}

        </div>
    );
}
