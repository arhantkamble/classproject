import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
    selector:'admin',
    templateUrl:'admin_login_component.html',
    styleUrl: 'admin_login_component.scss',
    imports:[FormsModule]
})
export class AdminLogin{
    id=""
    password=""
    login(){
        if(this.id=="admin" && this.password=="1234"){
            alert("login successfull")
        }
        else{
            alert("invalid credentials")
        }
    }
}