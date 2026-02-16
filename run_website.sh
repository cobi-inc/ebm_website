#!/bin/bash

# Load NVM (standard locations)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Ensure nvm is available
if ! command -v nvm &> /dev/null; then
    echo "Error: nvm not found. Please ensure it is installed."
    exit 1
fi

# Switch to the correct Node version
echo "--- Setting up Node version ---"
nvm use || nvm install

# Enable pnpm via corepack
echo "--- Enabling pnpm ---"
corepack enable pnpm

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "--- Installing dependencies ---"
    pnpm install
fi

# Start the development server
echo "--- Starting Next.js development server ---"
pnpm dev
