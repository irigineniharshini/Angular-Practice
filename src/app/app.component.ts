import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app-service';
interface UsersInterface{
  message: string,
  response: any;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Angular-practice';
  isFormValid: boolean = true;
  myForm = new FormGroup({
    userName: new FormControl('',Validators.required),
    passwordHash: new FormControl('',Validators.required),
  });
  ngOnInit(): void {
    this.getUsers();
  }
  constructor(private AppService : AppService) {
  }
  
  submit () {
   this.isFormValid = false;
   if(this.myForm.invalid){
    return;
  }
  this.login();
}
getUsers () {


 this.AppService.getUsers().subscribe((resp: UsersInterface ) => {
console.log(resp.response);
});
}
login (){
    
    this.AppService.userLogin(this.myForm.value).subscribe((resp: any)=> {
  console.log(resp)
    });
  }
  }
