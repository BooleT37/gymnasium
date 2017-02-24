'use strict';

import React from 'react';
import { render } from 'react-dom';

import SettingsPage from './components/SettingsPage/SettingsPage';

class SettingsApp {
    run() {
        this.setUpReact();
    }

    setUpReact() {
        render(<SettingsPage/>,
        document.getElementById('react-root'));
    }
}

var settingsApp = new SettingsApp();
settingsApp.run();