// ==UserScript==
// @name         kittyclickr - bring back the old instagram feed
// @namespace    http://www.squabbled.net
// @version      0.4.1
// @description  brings back the old following feed on Instagram :3
// @author       squabbled
// @match        https://www.instagram.com/
// @icon         https://64.media.tumblr.com/e98a83eb58fb4901971de2501d320453/tumblr_inline_nt5la68WyM1r1hsi5_500.png
// @license      GNU General Public License v3.0
// @grant        none
// ==/UserScript==


if (window.location == "https://www.instagram.com/") {
    window.location.replace("https://www.instagram.com/?variant=following");
}