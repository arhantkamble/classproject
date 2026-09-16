import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AdminPanel } from "../admin_panel/admin_panel_component";

@Component({
    selector: 'admin',
    standalone: true,
    templateUrl: 'admin_login_component.html',
    styleUrl: 'admin_login_component.scss',
    imports: [FormsModule, AdminPanel]
})
export class AdminLogin {
    id = ""
    password = ""
    adminlog=false
    teacherlog=false
    studentlog=false

    login() {
        if (this.id == "admin" && this.password == "1234") {
            this.adminlog=true
        }
        if (this.id == "teacher" && this.password == "1234") {
            this.teacherlog=true
        }
        if (this.id == "student" && this.password == "1234") {
            this.studentlog=true
        }
        else {
            alert("invalid credentials")
        }
    }
}