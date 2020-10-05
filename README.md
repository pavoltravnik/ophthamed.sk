# [ophthamed.sk](https://www.ophthamed.sk/)

Website of opthalmologist in Zilina Slovakia. Forked from [Dan Abramov personal blog overreacted.io](https://github.com/gaearon/overreacted.io). Syntax theme based on [Sarah Drasner's Night Owl](https://github.com/sdras/night-owl-vscode-theme/) with small tweaks.

To run locally, `yarn`, then `yarn dev`, then open https://localhost:8000.

## Deploy

```
yarn build
ssh ophthamed@37.205.14.173 'rm -r public_html/*'
cd public;
tar czf - * | ssh ophthamed@37.205.14.173 "cd /home/ophthamed/public_html/ && tar xvzf -"
```
