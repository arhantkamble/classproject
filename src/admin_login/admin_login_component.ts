import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'admin',
    templateUrl: 'admin_login_component.html',
    styleUrl: 'admin_login_component.scss',
    imports: [FormsModule]
})
export class AdminLogin {
    id = ""
    password = ""
    private router = inject(Router);
    login() {
        if (this.id == "admin" && this.password == "1234") {
            this.router.navigate(['/admin-panel']);
        }
        else {
            alert("invalid credentials")
        }
    }
}