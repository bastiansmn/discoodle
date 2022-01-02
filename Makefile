build: clean log
	@cd frontend && npm run build &> ../make.log && mv dist/* ../api/src/main/resources/static/
	@cd api && mvn clean install &> ../make.log
	@cp api/.env api/target/
	@cd api/target && export $(cat .env | xargs)

deploy: log
	@./deploy.sh

log: deletelog makelog

deletelog:
	@rm make.log 2> /dev/null || true

makelog:
	@touch make.log

clean: deletelog
	@kill $(lsof -t -i:8080) 2> /dev/null || true
	@kill $(lsof -t -i:8081) 2> /dev/null || true
	@cd frontend && rm -rf dist package-lock.json
	@cd api && mvn clean &> /dev/null
	@cd api/src/main/resources/static && rm -rf assets css img js index.html root.css