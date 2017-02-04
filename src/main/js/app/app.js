'use strict';

import './app.css';
import './css/customScroll.css';
import './css/header.css';
import './css/nav.css';
import '../components/Modal/modal.css';

import Velocity from 'velocity-animate';
import 'babel-polyfill';
import {triggerClickEvent} from '../utils';

import RoutingManager from './RoutingManager';

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
    var routingManager = new RoutingManager();
    routingManager.run();
  }
}

var app = new App();
app.run();