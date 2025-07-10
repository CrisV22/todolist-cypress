pipeline {
    agent any

    stages {
        stage('E2E testing') {
            steps {
                echo 'Running E2E tests..'
                bat 'npm install'
                bat 'npx cypress run'
            }
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