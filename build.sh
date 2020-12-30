#!/bin/bash

echo =========== Start Build ===========

echo [Prepare projects ...]
ionic build
echo [Project ready]

echo [Add Android platform started ...]
ionic capacitor add android
echo [Platform added]

echo [Start Android Build ...]
ionic capacitor copy android
echo [Project Built]

echo [Add resources ...]
if [ -d ./resources ]
then
    npm run resources
    echo [Resources added]
else
    echo "WARN: resources folder do not exist"
fi

echo =========== End Build ===========
