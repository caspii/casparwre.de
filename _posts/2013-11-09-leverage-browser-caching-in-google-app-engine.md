---
layout: post
title: Leverage browser caching in Google App Engine
---
I'm working on a project that allows friends to work out who owes cash to whom after a joint event.  and is built in Java / Google App Engine.

Running the site through Google's wonderful page speed insights [tool](https://developers.google.com/speed/pagespeed/insights) resulted in this recommendation: "Leverage browser caching".

Here's what you need to do to implement caching for static files.

Add the following to `appengine-web.xml` (remembering to substitute the correct directory for `/STATIC_DIR/`).

{% highlight xml %}
 <!-- Set a long cache expiration time for static files -->
 <static-files>
    <include path="/STATIC_DIR/**" expiration="365d"/>
    <include path="/**.html">
  </static-files>
{% endhighlight %}
For some reason app engine does not serve static HTML files unless the second include is also present.

More information can be found [here](https://developers.google.com/appengine/docs/java/config/appconfig#Java_appengine_web_xml_Static_files_and_resource_files)