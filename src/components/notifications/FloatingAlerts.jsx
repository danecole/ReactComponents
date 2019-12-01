import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import shortid from 'shortid';
import Icons from '../Icons';
import alertIcons from './alertIcons';

class FloatingAlerts extends React.Component {
  static propTypes = {
    alerts: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        msg: PropTypes.string,
      })
    ),
    floatingClass: PropTypes.string,

    // pixels; when scrolled this much, alerts become floating
    floatingStarts: PropTypes.number,
  };

  static defaultProps = {
    alerts: undefined,
    floatingClass: '',
    floatingStarts: 100,
  };

  constructor(props) {
    super(props);

    const alerts = props.alerts || [];
    this.state = { isFixed: true, alerts };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > this.props.floatingStarts && this.state.isFixed) {
      this.setState({ isFixed: false });
    } else if (scrollTop <= this.props.floatingStarts && !this.state.isFixed) {
      this.setState({ isFixed: true });
    }
  };

  onClose(index) {
    const { alerts } = this.state;
    alerts.splice(index, 1);
    this.setState({ alerts });
  }

  addAlert(msg, type) {
    const { alerts } = this.state;
    alerts.push({ msg, type });
    this.setState({ alerts });
  }

  clearAlerts() {
    this.setState({ alerts: [] });
  }

  render() {
    if (this.state.alerts.length === 0) return false;

    const alerts = this.state.alerts.map((obj, index) => {
      const alertClasses = `alert alert-flex alert-${obj.type}`;
      return (
        <div className={alertClasses} role="alert" key={shortid.generate()}>
          {alertIcons[obj.type]}
          <div className="alert-msg">{obj.msg}</div>
          <button
            type="button"
            className="close"
            onClick={() => this.onClose(index)}
          >
            <Icons.Close size="14px" />
            <span className="sr-only">Close</span>
          </button>
        </div>
      );
    });

    const fixedClasses = classnames('fixed-alert', {
      'fixed-alert-hide': !this.state.isFixed,
    });

    const floatingClasses = classnames({
      hidden: this.state.isFixed,
      'navbar-fixed-top': !this.state.isFixed,
      [this.props.floatingClass]: !this.state.isFixed,
    });

    return (
      <div
        ref={element => {
          this.alertsContainer = element;
        }}
      >
        <div
          className={fixedClasses}
          ref={element => {
            this.fixedAlerts = element;
          }}
        >
          {alerts}
        </div>
        <div
          className={floatingClasses}
          ref={element => {
            this.floatingAlerts = element;
          }}
        >
          {alerts}
        </div>
      </div>
    );
  }
}

export default FloatingAlerts;
