import React from 'react';
import { Button, TextInput } from '@carbon/react';

import { useThemePreference } from './ThemePreference';
import ThemeToggle from './ThemeToggle';

export default function App() {
  const [theme, setTheme] = useThemePreference();
  return (
    <div>
      <div style={{ marginBlockEnd: '1rem' }}>
        <ThemeToggle />
      </div>
      <Button>Hello world</Button>
      <Button kind="ghost">Hello world</Button>
      <div style={{ marginBlockStart: '1rem' }}>
        <TextInput labelText="Text input" />
      </div>
    </div>
  );
}
