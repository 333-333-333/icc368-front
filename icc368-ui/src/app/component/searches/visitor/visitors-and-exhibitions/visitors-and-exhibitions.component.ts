import { Component } from '@angular/core';
import { VisitorSearchService } from '../../../../service/visitor-search.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Nombre_Usuario	Apellidos_Usuario	Correo_Usuario	Nombre_Exhibicion	Fecha_Ingreso	Fecha_Salida

interface VisitorAndExhibitionData {
  Nombre_Usuario: string;
  Apellidos_Usuario: string;
  Correo_Usuario: string;
  Nombre_Exhibicion: string;
  Fecha_Ingreso: Date;
  Fecha_Salida: Date;
}

@Component({
  selector: 'app-visitors-and-exhibitions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './visitors-and-exhibitions.component.html',
  styleUrl: './visitors-and-exhibitions.component.css'
})
export class VisitorsAndExhibitionsComponent {
  data: VisitorAndExhibitionData[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 15;

  startDate!: Date ;
  endDate!: Date;
  periodicity: string = 'day';

  dataLoaded: boolean = false;
  serviceError: boolean = false;

  constructor(private visitorSearchService : VisitorSearchService) {}

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  search() {
    console.log(this.startDate, this.endDate, this.periodicity)
    let searchStartDate = String(this.startDate).split('T')[0];
    let searchEndDate = String(this.endDate).split('T')[0];
    console.log(searchStartDate, searchEndDate);
    this.visitorSearchService.getVisitorsAndExhibitions(searchStartDate, searchEndDate, this.periodicity)
      .subscribe({
        next: (response: VisitorAndExhibitionData[]) => {
          this.data = response;
          this.currentPage = 1;
          this.serviceError = false;
          this.dataLoaded = true;
        },
        error: () => {
          this.data = [];
          this.currentPage = 1;
          this.serviceError = true;
          this.dataLoaded = false;
        }
      });
  }
}
