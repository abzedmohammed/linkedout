pipeline {
    agent any

    stages {
        stage ('Install node') {
            steps{
                sh 'cd backend'
                sh 'ls'
                echo 'Building...'
            }
        }

        stage ('Docker Image') {
            steps{
                echo 'Building docker image...'
            }
        }

        stage ('Integration Test') {
            steps{
                echo 'Integration Testing...'
            }
        }

        stage ('Deployment') {
            steps{
                echo 'Deploying...'
            }
        }
    }

    post {
        success {
            echo "After success"
        }

        failure {
            echo "After faild"
        }

        // change {
        //     "If change frm build success to fail"
        // }
    }
}