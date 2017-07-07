/**
 * Pages (states) router.
 */
export class Router {
    
    constructor(config) {
        this._config = config;
    }

    static config() {
        return new RouterBuilder();
    }

    goto(page) {
        this._showPage(page);
    }

    onStateChange(countdown, state) {
        const page = this._getPage(state);
        if (page) {
            this._showPage(page);
        }
    }

    _showPage(page) {
        this._hideOthers();
        const selector = `.${page}.page`;
        document.querySelector(selector).classList.add('active');
    }

    _hideOthers() {
        document.querySelectorAll('.page')
            .forEach(page => page.classList.remove('active'));
    }

    _getPage(state) {
        return this._config[state];
    }

}

/**
 * Builder of Router.
 */
class RouterBuilder {

    constructor() {
        this._pages = [];
    }

    page(state, page) {
        this._pages[state] = page;
        return this;
    }

    done() {
        return new Router(this._pages);
    }

}