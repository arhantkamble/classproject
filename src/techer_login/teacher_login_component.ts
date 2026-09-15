import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
    selector:'teacher',
    templateUrl:'teacher_login_component.html',
    styleUrl: 'teacher_login_component.scss',
    imports:[FormsModule]
})
export class TeacherLogin{
    id=""
    password=""
    login(){
        if(this.id=="teacher" && this.password=="1234"){
            alert("login successfull")
        }
        else{
            alert("invalid credentials")
        }
    }
}