import { Component, OnInit } from '@angular/core';
import { EntitlementService } from 'src/app/service/entitlement.service';

@Component({
  selector: 'workgroup',
  templateUrl: './workgroup.component.html',
  styleUrls: ['./workgroup.component.scss']
})
export class WorkgroupComponent implements OnInit {

  suggestions: any[] = [];
  selectedEntitlements: any[] = [];
  selectedSuggestion: any;
  cols: any[];
  displayTable: boolean = false;
  constructor(private entitlementService: EntitlementService) { }

  ngOnInit() {
    this.cols = [
      { field: 'displayName', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'members', header: 'Members'}
    ];
  }

  search(event) {
    const searchByEvent = event ? true : false;
    this.entitlementService.getList(searchByEvent ? event.query : this.selectedSuggestion).subscribe(data => {
      if (data) {
        this.suggestions = data;
        this.displayTable = !searchByEvent;
      }
    })
  }
}
