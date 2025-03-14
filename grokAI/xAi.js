if (window.innerWidth <= 1000) {
    let checkExist = setInterval(() => {
        let grokButton = document.querySelector('a[aria-label="Grok"]');
        if (grokButton) {
            grokButton.click();
            clearInterval(checkExist);
        }
    }, 50);
    setTimeout(() => {
        clearInterval(checkExist);
        window.location.href = "https://x.com/i/grok";
    }, 5000);
}
