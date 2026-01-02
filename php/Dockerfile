FROM php:8.2.8-fpm-alpine3.18

# ===== 基本ツール =====
RUN apk update && apk add --no-cache \
  bash \
  git \
  unzip \
  curl \
  nodejs \
  npm

# ===== Composer =====
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# ===== PHP Extensions =====
RUN docker-php-ext-install pdo_mysql

# ===== Node パッケージマネージャ（任意）=====
# yarn を使いたい場合
RUN npm install -g yarn

# pnpm を使いたい場合（必要なら）
# RUN npm install -g pnpm

WORKDIR /var/www/html/example
