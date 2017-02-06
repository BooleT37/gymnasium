"use strict";

import './ModalHeader.css';
import { Link } from 'react-router'

import React from 'react'

export default class ModalHeader extends React.Component {
    render() {
        var backButton = this.props.backUrl ? <Link to={this.props.backUrl} className="modal_backButton"></Link> : null;
        return (
            <div key="header" className="modal_header">
                <div className="modal_header_top">
                    <span className="modal_title">{this.props.title}</span>
                    <span className={`modal_icon modal_icon_${this.props.iconType}`}></span>
                    {backButton}
                    <a href="#/" title="Закрыть" className="closeButton modal_closeButton"></a>
                </div>
                <hr key="hr" className="modal_hr modal_headerHr"/>
            </div>
        )
    }
}