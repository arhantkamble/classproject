import { Component } from "@angular/core";

@Component({
    selector:"main",
    templateUrl:"add_student_component.html",
    styleUrl:"add_student_component.scss"
})
export class MainComponent{
    persons=[
        {id:1,name:"Raju",age:23},
        {id:2,name:"Babli",age:21},
        {id:3,name:"Bunty",age:18},
        {id:4,name:"Ram",age:20}
        
    ]
}