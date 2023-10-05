---
title: "Home"
layout: default
tags: page
---

# woo hello

## nothing here yet

<span class="text-change">Good design</span><br/>
<span class="change">
    is<br/>
    as little design<br/>
    as possible
</span>

<section class="font-bold">

  <h1 class="text-2xl text-center mb-8">Welcome</h1>
  <p class="text-center mb-8">Test Alpine.js Interactivity below:</p>

  <div x-data="{ count: 0 }" class="flex flex-col justify-center items-center">
    <span x-text="count" class="text-3xl px-8 py-4 bg-gray-500  mb-2"></span>
    <button class="bg-slate-500 text-white py-1 px-4 rounded-sm hover:bg-slate-600" x-on:click="count++">Increment</button>
  </div>

</section>