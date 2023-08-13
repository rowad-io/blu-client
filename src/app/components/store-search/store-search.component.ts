import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-store-search',
  templateUrl: './store-search.component.html',
  styleUrls: ['./store-search.component.scss']
})
export class StoreSearchComponent {
  searchGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchGroup = this.fb.group({
      search: new FormControl<string | null>(null),
    });
  }
}
