package multithreadingspringboot.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import multithreadingspringboot.service.EmailService;

@RestController
@RequestMapping("/email")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/send/{to}")
    public String sendEmail(@PathVariable String to){
        emailService.sendEmail(to); // async call
        return "Email request triggered for: " + to;
    }
}
