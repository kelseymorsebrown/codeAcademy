# Dev Ops

## Glossary

- **Deployment:** the general process of making a piece of software available to its users
- **Infrastructure:** the set of hardware and software components on which web applications are developed, tested, and deployed.
  - Hardware components include servers, routers, switches, cables, etc.
  - Software components include operating systems, version control systems, applicaitons, etc.
- **Servers:** computers that run software that can be accessed by another device (also known as the **client**), often via the internet. Servers respond to requests with website code, images, and other content which are rendered by the client (typically a web browser).
  - Servers and other infrastructre are typically managed by a company's Operations team
- **Version Control Systems:** are tools designed to manage differnt versions of a file or project.
  - They track every change that is made to a file, while saving all prevous versions of that file.
  - Common operations of version control, such as branching and merging enable development teams to collaborate more efficiently.
  - They can also sync with project management tools.
  - **Branching:** the process of creating a copy of the source code (the "trunk")
  - **Merging:** the process of combining the changes in one branch with another
- **Environment:** the subset of infrastructure resources used to execute a program under specific constraints
  - **Production Environment:** the infrastructure that supports the complete application used by real users. Consists of hardware and software components scales for eral-world usage.
  - Software often moves though a series of intermediate environments before being deployed to the production environment, though the names and how many of them there are will differ from company to company
- **Development team:** writes an application's features.
- **Operation team:** creates and maintains the infrastructure that the application runs on.
- **Scalability:** a system's ability to add resources to keep up with growing demand.
  - **Vertical scaling:** Adding computing resources, such as increasing network speeds, storage, or RAM.
  - **Horizontal scaling:** Adding more servers (or "nodes") that each run the application. A tool called a "load balancer" then distributes the work across the many servers.
  - **Elasticity:** the ability to automatically add or subtract resources to accomodate fluctuationg demand
- **Virtual machines:** software resources that can perform the same tasks as physical computers and have their own OS
- **Containers:** virtual environments that include instances of an application as well as their dependencies, but do not have their own OS
- **Orchestration:** the automated configuration, management, and coordination of infrastructure
  - **Infrastructure as Code (IaC):** the act of defining infrastructure properties in configuration files which are stored and tracked in version control systems
- **Monitoring:** helps teams understand the state of their systems based on gathered data
- **Service Level Objective (SLO):** a range of valid measurements for a metric
- **Service Level Indicator (SLI):** the current measurements of a metric
- **Service Level Agreement (SLA):** a contract with customers
- **Observability:** the degree to which a system's information can be used to locate and fix a problem
- **Resiliency:** A system's ability to continue to perform despite experiencing problems
  - **Internal problems:** Come from within the components of the system that we control
  - **External problems:** Come from dependencies we have on other parties outside of our control
  - **Malicious actors:** Come from other people (or bots) that seek to disrupt or exploit our services for a variety of reasons
- **Continuous Integration:** Merging small changes and triggering builds and tests
- **Continuous Delivery:** Preparing the application for deployment using intermediate environments and more tests
- **Continuous Deployment:** Moving the application to production with final tests
- **Continuous Testing:** Automatically executing tests at every part of the CI/CD pipeline, allowing us to "shift left" and catch bugs early on

## Deployment

### Testing

Different types of tests are used in the various stages of a deployment. The four most common are:

- **Unit test:** evaluates the smallest possible unit of testable code. Ex: a single function
- **Integration test:** evaluates how the units of a particular program work with one another
- **Acceptance test:** evaluates whether the user experience aligns with the business requirements of the software
- **End-to-end test:** evaluates the application's behavior using production-like infrastructure that includes networking, databases, and calls to external APIs.

A developer's workflow might incorporate testing like so:

1. Develop a new feature or defect fix locally
1. Add new code to the version control system
1. Run tests against the code changes
1. Fix any issues causing test failures
1. Repeat steps 1-4 until all tests pass
1. Merge the change

### Deployment Environments

A common set of environments includes:

- **local development environment:** where software is first written and tested, typically on a developer's own computer
- **integration environment:** where software changes are merged using a version control system
- **QA/testing environment:** where tests are executed to ensure the functionality and usability of each new feature
- **staging environment:** where the software can be performance tested in a production-like environment, but before real users are involved
- **production environment:** where software is accessible by real users

