"use strict";

import './ModalFooter.css';

import React from 'react';

export default class ModalFooter extends React.Component {
    render() {
        return (
            <div className="modal_footer">
                <hr key="hr" className="modal_hr modal_footerHr"/>
                <div className="modal_footer_content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}