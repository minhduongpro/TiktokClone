import configRoutes from '˜/config/routes';

//layout
import { HeaderOnly } from '˜/components/Layout';

//Pages
import Home from '˜/pages/Home';
import Following from '˜/pages/Following';
import Profile from '˜/pages/Profile';
import Upload from '˜/pages/Upload';
import Search from '˜/pages/Search';

//public routes
const publicRoutes = [
    { path: configRoutes.home, component: Home },
    { path: configRoutes.following, component: Following },
    { path: configRoutes.profile, component: Profile },
    { path: configRoutes.upload, component: Upload, layout: HeaderOnly },
    { path: configRoutes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
