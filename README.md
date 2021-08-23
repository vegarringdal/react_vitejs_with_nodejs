# react & vitejs template for nodejs backend

Trying out simple backend/frontend project template

-   Trying out npm workspaces in hope it might help a little..
-   Using vitejs for very fast bundling for frontend
-   Using homemade script/package with esbuild for backend and pretty typechecking

### Development & run

-   `npm install` to install all dependencies
-   `npm start` to start dev mode (edit in front/back and common triggers rebuild, also re-run
    typechecker)

If you like to run backend, frontend & typechecking in own terminals you can use these:

-   `start:frontend`
-   `start:backend`
-   `start:typechecker`

If you need to override this during development then you need to add '.env' to root See
`config_default.ts` at root if you need to edit these

```env
# BACKEND

# http server
SERVER_PORT         # default: 1080 - uses 1081 in dev mode, since its only API server
SERVER_HOST         # default: 0.0.0.0
SERVER_COMPRESSION  # default: true
SERVER_API_ROOT     # default: /api - vitejs also uses this for proxy settings

# express session
SESSION_MAX_AGE     # default: 864000000
SESSION_DOMAIN      # default: 0.0.0.0
SESSION_PRIVATE_KEY # default: change_me
SESSION_NAME        # default: session_name
SESSION_HTTP_ONLY   # default: true
SESSION_SAME_SITE   # default: true
SESSION_SECURE      # default is set by esbuild - default true if not development


# DEVELOPMENT ONLY
PORT_API:           # default : 1081 - Will be used by backend when it just a api server and vitejs
PORT_WEB:           # default : 1080 - Will be used by vitejs dev server
```

## Make builds & run

-   `npm run build` to build production
-   `npm run serve` to run production

Serve starts build on backend (dist folder, index.js), and uses frontend dist folder to serve www.

## Testing

-   `npm run prettier` to run prettier on all ts and json files
-   `npm run eslint` to run eslint on all (without --fix)
-   `npm run eslint:fix` to run eslint on all (with --fix)
-   `npm run test` to run jest on all
-   `npm run typecheck` to run typescript check (throws on error)
-   `npm run typecheck:watch` to run typescript check in watch mode
-   `npm run ci` runs test , eslint without fix and typecheck. 

### Pre commit runs:
  -  `npm run eslint`
  -  `npm run typecheck`


### Github action runs:
  -  `npm install -g npm`
  -  `npm run build`
  -  `npm run ci`


## commit linting/checks

-   uses lint-stage on commit messages, fix: feat: show in change log
-   runs eslint on pre-commit

## Frontend/backend libs

Some of the libs added (nice to have for new projects)

Frontend:

-   render: react
-   state: zustand
-   router: react-router-dom
-   css: tailwindcss
-   testing: jest/eslint
-   language: typescript

Backend:

-   language: typescript
-   testing: jest/eslint
-   database: oracledb
-   http framework: expressjs
-   express middleware: express-session
-   express middleware: compression/zlib
-   express middleware: rate-limiter-flexible
-   express middleware: multer
-   timer: node-cron

## First time usage:

-   you should edit the package.json name & description
-   add correct url to .versionrc.json
-   update lisense and author

## Docker

Ive added default docker file to help build. You need to replace tag and name.

-   Build to build:
    -   `docker build . -t awsome/webapp`
-   Run sample
    -   `docker run --name myAppv01 --env-file .env -p 81:1080 -d awsome/webapp`
-   Check its running:
    -   `docker logs myAppv01`

### todo

-   look into component testing with react, or puppeteer

