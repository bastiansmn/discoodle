dev: log
	@echo "Dev"

build: log
	@echo "Build"

deploy: log
	@./deploy.sh

log: deletelog makelog

deletelog:
	@rm make.log 2> /dev/null || true

makelog:
	@touch make.log