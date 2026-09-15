import { bootstrapApplication } from '@angular/platform-browser';
import { AdminLogin } from './admin_login/admin_login_component';
import { TeacherLogin } from './teacher_login/teacher_login_component';
import { StudentLogin } from './student_login/student_login_component';

bootstrapApplication(AdminLogin)
bootstrapApplication(TeacherLogin)
bootstrapApplication(StudentLogin)

