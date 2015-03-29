# Generate blog first
./generate-blog.sh

# Deploy to server
TARGET=casparwre.de:/home/wrede/websites/casparwre.de
rsync -av --exclude='.git/' --exclude='*~' ./ $TARGET
