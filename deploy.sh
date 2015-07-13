# Generate blog first
./generate-blog.sh

# Deploy to server
TARGET=wrede@casparwre.de:/home/wrede/websites/casparwre.de
rsync -av --exclude='.git/' --exclude='*~' --exclude='staging/' --exclude='.c9/' ./ $TARGET
