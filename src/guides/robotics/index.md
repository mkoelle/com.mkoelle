---
title: "Robotics"
layout: default
tags: page
---


# Robotics

{% assign total_price = 0 %}

## equipment
<ul>
{%- for doodad in electronics.equipment -%}
  <li>{% mainItem doodad.name %}</li>
  {% assign total_price = doodad.total | times: doodad.pricePerEach | plus: total_price %}
{%- endfor -%}
</ul>

## Components
<ul>
{%- for doodad in electronics.components -%}
  <li>{% mainItem doodad.name %}</li>
  {% assign total_price = doodad.total | times: doodad.pricePerEach | plus: total_price %}
{%- endfor -%}
</ul>


## Total Hobby Cost {{ total_price }}