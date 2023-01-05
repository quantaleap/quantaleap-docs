---
title: 'Virtual machine CPU anomaly'
description: 'Shut down a VM based on unusual CPU patterns'
sidebar_label: 'CPU anomaly'
sidebar_position: 1
---

This workflow will shut down a virtual machine after unusual CPU consumption and send a message to a Slack channel.

## Overview

```mermaid
stateDiagram-v2
    direction LR
    Insight: CPU anomaly
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
        Insight
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

1. Select the trigger **Insight** > **Microsoft Azure** > **When a VM shows unusual resource consumption**.
2. Select the action **Microsoft Azure** > **Disable a group of virtual machines**
3. Select the action **Slack** > **Send a formatted Slack message to any channel**

## Interface

![Example workflow for "CPU anomaly"](workflow-vm-cpu.png)
