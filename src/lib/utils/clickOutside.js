// @ts-nocheck
export const clickOutside = (node, cb) => {
    const onClick = (event) => {
        if (node && !node.contains(event.target) && !event.defaultPrevented) cb();
    };

    document.addEventListener('click', onClick, true);
    document.addEventListener('touchstart', onClick, true);

    return {
        destroy() {
            document.removeEventListener('click', onClick, true);
            document.removeEventListener('touchstart', onClick, true);
        }
    };
};