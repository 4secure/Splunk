var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");



$.fn.slideWithLabel = function(options) {

    var self=this;
    var fromSliderFunction=options['fromSlider'];
    var getValue;
    if(fromSliderFunction){
      options.min=0; options.max=1;
      getValue=function(){
        var sliderValue=self['slider']('value');
        return fromSliderFunction.call(self['slider'],sliderValue);
      };
    }else{
      getValue=function(){
        return self['slider']('value');
      };
    }
    var toSliderFunction=options['toSlider'];
    var convertToSliderValue;
    if(toSliderFunction){
      convertToSliderValue=function(value){
        return toSliderFunction.call(self['slider'],value);
      };
      options.value=convertToSliderValue(options.value);
    }else{
      convertToSliderValue=function(value){
        return value;
      };
    }
    var convertToDisplayValue=function(value){
      var display=options['display'];
      if(!display) return ''+value;
      return display.call(self['slider'],value);
    };

    var slider = this['slider'](options);

    var label = slider.next();
    label.css('display','none');
    label.css('position','absolute');
    label.css('padding-top','1em');
    var spacing = $('<div style="display: inline-block; height: 0;"></div>');
    spacing.insertAfter(slider);
    var updateLabel=function() {
        var handle = $(slider.children('.ui-slider-handle'));
        $('.slider-value', label).text(convertToDisplayValue(getValue()));
        //offset
        var top = handle.offset().top + handle.outerHeight(true);
        var left = handle.offset().left - (label.width() - handle.width())/ 2;
        var sliderOffset = slider.offset();
        left = Math.max(sliderOffset.left, left);
        left = Math.min(sliderOffset.left+slider.outerWidth()-label.outerWidth(), left);
        label.css('top', top);
        label.css('left', left);
        //label.animate({"left" : left}, 100);
        spacing.css('height',label.outerHeight(true));
        label.css('display','inline-block');
    };
    var lastValue=options.value;
    var fireChangedIfRequired=function(){
        var newValue=slider['slider']('value');
        if(lastValue!=newValue){
            lastValue=newValue;
            if(options['changed']){
                options['changed']();
            }
        }
    };
    slider.bind('change', function () {
        setTimeout(function(){
            updateLabel();
            fireChangedIfRequired();
        },1);
    });
    slider.bind('slide', function () {
        setTimeout(function(){
            updateLabel();
            fireChangedIfRequired();
        },1);
    });
    updateLabel();
    setTimeout(function() { updateLabel(); },1);

    $(window).resize(function() {
        updateLabel();
    });

    return function(){
      if(arguments.length==2 && arguments[0]=='value'){
            var fromValue=arguments[1];
            var toValue=convertToSliderValue(fromValue);
            var ret=slider['slider']('value',toValue);
            slider.trigger('change', true);
            return ret;
      }
      if(arguments.length==1 && arguments[0]=='updateLabel'){
          updateLabel();
          return self;
      }
      if(arguments.length==1 && arguments[0]=='object'){
        return self;
      }
      if(arguments.length==1 && arguments[0]=='value'){
        return getValue();
      }
      if(arguments.length==2){
        if(arguments[0]=='trigger'){
          slider.trigger(arguments[1]);
          return;
        }
      }
      if(arguments.length==3){
        if(arguments[0]=='option'){
            var value,newValue;
            if(arguments[1]=='min'){
                var newMin=arguments[2];
                value=getValue();
                if(newMin>value){
                    newValue=convertToSliderValue(newMin);
                    slider['slider']('value',newValue);
                }
                slider['slider']('option', 'min', newMin);
                slider.trigger('change', true);
                return;
            }
            if(arguments[1]=='max'){
                var newMax=arguments[2];
                value=getValue();
                if(newMax<value){
                    newValue=convertToSliderValue(newMax);
                    slider['slider']('value',newValue);
                }
                slider['slider']('option', 'max', newMax);
                slider.trigger('change', true);
                return;
            }
        }
      }
      return slider['slider'].apply(slider,arguments);
    };
};


}
/*
     FILE ARCHIVED ON 12:57:20 Jul 06, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:37:09 Nov 15, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 180.566
  exclusion.robots: 0.105
  exclusion.robots.policy: 0.095
  cdx.remote: 0.066
  esindex: 0.011
  LoadShardBlock: 147.882 (3)
  PetaboxLoader3.datanode: 135.449 (5)
  PetaboxLoader3.resolve: 108.221 (3)
  load_resource: 130.474 (2)
*/