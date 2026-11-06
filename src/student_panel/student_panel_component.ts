    
import { Component, inject, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AddStudent } from "../add_student/add_student_component";
import { SetAttendance } from "../set_attendance/set_attendance_component";


@Component({
    selector:'student_panel',
    standalone: true,
    templateUrl:'student_panel_component.html' ,
    styleUrl: 'student_panel_component.scss' ,
    imports:[FormsModule, AddStudent, SetAttendance]
})

export class StudentPanel{


    onExit = output<void>();

    addStudent=false;


    addStu(){
        this.addStudent=true;
    }
    
    exit(){
        this.onExit.emit();
    }

    handleBack(){
        this.addStudent=false
    }

    handleExit(){
        this.exit();
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    