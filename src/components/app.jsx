import 'aframe';
import { Entity, Scene } from 'aframe-react';
import React from 'react';

const App = () =>
  (<Scene>
    <Entity
      geometry={{ primitive: 'box' }}
      material={{ color: 'red' }}
      position={{ x: 0, y: 0, z: -5 }}
    />
    <Entity light={{ type: 'point' }} />
    <Entity text={{ value: 'Hello, WebVR!' }} />
  </Scene>);

export default App;
