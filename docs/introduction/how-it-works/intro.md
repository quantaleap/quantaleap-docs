---
title: 'How does it work?'
sidebar_label: 'How does it work?'
sidebar_position: 4
tags:
  - architecture
  - high level design
toc_min_heading_level: 2
toc_max_heading_level: 4
---

So, you've checked our [website](https://quantaleap.eu) and the [Getting Started](getting-started/getting-started.md) guide. You'll be wondering: "That's cool!, but how do I take this to the next level?". In this document, we're going to take you through the basic concepts of understanding Quantaleap. By the end, you'll be able to fit the pieces together and dive deep to build meaningful automations.

## Overview

At its heart, Quantaleap is a system for building and running `workflows`. A series of tasks that automate a certain process. A workflow will let you organize building blocks that interact with `integrations` to automate complex processes. We can abstract most of the internal workings of Quantaleap to explain the lifecycle of a workflow and how it relates to other components of the platform:

![Quantaleap Architecture](drawing/design.svg#gh-light-mode-only)
![Quantaleap Architecture](drawing/design-dark.svg#gh-dark-mode-only)

:::tip tip
If you're familiar with serverless platforms ([Microsoft Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview)/[Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview), [AWS Lambda](https://aws.amazon.com/lambda/)), you'll be up and running in no time. Alongside webhook and scheduled triggers, Quantaleap will allow you to trigger workflows based on Machine Learning insights.
:::

## Concepts

### Integrations

Third-party services, including cloud platforms and SaaS tools, can be connected to Quantaleap. Integrations provide bidirectional communication between Quantaleap and external platforms for a variety of reasons:

- read information about resources within cloud platforms to allow our `Data Platform` to provide analytics
- interact with API's to administer resources on third-party platforms

All integrations are set up and configured from the web [portal](https://app.quantaleap.eu/settings/integrations). Once completed, the integrations can be consumed within workflows in tasks. We define 4 categories of integrations:

| Name             | Description                                                           |
| ---------------- | --------------------------------------------------------------------- |
| Hosting Provider | The platform where your cloud services and infrastructure are hosted. |
| CI/CD            | The platform where you test, build and release software.              |
| Messaging        | Productivity tools that are used for communication purposes.          |
| ITSM             | IT monitoring, ticketing and incident resolution systems.             |

### Triggers

The first thing you'll do when creating a workflow is configuring a trigger. A trigger corresponds to criteria to be met for a workflow to be executed. Quantaleap will evaluate these conditions and send an event to the trigger to start the workflow. Triggers can come from a variety of sources:

| Name      | Description                                                                                                                                                                                                                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheduled | This is a simple and useful way to run a workflow on a recurring basis. Quantaleap will send and event at timed intervals.                                                                                                                                                                                                            |
| Insight   | This trigger provides a way to dynamically run workflows based on data insights. Quantaleap will analyze your cloud resources to detect performance, consumption and configuration anomalies. The resulting events can be consumed. This trigger is powerful for creating self governing incident detection and resolution workflows. |
| Webhook   | The traditional callback style trigger that starts workflows upon receiving an HTTP payload on a published HTTP endpoint. This trigger is helpful for integrating Quantaleap with external services.                                                                                                                                  |

### Actions

Actions are the components that bring workflows to life. They contain the functionality that is executed as part of a workflow. Each action is an encapsulated piece of code that interacts with the various integrations that are configured in your environment. Depending on the integration that is consumed, actions can range from reconfiguring resources on cloud platforms to interacting with CI/CD systems to trigger a software release.

:::info info
The actions that are available are integration specific and depend on the functionality that external platforms provide as part of their API's.
:::

### Jobs

Each run of a workflow corresponds to a job. Jobs can be viewed from the web [portal](https://app.quantaleap.eu/jobs) to check the activity and execution details of a workflow.

## Closing Notes

You are ready to start exploring the opportunities of Quantaleap. Our use case library will give you a helping hand.
