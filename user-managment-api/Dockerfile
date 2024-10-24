FROM node:18 AS back
WORKDIR /app
COPY package.json .
RUN  npm install
COPY . .
RUN npm run build



FROM node:alpine
WORKDIR /app
#COPY --from=back ./app .
COPY --from=back ./app/dist dist/
COPY --from=back ./app/node_modules node_modules/
COPY --from=back ./app/.env .env
#CMD ["npm","run","start"]
CMD ["node","dist/main"]
