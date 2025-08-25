---
slug: tm-tc-system
title: Designing an Average Telemetry/Telecommand System
description: "I work on the Ground Station GUI at the [McGill Rocket Team](https://mcgillrocketteam.com/) (MRT). That generally entails two responsibilities: a frontend and a backend. The frontend is responsible for displaying information and allowing for the control of a system."
publishDate: 2025-08-01
---

## What's the Issue

The Telemetry (TM) and Telecommand (TC) is a pretty vague topic so let's describe what our system actually needs to do. At a high level, the system needs to take input parameters and display them in all different forms. These parameters could be from any number of data sources such as physical devices attached to the server via USB or more abstract network devices that connect over TCP. There also needs to be a way to talk back to these devices, hence issuing commands. We can call every input/output source an attached device.

For our purposes, attached devices will send there information in some sort of binary packet and our server will be responsible for decoding. That means each attached device will also need to specify its binary packet structure. It can also define the binary data that it expects to receive in the from of commands.

```text A high level overview of the system's data strucutre.
TM/TC System 
│
├──Device A
│   └──Input Packet
│       ├──ParamaterAValue1
│       └──ParamaterAValue2
│
└──Device B
    ├──Input Packet
    │   ├──ParamaterBValue1
    │   ├──ParamaterBValue2
    │   ├──ParamaterBValue3
    │   └──ParamaterBValue4
    └──Output Packet
        ├──CommandArgument1
        └──CommandArgument2
```

This is simple enough, we have a bunch of different binary data structures, we decode or encode them and we're done. However, we also need to consider data persistence and for the use case of the MRT, we also need to be able to change every single configuration at runtime. That means redefine packets, connect new devices, etc. 

All of these parameters need to be internally represented in such a way that we can create a frontend to display them. And because the parameters can be configured at runtime, why don't we also add the ability to configure the entire dashboard at runtime. That means that if we have a dashboard made up of cards, each card needs to be able to be assigned an abstract parameter. No hard coding an altitude card, etc. we need to create generic cards like "graph" or "table" instead.

## Existing Frameworks
Displaying telemetry data from any type of system is not exactly a new issue. It's critical to every space mission and plenty of other industries. Most of the serious software is not open source, which limits our options. Of the remaining open source, there are a few which I've explored. I'm by no means an expert and all of them are extensible, but none have the foundational goal of covering everything our system needs to do.

- [**Yet Another Mission Control System (YAMCS)**](https://yamcs.org/) is an amazing tool for doing *almost* everything that's described above, but not everything. Its configuration is file based and can not be changed at runtime and its web UI is not the best. Our current system at MRT is a custom frontend for YAMCS but we reached quite a few limitations from the builtin HTTP API.
- [**NASA's OpenMCT**](https://nasa.github.io/openmct/) is also quite good, but its only a frontend. It doesn't consider decoding any data or anything like that. You're responsible for providing the decoded data, and it doesn't have strong elements for issuing commands, only monitoring.