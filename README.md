<div>

# Transition Plugin By HetroTech

## Author: Sagar Dewani

### Official Website: [www.hetrotech.in](http://www.hetrotech.in/)

### Official E-mail: [info@hetrotech.in](mailto:info@hetrotech.in)

### Personal E-mail: [sagar7930@gmail.com](mailto:sagar7930@gmail.com)

### Facebook [Sagar Dewani](https://www.facebook.com/sagar.dev.1426)

### LinkedIn [Sagar Dewani](https://linkedin.com/in/sagar-kumar-3420a1b2)

</div>

*   Transition Plugin is a jQuery and Javascript based plugin to dynamically set hover transitions on HTML elements.
*   This plugin provide you easy and convenient way to apply hover effect on element.
*   This plugin comes with many handy features that are just one press away from you. Just press the command keys and see the magic of plugin.
*   This plugin is intended to apply hover transitions effect and generate CSS stylesheet classes so that you can just copy and paste the code of CSS in your HTML file to see the effect.
*   This plugin is for testing before implementing your CSS styles into HTML. For actual effect you must copy the CSS code generated and paste it in your HTML file.
*   <font color="red">Now,This plugin is not compaitible with mobile browser versions.</font>

<div>///////////////////////////////////////////  

**HOW TO SETUP Transition Plugin**  

//////////////////////////////////////////</div>

*   <header>To setup Transition plugin for your project you should include the following plugins as dependency in your project before including this plugin:</header>

    <small>The plugin is tested with mentioned dependencies</small>
    *   jQuery 3.x
    *   Bootstrap 3.7.x
    *   jQuery UI 1.11.x
    *   font-awesome 4.7.x
*   <header>After including all these dependencies insert Transition plugin javascript file in your project using :</header>

        <script type="text/javascript" src="jquery.transition.min.js" ></script> 

*   <header>How To Use</header>

        $.hoverTransition();

    <samp><script> $.hoverTransition(); </script></samp>

    <header>You can also change the triggering key combination</header>

    <table border="1" cellpadding="3">

    <tbody>

    <tr>

    <th>Option</th>

    <th>Example</th>

    <th>Usage</th>

    <th>Description</th>

    </tr>

    <tr>

    <td>modeKey</td>

    <td>

        $.hoverTransition(modeKey:'66');

    </td>

    <td>

        $.hoverTransition(modeKey:'your custom key decimal value');

    </td>

    <td>This will customized the default key combination for triggering mode alert that is <kbd>ctrl+m</kbd> to <kbd>ctrl+b</kbd>  
    _Note:this doesn't change the control key(i.e. shift/alt/ctrl).Only the combination with control keys._</td>

    </tr>

    <tr>

    <td>sourceKey</td>

    <td>

        $.hoverTransition(sourceKey:'66');

    </td>

    <td>

        $.hoverTransition(sourceKey:'your custom key decimal value');

    </td>

    <td>This will customized the default key combination for triggering CSS styles code that is <kbd>Enter</kbd> to <kbd>b</kbd>  
    </td>

    </tr>

    <tr>

    <td>transitionKey</td>

    <td>

        $.hoverTransition(transitionKey:'66');

    </td>

    <td>

        $.hoverTransition(transitionKey:'your custom key decimal value');

    </td>

    <td>This will customized the default key combination for triggering transition that is <kbd>shift+h</kbd> to <kbd>shift+b</kbd>  
    _Note:this doesn't change the control key(i.e. shift/alt/ctrl).Only the combination with control keys._</td>

    </tr>

    </tbody>

    </table>

*   <header>How to make an element disable to be selected</header>

    You just need to add a class(d-set) to that element to make unavailable to be selected

    Example: <samp><input class = "d-set" /></samp>

<div>////////////////////////////////////////////////  

**BROWSER REQUIREMENTS FOR Transition Plugin**  

///////////////////////////////////////////////</div>

<header>This plugin works completely and perfectly and tested on all top browser with latest version such as:(<small>this plugin may also work with some earlier versions of these broswer</small>)</header>

*   MOZILLA FIREFOX(54+)
*   GOOGLE CHROME(58+)
*   Internet Explorer 10+

<div>////////////////////////////////////////////////  

**Transition Plugin FUNCTIONALITIES**  

///////////////////////////////////////////////</div>

<header>Transition Plugin comes with varities of functionality that are listed below that can be useful to boost the designing of your project.</header>

_#### MODES ####_

**Transition Plugin have 1 mode**

<table border="2" cellpadding="4">

<thead>

<tr>

<th>#</th>

<th>Mode Name</th>

<th>#Key Combination</th>

<th>#Description</th>

<th>#Procedure</th>

</tr>

</thead>

<tbody>

<tr id="transition_documentation">

<td>1</td>

<td>_Set Transition_</td>

<td><kbd>Shift+h</kbd></td>

<td>**To Set onhover transition on the selected element**</td>

<td>**There could be consequences of applying transition so you should have some knowledge how transitions are applied** _If you have already applied some effect then there might be no effect of these transitions on the elements_

