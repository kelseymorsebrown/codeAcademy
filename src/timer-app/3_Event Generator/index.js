class EventEmitter {
  constructor() {
    this._events = {};
  }

  on(type, listener) {
    if (this._events[type]) {
      this._events[type].push(listener);
    } else {
      this._events[type] = [listener];
    }
  }

  emit(type, ...args) {
    if (this._events[type]) {
      this._events[type].forEach(listener => {
        listener(...args);
      });
    }
  }

  removeListener(type, listener) {
    if (this._events[type] && listener) {
      this._events[type] = this._events[type].filter(l => l !== listener);
    } else if (this._events[type] && !listener) {
      this._events[type] = [];
    }
  }
}

class Timer extends EventEmitter {
  constructor() {
    super();
    this.name = 'undefined';
    this.timer = undefined;
    this.h = 0;
    this.m = 0;
    this.s = 10;
  }

  _on_update() {
    if (this.s === 0 && this.m === 0 && this.h === 0) {
      this.stop();
      return;
    }

    if (this.s === 0) {
      this.s = 59;
      if (this.m === 0) {
        this.m = 59;
        this.h = this.h - 1;
      } else {
        this.m = this.m - 1;
      }
    } else {
      this.s = this.s - 1;
    }

    this.show();
    // emit an event
    this.emit('update', {
      h: this.h,
      m: this.m,
      s: this.s
    });
    if (this.s === 0 && this.m === 0 && this.h === 0) {
      this.stop();
    }

  }

  start() {
    if (this.timer) {
      console.log(`[${this.name}] started`);
      return;
    }
    console.log(`[${this.name}] starts`);
    this.timer = setInterval(() => {
      this._on_update();
    }, 1000);
    this.show();

    // emit an event
    this.emit('start', {
      h: this.h,
      m: this.m,
      s: this.s
    });
  }

  stop() {
    console.log(`[${this.name}] stopped`);
    clearInterval(this.timer);
    this.timer = undefined;

    // emit an event
    this.emit('stop', {
      h: this.h,
      m: this.m,
      s: this.s
    })
  }

  pause() {
    console.log(`[${this.name}] paused`);
    clearInterval(this.timer);
    this.timer = undefined;

    // emit an event
    this.emit('pause', {
      h: this.h,
      m: this.m,
      s: this.s
    })
  }

  show() {
    function formatDigits(value) {
      value = parseInt(value)
      if (value < 10) {
        return "0" + value.toString()
      }
      return value.toString()
    }

    console.log(`[${this.name}] current time: ${formatDigits(this.h)}:${formatDigits(this.m)}:${formatDigits(this.s)}`);
  }
}

const t1 = new Timer();
t1.name = 'Timer 1';

const t2 = new Timer();
t2.name = 'Timer 2';

const list_timer = [t1, t2];
const list_sound = ['meow', 'woof'];
const list_sound_str = ['🐱meow~', '🐶woof~'];

function play_audio(sound) {
  // meow.mp3 and woof.mp3 are local files and should be in the same directory with HTML file
  const audio = document.createElement('audio');
  audio.src = `${sound}.mp3`;
  audio.play();
}

function btn_start_onclick(i) {
  // get the input value
  const ipt_h = document.getElementById(`ipt-${i}-h`);
  const ipt_m = document.getElementById(`ipt-${i}-m`);
  const ipt_s = document.getElementById(`ipt-${i}-s`);

  // check for illegal input
  const userInputNegativeNumber = Number(ipt_h.value) < 0 || Number(ipt_m.value) < 0 || Number(ipt_s.value) < 0;
  const userInputAllZeros = Number(ipt_h.value) === 0 && Number(ipt_m.value) === 0 && Number(ipt_s.value) === 0;

  if (userInputNegativeNumber || userInputAllZeros) {
    alert("The time entered is illegal!");
    return;
  }

  // set the state of input fields and buttons
  dom_update_inputs(i, "COUNTING");

  // take the corresponding timer from the timer array
  const tmr = list_timer[i - 1];
  // assign the input value to timer
  tmr.h = Number(ipt_h.value);
  tmr.m = Number(ipt_m.value);
  tmr.s = Number(ipt_s.value);

  // listen to the timer's update event and synchronize the time to the page
  tmr.removeListener('update');
  tmr.removeListener('stop');
  tmr.on('update', () => dom_update_timer(i));
  tmr.on('stop', () => {
    console.log(list_sound_str[i - 1]);
  });
  tmr.on('stop', () => {
    // play the sound
    play_audio(list_sound[i - 1]);
    // set the state of input fields and buttons
    dom_update_inputs(i, "STOPPED");
  });

  // start the timer
  tmr.start();
}

function btn_pause_onclick(i) {
  dom_update_inputs(i, "PAUSED");

  // take the corresponding timer from the timer array
  const tmr = list_timer[i - 1];

  // pause the timer
  tmr.pause();
}

function btn_stop_onclick(i) {
  dom_update_inputs(i, "STOPED");

  // take the corresponding timer from the timer array
  const tmr = list_timer[i - 1];

  // stop the timer
  tmr.stop();
}

function dom_update_inputs(i, status) {
  if ('COUNTING' === status) {
    // set the state of input fields
    document.getElementById(`ipt-${i}-h`).disabled = true;
    document.getElementById(`ipt-${i}-m`).disabled = true;
    document.getElementById(`ipt-${i}-s`).disabled = true;

    // set the state of buttons
    document.getElementById(`tmr-${i}-btn-start`).disabled = true;
    document.getElementById(`tmr-${i}-btn-pause`).disabled = false;
    document.getElementById(`tmr-${i}-btn-stop`).disabled = false;
  } else if ('PAUSED' === status) {
    // set the state of input fields
    document.getElementById(`ipt-${i}-h`).disabled = false;
    document.getElementById(`ipt-${i}-m`).disabled = false;
    document.getElementById(`ipt-${i}-s`).disabled = false;

    // set the state of buttons
    document.getElementById(`tmr-${i}-btn-start`).disabled = false;
    document.getElementById(`tmr-${i}-btn-pause`).disabled = true;
    document.getElementById(`tmr-${i}-btn-stop`).disabled = false;
  } else if ('STOPPED' === status) {
    // set the state of input fields
    document.getElementById(`ipt-${i}-h`).disabled = false;
    document.getElementById(`ipt-${i}-m`).disabled = false;
    document.getElementById(`ipt-${i}-s`).disabled = false;

    // set the state of buttons
    document.getElementById(`tmr-${i}-btn-start`).disabled = false;
    document.getElementById(`tmr-${i}-btn-pause`).disabled = true;
    document.getElementById(`tmr-${i}-btn-stop`).disabled = true;
  }
}

function dom_update_timer(i) {
  // take the corresponding timer from the timer array
  const tmr = list_timer[i - 1];

  // synchronize the time to the page
  document.getElementById(`ipt-${i}-h`).value = formatDigits(tmr.h);
  document.getElementById(`ipt-${i}-m`).value = formatDigits(tmr.m);
  document.getElementById(`ipt-${i}-s`).value = formatDigits(tmr.s);
}

function formatDigits(value) {
  value = parseInt(value)
  if (value < 10) {
    return "0" + value.toString()
  }
  return value.toString()
}

function restrictInput(value, min, max) {
  value = parseInt(value || 0);
  if (value > max) value = max;
  if (value < min) value = min;
}

