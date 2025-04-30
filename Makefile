install:
	npm ci
	
brain-games:
	node ./bin/brain-games.js

run:
	node brain-even .

publish:
	npm publish --dry-run

.DEFAULT_GOAL := build-run

lint:
	npx eslint .