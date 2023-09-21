# [ophthamed.sk](https://www.ophthamed.sk/)

Website of opthalmologist in Zilina Slovakia. Forked from [Dan Abramov personal blog overreacted.io](https://github.com/gaearon/overreacted.io). Syntax theme based on [Sarah Drasner's Night Owl](https://github.com/sdras/night-owl-vscode-theme/) with small tweaks.

To run locally, `yarn`, then `yarn dev`, then open https://localhost:8000.

## Deploy

```
IP_ADDRESS=""

yarn;
yarn build;
ssh ophthamed@${IP_ADDRESS} 'rm -r public_html/*';
cd public;
tar czf - * | ssh ophthamed@${IP_ADDRESS} "cd /home/newnode/staticsites/ && tar xvzf -";
```
