const carouselItems = document.querySelectorAll(".carousel_item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let i = 1;

setInterval(() => {
    Array.from(carouselItems).forEach((item, index) => {
        if (i < carouselItems.length) {
            item.style.transform = `translateX(-${i * 100}%)`;
        }
    });

    if (i < carouselItems.length) {
        i++;
    } else {
        i = 0;
    }
}, 2000);

function close_popup(){
    const popup_msg = document.getElementById("popup")
    // console.log(popup_msg)
    popup_msg.classList.add("close")
}
