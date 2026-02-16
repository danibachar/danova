.PHONY: dev dev-install test test-lint test-typecheck prod prod-build prod-start clean

WEB_DIR := web/danova

# --- Dev: local development ---

dev:
	cd $(WEB_DIR) && npm run dev

dev-install:
	cd $(WEB_DIR) && npm install

# --- Test: testing ---

test: test-lint test-typecheck
	@echo "All tests passed"

test-lint:
	cd $(WEB_DIR) && npm run lint

test-typecheck:
	cd $(WEB_DIR) && npx tsc --noEmit

# --- Prod: deployment/build ---

prod: prod-build

prod-build:
	cd $(WEB_DIR) && npm run build

prod-start:
	cd $(WEB_DIR) && npm run start

# --- Clean ---

clean:
	rm -rf $(WEB_DIR)/.next
	@echo "Cleaned .next directory"
