---
title: 'Tagging policy'
description: 'Send an alert when resources do not match a tagging policy'
sidebar_label: 'Tagging policy'
sidebar_position: 1
---

This workflow will send a message to a Slack channel when selected resources do not comply with a specified tagging policy.

## Overview

```mermaid
stateDiagram-v2
    direction LR
    Alert: Alert
    Message: Send message

    t1 : Trigger
    a1 : Action

    Start --> t1
    t1 --> a1
    a1 --> End

    state t1 {
        direction LR
        Alert
    }

    state a1 {
        direction LR
        Message
    }
```

## Configuration Steps

1. Select the trigger **Alert** > **Microsoft Azure** > **When a resource has noncompliant tags**.
2. Select the action **Slack** > **Send a formatted Slack message to any channel**

## Interface

![Example workflow for "Tagging policy"](workflow-tagging-policy.png)
