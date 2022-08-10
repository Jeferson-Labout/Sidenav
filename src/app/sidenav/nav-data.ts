import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'

    },
    {
        routeLink: 'produtos',
        icon: 'fal fa-box-open',
        label: 'Produtos',
        items: [
            {
                routeLink: 'produtos/level1.1',
                label: 'Level 1.1',
                items: [
                    {
                        routeLink: 'produtos/level2.1',
                        label: 'Level 2.1'
        
                    },
                    {
                        routeLink: 'produtos/level2.2',
                        label: 'Level 2.2',
                        items: [
                            {
                                routeLink: 'produtos/level3.1',
                                label: 'Level 3.1'
                
                            },
                            {
                                routeLink: 'produtos/level3.2',
                                label: 'Level 3.2'
                
                            }
                        ]
        
                    }
                
                ]

            },
            {
                routeLink: 'produtos/level1.2',
                label: 'Level 1.2'

            }
        ]

    },
    {
        routeLink: 'estatisticas',
        icon: 'fal fa-chart-bar',
        label: 'Estatisticas'

    },
    {
        routeLink: 'cupons',
        icon: 'fal fa-tags',
        label: 'Cupons',
        items: [
            {
                routeLink: 'cupons/list',
                label: 'Lista de Cupons'

            },
            {
                routeLink: 'cupons/create',
                label: 'Criar Cupons'

            },
        ]

    },
    {
        routeLink: 'paginas',
        icon: 'fal fa-file',
        label: 'Páginas'

    },
    {
        routeLink: 'midia',
        icon: 'fal fa-camera',
        label: 'Mídia'

    },
    {
        routeLink: 'configuracoes',
        icon: 'fal fa-cog',
        label: 'Configurações',
        expanded: true,
        items: [
            {
                routeLink: 'configuracoes/perfil',
                label: 'Perfil'

            },
            {
                routeLink: 'configuracoes/personalizar',
                label: 'Personalizar'

            }
        ]

    },

];