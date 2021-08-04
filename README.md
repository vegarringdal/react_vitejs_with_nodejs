# react template

Trying out simple backend/frontend project template

-   Trying out npm workspaces in hope it might help a little..
-   using vitejs for very fast bundling for frontend
-   using homemade script/package with esbuild for backend

### development & run

-   `npm install` to install all dependencies
-   `npm start` to start dev mode (edits to front/back and common triggers rebuild)

If you like to run backend and frontend in own terminals and not with concurrently you can use
these:

-   `start:frontend`
-   `start:backend`

If you need to override this during development then you need to add '.env' root

```env
# BACKEND

# http server
SERVER_PORT         # default: 80;
SERVER_HOST         # default: localhost;
SERVER_COMPRESSION  # default: true
SERVER_API_ROOT     # default: /api - vitejs also uses this for proxy settings

# express session
SESSION_MAX_AGE     # default: 864000000;
SESSION_DOMAIN      # default: localhost;
SESSION_PRIVATE_KEY # default: change_me;
SESSION_NAME        # default: session_name;
SESSION_HTTP_ONLY   # default: true;
SESSION_SAME_SITE   # default: true;
       

# DEVELOPMENT ONLY
PORT_API:           # default : 81 Will be used by backend when it just a api server and vitejs is serving pages
PORT_WEB:           # default : 80 Will be used by vitejs dev server
```

## make builds & run

-   `npm run build` to build production
-   `npm run serve` to run production

Serve starts build on backend (dist folder, index.js), and uses frontend dist folder to serve www.

## testing

-   `npm run prettier` to run prettier on all ts and json files
-   `npm run eslint` to run eslint on all
-   `npm run test` to run jest on all


# commit linting/checks
* uses lint-stage on commit messages, fix: feat: show in change log
* runs eslint on pre-commit

### todo

-   look into component testing with react, or puppeteer
-   add eslint/prettier/test to commit lint
-   add typechecker helper in esbuild-helper package
-   add docker file for making named build
-   add github action for test and typechecking
