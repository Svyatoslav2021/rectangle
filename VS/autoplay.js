module('Autoplay tests');

function FakeClock() {
	// Instantiate a new controllable clock which overrides the built in Date
	// class on construction.
	var value = 1;

	this.tick = function(duration) {
		value += duration;
	};
	// TODO: This is broken and has to be fixed in the near future
	this.Date = function() {
		this.getTime = function() {
			return value;
		}
	}
}

function change_timeout(autoplay, first, second, wait) {
	var clock = new FakeClock();