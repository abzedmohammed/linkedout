pipeline {
    agent any

    stages {
        stage ('Build') {
            echo 'Building...'
        }

        stage ('Testing') {
            echo 'Testing...'
        }

        stage ('Integration Test') {
            echo 'Integration Testing...'
        }

        stage ('Deployment') {
            echo 'Deploying...'
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