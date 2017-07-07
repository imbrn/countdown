import './app.scss';
import * as main from './main';

window.startCustomCountdown = main.startCustomCountdown;
window.startPredefinedCountdown = main.startPredefinedCountdown;
window.pauseCountdown = main.pauseCountdown;
window.resumeCountdown = main.resumeCountdown;
window.stopCountdown = main.stopCountdown;
window.restartCountdown = main.restartCountdown;
window.back = main.back;

document.body.onload = () => {
    main.init();
}
