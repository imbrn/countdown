let countdown;

// Router
const router = Router.config()
    .page(Countdown.State.READY, 'ready')
    .page(Countdown.State.STARTED, 'started')
    .page(Countdown.State.FINISHED, 'finished')
    .build()

/**
 * Configuration performed before starting countdown.
 * @param {*} countdown reference to the current countdown object.
 */
function configure(countdown) {
    // Router
    countdown.addStateChangeListener(router);

    // Title Display
    const titleDisplay = new TitleDisplay();
    countdown.addStateChangeListener(titleDisplay);
    countdown.addTimeElapsedListener(titleDisplay);

    // Time display
    const elementDisplay = new ElementDisplay('.time-display');
    countdown.addTimeElapsedListener(elementDisplay);

    // Pause/resume buttons
    countdown.addStateChangeListener((countdown, state) => {
        const pause = document.querySelectorAll('.countdown-pause-button');
        const resume = document.querySelectorAll('.countdown-resume-button');

        if (state === Countdown.State.PAUSED) {
            pause.forEach(button => button.classList.add('hidden'));
            resume.forEach(button => button.classList.remove('hidden'));
        } else if (state === Countdown.State.STARTED) {
            pause.forEach(button => button.classList.remove('hidden'));
            resume.forEach(button => button.classList.add('hidden'));
        }
    });
}

function startCustomCountdown() {
    const value = document.querySelector('#custom-time').value;
    const defaultValue = 60;
    try {
        startCountdown(value || defaultValue);
    } catch(e) {
        console.error('Invalid input');
    }
}

function startPredefinedCountdown(value) {
    startCountdown(value);
}

function startCountdown(value) {
    if (!countdown || countdown.isFinished || countdown.isReady) {
        countdown = Countdown.fromTime(Time.fromString(value));
        configure(countdown);
        countdown.start();
    }
}

function pauseCountdown() {
    if (countdown) {
        countdown.pause();
    }
}

function resumeCountdown() {
    if (countdown) {
        countdown.resume();
    }
}

function stopCountdown() {
    if (countdown)
        countdown.stop();
}

function restartCountdown() {
    if (countdown) {
        countdown.start();
    }
}

function back() {
    router.goto('ready');
}