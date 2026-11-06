// ==========================================
// WordCraft & Grammar Arena - Cookie Consent Banner
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    // Check if user has already accepted or rejected cookies
    if (!localStorage.getItem("wordcraft_cookie_consent")) {
        createCookieBanner();
    }
});

function createCookieBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.className = 'fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md text-white p-4 sm:p-5 shadow-2xl z-50 border-t border-slate-800 slide-in';
    
    banner.innerHTML = `
        <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
            <div class="space-y-1 text-center sm:text-left">
                <p class="font-bold text-base">🍪 Cookie & Privacy Notice</p>
                <p class="text-slate-300">
                    We use cookies and third-party services (like Google AdSense and reCAPTCHA) to personalize content, analyze traffic, and secure our platform. Read our 
                    <a href="#" onclick="openPrivacyPolicy(); return false;" class="text-indigo-400 underline font-semibold">Privacy Policy</a> for more details.
                </p>
            </div>
            <div class="flex items-center space-x-3 shrink-0">
                <button onclick="acceptCookies()" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 font-bold rounded-xl transition shadow-sm text-xs sm:text-sm">
                    Accept All
                </button>
                <button onclick="declineCookies()" class="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl transition text-xs sm:text-sm">
                    Decline
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(banner);
}

function acceptCookies() {
    localStorage.setItem("wordcraft_cookie_consent", "accepted");
    removeCookieBanner();
}

function declineCookies() {
    localStorage.setItem("wordcraft_cookie_consent", "declined");
    removeCookieBanner();
}

function removeCookieBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
        banner.remove();
    }
}
