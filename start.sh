kill -9 $(lsof -t -i:3000)
kill -9 $(lsof -t -i:4000)
kill -9 $(lsof -t -i:3333)
fuser -k 3306/tcp
kill -9 $(lsof -t -i:3001)
cd backend
cd server
yarn dev &
cd ..
cd ..
cd frontend
yarn dev &
cd ..
cd db
docker compose up

