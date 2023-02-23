#!/bin/bash
read -p "Message: " desc
git add . && \
git commit -m "$desc" && \
git push origin master