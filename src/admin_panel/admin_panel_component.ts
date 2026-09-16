import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'admin_panel',
    standalone: true,
    templateUrl:'admin_panel_component.html',
    styleUrl: 'admin_panel_component.scss',
    imports:[FormsModule]
})
export class AdminPanel{
    
    addStu(){

    }
    addTea(){

    }
    exit(){
    }
}