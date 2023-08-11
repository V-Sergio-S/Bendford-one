
const scroll = document.querySelectorAll('[data-scroll]');

for (let i = 0; i < scroll.length; i++) {
    const scrollId = scroll[i];
    scrollId.onclick = function (e) {
        if (e.target) {
        e.preventDefault();
        }
        let $this = e.currentTarget;
        let scrollId = $this.getAttribute('data-scroll');
        let scrollItem = document.getElementById(scrollId);
        scrollItem.scrollIntoView({behavior: 'smooth'});
    }
}