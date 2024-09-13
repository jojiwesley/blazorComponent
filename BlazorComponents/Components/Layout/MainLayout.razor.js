export function onLoad() {
    /*addFormListeners();
    registerCookieConsent();
    maskFields();

    window.addEventListener('scroll', removeDivOnScroll);

    AOS.init({
        once: true,
        duration: 1000,
    });*/
}

export function onUpdate() {
   /* addFormListeners();
    refreshReCaptchaToken();
    maskFields();
    AOS.init({
        once: true,
        duration: 1000,
    });*/
    document.querySelectorAll("link[media='print']")?.forEach(e => { e.media = 'all' });
    /*window.addEventListener('scroll', removeDivOnScroll);*/
}

export function onDispose() {
    //console.log('Disposed');
}