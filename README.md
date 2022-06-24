# Reusable Components Library

## Setup

Begin with `yarn install` on the root directory to install your required `node_modules`.

```
yarn install
```

---

## Start the StoryBook

To start the storybook locally, run:

```
yarn storybook
```

---

## Test/Add a new component to StoryBook

Create a new file under `/stories` directory with the following naming convention, `[COMPONENT_NAME].stories.jsx`, using PascalCase for your component name.

As a template you can use the following:

```js
import React from 'react';
import { action } from '@storybook/addon-actions';

import [COMPONENT_NAME] from '../components/[COMPONENT_MAIN_FILE]]';

export default {
  title: 'Components/Button', // based on under which section you want your component to be shown
  component: [COMPONENT_NAME],
};

const Template = (args) => (
  <[COMPONENT_NAME] {...args} />
);

export const [COMPONENT_STATE1] = Template.bind({});
[COMPONENT_STATE1].args = {
  // Here you initialize your component props for your example to be rendered
  // Here's an example
  text: 'Primary Button',
  backgroundColor: '#0220c1',
  iconColor: '#fff',
  textColor: '#fff',
  isDisabled: false,
  size: 'large',
  styles: { margin: '10px', padding: '10px', width: '200px' },
};
```

You can create component states, as many as you need, and all will be rendered inside the story book. (Check the already created stories for more info)
For any other customization, you can always refer to the storybook documentation [here](https://storybook.js.org/docs/react/writing-stories/introduction).

---
