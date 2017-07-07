import {Composite} from './composite';
import {Countdown} from './countdown';
import {Time} from './time';

export class PushNotification extends Composite {
    
    constructor() {
        super();
        this._requestPermission();
    }

    _requestPermission() {
        if (window.Notification) {
            window.Notification.requestPermission((permission) => {
                this._permission = permission;
            });
        }
    }

    onStateChange(countdown, state) {
        if (state === Countdown.State.FINISHED) {
            this._showNotification("The time has finished!");
        }
    }

    _showNotification(message) {
        if (this._permission === "granted") {
            const it = new Notification(message);
        }
    }

}