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
# for backend
SERVER_PORT         # default: 80;
SESSION_MAX_AGE     # default: 864000000;
HOST                # default: localhost;
SESSION_DOMAIN      # default: localhost;
SESSION_PRIVATE_KEY # default: my_key;
SESSION_NAME        # default: session_name;
API_ROOT_PATH       # default: /api;

# for development only
PORT_API:           # default : 81
PORT_WEB:           # default : 80
```

## make builds & run

-   `npm run build` to build production
-   `npm run serve` to run production

## testing

-   `npm run prettier` to run prettier on all ts and json files
-   `npm run eslint` to run eslint on all
-   `npm run test` to run jest on all

### todo

-   look into component testing with react, or puppeteer
-   add eslint/prettier/test to commit lint
-   add typechecker helper in esbuild-helper package
-   add docker file for making named build
-   add github action for test and typechecking
