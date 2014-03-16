
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

test: index.js
	@./node_modules/.bin/mocha

.PHONY: clean
