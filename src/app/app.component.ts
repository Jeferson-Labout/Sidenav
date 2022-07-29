import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(router: Router, titleService: Title) {
    router.events

      // ****************************************
      // Filtramos apenas os eventos do tipo
      // NavigationEnd que ocorre quando a
      // navegação da rota é efetuada com sucesso.
      // Para saber mais sobre sobre este eventos:
      // https://angular.io/guide/router-reference#router-events
      // ****************************************
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd | any) => {
        console.log('URL ativa: ', event.url);

        switch (event.url) {
          case '/dashboard':
            titleService.setTitle('DashBoard');
            break;

          case '/produtos':
            titleService.setTitle('Produtos');
            break;

          case '/estatisticas':
            titleService.setTitle('Estatísticas');
            break;
          case '/cupons':
            titleService.setTitle('Cupons');
            break;
          case '/paginas':
            titleService.setTitle('Páginas');
            break;
          case '/midia':
            titleService.setTitle('Mídia');
            break;
          case '/configuracoes':
            titleService.setTitle('Configurações');
            break;

          default:
            titleService.setTitle('SideNav');
            break;
        }
      });
  }
  title = 'sidenav';

  isSideNavCollapsed = false;
  screenWidth = 0;


  onTogglesSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }
}
