import { Component } from '@angular/core';
import { VisitorSearchService } from '../../../../service/visitor-search.service';
import { CommonModule } from '@angular/common';

interface VisitorByAttendanceData {
  Apellidos_Visitante: string;
  Nombre_Visitante: string;
  Numero_Asistencias: number;
}

@Component({
  selector: 'app-visitors-by-attendances',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitors-by-attendances.component.html',
  styleUrl: './visitors-by-attendances.component.css'
})
export class VisitorsByAttendancesComponent {

  data: VisitorByAttendanceData[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 15;

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
    this.visitorSearchService.getVisitorsByAttendances()
      .subscribe({
        next: (response: VisitorByAttendanceData[]) => {
          console.log(response);
          this.data = response;
          this.currentPage = 1;
          this.dataLoaded = true;
          this.serviceError = false;
        },
        error: () => {
          this.dataLoaded = false;
          this.serviceError = true;
        }
      });
  }

}
