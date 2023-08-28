import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.scss']
})

export class PanelMenuComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit(): void {
      this.items = [
      {
        label: 'Produtos',
      },
      {
        label: 'Cursos',
      },
      {
        label: 'Cidades',
      }
    ]

    throw new Error('Method not implemented.');
  }

}
