# Deploy to server
TARGET=casparwre.de:/home/wrede/websites/casparwre.de
rsync -av --exclude='.git/' --exclude='*~' ./ $TARGET
