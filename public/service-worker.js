if (workbox) {
    console.log(`Workbox is loaded`);

    workbox.setConfig({
        debug: true,
    });

    workbox.core.setCacheNameDetails({
        prefix: 'lukas-kreutzer',
    });

    self.__precacheManifest = [].concat(self.__precacheManifest || []);
    workbox.precaching.suppressWarnings();
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

    // This code listens for the user's confirmation to update the app.
    self.addEventListener('message', e => {
        if (!e.data) {
            return;
        }
        switch (e.data) {
            case 'skipWaiting':
                self.skipWaiting();
                break;
            default:
                // NOOP
                break;
        }
    });

    // cache js/css files
    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'static-resources',
        })
    );

    workbox.routing.registerNavigationRoute('/index.html');

    // Force a Timeout on Network Requests
    // if the network request is taking too long.
    workbox.routing.registerRoute(
        new RegExp('https://lukas-kreutzer.web.app'),
        workbox.strategies.cacheFirst({
            cacheName: 'api',
            networkTimeoutSeconds: 3,
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                }),
            ],
        })
    );

    workbox.routing.registerRoute(
        new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
        workbox.strategies.cacheFirst({
            cacheName: 'googleapis',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 30,
                    maxAgeSeconds: 30 * 24 * 60 * 60 * 60,
                }),
            ],
        })
    );
} else {
    console.log(`Workbox didn't load`);
}