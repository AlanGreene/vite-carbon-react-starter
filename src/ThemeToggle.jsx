import React, { useState } from 'react';
import { Toggle } from '@carbon/react';

import { useThemePreference } from './ThemePreference';

export default function ThemeToggle() {
  const [theme, setTheme] = useThemePreference();
  return (
    <Toggle
      defaultToggled={theme === 'g90'}
      id="theme"
      labelA="Light"
      labelB="Dark"
      labelText="Theme switcher"
      onToggle={enabled => setTheme(enabled ? 'g90' : 'g10')}
      size="sm"
    />
  );
}
