FROM openjdk:17-slim
ADD ./ /source
WORKDIR /source
ENTRYPOINT [ "./mvnw", "spring-boot:run" ]
EXPOSE 8080