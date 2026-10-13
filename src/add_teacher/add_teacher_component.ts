import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "add_teacher",
    imports:[FormsModule],
    standalone:true,
    styleUrl: "add_teacher_component.scss",
    templateUrl: "add_teacher_component.html"
})

export class AddTeacher{

    onTeaBack=output<void>();
    onTeaExit=output<void>();


    tId="";
    tName="";
    tMobNum="";
    tEmail="";
    tPass="";

    sOU=0;

    teachers=[{
        tId:101,
        tName:"ak",
        tMobNum:"1234567899",
        tEmail:"teach@gmail.com",
        tPass:"1234"
    },]

    save(){
        this.sOU=0;
        this.logic();
    }

    update(){
        this.sOU=1;
        this.logic();
    }

    edit(index: number) {
        const teacher = this.teachers[index];

        this.tId = String(teacher.tId);
        this.tName = teacher.tName;
        this.tMobNum = teacher.tMobNum;
        this.tEmail = teacher.tEmail;
        this.tPass = teacher.tPass;
    }

    delete(index: number) {
        if (confirm("Do you want to delete this teacher?")) {
            this.teachers.splice(index, 1);

            alert("Teacher deleted successfully");
           
        }
    }

    logic(){
        if (this.sOU==0){
            this.teachers.push({
                tId:parseInt(this.tId),
                tName:this.tName,
                tMobNum:this.tMobNum,
                tEmail:this.tEmail,
                tPass:this.tPass
            })
        }
        else if(this.sOU==1){
            this.teachers.fill({
                tId:parseInt(this.tId),
                tName:this.tName,
                tMobNum:this.tMobNum,
                tEmail:this.tEmail,
                tPass:this.tPass
            })
        }
        
    }
    back(){
        this.onTeaBack.emit();
    }
    exit(){
        this.onTeaExit.emit();
    }

}

