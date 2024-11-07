let btn = document.getElementById('sidebarBtn');
let sidebar = document.getElementById('sidebar');
let close = document.getElementById('close');

function toggle() {
    sidebar.classList.toggle('-translate-x-72');
}

btn.addEventListener('click', toggle);
close.addEventListener('click', toggle);

toggle();
setTimeout(toggle, 100);