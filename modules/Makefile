all: 
	java -jar ../plovr.jar serve modules.json
build:
	java -jar ../plovr.jar build modules.json
lint:
	fixjsstyle --strict -r ./src
	gjslint --strict -r ./src