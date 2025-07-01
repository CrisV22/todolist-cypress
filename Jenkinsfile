pipeline {
    agent any

    stages {
        stage('E2E testing') {
            echo 'Running E2E tests...'
        }
    }

    post {
        success {
            echo 'Build was successful!'
        }
        failure {
            echo 'Build failed. Check logs.'
        }
    }
}