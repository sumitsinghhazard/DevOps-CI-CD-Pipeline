# Status Report 2

Regarding the received feedback on additional scope, please refer the Pipeline Description section in the readme file. Within this section, we have provided a more detailed overview of our entire pipeline, including the newly added components. [Link](https://github.ncsu.edu/asapre/csc-519-project/blob/main/README.md)

## Accomplishments:

### Ashwin:

- Implemented code style check workflow using [Prettier CLI Check](https://github.com/marketplace/actions/prettier-check), to maintain the consistent code style guide and coding standar across the project. [Commit Link](https://github.ncsu.edu/asapre/csc-519-project/commit/e3e355c9e67c5f8f2053e85e026988a4d9c016f6)
- Improved the code validation process (linting step) by using [Super-Linter](https://github.com/marketplace/actions/super-linter) in the workflow. These enhancement help in preventing code errors, and aligns with code build guidelines. [Commit Link](https://github.ncsu.edu/asapre/csc-519-project/commit/e10644b7ffbf5a0256e839be48c222b088a5a5a4)
- Finalized the upcoming pipeline tasks.

### Nitesh:

- Established a workflow specifically designed to build and run the application test [Commit Link](https://github.ncsu.edu/asapre/csc-519-project/commit/fd605410b5e43d1cd8951907f0bd3e69f2d97913). This workflow file would be triggered on pull-request to release branch.
- Created a initial version of deployment workflow that utilizes Ansible to deploy the current codebase to the designated environment (UAT, Pre-Prod, or Prod) as per the configuration settings. [Commit Link](https://github.ncsu.edu/asapre/csc-519-project/commit/225f1dee18524187ccf7f19a4ceab501803a629a).
- Compiled a comprehensive Status Report 2, documenting the team's progress. 

### Sumit:

- Integrated a security-focused workflow using [detect-secrets Action](https://github.com/marketplace/actions/detect-secrets-action). This addition helps in scanning the codebase to prevent accidental inclusion of sensitive information, enabling protection and reducing the potential for sensitive information exposure. [Commit Link](https://github.ncsu.edu/asapre/csc-519-project/commit/f01b494f5517c1e68a8c809dd3794d4ef2f1840f).
- Composed a pipeline overview, emphasizing expanded scope and added components. [Commit Link](https://github.ncsu.edu/asapre/csc-519-project/commit/4885613c0f61f87899afaeea2b49675102acfe79)

## In Progress & Next Steps:

### Ashwin:

- Investigate and implement a deployment mechanism using Blue-Green approach.
- Propose and implement a feature flag setup on Redis for controlled feature deployment.
- Enhancing the current workflow as required.

### Nitesh:

- Tasked with implementing a workflow specifically designed to generate and record code coverage 
- Prioritizing the integration of Ansible and GitHub Actions, focusing on their combined management and utilization.
- Enhancing the current workflow as required.

### Sumit:

- Suggest and execute an integration testing workflow with detailed steps and execution.
- Focus on a security check workflow, to identify potential vulnerabilities, security issues with codebase.
- Enhancing the current workflow as required.

## Retrospective for the Sprint:

### What Worked Well:
- Effective Collaboration: The team demonstrated good collaboration skills.
- Successful Implementation of Linting: The implementation of linting for both Ansible and JavaScript improved code quality.
- Successful Implementation of Multiple Workflows: The workflows comprised: Environment setup via Ansible provisioning, Code building and testing, and Security checks with the Secret Action.
- Milestone Achievement: Achieved milestones such as 
  - Workflow for below tasks:
    - [x] Code Style Check.
    - [x] Code Validation Check.
    - [x] Deployment Environment via Ansible configuration.
    - [x] Running tests.
    - [x] Security checks with the Secret Action.
     
  - Setup Self-Hosted Server 
 

### What Didn't Work:
- Limited Scope: We faced delays in incorporating further functionalities due to uncertainty regarding potential additional additions.

### What we would do differntly:
- Experimenting new tools before: Exploration of new tools or techniques to enhance workflows, fostering best practices and efficient pipeline.
- Refine Planning: Allocate dedicated time for planning, and next steps ahead.
- Regular Check-ins: To determine if the planned objectives were achieved or not.

