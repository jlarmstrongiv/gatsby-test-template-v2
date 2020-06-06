/**
 * min-width in TailwindUI with sidebar
 * https://tailwindui.com/documentation#configuring-sidebar-breakpoints
 * sm:640px
 * md:1024px
 * lg:1280px
 * xl:1536px
 */

export default {
  // responsive: {
  //   /**
  //    * name to display in the dropdown
  //    * @type {String}
  //    */
  //   name: 'Responsive',

  //   /**
  //    * Inline styles to be applied to the story (iframe).
  //    * styles is an object whose key is the camelCased version of the style name, and whose
  //    * value is the style’s value, usually a string
  //    * @type {Object}
  //    */
  //   styles: {
  //     width: '100%',
  //     height: '100%',
  //   },

  //   /**
  //    * type of the device (e.g. desktop, mobile, or tablet)
  //    * @type {String}
  //    */
  //   type: 'desktop',
  // },
  xs: {
    /**
     * name to display in the dropdown
     * @type {String}
     */
    name: 'xs',

    /**
     * Inline styles to be applied to the story (iframe).
     * styles is an object whose key is the camelCased version of the style name, and whose
     * value is the style’s value, usually a string
     * @type {Object}
     */
    styles: {
      width: '375px',
      height: '100%',
    },

    /**
     * type of the device (e.g. desktop, mobile, or tablet)
     * @type {String}
     */
    type: 'mobile',
  },
  sm: {
    /**
     * name to display in the dropdown
     * @type {String}
     */
    name: 'sm',

    /**
     * Inline styles to be applied to the story (iframe).
     * styles is an object whose key is the camelCased version of the style name, and whose
     * value is the style’s value, usually a string
     * @type {Object}
     */
    styles: {
      width: '640px',
      height: '100%',
    },

    /**
     * type of the device (e.g. desktop, mobile, or tablet)
     * @type {String}
     */
    type: 'tablet',
  },
  md: {
    /**
     * name to display in the dropdown
     * @type {String}
     */
    name: 'md',

    /**
     * Inline styles to be applied to the story (iframe).
     * styles is an object whose key is the camelCased version of the style name, and whose
     * value is the style’s value, usually a string
     * @type {Object}
     */
    styles: {
      width: '1024px',
      height: '100%',
    },

    /**
     * type of the device (e.g. desktop, mobile, or tablet)
     * @type {String}
     */
    type: 'desktop',
  },
  lg: {
    /**
     * name to display in the dropdown
     * @type {String}
     */
    name: 'lg',

    /**
     * Inline styles to be applied to the story (iframe).
     * styles is an object whose key is the camelCased version of the style name, and whose
     * value is the style’s value, usually a string
     * @type {Object}
     */
    styles: {
      width: '1280px',
      height: '100%',
    },

    /**
     * type of the device (e.g. desktop, mobile, or tablet)
     * @type {String}
     */
    type: 'desktop',
  },
  xl: {
    /**
     * name to display in the dropdown
     * @type {String}
     */
    name: 'xl',

    /**
     * Inline styles to be applied to the story (iframe).
     * styles is an object whose key is the camelCased version of the style name, and whose
     * value is the style’s value, usually a string
     * @type {Object}
     */
    styles: {
      width: '1536px',
      height: '100%',
    },

    /**
     * type of the device (e.g. desktop, mobile, or tablet)
     * @type {String}
     */
    type: 'desktop',
  },
};
