var http = require("http");

Scheduler = function() {
    this.timeout = 0;
    this.timeoutStep = 2000;
}

Scheduler.prototype.AddNewTask = function (id,callback) {
    setTimeout(function() {
        callback(id);
    }, this.timeout);
    this.timeout += this.timeoutStep;
};

Scheduler.prototype.ResetDelay = function () {
    this.timeout = 0;
};

module.exports = new Scheduler();
