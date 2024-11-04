// scrollerAnimation.js
export function addAnimation() {
    const scroller = document.querySelector('.scroller');
    const scrollerInner = scroller.querySelector('.scroller__inner');
    scroller.setAttribute("data-animated", true);

    if (scrollerInner.children.length === 1) {
        const scrollerContent = scrollerInner.firstElementChild.cloneNode(true);
        scrollerContent.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(scrollerContent);
    }
}

export function removeAnimation() {
    const scroller = document.querySelector('.scroller');
    const scrollerInner = scroller.querySelector('.scroller__inner');
    scroller.removeAttribute('data-animated');

    if (scrollerInner.children.length > 1) {
        scrollerInner.removeChild(scrollerInner.lastElementChild);
    }
}
