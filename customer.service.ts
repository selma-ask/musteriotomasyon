import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor() { }
}
export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
