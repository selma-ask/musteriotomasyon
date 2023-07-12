import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'path-to-customer-service';
import { Customer } from 'musteri-to-customer-model';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe(
      (      customers: Customer[]) => {
        this.customers = customers;
      },
      () => {
        // Hata durumunda yapılacak işlemler
      }
    );
  }
}