# jquery-tabs

jQuery plugin that creates the basic interactivity for an ARIA tabs widget

Plugin expects one of the following two markup structures.

Type A: **Without** Progressive Enhancement or Semantic Fallback:

```html
<h2>Delivery Options</h2>
<div class="tabs">
    <div>
        <div><span>USPS</span></div>
        <div><span>UPS</span></div>
        <div><span>FedEx</span></div>
    </div>
    <div>
        <div>
            <h3 class="tabpanel__title">USPS</h3>
            <p>The <a href="http://en.wikipedia.org/wiki/United_States_Postal_Service">United States Postal Service</a> (originally called the U.S. Post Office Department, when it was completely managed by the U.S. government before 1971) also known as the Post Office, U.S. Mail, or Postal Service, often abbreviated as USPS is an independent agency of the United States federal government responsible for providing postal service in the United States. It is one of the few government agencies explicitly authorized by the United States Constitution.</p>
            <p>The USPS traces its roots to 1775 during the Second Continental Congress, where Benjamin Franklin was appointed the first postmaster general. The cabinet-level Post Office Department was created in 1792 from Franklin's operation and transformed into its current form in 1971 under the Postal Reorganization Act.</p>
        </div>
        <div>
            <h3 class="tabpanel__title">UPS</h3>
            <p><a href="http://en.wikipedia.org/wiki/United_Parcel_Service">United Parcel Service</a> of North America, Inc., typically referred to and branded as UPS (stylized as ups), is one of the largest shipment and logistics companies in the world. The American global package delivery company is headquartered in Sandy Springs, Georgia, which is part of the Greater Atlanta metropolitan area. UPS delivers more than 15 million packages a day to more than 6.1 million customers in more than 220 countries and territories around the world.[4][5][6]. UPS is known for its brown delivery trucks and uniforms, hence the company nickname "Brown". UPS also operates its own airline and air cargo delivery service (IATA: 5X, ICAO: UPS, Call sign: UPS) based in Louisville, Kentucky.</p>
            </div>
        <div>
            <h3 class="tabpanel__title">FedEx</h3>
            <p><a href="http://en.wikipedia.org/wiki/FedEx_Ground">FedEx Ground</a> is a shipping company that is a subsidiary of the FedEx Corporation. It is headquartered in Moon Township, Pennsylvania, a suburb of Pittsburgh. Originally conceived as a lower cost competitor to UPS, Roadway Package System (RPS) was created to take advantage of new barcode, material handling and computer technologies.After beginning service on March 11, 1985, the company grew, expanding service from its initial coverage of the Mid-Atlantic states, so much so that it eventually became the largest subsidiary of its parent company, Akron-based Roadway Services. By 1996, RPS had achieved 100% coverage of the United States and Canada. In addition, Roadway Services had been reformed as a new holding company called Caliber System, Inc.</p>
        </div>
    </div>
</div>
```

Type B: **With** Progressive Enhancement &amp; Semantic Fallback:

