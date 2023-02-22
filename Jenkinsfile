pipeline {
    agent any

    stages {
        stage ('Build') {
            steps{
                echo 'Building...'
            }
        }

        stage ('Testing') {
            steps{
                echo 'Testing...'
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
        always {
            "Always runs"
        }

        success {
            "After success"
        }

        failure {
            "After faild"
        }

        // change {
        //     "If change frm build success to fail"
        // }
    }
}