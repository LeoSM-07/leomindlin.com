---
slug: launching-rockets
title: Launching Rockets with React, Java, and MQTT
# description:
#   XML Telemetric and Command Exchange (XTCE) is a standard developed by a ton of
#   different space agencies, with the goal of standardizing telemetry information
#   between systems.
publishDate: 2025-11-22
---

The ground station setup for the McGill Rocket Team is actually quite advanced.
Since the team builds it's own flight computers (FC) from scratch, a huge amount
of ground support equipment is required to monitor, command and debug the FCs.

As the lead of the team's "Ground Station Controls" project it's my job to
ensure the availability and operations of such equipment. What that looks like
in practice is a mesh of IoT devices, communicating via LAN back to a central
server which is responsible for collecting that data, processing it, and
displaying it to human operators. Below is a diagram of the whole system. In
this article, I'll explain each of the parts and why they use the technology
that they do.

```text MRT Ground Station System Diagram
┌────────────┐
│  Frontend  │
│ Web Server │
└────────────┘
      ▲
      │
      │ Websocket
      │ & HTTP
      │
      ▼
┌───────────┐
│   YAMCS   │
│  Backend  │
└───────────┘
```

## The Frontend

Qui aute culpa laboris ex commodo exercitation pariatur deserunt ullamco dolor
proident elit culpa. Officia duis ex eu ad est. Reprehenderit velit culpa
adipisicing tempor consequat. Non Lorem labore reprehenderit anim Lorem non ea
Lorem. Tempor aliquip ex irure ut aliquip occaecat ut incididunt labore et. Est
pariatur eu duis dolor excepteur aliqua aute. Excepteur qui ea non ullamco
tempor labore eiusmod sit excepteur velit irure. Et aute id pariatur aliquip
irure laborum nisi voluptate consectetur.

Aliqua minim reprehenderit id esse. Nulla fugiat sint incididunt culpa nostrud
tempor quis sunt consequat exercitation ex. Consequat esse quis incididunt ipsum
mollit consectetur consequat proident incididunt aliqua nostrud velit. Fugiat
tempor tempor dolore occaecat irure anim.

## YAMCS Backend

Pariatur ut labore voluptate. Laborum ullamco exercitation do reprehenderit
culpa consectetur ad enim commodo. Eiusmod nisi mollit incididunt pariatur ad
adipisicing amet minim pariatur dolore voluptate ut. Eiusmod minim ullamco
ullamco deserunt ipsum excepteur eiusmod adipisicing aliqua quis. Aliquip sit
dolor fugiat irure est mollit.

| Table Header        | Header Column Two                                                                      |
| ------------------- | -------------------------------------------------------------------------------------- |
| dolor magna         | Consectetur minim occaecat reprehenderit ex laboris consectetur nostrud reprehenderit. |
| laboris consectetur | Exercitation magna est nostrud ut est.                                                 |

Lorem excepteur velit dolor velit pariatur dolor officia ea cupidatat commodo
officia deserunt. Officia irure sit Lorem laboris dolor commodo laboris elit
consectetur. Deserunt cupidatat amet tempor id est sit sunt excepteur sint ad
aute. Anim ut ex tempor ut velit do aliquip cupidatat non aute Lorem.
Consectetur enim ut ad occaecat. Aliqua qui proident sit consequat cupidatat sit
irure pariatur id consequat ex non. Enim est do adipisicing id voluptate.
Proident eu et officia ullamco est labore irure duis sunt voluptate.
