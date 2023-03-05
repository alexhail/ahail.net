<template>
  <div id="view" view="resume">
    <div class="resume-download-links">
      <p>Thank you for your interest in my work.</p>
      <p>Below you can download my resume(s) in PDF format, in either light or dark mode.</p>
      <br>
      <p class="resume-light"><a href="/resumes/AlexHail_Resume_Tech_2023.pdf" target="_blank">View Resume</a></p>
      <p class="resume-dark"><a href="/resumes/AlexHail_Resume_Tech_2023_Dark.pdf" target="_blank">View Resume (Dark) </a></p>
      <br>
      <p><RouterLink class='no' :to="{ name: 'home' }">&larr; Go Back</RouterLink></p>
    </div>
  </div>
</template>