import { Component } from '@angular/core';
import { ModalService } from '../../../shared/services/modal.service';

@Component({
    selector: 'app-common',
    template: '',
    standalone: true
})
export class CommonComponent {
    constructor(protected modalService: ModalService) {}

    openModal(content: any) {
        this.modalService.openModal(content);
    }
}