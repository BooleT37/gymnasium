'use strict';

import './SouvenirOrder.css';

import React from 'react';

import SelfUpdatingComponent from '../SelfUpdatingComponent';
import ModalHeader from '../Modal/ModalHeader/ModalHeader';
import ModalFooter from '../Modal/ModalFooter/ModalFooter';

import Actions from '../../actions/Actions';
import SouvenirsStore from '../../stores/SouvenirsStore';

export default class SouvenirOrder extends SelfUpdatingComponent {
    constructor(props) {
        super(props);
        this.store = SouvenirsStore;
        this.lazyLoadStoreAction = Actions.lazyLoadSouvenirs;

        this.submitForm = this.submitForm.bind(this);
    }

    onPropsChange(props, storeState) {
        if (!storeState.loaded) {
            this.setState({ loaded: false });
            return;
        }
        this.setState({
            loaded: true,
            souvenir: this.store.getSouvenirById(props.params.souvenirId),
            form: {
                fio: "",
                phone: "",
                email: ""
            }
        });
    }

    submitForm() {
        if (console)
            console.log("Отпарвка зарабоатет, когда появится админка");
    }

    render() {
        if (this.state.loaded === false)
            return (<div className="modal_loader">Загрузка сувениров...</div>);
        var souvenir = this.state.souvenir;
        var imageElement = souvenir.photoName ?
            <img src={`/images/photos/souvenirs/${souvenir.photoName}`} alt="image" className="souvenirOrder_image"/>
            : null;
        return (
            <div className="souvenirOrder">
                <ModalHeader title="СУВЕНИРЫ" iconType="t-shirt" backUrl="/souvenirs"/>
                <div className="souvenirOrder_content modal_content">
                    <div className="souvenirOrder_left">
                        <form onSubmit={this.submitForm}>
                            <div className="souvenirOrder_row">
                                <div className="souvenirOrder_text">ФИО</div>
                                <input type="text" onChange={this.handleFioChange} />
                            </div>
                            <div className="souvenirOrder_row">
                                <div className="souvenirOrder_text">номер телефона</div>
                                <input type="text" onChange={this.handlePhonehange} />
                            </div>
                            <div className="souvenirOrder_row">
                                <div className="souvenirOrder_text">e-mail</div>
                                <input type="text" onChange={this.handleEmailChange} />
                            </div>
                            <div className="button souvenirOrder_submitButton" onClick={this.submitForm}>отправить</div>
                        </form>
                    </div>
                    <div className="souvenirOrder_right">
                        <div className="photoFrame souvenirOrder_photoFrame">
                            {imageElement}
                        </div>
                        <div className="souvenirOrder_souvenirName">{souvenir.name}</div>
                    </div>
                </div>
                <ModalFooter>
                    <div className="souvenirOrder_footerText">
                        Заполните, пожалуйста, следующие поля. Нажмите "отправить".<br/>
                        Наш администратор свяжется с вами для получения товара.
                    </div>
                </ModalFooter>
            </div>
        );
    }
}