```html
<h2>Delivery Options</h2>
<div class="tabs">
    <ul>
        <li><a href="#usps">USPS</a></li>
        <li><a href="#ups">UPS</a></li>
        <li><a href="#fedex">FedEx</a></li>
    </ul>
    <div>
        <div id="usps" tabindex="-1">
            <h3 class="tabpanel__title">USPS</h3>
            <p>The <a href="http://en.wikipedia.org/wiki/United_States_Postal_Service">United States Postal Service</a> (originally called the U.S. Post Office Department, when it was completely managed by the U.S. government before 1971) also known as the Post Office, U.S. Mail, or Postal Service, often abbreviated as USPS is an independent agency of the United States federal government responsible for providing postal service in the United States. It is one of the few government agencies explicitly authorized by the United States Constitution.</p>
            <p>The USPS traces its roots to 1775 during the Second Continental Congress, where Benjamin Franklin was appointed the first postmaster general. The cabinet-level Post Office Department was created in 1792 from Franklin's operation and transformed into its current form in 1971 under the Postal Reorganization Act.</p>
        </div>
        <div id="ups" tabindex="-1">
            <h3 class="tabpanel__title">UPS</h3>
            <p><a href="http://en.wikipedia.org/wiki/United_Parcel_Service">United Parcel Service</a> of North America, Inc., typically referred to and branded as UPS (stylized as ups), is one of the largest shipment and logistics companies in the world. The American global package delivery company is headquartered in Sandy Springs, Georgia, which is part of the Greater Atlanta metropolitan area. UPS delivers more than 15 million packages a day to more than 6.1 million customers in more than 220 countries and territories around the world.[4][5][6]. UPS is known for its brown delivery trucks and uniforms, hence the company nickname "Brown". UPS also operates its own airline and air cargo delivery service (IATA: 5X, ICAO: UPS, Call sign: UPS) based in Louisville, Kentucky.</p>
            </div>
        <div id="fedex" tabindex="-1">
            <h3 class="tabpanel__title">FedEx</h3>
            <p><a href="http://en.wikipedia.org/wiki/FedEx_Ground">FedEx Ground</a> is a shipping company that is a subsidiary of the FedEx Corporation. It is headquartered in Moon Township, Pennsylvania, a suburb of Pittsburgh. Originally conceived as a lower cost competitor to UPS, Roadway Package System (RPS) was created to take advantage of new barcode, material handling and computer technologies.After beginning service on March 11, 1985, the company grew, expanding service from its initial coverage of the Mid-Atlantic states, so much so that it eventually became the largest subsidiary of its parent company, Akron-based Roadway Services. By 1996, RPS had achieved 100% coverage of the United States and Canada. In addition, Roadway Services had been reformed as a new holding company called Caliber System, Inc.</p>
        </div>
    </div>
</div>
```

The choice is yours! Then just execute the plugin:

```js
$('.tabs').tabs();
```

All necessary ARIA attributes will be added, for example Type B:

```html
<div class="tabs tabs--js">
    <div role="tablist">
        <div aria-controls="panel1" role="tab" tabindex="0" aria-selected="true" id="tab1">
            <span>Tab 1</span>
        </div>
        <div aria-controls="panel2" role="tab" tabindex="-1" aria-selected="false" id="tab2">
            <span>Tab 2</span>
        </div>
        <div aria-controls="panel3" role="tab" tabindex="-1" aria-selected="false" id="tab3">
            <span>Tab 3</span>
        </div>
    </div>
    <div>
        <div id="panel1" role="tabpanel" aria-hidden="false" aria-labelledby="tab1">
            <!-- panel1 heading & content -->
        </div>
        <div id="panel2" role="tabpanel" aria-hidden="true" aria-labelledby="tab2">
            <!-- panel2 heading & content -->
        </div>
        <div id="panel3" role="tabpanel" aria-hidden="true" aria-labelledby="tab3">
            <!-- panel3 heading & content -->
        </div>
    </div>
</div>
```

Or Type B:

```html
<div class="tabs tabs--js">
    <ul role="tablist">
        <li aria-controls="panel1" role="tab" tabindex="0" aria-selected="true" id="tab1">
            <a role="presentation">Tab 1</a>
        </li>
        <li aria-controls="panel2" role="tab" tabindex="-1" aria-selected="false" id="tab2">
            <a role="presentation">Tab 2</a>
        </li>
        <li aria-controls="panel3" role="tab" tabindex="-1" aria-selected="false" id="tab3">
            <a role="presentation">Tab 3</a>
        </li>
    </ul>
    <div>
        <div id="panel1" role="tabpanel" aria-hidden="false" aria-labelledby="tab1">
            <!-- panel3 heading & content -->
        </div>
        <div id="panel2" role="tabpanel" aria-hidden="true" aria-labelledby="tab2">
            <!-- panel3 heading & content -->
        </div>
        <div id="panel3" role="tabpanel" aria-hidden="true" aria-labelledby="tab3">
            <!-- panel3 heading & content -->
        </div>
    </div>
</div>
```

The tabs are navigable with keyboard & mouse.

You can style the tabs however you wish. Have fun!
