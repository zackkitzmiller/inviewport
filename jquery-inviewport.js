(function($)
{
    $.inViewport = function(el)
    {
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("inViewport", base);

        base.init = function() 
        {
            // if the item doesn't exist, it's not in the viewport.
            if (base.$el.length < 1) return false;
            
            // find the boundreis of the item in question.
            var offset  = base.$el.offset();
            
            var top     = offset.top;
            var left    = offset.left;
            var width   = base.$el.width();
            var height  = base.$el.height();

            while(base.el.offsetParent)
            {
                el   =  el.offsetParent;
                top  += el.offsetTop;
                left += el.offsetLeft;
            }

            return (
                top >= window.pageYOffset &&
                left >= window.pageXOffset &&
                (top + height) <= (window.pageYOffset + window.innerHeight) &&
                (left + width) <= (window.pageXOffset + window.innerWidth)
            );
            
        };

        return base.init();
    };

})(jQuery);
