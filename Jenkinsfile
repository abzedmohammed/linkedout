pipeline {
    agent any

    environment {
        dockerHome = tool 'myDocker'
        mavenHome = tool 'myMaven'
        PATH = "$dockerHome/bin:$mavenHome/bin:$PATH"
    }

    stages {
        stage ('Build') {
            steps{
                sh 'maven --version'
                sh 'docker version'
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