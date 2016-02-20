---
layout: post
title: Android In App Billing Howto
---
Here's how I implemented in App Billing in my app(s).

My goal was to implement a donate feature for my [wallpaper apps](http://casparwre.de/android-wallpapers/) so I set about reading the documentation on the Google [developer pages](http://developer.android.com/google/play/billing/billing_integrate.html).

Events took a familiar course: after 10 minutes of reading, I thought, _there's got to be a less painful way to do this_. So I googled the magic words _tutorial_ and found quite a [good one](http://www.techotopia.com/index.php/Integrating_Google_Play_In-app_Billing_into_an_Android_Application_%E2%80%93_A_Tutorial).

However, the recommended method given by Google is annoying. You have to copy Java classes around by hand and there are no Gradle dependencies to make things easy. I got it working in the end, but was unsatisfied.

Then I found this Github project: [Android In-App Billing v3 Library](https://github.com/anjlab/android-inapp-billing-v3). Do youself a favour and just use this. You can install it using Gradle and everything you need to know is in the [sample project](https://github.com/anjlab/android-inapp-billing-v3/blob/master/sample/src/com/anjlab/android/iab/v3/sample2/MainActivity.java).

If you have questions, do ask below.
