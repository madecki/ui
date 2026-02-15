#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Publishing @madecki/ui to NPM...${NC}\n"

# Check if user is logged in to NPM
if ! npm whoami &> /dev/null; then
    echo -e "${RED}Error: You are not logged in to NPM.${NC}"
    echo "Please run 'npm login' first."
    exit 1
fi

echo -e "${GREEN}✓ Logged in as:${NC} $(npm whoami)"

# Check for uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
    echo -e "${YELLOW}Warning: You have uncommitted changes.${NC}"
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Run type checking
echo -e "\n${YELLOW}Running type check...${NC}"
npm run typecheck

# Run linting
echo -e "\n${YELLOW}Running linter...${NC}"
npm run lint

# Build the package
echo -e "\n${YELLOW}Building package...${NC}"
npm run build

# Show what will be published
echo -e "\n${YELLOW}Files to be published:${NC}"
npm pack --dry-run

# Confirm publication
echo -e "\n${YELLOW}Current version:${NC} $(node -p "require('./package.json').version")"
read -p "Publish this version to NPM? (y/N) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    npm publish
    echo -e "\n${GREEN}✓ Successfully published @madecki/ui!${NC}"
else
    echo -e "${YELLOW}Publication cancelled.${NC}"
    exit 0
fi
