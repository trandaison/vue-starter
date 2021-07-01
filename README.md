# nuxt-starter

# System prerequisites
- Node v12+ installed
- Yarn global installed

## Development Setup
Dont forget to create the `.env` file.
```shell
cp .env.example .env
```
Then replace the variable entries. And run the project

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Deployment
[Docker](https://docs.docker.com/engine/install/) and docker-compose are required.

Once docker and docker-compose are installed on your machine/server, run the commands below:
```shell
docker-compose build
docker-compose up -d

# Or
docker-compose up --build --detach
```

Docker compose will build nuxt container and nginx container, then map the port 80 from nginx to the `APP_PORT` (from .env file) to your machine.

## Project Structure
```text
.
├── .circleci               # Circle CI config
├── .nginx                  # Nginx config for deployment
├── assets
├── components              # App components
│   ├── partials
│   ├── common
│   └── ...
├── i18n                    # I18n messages
│   ├── en
│   │   └── index.ts
│   ├── ja
│   │   └── index.ts
│   └── ...
├── layouts                 # Layout components
│   ├── default.vue
│   └── ...
├── pages                   # Page components
│   ├── index.vue
│   └── ...
├── static                  # Pure static assets (directly copied)
│   ├── favicon.ico
│   └── ...
├── store                   # Vuex store
│   ├── index.js
│   ├── moduleA             # Vuex module
│   │   ├── actions.ts
│   │   ├── getters.ts
│   │   ├── mutations.ts
│   │   ├── state.ts
│   ├── moduleB             # vuex module
│   └── ...                 # Other vuex modules or vuex utils
├── test
│   ├── e2e                 # E2E test
│   │   └── ...
│   ├── unit                # Unit Test
│   │   ├── components.ts   # Test cases for components folder
│   │   ├── pages           # Test cases for pages folder
│   │   ├── plugins         # Test cases for plugins folder
│   │   ├── store           # Test cases for vuex store
│   │   └── utils           # Test cases for utils folder
│   ├── setup.ts            # Setup test
│   └── ts-shims.d.ts
├── typings                 # Type definitions
│   ├── globals.d.ts        # Global types
│   └── interface           # Interface
├── utils                   # Utility functions
├── .babelrc                # Babel config
├── .editorconfig           # Editor config
├── .env                    # Environment variables
├── .env.example            # An example of .env file
├── .eslintrc.js            # Eslint config
├── .prettierrc             # Prettier config
├── docker-compose.yml      # Docker compose file
├── Dockerfile              # Dockerfile
├── jest.config.js          # Jest config
├── jsconfig.json           # Javascript config
├── nuxt.config.js          # Nuxt config
├── stylelint.config.js     # Stylint config
└── tsconfig.json           # Typescript config
```


You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

```
assets
├── icons
├── images
├── fonts
└── sass
```

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

```
├── components              # App components
│   ├── partials
│   ├── common
│   └── ...
```
- `partials` contains layout partials components, such as the header, the footer, the sidebar, etc.
- `common` contains common components.
- Other components are pages's components. Please group each page's components in the same folder, and set the folder's name sames as page name.

  For example:
  ```
  ├── components
  │   ├── login
  │   │   ├── Loginform.vue
  │   │   ├── SocialLogin.vue
  │   │   ├── SocialLoginFacebook.vue
  │   │   ├── SocialLoginGoogle.vue
  │   │   └── SocialLoginTwitter.vue
  │   ├── settingsAccount
  │   │   ├── AvatarUploader.vue
  │   │   └── AccountForm.vue
  │   └── settingsNotifications
  │       ├── NotificationList.vue
  │       ├── NotificationListItem.vue
  │       └── NotificationListItemActions.vue
  └── page
      ├── login.vue
      └── settings
          ├── account.vue
          └── notifications.vue
  ```
- Do not nested more than 2 folders in components

__Please follow the [Vue Official styleguide](https://vuejs.org/v2/style-guide/#Priority-B-Rules-Strongly-Recommended-Improving-Readability) for component naming conventions.__

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `i18n`

Contains all i18n messages for vue-i18n. Each language will be sepatate in a folder.

We Strongly recommend separate each message file for each page, then import all those files into `index.ts`.

Some common messages or formats will be goes into `common.ts` file.

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

We strongly recommend use vuex module here, and keep actions, mutations, state and getters in separated files.

### `store`

Jest, Vue-test-utils and chaijs is avaiabel for unit-testing.

Please name the folder and files under `test` folder same as the project structure, it will be easy to find the file.

Feel free to use `*.spec.ts` or `*.test.ts`. But it needs to be consistant in a projects, just pick one style.
