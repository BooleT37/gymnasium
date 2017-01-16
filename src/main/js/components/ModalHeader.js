"use strict";

import React from 'react'

export default class ModalHeader extends React.Component {
    render() {
        var backButton = this.props.backUrl ? <a href={"#" + this.props.backUrl} class="modal_backButton"><div className="modal_icon_back"></div></a> : null;
        return (
            <div key="header" className="modal_header">
                <div>
                    <span className="modal_title">{this.props.title}</span>
                    <span className={`modal_icon modal_icon_${this.props.iconType}`}></span>
                    {backButton}
                    <a href="#/" title="Закрыть" className="modal_closeButton"></a>
                </div>
                <hr key="hr" className="modal_hr modal_headerHr"/>
            </div>
        )
    }
}