pipeline {
    agent any

    environment {
        PROJECT_DIR = '/workspace/my-react-app'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Build React App') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'docker build -t react-app .'
                }
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

