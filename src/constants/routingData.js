export const paths = [
  {
    path: "/",
    component: <>Main</>,
    isPublic: true, // required if need to authenticate route (via login)
  },
  {
    path: "/movie/:id",
    component: <>Movie with id</>,
    isPublic: true, // required if need to authenticate route (via login)
  },
];
