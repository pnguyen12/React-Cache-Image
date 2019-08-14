import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ReactCacheImage extends Component {
  static propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string.isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    src: PropTypes.string.isRequired,
    testable: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.shape({
      root: PropTypes.string,
      rootMargin: PropTypes.string,
      threshold: PropTypes.number
    })
  };

  static defaultProps = {
    height: "100",
    width: "100",
    testable: false,
    alt: ""
    // options is built already no need for default props
  };

  componentDidMount() {
    const propValidation = this.validateProps();
    if (typeof propValidation === 'string') {
      throw new Error(`Please provide correct prop type for ${propValidation}`);
    } else {
      const { className } = this.props;
      const node = document.querySelector(`.${className}`);
      const observer = new IntersectionObserver(
        this.lazyLoad,
        this.buildOptions
      );
      observer.observe(node);
    }
  }

  buildOptions = () => {
    const { options } = this.props;
    if (!options) {
      // default options
      return {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      };
    }
    // set the default props for components that only implement some and not all
    return {
      root: options.root,
      rootMargin: options.rootMargin,
      threshold: options.threshold,
    };
  };

  validateProps = () => {
    const { src, height, width, className, alt } = this.props;

    // todo validate options for root, rootMargin, and threshold

    if (isNaN(height || width)) return 'height';
    else if (typeof className !== 'string') return 'className';
    else if (typeof alt !== 'string') return 'alt';
    else if (!src) return 'src';

    return true;
  };

  testable = () => {
    const { testable } = this.props;
    return testable;
  };

  lazyLoad = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // toggle the message to be displayed for development purposes
        // use this to check whether or not the image was loaded depending on the intersection elements hit
        if (this.testable()) {
          console.warn('Intersection Hit');
        }
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
        img.setAttribute('src', src);
      }
    });
  };

  render() {
    const {
      src, className, alt, height, width,
    } = this.props;
    return (
      <>
        <img
          data-lazy={src}
          alt={alt}
          className={className}
          width={width}
          height={height}
        />
      </>
    );
  }
}
