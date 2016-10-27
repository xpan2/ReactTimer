var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;
    console.log('number input:', $('input').length);

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },

  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <div><input type="text" ref="seconds" placeholder="Enter time in seconds"/></div>
          <div><button className="button expanded">Start</button></div>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
