import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'] 
})
export class EmployeeDetailsComponent implements OnInit {

  id: number = 0;
  employee: Employee = new Employee();

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Added Router for navigation
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    // Extract the `id` from route parameters
    this.id = this.route.snapshot.params['id'];

    // Fetch employee details based on the ID
    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {
        this.employee = data;
      },
      error => {
        console.error('Error fetching employee details:', error);
      }
    );
  }

  // Add a goBack method for navigation
  goBack(): void {
    this.router.navigate(['/employee-list']); // Change to your route for employee list
  }
}
