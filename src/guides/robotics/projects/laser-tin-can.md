---
title: "Laser Tin Can"
layout: default
tags: page
components:
  - name: laser
    count: 1
  - name: OLED Display
    count: 1
  - name: 5549 Light Dependent Resistor LDR 5MM Photoresistor
    count: 1
  - name: Breadboard 400 Tie Point
    count: 1
  - name: ESP8266 WeMos D1 Mini V4.0.0 Type-C
    count: 1
---

{% assign total_price = 0 %}

## Components Needed
<ul>
{%- for doodad in components -%}
  <li>{% projectItem doodad.name doodad.count%}</li>
{%- endfor -%}
</ul>

## Estimated Total Project Cost {{ total_price }}