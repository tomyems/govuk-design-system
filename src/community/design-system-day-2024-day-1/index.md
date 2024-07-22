---
title: Day 1
description: Description
section: Community
theme: Design System Day 2024
layout: layout-pane.njk
order: 16
---

{% from "_embed-card.njk" import embedCard %}

<p class="govuk-!-font-size-24">
  Day one was online and happened on the 5th of May 2024. An overview of day one activities could go here.
</p>

<img class="app-image--no-border govuk-!-margin-bottom-9" src="/images/dsd24-24.svg" alt="" role="presentation">

## Watch the day 1 talks

{% call embedCard({
  ytSrc: "https://www.youtube-nocookie.com/embed/x91MPoITQ3I?si=CTLyI1MeMSsUqbE0",
  transcriptHref: "https://www.google.com",
  authorImgSrc: "/images/dsd24-day1-speakers1.png"
}) %}

  <h3><a href="#">The GOV.UK Design System in 5 years</a></h3>
  <p>Trang Erskine, Charlotte Downs and Romaric Pascal, GOV.UK Design System</p>
  <p>A show & tell exploring the history of the Design System, and our focus for the next few years</p>
{% endcall %}
