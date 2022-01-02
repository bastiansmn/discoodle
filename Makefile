build: log
	@cd frontend && npm run build && mv dist/* ../api/src/main/resources/static/

deploy: log
	@./deploy.sh

log: deletelog makelog

deletelog:
	@rm make.log 2> /dev/null || true

makelog:
	@touch make.log

clean: deletelog
	@cd frontend && rm -rf dist package-lock.json
	@cd api && rm -rf target
	@cd api/src/main/resources/static && rm -rf assets css img js index.html root.css