const sectionTitles = document.querySelectorAll(".container .section-title"),
    textContainers = document.querySelectorAll(".container .text-container"),
    selectCards = document.querySelectorAll(".select-title"),
    selectCardContents = document.querySelectorAll(".select-card-content");

for (let selectCard of selectCards) {
    selectCard.addEventListener('click', function () {
        const selectCardID = selectCard.getAttribute('id');
        for (let selectCardContent of selectCardContents) {
            const selectCardContentID = selectCardContent.getAttribute('id').replace("#", "");
            if (selectCardID === selectCardContentID) {
                selectCardContent.classList.toggle('active');
            } else {
                selectCardContent.classList.remove('active');
            }
        }
    })
}

for (let sectionTitle of sectionTitles) {
    sectionTitle.addEventListener('click', function () {

        const sectionTitleID = sectionTitle.getAttribute('id');

        for (let textContainer of textContainers) {
            const textContainerID = textContainer.getAttribute('id').replace("#", "");

            if (sectionTitleID === textContainerID) {
                textContainer.classList.toggle('active');
            } else {
                textContainer.classList.remove('active');
            }
        }
    })
}