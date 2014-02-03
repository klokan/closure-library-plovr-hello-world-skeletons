all: 
	java -jar ../plovr.jar serve iframes-debug.json inframe.json
build:
	java -jar ../plovr.jar build iframes.json > deploy/iframes.js
	java -jar ../plovr.jar build inframe.json > deploy/inframe.js
lint:
	fixjsstyle --strict -r ./src
	gjslint --strict -r ./src