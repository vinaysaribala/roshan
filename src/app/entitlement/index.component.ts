import { Component, OnInit, OnDestroy } from '@angular/core';
import { EntitlementService } from '../service/entitlement.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
  entitleMent: any;
  subscriptions: any[] = [];
  permissions: any[] = ['Home'];
  constructor(private entitleMentService: EntitlementService) { }

  ngOnInit() {
    this.subscriptions.push(this.entitleMentService.get().subscribe(data => {
      if(data) {
        this.entitleMent = data[0];
        if(this.entitleMent.capabilities) {
          this.entitleMent.capabilities.forEach(a => {
            switch (a) {
              case "nikeIAMServicespluginRight":
                this.permissions.push('Identity1');
                this.permissions.push('Identity2');
                break;
              case "nikePluginWorkgroupView":
                this.permissions.push('Work Groups');
                break;
              case "nikePluginEntitlementView":
                this.permissions.push('Entitlements');
                break;
            }
          });
        }
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions = [];
  }
}
