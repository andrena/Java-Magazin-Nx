# Verwende ein geeignetes Basis-Image
FROM openjdk:21-jdk-slim

# Installiere Node.js 20
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs git && \
    apt-get clean

# Verifiziere die Installationen
RUN java -version && node -v && npm -v

# Setze das Arbeitsverzeichnis
WORKDIR /workspace

# Kopiere den Rest des Projekts
COPY . .

