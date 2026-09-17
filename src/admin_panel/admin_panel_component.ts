import { Component, inject, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'admin_panel',
    standalone: true,
    templateUrl:'admin_panel_component.html',
    styleUrl: 'admin_panel_component.scss',
    imports:[FormsModule]
})
export class AdminPanel{
    onExit = output<void>();

    addStu(){
        alert("add student")
    }
    addTea(){
        alert("add teacher")
    }
    exit(){
        this.onExit.emit();
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    