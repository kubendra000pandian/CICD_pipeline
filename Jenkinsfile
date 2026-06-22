pipeline {

    agent any

    environment {
        IMAGE_NAME = "react"
        CONTAINER_NAME = "bb27f0b11527"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'test-branch',
                url: 'https://github.com/kubendra000pandian/CICD_pipeline'
            }
        }

        stage('Build') {
            steps {
                sh 'echo Building Application'
            }
        }

        stage('Test') {
            steps {
                sh 'echo Running Tests'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker rm -f $CONTAINER_NAME || true

                docker run -d \
                --name $CONTAINER_NAME \
                -p 3000 \
                $IMAGE_NAME
                '''
            }
        }
    }

    post {

        success {
            echo 'Deployment Successful'
        }

        failure {
            echo 'Deployment Failed'
        }

    }
}
