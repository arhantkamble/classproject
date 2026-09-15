import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector:'admin_panel',
    templateUrl:'admin_panel_component.html',
    styleUrl: 'admin_panel_component.scss',
    imports:[FormsModule]
})
export class AdminPanel{
    private router = inject(Router);
    
    addStu(){

    }
    addTea(){

    }
    exit(){
        this.router.navigate(['/login']);
    }
}