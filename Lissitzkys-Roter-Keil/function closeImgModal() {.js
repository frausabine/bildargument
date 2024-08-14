function closeImgModal() {
    imgModal.style.display = "none";
    document.body.style.overflowY = "auto";
    document.body.removeEventListener('keypress', closeImgModal)
}

function openBig(el) {
    document.body.style.overflowY = "hidden";
    imgModal.style.display = "block";
    randomImg.src = el.src;
    document.body.addEventListener('keypress', function (e) {
        console.log(e);
        if (e.key === "Escape") {
            closeImgModal();
        }
    });
}