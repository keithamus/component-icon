import React from 'react';
import Icon from './index.es6';

export default (
  <div>
    <h1>Default values</h1>
    <Icon icon="facebook" />
    <Icon icon="twitter" />
    <Icon icon="googleplus" />
    <Icon icon="linkedin" />
    <Icon icon="whatsapp" />
    <Icon icon="mail" />
    <Icon icon="rss" />
    <Icon icon="down" />
    <Icon icon="up" />
    <Icon icon="right" />
    <Icon icon="left" />
    <Icon icon="close" />
    <Icon icon="worldif" />
    <Icon icon="home" />
    <Icon icon="hamburger" />
    <Icon icon="user" />
    <Icon icon="magnifier" />
    <Icon icon="share" />
    <Icon icon="economist-small"/>
    <Icon icon="economist"/>
    <h1>Overwrite</h1>
    <Icon className="rounded" icon="facebook" color="green"
      background="red"
    />
    <Icon className="rounded" icon="twitter" color="green"
      background="red"
    />
    <Icon className="rounded" icon="googleplus" color="green"
      background="red"
    />
    <Icon className="rounded" icon="linkedin" color="green"
      background="red"
    />
    <Icon className="rounded" icon="whatsapp" color="green"
      background="red"
    />
    <Icon className="rounded" icon="mail" color="green"
      background="red"
    />
    <Icon className="rounded" icon="rss" color="green"
      background="red"
    />
    <Icon className="rounded" icon="down" color="green"
      background="red"
    />
    <Icon className="rounded" icon="up" color="green"
      background="red"
    />
    <Icon className="rounded" icon="right" color="green"
      background="red"
    />
    <Icon className="rounded" icon="right" color="green"
      background="red"
    />
    <Icon className="rounded" icon="close" color="green"
      background="red"
    />
    <Icon className="rounded" icon="left" color="green"
      background="red"
    />
    <Icon className="rounded" icon="worldif" color="green"
      background="red"
    />
    <Icon className="rounded" icon="home" color="green"
      background="red"
    />
    <Icon className="rounded" icon="hamburger" color="green"
      background="red"
    />
    <Icon className="rounded" icon="user" color="green"
      background="red"
    />
    <Icon className="rounded" icon="magnifier" color="green"
      background="red"
    />
    <Icon className="rounded" icon="share" color="green"
      background="red"
    />
    <Icon className="rounded" icon="economist-small"
      background="white"
    />
    <Icon icon="economist" size="200px"
      background="white"
    />
    <h1>Icons in background-image mode (IE: no extra svg download)</h1>
    <p>
      To use this you need to add
      <code>@import "@economist/component-icon";</code> and
      <code>@import "@economist/component-icon/backgrounds/ICONNAME.css";</code>
      to your postCSS.
    </p>
    <p>Then, use the <code>.icon .icon--ICONNAME</code> classes on any element.</p>
    <span className="icon icon--facebook">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--twitter">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--googleplus">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--linkedin">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--whatsapp">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--mail">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--rss">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--down">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--up">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--right">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--left">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--close">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--worldif">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--home">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--hamburger">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--user">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--magnifier">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--share">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--economist-small">
      Text for a11y and SEO purposes.
    </span>
    <span className="icon icon--economist">
      Text for a11y and SEO purposes.
    </span>

    <h2>Ok, now in London color</h2>
    <p>(The classnames now are <code>.icon-ICONNAME-COLORNAME</code>)</p>
    <p>Developer note: To add color variations, you need to edit color-variations.json</p>
    <div style={{ background: '#333' }}>
      <span className="icon icon--facebook-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--twitter-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--googleplus-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--linkedin-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--whatsapp-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--mail-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--rss-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--down-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--up-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--right-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--left-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--close-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--worldif-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--home-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--hamburger-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--user-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--magnifier-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--share-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--economist-small-london">
        Text for a11y and SEO purposes.
      </span>
      <span className="icon icon--economist-london">
        Text for a11y and SEO purposes.
      </span>
    </div>
  </div>
);
