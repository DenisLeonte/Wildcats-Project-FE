#!/bin/bash

# Waiting for app to start on localhost:3000

exec npm start -- --polling&

echo "Waiting for app to start on localhost:3000..."
while ! nc -z localhost 3000; do
  sleep 1
done

echo "App started, syncing files..."
# Syncing files
while true; do
  rsync -a --delete --info=NAME --quiet /local_build/ /volume_build
  sleep 3
done
