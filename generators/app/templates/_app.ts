import * as bobflux from '../node_modules/bobflux/dist/index';
import { createDefaultAppState  } from './state';
import * as b from '../node_modules/bobril/index';
import { page as mainPage } from './page';

bobflux.bootstrap(createDefaultAppState());

b.routes(
    b.route({ handler: mainPage })
);
