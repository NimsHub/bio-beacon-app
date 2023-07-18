import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
//import {AthleteService} from "../../services/admin.service";
import {DataService} from "../../services/data.service";
//import {AdminDetails} from "../../models/AdminDetails";

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {
  userRole: string | undefined;
  //athlete: AthleteDetails | undefined;

  constructor(
    private authService: AuthService,
    //private adminService: AdminService,
    private dataService: DataService
  ) {
    this.userRole = authService.getUserRole()
  }

  logout() {
    this.authService.logout()
  }

  // setUserDetails() {
  //   if (this.userRole == 'ADMIN') {
  //     this.adminService.getAdminDetails().subscribe(
  //       {
  //         next: (value) => {
  //           this.admin = value
  //           this.dataService.setAdminDetails(value)
  //         },
  //         error: (error) => console.log(error),
  //         complete: () => console.log(this.dataService.getAdminDetails())
  //       }
  //     );
  //   } 
  // }

  ngOnInit(): void {
    //this.setUserDetails();
  }
}

