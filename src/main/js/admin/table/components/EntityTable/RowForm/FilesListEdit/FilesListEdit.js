import React from 'react';

import './FilesListEdit.css';

/*interface Props {
    fileNames: string[]
    onAdd(input: HTMLInputElement): void;
    onDelete(fileName: string): void;
}*/

export default class FilesListEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenImage: null
        }

        this.onAddFileClick = this.onAddFileClick.bind(this);
    }

    onAddFileClick() {
        this.props.onAdd(this.input);
        this.setState({chosenImage: null});
    }

    render() {
        return (
            <div className="filesListEdit">
                {this.renderList()}
                <input
                    ref={(input) => this.input = input}
                    type="file"
                    onChange={(event) => { this.setState({chosenImage: event.target.files[0]})}}
                    className="filesListEdit_addFileInput"
                />
                {this.state.chosenImage && this.renderAddFileButton()}
            </div>
        )
    }

    renderList() {
        return this.props.fileNames.map((name) => this.renderRow(name));
    }

    renderRow(fileName) {
        return (
            <div className="filesListEdit_row" key={fileName}>
                <span className="filesListEdit_fileName" title={fileName}>{fileName}</span>
                <span
                    className="filesListEdit_deleteButton"
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
                className="filesListEdit_addFileButton"
                onClick={this.onAddFileClick}
            >
                <span className="filesListEdit_addFileButtonIcon">+</span> добавить файл
            </div>
        )
    }
}