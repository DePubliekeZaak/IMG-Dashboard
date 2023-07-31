cd ts-modules
npm run compile 
cd ../node
npm run start
curl -X POST localhost:3009/ssr
cd ..
