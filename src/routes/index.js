import Home from '~/pages/Home';
import Overview from '~/pages/Overview';
import Schedule from '~/pages/Schedule';
import Standings from '~/pages/Standings';
import Squad from '~/pages/Squad';
import Shop from '~/pages/Shop';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import Admin from '~/pages/Admin';
// Admin League
import LeagueList from '~/pages/Manager/LeaguesManager/LeagueList';
import LeagueCreate from '~/pages/Manager/LeaguesManager/LeagueCreate';
import LeagueEdit from '~/pages/Manager/LeaguesManager/LeagueEdit';
// Admin Club
import ClubList from '~/pages/Manager/ClubsManager/ClubList';
import ClubCreate from '~/pages/Manager/ClubsManager/ClubCreate';
import ClubEdit from '~/pages/Manager/ClubsManager/ClubEdit';
// Admin Player
import PlayerList from '~/pages/Manager/PlayersManager/PlayerList';
import PlayerCreate from '~/pages/Manager/PlayersManager/PlayerCreate';
import PlayerEdit from '~/pages/Manager/PlayersManager/PlayerEdit';
// Admin product
import ProductList from '~/pages/Manager/ProductsManager/ProductList';
import ProductCreate from '~/pages/Manager/ProductsManager/ProductCreate';
import ProductEdit from '~/pages/Manager/ProductsManager/ProductEdit';
// Admin account
import AccountList from '~/pages/Manager/AccountsManager/AccountList';
import AccountEdit from '~/pages/Manager/AccountsManager/AccountEdit';

import { HeaderOnly } from '~/layouts';
import { SidebarAdmin } from '~/layouts';
import Sigup from '~/pages/Sigup';
import { HeaderShop } from '~/layouts';
import AccountCreate from '~/pages/Manager/AccountsManager/AccountCreate';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/overview/:nameClub', component: Overview, name: 'Overview' },
    { path: '/schedule/:nameClub', component: Schedule, name: 'Schedule' },
    { path: '/standings/:nameClub', component: Standings, name: 'Standings' },
    { path: '/squad/:nameClub', component: Squad, name: 'Squad' },
    { path: '/shop', component: Shop, name: 'Shop', layout: HeaderShop },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/register', component: Sigup, layout: HeaderOnly },
];

const privateRoutes = [
    { path: '/admin', component: Admin, layout: SidebarAdmin },
    // Admin League routes
    { path: '/admin/leagues/list', component: LeagueList, layout: SidebarAdmin },
    { path: '/admin/leagues/create', component: LeagueCreate, layout: SidebarAdmin },
    { path: '/admin/leagues/edit/:id', component: LeagueEdit, layout: SidebarAdmin },
    { path: '/admin/leagues/edit', component: LeagueEdit, layout: SidebarAdmin },
    // Admin club routes
    { path: '/admin/clubs/list', component: ClubList, layout: SidebarAdmin },
    { path: '/admin/clubs/create', component: ClubCreate, layout: SidebarAdmin },
    { path: '/admin/clubs/edit/:id', component: ClubEdit, layout: SidebarAdmin },
    { path: '/admin/clubs/edit', component: ClubEdit, layout: SidebarAdmin },
    //Admin Player routes
    { path: '/admin/players/list', component: PlayerList, layout: SidebarAdmin },
    { path: '/admin/players/create', component: PlayerCreate, layout: SidebarAdmin },
    { path: '/admin/players/edit/:id', component: PlayerEdit, layout: SidebarAdmin },
    { path: '/admin/players/edit', component: PlayerEdit, layout: SidebarAdmin },
    //Admin Product routes
    { path: '/admin/products/list', component: ProductList, layout: SidebarAdmin },
    { path: '/admin/products/create', component: ProductCreate, layout: SidebarAdmin },
    { path: '/admin/products/edit/:id', component: ProductEdit, layout: SidebarAdmin },
    { path: '/admin/products/edit', component: ProductEdit, layout: SidebarAdmin },
    //Admin Account routes
    { path: '/admin/accounts/list', component: AccountList, layout: SidebarAdmin },
    { path: '/admin/accounts/create', component: AccountCreate, layout: SidebarAdmin },
    { path: '/admin/accounts/edit/:id', component: AccountEdit, layout: SidebarAdmin },
    { path: '/admin/accounts/edit', component: AccountEdit, layout: SidebarAdmin },

    { path: '/cart', component: Cart, layout: HeaderOnly },
];

export { publicRoutes, privateRoutes };
