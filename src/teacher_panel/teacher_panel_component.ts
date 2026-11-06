import { Component, inject, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AddStudent } from "../add_student/add_student_component";
import { SetAttendance } from "../set_attendance/set_attendance_component";


@Component({
    selector:'teacher_panel',
    standalone: true,
    templateUrl:'teacher_panel_component.html',
    styleUrl: 'teacher_panel_component.scss',
    imports:[FormsModule, AddStudent, SetAttendance]
})

export class TeacherPanel{


    onExit = output<void>();

    addStudent=false;
    addTeacher=false;
    takeAttendance=false;

    takeAttend(){
        this.takeAttendance=true;
    }

    addStu(){
        this.addStudent=true;
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