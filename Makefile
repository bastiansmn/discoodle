frontend := api/src/main/frontend

build: clean log
	@cd $(frontend) && npm run build &> /make.log && mv dist/* ../resources/static/
	@cd api && mvn clean package &> ../make.log
	@mv api/target build
	@cp api/.env build
	@cd build && export $(cat .env | xargs) &> /dev/null

deploy: log
	@./deploy.sh

log: deletelog makelog

deletelog:
	-@rm make.log 2> /dev/null

makelog:
	@touch make.log

clean: deletelog
	-@kill $(lsof -t -i:8080) 2> /dev/null
	-@kill $(lsof -t -i:8081) 2> /dev/null
	-@cd $(frontend) && rm -rf dist package-lock.json
	-@rm -r build
	@cd api && mvn clean &> /dev/null
	-@cd api/src/main/resources/static && rm -rf assets css img js index.html root.css