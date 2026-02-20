.PHONY: dev dev-install dev-all lint typecheck test prod prod-build prod-build-all prod-start clean
.PHONY: dev-landing dev-install-landing test-landing prod-landing prod-build-landing deploy-landing clean-landing
.PHONY: dev-danova dev-install-danova test-danova prod-danova prod-build-danova deploy-danova clean-danova
.PHONY: test-analytics test-lint-analytics test-typecheck-analytics test-unit-analytics clean-analytics

WEB_DANOVA := web/apps/danova
WEB_LANDING := web/apps/danova-lead
MODULE_ANALYTICS := web/modules/analytics
PORT_DANOVA := 3003
PORT_LANDING := 3002

# --- Danova (main site): web/apps/danova ---
# Hot reload (Fast Refresh) is built-in with next dev

dev: dev-danova
dev-danova:
	cd $(WEB_DANOVA) && npx next dev --webpack -p $(PORT_DANOVA)

dev-install: dev-install-danova
dev-install-danova:
	cd $(WEB_DANOVA) && npm install

lint: test-lint-danova test-lint-landing test-lint-analytics
	@echo "Lint passed"

typecheck: test-typecheck-danova test-typecheck-landing test-typecheck-analytics
	@echo "Typecheck passed"

test: test-danova
test-danova: test-lint-danova test-typecheck-danova test-unit-danova
	@echo "Danova tests passed"

test-lint-danova:
	cd $(WEB_DANOVA) && npm run lint

test-typecheck-danova:
	cd $(WEB_DANOVA) && npm run typecheck

test-unit-danova:
	cd $(WEB_DANOVA) && npm run test

prod: prod-danova
prod-danova: prod-build-danova

prod-build: prod-build-danova
prod-build-danova:
	cd $(WEB_DANOVA) && npm run build

prod-build-all: prod-build-danova prod-build-landing
	@echo "All apps built"

prod-start: prod-start-danova
prod-start-danova:
	cd $(WEB_DANOVA) && npm run start

deploy-danova: prod-build-danova
	cd $(WEB_DANOVA) && npx wrangler pages deploy out --project-name=danova-web

clean: clean-danova
clean-danova:
	rm -rf $(WEB_DANOVA)/.next
	@echo "Cleaned danova .next"

# --- Landing page: web/apps/danova-lead ---

dev-landing:
	cd $(WEB_LANDING) && npx next dev --webpack -p $(PORT_LANDING)

# --- Run both sites with hot reload (Danova :3000, Landing :3001) ---
# For Docker/WSL if hot reload doesn't work: make dev-all POLLING=1

dev-all:
	@echo "Starting Danova (localhost:$(PORT_DANOVA)) and Landing (localhost:$(PORT_LANDING))..."
	@if [ "$(POLLING)" = "1" ]; then export WATCHPACK_POLLING=1; fi; \
	cd $(WEB_DANOVA) && npx next dev --webpack -p $(PORT_DANOVA) & \
	cd $(WEB_LANDING) && npx next dev --webpack -p $(PORT_LANDING) & \
	wait

dev-install-landing:
	cd $(WEB_LANDING) && npm install

test-landing: test-lint-landing test-typecheck-landing
	@echo "Landing page tests passed"

test-lint-landing:
	cd $(WEB_LANDING) && npm run lint

test-typecheck-landing:
	cd $(WEB_LANDING) && npm run typecheck

prod-landing: prod-build-landing

prod-build-landing:
	cd $(WEB_LANDING) && npm run build

deploy-landing: prod-build-landing
	cd $(WEB_LANDING) && npx wrangler pages deploy out --project-name=danova-lead

clean-landing:
	rm -rf $(WEB_LANDING)/.next
	@echo "Cleaned landing .next"

# --- Module: web/modules/analytics ---

test-analytics: test-lint-analytics test-typecheck-analytics test-unit-analytics
	@echo "Analytics tests passed"

test-lint-analytics:
	cd $(MODULE_ANALYTICS) && npm run lint

test-typecheck-analytics:
	cd $(MODULE_ANALYTICS) && npm run typecheck

test-unit-analytics:
	cd $(MODULE_ANALYTICS) && npm run test

clean-analytics:
	@echo "Analytics has no build artifacts"
