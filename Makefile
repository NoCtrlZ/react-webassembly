build:
	wasm-pack build
public:
	cd pkg && npm publish --access=public