1.  First Select The Element on which you want to apply onhover effect/transition
2.  Second Press the key combination.
3.  Third A box will open to set the transition configuration.

    <table border="1" cellpadding="4">

    <thead>

    <tr>

    <th>#</th>

    <th>Transition Name</th>

    <th>Effect</th>

    <th>Procedure</th>

    </tr>

    </thead>

    <tbody>

    <tr>

    <td>1</td>

    <td>none</td>

    <td>Remove all applied hover transition(no effect on transitions already applied.)</td>

    <td>Select the none from Select Transition type menu.</td>

    </tr>

    <tr>

    <td>2</td>

    <td>All</td>

    <td>To apply your custom transition(you should have knowledge of transitions for this.)</td>

    <td>

    1.  Select the all from Select Transition type menu.Then press ![next](../images/arrow-right.png)
    2.  Enter the transition duration.If you don't know about this just press ![next](../images/arrow-right.png)

        <header>To set Custom transition duration</header>

        *   Click on edit icon below the input box. To enable the input button
        *   Enter the custom duration and then press ![next](../images/arrow-right.png)
    3.  Enter the transition name(if you don't know refer to CSS transitions first). Then press ![next](../images/arrow-right.png)
        *   if you want to change more than one property after hover then separate them with _,_
        *   <pre><samp>Example: background-color,,color,,width,,etc...</samp></pre>

    4.  Enter the transition value(if you don't know refer to CSS transitions first). Then press ![next](../images/arrow-right.png)
        *   if you want to change more than one property value after hover then separate them with _,_
        *   <pre><samp>Example: white,,red,,500px,,etc...</samp></pre>

        *   _Note: you may use !important to see the changes cause of overriding of styles can prevent the applied effect. However, I would not suggest using <q>!important</q> in your actual HTML layout. I have used it so that it can override the inline or higher priority CSS style properties to show the effects._
    5.  Select the transition mode and press ![next](../images/circle-checkmark.png)
        *   Auto : this set "ease-in-out" transition
        *   Linear : this set "linear" transition
        *   Ease: this set "ease" transition

    </td>

    </tr>

    <tr>

    <td>3</td>

    <td>Fade</td>

    <td>To apply fade transition</td>

    <td>

    1.  Select the fade from Select Transition type menu.Then press ![next](../images/arrow-right.png)
    2.  Enter the transition duration.If you don't know about this just press ![next](../images/arrow-right.png)

        <header>To set Custom transition duration</header>

        *   Click on edit icon below the input box. To enable the input button
        *   Enter the custom duration and then press ![next](../images/arrow-right.png)
    3.  Enter the opacity value. If you don't know about this just press ![next](../images/arrow-right.png)

        <header>To set Custom opacity value</header>

        *   Click on edit icon below the input box. To enable the input button
        *   Enter the custom opacity value and then press ![next](../images/arrow-right.png)
    4.  Select the transition mode and press ![next](../images/circle-checkmark.png)
        *   Auto : this set "ease-in-out" transition
        *   Linear : this set "linear" transition
        *   Ease: this set "ease" transition

    </td>

    </tr>

    <tr>

    <td>4</td>

    <td>Size</td>

    <td>To apply size transition.This transition will change the size of element.</td>

    <td>

    1.  Select the size from Select Transition type menu.Then press ![next](../images/arrow-right.png)
    2.  Enter the transition duration.If you don't know about this just press ![next](../images/arrow-right.png)

        <header>To set Custom transition duration</header>

        *   Click on edit icon below the input box. To enable the input button
        *   Enter the custom duration and then press ![next](../images/arrow-right.png)
    3.  Enter the width value in numeric(scale is px). If you don't know about this just press ![next](../images/arrow-right.png)

        <header>To set Custom width value</header>

        *   Click on edit icon below the input box. To enable the input button
        *   Enter the custom width value and then press ![next](../images/arrow-right.png)
    4.  Select the transition mode and press ![next](../images/circle-checkmark.png)
        *   Auto : this set "ease-in-out" transition
        *   Linear : this set "linear" transition
        *   Ease: this set "ease" transition

    </td>

    </tr>

    <tr>

    <td>5</td>

    <td>Move</td>

    <td>To apply move transition. This transition will change the position of element.</td>

    <td>

    1.  Select the move from Select Transition type menu.Then press ![next](../images/arrow-right.png)
    2.  Enter the transition duration.If you don't know about this just press ![next](../images/arrow-right.png)

        <header>To set Custom transition duration</header>

        *   Click on edit icon below the input box. To enable the input button
        *   Enter the custom duration and then press ![next](../images/arrow-right.png)
    3.  Enter the distance value(or movement value) in numeric(scale is px). This value must be set. Then press ![next](../images/arrow-right.png)
    4.  Select the movement direction and press ![next](../images/circle-checkmark.png)
        *   Left : move the element by distance value in left direction.
        *   Right : move the element by distance value in right direction.
    5.  Select the transition mode and press ![next](../images/circle-checkmark.png)
        *   Auto : this set "ease-in-out" transition
        *   Linear : this set "linear" transition
        *   Ease: this set "ease" transition

    </td>

    </tr>

    </tbody>

    </table>

</td>

</tr>

</tbody>

</table>

## Other Functionalities

<table border="2" cellpadding="4">

<thead>

<tr>

<th>#</th>

<th>#Key Combination</th>

<th>#Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>1</td>

<td><kbd>Ctrl+m</kbd></td>

<td>**To Check which mode is activated currently. An alert box will open and show the details**</td>

</tr>

<tr>

<td>2</td>

<td><kbd>Enter</kbd></td>

<td>**To get the stylesheet class details of selected element. This will only show the styles applied using this plugin.**</td>

</tr>

<tr>

<td>3</td>

<td><kbd>Shift+h</kbd></td>

<td>**To get in apply Transition or disable Transition mode**<small>After disabling the mode you will return to normal mode</small></td>

</tr>

<tr>

<td>4</td>

<td><kbd>Shift+Ctrl+Alt</kbd></td>

<td>**To get back in normal mode**</td>

</tr>

</tbody>

</table>