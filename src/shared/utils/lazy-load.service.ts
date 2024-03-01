class LazyLoadService {
  loadView(view: string): any {
    return () => import(/* webpackChunkName: "views/[request]" */ `@/views/${view}.vue`);
  }

  loadLayout(layout: string): any {
    return () => import(/* webpackChunkName: "layouts/[request]" */ `@/layouts/${layout}.vue`);
  }

  loadComponent(component: string): any {
    return () => import(/* webpackChunkName: "components/[request]" */ `@/components/${component}.vue`);
  }
}

export default new LazyLoadService();
