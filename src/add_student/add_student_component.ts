import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common"; // Added for *ngIf and *ngFor support

@Component({
    selector: "add_student",
    standalone: true,
    templateUrl: "add_student_component.html",
    styleUrl: "add_student_component.scss",
    imports: [FormsModule, CommonModule] // Added CommonModule here
})
export class AddStudent {

    onStuBack = output<void>();
    onStuExit = output<void>();

    id = "";
    rollNo = "";
    name = "";
    fatherName = "";
    gender = "";
    age = "";
    branch = "";
    year = "";
    sem = "";
    mobileNo = "";
    email = "";
    address = "";
    password = "";

    // Image Upload Tracking Properties
    selectedFiles: File[] = [];
    imagePreviews: string[] = [];
    imageError: string | null = null;

    students: any[] = [
        {
            id: 1,
            rollNo: 101,
            name: "Raju",
            fatherName: "RajuKaBaap",
            gender: "male",
            age: 23,
            branch: "cs",
            year: 2026,
            sem: 4,
            mobileNo: 1234567899,
            email: "raju@gmail.com",
            address: "nagpur",
            password: "12a34",
            images: [] // Holds base64 preview paths
        },
    ];

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.imageError = null;

        if (!input.files || input.files.length === 0) {
            return;
        }

        const files = Array.from(input.files);

        if (files.length !== 3) {
            this.imageError = `Please select exactly 3 images. (Selected: ${files.length})`;
            this.selectedFiles = [];
            this.imagePreviews = [];
            input.value = ''; 
            return;
        }

        this.selectedFiles = files;
        this.generatePreviews();
    }

    generatePreviews(): void {
        this.imagePreviews = [];
        this.selectedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.imagePreviews.push(e.target.result);
            };
            reader.readAsDataURL(file);
        });
    }

    save() {
        this.students.push({
            id: parseInt(this.id),
            rollNo: parseInt(this.rollNo),
            name: this.name,
            fatherName: this.fatherName,
            gender: this.gender,
            age: parseInt(this.age),
            branch: this.branch,
            year: parseInt(this.year),
            sem: parseInt(this.sem),
            mobileNo: parseInt(this.mobileNo),
            email: this.email,
            address: this.address,
            password: this.password,
            images: [...this.imagePreviews] // Saves current images to student row
        });

        this.clearForm(); // Clears text fields and files after click
    }

    clearForm() {
        this.id = "";
        this.rollNo = "";
        this.name = "";
        this.fatherName = "";
        this.gender = "";
        this.age = "";
        this.branch = "";
        this.year = "";
        this.sem = "";
        this.mobileNo = "";
        this.email = "";
        this.address = "";
        this.password = "";
        
        // Reset image picker states
        this.selectedFiles = [];
        this.imagePreviews = [];
        this.imageError = null;
    }

    exit() {
        this.onStuExit.emit();
    }
    
    back() {
        this.onStuBack.emit();
    }
}
