"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function configure(e){e.addStateChangeListener(router);var t=new TitleDisplay;e.addStateChangeListener(t),e.addTimeElapsedListener(t);var n=new ElementDisplay(".time-display");e.addTimeElapsedListener(n),e.addStateChangeListener(function(e,t){var n=document.querySelectorAll(".countdown-pause-button"),i=document.querySelectorAll(".countdown-resume-button");t===Countdown.State.PAUSED?(n.forEach(function(e){return e.classList.add("hidden")}),i.forEach(function(e){return e.classList.remove("hidden")})):t===Countdown.State.STARTED&&(n.forEach(function(e){return e.classList.remove("hidden")}),i.forEach(function(e){return e.classList.add("hidden")}))})}function startCustomCountdown(){var e=document.querySelector("#custom-time").value;try{startCountdown(e||60)}catch(e){}}function startPredefinedCountdown(e){startCountdown(e)}function startCountdown(e){(!countdown||countdown.isFinished||countdown.isReady)&&(countdown=Countdown.fromTime(Time.fromString(e)),configure(countdown),countdown.start())}function pauseCountdown(){countdown&&countdown.pause()}function resumeCountdown(){countdown&&countdown.resume()}function stopCountdown(){countdown&&countdown.stop()}function restartCountdown(){countdown&&countdown.start()}function back(){router.goto("ready")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),EventManager=function(){function e(){_classCallCheck(this,e),this._listeners=[]}return _createClass(e,[{key:"notify",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this._listeners.forEach(function(t){if("function"==typeof t)t.apply(void 0,n);else if(t[e]){var i;(i=t[e]).call.apply(i,[t].concat(n))}})}},{key:"add",value:function(e){this._listeners.push(e)}},{key:"push",value:function(e){this.add(e)}},{key:"remove",value:function(e){for(var t=this._listeners.length,n=0;n<t;)e(this._listeners[n])?(this._listeners.splice(n,1),t--):n++}},{key:"listeners",get:function(){return this._listeners}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),Time=function(){function e(t){_classCallCheck(this,e),this._amount=t}return _createClass(e,[{key:"add",value:function(t){return new e(this.amount+t.amount)}},{key:"subtract",value:function(t){return new e(this.amount-t.amount)}},{key:"amount",get:function(){return this._amount}}],[{key:"fromString",value:function(t){var n=/^(([0-9]+)\s*(h|hr|hour[s]))?\s*(([0-9]+)\s*(m|min|minute[s]))?\s*(([0-9]+)\s*(s|sec|second[s])?)?$/i,i=n.exec(t);return new e(1e3*(60*(i[2]?parseInt(i[2]):0)*60+60*(i[5]?parseInt(i[5]):0)+(i[8]?parseInt(i[8]):0)))}},{key:"zero",value:function(){return e.fromMilliseconds(0)}},{key:"fromMilliseconds",value:function(t){return new e(t)}},{key:"fromSeconds",value:function(t){return e.fromMilliseconds(1e3*t)}},{key:"fromMinutes",value:function(t){return e.fromSeconds(60*t)}},{key:"fromHours",value:function(t){return e.fromMinutes(60*t)}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),TimeParsing=function(){function e(t){_classCallCheck(this,e),this.time=t}return _createClass(e,[{key:"seconds",get:function(){return parseInt(this.time.amount/1e3)%60}},{key:"minutes",get:function(){return parseInt(this.time.amount/6e4%60)}},{key:"hours",get:function(){return parseInt(this.time.amount/36e5%24)}},{key:"milliseconds",get:function(){return parseInt(this.time.amount%1e3)}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),TimeFormat=function(){function e(t){_classCallCheck(this,e),this._time=t,this._parsing=new TimeParsing(this._time)}return _createClass(e,[{key:"_leadingZeros",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="";t>0||e>0;){var i=e%10;e=parseInt(e/10),n=Math.max(i,0)+n,t--}return n}},{key:"full",get:function(){return this.basic+"."+this.milliseconds}},{key:"basic",get:function(){return this._leadingZeros(this._parsing.hours,2)+":"+this._leadingZeros(this._parsing.minutes,2)+":"+this._leadingZeros(this._parsing.seconds,2)}},{key:"milliseconds",get:function(){return this._leadingZeros(this._parsing.milliseconds,3)}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),Clock=function(){function e(){_classCallCheck(this,e),this._listeners=new EventManager,this._started=!1}return _createClass(e,[{key:"start",value:function(){this.isStopped&&(this._started=!0,this._onStart())}},{key:"_onStart",value:function(){}},{key:"stop",value:function(){this.isStarted&&(this._started=!1,this._onStop())}},{key:"_onStop",value:function(){}},{key:"addListener",value:function(e){this._listeners.add(e)}},{key:"removeListener",value:function(e){this._listeners.remove(function(t){return t===e})}},{key:"_passTime",value:function(e){this.isStarted&&this._notifyTimePassed(e)}},{key:"_notifyTimePassed",value:function(e){this._listeners.notify("onTimePassed",e)}},{key:"isStarted",get:function(){return this._started}},{key:"isNotStarted",get:function(){return!this.isStarted}},{key:"isStopped",get:function(){return this.isNotStarted}},{key:"listeners",get:function(){return this._listeners.listeners}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),SystemClock=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n._frequency=e,n}return _inherits(t,e),_createClass(t,[{key:"_onStart",value:function(){var e=this;this._lastUpdate=void 0,this._interval=setInterval(function(){var t=(new Date).getTime(),n=t-(e._lastUpdate?e._lastUpdate:t);e._lastUpdate=t,e._passTime(Time.fromMilliseconds(n))},this._frequency)}},{key:"_onStop",value:function(){clearInterval(this._interval)}},{key:"frequency",get:function(){return this._frequency},set:function(e){this._frequency=e}}]),t}(Clock),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),Countdown=function(){function e(t){_classCallCheck(this,e),this._timeElapsedListeners=new EventManager,this._stateChangeListeners=new EventManager,this._time=t,this._elapsed=Time.zero(),this._state=e.State.READY,this.clock=new SystemClock}return _createClass(e,[{key:"start",value:function(){(this.isReady||this.isFinished)&&(this._elapsed=Time.zero(),this.clock.start(),this._setState(e.State.STARTED))}},{key:"pause",value:function(){this.isStarted&&(this.clock.stop(),this._setState(e.State.PAUSED))}},{key:"resume",value:function(){this.isPaused&&(this.clock.start(),this._setState(e.State.STARTED))}},{key:"stop",value:function(){(this.isStarted||this.isPaused)&&(this.clock.stop(),this._setState(e.State.READY))}},{key:"onTimePassed",value:function(t){this._setElapsed(this._elapsed.add(t)),this._checkFinish()&&(this._elapsed=this._time,this._setState(e.State.FINISHED),this._clock.stop())}},{key:"_checkFinish",value:function(){return this.remaining.amount<=0}},{key:"_setElapsed",value:function(e){this._elapsed=e,this._timeElapsedListeners.notify("onTimeElapsed",this,this._elapsed)}},{key:"_setState",value:function(e){this._state=e,this._stateChangeListeners.notify("onStateChange",this,this._state)}},{key:"_uninstallCurrentClock",value:function(){this._clock&&this._clock.removeListener(this)}},{key:"_installClock",value:function(){this._clock&&this._clock.addListener(this)}},{key:"addTimeElapsedListener",value:function(e){this._timeElapsedListeners.add(e)}},{key:"removeTimeElapsedListener",value:function(e){this._timeElapsedListeners.remove(e)}},{key:"addStateChangeListener",value:function(e){this._stateChangeListeners.add(e)}},{key:"removeStateChangeListener",value:function(e){this._stateChangeListeners.remove(e)}},{key:"isReady",get:function(){return this.state==e.State.READY}},{key:"isStarted",get:function(){return this.state==e.State.STARTED}},{key:"isPaused",get:function(){return this.state==e.State.PAUSED}},{key:"isFinished",get:function(){return this.state==e.State.FINISHED}},{key:"time",get:function(){return this._time}},{key:"elapsed",get:function(){return this._elapsed}},{key:"remaining",get:function(){return this.time.subtract(this.elapsed)}},{key:"state",get:function(){return this._state}},{key:"clock",get:function(){return this._clock},set:function(e){this._uninstallCurrentClock(),this._clock=e,this._installClock()}}],[{key:"fromTime",value:function(t){return new e(t)}}]),e}();Countdown.State={READY:0,STARTED:1,PAUSED:2,FINISHED:3};var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),Router=function(){function e(t){_classCallCheck(this,e),this._config=t}return _createClass(e,[{key:"goto",value:function(e){this._showPage(e)}},{key:"onStateChange",value:function(e,t){var n=this._getPage(t);n&&this._showPage(n)}},{key:"_showPage",value:function(e){this._hideOthers();var t="."+e+".page";document.querySelector(t).classList.add("active")}},{key:"_hideOthers",value:function(){document.querySelectorAll(".page").forEach(function(e){return e.classList.remove("active")})}},{key:"_getPage",value:function(e){return this._config[e]}}],[{key:"config",value:function(){return new RouterBuilder}}]),e}(),RouterBuilder=function(){function e(){_classCallCheck(this,e),this._pages=[]}return _createClass(e,[{key:"page",value:function(e,t){return this._pages[e]=t,this}},{key:"build",value:function(){return new Router(this._pages)}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),TitleDisplay=function(){function e(){_classCallCheck(this,e),this._saveTitle()}return _createClass(e,[{key:"onStateChange",value:function(e,t){t==Countdown.State.READY?(this._title||this._saveTitle(),document.title=this._title):t==Countdown.State.FINISHED&&(document.title=this._title)}},{key:"_saveTitle",value:function(){this._title=document.title}},{key:"onTimeElapsed",value:function(e,t){var n=new TimeFormat(e.remaining);document.title=n.basic}}]),e}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),ElementDisplay=function(){function e(t){_classCallCheck(this,e),this._selector=t,this._updateElements()}return _createClass(e,[{key:"_updateElements",value:function(){var t=this;this._elements=[],document.querySelectorAll(this._selector).forEach(function(n){t._elements.push(new e.Element(n))})}},{key:"onTimeElapsed",value:function(e,t){var n=new TimeFormat(e.remaining);this._elements.forEach(function(e){return e.format(n)})}}]),e}();ElementDisplay.Element=function(){function e(t){_classCallCheck(this,e),this._element=t,this._prepare()}return _createClass(e,[{key:"_prepare",value:function(){this._element.innerHTML="",this._createBasicPart(),this._createMillisecondsPart()}},{key:"_createBasicPart",value:function(){this._basicPart=document.createElement("h1"),this._basicPart.classList.add("basic"),this._element.appendChild(this._basicPart)}},{key:"_createMillisecondsPart",value:function(){this._millisecondsPart=document.createElement("h2"),this._millisecondsPart.classList.add("milliseconds"),this._element.appendChild(this._millisecondsPart)}},{key:"format",value:function(e){this._basicPart.innerHTML=e.basic,this._millisecondsPart.innerHTML="."+e.milliseconds}}]),e}();var countdown=void 0,router=Router.config().page(Countdown.State.READY,"ready").page(Countdown.State.STARTED,"started").page(Countdown.State.FINISHED,"finished").build();