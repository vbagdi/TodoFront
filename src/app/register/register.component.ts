import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  registerUser(registerForm: NgForm) {
    if (registerForm.invalid) {
      console.log('hi');
      return;
    }

    const {username, password} = registerForm.value;
    this.apiService.register(username, password).subscribe(res => {
      registerForm.reset();
    });

  }
}