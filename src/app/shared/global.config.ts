import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({ providedIn: 'root' })
export class GlobalConfig {
  constructor(private translate: TranslateService) { }

  getDatepickerOptions() {
    var options = {
      locale: {
        format: 'YYYY-MM-DD',
        applyLabel: this.translate.instant('common.ok'),
        cancelLabel: this.translate.instant('common.cancel'),
        daysOfWeek: [
          this.translate.instant("week.Su"),
          this.translate.instant("week.Mo"),
          this.translate.instant("week.Tu"),
          this.translate.instant("week.We"),
          this.translate.instant("week.Th"),
          this.translate.instant("week.Fr"),
          this.translate.instant("week.Sa")
        ],
        monthNames: [
          this.translate.instant("month.Jan"),
          this.translate.instant("month.Feb"),
          this.translate.instant("month.Mar"),
          this.translate.instant("month.Apr"),
          this.translate.instant("month.May"),
          this.translate.instant("month.Jun"),
          this.translate.instant("month.Jul"),
          this.translate.instant("month.Aug"),
          this.translate.instant("month.Sept"),
          this.translate.instant("month.Oct"),
          this.translate.instant("month.Nov"),
          this.translate.instant("month.Dec")
        ],
      },
      alwaysShowCalendars: false,
    }
    return options;
  }

  getDatatableOptions() {
    var options = {
      pagingType: 'full_numbers',
      pageLength: 50,
      responsive: true,
      lengthMenu: [50, 100, 150, 200],
      order: []
    }

    return options;
  }

  getSmallDatatableOptions() {
    var options = {
      pagingType: 'full_numbers',
      pageLength: 10,
      responsive: true,
      lengthMenu: [10, 50, 100, 200],
      order: [],
      processing: true
    }

    return options;
  }


}