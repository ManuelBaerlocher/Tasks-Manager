import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
  test = []
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.mail()

  }


  google() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result: any) => {

      this.test = result
      console.log('google', this.test)
      this.router.navigate([''])
    });
  }

  anoymous() {
    this.auth.signInAnonymously().then((result: any) => {

      this.test = result

      console.log('anoymous', this.test)

      this.router.navigate([''])

    });
  }

  mail() {

    this.auth.signInWithEmailAndPassword('test@test.ch', '123456').then((result: any) => {

      this.test = result
      console.log('mail', this.test)
      this.router.navigate([''])

    });
  }




  logout() {
    this.auth.signOut().then((result: any) => {
      console.log('new Chat', result)
      this.router.navigate([''])
    });;

  }
}
