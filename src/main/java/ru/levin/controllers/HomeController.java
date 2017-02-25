package ru.levin.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

@Controller
public class HomeController {

    @RequestMapping(value = "/")
    public ModelAndView index() {
        String debugEnv = System.getenv().get("DEBUG_MODE");
        Boolean isDebug = debugEnv != null && debugEnv.equals("TRUE");
        Map<String, Object> model = new HashMap<>();
        model.put("debug", isDebug);
        return new ModelAndView("index", model);
    }

    @RequestMapping(value = "/cat")
    public ModelAndView animation() {
        String debugEnv = System.getenv().get("DEBUG_MODE");
        Boolean isDebug = debugEnv != null && debugEnv.equals("TRUE");
        Map<String, Object> model = new HashMap<>();
        model.put("debug", isDebug);
        model.put("animation", true);
        return new ModelAndView("index", model);
    }

    @GetMapping("/login")
    public String login() { return "login"; }
}