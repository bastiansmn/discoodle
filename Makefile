frontend := src/main/frontend

build: clean log
	@cd $(frontend) && npm run build &> /make.log && mv dist/* ../resources/static/
	@mvn clean package &> ../make.log
	@mv target build
	@cp .env build
	@cd build && export $(cat .env | xargs) &> /dev/null

log: deletelog makelog

deletelog:
	-@rm make.log 2> /dev/null

makelog:
	@touch make.log

clean: deletelog
	-@kill $(lsof -t -i:8080) 2> /dev/null
	-@kill $(lsof -t -i:8081) 2> /dev/null
	-@cd $(frontend) && rm -rf dist package-lock.json node
	-@rm -rf build
	@mvn clean &> /dev/null
	-@rm -rf target
	-@cd src/main/resources/static && rm -rf assets css img js index.html root.css