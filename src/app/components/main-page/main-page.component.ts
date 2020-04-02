import { Component, OnInit, Input } from '@angular/core';
import { Questions } from "../../models/questions";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  questionsAndAnswers = [
    new Questions("I have received a company laptop and I'm trying to log in for the first time, it's stuck at connecting to VPN", 
                  "Please check that you have set up your Okta account. You can check that this is set correctly by going to <a href = https://stepchange.okta-emea.com/> https://stepchange.okta-emea.com/</a> and seeing if it lets you sign in straight away or prompts you for an Okta code. If it lets you sign in with no prompt for Okta then you haven’t set it up correctly and need to start that process again from the guide."),
    new Questions("Forticlient is stuck on connecting and doesn’t prompt me for an Okta code.",
                  "This is likely an internet issue in your house. Please restart the laptop/PC and restart your internet router. Try again, if this doesn’t work you will need to call Service Desk."),
    new Questions("I’m struggling to log in to Forticlient, how can I check my account isn’t locked out?", 
                  "Open <a href = https://stepchange.okta-emea.com/> https://stepchange.okta-emea.com/</a> and see if it will let you sign in. if it doesn’t let you then you are locked out and will need to call Service Desk. "),
    new Questions("What is the username format for Forticlient and Okta?", 
                  "Please use the following format: username@cccs.co.uk"),
    new Questions("Where do I put my Okta code?", 
                  "Never put the Okta code in the password box, it is a separate box that will appear."),
    new Questions("How do I know if softphone is enabled?",
                  "Drop down the primary phone/assigned option in the top left of Shoretel and see if the Softphone option is there. If it is then its enabled, if not you will need to call Service Desk to get set up."),
    new Questions("If my VPN connections fails, when I connect my Shoretel doesn’t reconnect, is there anything I can do to fix it?",
                  "<li>Click the up arrow near the clock</li><br/><li>Right click the Shoretel icon</li><br/><li>Left click exit The Shoretel icon should then disappear</li><br/><li>Reopen Shoretel and it should now show a blue phone again</li><img src=assets/images/exit-shoretel.PNG alt=Exit Shoretel class = responsive-image>"),
    new Questions("How can I speed up the log in process?",
                  "You can edit the connection by clicking the cog in the top right as shown below.<img src=assets/images/forticlient-login.png alt=Forticlient Login class = responsive-image><br/>You will then be presented with the below screen where you will select ‘save login’ next to authentication and input your username.<img src=assets/images/edit-vpn-screen.png alt=Exit Shoretel class = responsive-image>"),
    new Questions("I had calls coming to my mobile and this is stopped working despite that option still being selected in Shoretel. What can I do to fix it?",
                  "Flip it back from mobile to unassigned/ primary phone and then back again. This should reenable the connection."),
    new Questions("I’ve received my laptop but I have never used VPN before, what order should I follow the guides in?",
                  "1.Okta self-enrol guide<br/>2. First time set up guide"),
    new Questions("Logging in after first use, its stuck on connecting to VPN. What do I need to do?",
                  "Sign in to the laptop as you would your desktop, so that is displays the Desktop. You will then follow the Forticlient guide to connect your VPN tunnel.  "),
    new Questions("Still stuck?", 
                  "Please call Service Desk"),

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
