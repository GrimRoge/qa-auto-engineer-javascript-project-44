install:
	npm ci
brain-games:
	node ./bin/brain-games.js

run:
	node brain-even .

publish:
	npm publish --dry-run

.DEFAULT_GOAL := build-run

setup:
	./gradlew wrapper --gradle-version 8.5

clean:
	./gradlew clean

build:
	./gradlew clean build

install:
	./gradlew clean install

run-dist:
	./build/install/java-package/bin/java-package

run:
	./gradlew run

test:
	./gradlew test

report:
	./gradlew jacocoTestReport

lint:
	./gradlew checkstyleMain .
	npx eslint .

check-deps:
	./gradlew dependencyUpdates -Drevision=release

build-run: build run

.PHONY: build

lint:
	npx eslint .