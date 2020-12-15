import { Injectable } from '@angular/core';
import { of, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {
   project = new ReplaySubject(1);
  patients: any[]=[{
    id: null,
    displayName: "Hoffman, Ron",
    dateOfBirth: "08/13/1998",
    appointmentDate: "10/30/2020",
    chatBotStatus: "Education Completed",
    chatbotAction: null,
    testingCriteriaMet: "NCCN not met",
    tcScore: 10.5,
    gleasonScore: null,
    testOrderStatus: "Test ordered",
    assessmentId: 38,
    transcript: true,
    clinicalSummary: true,
    transcriptId: 720,
    clinicalSummaryId: 721,
    patientId: 38,
    accountName: "GenomeSmart",
    accountId: 6,
    prHeme: false,
    accountProvider: "",
    appointmentTime: "07:30 AM",
    site: "GenomeSmart",
    mrn: "",
    readOnly: false,
    readOnlyAccountList: null,
    referringProvider: null,
    referringProviderFax: null,
    cellPhone: "",
    email: "aaisha.dosani+change@coditas.com",
    accessOfMultipleSites: false
   },{
    id: null,
    displayName: "Hoffman, Ron",
    dateOfBirth: "08/13/1998",
    appointmentDate: "10/30/2020",
    chatBotStatus: "Education Completed",
    chatbotAction: null,
    testingCriteriaMet: "NCCN not met",
    tcScore: 10.5,
    gleasonScore: null,
    testOrderStatus: "Test ordered",
    assessmentId: 38,
    transcript: true,
    clinicalSummary: true,
    transcriptId: 720,
    clinicalSummaryId: 721,
    patientId: 38,
    accountName: "GenomeSmart",
    accountId: 6,
    prHeme: false,
    accountProvider: "",
    appointmentTime: "07:30 AM",
    site: "GenomeSmart",
    mrn: "",
    readOnly: false,
    readOnlyAccountList: null,
    referringProvider: null,
    referringProviderFax: null,
    cellPhone: "",
    email: "aaisha.dosani+change@coditas.com",
    accessOfMultipleSites: false
  }];
  constructor() { }

  list() {
     return this.patients;
  }
}
