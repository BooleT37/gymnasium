'use strict';

import './app.css';
import './css/customScroll.css';
import './css/header.css';
import './css/modal.css';
import './css/nav.css';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, withRouter } from 'react-router';
import Velocity from 'velocity-animate';
import Modal from 'react-modal';
import 'babel-polyfill';

import GraduateClass from './../components/GraduateClass/GraduateClass';
import GraduateEdit from './../components/GraduateEdit/GraduateEdit';

class EmptyModal extends React.Component {
  render() {
    <Modal isOpen={false} contentLabel="Modal"></Modal>
  }
}

class GradClassModal extends React.Component {
  render() {
    return (
      <Modal isOpen={true} contentLabel="Modal" className="modal">
          <GraduateClass params={this.props.params}/>
      </Modal>
    )
  }
}

class GradEditModal extends React.Component {
  render() {
    return (
      <Modal isOpen={true} contentLabel="Modal" className="modal">
          <GraduateEdit params={this.props.params}/>
      </Modal>
    )
  }
}

class App {
  run() {
    this.setUpAutoscrollers();
    this.setUpDesignSwitchButton();
    this.setUpRouter();
  }

  setUpAutoscrollers() {
    function triggerClickEvent(el) {
        if (document.createEvent) {
            var event = document.createEvent("MouseEvents");
            event.initEvent("click", true, true);
            el.dispatchEvent(event);
        }
        else if (el.click) {
            el.click();
        }
    }

    function openLink(id) {
        var element = document.getElementById(id);
        Velocity(element, "scroll", { container: document.body, easing: "ease", offset: -200 });

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
        <Route path="*" component={null}/>
      </Router>
    ), document.getElementsByClassName('ReactModalPortal')[0]);
  }
}

var app = new App();
app.run();