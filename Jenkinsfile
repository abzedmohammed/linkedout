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
            echo "Always runs"
        }

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