## DevOps Culture

Traditonal software companies often have seperate development and operations teams. This means the dev deam sents its code to the ops team who deploys it on the infrastructure. This creates an inherent conflict, as devs want to produce new functionality as fast as possible while ops members want the infrastructure to be reliable and stable.

This difference in goals gets in the way of software development by creating the following issues:

- Development and Operations teams own different environments in the deployment process. Differences between environments can lead to bugs that are difficult to resolve.
- Handoffs between teams take time
- Information is siloed, meaning decisions are often made without consideration of the other team.

DevOps aims to end this divide between the Development and Operations teams and foster trust, collaboration, problem resolution, and continuous improvement across the entire team.

By integrating Development and Operations teams, many of the issues that arise from conflicting goals are resolved, resulting in:

- Faster development and deployment cycles due to fewer handoffs & shared knowledge
- Environment consistency from Development to Staging to Production
- Improvement of operations activities by applying dev best-practices like version control

An engineering team within a DevOps culture may include engineers, QA testers, security operations, and IT specialists.

That being said, each team will face their own challenges when trying to combine Devs and Ops. They may resist sharing ownership over responsibilities, and establishing agreed-upon processes can be challenging when different team members have different experiences (though teams with a positive DevOps culture should utilize these differences to make more informed decisions). Also, adopting DevOps practices may take time to get used to.

### Central Pillars of a DevOps culture

- **Systems-level thinking:** thinking about the whole production system, rather than a single department. Allows teams to identify bottlenecks.
  - Resolving bottlenecks requires a team to acknowledge the issues within the system and view these shortcomings as opportunities rather than as a concerning failure.
- **Continuous experimentation and learning:** encourages rapid development of new features and accepts failure as a learning opportunity.
  - Orgs that punish failure create a culture of fear that gets in the way of innovation and growth
  - DevOps, on the other hand, views failure as a natural part of everyday work and stresses the importance of failure as a learning opportunity
  - Once failure is normalized, teams can be more open to experimentation > try out ambitious solutions, fail quickly, learn from those mistakes, and then experiment again.
  - A method that DevOps uses to normalize failure and learn from experimentation is through **blameless retrospectives** which are meetings held at the end of a sprint, project, or issue resolution where team members discuss what went well and the areas where they can improve.
- **Feedback loops:** allows teams to draw information from each part of the system so systems and processes can be improved and optimized.
  - A feedback loop is created when a team identifies and tracks a key piece of data, or **metric**
  - Teams can then use that information to drive process improvements
  - Choosing which metrics to track is the most important steps - metrics that can't provide meaningful insight into a system just distract from the real bottlenecks. Focusing on metrics that affect the custoer is a great place to start.
  - A defect, or problem, becomes more expensive to fix as it moves along the development process. DevOps seeks to discover defects as early as possible, which is a strategy known as **shifting left**

To have a successful DevOps culture within an org, these components need to be implemented at both a team and individual level.

## Infrastructure

Managing infrastructure properly is crucuial to user experience of an application. Common symptoms of poorly managed infrastructure include application crashes, loading failures, slow response time, and general slowdowns.

**Scalability** is a system's ability to add resources to keep up with growing demand. Scaling is about finding the sweet spot where there's enough to perform well but not so much that money is wasted. **Elasticity** is the ability to automatically add or subtract resources to accomodate fluctuationg demand & is esp. important when using pay-per-use infrastructure services.

- **Vertical scaling:** Adding computing resources, such as increasing network speeds, storage, or RAM.
  - Relatively simple and affordable (upgrading a machine)
  - Some downtime is required to perform the upgrade
- **Horizontal scaling:** Adding more servers (or "nodes") that each run the application. A tool called a "load balancer" then distributes the work across the many servers
  - Doesn't require downtime for existing servers
  - Slightly more complex to manage
  - More expensive than upgrading existing machines

DevOps techniques to achieve both elasticity and scalability include:

