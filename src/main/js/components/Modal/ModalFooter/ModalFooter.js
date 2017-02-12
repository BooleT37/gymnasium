'use strict';

import './ModalFooter.css';

import React from 'react';

export default class ModalFooter extends React.Component {
    render() {
        return (
            <div className="modal_footer">
                    {this.props.children}
            </div>
        );
    }
}