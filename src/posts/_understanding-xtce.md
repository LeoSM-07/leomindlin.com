---
slug: understanding-xtce
title: Understanding the XTCE Standard
description:
  XML Telemetric and Command Exchange (XTCE) is a standard developed by a ton of
  different space agencies, with the goal of standardizing telemetry information
  between systems.
publishDate: 2025-07-29
---

In general, XTCE deals with two completely separate things: telemetry metadata,
and command metadata. It describes how telemetry packets coming into a system
should be formatted and how command packets leaving the system should be
formatted. While you can share information between different parameters or
between different commands, you can not share information between a parameter
and a command. They are considered to be completely siloed. The
[XML specification](https://www.omg.org/xtce/) is incredibly dense, so I'll try
to make a more human friendly (albeit incomplete) overview here. The point of
this post is not to capture every detail of the spec, but rather understand the
most important parts and how they connect.

## The SpaceSystem

At the root of every XTCE definition is a `SpaceSystem`, the container which
houses both telemetry and commands.

```text
SpaceSystem
 ├── TelemetryMetaData
 └── CommandMetaData
```

This high level container also has information about the system itself like its
name or authors.

## Telemetry

The main sauce of the space system comes from the telemetry object inside a
space system. The telemetry metadata is responsible for describing the following
items:

| Component       | Description                                                                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Parameter Types | The actual types that each parameter can conform to. These are defined separately so that multiple parameters can have the same the same type.                                                                                                                                                                                |
| Parameters      | These are the actual values of the system. Parameters are the most fundamental building block of telemetry because they're what everything is trying to describe.                                                                                                                                                             |
| Containers      | These may be parts of packets or full packets themselves. They're responsible for describing how binary data gets turned into a list of parameter values. This covers structure, size in bits, etc. In order to maximize re-used for duplication, containers can be defined and then also used as parts of larger containers. |
| Messages        | Messages are an alternative method of uniquely identifying containers within a Service. A message provides a test in the form of `MatchCriteria` to match to a container.                                                                                                                                                     |
| Algorithms      | Additional functions that can be executed in reaction to other data. These can update derived parameters or act in response to other telemetry.                                                                                                                                                                               |
| Streams         |                                                                                                                                                                                                                                                                                                                               |

Telemetry is described in XTCE using the following forms: uncalibrated
parameters, calibrated parameters, system-supplied parameters, and derived
parameters. This makes it easy to keep track of which values came exactly from
the source, which ones were derived, and which ones were defined by the system.
Calibration means taking a value straight from the source and running some
transformation on it to make it useful for engineering.

### Parameter Types

There lots different parameter types such as string, integer, float, boolean,
enumeration, etc. They all inherit from a `BaseType`. Since that's the most
important, I'll cover its properties.
