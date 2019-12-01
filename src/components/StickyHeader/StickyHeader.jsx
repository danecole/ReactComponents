import React from 'react';
import PropTypes from 'prop-types';
import { AutoAffix } from 'react-overlays';

class StickyHeader extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { isSticky: false };
  }

  onAffix = () => {
    this.setState({ isSticky: true });
  };

  onAffixTop = () => {
    this.setState({ isSticky: false });
  };

  render() {
    const headerContentStyle = this.state.isSticky
      ? { width: `${this.container.offsetWidth}px`, margin: '0 auto' }
      : {};

    return (
      <div
        ref={el => {
          this.container = el;
        }}
      >
        <AutoAffix
          affixClassName="sticky-header--on"
          autoWidth={false}
          onAffix={this.onAffix}
          onAffixTop={this.onAffixTop}
        >
          <div
            className="sticky-header"
            ref={el => {
              this.header = el;
            }}
          >
            <div style={headerContentStyle}>{this.props.children}</div>
          </div>
        </AutoAffix>
        {this.state.isSticky && (
          <div style={{ height: `${this.header.offsetHeight}px` }} />
        )}
      </div>
    );
  }
}

export default StickyHeader;
