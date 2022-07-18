# Create Export Folder Path
export ROOT_FOLDER=$(pwd)

echo 'Install Modules'
# Install Modules
yarn && cd $ROOT_FOLDER

# Build
echo 'Build'
yarn build && cd $ROOT_FOLDER

# Sync S3
echo 'Sync S3'
aws s3 sync dist s3://my.cafesao.net --profile pessoal --quiet

# Clear
echo 'Clear'
