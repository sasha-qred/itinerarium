import { Component, Input } from '@angular/core';
import { NavigationLink } from '../../models';

@Component({
  selector: 'navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss'],
})
export class NavigationListComponent {
  @Input() public links: NavigationLink[];
}
