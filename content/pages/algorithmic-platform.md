---
title: "Algorithmic Platform"
description: "Fully automated algorithmic trading platform infrastructure and architectural principles."
draft: false
layout: "algorithmic-platform"
---

## Architectural Principles

Our Algorithmic Platform provides fully automated trading strategies for institutional and proprietary desks, with intelligent infrastructure to design, test, and deploy robust algorithms.

### Separation of Concerns

Algorithmic Container is a powerful framework based on simple “atomic” structures. Each layer and component has a specific role in the system. It is well defined, loosely coupled and therefore perfectly testable. It can be replaced by a different implementation should the need arise.

### Event-Driven Approach

Any meaningful event in the system is captured, persisted and delivered for processing. The event-response model employed by individual components reflects our Simplicity-Agility-Reliability paradigm.

### Multi-Agent System

The algorithmic framework is modelled as a specialised multiagent system where “agents” (be their analytics, trading strategies, fragmentation and order placement strategies) are operating in a distributed environment and can exhibit cooperative and/or competitive behaviours. They can be deployed in a single process or seamlessly in a cluster without any changes to the way they interact.

### Microkernel Architecture & Message Passing IPC

At its core, our low level components follow the microkernel design that uses a bespoke messaging framework for inter-process communications (IPC). The framework provides reliable delivery of events with real-time persistence and recovery capabilities (e.g. support for late joiners). The strategies, analytics, services and functional layers in a single instance of the Algorithmic Container operate in a lightweight cooperative multitasking environment and exhibit deterministic behaviour. The preemptive multitasking is achieved through deploying multiple instances of the container microkernel that act as parallel pipelines. This approach allows us to engineer and deliver very resilient and highly available components.

### Embedded Transaction Support

Transactions are an intrinsic part of our event-driven frameworks. They are persistent, recoverable and can be easily audited.

### Vendor Agnostic

The Configuration, Reference Data, Market Data, Analytical and other services provided by the Algorithmic Container are completely generalised and have no dependencies on the vendor solutions. Such decoupling makes it possible to change the data and trading service providers without programmatic changes to the main infrastructure and the trading algorithms.

### Multiple Redundant Peers

Multiple redundant peers (instances of the Algorithmic Container) can be deployed to replace the active components lost during a hardware failure.

### High Availability

High availability (HA) is an inherent feature of all our systems. The properties required to achieve HA are implemented from very early stages of the development cycle.

### Scalability

The system is designed to be linearly scalable up and down, from large-scale deployment in a data centre to a notebook computer running all the application layers running a cluster of strategies in a realistic simulator.

---

## Platform Overview

The Algorithmic Platform provides robust infrastructure for algorithmic trading. It features a powerful set of tools for designing, implementing, testing, and deploying trading strategies with precision.

Whether you’re working on simple or complex strategies, the platform’s modular and scalable architecture ensures that it can meet the demands of any market condition.
