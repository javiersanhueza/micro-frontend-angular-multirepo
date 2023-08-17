import { loadManifest } from '@angular-architects/module-federation';

loadManifest('http://localhost:8080/api/manifest.json')
  .then(() => import('./bootstrap'))
  .catch((err) => console.log(err));


