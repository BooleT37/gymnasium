'use strict';

import './tablePage.css';

import React from 'react';
import { render } from 'react-dom';

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
                    <div className="title">{storeState.tableTitle}</div>
                    <EntityTable/>
                </div>
            ),
        document.getElementById('react-root'))
    }
}

var tablePage = new TablePage();
tablePage.run();