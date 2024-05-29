# Use the Nginx image from Docker Hub
FROM nginx:alpine

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy a new configuration file from your project
COPY nginx.conf /etc/nginx/conf.d

# Remove the default Nginx HTML files
RUN rm -rf /usr/share/nginx/html/*

# Copy the static site to the Nginx server
COPY . /usr/share/nginx/html

# Expose port 80 to the Docker host, so we can access it 
# from the outside.
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

