import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'home',
  app: () => import('home/home'),
  activeWhen: '/'
}
);

registerApplication({
  name: 'contact',
  app: () => import("ContactApp/ContactPage"),
  activeWhen: '/contact'
}
);


start();
