import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
    selector:'student',
    templateUrl:'student_login_component.html',
    styleUrl: 'student_login_component.scss',
    imports:[FormsModule]
})
export class StudentLogin{
    id=""
    password=""
    login(){
        if(this.id=="student" && this.password=="1234"){
            alert("login successfull")
        }
        else{
            alert("invalid credentials")
        }
    }
}