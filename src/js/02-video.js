
import Vimeo from "@vimeo/player";
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem('videoplayer-current-time', seconds);
};
player.on('timeupdate', throttle(getCurrentTime, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')));