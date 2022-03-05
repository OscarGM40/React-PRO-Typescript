/* eslint-disable no-undef */
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);
workbox.loadModule("workbox-background-sync");
// eslint-disable-next-line no-restricted-globals
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

const bgSyncPlugin = new BackgroundSyncPlugin("posteos-offline", {
  maxRetentionTime: 24 * 60, // 24h es buena idea
});

/* puedo decir al Sw que cuando la ruta coincida con la RegExp se utilice determinada estrategia(Cache Only-Cache First,...)  */
workbox.routing.registerRoute(
  new RegExp(
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  ),
  new workbox.strategies.CacheFirst()
);

registerRoute(
  new RegExp(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"
  ),
  new CacheFirst()
);

/* ojo que NetworkFirst y CacheFirst tienen fallback implementado,no confundir con CacheOnly y NetworkOnly */
registerRoute(
  ({ url }) => url.pathname.startsWith("/api/auth/renew"),
  // new RegExp("http://localhost:4000/api/auth/renew"),
  new workbox.strategies.NetworkFirst({
    cacheName: "renew-token",
  })
);

/* GET EVENTS */
registerRoute(
  ({ url }) => url.pathname.startsWith("/api/events"),
  // new RegExp("http://localhost:4000/api/auth/renew"),
  new NetworkFirst({
    cacheName: "cache-events",
  })
);

/* POST EVENTS  */
registerRoute(
  ({ url }) => url.pathname.startsWith("/api/events"),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "POST"
);

registerRoute(
  new RegExp("http://localhost:4000/api/events*"),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "PUT"
);

registerRoute(
  new RegExp("http://localhost:4000/api/events*"),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "DELETE"
);
