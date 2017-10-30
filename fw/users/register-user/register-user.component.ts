import { FrameworkConfigService } from '../../services/framework-config.service';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'fw-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

backgroundUrl = "";
  @HostBinding('style.background-image') 
  get _url() {
    return this.backgroundUrl;
  }

  constructor(private frameworkConfigService: FrameworkConfigService) { 
    this.backgroundUrl = "url('/././assets/" + frameworkConfigService.signInBackgroundImage + "')";
  }

  ngOnInit() {
  }

}
