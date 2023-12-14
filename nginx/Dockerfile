# Dockerfile do nginx
FROM nginx:1.15.0

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

# Adicione as linhas abaixo para copiar os certificados SSL
COPY certificate.pem /etc/nginx/ssl/certificate.pem
COPY private-key.pem /etc/nginx/ssl/private-key.pem
