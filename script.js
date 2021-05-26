count = 6

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animate() {
    el = document.getElementsByClassName('timeline__arrow_direction_left')[0];
    for (let i = 0; i < count; i++) {
        el.click();
    }
    el = document.getElementsByClassName('timeline__arrow_direction_right')[0];
    for (let i = 0; i < count; i++) {
        await sleep(2000);
        el.click();
    }
}

window.addEventListener("load", (e) => {
    window.setTimeout(animate, 2000);
});