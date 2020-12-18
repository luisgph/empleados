import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private router: Router) { }
  
  showMessage(icon:any, message: any, page?:string) {
    Swal.fire({
      allowOutsideClick: false,
      icon: icon,
      text: message,
      confirmButtonColor: '#3F51B5',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        if (page) {
          this.router.navigateByUrl(page);
        }
      }});
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
