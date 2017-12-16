import React from 'react';

import './SimpleFilesListEdit.css';

/*interface Props {
    fileNames: string[]
    onAdd(fileName: string): void;
    onDelete(fileName: string): void;
}*/

export default class SimpleFilesListEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newFileName: ""
        }

        this.onAddFileClick = this.onAddFileClick.bind(this);
    }

    onAddFileClick() {
        this.props.onAdd(this.state.newFileName);
        this.setState({newFileName: ""});
    }

    render() {
        return (
            <div className="simpleFilesListEdit">
                {this.renderList()}
                <input
                    value={this.state.newFileName}
                    onChange={(event) => { this.setState({newFileName: event.target.value})}}
                    className="simpleFilesListEdit_addFileInput"
                />
                {this.state.newFileName && this.renderAddFileButton()}
            </div>
        )
    }

    renderList() {
        return this.props.fileNames.map((name) => this.renderRow(name));
    }

    renderRow(fileName) {
        return (
            <div className="simpleFilesListEdit_row" key={fileName}>
                <span className="simpleFilesListEdit_fileName" title={fileName}>{fileName}</span>
                <span
                    className="simpleFilesListEdit_deleteButton"
                    title="Удалить файл"
                    onClick={() => { this.props.onDelete(fileName); }}
                >
                    ✕
                </span>
            </div>
        );
    }

    renderAddFileButton() {
        return (
            <div
                className="simpleFilesListEdit_addFileButton"
                onClick={this.onAddFileClick}
            >
                <span className="simpleFilesListEdit_addFileButtonIcon">+</span> добавить файл
            </div>
        )
    }
}