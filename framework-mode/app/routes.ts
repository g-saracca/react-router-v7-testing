import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    layout('layouts/general-layout.tsx', [
        index("routes/home.tsx"),
        route('/about', './routes/about/index.tsx'),
        route('/nested', './routes/nested/nested.tsx', [
            index('routes/nested/content.tsx'),
            route('subroute', './routes/nested/subroute.tsx'),
        ]),
        ...prefix('/other', [
            route('some-route', './routes/other/some-route.tsx'),
            route('another-route', './routes/other/another-route.tsx')
        ])
    ])
] satisfies RouteConfig;
