<template>
  <div id="view" view="resume">
    <div class="resume-download-links">
      <p>Thank you for your interest in my work.</p>
      <p>Below you can download my resume(s) in PDF format, in either light or dark mode.</p>
      <br>
      <p class="resume-light">Resume <a href="/resumes/AlexHail_Resume_Tech_2023.pdf">View</a></p>
      <p class="resume-dark">Resume (Dark) <a href="/resumes/AlexHail_Resume_Tech_2023_Dark.pdf">View</a></p>
      <br>
      <p><RouterLink :to="{ name: 'home' }">&larr; Go Back</RouterLink></p>
    </div>
  </div>
</template>