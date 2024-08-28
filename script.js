count = 6

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/*
async function animate() {
    const el = document.getElementsByClassName("Timeline__item_selected")[0]
    const els = el.parentElement.parentElement.children[0].children
    for (let i = 0; i < count; i++) {
        els[els.length - count + i].children[0].click();
        await sleep(2000);
    }
    el.click();
}

window.addEventListener("load", (e) => {
    window.setTimeout(animate, 2000);
    window.setTimeout((()=>location.reload()), 60000)
});
*/