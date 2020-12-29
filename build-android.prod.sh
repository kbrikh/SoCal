#!/bin/bash

echo Android build command started...

rm platforms/android/build/outputs/apk/*

ionic cordova build android --prod --release --aot

echo Android build command finished.

echo Jarsigner command started...

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore APP_NAME.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk APP_NAME -storepass KEYSTORE_PASSWORD

echo Jarsigner command finished.

echo Zipalign command started...

~/Library/Android/sdk/build-tools/27.0.3/zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk platforms/android/app/build/outputs/apk/release/APP_NAME.apk

echo Zipalign command finished.

echo Apksigner command started...

~/Library/Android/sdk/build-tools/27.0.3/apksigner verify platforms/android/app/build/outputs/apk/release/APP_NAME.apk

echo Apksigner command finished.
