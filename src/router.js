import Vue from "vue";
import Router from "vue-router";
import world from "./views/World/world.vue";
import root from "./views/root.vue";
import * as setupi18n from "./i18n-setup";

const locale = require("browser-locale")();
const supportedLocales = ["en"];

Vue.use(Router);

const scrollBehavior = function(to, from, savedPosition) {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition;
    } else {
        const position = {};

        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;

            // specify offset of the element
            if (to.hash === "#anchor2") {
                position.offset = {
                    y: 100
                };
            }

            if (document.querySelector(to.hash)) {
                return position;
            }

            // if the returned position is falsy or an empty object,
            // will retain current scroll position.
            return false;
        }

        return new Promise(resolve => {
            // check if any matched route config has meta that requires scrolling to top
            if (to.matched.some(m => m.meta.scrollToTop)) {
                // coords will be used if no selector is provided,
                // or if the selector didn't match any element.
                position.x = 0;
                position.y = 0;
            }

            // wait for the out transition to complete (if necessary)
            this.app.$root.$once("triggerScroll", () => {
                // if the resolved position is falsy or an empty object,
                // will retain current scroll position.
                resolve(position);
            });
        });
    }
};

// Lazy load everything but world page!
const me = () =>
    import ("./views/Me/me.vue");
const job = () =>
    import ("./views/Job/jobs.vue");
const addTo = () =>
    import ("./views/AddToHomescreen/addHomescreen.vue");
const passion = () =>
    import ("./views/OurPassion/passion.vue");

const browserLang = (locale || "en-US").substring(0, 2);

const router = new Router({
    mode: "history",
    scrollBehavior,
    base: process.env.BASE_URL,
    routes: [{
            path: "*",
            redirect: `/${browserLang}/home`
        },
        {
            path: "/team",
            redirect: `/${browserLang}/team`
        },
        {
            path: "/home",
            redirect: `/${browserLang}/home`
        },
        {
            path: "/me",
            redirect: `/${browserLang}/me`
        },
        {
            path: "/jobs",
            redirect: `/${browserLang}/jobs`
        },
        {
            path: "/addTo",
            redirect: `/${browserLang}/addTo`
        },
        {
            path: "/passion",
            redirect: `/${browserLang}/passion`
        },
        {
            path: "/:locale",
            component: root,
            children: [{
                    path: "home",
                    name: "home",
                    component: world,
                    meta: {
                        title: "Home | MasterDoomXII"
                    }
                },
                {
                    path: "me",
                    name: "me",
                    component: me,
                    meta: {
                        title: "Explore | MasterDoomXII"
                    }
                },
                {
                    path: "jobs",
                    name: "job",
                    component: job,
                    meta: {
                        title: "Jobs | MasterDoomXII"
                    }
                },
                {
                    path: "addTo",
                    name: "addTo",
                    component: addTo,
                    meta: {
                        title: "Add to homescreen | MasterDoomXII"
                    }
                },
                {
                    path: "passion",
                    name: "passion",
                    component: passion,
                    meta: {
                        title: "Passion | MasterDoomXII"
                    }
                },
                {
                    path: "*",
                    redirect: `/${browserLang}/home`
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let locale = to.params.locale;
    if (!locale && to.name === "manifesto") {
        locale = to.path.split("/")[1];
    } else if (!locale) {
        locale = browserLang;
    }

    if (supportedLocales.indexOf(locale) === -1) {
        next("/en/home");
    } else {
        setupi18n.loadLanguageAsync(locale).then(() => next());
    }
});

export default router;