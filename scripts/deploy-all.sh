#!/usr/bin/env bash

kubectl create -f yaml/content-api-deploy.yaml
kubectl create -f yaml/api-bot-deploy.yaml
kubectl create -f yaml/frontend-deploy.yaml

kubectl create -f yaml/content-api-service.yaml
kubectl create -f yaml/frontend-service.yaml

