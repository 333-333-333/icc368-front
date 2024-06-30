import { Component } from '@angular/core';
import { VisitorSearchService } from '../../../../service/visitor-search.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface VisitorData {
  Fecha: Date;
  Cantidad_Visitantes: number;
}

@Component({
  selector: 'app-visitors-by-date',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './visitors-by-date.component.html',
  styleUrls: ['./visitors-by-date.component.css'],
})
export class VisitorsByDateComponent {
  startDate!: Date ;
  endDate!: Date;
  periodicity: string = 'day';

  currentPage: number = 1;
  itemsPerPage: number = 15;

  data: VisitorData[] = [];
  filteredData: VisitorData[] = [];

  serviceError: boolean = false;
  dataLoaded: boolean = false;

  constructor(private visitorSearchService: VisitorSearchService) {}

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages() {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  search() {
    console.log(this.startDate, this.endDate, this.periodicity)
    let searchStartDate = String(this.startDate).split('T')[0];
    let searchEndDate = String(this.endDate).split('T')[0];
    console.log(searchStartDate, searchEndDate);
    this.visitorSearchService.getVisitorsByDate(searchStartDate, searchEndDate, this.periodicity)
      .subscribe({
        next: (response: VisitorData[]) => {
          this.data = response;
          this.filteredData = response;
          this.currentPage = 1;
          this.serviceError = false;
          this.dataLoaded = true;
        },
        error: (error) => {
          console.error('Error al buscar visitantes:', error);
          this.serviceError = true;
          this.dataLoaded = false;
        }
      });
  }

  dateToYYYYMMDD(date: Date): string {
    return date.toISOString().split('T')[0];
  }

}
