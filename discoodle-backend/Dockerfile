FROM maven:3.8-amazoncorretto-17
ARG JAR_FILE=discoodle-backend-0.0.1-SNAPSHOT.jar
WORKDIR /backend-app
COPY pom.xml .
RUN mvn clean package
ENTRYPOINT ["java","-jar","$JAR_FILE.jar"]