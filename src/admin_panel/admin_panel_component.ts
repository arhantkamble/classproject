import { Component, inject, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AddStudent } from "../add_student/add_student_component";
import { AddTeacher } from "../add_teacher/add_teacher_component";
import { SetAttendance } from "../set_attendance/set_attendance_component";

@Component({
    selector:'admin_panel',
    standalone: true,
    templateUrl:'admin_panel_component.html',
    styleUrl: 'admin_panel_component.scss',
    imports:[FormsModule, AddStudent, AddTeacher, SetAttendance]
})

export class AdminPanel{


    onExit = output<void>();

    takeAttendance=false;

    takeAttend(){
        this.takeAttendance=true;
    }

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

    handleBack(){
        this.addStudent=false
        this.addTeacher=false
        this.takeAttendance=false; 
    }

    handleExit(){
        this.exit();
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    