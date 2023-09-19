---
title: "Laser Tag"
layout: default
tags: page
needed_components:
  - name: ESP8266 WeMos D1 Mini V4.0.0 Type-C
    count: 1
  - name: OLED Display
    count: 1
  - name: laser
    count: 1
  - name: 5549 Light Dependent Resistor LDR 5MM Photoresistor
    count: 1
  - name: Breadboard 400 Tie Point
    count: 1
---

{% assign total_price = 0 %}

## Components Needed

<table>
  <tr>
    <th>Component</th>
    <th>Quantity</th>
    <th>Individual Price</th>
    <th>Total</th>
  </tr>
  {%- for doodad in components -%}
    {% assign total_price = doodad.total | plus: total_price %}
    <tr>
      <td>{{doodad.name}}</td>
      <td>{{doodad.count}}</td>
      <td>${{doodad.price}}</td>
      <td>${{doodad.total}}</td>
    </tr>
  {%- endfor -%}
  <tr>
    <td colspan=3> Estimated total cost:</td>
    <td>${{ total_price}}</td>
  </tr>
</table>
