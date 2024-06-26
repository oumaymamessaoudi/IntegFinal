import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/FrontOffice/services2/shared.service';
import { SignService } from '../../../Services/sign.service';
import { UpdateUserService } from '../../../Services/update-user.service';

@Component({
  selector: 'app-headertemp',
  templateUrl: './headertemp.component.html',
  styleUrls: ['./headertemp.component.css']
})
export class HeadertempComponent {
  constructor(private router: Router, private sharedService: SharedService,
    
    
    public authService: SignService,private updateUserService:UpdateUserService
    ) {}



    
  goToElderlyDashboard(): void {
    // Extract the ID from the current URL
    const currentUrl = this.router.url; // Get the current URL
    const urlParts = currentUrl.split('/'); // Split the URL by '/'
    const idFromUrl = parseInt(urlParts[urlParts.length - 1], 10); // Get the last part as ID

    // Send the ID to the shared service
    this.sharedService.setElderlyId(idFromUrl);

    // Navigate to the Elderly Dashboard component
    this.router.navigate(['/dash', idFromUrl]);
  }




  onLogoutClick() {
    this.authService.logout();
  }
  
  goToShop(): void {
    // Extract the ID from the current URL
    const currentUrl = this.router.url; // Get the current URL
    const urlParts = currentUrl.split('/'); // Split the URL by '/'
    const idFromUrl = parseInt(urlParts[urlParts.length - 1], 10); // Get the last part as ID

    // Send the ID to the shared service
    this.sharedService.setElderlyId(idFromUrl);

    // Navigate to the Elderly Dashboard component
    this.router.navigate(['/products', idFromUrl]);
  }
}
