import React from 'react';
import Icon from './';
import Tabs from 'react-simpletabs';

const base = typeof window === 'object' ? window.location.pathname : '/';
const svgUri = base + 'assets/icons.svg';

export default (
  <Tabs>
    <Tabs.Panel title="Default version">
      {Icon.options.icon.map((iconType) => {
        const key = `default--${iconType}`;
        return <Icon icon={iconType} uri={svgUri} key={key} />;
      })}
    </Tabs.Panel>
    <Tabs.Panel title="Rounded">
      {Icon.options.icon.map((iconType) => {
        const key = `rounded--${iconType}`;
        return (
            <Icon icon={iconType} uri={svgUri} className="rounded" color="white"
              background="black" key={key}
            />);
      })
      }
    </Tabs.Panel>
    <Tabs.Panel title="Icons in a background-image">
      {Icon.options.icon.map((iconType) => {
        const className = `icon icon--${iconType}`;
        return (
            <span className={className} key={className}>
              Text for a11y and SEO purposes.
            </span>);
      })}
    </Tabs.Panel>

    <Tabs.Panel title="Icons in a background-image (london color)" style={{ background: '#333' }}>
      {Icon.options.icon.map((iconType) => {
        const className = `icon icon--${iconType}-london`;
        return (
            <span className={className} key={className}>
              Text for a11y and SEO purposes.
            </span>);
      })}
    </Tabs.Panel>
  </Tabs>
);
