/**
* @file jQuery plugin that creates the basic interactivity for an ARIA tabs widget
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @version 0.5.3
* @requires jquery
* @requires jquery-next-id
* @requires jquery-roving-tabindex
*/
(function($) {
    /**
    * jQuery plugin that creates the basic interactivity for an ARIA tabs widget
    *
    * @method "jQuery.fn.tabs"
    * @return {jQuery} chainable jQuery class
    */
    $.fn.tabs = function tabs(options) {
        options = $.extend({}, options);
        return this.each(function onEach() {
            var $tabsWidget = $(this);
            var $tablist = $tabsWidget.find('.tabs__items');
            var $tabs = $tablist.find('.tabs__item');
            var $links = $tablist.find('a');
            var $panelcontainer = $tabsWidget.find('.tabs__content');
            var $panels = $panelcontainer.find('.tabs__panel');

            // set a unique widget id
            $tabsWidget.nextId('tabs');

            // add required ARIA roles, states and properties
            // first tabpanel is selected by default
            $tablist
                .attr('role', 'tablist');

            var ariaSelectedList = [];
            var ariaSelectedIndex;

            $tabs.each(function onEachTab(idx, el) {
                var $tab = $(el);
                var ariaSelected = $tab.attr('aria-selected');
                if (ariaSelected !== undefined && ariaSelected !== 'false' && ariaSelected === 'true') {
                    ariaSelectedList.push($tab.attr('aria-selected'));
                    ariaSelectedIndex = idx;
                    $panels.eq(idx)
                        .attr('role', 'tabpanel')
                        .prop('hidden', false);
                } else if (ariaSelected === undefined || ariaSelected === 'false') {
                    $tab.attr('aria-selected', 'false');
                    ariaSelectedList.push($tab.attr('aria-selected'));
                    $panels.eq(idx)
                        .attr('role', 'tabpanel')
                        .prop('hidden', true);
                }
            });

            $tabs.attr('role', 'tab');
            $panels.attr('role', 'tabpanel');

            if (ariaSelectedList.indexOf('true') === -1) {
                $tabs
                    .attr('aria-selected', 'false')
                    .first()
                    .attr('aria-selected', 'true');
                ariaSelectedIndex = 0;
                $panels
                    .prop('hidden', true)
                    .first()
                    .prop('hidden', false);
            }

            // remove hyperlink behaviour from links
            $links
                .attr('role', 'presentation')
                .removeAttr('href');

            if (options.livePanels === true) {
                $panelcontainer.attr('aria-live', 'polite');
            }

            // all panels are labelled and controlled by their respective tab
            $tabs.each(function onEachTab(idx, el) {
                var $tab = $(el);
                var tabId = $tabsWidget.attr('id') + '-tab-' + idx;
                var panelId = $tabsWidget.attr('id') + '-panel-' + idx;

                $tab
                    .attr('id', tabId)
                    .attr('aria-controls', panelId);

                $panels.eq(idx)
                    .attr('id', panelId)
                    .attr('aria-labelledby', tabId);
            });

            // Create a roving tab index on tabs
            $tablist.rovingTabindex('[role=tab]', {
                autoWrap: true,
                disableHomeAndEndKeys: true,
                activeIndex: ariaSelectedIndex
            });

            $tablist.on('rovingTabindexChange', '[role=tab]', function(e, data) {
                var $selectedTab = $(this);
                var $activeTab = $tablist.find('[aria-selected=true]');
                var $activePanel = $panelcontainer.find('[aria-labelledby={0}]'.replace('{0}', $activeTab.attr('id')));
                var $selectedPanel = $panelcontainer.find('[aria-labelledby={0}]'.replace('{0}', $selectedTab.attr('id')));

                if ($selectedTab[0] !== $activeTab[0]) {
                    $activePanel.prop('hidden', true);
                    $selectedPanel.prop('hidden', false);
                    $selectedTab.attr('aria-selected', 'true');

                    setTimeout(function() {
                        $activeTab.attr('aria-selected', 'false');
                        $selectedTab.trigger('tabsSelect', data);
                    }, 0);
                }
            });

            // mark widget as initialised
            $tabsWidget.addClass('tabs--js');
        });
    };
}(jQuery));

/**
* The jQuery plugin namespace.
* @external "jQuery.fn"
* @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
*/

/**
* tabsSelect event
*
* @event tabsSelect
* @type {object}
* @property {object} event - event object
*/
