import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VisitorSearchService } from '../../../../service/visitor-search.service';

interface VisitorChangeRateData {
  Cantidad_Visitantes: number;
  Crecimiento_Porcentaje: number;
  Mes: number;
  Anio: number;
}


@Component({
  selector: 'app-visitors-change-rate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './visitors-change-rate.component.html',
  styleUrl: './visitors-change-rate.component.css'
})
export class VisitorsChangeRateComponent {

  data: VisitorChangeRateData[] = [];

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
    this.visitorSearchService.getVisitorsChangeRate(searchStartDate, searchEndDate, this.periodicity)
      .subscribe({
        next: (response: VisitorChangeRateData[]) => {
          this.data = response;
          this.currentPage = 1;
          this.dataLoaded = true;
          this.serviceError = false;
        },
        error: (error) => {
          console.log(error);
          this.dataLoaded = false;
          this.serviceError = true;
        }
      });
  }

}
