import { Component, Input } from '@angular/core';
import { NavigationLink } from '@shared/navigation/models';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent {
  @Input() public links: NavigationLink[];
}
