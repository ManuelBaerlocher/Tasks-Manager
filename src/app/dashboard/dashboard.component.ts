import { Component, OnInit } from '@angular/core';
import { getAuth, User, user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(public auth: AngularFireAuth, private router: Router, public fireAuth: AngularFireAuth,) { }

  ngOnInit(): void {
    this.changeUserName()

  }

  changeUserName() {
    this.auth.currentUser.then((result: any) => {
      result.updateProfile({
        displayName: "max"
      }).then((result: any) => {
        this.checkCurrentUser()
      });
    });
  }

  passwortReset() {
    this.auth.sendPasswordResetEmail('manuell@bluewin.ch');
  }

  checkCurrentUser() {

    this.auth.currentUser.then((result: any) => {
      result.displayName
      console.log('user', result)

    });

  }

  editUser() {
  }




  logout() {
    this.auth.signOut().then((result: any) => {
      console.log('new Chat', result)
      this.router.navigate(['login'])
    });

  }

}
