import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, withRouter } from 'react-router';
import Modal from 'react-modal';

import GraduateClass from '../components/GraduateClass/GraduateClass';
import GraduateEdit from '../components/GraduateEdit/GraduateEdit';
import Teachers from '../components/Teachers/Teachers';
import Administration from '../components/Administration/Administration';
import Souvenirs from '../components/Souvenirs/Souvenirs';
import SouvenirOrder from '../components/SouvenirOrder/SouvenirOrder';

class EmptyModal extends React.Component {
  render() {
    <Modal isOpen={false} contentLabel="Modal"></Modal>
  }
}

function renderModalWithComponent(Component, componentParams) {
  return (
      <Modal isOpen={true} contentLabel="Modal" className="modal">
          <Component params={componentParams}/>
      </Modal>
    )
}

class GradClassModal extends React.Component {
  render() {
    return renderModalWithComponent(GraduateClass, this.props.params);
  }
}

class GradEditModal extends React.Component {
  render() {
    return renderModalWithComponent(GraduateEdit, this.props.params);
  }
}

class TeachersModal extends React.Component {
  render() {
    return renderModalWithComponent(Teachers, this.props.params);
  }
}

class AdministrationModal extends React.Component {
  render() {
    return renderModalWithComponent(Administration, this.props.params);
  }
}

class SouvenirsModal extends React.Component {
  render() {
    return renderModalWithComponent(Souvenirs, this.props.params);
  }
}

class SouvenirOrderModal extends React.Component {
  render() {
    return renderModalWithComponent(SouvenirOrder, this.props.params);
  }
}

export default class RoutingManager {
    run() {
        render((
        <Router history={hashHistory}>
            <Route path="/graduateClasses(/:classId(/graduates(/:graduateId)))" component={GradClassModal}/>
            <Route path="/graduateClasses/:classId(/graduates(/:graduateId))/addGraduate" component={GradEditModal}/>
            <Route path="/teachers(/:teacherId)" component={TeachersModal}/>
            <Route path="/administration(/:employeeId)" component={AdministrationModal}/>
            <Route path="/souvenirs" component={SouvenirsModal}/>
            <Route path="/souvenirs/order/:souvenirId" component={SouvenirOrderModal}/>
            <Route path="*" component={null}/>
        </Router>
        ), document.getElementsByClassName('ReactModalPortal')[0]);
    }
}