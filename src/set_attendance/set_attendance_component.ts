import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "set_attendance",
    imports:[FormsModule],
    standalone:true,
    styleUrl: "set_attendance_component.scss",
    templateUrl: "set_attendance_component.html"
})

export class SetAttendance{

    onTeaBack=output<void>();
    onTeaExit=output<void>();

    selectedSubject: string = '';

    subjects = [
        { code: 'CC', name: 'Cloud Computing' },
        { code: 'DL', name: 'Deep Learning' },
        { code: 'RM', name: 'Research Methodology' },
        { code: 'MDM', name: 'MDM' },
        { code: 'NLP', name: 'NLP' },
        { code: 'CD', name: 'Compiler Design' }
    ];

    runSubjectMethod(code:string){
        switch (code){
            case "CC": this.cc(); break;
            case "DL": this.dl(); break;
            case "RM": this.rm(); break;
            case "MDM": this.mdm(); break;
            case "NLP": this.nlp(); break;
            case "CD": this.cd(); break;
        }
    }
    
    store(){

    }

    aList(){

    }

    selectedDate: string = '';

    onDateChange() {
        console.log('Selected Date:', this.selectedDate);
        
        if (this.selectedDate) {
            alert(`You have chosen the date: ${this.selectedDate}`);
        }
    }

    genReport(){

    }

    back(){
        this.onTeaBack.emit();
    }
    exit(){
        this.onTeaExit.emit();
    }
    cc(){

    }
    dl(){

    }
    rm(){

    }
    mdm(){

    }
    nlp(){

    }
    cd(){

    }

}

