import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-store-search',
  templateUrl: './store-search.component.html',
  styleUrls: ['./store-search.component.scss']
})
export class StoreSearchComponent {
  searchGroup = new FormGroup({
    search: new FormControl<string | null>(null)
  });
}
