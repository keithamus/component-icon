import React from 'react';

export default class Icon extends React.Component {

  static get propTypes() {
    return {
      icon: React.PropTypes.oneOf(Icon.options.icon).isRequired,
      background: React.PropTypes.string,
      color: React.PropTypes.string,
      size: React.PropTypes.string,
      className: React.PropTypes.string,
      uri: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      className: '',
      uri: '/assets/icons.svg',
      size: '60px',
    };
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.icon !== nextProps.icon ||
      this.props.background !== nextProps.background ||
      this.props.color !== nextProps.color ||
      this.props.size !== nextProps.size ||
      this.props.className !== nextProps.className ||
      this.props.uri !== nextProps.uri
    );
  }

  static get options() {
    return {
      icon: [
        'close',
        'down',
        'economist-small',
        'economist',
        'facebook',
        'googleplus',
        'hamburger',
        'home',
        'instagram',
        'left',
        'linkedin',
        'magnifier',
        'mail',
        'minus',
        'plus',
        'right',
        'rss',
        'share',
        'tumblr',
        'twitter',
        'up',
        'user',
        'whatsapp',
        'worldif',
        'youtube',
      ],
    };
  }

  render() {
    /* eslint "react/no-danger": 0 */
    const props = {
      role: 'img',
      'aria-labelledby': 'title',
      className: `Icon Icon-${this.props.icon}`,
      dangerouslySetInnerHTML: {
        // use string literals here to avoid extraneous newlinw chars
        '__html':
          `<title id="title">${this.props.icon} icon</title>` +
          '<use ' +
          'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
          `xlink:href="${this.props.uri}#${this.props.icon}"` +
        '></use>',
      },
    };
    if (this.props.color) {
      props.fill = this.props.color;
    }
    if (this.props.size) {
      props.width = props.height = this.props.size;
    }
    if (this.props.className) {
      props.className += ` ${this.props.className}`;
    }
    if (this.props.background) {
      props.style = { background: this.props.background };
    }
    return (<svg {...props}/>);
  }
}
