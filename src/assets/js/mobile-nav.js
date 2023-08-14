
(function () {

    const burger = document.querySelectorAll('[data-burger]');
    const sidebar = document.getElementById('sidebar');
    const page = document.getElementById('page');
    const scroll = document.querySelectorAll('[data-scroll]');
    const body = document.body;


    for (let i = 0; i < burger.length; i++) {
        const burgerId = burger[i];
        burgerId.addEventListener('click', event =>{
            if (body.classList.contains('show-sidebar')){
                closeSidebar();
            }
            else {
                showsidebar();
            }
        });

    }

    function showsidebar(){
        let mask = document.createElement('div');
        mask.classList.add('page__mask');
        mask.addEventListener('click', closeSidebar);
        page.appendChild(mask);
        body.classList.add('show-sidebar');
    }

    function closeSidebar(){
        body.classList.remove('show-sidebar');
        document.querySelector('.page__mask').remove();
    }

    function scrollMenu (e) {

        let $this = e.currentTarget;
        let scrollId = $this.getAttribute('data-scroll');
        let scrollItem = document.getElementById(scrollId);
        scrollItem.scrollIntoView({behavior: 'smooth'});

    }

    for (let i = 0; i < scroll.length; i++) {
        const scrollId = scroll[i];
        scrollId.addEventListener('click', (e)=>{
            if (e.target) {
                e.preventDefault();
            }
            scrollMenu (e)

            if (body.classList.contains('show-sidebar')){
                closeSidebar();
            }

        })
    }

})();