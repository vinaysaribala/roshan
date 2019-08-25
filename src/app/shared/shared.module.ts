import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule, ButtonModule, MenubarModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule,
    MenubarModule,
    PanelModule,
    TableModule,
    TabViewModule,
    FormsModule
  ],
  exports: [
    AutoCompleteModule,
    ButtonModule,
    DropdownModule,
    MenubarModule,
    PanelModule,
    TableModule,
    TabViewModule,
    FormsModule
  ]
})
export class SharedModule { }
