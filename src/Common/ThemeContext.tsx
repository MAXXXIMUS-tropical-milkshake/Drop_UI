import React, { createContext, useState } from "react";

const ThemeContext = createContext({ appTheme: 'light', setAppTheme: (kek: string) => {} });

export default ThemeContext;