import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import { MODAL_DIRECTIVES, ModalComponent  } from 'ng2-bs3-modal/ng2-bs3-modal';
import values = require("core-js/fn/array/values");
import { ArrayFilterPipe } from './array-filter.pipe';
import { StartedPipe } from './started.pipe';
import { MenuLeft } from './../includes/menuleft/menuleft.component';
import { HeaderTop } from './../includes/header/header.component';


@Component({
    selector: 'catalog-backup',
    directives: [MODAL_DIRECTIVES, MenuLeft, HeaderTop],
    pipes: [ArrayFilterPipe, StartedPipe],
    templateUrl: 'app/backup/backup.component.html',
    styleUrls: ['app/backup/backup.component.css']
})

export class CatalogBackupComponent implements OnInit {
    @ViewChild('modal')
    modal: ModalComponent;
    constructor(private http: Http) {
        this.http = http;
        this.vmAdd = [];
    }
    logUser : any;
    data: any;
    dataPolicy:any;
    namePolicy:any;
    valuePolicySelect: any;
    n : number;
    filterargs:any;
    collapseValue: any;
    result: Object;
    vmAdd:   Array<Object>[];
    VCenter: Array<Object>[];
    Policy: Array<Object>[];
    ngOnInit() {
        this.filterargs = {PolicyType: 'Backup'};
        this.dataPolicy = {};
        this.data = {};
        this.collapseValue = true;
        this.http.get(`/app/backup/data.json`)
            .map(response => response.json().VCenter)
            .subscribe(
                data => this.VCenter = data,
                error => console.log(error)
            );
        this.http.get(`/app/backup/policy.json`)
            .map(response => response.json().Policy)
            .subscribe(
                dataPolicy => this.Policy = dataPolicy,
                error => console.log(error)
            );
        this.logUser = localStorage.getItem('auth_token');

    }
    onSelect(valuePolicy:any, valueName:any) {        
        this.valuePolicySelect = valuePolicy
        this.namePolicy = valueName;
        this.modal.open(valueName);
    }
    refresh() {
        this.ngOnInit();
    }
    collapseMenu(valueTrigger:any){
        this.collapseValue = !valueTrigger;
    }
    addVm(vmName:any, policyName:any){
        console.log("Policy Name",policyName);
        if(policyName === "Select Policy"){
            this.removeVm(vmName) ;
        }
        else{

        }
        this.vmAdd.push(vmName);
        console.log(this.vmAdd);       
        this.modal.close();
        this.checkRed(vmName);
    }
    checkRed(value:any){
         for (let field in this.vmAdd) {
            if (value === this.vmAdd[field]) {
                return true;
            }
        }
            return false ;

    }
    removeVm(vm:any){
           for (let field in this.vmAdd) {
                 if (vm === this.vmAdd[field]) {
                    this.vmAdd.slice(vm);
                 }
           }
    }

}

