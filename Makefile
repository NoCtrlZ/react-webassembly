build:
	wasm-pack build
public:
	cd pkg && npm public --access=public
