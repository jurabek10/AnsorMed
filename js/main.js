const elSiteHeader = document.querySelector(`.site-header`);
const elSiteHeaderTogglerButton = elSiteHeader.querySelector(`.site-header-toggle-button`);


if (elSiteHeaderTogglerButton) {
    elSiteHeaderTogglerButton.addEventListener(`click`, function () {
        elSiteHeader.classList.toggle(`site-header-open`)
    })
}