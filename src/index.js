import React from "react";
import ReactDOM from "react-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import "./scss/home.scss";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default
        ReactDOM.render(<NextApp />, document.getElementById("root"))
    })
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

let CACHE_NAME = 'sw-v1'
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll('./404.html'))
    )
})
self.addEventListener('fetch', (event) => {
    if (event.request.method === 'GET') {
        event.respondWith(
            caches.match(event.request)
                .then((cached) => {
                    var networked = fetch(event.request)
                        .then((response) => {
                            let cacheCopy = response.clone()
                            caches.open(CACHE_NAME)
                                .then(cache => cache.put(event.request, cacheCopy))
                            return response;
                        })
                        .catch(() => caches.match(offlinePage));
                    return cached || networked;
                })
        )
    }
    return;
});

serviceWorker.register();