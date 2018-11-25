#!/usr/bin/env bash

docker tag sentiment/content-api quartercog/sentiment-content-api
docker tag sentiment/api-bot quartercog/sentiment-api-bot:latest
docker tag sentiment/frontend quartercog/sentiment-frontend:latest

