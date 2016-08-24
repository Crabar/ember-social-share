# Ember-social-share

The main purpose of this addon to provide possibility to share links with images, title, descriptions etc without meta properties and without server rendering.

[DEMO](https://crabar.github.io/ember-social-share/)

## Installation

    ember install ember-social-share

## Usage
There are two ways to embed share buttons to page.
First, you can add share buttons one by one. Example:

    {{#fb-share-button}}Share{{/fb-share-button}}
    {{#vk-share-button}}Share{{/vk-share-button}}
    {{#twitter-share-button}}Tweet{{/twitter-share-button}}

Or you can add share buttons like one share panel:

    {{share-panel buttons="fb,vk,twitter" labels="Share,Share,Tweet"}}

There are some properties for any of share buttons:

* _adaptive_ - boolean flag for adaptive design (default: _true_)

There are some properties for ```share-panel```:

* _buttons_ - comma-separated list of social networks
* _labels_ - comma-separated list of buttons labels
* _adaptive_ - boolean flag for adaptive design (default: _true_)

At section below you can find share options that can be set for each button or panel.

## Options
Option | Description | Facebook | VKontakte | Twitter
------ | ----------- | -------- | --------- | -------
url | page url (by default - current page url) | &#10003; | &#10003; | &#10003;
title | share title (tweet message for twitter) | &#10003; | &#10003; | &#10003;
text | description | &#10003; | &#10003; | &#10005;
image | image url | &#10003; | &#10003; | &#10005;
hashtags | comma-separated list of hashtags | &#10005; | &#10005; | &#10003;
via | link to twitter account | &#10005; | &#10005; | &#10003;

## Example

    {{#fb-share-button url="http://example.com" title="Here is example!" text="Some description..."}}Share{{/fb-share-button}}
    {{#vk-share-button title="Some russion title!" text="Another description" image="some image url"}}Share it!{{/vk-share-button}}
    {{twitter-share-button title="Look at this!" url="http://example.com" hashtags="example" via="example.com"}}Tweet{{/twitter-share-button}}


    {{share-panel adaptive=false title="Example title" text="Example text!" image="sorry didnt find any image" hashtags="example"}}
