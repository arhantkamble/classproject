import { Component, inject, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AddStudent } from "../add_student/add_student_component";
import { AddTeacher } from "../add_teacher/add_teacher_component";

@Component({
    selector:'admin_panel',
    standalone: true,
    templateUrl:'admin_panel_component.html',
    styleUrl: 'admin_panel_component.scss',
    imports:[FormsModule, AddStudent, AddTeacher]
})

export class AdminPanel{
    onExit = output<void>();

    addStudent=false
    addTeacher=false

    addStu(){
        this.addStudent=true;
    }
    addTea(){
        this.addTeacher=true;
    }
    exit(){
        this.onExit.emit();
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    