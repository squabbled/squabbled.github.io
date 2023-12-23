// ==UserScript==
// @name         kittyclickr - bring back the old instagram feed
// @namespace    http://www.squabbled.net
// @version      0.5
// @description  brings back the old following feed on instagram, as well as reenables the dropdown for favorites!
// @author       squabbled
// @match        https://www.instagram.com/
// @icon         https://64.media.tumblr.com/e98a83eb58fb4901971de2501d320453/tumblr_inline_nt5la68WyM1r1hsi5_500.png
// @license      GNU General Public License v3.0
// @grant        none
// ==/UserScript==


var dropDown = document.createElement("dropdown");
dropDown.innerHTML = '
    <div class="dropdown">
    <button onclick="myFunction()" class=dropbtn>Switch Timelines</button>
      <a href='https://www.instagram.com/?variant=following'>Following (Chronological)</a>
      <a href='https://www.instagram.com/?variant=favorites'>Favorites</a>
      <a href='https://www.instagram.com/?variant=past_posts'>Older Posts</a>


if (window.location == "https://www.instagram.com/") {
    window.location.replace("https://www.instagram.com/?variant=following");
}