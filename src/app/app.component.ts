import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableData, MatMultiSort, MatMultiSortTableDataSource } from 'ngx-mat-multi-sort';
import { DummyServiceService } from './dummy-service.service';
import { TableDemoData } from './Table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  CLIENT_SIDE = true;
  patients;
  table: TableDemoData<any>;
  sortParams=[];
  @ViewChild(MatMultiSort) sort: MatMultiSort;
  constructor(
    private dummyService: DummyServiceService
  ) {
    this.table = new TableDemoData<any>(
      [
        {
          sequence: 1,
          key: 'displayName',
          label: 'Name',
          enabled: true,
          customizable: false,
          translateKey: 'NAME',
          sortable: true,
          sortKey: 'displayName',
          id:'displayName',
          name:'Name'
        },
        {
          sequence: 2,
          key: 'email',
          label: 'Email',
          enabled: false,
          customizable: true,
          translateKey: 'EMAIL',
          sortable: true,
          sortKey: 'email',
          id:'email',
          name:'Email'

        },
        {
          sequence: 3,
          key: 'cellPhone',
          label: 'Phone Number',
          enabled: false,
          customizable: true,
          translateKey: 'PHONE_NUMBER',
          sortable: false,
          sortKey: 'cellPhone',
          id:'cellPhone',
          name:'Phone Number'
        },
        {
          sequence: 4,
          key: 'mrn',
          label: 'MRN',
          enabled: true,
          customizable: true,
          translateKey: 'MRN',
          sortable: true,
          sortKey: 'mrn',
          id:'mrn',
          name:'MRN'
        },
        {
          sequence: 5,
          key: 'dateOfBirth',
          label: 'DOB',
          enabled: true,
          customizable: false,
          translateKey: 'DOB',
          sortable: true,
          sortKey: 'dateOfBirth',
          id:'dateOfBirth',
          name:'DOB'
        },
        {
          sequence: 6,
          key: 'appointmentDate',
          label: 'Appt Date',
          enabled: true,
          customizable: true,
          translateKey: 'APPT_DATE',
          sortable: true,
          sortKey: 'assessments.appointmentDate',
          id:'assessments.appointmentDate',
          name:'Appt Date'
        },
        {
          sequence: 7,
          key: 'appointmentTime',
          label: 'Appt Time',
          enabled: true,
          customizable: true,
          translateKey: 'APPT_TIME',
          sortable: true,
          sortKey: 'assessments.appointmentInstantTime',
          id:'assessments.appointmentInstantTime',
          name:'Appt Time'
        },
        {
          sequence: 8,
          key: 'accountProvider',
          label: 'Account Provider',
          enabled: true,
          customizable: true,
          translateKey: 'ACCOUNT_PROVIDER',
          sortable: true,
          sortKey: 'assessments.accountProviderName',
          id:'assessments.accountProviderName',
          name:'Account Provider'
        },
        {
          sequence: 9,
          key: 'referringProvider',
          label: 'Referring Provider',
          enabled: false,
          customizable: true,
          translateKey: 'REFERRING_PROVIDER',
          sortable: true,
          sortKey: 'assessments.referringProvider',
          id:'assessments.referringProvider',
          name:'Referring Provider'
        },
        {
          sequence: 10,
          key: 'referringProviderFax',
          label: 'Referring Provider Fax',
          enabled: false,
          customizable: true,
          translateKey: 'REFERRING_PROVIDER_FAX',
          sortable: false,
          sortKey: 'assessments.referringProviderFax',
          id:'assessments.referringProviderFax',
          name:'Referring Provider Fax'
        },
        {
          sequence: 11,
          key: 'chatBotStatus',
          label: 'Chatbot Pre-Test Status',
          enabled: true,
          customizable: false,
          translateKey: 'CHATBOT_PRE_TEST_STATUS',
          sortable: true,
          sortKey: 'assessments.chatBotStatus',
          id:'assessments.chatBotStatus',
          name:'Chatbot Pre-Test Status'
        },
        {
          sequence: 12,
          key: 'testingCriteriaMet',
          label: 'Testing Criteria Met',
          enabled: true,
          customizable: false,
          translateKey: 'TESTING_CRITERIA_MET',
          sortable: true,
          sortKey: 'assessments.testingCriteriaMet',
          id:'assessments.testingCriteriaMet',
          name:'Testing Criteria Met'
        },
        {
          sequence: 13,
          key: 'tcScore',
          label: 'Tyrer Cuzick Score',
          enabled: true,
          customizable: true,
          translateKey: 'TYRER_CUZICK_SCORE',
          sortable: true,
          sortKey: 'assessments.tcScore',
          id:'assessments.tcScore',
          name:'Tyrer Cuzick Score'
        },
        {
          sequence: 14,
          key: 'gleasonScore',
          label: 'Gleason Score',
          enabled: false,
          customizable: true,
          translateKey: 'GLEASON_SCORE',
          sortable: true,
          sortKey: 'assessments.gleasonScore',
          id:'assessments.gleasonScore',
          name:'Gleason Score'
        },
        {
          sequence: 15,
          key: 'testOrderStatus',
          label: 'Test Order Status',
          enabled: true,
          customizable: true,
          translateKey: 'TEST_ORDER_STATUS',
          sortable: true,
          sortKey: 'assessments.testOrderStatus',
          id:'assessments.testOrderStatus',
          name:'Test Order Status'
        },
        {
          sequence: 16,
          key: 'documents',
          label: 'Documents',
          enabled: true,
          customizable: true,
          translateKey: 'DOCUMENTS',
          sortable: false,
          sortKey: 'assessments.documents',
          id:'assessments.documents',
          name:'Documents'
        },
        {
          sequence: 17,
          key: 'accountName',
          label: 'Account',
          enabled: true,
          customizable: true,
          translateKey: 'ACCOUNT_NAME',
          sortable: true,
          sortKey: 'ambryAccount.name',
          id:'ambryAccount.name',
          name:'Account'
        },
        {
          sequence: 18,
          key: 'site',
          label: 'Site',
          enabled: true,
          customizable: true,
          translateKey: 'SITE',
          sortable: true,
          sortKey: 'ambryAccount.site',
          id:'ambryAccount.site',
          name:'Site'
        }
      ]
    );
  }

  ngOnInit() {
    this.table.nextObservable.subscribe(() => { this.getList(); });
    this.table.sortObservable.subscribe(() => { this.getSortParams(); });
    this.table.previousObservable.subscribe(() => { this.getList(); });
    this.table.sizeObservable.subscribe(() => { this.getList(); });
    setTimeout(() => {
      this.getList();
    }, 0);
  }

getList(){
  console.log(this.sort.sortables);
  this.table.dataSource = new MatMultiSortTableDataSource(this.sort, this.CLIENT_SIDE);
  this.patients = this.dummyService.list()
  this.table.data = this.patients;
  console.log( this.table.columns);
}
getSortParams(){
  console.log(this.table.sortParams);
  console.log(this.table.sortDirs);
  const sort= [this.table.sortParams, this.table.sortDirs].reduce((a, b) => a.map((v, i) => v + ',' + b[i]));

  console.log(this.objectToURLParams(sort));
}
 objectToURLParams(object) {
	const str = [];
	for (const p in object) {
		if (object.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(object[p]));
		}
	}
	return str.join('&');
}
}
