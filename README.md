# React Starter
React Starter is a minimal ecosystem starter kit for building react apps.

- TypeScript (v3.2.4)
- Express (v4.16.4) (with TypeScript)
- React (v16.7.0)
- React-Redux (v6.0.0)
- React Router (v4.3.1)
- Webpack (v4.27.1)
- Babel (v7.2.0)
- Nginx
- Hot Reloading (v4.27.1)

## Getting started
1. run `npm install`

## Development Server
2. 
Run `npm run dev:server` to start the local dev server.
Run `npm run dev:ui` to start the front-end webpack dev server with hot reloading

## Deploying to Production
3. 
This starter kit is designed to easily integrate with IBM Cloud deploys.
Assuming you already have am IBM Cloud account, all you have to do is update the name and host properties in the `manifest.yml` file. When you're ready to deploy, in your terminal, run `sh scripts/deploy.sh` to deploy your app to IBM Cloud.
