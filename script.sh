echo '\n Requesting all heroes:'
curl localhost:3000/heroes

echo '\n\n Requesting Gustavo:'
curl localhost:3000/heroes/1

echo '\n\n Request creating a hero:'
curl --silent -X POST \
  --data-binary '{ "name": "Savage","age": 300, "power": "Imortalidade" }' \
  localhost:3000/heroes