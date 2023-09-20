---
title: "Robotics"
layout: default
tags: page
---

# Robotics

{% assign total_price = 0 %}

## Equipment

<table>{% assign sub_total = 0 %}
  <tr>
    <th>Component</th>
    <th>Quantity</th>
    <th>Individual Price</th>
    <th>Total</th>
  </tr>
  {%- for doodad in electronics.equipment -%}
    {% assign total_price = doodad.total | plus: total_price %}
    {% assign sub_total = doodad.total | plus: sub_total %}
    <tr>
      <td>{{doodad.name}}</td>
      <td>{{doodad.count}}</td>
      <td>${{doodad.pricePerEach}}</td>
      <td>${{doodad.total}}</td>
    </tr>
  {%- endfor -%}
  <tr>
    <td colspan=3> Total cost:</td>
    <td>${{ sub_total }}</td>
  </tr>
</table>

## Inventory

<table>{% assign sub_total = 0 %}
  <tr>
    <th>Component</th>
    <th>Quantity</th>
    <th>Remaining</th>
    <th>Individual Price</th>
    <th>Total</th>
  </tr>
  {%- for doodad in electronics.components -%}
    {% assign total_price = doodad.total | plus: total_price %}
    {% assign sub_total = doodad.total | plus: sub_total %}
    <tr>
      <td>{{doodad.name}}</td>
      <td>{{doodad.count}}</td>
      <td></td>
      <td>${{doodad.pricePerEach | round: 2}}</td>
      <td>${{doodad.total}}</td>
    </tr>
  {%- endfor -%}
  <tr>
    <td colspan=3> Total cost:</td>
    <td>${{ sub_total }}</td>
  </tr>
</table>

## Current personal total hobby cost ${{ total_price | round: 2 }}