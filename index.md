---
layout: home
---


<br>
<br>
<h1 class="header center"><img style="height: 200px; width: 200px;" src="assets/images/noelli.png" alt=""></h1>
<h3 class="no-top-margin header center">{{ page.title | default: site.title | default: site.github.repository_name }}</h3>
<br>
<div class="row center">
    <p class="flow-text">
        {{ page.description | default: site.description | default: site.github.project_tagline }}
    </p>
    <p class="flow-text">
        {{ page.kontakt | default: site.kontakt }}<br>
        <a class="icon-large" target="_blank" href="mailto:{{ site.email }}"><i class="fa fa-envelope green-text" style=""></i></a>
    </p>
</div>
<div class="separator">
    <h5>Programmiersprachen:</h5>
</div>
<div class="row center">
     <a class="btn btn-flat waves-effect waves-light waves-green icon-large tooltipped" data-position="top" data-tooltip="python.org" href="https://python.org"><i class="fab fa-python"></i></a>
</div>
<div class="separator">
    <h5>Letzte Projekte:</h5>
</div>

<br>