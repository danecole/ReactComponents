import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PaginationItem } from './PaginationItem';
import tracked from '../tracking/tracked';

const ellipsis = (
  <PaginationItem key="post-ellipsis" disabled label="Ellipsis">
    &hellip;
  </PaginationItem>
);

function getPageBounds({ maxButtons, activePage, pageCount }) {
  let startPage;
  let endPage;

  if (maxButtons && maxButtons < pageCount) {
    startPage = Math.max(
      Math.min(
        activePage - Math.floor(maxButtons / 2, 10),
        pageCount - maxButtons + 1
      ),
      1
    );
    endPage = startPage + maxButtons - 1;
  } else {
    startPage = 1;
    endPage = pageCount;
  }

  return { startPage, endPage };
}

export class Pagination extends React.Component {
  static propTypes = {
    pageCount: PropTypes.number,
    maxButtons: PropTypes.number,
    activePage: PropTypes.number,
    onSelect: PropTypes.func.isRequired,
    bsClass: PropTypes.string,
  };

  static defaultProps = {
    pageCount: 1,
    maxButtons: 5,
    activePage: 1,
    bsClass: 'pagination',
  };

  selectFirst = evt => {
    this.props.onSelect(1, evt);
  };

  selectLast = evt => {
    this.props.onSelect(this.props.pageCount, evt);
  };

  selectPrev = evt => {
    if (!this.disablePrev()) {
      this.props.onSelect(this.props.activePage - 1, evt);
    }
  };

  selectNext = evt => {
    if (!this.disableNext()) {
      this.props.onSelect(this.props.activePage + 1, evt);
    }
  };

  disablePrev() {
    return this.props.activePage <= 1;
  }

  disableNext() {
    return this.props.activePage >= this.props.pageCount;
  }

  renderFirst() {
    return (
      <PaginationItem
        key="first"
        disabled={this.disablePrev()}
        onClick={this.selectFirst}
        label="First"
      >
        <span className="chevron">&laquo;</span>
      </PaginationItem>
    );
  }

  renderPrev() {
    return (
      <PaginationItem
        key="prev"
        disabled={this.disablePrev()}
        onClick={this.selectPrev}
        label="Prev"
      >
        Prev
      </PaginationItem>
    );
  }

  renderNext() {
    return (
      <PaginationItem
        key="next"
        disabled={this.disableNext()}
        onClick={this.selectNext}
        label="Next"
      >
        Next
      </PaginationItem>
    );
  }

  renderLast() {
    return (
      <PaginationItem
        key="last"
        disabled={this.disableNext()}
        onClick={this.selectLast}
        label="Last"
      >
        <span className="chevron">&raquo;</span>
      </PaginationItem>
    );
  }

  render() {
    const { pageCount, maxButtons, activePage, bsClass, onSelect } = this.props;

    if (pageCount <= 1) return false;

    let buttons = [];
    const { startPage, endPage } = getPageBounds(this.props);

    for (let page = startPage; page <= endPage; page += 1) {
      buttons.push(
        <PaginationItem
          key={page}
          active={page === activePage}
          onClick={evt => onSelect(page, evt)}
        >
          {page}
        </PaginationItem>
      );
    }

    if (pageCount > maxButtons) {
      buttons = [
        this.renderFirst(),
        this.renderPrev(),
        ...buttons,
        endPage !== pageCount && ellipsis,
        this.renderNext(),
        this.renderLast(),
      ];
    }

    return (
      <div className="NHP-pagination">
        <ul className={classnames('pagination', bsClass)}>{buttons}</ul>
      </div>
    );
  }
}

export default tracked(Pagination);
