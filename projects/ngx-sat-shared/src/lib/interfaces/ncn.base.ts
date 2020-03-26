import { Store, Select } from '@ngxs/store';
import { Router, ActivatedRoute } from '@angular/router';
import { NCNState } from 'src/app/store/new-cn/new-cn.state';
import { CHANGE_CURRENT_STEP, SAVE_DRAFT, SUBMIT_CN, CREATE_CUSTOMER_PARTNER, RESET_CN_STATE } from '../../store/new-cn/new-cn.action';
import { Route } from '@angular/compiler/src/core';

export abstract class NCNBasePage {
    currentStep: number;
    isCallingAPI: boolean = false;

    constructor(public store: Store, public route: ActivatedRoute, public router: Router) {
        this.currentStep = this.route.snapshot.data['step'];
        this.store.dispatch( new CHANGE_CURRENT_STEP(this.currentStep));
    }

    saveAsDraft(): void {
        const userId = this.store.selectSnapshot<string>(state=> state.UserState.user.userId);
        if(this.currentStep === 3) {
            this.saveAsDraftStep3(userId);
        } else {
            this.isCallingAPI = true;
            this.store.dispatch(new SAVE_DRAFT(userId)).subscribe( res => {
                this.isCallingAPI = false;
            }, err => {
                this.isCallingAPI = false;
            });
        }
    }

    saveAsDraftStep3(userId) {
        const isFoundCustomer = this.store.selectSnapshot<string>(state=> state.NCNState.ncn.step3.store);
        this.isCallingAPI = true;
        if(isFoundCustomer) {
            this.store.dispatch(new SAVE_DRAFT(userId)).subscribe( res => {
                this.isCallingAPI = false;
            }, err => {
                this.isCallingAPI = false;
            });
        } else {
            this.store.dispatch(new CREATE_CUSTOMER_PARTNER(userId)).subscribe( res => {
                this.store.dispatch(new SAVE_DRAFT(userId)).subscribe( res => {
                    this.isCallingAPI = false;
                }, err => {
                    this.isCallingAPI = false;
                });
            })
        }
    }

    nextPage(): void {}

    submitCN(): void {
        const userId = this.store.selectSnapshot<string>(state=> state.UserState.user.userId);
        this.isCallingAPI = true;
        this.store.dispatch(new SUBMIT_CN(userId)).subscribe( res => {
            this.isCallingAPI = false;
        }, err => {
            this.isCallingAPI = false;
        });
    }

    cancelCN() {
        this.router.navigate(['/home']);        
    }

    backToDashboard() {
        this.store.dispatch(new RESET_CN_STATE());
        this.router.navigate(['/home']);
    }
}