'use strict';

import './tablePage.css';

import React from 'react';
import { render } from 'react-dom';
import Modernizr from '../../modernizr';

import TableStore from './TableStore';
import EntityTable from './components/EntityTable/EntityTable';

class TablePage {
    run() {
        this.setUpReact();
    }

    setUpReact() {
        var storeState = TableStore.state;
        render(
            (
                <div className="tablePage">
                    <a href="/admin/">← Назад на главную страницу</a>
                    <h2 className="tablePage_title">{storeState.title}</h2>
                    <EntityTable/>
                </div>
            ),
        document.getElementById('react-root'))
    }
}

var tablePage = new TablePage();
tablePage.run();