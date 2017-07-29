/* ========================================================================
 * Dset: jQuery.transition.js v1.0.0
 * ========================================================================
 * Copyright 2017 Hetrotech Private Limited.
 * Licensed under MIT (https://github.com/sagardewani/Hetrotech-Projects/blob/master/LICENSE.md)
 * ======================================================================== */


 
;(function($,window){
	'use strict';
	var Transitions = {
	'fade':function(element,transitionOb)
		{
			var duration = transitionOb.duration,
			opacity = transitionOb.value/10,
			mode = transitionOb.mode;
			if(typeof opacity === 'undefined')opacity = 0;
			if(typeof duration === 'undefined')duration = 350;
			if(mode === "auto")mode = 'ease-in-out';
			var unit = 'ms';
			var transition = 'opacity'+' '+duration+unit+' '+mode;
			var class_name = getClass(element);
			var property = {
				t_name:['opacity'],
				t_value:[opacity],
				t_property_name:'transition',
				t_property_value:transition
			}
			setNewClass(element.element,class_name,".",property,"fade");
			element.element.addClass(class_name);

		},
	'move':function(element,transitionOb)
		{
			var position = transitionOb.position,
			direction = transitionOb.direction,
			duration = transitionOb.duration,
			distance = transitionOb.value,
			mode = transitionOb.mode;
			if(typeof direction === 'undefined') return alert("direction is not defined");
			if(typeof duration === 'undefined')duration =1350;
			if(typeof distance === 'undefined') return alert("movement must be defined");
			if(mode === "auto")mode = 'ease-in-out';
			var unit = 'ms';
			var transition,property={};
			if(position == "static")
			{
				transition = "margin-"+direction+" "+duration+unit+" "+mode;
				property = {
				t_name:['margin-'+direction],
				t_value:[distance+'px'],
				t_property_name:'transition',
				t_property_value:transition
				};
			}	
			else
			{
				transition = direction+" "+duration+unit+" "+mode;
				property = {
				t_name:[direction],
				t_value:[distance+'px !important'],
				t_property_name:'transition',
				t_property_value:transition
				};
			}
			var class_name = getClass(element);
			setNewClass(element.element,class_name,".",property,"move",direction);
			element.element.addClass(class_name);
			
		},
	'size':function(element,transitionOb)
		{
			var duration = transitionOb.duration,
			size = transitionOb.value,
			sizeType = transitionOb.property,
			mode = transitionOb.mode;
			if(typeof duration === 'undefined')duration = 350;
			if(typeof size === 'undefined')size = 0;
			if(mode === "auto")mode = 'ease-in-out';
			var unit = 'ms';
			var transition = sizeType+" "+duration+unit+" "+mode;
			var	property = {
					t_name:[sizeType],
					t_value:[size+'px !important'],
					t_property_name:'transition',
					t_property_value:transition
				};
			var class_name = getClass(element);
			setNewClass(element.element,class_name,".",property,"size");
			element.element.addClass(class_name);	
		},
	'all':function(element,transitionOb)
		{
			var duration = transitionOb.duration,
			value = transitionOb.value,
			property = transitionOb.property,
			mode = transitionOb.mode;
			if(typeof duration === 'undefined')duration = 350;
			if(typeof size === 'undefined')size = 0;
			if(mode === "auto")mode = 'ease-in-out';
			var unit = 'ms';
			var transition = "all "+duration+unit+" "+mode;
			var	property = {
					t_name:property,
					t_value:value,
					t_property_name:'transition',
					t_property_value:transition
				};
			var class_name = getClass(element);
			setNewClass(element.element,class_name,".",property);
			element.element.addClass(class_name);	
		},
	'none':function(element)
		{
			var class_name = getClass(element);
			removeIfExists(class_name);
			element.element[0].classList.remove(class_name);
		},
	'constructor':function(options){
		createControlElements();
		createNewStyle();
		this.keys = $.extend({},$.fn.transition.defaults,options);
		this.setTransition = {
			type: 'undefined',
			element: 'undefined',
			duration: 'undefined',
			value: 'undefined',
			mode: 'undefined',
			direction: 'undefined',
			position: 'undefined',
			property: 'undefined',
			phase: 0
		};
		//this.selected_element = element;
		this.previous;
		this.$selected = {
			element: 'undefined',
			tagName: 'undefined',
			position: 'undefined',
			inside: 'undefined',
			index: 'undefined',
			class: 'undefined',
		};
		$(window).on('click',$.proxy(this.setTransitions,this)).on('keydown',$.proxy($.fn.settings.onKeyDown,this)).on('keydown',$.proxy($.fn.settings.onTransitionKeyDown,this));
		$('#d-set-next-t_task').on('click',$.proxy(this.nextTask,this));
		$('.d-set-edit-icon').on('click',$.proxy(this.editOptions,this));
	}
};
Transitions.VERSION = "1.0.1";
Transitions.plguinName = "TRANSITION";
Transitions.AUTHOR = "Sagar Dewani";
Transitions.WEBSITE = "http://www.hetrotech.in/"

function reg_transition(options) {
    new Transitions['constructor'](options);
}
//defining jQuery namespace transition
$.fn.transition = function(options) {
    return reg_transition(options);
};

window.$.hoverTransition = $.fn.transition;

var settings = {
	disableSelect: [$("body"), $("#wrapper"), $("html"), $("option")],
	defSetting :{
		transition: 0
	},
	count:0,
	onKeyDown: function(e){
		var $that = this;
		if ($that.$selected.element !== 'undefined')
		{
			if (e.shiftKey && e.ctrlKey && e.altKey){
				for (var key in $.fn.settings.defSetting) {
					if ($.fn.settings.defSetting.hasOwnProperty(key))
						$.fn.settings.defSetting[key] = 0;
				}
			}
			if (e.ctrlKey && e.which == $that.keys.modeKey) {
				var mode = "normal";
				for (var key in $.fn.settings.defSetting) {
					if ($.fn.settings.defSetting.hasOwnProperty(key))
						if ($.fn.settings.defSetting[key] == 1) 
						mode = key;
				}
				alert("Activated Mode: " + mode);
			}
			if (e.which == $that.keys.sourceKey) {
				$(".modal-body>pre").empty();
				if($.fn.settings.defSetting.transition){
					var sheet;
					var styleSheets = $("style#d-set-stylesheet")[0].sheet ? $("style#d-set-stylesheet")[0].sheet : $("style#d-set-stylesheet")[0].styleSheet;
					var styleSheetRules = styleSheets.rules ? styleSheets.rules : styleSheets.cssRules;
					var len = styleSheetRules.length ? styleSheetRules.length : styleSheetRules.length;
					var targetClass = $that.$selected.element.attr('class').split(' ');
					var i;
					var selectorText;
					for(i=0;i<len;i++)
					{
						selectorText = styleSheetRules[i].selectorText.replace('.','');
						if(targetClass.indexOf(selectorText) > -1)
							$(".modal-body>pre").append("<code class=d-set style='background-color:#7fdfde;'>"+styleSheetRules[i].cssText+"</code><br/>");
						else
						$(".modal-body>pre").append("<code class=d-set>"+styleSheetRules[i].cssText+"</code><br/>");
					}
				}
				$("#source-container").modal('show');
			}
			//old.apply(this,arguments);
		}
	},
	onTransitionKeyDown: function(e){
		var $that = this;
		if ($that.$selected.element !== 'undefined')
		{
			if (e.shiftKey && e.which == $that.keys.transitionKey) {
				for (var key in $.fn.settings.defSetting) {
					if ($.fn.settings.defSetting.hasOwnProperty(key))
						if ($.fn.settings.defSetting.transition) continue;
					$.fn.settings.defSetting[key] = 0;
				}
				$.fn.settings.defSetting.transition = ($.fn.settings.defSetting.transition == 0) ? 1 : 0;
				if ($.fn.settings.defSetting.transition == 1)
					$("#transitions").removeClass("hide");
				else
					$that.setInitial();
			}
			//old.apply(this,arguments);
		}
	}
}



$.fn.settings = $.extend({}, $.fn.settings|| {},settings);

$.fn.transition.defaults = {
	transitionKey:'72',
	sourceKey:'13',
	modeKey:'77'
};

Transitions['constructor'].prototype.setTransitions = function(e){
		var $that = this;
		var disable = $.fn.settings.disableSelect;
		var len = disable.length,i;
		for(i=0;i<len;i++)
		{
			if($(e.target).is(disable[i]))return;
		}		
		if($(e.target).is('[class*="d-set"]')) return;
		$that.$selected.element = $(e.target);
		$that.$selected.position = $that.$selected.element != 'undefined' ? ($that.$selected.element.css('position') == 'static' ? 'static' : $that.$selected.element.css('position')) : 'undefined';
		$that.$selected.tagName = $that.$selected.element != 'undefined' ? $that.$selected.element[0].tagName.toLowerCase() : 'undefined';
		$that.$selected.inside = $that.$selected.element != 'undefined' ? isElementInside($that.$selected.element) : 'undefined';
		$that.$selected.index = $that.$selected.element != 'undefined' ? getElementIndex($that.$selected.element) : 'undefined';
		$that.$selected.class = $that.$selected.element != 'undefined' ? addNewClass($that.$selected) : 'undefined';
		//console.log($that.$selected);

		if ($that.$selected.element) {
        if ($that.previous && $that.previous.hasClass('border-blue')) {
            $that.previous.removeClass('border-blue');
        }
        $that.previous = $that.$selected.element;
        $that.previous.addClass('border-blue');
		
    }	

//Private Functions


	//To check if element is child element of div element or not
	//Argument: element
	function isElementInside(element) {
		if (element.parent().is('div'))
			return true;
		else return false;
	}	
	//To get the element Index data;
	//If not available assign new index data
	//Argument : element
	function getElementIndex(element) {
		if (element.data('e_index') == null)
			element.data('e_index', ++$.fn.settings.count);
		return element.data('e_index');
	}
}         
Transitions['constructor'].prototype.nextTask = function(e) {
    e.preventDefault();
	var $that = this;
    if ($that.setTransition.phase == 0) {
        var t_type = $('#select-transition option:selected').val();
        var element;
        if ($that.$selected.element === 'undefined')
            return alert("select the element on which tranistion\nshould be applied");
        else element = $that.$selected.element;
        if (t_type == "none") return removeTransitions($that.$selected);
        $that.setTransition.element = element;
        $that.setTransition.type = t_type;
        $that.setTransition.position = $that.$selected.position;
        $that.setTransition.phase++;
        $("#t_type").addClass("hide");
        $("#duration").removeClass("hide");
    } else if ($that.setTransition.phase == 1) {
        var duration = $('#duration-transition').val();
        $that.setTransition.duration = duration;
        $("#duration").addClass("hide");
        if ($that.setTransition.type == "fade")
            $("#opacity").removeClass("hide");
        else if ($that.setTransition.type == "move")
            $("#movement").removeClass("hide");
        else if ($that.setTransition.type == "size")
            $("#size").removeClass("hide");
        else if ($that.setTransition.type == "all")
            $("#custom").removeClass("hide");
        $that.setTransition.phase++;
    } else if ($that.setTransition.phase == 2) {
        if ($that.setTransition.type == 'fade') {
            var opacity = $("#opacity-value").val().trim();
            $that.setTransition.value = opacity;
            $that.setTransition.phase++;
            $("#opacity").addClass("hide");
            $("#d-set-next-t_task").attr('src', 'images/circle-checkmark.png');
            $("#mode").removeClass("hide");
        } else if ($that.setTransition.type == 'move') {
            if ($that.setTransition.value == "undefined") {
                var distance = $("#movement-value").val().trim();
                $that.setTransition.value = distance;
                $("#movement").addClass("hide");
                $("#direction").removeClass("hide");
            } else {
                var direction = $("#select-direction option:selected").val();
                $that.setTransition.direction = direction;
                $that.setTransition.phase++;
                $("#direction").addClass("hide");
                $("#d-set-next-t_task").attr('src', 'images/circle-checkmark.png');
                $("#mode").removeClass("hide");
            }

        } else if ($that.setTransition.type == 'size') {
            var size = $("#size-value").val().trim();
            $that.setTransition.value = size;
            $that.setTransition.property = "width";
            $that.setTransition.phase++;
            $("#size").addClass("hide");
            $("#d-set-next-t_task").attr('src', 'images/circle-checkmark.png');
            $("#mode").removeClass("hide");

        } else if ($that.setTransition.type == 'all') {
            if ($that.setTransition.property == "undefined") {
                var custom = $("#custom-name").val().trim().split(',,');
				if(!custom) return alert("please enter property name");
                $that.setTransition.property = custom;
                $("#custom").addClass("hide");
                $("#value").removeClass("hide");
            } else {
                var value = $("#custom-value").val().trim().split(',,');
				if(!value) return alert("please enter property value");
                $that.setTransition.value = value;
                $that.setTransition.phase++;
                $("#value").addClass("hide");
                $("#d-set-next-t_task").attr('src', 'images/circle-checkmark.png');
                $("#mode").removeClass("hide");
            }
        }
    } else if ($that.setTransition.phase == 3) {
        var mode = $("#transition-mode option:selected").val();
        $that.setTransition.mode = mode;
        Transitions[$that.setTransition.type]($that.$selected, $that.setTransition);
        $that.setTransition.phase++;
        $("#mode").addClass("hide");
    }
    if ($that.setTransition.phase == 4) {
        $that.setInitial();
    }
	function removeTransitions(element) {
		Transitions["none"](element);
		$that.setInitial();
		alert("Transitions Removed");
	}	
}

Transitions['constructor'].prototype.editOptions = function(e){
	e.preventDefault();
	var $this = $(e.target);
    var prev = $this.prev();
    prev.prop('disabled', false);
}

Transitions['constructor'].prototype.setInitial = function(){
		var $that = this;
		var setTransition = $that.setTransition;
		for (var key in setTransition) {
			if (setTransition.hasOwnProperty(key)) {
				if (key == "phase") continue;
				setTransition[key] = "undefined";
			}
		}
		setTransition.phase = 0;
		$("#transitions").addClass("hide");
		$("#task-list > li").each(function(){ if(this.id == "t_type") $(this).removeClass("hide"); else $(this).addClass("hide")});
		$("#d-set-next-t_task").attr('src', 'images/arrow-right.png');
		$("#select-transition option:eq(0)").prop('selected', 'selected');
		$(".d-set-edit-icon").prev().prop('disabled', true);
		$("#duration-transition").val(350);
		$("#opacity-value").val(0);
		$("#movement-value").val('');
		$("#size-value").val(0);
		$("#custom-name").val('');
		$("#custom-value").val('');
		$("#direction option:eq(0)").prop('selected', 'selected');
		$("#transition-mode option:eq(0)").prop('selected', 'selected');
}

function createNewStyle()
{
	var style = document.createElement("style");
	style.setAttribute('id','d-set-stylesheet');
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
}
function removeIfExists(class_name)
{
	var styleTag = document.getElementById("d-set-stylesheet");
	var styleRef = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;
	var len = styleRef.cssRules ? styleRef.cssRules.length : styleRef.rules.length;
	if(styleRef.cssRules){ //all browsers except IE 9-
		for(i=len;i>0;i--)
		{
				if (styleRef.cssRules[i-1].selectorText === "." + class_name+":hover" ||styleRef.cssRules[i-1].selectorText === "." + class_name )
				styleRef.deleteRule(i-1);
		}
	}
	else{
		var i;
		for(i=len;i>0;i--)
		{
				if(styleRef.rules[i-1].selectorText === "."+class_name+":hover" ||styleRef.rules[i-1].selectorText === "."+class_name)
				styleRef.removeRule(i-1);
		}
	}
	return styleRef;	
}

function setNewClass(element,class_name,classSelector,styleObject,type,direction)
{
	if(typeof type === 'undefined') type = "all";
	if(typeof direction === 'undefined') direction = "left";
	var stylesheet = removeIfExists(class_name);
	if(element.data('hover-class') == null)
		element.data('hover-class',class_name);
	var count=0,j,i,k,len= styleObject.t_name.length;
	var browser_prefix = ['-webkit-','-o-','-moz-',''];
	var style= [];
	var property = [{"append":":hover"},{"append":""}];
	for(j=0; j<2;j++)
	{	
		style.push({});
		style[j].sheet = stylesheet;
		style[j].selector = class_name;
		style[j].type = classSelector;
		style[j].property = property[j]["append"];
		style[j].style = "";
	}	
	for(k in styleObject.t_name)
	{
		style[0].style += styleObject.t_name[k]+":";
		style[0].style += styleObject.t_value[k]+";";
	}
	for(i=0;i<browser_prefix.length;i++)
	{	
		style[0].style += browser_prefix[i]+styleObject.t_property_name+":";
		style[0].style += styleObject.t_property_value+";";
		style[1].style += browser_prefix[i]+styleObject.t_property_name+":"+styleObject.t_property_value+";";
	}	
	if(type == "move")
		style[1].style += direction+":0;";
	
	addCSSRule(style);
}

function addCSSRule(styleSheet) {
	var i;
	for(i=0;i<styleSheet.length;i++)
		if(styleSheet[i].sheet.insertRule)
		styleSheet[i].sheet.insertRule(styleSheet[i].type+styleSheet[i].selector+styleSheet[i].property+"{"+styleSheet[i].style+"}",styleSheet[i].sheet.cssRules.length);
		else
		styleSheet[i].sheet.addRule(styleSheet[i].type+styleSheet[i].selector+styleSheet[i].property,styleSheet[i].sheet.style,-1);	
}
function getClass(element)
{
	var e_index = element.index;
	var e_tag = element.tagName;
	if(e_index == "undefined") return;
	var class_name = "e-set-"+e_tag+"-"+e_index;
	return class_name;
}

function getElementClass(element)
{
	var e_index = element.index;
	var e_tag = element.tagName;
	if(e_index == "undefined") return false;
	var class_name = "e-set-"+"element-"+e_tag+"-"+e_index;
	return class_name;
}

function addNewClass(element)
{
	var new_class = getElementClass(element);
	if(new_class && !element.element.hasClass(new_class))
	{
		element.element[0].classList.add(new_class);
	}
	return new_class;
}

function createControlElements()
{
	var html = `<div class="d-set transition-container hide" id="transitions">
			<ul class="d-set" id="task-list">
				<li class="d-set" id="t_type">
					<header class="d-set">Select The Transition Type</header>
					<select class="d-set form-control" id="select-transition">
						<option value="none">none</option>
						<option value="all">All</option>
						<option value="fade">Fade</option>
						<option value="move">Move</option>
						<option value="size">Size</option>
					</select>
				</li>
				<li class="d-set hide" id="duration">
					<header class="d-set">Enter Transition Duration(in ms)</header>
					<input type="number" min="0" value="350" placeholder="1second = 1000ms" class="d-set form-control" id="duration-transition" title="do next if you want auto value" disabled/>
					<i class="d-set fa fa-fw fa-edit d-set-edit-icon"></i>
				</li>
				<li class="d-set hide" id="opacity">
					<header class="d-set" title="enter after transition opacity">Enter Opacity</header>
					<input type="number" min="0" max="10" class="d-set form-control" value="0" placeholder="ex:7" title="do next if you want auto value" id="opacity-value" disabled/>
					<i class="d-set fa fa-fw fa-edit d-set-edit-icon"></i>
				</li>
				<li class="d-set hide" id="size">
					<header class="d-set" title="enter after transition width">Enter Width(in px)</header>
					<input type="number" min="0" class="d-set form-control" placeholder="ex:80" value="0" title="do next if you want auto value" id="size-value" disabled/>
					<i class="d-set fa fa-fw fa-edit d-set-edit-icon"></i>
				</li>
				<li class="d-set hide" id="movement">
					<header class="d-set" title="enter after transition move distance">Enter Distance(in px)</header>
					<input type="number" class="d-set form-control" placeholder="ex:200" id="movement-value" required/>
				</li>
				<li class="d-set hide" id="custom">
					<header class="d-set" title="define transition name">Enter Custom Transition</header>
					<input type="text" placeholder="ex:background-color" class="d-set form-control" title="Enter custom transition property" id="custom-name" required/>
				</li>
				<li class="d-set hide" id="value">
					<header class="d-set" title="define transition value">Enter Custom Transition Value</header>
					<input type="text" placeholder="ex:red" class="d-set form-control" title="Enter custom transition property value should be in effect after transition applied" id="custom-value" required/>
				</li>
				<li class="d-set hide" id="direction">
					<header class="d-set" title="select after transition direction">Select Direction</header>
					<select class="d-set form-control" id="select-direction">
						<option value="left">Left</option>
						<option value="right">Right</option>
					</select>
				</li>
				<li class="d-set hide" id="mode">
					<header class="d-set" title="select transition mode">Select Transition Mode</header>
					<select class="d-set form-control" id="transition-mode">
						<option value="auto">Auto</option>
						<option value="linear">Linear</option>
						<option value="ease">Ease</option>
					</select>
				</li>
			</ul>
			<div class="d-set button">
				<img class="d-set circle-img" src="images/arrow-right.png" id="d-set-next-t_task"/>
			</div>
		</div>
		<div id="source-container" class="modal fade d-set" role="dialog">
		  <div class="modal-dialog d-set">

			<!-- Modal content-->
			<div class="modal-content d-set">
			  <div class="modal-header d-set">
				<button type="button" class="close d-set" data-dismiss="modal">&times;</button>
				<h4 class="modal-title d-set">CSS Classes</h4>
			  </div>
			  <div class="modal-body d-set">
				<pre class="d-set"></pre>
			  </div>
			  <div class="modal-footer d-set">
				<button type="button" class="btn btn-default d-set" data-dismiss="modal">Close</button>
			  </div>
			</div>

		  </div>
		</div>`;
		$('body').append(html);
}

})(jQuery,window);