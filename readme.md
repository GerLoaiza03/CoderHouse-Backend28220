# Desafio 15 Balanceo de Carga

Este repositorio usa express y persiste las sesiones de usuarios en mongo atlas.
También permite el login mediante Facebook.

## Run

Se instala:

npm i nodemon pm2 forever -g

$  node index.js -p {PORT_NUMBER} [-m cluster]

Para selección del puerto mediante arg: -p {PORT_NUMBER}
Para correr el server en modo cluster se debe agregar el argumento: -m cluster

## Rutas

### NODEMON

$  nodemon index.js -p 8081 -m cluster

### PM2 CLUSTER

$  pm2 start index.js --watch -i max -f
$  tasklist /fi "imagename eq node.exe"
### PM2 FORK

$  pm2 start index.js --watch
$  pm2 list

### FOREVER CLUSTER

$  forever start index.js -p 8081 -m cluster
$  forever list

# Autor

German Loaiza