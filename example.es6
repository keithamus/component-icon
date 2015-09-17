import React from 'react';
import Icon from './index.es6';

const base = location.path;
const svgUri = base + '/assets/icons.svg';

export default (
  <div>
    <p>Default version</p>
    {Icon.options.icon.map((iconType) => {
      const key = `default--${iconType}`;
      return <Icon icon={iconType} uri={svgUri} key={key} />;
    })}
    <p>Rounded version</p>
    {Icon.options.icon.map((iconType) => {
      const key = `rounded--${iconType}`;
      return (
          <Icon icon={iconType} uri={svgUri} className="rounded" color="white"
            background="black" key={key}
          />);
    })
    }
    <p>Icons in a background-image</p>
    {Icon.options.icon.map((iconType) => {
      const className = `icon icon--${iconType}`;
      return (
          <span className={className} key={className}>
            Text for a11y and SEO purposes.
          </span>);
    })}

    <div style={{ background: '#333' }}>
      <p>Icons in a background-image</p>
      {Icon.options.icon.map((iconType) => {
        const className = `icon icon--${iconType}-london`;
        return (
            <span className={className} key={className}>
              Text for a11y and SEO purposes.
            </span>);
      })}
    </div>
  </div>
);
