---
title: 'Scheduled virtual machine shut down'
description: 'Shut down a group of VMs based on a schedule'
sidebar_label: 'Scheduled shutdown'
sidebar_position: 1
---

This workflow will shut down a group of virtual machines according to a planned schedule and send a message to a Slack channel.

## Overview

```mermaid
stateDiagram-v2
    direction LR
    Scheduled: Scheduled
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
        Scheduled
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

1. Select the trigger **Scheduled** > **Microsoft Azure** > **When a VM shows unusual resource consomption**.
2. Select the action **Microsoft Azure** > **Disable a group of virtual machines**
3. Select the action **Slack** > **Send a formatted Slack message to any channel**

## Interface

![Example workflow for "Shut down VM(s)"](workflow-vm-shut-down.png)
