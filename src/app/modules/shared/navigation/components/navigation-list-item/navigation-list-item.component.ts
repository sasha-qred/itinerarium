import { Component, Input } from '@angular/core';
import { NavigationLink } from '../../models';

@Component({
  selector: 'navigation-list-item',
  templateUrl: './navigation-list-item.component.html',
  styleUrls: ['./navigation-list-item.component.scss'],
})
export class NavigationListItemComponent {
  @Input() public link: NavigationLink;
}
