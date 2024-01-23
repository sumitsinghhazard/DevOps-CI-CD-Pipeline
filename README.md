# Devops Pipeline
Team Members: 
  - Sumit Singh
  - Ashwin Sapre
  - Nitesh Mishra

# Folder Structure

    .
    ├── .github
    |   ├── workflows
    |   |   ├── Failure-Report.yml          # GitActions workflow for generating failure reports
    |   |   ├── nodebuild.yml               # GitActions workflow for building and testing, and code coverage
    |   |   ├── secret-detection.yaml       # GitActions workflow for secrets/token detection
    |   |   ├── security-check.yaml         # GitActions workflow for performing security checks
    |   |   ├── staging-deployment.yml      # GitActions workflow for creating a staging/UAT platform
    |   |   ├── style-linter.yaml           # GitActions workflow for style checking
    ├── coffee-project-main
    |   ├── public
    |   |   ├── index.html
    |   |   ├── script.js
    |   ├── test
    |   |   ├── app.test.js
    |   ├── .eslintrc.js
    |   ├── README.md
    |   ├── app.js
    |   ├── data.js
    |   ├── package.json
    |   ├── package-lock.json
    |   ├── vars.json                       # Contains deployment parameters
    ├── playbooks
    |   ├── hosts.yaml                      # Readme file for test folder
    |   ├── server-deployment.yaml          # 
    |   ├── vars.yaml                       # Used to pass parameters to the docker image
    ├── Dockerfile                          # For creating docker image for deployment
    ├── README.md                           # This file
    ├── status_report_1.md                  # First status report
    ├── status_report_2.md                  # Second status report


## Problem Statement
From our experiences working in project teams at our full time jobs/internships, we identified a few key problems:
  * Pre-deployment
    - Code might not follow best practices
    - Developers might have unknown additional dependencies on their systems
    - Client/other stakeholders might want to have their own testing mechanisms
  * Post-deployment
    - Website failures at odd hours
    - Experimenting with a set of users 
  
  Our goal is to solve these problems using static analysis as a means to ensure code quality, containerizing code for rapid testing, creating a shared staging platform for transparency, a monitoring system for performance feedback, and feature flags for granular rollback and experimentation. The design has both automation and human intervention; the former enables consistency and speed, and the latter is required for final checks and feedback.
  
 A tagline for our deployment system is: "Pull, Provision, Protect, Prod". Pull, because most automated processes in the pipeline are initiated via a PR; Provision, as environments are constantly provisioned for isolated, consistent testing; Protect, as critical branches are protected using manual approvals and branch protection rules; and Prod, the final stage in the pipeline. 

## Use Case
Automated deployment to UAT server after tests run on release branch.

    - 1 Preconditions
        - Successful PR to release branch (all tests passed).
        - Deployment machine provisioned.
        - Ansible installed and configured on the deployment machine.

    - 2 Main Flow
        - When all tests pass on a PR to the release branch, an ansible script is triggered [S1].
        - Ansible script clones the latest code from the release branch to a newly-provisioned UAT server [S2].
        - The applications/services are restarted/run on the UAT server [S3].

    - 3 Subflows
        -   [S1] The latest code on the release branch passes all tests successfully, triggering an Ansible script.
        -   [S2] Ansible script has the correct configuration and permissions to provision and connect to the UAT server.
        -   [S3] Ansible script has the necessary commands to install dependencies and start the application. A URL to the UAT server is returned.
        
    - 4 Alternative Flows
        -   [E1] Code Retrieval fails due to an Ansible configuration issue, permission issue, or an authentication failure. Trigger an alert to notify the team.
        -   [E2] Deployment fails due to failure in some dependency, service, or permission. Trigger an alert to notify the team.



## Pipeline
![image](https://media.github.ncsu.edu/user/26719/files/9e9cbad8-363d-46be-8d97-b7b461dc9394)



## Pipeline Description


This repository houses the DevOps pipeline for managing code deployment and workflow processes. The pipeline follows a structured branching strategy consisting of four main branch types: feature, dev, release, and main.

### Branching Workflow
 - 1 Feature Branches: Developers create feature branches from dev, implementing new features and making changes specific to their tasks.

 - 2 Dev Branch: Pull requests from feature branches trigger various automated workflows:
    - Super Linter: Super Linter runs multiple linters (including Javascript and Ansible) to ensure code quality, consistency, and adherence to best practices.
    - Code Styling: Automated code styling checks using Prettier to maintain consistent code formatting.
    - Security & Coding Errors Check: CodeQL is used for security checks and to identify potential coding errors.
    - Secrets/Token Detection: A workflow is employed to check for passwords or tokens accidentally exposed in the repository, ensuring a secure codebase.

 - 3 Release Branch: Pull requests from dev to release branch run tests using a self-hosted GitHub Action, deploying code within a Docker container and executing test.js. The outcome determines whether the code passes or fails. Additionally, code coverage checks are performed alongside the existing test suite, ensuring a high level of code coverage to identify untested areas.

 - 4 Main Branch: Pull requests from release to main trigger an Ansible playbook via GitHub Action, creating a UAT/staging environment for user acceptance testing (UAT). After UAT approval, changes are merged into main.

### Deployment Workflow
  - Pre-production Deployment: Changes to main initiate the deployment of a pre-production environment using Ansible playbooks executed through GitHub Actions.
  - Production Environment: The current production environment (referred to as 'green') remains unaffected initially. The updated code is deployed to a new 'blue' environment. Gradual traffic migration from 'green' to 'blue' occurs using a load balancer, transitioning 'blue' to 'green' over time.

### Branch Protection
Branch protection rules are enforced to maintain the integrity and stability of branches throughout the development lifecycle.
This pipeline aims to streamline development, testing, and deployment processes while ensuring reliability and efficiency in managing code changes.
