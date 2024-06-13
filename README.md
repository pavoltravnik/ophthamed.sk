# [ophthamed.sk](https://www.ophthamed.sk/)

Website of opthalmologist in Zilina Slovakia. Forked from [Dan Abramov personal blog overreacted.io](https://github.com/gaearon/overreacted.io). Syntax theme based on [Sarah Drasner's Night Owl](https://github.com/sdras/night-owl-vscode-theme/) with small tweaks.

To run locally, `yarn`, then `yarn dev`, then open https://localhost:8000.
nvm use v12.22.12


## Deploy

```
# localhost
rm -rf /Users/pavoltravnik/git/lawly.cz/submodules/ophthamed.sk/node_modules
docker rm ophthamed_sk_frontend
docker volume rm ophthamed_sk_frontend_volume
docker volume create ophthamed_sk_frontend_volume
docker compose -f docker-compose.yml -f docker-compose.prod.yml build --no-cache  ophthamed_sk_frontend
docker compose -f docker-compose.yml -f docker-compose.prod.yml up ophthamed_sk_frontend
./scripts/volume.backup.sh ophthamed_sk_frontend_volume


# ser
export NGINX_CONFIG=secure
docker compose -f docker-compose.yml -f docker-compose.prod.yml down nginx
docker volume rm ophthamed_sk_frontend_volume
./scripts/volume.restore.sh ophthamed_sk_frontend_volume 1000
docker compose -f docker-compose.yml -f docker-compose.prod.yml up nginx -d
```
