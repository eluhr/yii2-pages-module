function togglePagesInvisibility () {
    if (typeof $.cookie === 'function' && $.cookie('app-frontend-view-mode')) {
        $('.dmstr-pages-invisible-frontend').hide();
    } else {
        $('.dmstr-pages-invisible-frontend').show();
    }
}

$(document).ready(togglePagesInvisibility);
$(document).on('cookieUpdate', togglePagesInvisibility);
