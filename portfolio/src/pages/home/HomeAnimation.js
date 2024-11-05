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

export function typingAnimation() {
    const typingText = document.querySelector('.text-swap');
    const textArray = ["Front-End Developer", "UXUI Designer"];

    let arrayIndex = 1;

    // setInterval(timer, 5000);
    // function timer() {
    //     if (arrayIndex < textArray.length) {
    //         typingText.innerHTML = textArray[arrayIndex];
    //         arrayIndex = arrayIndex + 1;
    //     } else {
    //         arrayIndex = 0;
    //         typingText.innerHTML = textArray[arrayIndex];
    //         arrayIndex = arrayIndex + 1;
    //     }
    // }

    //clearInterval(window.typingInterval);

    // window.typingInterval = setInterval(() => {
    //     typingText.innerHTML = textArray[arrayIndex];
    //     arrayIndex = (arrayIndex + 1) % textArray.length;
    // }, 4000);


    function textSwap() {
        typingText.innerHTML = textArray[arrayIndex];
        arrayIndex = (arrayIndex + 1) % textArray.length;

    }
    setInterval(textSwap, 4000);

}

