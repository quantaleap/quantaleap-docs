---
title: 'Cost alert'
description: 'Send an alert when grouped resources exceed a certain cost'
sidebar_label: 'Cost alert'
sidebar_position: 1
---

This workflow will send a message to a Slack channel when the accumulated cost of grouped resources exceeds a certain price.

## Overview

```mermaid
stateDiagram-v2
    direction LR
    Alert: Alert
    Shutdown: Shutdown VM(s)
    Message: Send message

    t1 : Trigger
    a1 : Action
    a2 : Action

    Start --> t1
    t1 --> a1
    a1 --> a2
    a2 --> End

    state t1 {
        direction LR
        Alert
    }

    state a1 {
        direction LR
        Shutdown
    }

    state a2 {
        direction LR
        Message
    }
```

## Configuration Steps

1. Select the trigger **Alert** > **Microsoft Azure** > **When a VM shows unusual resource consomption**.
2. Select the action **Microsoft Azure** > **Disable a group of virtual machines**
3. Select the action **Slack** > **Send a formatted Slack message to any channel**

## Interface

![Example workflow for "Cost alert"](workflow-cost-alert.png)
