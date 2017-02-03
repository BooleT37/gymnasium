'use strict';

import './app.css';
import './css/customScroll.css';
import './css/header.css';
import './css/nav.css';
import '../components/Modal/modal.css';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, withRouter } from 'react-router';
import Velocity from 'velocity-animate';
import Modal from 'react-modal';
import 'babel-polyfill';

import GraduateClass from '../components/GraduateClass/GraduateClass';
import GraduateEdit from '../components/GraduateEdit/GraduateEdit';
import Teachers from '../components/Teachers/Teachers';
import Administration from '../components/Administration/Administration';
import Souvenirs from '../components/Souvenirs/Souvenirs';
import {triggerClickEvent} from '../utils';

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

class App {
  run() {
    this.setUpAutoscrollers();
    this.setUpDesignSwitchButton();
    this.setUpRouter();
  }

  setUpAutoscrollers() {
    

    function openLink(id) {
        var element = document.getElementById(id);
        var image = element.getElementsByClassName("nav_element_image")[0];
        var h = window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight;
        var navElementHeightHalf = 91;
        var offset = -(h / 2 - navElementHeightHalf);
        Velocity(image, "scroll", { container: document.body, easing: "ease", offset: offset});

        setTimeout(function() { triggerClickEvent(element); }, 400)
    }

    var links = document.getElementsByClassName("header_link");
    Array.from(links).forEach((el, i) => {el.onclick = openLink.bind(null, el.getAttribute('data-linkTo'))});
  }

  setUpDesignSwitchButton() {
    var designSwitchButton = document.getElementById("designSwitchButton");
    if (!designSwitchButton)
      return;
    var design = document.getElementById("design");
    designSwitchButton.isOn = design.style.display !== "none";

    designSwitchButton.onclick = function() {
      if (this.isOn) {
        design.style.display = "none";
        this.textContent = "Вкл."
        this.isOn = false;
      } else {
        design.style.display = "block";
        this.textContent = "Выкл."
        this.isOn = true;
      }
    }
  }

  setUpRouter() {
    render((
      <Router history={hashHistory}>
        <Route path="/graduateClasses(/:classId(/graduates(/:graduateId)))" component={GradClassModal}/>
        <Route path="/graduateClasses/:classId(/graduates(/:graduateId))/addGraduate" component={GradEditModal}/>
        <Route path="/teachers(/:teacherId)" component={TeachersModal}/>
        <Route path="/administration(/:employeeId)" component={AdministrationModal}/>
        <Route path="/souvenirs" component={SouvenirsModal}/>
        <Route path="*" component={null}/>
      </Router>
    ), document.getElementsByClassName('ReactModalPortal')[0]);
  }
}

var app = new App();
app.run();