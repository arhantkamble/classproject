import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:"main",
    templateUrl:"add_student_component.html",
    styleUrl:"add_student_component.scss",
    imports: [FormsModule]
})



export class MainComponent{
    id=""
    rollNo=""
    name=""
    fatherName=""
    gender=""
    age=""
    branch=""
    year=""
    sem=""
    mobileNo=""
    email=""
    address=""
    password=""

    persons=[
        {
            id:1,
            rollNo:101,
            name:"Raju",
            fatherName:"RajuKaBaap",
            gender:"male",
            age:23,
            branch:"cs",
            year:2026,
            sem:4,
            mobileNo:1234567899,
            email:"raju@gmail.com",
            address:"nagpur",
            password:1234,
        },
    ]
}