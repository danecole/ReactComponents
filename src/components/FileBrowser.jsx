import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getButtonStyle from '../util/NHPButtonStyles';

/* eslint-disable jsx-a11y/label-has-for */
export default class FileBrowser extends Component {
  handleChange = event => {
    const selected = this.props.multiple
      ? Array.from(event.target.files)
      : event.target.files[0];

    if (selected) {
      this.props.onFileSelected(selected);
      this.inputComponent.value = '';
    }
  };

  renderFileName = (fileName, index) => (
    <span className="label tag file-name" key={index}>
      <span>{fileName}</span>
      <button
        onClick={() => this.props.onFileRemoved(fileName)}
        className="btn btn-link icon"
      >
        <span className="NHP-icon-remove" />
      </button>
    </span>
  );

  renderFileNames = () => {
    const fileNames = this.props.fileName ? [].concat(this.props.fileName) : [];

    if (fileNames.length > 0) {
      return fileNames.map(this.renderFileName);
    }
    return <div />;
  };

  render() {
    return (
      <div className="file-browser">
        <span className="file-browser-label-wrapper">
          {this.props.labelText}
          <label
            htmlFor={this.props.name}
            className={getButtonStyle(this.props.buttonType)}
          >
            {this.props.buttonLabel}
          </label>
        </span>
        <input
          id={this.props.name}
          type="file"
          multiple={this.props.multiple || null}
          name={this.props.name}
          className="hidden"
          accept={this.props.accept}
          onChange={this.handleChange}
          ref={c => {
            this.inputComponent = c;
          }}
        />
        {this.renderFileNames()}
      </div>
    );
  }
}

FileBrowser.defaultProps = {
  buttonType: 'primary',
  name: 'fileInput',
  buttonLabel: 'Browse',
  labelText: '',
  accept: undefined,
  fileName: undefined,
  onFileSelected: undefined,
  onFileRemoved: undefined,
  multiple: false,
};

FileBrowser.propTypes = {
  name: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'link', 'delete']),
  labelText: PropTypes.string,
  accept: PropTypes.string,
  fileName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onFileSelected: PropTypes.func,
  onFileRemoved: PropTypes.func,
  multiple: PropTypes.bool,
};
