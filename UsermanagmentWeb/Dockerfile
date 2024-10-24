FROM node:18 AS front
WORKDIR /app
COPY package*.json .
RUN npm install 
COPY . .
RUN npm run build


FROM nginx:1.14.2
COPY --from=front /app/dist  /usr/share/nginx/html/
#COPY --from=front /app/public  /usr/share/nginx/html/
CMD ["nginx","-g","daemon off;"]
