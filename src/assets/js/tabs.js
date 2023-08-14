(function () {

    const tabsButton = document.querySelectorAll('[data-tabs]')

    tabsButton.forEach(button => {

        button.onclick = function (e) {
            e.stopPropagation()

            let buttonCurrent = e.currentTarget
            let currentIdElement = buttonCurrent.getAttribute('data-tabs')
            let tabsInfo = document.getElementById(currentIdElement)
            tabsInfo.classList.toggle('always-question__info--block')
            button.classList.toggle('always-question__button--active')
        }

    })
})();