- Automation
- Cloud-based infrastructure
- [Microservices](https://www.codecademy.com/content-items/c2a72d7debd1ed82435cac67da8932b1)

### Virtualization

- Solves the problem where downtime (and therefore vertical scaling) needs to be avoided, but horizontal scaling is too inefficient (and expensive) because the application only uses a small portion of each server's physical resources resulting in a lot of unused physical capacity.
- Allows many virtual machines (VMs) to run on one physical comptuer
  - Each VM is a distinct environment with its own operating system, dependencies, and users
- Reduces the number of servers needed to run many instances of an application, since each server can be utilized closer to its full capacity by being split into several VMs
- Allows more efficient horizontal scaling based on demand
- Is convenient b/c you can use virtualization tools to create VMs, which is more efficient than installing and managing pieces of hardware by hand

### Containerization

![](https://static-assets.codecademy.com/Courses/DevOps/intro-course/Infra-management-containerization.gif)

- Containters are virtual environments that include instances of applications as well as their dependencies
- Solves the issue of an application or feature working in one environment but not another due to differences in dependencies
- Form of virtualization in which users create virtual environments called containers, but unlike VMs they do not include their own operating system
  - Can therefore be spun up much faster than a VM
  - Use less physical resources than VMs
- Example software: Docker

### Orchestration

- Orchestration is the automated configuration, management, and coordination of infrastructure
- Orchestration tools direct many individual components on how to play their part in order to achieve consistency across the entire infrastructure system
- Controlls many containers working together in harmony & automatically performs tasks such as:
  - Deploying containers across many servers
  - Restarting failed containers
  - Rolling out updates without any downtime
  - Horizontal scaling of containerized applications
- Example software: Kubernetes
- Relies on the principle of Infrastructure as Code (IaC) - the act of defining infrastructure properties in configuration files which are stored and tracked in version control systems
  - Manual configuration is time consuming and over time, configurations across servers can become inconsistent due to human error (known as "configuration drift")
  - IaC relies on configuration files as the source of truth for infrastructure state
    - Easier to automate
    - Easier to rollback
- Relies on the idea of "immutable infrastructure"
  - servers are not changed once they are created
  - when infrastructure configurations change, new servers are created and old ones are destroyed
  - would not have been practical in the age of physical servers, virtual machines, however, can be destroyed and created in minutes (possibly seconds with containers) with little cost

### In-House vs Cloud-based Infrastructure

- Traditoinal or in-house infrastructure is when comapnies acquire, configure, and maintain physical infrastructure components themselves (servers, power supplies, cooling, etc.)
  - Problems that come with managing infrastructure in hosuse;
    - hardware components failing over time
    - malicious users attempting to disrupt web services and steal sensitive data
    - software becoming outdated, requiring consistent patches and upgrades.
    - scaling up infrastructure as demands grow
  - Reasons to use it:
    - Provides the most flexibility and control
    - Decreases reliance on third-party vendors
    - Sensitive data can be kept inside the company
- Cloud-based infrastructure is infrastructure and computing respources available to users over the internet
  - Usually a 3rd party company owns and manages the physical infrastructure
  - Shift was brought on by virtualization technology
  - It allows:
    - some companies to specialize in physical infrastructure management while others focus on business logic
    - a company to scale quickly, since cloud providers have physical resources readily available
    - for efficient scaling by taking full advantage of virtualization

## Monitoring

**Metrics:** express a value relevant to the system at a specific point of time

- Latency: the time between the start of an event, such as serving a request, to its completion. A key indicator of performance
- Traffic/Connections: the amount of system usage over time. An abnormal amount of traffic can require scaling to maintain performance
- Error: An invalid state the system has reached. Rate of errors returned by a service can indicate deeper issues
- Saturation: The load on a system's resources. A system reaching its limits can result in poor performance
- Page load time
- User logins: successes, failures, time taken, daily active users, weekly active users
- Searches: number performed, latency
- Databases: query latency, transactions per second
- Standard OS metrics: CPU, memory, network, and disk usage

### SLOs, SLAs, and SLIs

An SLO defines where we want to be, SLI says where we are now, and SLA is a contract with customers about a level of promised service. They allow businesses to tie promises and goals to the data coming from their systems. Using these terms make it much more clear when a system metric is jeopardizing the health of a business.

**Service Level Objective (SLO):** a range of valid measurements for a metric. Measurements outside of these ranges tend to require action. (Ex: page response time should be less than 100 milliseconds)

**Service Level Indicator (SLI):** the current measurements of a metric related to a SLO

**Service Level Agreement (SLA):** a contract with customers that binds a business to a level of expected service promised to it's customers (ex: the business's service must be available 99.99% of the time). Breaking an SLA is a major problem, and corrective action should be taken on breaking SLOs before a SLA is breached

### Alerting

- An alert is a notification informing about a change of state, usually triggered when a system experiences an issue and isn't able to fix itself
- When an alert comes in, we want it to directly lead to solving a system problem
- Useless or incorrect alerts add to the chance that valuable alerts will be ignored or unseen
- Keeping our alerts at a high quality ensures that each is given proper attention
- To avoid alert fatigue:
  - Only alert when immediate human intervention is required
  - Alert based on customer facing issues
  - Set clear ways to indicate urgency
  - Ensure an alert is not a copy of another

### Observability

- The degree to which a system's information can be used to locate and fix a problem
- With poor observability, the data does little to help the team trace, diagnose, and fix problems
- To improve a system's observability:
  - Make sure team is aligned with service level objectives
  - Create meaningful alerts
  - Optimize application logging by ensuring messages are informational and descriptive
  - Automate work processes

### Monitoring quality

Practices to improve monitoring quality:

- Define actionable alerts that are customized to the needs of the organization
- Collect application logs and make this data available and understandable
- Incorporate logging into the build and deployment process
- Define custom, actionable alerts that are relevant to the organization

Be on the lookout for:

- False negatives: when a user-affecting issue has happened, and the system does not send an alert
- False positives: when an alert is generated, but there is nothing wrong with the system
- Unactionable alerts: when an alert has little to do with a problem and doesn't need anything done

## Resiliency

### Internal failures

- Issues stemming from system changes (updates to a system's hardware, dependencies, or code) are best mitigated through a comprehensive suite of automated tests performed prior to completing any change. Change-management processes should also exist to:
  - Clearly identify a change
  - Determine how the change will be made
  - How the change can be reviewed
  - How the change can be rolled back
- Issues stemming from hardware failures are best mitigated through having redundant hardware components, so in the event of a failure the system can be seamlessly switched to the backup component

### External failures

- Be on the lookout for news of scheduled outages, vulnerabilities, or cancellations from the most important dependencies
- Define fallback strategies for external depndencies not working (like switching to a different dependency, or hiding the functionality that depends on the failing service)
- Automatically update dependenceis as new versions are released, though there is the possibility that a change in the new dependency version can result in the system breaking

### Cyber attacks

Common types of attacks:

- Distributed Denial of Service (DDOS) attacks try to crash a target by overwhelming it with requests.
  - Filtering is a technique to handle DDOS attacks where an application has an infrastructure layer in front of them that detects incoming DDOS attacks and ignores similar traffic.
- SQL injection attacks try to run malicious database queries to reveal internal information.
  - Validation is a technique to handle SQL injection attacks where the system checks that requests are valid and do not contain malicious code

### Measuring

Important metrics that indicate a system's resiliancy:

- Uptime: percentage of time the system is available
- Recovery speed: how long it takes for the system to become available again after an outage

Benchmarks metrics can be compared to:

- Recovery Time Objective (RTO): the amount of time an application can be unavailable before it causes significant harm to the business
- Recovery Point Objective (RPO): the acceptable amount of data loss after a system outage

### Testing

- Penetration testing: simulating cyber-attacks to try and exploit security vulnerabilities
- Load testing: replicates situations in which the system is under heavy use
- Chaos engineering: the practice of performing experiments on a system in order to test its resiliency.
  - Emerged as a practice in the early 2010s in Netflix, who introduced the idea of a "chaos monkey" that would roam around the server room randomly disconnecting pieces of equipment (actions performed at first by people and later through automation)
- Disaster recovery exercises: companies simulate a large-scale event happening to their infrastructure to see how their responses might pan out in real time

## CI/CD

Automation is the process of using tools and scripts to perform tasks for us. The automation of the deployment process creates the Continuous Integration / Continuous Delivery (CI/CD) Pipeline. This pipeline also encompasses Continuous Testing and Continuous Deployment.

| Bottlenecks of manual deployment | Issues that can occur when scaled up to a large project |
| -------------------------------- | ------------------------------------------------------- |
| Long-lived feature branches      | Many merge conflicts                                    |
| Infrequent testing               | Missed bugs                                             |
| Manual server configuration      | Failed deployments                                      |

Some ways to use automation int the deployment pipeline:

- Configuring servers
- Moving the application through testing and staging servers
- Executing tests
- Deploying to production
- Monitoring the application

The CI/CD pipeline is the implementation of DevOps culture through automation:

- The CI/CD pipeline optimizes the production system as a whole, removing bottlenecks at each stage of the deployment process.
- The CI/CD pipeline enables learning and experimentation due to the ability to rapidly release changes and update the application.
- Feedback loops are built into the CI/CD pipeline through continuous testing. As changes move through the pipeline, developers can track the testing progress of their code at each stage of the pipeline.

### Continuous testing

- The automation of testing
- Involves automatically triggering tests to be executed once an application is built in a new environment
- Tests during development
  - Unit Tests
  - Integration Tests
- Tests before deployment to production
  - Acceptance Tests
  - End-to-end Tests

### Continuous Integration

- Practice with two main components
  - Merging source code chagnes on a frequent basis - aka "trunk based development" as opposed to "feature branch development"
    - Feature branch development — Merging in long-lived branches containing entire new features
    - Trunk-based development — Merging in small changes frequently into the main branch (called the trunk)
  - Building and testing changes in an automated process
    - Each new change automatically triggers building the application in an integration environment (sometimes referred to as a "CI server")
    - Tests are executed immediately as changes are introduced, so bugs are caught early in the process
- Rapid merges take priority over releasing complted features when using continous integration, delivery, and deployment - so conditional statements with feature flags should be used to hide potentially incomplete features from all (or some) users and then make them available once the feature is complete.

### Continuous Delivery

- The automated process of preparing new versions of an application to be deployed into the production environment
- Continous Delivery automates:
  - Environment configuration through containerization and infrastructure as code
  - Deployment to intermediary environments (testing, staging, etc…)
  - Further testing (acceptance and end-to-end tests)
- Allows devs to be confident that the application has been thoroughly tested and is ready to be deployed at any time

### Continuous Deployment

Automatically deploying is an optional step that is up to the busienss instead of the engingeering team. The goal of having a thoroughly tested application that is ready to be used has been achieved with a CI/CD Pipeline, but it can be enhanced further by incorporating continous deployment.

Traditionally, the deployment approval process is controlled by the deployment team and requires entire features to be completed before deploying to production, resulting in slower rlease cycles. For some businesses, this is desirable, for others releasing new updates on a faster and more regular schedule might be preferred.

Continuous deployment automates deploying a project to the production server after it has been tested in testing and staging environments:

- If previous stages were successful, then the deployment is approved automatically.
- An automated system deploys the application onto the production environment.
- Final tests, feedback from users, and monitoring tools identify any bugs in production.
- Developers can quickly react and push bug fixes.
- The automated pipeline is triggered. This results in another deployment which updates the live application.

## Resources

- [Introduction to DevOps Culture and Processes](https://www.codecademy.com/learn/introduction-to-dev-ops/modules/introduction-to-dev-ops-culture-and-processes/cheatsheet)
- [Infrastructure](https://www.codecademy.com/learn/introduction-to-dev-ops/modules/infrastructure/cheatsheet)
- [Monitoring](https://www.codecademy.com/learn/introduction-to-dev-ops/modules/monitoring/cheatsheet)
- [Resiliency](https://www.codecademy.com/learn/introduction-to-dev-ops/modules/resiliency/cheatsheet)
- [CI/CD Pipelines](https://www.codecademy.com/learn/introduction-to-dev-ops/modules/ci-cd-cd-pipelines/cheatsheet)
