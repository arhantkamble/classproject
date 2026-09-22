import { Component, inject, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AddStudent } from "../add_student/add_student_component";

@Component({
    selector:'admin_panel',
    standalone: true,
    templateUrl:'admin_panel_component.html',
    styleUrl: 'admin_panel_component.scss',
    imports:[FormsModule, AddStudent]
})

export class AdminPanel{
    onExit = output<void>();

    addStudent=false

    addStu(){
        this.addStudent=true;
    }
    addTea(){
        alert("add teacher")
    }
    exit(){
        this.onExit.emit();
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    