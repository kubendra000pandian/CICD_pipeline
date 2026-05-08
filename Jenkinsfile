pipeline {

    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t react-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker stop react-app || true
                    docker rm react-app || true
                    docker run -d -p 4000:80 --name react-app react-app
                '''
            }
        }
    }
}
