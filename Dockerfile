FROM ubuntu:bionic

MAINTAINER Mathieu Alorent <contact@geokretymap.org>

WORKDIR /srv/geokrety-front

# Add extension to php
RUN apt-get update \
&& apt-get install -y \
        nodejs \
        npm \
        vim \
        curl \
        wget \
        ca-certificates \
&& mkdir /usr/local/share/ca-certificates/cacert.org \
&& wget -P /usr/local/share/ca-certificates/cacert.org http://www.cacert.org/certs/root.crt http://www.cacert.org/certs/class3.crt \
&& update-ca-certificates \
&& npm install -g ember-cli

COPY package.json package.json
RUN npm install

COPY . .

EXPOSE 4200

CMD ember serve
