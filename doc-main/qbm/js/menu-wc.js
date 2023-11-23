'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="custom-logo" data-src="images/oneidentity-logo.png">
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-41e2b8c24c014f3bcc40bca9f93047eb35b64a41fb138f53f469ac519081751b06cc5f1e63e23dfeaeaeb541f975e3c46fbd134f6b6a86f0aaaa023e044c547c"' : 'data-bs-target="#xs-components-links-module-AdminModule-41e2b8c24c014f3bcc40bca9f93047eb35b64a41fb138f53f469ac519081751b06cc5f1e63e23dfeaeaeb541f975e3c46fbd134f6b6a86f0aaaa023e044c547c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-41e2b8c24c014f3bcc40bca9f93047eb35b64a41fb138f53f469ac519081751b06cc5f1e63e23dfeaeaeb541f975e3c46fbd134f6b6a86f0aaaa023e044c547c"' :
                                            'id="xs-components-links-module-AdminModule-41e2b8c24c014f3bcc40bca9f93047eb35b64a41fb138f53f469ac519081751b06cc5f1e63e23dfeaeaeb541f975e3c46fbd134f6b6a86f0aaaa023e044c547c"' }>
                                            <li class="link">
                                                <a href="components/AddConfigSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddConfigSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApplyConfigSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplyConfigSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CacheComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CacheComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigKeyPathComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigKeyPathComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConvertConfigSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConvertConfigSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteConfigSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteConfigSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListSettingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogDetailsSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogDetailsSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PackagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PackagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PluginsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PluginsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectValueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectValueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SwaggerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SwaggerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-41e2b8c24c014f3bcc40bca9f93047eb35b64a41fb138f53f469ac519081751b06cc5f1e63e23dfeaeaeb541f975e3c46fbd134f6b6a86f0aaaa023e044c547c"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-41e2b8c24c014f3bcc40bca9f93047eb35b64a41fb138f53f469ac519081751b06cc5f1e63e23dfeaeaeb541f975e3c46fbd134f6b6a86f0aaaa023e044c547c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-41e2b8c24c014f3bcc40bca9f93047eb35b64a41fb138f53f469ac519081751b06cc5f1e63e23dfeaeaeb541f975e3c46fbd134f6b6a86f0aaaa023e044c547c"' :
                                        'id="xs-injectables-links-module-AdminModule-41e2b8c24c014f3bcc40bca9f93047eb35b64a41fb138f53f469ac519081751b06cc5f1e63e23dfeaeaeb541f975e3c46fbd134f6b6a86f0aaaa023e044c547c"' }>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StatusService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatusService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthenticationModule-de8a2931c5741d8d14f375a981d52ce6fab20c8f77948ae91b36bec39548505f8524486be0837fa1806329b8e501ca24e143c92bacfb020ce9a9877caa63021b"' : 'data-bs-target="#xs-injectables-links-module-AuthenticationModule-de8a2931c5741d8d14f375a981d52ce6fab20c8f77948ae91b36bec39548505f8524486be0837fa1806329b8e501ca24e143c92bacfb020ce9a9877caa63021b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-de8a2931c5741d8d14f375a981d52ce6fab20c8f77948ae91b36bec39548505f8524486be0837fa1806329b8e501ca24e143c92bacfb020ce9a9877caa63021b"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-de8a2931c5741d8d14f375a981d52ce6fab20c8f77948ae91b36bec39548505f8524486be0837fa1806329b8e501ca24e143c92bacfb020ce9a9877caa63021b"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OAuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OAuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AutoCompleteModule.html" data-type="entity-link" >AutoCompleteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AutoCompleteModule-2dcf4531e5eae896a7f75e24c9c78029b8f9069dee0b0063519d5de9ff9306682514759bb4d11bf9e17748607e1592325ef369ade4bfddf4e44cede05f3f4b9b"' : 'data-bs-target="#xs-components-links-module-AutoCompleteModule-2dcf4531e5eae896a7f75e24c9c78029b8f9069dee0b0063519d5de9ff9306682514759bb4d11bf9e17748607e1592325ef369ade4bfddf4e44cede05f3f4b9b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AutoCompleteModule-2dcf4531e5eae896a7f75e24c9c78029b8f9069dee0b0063519d5de9ff9306682514759bb4d11bf9e17748607e1592325ef369ade4bfddf4e44cede05f3f4b9b"' :
                                            'id="xs-components-links-module-AutoCompleteModule-2dcf4531e5eae896a7f75e24c9c78029b8f9069dee0b0063519d5de9ff9306682514759bb4d11bf9e17748607e1592325ef369ade4bfddf4e44cede05f3f4b9b"' }>
                                            <li class="link">
                                                <a href="components/AutoCompleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutoCompleteComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BulkPropertyEditorModule.html" data-type="entity-link" >BulkPropertyEditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BulkPropertyEditorModule-f561242c480254311a3fa767bd6340fbe97b791b4fa1b4e318e2ddbe8fed53eb5be7d5f880ebd9f21d505ce5db7704bb008c8a30a8cf14b8eebc10fb926e8c0d"' : 'data-bs-target="#xs-components-links-module-BulkPropertyEditorModule-f561242c480254311a3fa767bd6340fbe97b791b4fa1b4e318e2ddbe8fed53eb5be7d5f880ebd9f21d505ce5db7704bb008c8a30a8cf14b8eebc10fb926e8c0d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BulkPropertyEditorModule-f561242c480254311a3fa767bd6340fbe97b791b4fa1b4e318e2ddbe8fed53eb5be7d5f880ebd9f21d505ce5db7704bb008c8a30a8cf14b8eebc10fb926e8c0d"' :
                                            'id="xs-components-links-module-BulkPropertyEditorModule-f561242c480254311a3fa767bd6340fbe97b791b4fa1b4e318e2ddbe8fed53eb5be7d5f880ebd9f21d505ce5db7704bb008c8a30a8cf14b8eebc10fb926e8c0d"' }>
                                            <li class="link">
                                                <a href="components/BulkItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BulkItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BulkPropertyEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BulkPropertyEditorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BusyIndicatorModule.html" data-type="entity-link" >BusyIndicatorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BusyIndicatorModule-c1fcf4d1e80f92ed2d008eb5a557eaeb1e9626d5117899e99418387704015fc51f03f257eb0cbbc267ebb8ad6893958dfa62eb4d8575ca1af0a4f869249ebfbf"' : 'data-bs-target="#xs-components-links-module-BusyIndicatorModule-c1fcf4d1e80f92ed2d008eb5a557eaeb1e9626d5117899e99418387704015fc51f03f257eb0cbbc267ebb8ad6893958dfa62eb4d8575ca1af0a4f869249ebfbf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BusyIndicatorModule-c1fcf4d1e80f92ed2d008eb5a557eaeb1e9626d5117899e99418387704015fc51f03f257eb0cbbc267ebb8ad6893958dfa62eb4d8575ca1af0a4f869249ebfbf"' :
                                            'id="xs-components-links-module-BusyIndicatorModule-c1fcf4d1e80f92ed2d008eb5a557eaeb1e9626d5117899e99418387704015fc51f03f257eb0cbbc267ebb8ad6893958dfa62eb4d8575ca1af0a4f869249ebfbf"' }>
                                            <li class="link">
                                                <a href="components/BusyIndicatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusyIndicatorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CaptchaModule.html" data-type="entity-link" >CaptchaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CaptchaModule-2252120ad9e188aa7960d4f5187fa3b5e1e88bd4c42197cd81aa7d52a22ee55262d61d1b33b0e9350b2bfb62e0cf2de70acf6fcc0ccaa7be1990edb65c24d58c"' : 'data-bs-target="#xs-components-links-module-CaptchaModule-2252120ad9e188aa7960d4f5187fa3b5e1e88bd4c42197cd81aa7d52a22ee55262d61d1b33b0e9350b2bfb62e0cf2de70acf6fcc0ccaa7be1990edb65c24d58c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CaptchaModule-2252120ad9e188aa7960d4f5187fa3b5e1e88bd4c42197cd81aa7d52a22ee55262d61d1b33b0e9350b2bfb62e0cf2de70acf6fcc0ccaa7be1990edb65c24d58c"' :
                                            'id="xs-components-links-module-CaptchaModule-2252120ad9e188aa7960d4f5187fa3b5e1e88bd4c42197cd81aa7d52a22ee55262d61d1b33b0e9350b2bfb62e0cf2de70acf6fcc0ccaa7be1990edb65c24d58c"' }>
                                            <li class="link">
                                                <a href="components/CaptchaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaptchaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CdrModule.html" data-type="entity-link" >CdrModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CdrModule-59293aca8c7430d26bdd099047e7854cf4d8a67b65d7a1fb91bfad1b0dc1212e6028aced32c482ffe211a0d21db25c28ffef475796842f98dc23b514d1f6cd8b"' : 'data-bs-target="#xs-components-links-module-CdrModule-59293aca8c7430d26bdd099047e7854cf4d8a67b65d7a1fb91bfad1b0dc1212e6028aced32c482ffe211a0d21db25c28ffef475796842f98dc23b514d1f6cd8b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CdrModule-59293aca8c7430d26bdd099047e7854cf4d8a67b65d7a1fb91bfad1b0dc1212e6028aced32c482ffe211a0d21db25c28ffef475796842f98dc23b514d1f6cd8b"' :
                                            'id="xs-components-links-module-CdrModule-59293aca8c7430d26bdd099047e7854cf4d8a67b65d7a1fb91bfad1b0dc1212e6028aced32c482ffe211a0d21db25c28ffef475796842f98dc23b514d1f6cd8b"' }>
                                            <li class="link">
                                                <a href="components/CdrEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CdrEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CdrSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CdrSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DateRangeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateRangeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditBinaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditBinaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditBooleanComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditBooleanComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditDateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditDateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditDefaultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditDefaultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditFkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditFkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditFkMultiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditFkMultiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditLimitedValueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditLimitedValueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditMultiLimitedValueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditMultiLimitedValueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditMultiValueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditMultiValueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditMultilineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditMultilineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditNumberComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditNumberComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditRiskIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditRiskIndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditUrlComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditUrlComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntityColumnEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityColumnEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PropertyViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertyViewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewPropertyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewPropertyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewPropertyDefaultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewPropertyDefaultComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CdrModule-59293aca8c7430d26bdd099047e7854cf4d8a67b65d7a1fb91bfad1b0dc1212e6028aced32c482ffe211a0d21db25c28ffef475796842f98dc23b514d1f6cd8b"' : 'data-bs-target="#xs-injectables-links-module-CdrModule-59293aca8c7430d26bdd099047e7854cf4d8a67b65d7a1fb91bfad1b0dc1212e6028aced32c482ffe211a0d21db25c28ffef475796842f98dc23b514d1f6cd8b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CdrModule-59293aca8c7430d26bdd099047e7854cf4d8a67b65d7a1fb91bfad1b0dc1212e6028aced32c482ffe211a0d21db25c28ffef475796842f98dc23b514d1f6cd8b"' :
                                        'id="xs-injectables-links-module-CdrModule-59293aca8c7430d26bdd099047e7854cf4d8a67b65d7a1fb91bfad1b0dc1212e6028aced32c482ffe211a0d21db25c28ffef475796842f98dc23b514d1f6cd8b"' }>
                                        <li class="link">
                                            <a href="injectables/CdrRegistryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CdrRegistryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClassloggerModule.html" data-type="entity-link" >ClassloggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClassloggerModule-45acaff24f756634c43c19cff9a1f1f957cfc965f0f39dcb72d154c67d7c19664c903399325a9c63f747a5cf007c970c8575e9c64bc7fe14259d61cdd583c9c4"' : 'data-bs-target="#xs-injectables-links-module-ClassloggerModule-45acaff24f756634c43c19cff9a1f1f957cfc965f0f39dcb72d154c67d7c19664c903399325a9c63f747a5cf007c970c8575e9c64bc7fe14259d61cdd583c9c4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClassloggerModule-45acaff24f756634c43c19cff9a1f1f957cfc965f0f39dcb72d154c67d7c19664c903399325a9c63f747a5cf007c970c8575e9c64bc7fe14259d61cdd583c9c4"' :
                                        'id="xs-injectables-links-module-ClassloggerModule-45acaff24f756634c43c19cff9a1f1f957cfc965f0f39dcb72d154c67d7c19664c903399325a9c63f747a5cf007c970c8575e9c64bc7fe14259d61cdd583c9c4"' }>
                                        <li class="link">
                                            <a href="injectables/ClassloggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassloggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfirmationModule.html" data-type="entity-link" >ConfirmationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ConfirmationModule-b5c062bfbe4dda718c409af526df3e03a872f10d91c52cd04cd46e6d7a0508f40a3a56463d34ce8e2312b1ead8028c600438a64cf6f6714b675d998f16b9445f"' : 'data-bs-target="#xs-injectables-links-module-ConfirmationModule-b5c062bfbe4dda718c409af526df3e03a872f10d91c52cd04cd46e6d7a0508f40a3a56463d34ce8e2312b1ead8028c600438a64cf6f6714b675d998f16b9445f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConfirmationModule-b5c062bfbe4dda718c409af526df3e03a872f10d91c52cd04cd46e6d7a0508f40a3a56463d34ce8e2312b1ead8028c600438a64cf6f6714b675d998f16b9445f"' :
                                        'id="xs-injectables-links-module-ConfirmationModule-b5c062bfbe4dda718c409af526df3e03a872f10d91c52cd04cd46e6d7a0508f40a3a56463d34ce8e2312b1ead8028c600438a64cf6f6714b675d998f16b9445f"' }>
                                        <li class="link">
                                            <a href="injectables/ConfirmationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomThemeModule.html" data-type="entity-link" >CustomThemeModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CustomThemeModule-455f2e1a23291d888eeb01b804bdf079581587553c95e1195f0349b2e68df03121efda456593c2306a05a120db9bf244201667d9dd9eb1bfcdcc88af62dc2140"' : 'data-bs-target="#xs-injectables-links-module-CustomThemeModule-455f2e1a23291d888eeb01b804bdf079581587553c95e1195f0349b2e68df03121efda456593c2306a05a120db9bf244201667d9dd9eb1bfcdcc88af62dc2140"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CustomThemeModule-455f2e1a23291d888eeb01b804bdf079581587553c95e1195f0349b2e68df03121efda456593c2306a05a120db9bf244201667d9dd9eb1bfcdcc88af62dc2140"' :
                                        'id="xs-injectables-links-module-CustomThemeModule-455f2e1a23291d888eeb01b804bdf079581587553c95e1195f0349b2e68df03121efda456593c2306a05a120db9bf244201667d9dd9eb1bfcdcc88af62dc2140"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataExportModule.html" data-type="entity-link" >DataExportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DataExportModule-74d7b224f440026adf7ec829cfa7ba0cfe7bd2d6c351d39ff9ba578545eb4992d357e751227b501449f857c476e30d7f84c3d32743634a53b4ad83b7b44af599"' : 'data-bs-target="#xs-components-links-module-DataExportModule-74d7b224f440026adf7ec829cfa7ba0cfe7bd2d6c351d39ff9ba578545eb4992d357e751227b501449f857c476e30d7f84c3d32743634a53b4ad83b7b44af599"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataExportModule-74d7b224f440026adf7ec829cfa7ba0cfe7bd2d6c351d39ff9ba578545eb4992d357e751227b501449f857c476e30d7f84c3d32743634a53b4ad83b7b44af599"' :
                                            'id="xs-components-links-module-DataExportModule-74d7b224f440026adf7ec829cfa7ba0cfe7bd2d6c351d39ff9ba578545eb4992d357e751227b501449f857c476e30d7f84c3d32743634a53b4ad83b7b44af599"' }>
                                            <li class="link">
                                                <a href="components/DataExportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataExportComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataSourceToolbarModule.html" data-type="entity-link" >DataSourceToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DataSourceToolbarModule-a48abb84b49169d8b9baf3502a883a7472adb9151e0e15458f84b9003a64d5021730558946ad495d4c4648100f80f34615986db38275f726910a1ebea95af4bc"' : 'data-bs-target="#xs-components-links-module-DataSourceToolbarModule-a48abb84b49169d8b9baf3502a883a7472adb9151e0e15458f84b9003a64d5021730558946ad495d4c4648100f80f34615986db38275f726910a1ebea95af4bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataSourceToolbarModule-a48abb84b49169d8b9baf3502a883a7472adb9151e0e15458f84b9003a64d5021730558946ad495d4c4648100f80f34615986db38275f726910a1ebea95af4bc"' :
                                            'id="xs-components-links-module-DataSourceToolbarModule-a48abb84b49169d8b9baf3502a883a7472adb9151e0e15458f84b9003a64d5021730558946ad495d4c4648100f80f34615986db38275f726910a1ebea95af4bc"' }>
                                            <li class="link">
                                                <a href="components/AdditionalInfosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdditionalInfosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataSourcePaginatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataSourcePaginatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataSourceToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataSourceToolbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataSourceToolbarCustomComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataSourceToolbarCustomComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterTreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaveConfigDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaveConfigDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DataSourceToolbarModule-a48abb84b49169d8b9baf3502a883a7472adb9151e0e15458f84b9003a64d5021730558946ad495d4c4648100f80f34615986db38275f726910a1ebea95af4bc"' : 'data-bs-target="#xs-injectables-links-module-DataSourceToolbarModule-a48abb84b49169d8b9baf3502a883a7472adb9151e0e15458f84b9003a64d5021730558946ad495d4c4648100f80f34615986db38275f726910a1ebea95af4bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DataSourceToolbarModule-a48abb84b49169d8b9baf3502a883a7472adb9151e0e15458f84b9003a64d5021730558946ad495d4c4648100f80f34615986db38275f726910a1ebea95af4bc"' :
                                        'id="xs-injectables-links-module-DataSourceToolbarModule-a48abb84b49169d8b9baf3502a883a7472adb9151e0e15458f84b9003a64d5021730558946ad495d4c4648100f80f34615986db38275f726910a1ebea95af4bc"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataTableModule.html" data-type="entity-link" >DataTableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DataTableModule-a2912f8f7be9fa0b2187bcbd5b1881bceec9fe82af5bacb526027c092e01fb28e208ea24ee2531f0c42d59cade94b2c76214df32d7f0ba507da3fa2905908ec5"' : 'data-bs-target="#xs-components-links-module-DataTableModule-a2912f8f7be9fa0b2187bcbd5b1881bceec9fe82af5bacb526027c092e01fb28e208ea24ee2531f0c42d59cade94b2c76214df32d7f0ba507da3fa2905908ec5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataTableModule-a2912f8f7be9fa0b2187bcbd5b1881bceec9fe82af5bacb526027c092e01fb28e208ea24ee2531f0c42d59cade94b2c76214df32d7f0ba507da3fa2905908ec5"' :
                                            'id="xs-components-links-module-DataTableModule-a2912f8f7be9fa0b2187bcbd5b1881bceec9fe82af5bacb526027c092e01fb28e208ea24ee2531f0c42d59cade94b2c76214df32d7f0ba507da3fa2905908ec5"' }>
                                            <li class="link">
                                                <a href="components/DataTableCellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTableCellComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTableColumnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTableColumnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTableDisplayCellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTableDisplayCellComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTableGenericColumnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTableGenericColumnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupPaginatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupPaginatorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-DataTableModule-a2912f8f7be9fa0b2187bcbd5b1881bceec9fe82af5bacb526027c092e01fb28e208ea24ee2531f0c42d59cade94b2c76214df32d7f0ba507da3fa2905908ec5"' : 'data-bs-target="#xs-directives-links-module-DataTableModule-a2912f8f7be9fa0b2187bcbd5b1881bceec9fe82af5bacb526027c092e01fb28e208ea24ee2531f0c42d59cade94b2c76214df32d7f0ba507da3fa2905908ec5"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DataTableModule-a2912f8f7be9fa0b2187bcbd5b1881bceec9fe82af5bacb526027c092e01fb28e208ea24ee2531f0c42d59cade94b2c76214df32d7f0ba507da3fa2905908ec5"' :
                                        'id="xs-directives-links-module-DataTableModule-a2912f8f7be9fa0b2187bcbd5b1881bceec9fe82af5bacb526027c092e01fb28e208ea24ee2531f0c42d59cade94b2c76214df32d7f0ba507da3fa2905908ec5"' }>
                                        <li class="link">
                                            <a href="directives/TableAccessiblilityDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableAccessiblilityDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-DataTableModule-a2912f8f7be9fa0b2187bcbd5b1881bceec9fe82af5bacb526027c092e01fb28e208ea24ee2531f0c42d59cade94b2c76214df32d7f0ba507da3fa2905908ec5"' : 'data-bs-target="#xs-pipes-links-module-DataTableModule-a2912f8f7be9fa0b2187bcbd5b1881bceec9fe82af5bacb526027c092e01fb28e208ea24ee2531f0c42d59cade94b2c76214df32d7f0ba507da3fa2905908ec5"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DataTableModule-a2912f8f7be9fa0b2187bcbd5b1881bceec9fe82af5bacb526027c092e01fb28e208ea24ee2531f0c42d59cade94b2c76214df32d7f0ba507da3fa2905908ec5"' :
                                            'id="xs-pipes-links-module-DataTableModule-a2912f8f7be9fa0b2187bcbd5b1881bceec9fe82af5bacb526027c092e01fb28e208ea24ee2531f0c42d59cade94b2c76214df32d7f0ba507da3fa2905908ec5"' }>
                                            <li class="link">
                                                <a href="pipes/ExcludedColumnsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExcludedColumnsPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataTilesModule.html" data-type="entity-link" >DataTilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DataTilesModule-66bbccb5292362b28a94fb783435af6326466b247954cfb3eff9d44c6f3929152e222f487ba2a7ad27093dfb83d65fde4264e4bcc1a32c998fc83d640be6f6e0"' : 'data-bs-target="#xs-components-links-module-DataTilesModule-66bbccb5292362b28a94fb783435af6326466b247954cfb3eff9d44c6f3929152e222f487ba2a7ad27093dfb83d65fde4264e4bcc1a32c998fc83d640be6f6e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataTilesModule-66bbccb5292362b28a94fb783435af6326466b247954cfb3eff9d44c6f3929152e222f487ba2a7ad27093dfb83d65fde4264e4bcc1a32c998fc83d640be6f6e0"' :
                                            'id="xs-components-links-module-DataTilesModule-66bbccb5292362b28a94fb783435af6326466b247954cfb3eff9d44c6f3929152e222f487ba2a7ad27093dfb83d65fde4264e4bcc1a32c998fc83d640be6f6e0"' }>
                                            <li class="link">
                                                <a href="components/DataTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTilesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTilesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataTreeModule.html" data-type="entity-link" >DataTreeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DataTreeModule-f34d60d3a04febefe5f44d467e591cb768443523e9655d6d6b1e734bf346f61c88a5636b8289d1a41cefd028882de746010ca48c7a346c0ee71aad77d28d09d8"' : 'data-bs-target="#xs-components-links-module-DataTreeModule-f34d60d3a04febefe5f44d467e591cb768443523e9655d6d6b1e734bf346f61c88a5636b8289d1a41cefd028882de746010ca48c7a346c0ee71aad77d28d09d8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataTreeModule-f34d60d3a04febefe5f44d467e591cb768443523e9655d6d6b1e734bf346f61c88a5636b8289d1a41cefd028882de746010ca48c7a346c0ee71aad77d28d09d8"' :
                                            'id="xs-components-links-module-DataTreeModule-f34d60d3a04febefe5f44d467e591cb768443523e9655d6d6b1e734bf346f61c88a5636b8289d1a41cefd028882de746010ca48c7a346c0ee71aad77d28d09d8"' }>
                                            <li class="link">
                                                <a href="components/CheckableTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckableTreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTreeSearchResultsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTreeSearchResultsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TreeSelectionListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TreeSelectionListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-DataTreeModule-f34d60d3a04febefe5f44d467e591cb768443523e9655d6d6b1e734bf346f61c88a5636b8289d1a41cefd028882de746010ca48c7a346c0ee71aad77d28d09d8"' : 'data-bs-target="#xs-directives-links-module-DataTreeModule-f34d60d3a04febefe5f44d467e591cb768443523e9655d6d6b1e734bf346f61c88a5636b8289d1a41cefd028882de746010ca48c7a346c0ee71aad77d28d09d8"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DataTreeModule-f34d60d3a04febefe5f44d467e591cb768443523e9655d6d6b1e734bf346f61c88a5636b8289d1a41cefd028882de746010ca48c7a346c0ee71aad77d28d09d8"' :
                                        'id="xs-directives-links-module-DataTreeModule-f34d60d3a04febefe5f44d467e591cb768443523e9655d6d6b1e734bf346f61c88a5636b8289d1a41cefd028882de746010ca48c7a346c0ee71aad77d28d09d8"' }>
                                        <li class="link">
                                            <a href="directives/MatSelectionListMultipleDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatSelectionListMultipleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataTreeWrapperModule.html" data-type="entity-link" >DataTreeWrapperModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DataTreeWrapperModule-dd0900f3637ad268025a31c58f88b09c96befdd60e6797e88a9b2d10c0a5a2e6c9c979b906a4662328089678afe415fede843ca6ec4d317ffec5aac68f97b8fc"' : 'data-bs-target="#xs-components-links-module-DataTreeWrapperModule-dd0900f3637ad268025a31c58f88b09c96befdd60e6797e88a9b2d10c0a5a2e6c9c979b906a4662328089678afe415fede843ca6ec4d317ffec5aac68f97b8fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataTreeWrapperModule-dd0900f3637ad268025a31c58f88b09c96befdd60e6797e88a9b2d10c0a5a2e6c9c979b906a4662328089678afe415fede843ca6ec4d317ffec5aac68f97b8fc"' :
                                            'id="xs-components-links-module-DataTreeWrapperModule-dd0900f3637ad268025a31c58f88b09c96befdd60e6797e88a9b2d10c0a5a2e6c9c979b906a4662328089678afe415fede843ca6ec4d317ffec5aac68f97b8fc"' }>
                                            <li class="link">
                                                <a href="components/DataTreeWrapperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTreeWrapperComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DateModule.html" data-type="entity-link" >DateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DateModule-348e65f0393d53add9b592aae114b07e3d89996da2e94a2ffb7dba4ad5648c6fb124970710917c87343adbcc0d75d5e2be33f1a444bd2fed9a213138e37c4da8"' : 'data-bs-target="#xs-components-links-module-DateModule-348e65f0393d53add9b592aae114b07e3d89996da2e94a2ffb7dba4ad5648c6fb124970710917c87343adbcc0d75d5e2be33f1a444bd2fed9a213138e37c4da8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DateModule-348e65f0393d53add9b592aae114b07e3d89996da2e94a2ffb7dba4ad5648c6fb124970710917c87343adbcc0d75d5e2be33f1a444bd2fed9a213138e37c4da8"' :
                                            'id="xs-components-links-module-DateModule-348e65f0393d53add9b592aae114b07e3d89996da2e94a2ffb7dba4ad5648c6fb124970710917c87343adbcc0d75d5e2be33f1a444bd2fed9a213138e37c4da8"' }>
                                            <li class="link">
                                                <a href="components/CalendarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalendarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimePickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimePickerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-DateModule-348e65f0393d53add9b592aae114b07e3d89996da2e94a2ffb7dba4ad5648c6fb124970710917c87343adbcc0d75d5e2be33f1a444bd2fed9a213138e37c4da8"' : 'data-bs-target="#xs-pipes-links-module-DateModule-348e65f0393d53add9b592aae114b07e3d89996da2e94a2ffb7dba4ad5648c6fb124970710917c87343adbcc0d75d5e2be33f1a444bd2fed9a213138e37c4da8"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DateModule-348e65f0393d53add9b592aae114b07e3d89996da2e94a2ffb7dba4ad5648c6fb124970710917c87343adbcc0d75d5e2be33f1a444bd2fed9a213138e37c4da8"' :
                                            'id="xs-pipes-links-module-DateModule-348e65f0393d53add9b592aae114b07e3d89996da2e94a2ffb7dba4ad5648c6fb124970710917c87343adbcc0d75d5e2be33f1a444bd2fed9a213138e37c4da8"' }>
                                            <li class="link">
                                                <a href="pipes/LocalizedDatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalizedDatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ShortDatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShortDatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DisableControlModule.html" data-type="entity-link" >DisableControlModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-DisableControlModule-42f2b7e928c5697ea6eb97be35cd2090ba2364fc1d66b302e8da24f2fb227b37dfcbc06558f617f5a414aef0873baaa93135fbe6c69d8c07dd2d55e3abbd52d4"' : 'data-bs-target="#xs-directives-links-module-DisableControlModule-42f2b7e928c5697ea6eb97be35cd2090ba2364fc1d66b302e8da24f2fb227b37dfcbc06558f617f5a414aef0873baaa93135fbe6c69d8c07dd2d55e3abbd52d4"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DisableControlModule-42f2b7e928c5697ea6eb97be35cd2090ba2364fc1d66b302e8da24f2fb227b37dfcbc06558f617f5a414aef0873baaa93135fbe6c69d8c07dd2d55e3abbd52d4"' :
                                        'id="xs-directives-links-module-DisableControlModule-42f2b7e928c5697ea6eb97be35cd2090ba2364fc1d66b302e8da24f2fb227b37dfcbc06558f617f5a414aef0873baaa93135fbe6c69d8c07dd2d55e3abbd52d4"' }>
                                        <li class="link">
                                            <a href="directives/DisableControlDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisableControlDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DynamicTabsModule.html" data-type="entity-link" >DynamicTabsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-DynamicTabsModule-5dd93836deadeffe264ab379af7c98442afd325b081e2fdad59c563cc5828428c90463ba5eade173e5efd096a8039db918440917d37c64afebfc21af14724489"' : 'data-bs-target="#xs-directives-links-module-DynamicTabsModule-5dd93836deadeffe264ab379af7c98442afd325b081e2fdad59c563cc5828428c90463ba5eade173e5efd096a8039db918440917d37c64afebfc21af14724489"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DynamicTabsModule-5dd93836deadeffe264ab379af7c98442afd325b081e2fdad59c563cc5828428c90463ba5eade173e5efd096a8039db918440917d37c64afebfc21af14724489"' :
                                        'id="xs-directives-links-module-DynamicTabsModule-5dd93836deadeffe264ab379af7c98442afd325b081e2fdad59c563cc5828428c90463ba5eade173e5efd096a8039db918440917d37c64afebfc21af14724489"' }>
                                        <li class="link">
                                            <a href="directives/DynamicTabDataProviderDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicTabDataProviderDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntityModule.html" data-type="entity-link" >EntityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-EntityModule-5db9b0ce047462613a1b3d9a5119a9304caaef459adb56341511d4f6d3f73fe1f30f0228b9525b50c33358badb250885db65cc21a86000fa37d6f9d7dbf5af21"' : 'data-bs-target="#xs-components-links-module-EntityModule-5db9b0ce047462613a1b3d9a5119a9304caaef459adb56341511d4f6d3f73fe1f30f0228b9525b50c33358badb250885db65cc21a86000fa37d6f9d7dbf5af21"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EntityModule-5db9b0ce047462613a1b3d9a5119a9304caaef459adb56341511d4f6d3f73fe1f30f0228b9525b50c33358badb250885db65cc21a86000fa37d6f9d7dbf5af21"' :
                                            'id="xs-components-links-module-EntityModule-5db9b0ce047462613a1b3d9a5119a9304caaef459adb56341511d4f6d3f73fe1f30f0228b9525b50c33358badb250885db65cc21a86000fa37d6f9d7dbf5af21"' }>
                                            <li class="link">
                                                <a href="components/EntitySelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntitySelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FkTableSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FkTableSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TypedEntityCandidateSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TypedEntityCandidateSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TypedEntitySelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TypedEntitySelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TypedEntitySelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TypedEntitySelectorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EntityModule-5db9b0ce047462613a1b3d9a5119a9304caaef459adb56341511d4f6d3f73fe1f30f0228b9525b50c33358badb250885db65cc21a86000fa37d6f9d7dbf5af21"' : 'data-bs-target="#xs-injectables-links-module-EntityModule-5db9b0ce047462613a1b3d9a5119a9304caaef459adb56341511d4f6d3f73fe1f30f0228b9525b50c33358badb250885db65cc21a86000fa37d6f9d7dbf5af21"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EntityModule-5db9b0ce047462613a1b3d9a5119a9304caaef459adb56341511d4f6d3f73fe1f30f0228b9525b50c33358badb250885db65cc21a86000fa37d6f9d7dbf5af21"' :
                                        'id="xs-injectables-links-module-EntityModule-5db9b0ce047462613a1b3d9a5119a9304caaef459adb56341511d4f6d3f73fe1f30f0228b9525b50c33358badb250885db65cc21a86000fa37d6f9d7dbf5af21"' }>
                                        <li class="link">
                                            <a href="injectables/EntityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExtModule.html" data-type="entity-link" >ExtModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ExtModule-bc6b871cb94c9ecb34529a213412857584cb8d13795395a642b2d6e78600c14572993bc5e377e8d95eba311c04fe71e004449bae644cace220841da0faf4b956"' : 'data-bs-target="#xs-components-links-module-ExtModule-bc6b871cb94c9ecb34529a213412857584cb8d13795395a642b2d6e78600c14572993bc5e377e8d95eba311c04fe71e004449bae644cace220841da0faf4b956"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExtModule-bc6b871cb94c9ecb34529a213412857584cb8d13795395a642b2d6e78600c14572993bc5e377e8d95eba311c04fe71e004449bae644cace220841da0faf4b956"' :
                                            'id="xs-components-links-module-ExtModule-bc6b871cb94c9ecb34529a213412857584cb8d13795395a642b2d6e78600c14572993bc5e377e8d95eba311c04fe71e004449bae644cace220841da0faf4b956"' }>
                                            <li class="link">
                                                <a href="components/ExtComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExtComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-ExtModule-bc6b871cb94c9ecb34529a213412857584cb8d13795395a642b2d6e78600c14572993bc5e377e8d95eba311c04fe71e004449bae644cace220841da0faf4b956"' : 'data-bs-target="#xs-directives-links-module-ExtModule-bc6b871cb94c9ecb34529a213412857584cb8d13795395a642b2d6e78600c14572993bc5e377e8d95eba311c04fe71e004449bae644cace220841da0faf4b956"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ExtModule-bc6b871cb94c9ecb34529a213412857584cb8d13795395a642b2d6e78600c14572993bc5e377e8d95eba311c04fe71e004449bae644cace220841da0faf4b956"' :
                                        'id="xs-directives-links-module-ExtModule-bc6b871cb94c9ecb34529a213412857584cb8d13795395a642b2d6e78600c14572993bc5e377e8d95eba311c04fe71e004449bae644cace220841da0faf4b956"' }>
                                        <li class="link">
                                            <a href="directives/ExtDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExtDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExtModule-bc6b871cb94c9ecb34529a213412857584cb8d13795395a642b2d6e78600c14572993bc5e377e8d95eba311c04fe71e004449bae644cace220841da0faf4b956"' : 'data-bs-target="#xs-injectables-links-module-ExtModule-bc6b871cb94c9ecb34529a213412857584cb8d13795395a642b2d6e78600c14572993bc5e377e8d95eba311c04fe71e004449bae644cace220841da0faf4b956"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExtModule-bc6b871cb94c9ecb34529a213412857584cb8d13795395a642b2d6e78600c14572993bc5e377e8d95eba311c04fe71e004449bae644cace220841da0faf4b956"' :
                                        'id="xs-injectables-links-module-ExtModule-bc6b871cb94c9ecb34529a213412857584cb8d13795395a642b2d6e78600c14572993bc5e377e8d95eba311c04fe71e004449bae644cace220841da0faf4b956"' }>
                                        <li class="link">
                                            <a href="injectables/ExtService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExtService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilterWizardModule.html" data-type="entity-link" >FilterWizardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FilterWizardModule-e2c2e840e385215eb8e0e494439da2cd4da8dd4992e4d353f4d491d8fa33574c25d52a8e39854b160f13fba7e1272f859fb7b72830b1cc25021a79fca2ae4eee"' : 'data-bs-target="#xs-components-links-module-FilterWizardModule-e2c2e840e385215eb8e0e494439da2cd4da8dd4992e4d353f4d491d8fa33574c25d52a8e39854b160f13fba7e1272f859fb7b72830b1cc25021a79fca2ae4eee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FilterWizardModule-e2c2e840e385215eb8e0e494439da2cd4da8dd4992e4d353f4d491d8fa33574c25d52a8e39854b160f13fba7e1272f859fb7b72830b1cc25021a79fca2ae4eee"' :
                                            'id="xs-components-links-module-FilterWizardModule-e2c2e840e385215eb8e0e494439da2cd4da8dd4992e4d353f4d491d8fa33574c25d52a8e39854b160f13fba7e1272f859fb7b72830b1cc25021a79fca2ae4eee"' }>
                                            <li class="link">
                                                <a href="components/FilterWizardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterWizardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PredefinedFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PredefinedFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PredefinedFilterTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PredefinedFilterTreeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FkAdvancedPickerModule.html" data-type="entity-link" >FkAdvancedPickerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FkAdvancedPickerModule-cac1e0f477cbbbfd8596812db16fe382ff0ae58bfae3fba0ebf8b5c8cd7445bcc4500ca8c1a4bf0e9a95a2820c54e2d0b2373d777b14b735d2b365be9d22ddc4"' : 'data-bs-target="#xs-components-links-module-FkAdvancedPickerModule-cac1e0f477cbbbfd8596812db16fe382ff0ae58bfae3fba0ebf8b5c8cd7445bcc4500ca8c1a4bf0e9a95a2820c54e2d0b2373d777b14b735d2b365be9d22ddc4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FkAdvancedPickerModule-cac1e0f477cbbbfd8596812db16fe382ff0ae58bfae3fba0ebf8b5c8cd7445bcc4500ca8c1a4bf0e9a95a2820c54e2d0b2373d777b14b735d2b365be9d22ddc4"' :
                                            'id="xs-components-links-module-FkAdvancedPickerModule-cac1e0f477cbbbfd8596812db16fe382ff0ae58bfae3fba0ebf8b5c8cd7445bcc4500ca8c1a4bf0e9a95a2820c54e2d0b2373d777b14b735d2b365be9d22ddc4"' }>
                                            <li class="link">
                                                <a href="components/FkAdvancedPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FkAdvancedPickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FkCandidatesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FkCandidatesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FkSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FkSelectorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FkHierarchicalDialogModule.html" data-type="entity-link" >FkHierarchicalDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FkHierarchicalDialogModule-c37aea6b811b7bab6508ac850cea2fcbd71994c8f12f15f79be391bc683b0c824e657ad5408a6ed62b3f4538c085dadc451b2228d9a27b8970e36f6915ce3847"' : 'data-bs-target="#xs-components-links-module-FkHierarchicalDialogModule-c37aea6b811b7bab6508ac850cea2fcbd71994c8f12f15f79be391bc683b0c824e657ad5408a6ed62b3f4538c085dadc451b2228d9a27b8970e36f6915ce3847"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FkHierarchicalDialogModule-c37aea6b811b7bab6508ac850cea2fcbd71994c8f12f15f79be391bc683b0c824e657ad5408a6ed62b3f4538c085dadc451b2228d9a27b8970e36f6915ce3847"' :
                                            'id="xs-components-links-module-FkHierarchicalDialogModule-c37aea6b811b7bab6508ac850cea2fcbd71994c8f12f15f79be391bc683b0c824e657ad5408a6ed62b3f4538c085dadc451b2228d9a27b8970e36f6915ce3847"' }>
                                            <li class="link">
                                                <a href="components/FkHierarchicalDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FkHierarchicalDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpContextualModule.html" data-type="entity-link" >HelpContextualModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HelpContextualModule-d52eee47ac8c4c86d09b430e89a0e847c5f403e00246540034b8e85e3d965d9843fa576e40c1ff4069c1ed085ff0c6b65374f42ff83ab829cc1df8a5005e337f"' : 'data-bs-target="#xs-components-links-module-HelpContextualModule-d52eee47ac8c4c86d09b430e89a0e847c5f403e00246540034b8e85e3d965d9843fa576e40c1ff4069c1ed085ff0c6b65374f42ff83ab829cc1df8a5005e337f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpContextualModule-d52eee47ac8c4c86d09b430e89a0e847c5f403e00246540034b8e85e3d965d9843fa576e40c1ff4069c1ed085ff0c6b65374f42ff83ab829cc1df8a5005e337f"' :
                                            'id="xs-components-links-module-HelpContextualModule-d52eee47ac8c4c86d09b430e89a0e847c5f403e00246540034b8e85e3d965d9843fa576e40c1ff4069c1ed085ff0c6b65374f42ff83ab829cc1df8a5005e337f"' }>
                                            <li class="link">
                                                <a href="components/HelpContextualComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpContextualComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpContextualDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpContextualDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HyperViewModule.html" data-type="entity-link" >HyperViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HyperViewModule-b6fdfdfdd595a432bc6525c4b67df8ef128303e6f48615689190e871126af1a1832864652b1d7dda15f1f1c30da00350cb64cbcce688c54fdd2048da0cf2934a"' : 'data-bs-target="#xs-components-links-module-HyperViewModule-b6fdfdfdd595a432bc6525c4b67df8ef128303e6f48615689190e871126af1a1832864652b1d7dda15f1f1c30da00350cb64cbcce688c54fdd2048da0cf2934a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HyperViewModule-b6fdfdfdd595a432bc6525c4b67df8ef128303e6f48615689190e871126af1a1832864652b1d7dda15f1f1c30da00350cb64cbcce688c54fdd2048da0cf2934a"' :
                                            'id="xs-components-links-module-HyperViewModule-b6fdfdfdd595a432bc6525c4b67df8ef128303e6f48615689190e871126af1a1832864652b1d7dda15f1f1c30da00350cb64cbcce688c54fdd2048da0cf2934a"' }>
                                            <li class="link">
                                                <a href="components/HyperviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HyperviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListShapeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListShapeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PropertyShapeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertyShapeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShapeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShapeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SimpleShapeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SimpleShapeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-HyperViewModule-b6fdfdfdd595a432bc6525c4b67df8ef128303e6f48615689190e871126af1a1832864652b1d7dda15f1f1c30da00350cb64cbcce688c54fdd2048da0cf2934a"' : 'data-bs-target="#xs-directives-links-module-HyperViewModule-b6fdfdfdd595a432bc6525c4b67df8ef128303e6f48615689190e871126af1a1832864652b1d7dda15f1f1c30da00350cb64cbcce688c54fdd2048da0cf2934a"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-HyperViewModule-b6fdfdfdd595a432bc6525c4b67df8ef128303e6f48615689190e871126af1a1832864652b1d7dda15f1f1c30da00350cb64cbcce688c54fdd2048da0cf2934a"' :
                                        'id="xs-directives-links-module-HyperViewModule-b6fdfdfdd595a432bc6525c4b67df8ef128303e6f48615689190e871126af1a1832864652b1d7dda15f1f1c30da00350cb64cbcce688c54fdd2048da0cf2934a"' }>
                                        <li class="link">
                                            <a href="directives/ZoomPanDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ZoomPanDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImageModule.html" data-type="entity-link" >ImageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ImageModule-6c2875f6169cdce9d3507f1c2c4246aa929a05a572e400e152e68feebe38712abe9138df1f1a719a60434952546e28d95c2afd04f90f69222fdd52b3dbf48b29"' : 'data-bs-target="#xs-components-links-module-ImageModule-6c2875f6169cdce9d3507f1c2c4246aa929a05a572e400e152e68feebe38712abe9138df1f1a719a60434952546e28d95c2afd04f90f69222fdd52b3dbf48b29"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ImageModule-6c2875f6169cdce9d3507f1c2c4246aa929a05a572e400e152e68feebe38712abe9138df1f1a719a60434952546e28d95c2afd04f90f69222fdd52b3dbf48b29"' :
                                            'id="xs-components-links-module-ImageModule-6c2875f6169cdce9d3507f1c2c4246aa929a05a572e400e152e68feebe38712abe9138df1f1a719a60434952546e28d95c2afd04f90f69222fdd52b3dbf48b29"' }>
                                            <li class="link">
                                                <a href="components/ImageSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InfoModalDialogModule.html" data-type="entity-link" >InfoModalDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-InfoModalDialogModule-05600dcbd777798d495e92d340e8406927e795c64055406e623ce6008ff311cf374066589e144a8d3527f8aabe30064ae7eebae216ca1efc423cf7c9486f5b55"' : 'data-bs-target="#xs-components-links-module-InfoModalDialogModule-05600dcbd777798d495e92d340e8406927e795c64055406e623ce6008ff311cf374066589e144a8d3527f8aabe30064ae7eebae216ca1efc423cf7c9486f5b55"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InfoModalDialogModule-05600dcbd777798d495e92d340e8406927e795c64055406e623ce6008ff311cf374066589e144a8d3527f8aabe30064ae7eebae216ca1efc423cf7c9486f5b55"' :
                                            'id="xs-components-links-module-InfoModalDialogModule-05600dcbd777798d495e92d340e8406927e795c64055406e623ce6008ff311cf374066589e144a8d3527f8aabe30064ae7eebae216ca1efc423cf7c9486f5b55"' }>
                                            <li class="link">
                                                <a href="components/InfoBadgeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoBadgeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobQueueOverviewModule.html" data-type="entity-link" >JobQueueOverviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-JobQueueOverviewModule-63c5659fda9fe51c27eddbc0a2b03040d93d3d4a944e77996c3f7a1eccd8a81a120ab0ecac7535d9f542d7a29fe47627425bbdd70b029ab25925aae0278d6809"' : 'data-bs-target="#xs-components-links-module-JobQueueOverviewModule-63c5659fda9fe51c27eddbc0a2b03040d93d3d4a944e77996c3f7a1eccd8a81a120ab0ecac7535d9f542d7a29fe47627425bbdd70b029ab25925aae0278d6809"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JobQueueOverviewModule-63c5659fda9fe51c27eddbc0a2b03040d93d3d4a944e77996c3f7a1eccd8a81a120ab0ecac7535d9f542d7a29fe47627425bbdd70b029ab25925aae0278d6809"' :
                                            'id="xs-components-links-module-JobQueueOverviewModule-63c5659fda9fe51c27eddbc0a2b03040d93d3d4a944e77996c3f7a1eccd8a81a120ab0ecac7535d9f542d7a29fe47627425bbdd70b029ab25925aae0278d6809"' }>
                                            <li class="link">
                                                <a href="components/JobQueueOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobQueueOverviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobQueueOverviewModule-63c5659fda9fe51c27eddbc0a2b03040d93d3d4a944e77996c3f7a1eccd8a81a120ab0ecac7535d9f542d7a29fe47627425bbdd70b029ab25925aae0278d6809"' : 'data-bs-target="#xs-injectables-links-module-JobQueueOverviewModule-63c5659fda9fe51c27eddbc0a2b03040d93d3d4a944e77996c3f7a1eccd8a81a120ab0ecac7535d9f542d7a29fe47627425bbdd70b029ab25925aae0278d6809"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobQueueOverviewModule-63c5659fda9fe51c27eddbc0a2b03040d93d3d4a944e77996c3f7a1eccd8a81a120ab0ecac7535d9f542d7a29fe47627425bbdd70b029ab25925aae0278d6809"' :
                                        'id="xs-injectables-links-module-JobQueueOverviewModule-63c5659fda9fe51c27eddbc0a2b03040d93d3d4a944e77996c3f7a1eccd8a81a120ab0ecac7535d9f542d7a29fe47627425bbdd70b029ab25925aae0278d6809"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JobQueueOverviewService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobQueueOverviewService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/imx_SessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >imx_SessionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LdsReplaceModule.html" data-type="entity-link" >LdsReplaceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-LdsReplaceModule-bee285aae63e7aa6abf0420c5b05a6c43f337981b24cdf14d2dfd28ef7b56404fe8a31617f50070af9e59e58ed80b23b906619b4794958df8ce49d571d7baf9e"' : 'data-bs-target="#xs-pipes-links-module-LdsReplaceModule-bee285aae63e7aa6abf0420c5b05a6c43f337981b24cdf14d2dfd28ef7b56404fe8a31617f50070af9e59e58ed80b23b906619b4794958df8ce49d571d7baf9e"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-LdsReplaceModule-bee285aae63e7aa6abf0420c5b05a6c43f337981b24cdf14d2dfd28ef7b56404fe8a31617f50070af9e59e58ed80b23b906619b4794958df8ce49d571d7baf9e"' :
                                            'id="xs-pipes-links-module-LdsReplaceModule-bee285aae63e7aa6abf0420c5b05a6c43f337981b24cdf14d2dfd28ef7b56404fe8a31617f50070af9e59e58ed80b23b906619b4794958df8ce49d571d7baf9e"' }>
                                            <li class="link">
                                                <a href="pipes/LdsReplacePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LdsReplacePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MastHeadModule.html" data-type="entity-link" >MastHeadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MastHeadModule-76a5a172610b07eb6d5566c91d3cbfb96d0bc120e1f4c6ee3858a828f0d0e54dea388cf8d802ab662526359695f2e0168c354de204919ee36f8795b8f7490dd6"' : 'data-bs-target="#xs-components-links-module-MastHeadModule-76a5a172610b07eb6d5566c91d3cbfb96d0bc120e1f4c6ee3858a828f0d0e54dea388cf8d802ab662526359695f2e0168c354de204919ee36f8795b8f7490dd6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MastHeadModule-76a5a172610b07eb6d5566c91d3cbfb96d0bc120e1f4c6ee3858a828f0d0e54dea388cf8d802ab662526359695f2e0168c354de204919ee36f8795b8f7490dd6"' :
                                            'id="xs-components-links-module-MastHeadModule-76a5a172610b07eb6d5566c91d3cbfb96d0bc120e1f4c6ee3858a828f0d0e54dea388cf8d802ab662526359695f2e0168c354de204919ee36f8795b8f7490dd6"' }>
                                            <li class="link">
                                                <a href="components/MastHeadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MastHeadComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MastHeadModule-76a5a172610b07eb6d5566c91d3cbfb96d0bc120e1f4c6ee3858a828f0d0e54dea388cf8d802ab662526359695f2e0168c354de204919ee36f8795b8f7490dd6"' : 'data-bs-target="#xs-injectables-links-module-MastHeadModule-76a5a172610b07eb6d5566c91d3cbfb96d0bc120e1f4c6ee3858a828f0d0e54dea388cf8d802ab662526359695f2e0168c354de204919ee36f8795b8f7490dd6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MastHeadModule-76a5a172610b07eb6d5566c91d3cbfb96d0bc120e1f4c6ee3858a828f0d0e54dea388cf8d802ab662526359695f2e0168c354de204919ee36f8795b8f7490dd6"' :
                                        'id="xs-injectables-links-module-MastHeadModule-76a5a172610b07eb6d5566c91d3cbfb96d0bc120e1f4c6ee3858a828f0d0e54dea388cf8d802ab662526359695f2e0168c354de204919ee36f8795b8f7490dd6"' }>
                                        <li class="link">
                                            <a href="injectables/MastHeadService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MastHeadService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link" >MenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MenuModule-d6abf8685ca7377afeb1f545d1e431dcf55fd30e2b0e16e00151d0ebee74510e94ec9c27f6e9c91378666139635f13cc61c7914c764dc57cf67c8183c8b0e388"' : 'data-bs-target="#xs-components-links-module-MenuModule-d6abf8685ca7377afeb1f545d1e431dcf55fd30e2b0e16e00151d0ebee74510e94ec9c27f6e9c91378666139635f13cc61c7914c764dc57cf67c8183c8b0e388"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuModule-d6abf8685ca7377afeb1f545d1e431dcf55fd30e2b0e16e00151d0ebee74510e94ec9c27f6e9c91378666139635f13cc61c7914c764dc57cf67c8183c8b0e388"' :
                                            'id="xs-components-links-module-MenuModule-d6abf8685ca7377afeb1f545d1e431dcf55fd30e2b0e16e00151d0ebee74510e94ec9c27f6e9c91378666139635f13cc61c7914c764dc57cf67c8183c8b0e388"' }>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" class="deprecated-name">MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MenuModule-d6abf8685ca7377afeb1f545d1e431dcf55fd30e2b0e16e00151d0ebee74510e94ec9c27f6e9c91378666139635f13cc61c7914c764dc57cf67c8183c8b0e388"' : 'data-bs-target="#xs-injectables-links-module-MenuModule-d6abf8685ca7377afeb1f545d1e431dcf55fd30e2b0e16e00151d0ebee74510e94ec9c27f6e9c91378666139635f13cc61c7914c764dc57cf67c8183c8b0e388"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MenuModule-d6abf8685ca7377afeb1f545d1e431dcf55fd30e2b0e16e00151d0ebee74510e94ec9c27f6e9c91378666139635f13cc61c7914c764dc57cf67c8183c8b0e388"' :
                                        'id="xs-injectables-links-module-MenuModule-d6abf8685ca7377afeb1f545d1e431dcf55fd30e2b0e16e00151d0ebee74510e94ec9c27f6e9c91378666139635f13cc61c7914c764dc57cf67c8183c8b0e388"' }>
                                        <li class="link">
                                            <a href="injectables/MenuService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MultiSelectFormcontrolModule.html" data-type="entity-link" >MultiSelectFormcontrolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MultiSelectFormcontrolModule-210eb6921cd41a23cfaa3259c4b547b898f214d1bec5425d19657bc3b2bbfddcb90d1f4a3d9c4979a0714017c6d9e5680f243677c3265b50e24cafa5b68b968f"' : 'data-bs-target="#xs-components-links-module-MultiSelectFormcontrolModule-210eb6921cd41a23cfaa3259c4b547b898f214d1bec5425d19657bc3b2bbfddcb90d1f4a3d9c4979a0714017c6d9e5680f243677c3265b50e24cafa5b68b968f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MultiSelectFormcontrolModule-210eb6921cd41a23cfaa3259c4b547b898f214d1bec5425d19657bc3b2bbfddcb90d1f4a3d9c4979a0714017c6d9e5680f243677c3265b50e24cafa5b68b968f"' :
                                            'id="xs-components-links-module-MultiSelectFormcontrolModule-210eb6921cd41a23cfaa3259c4b547b898f214d1bec5425d19657bc3b2bbfddcb90d1f4a3d9c4979a0714017c6d9e5680f243677c3265b50e24cafa5b68b968f"' }>
                                            <li class="link">
                                                <a href="components/MultiSelectFormcontrolComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultiSelectFormcontrolComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MultiValueModule.html" data-type="entity-link" >MultiValueModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MultiValueModule-1568d90b6149f6b85cc4465d250433b3400fccf3bcb396e0b2a178cab3ade08a4b636ee764e7489ca47951e5a3a864dec03d43758cb95536acad737bdc46e640"' : 'data-bs-target="#xs-injectables-links-module-MultiValueModule-1568d90b6149f6b85cc4465d250433b3400fccf3bcb396e0b2a178cab3ade08a4b636ee764e7489ca47951e5a3a864dec03d43758cb95536acad737bdc46e640"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MultiValueModule-1568d90b6149f6b85cc4465d250433b3400fccf3bcb396e0b2a178cab3ade08a4b636ee764e7489ca47951e5a3a864dec03d43758cb95536acad737bdc46e640"' :
                                        'id="xs-injectables-links-module-MultiValueModule-1568d90b6149f6b85cc4465d250433b3400fccf3bcb396e0b2a178cab3ade08a4b636ee764e7489ca47951e5a3a864dec03d43758cb95536acad737bdc46e640"' }>
                                        <li class="link">
                                            <a href="injectables/MultiValueService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultiValueService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ObjectHistoryModule.html" data-type="entity-link" >ObjectHistoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ObjectHistoryModule-24165143678f5994b355de4b2a446153f7a2136ce7c9e1240cd3d15d7a43c41ff5dcfdf86f37eccd2656c4970774913aae1c3a725afb00b5eb569ff261f7ee00"' : 'data-bs-target="#xs-components-links-module-ObjectHistoryModule-24165143678f5994b355de4b2a446153f7a2136ce7c9e1240cd3d15d7a43c41ff5dcfdf86f37eccd2656c4970774913aae1c3a725afb00b5eb569ff261f7ee00"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ObjectHistoryModule-24165143678f5994b355de4b2a446153f7a2136ce7c9e1240cd3d15d7a43c41ff5dcfdf86f37eccd2656c4970774913aae1c3a725afb00b5eb569ff261f7ee00"' :
                                            'id="xs-components-links-module-ObjectHistoryModule-24165143678f5994b355de4b2a446153f7a2136ce7c9e1240cd3d15d7a43c41ff5dcfdf86f37eccd2656c4970774913aae1c3a725afb00b5eb569ff261f7ee00"' }>
                                            <li class="link">
                                                <a href="components/ObjectHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjectHistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObjectHistoryGridviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjectHistoryGridviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObjectHistoryStateComparisonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjectHistoryStateComparisonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObjectHistoryStateOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjectHistoryStateOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimelineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimelineComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderedListModule.html" data-type="entity-link" >OrderedListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-OrderedListModule-a2cb080a71303098dcff98e50ffd28e3200d29eed4726538bbcbeb7202f47b095c246b40f8567e2f3e0a651d52ce50993c8d11af24f07247c1876c22f3d8d491"' : 'data-bs-target="#xs-components-links-module-OrderedListModule-a2cb080a71303098dcff98e50ffd28e3200d29eed4726538bbcbeb7202f47b095c246b40f8567e2f3e0a651d52ce50993c8d11af24f07247c1876c22f3d8d491"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderedListModule-a2cb080a71303098dcff98e50ffd28e3200d29eed4726538bbcbeb7202f47b095c246b40f8567e2f3e0a651d52ce50993c8d11af24f07247c1876c22f3d8d491"' :
                                            'id="xs-components-links-module-OrderedListModule-a2cb080a71303098dcff98e50ffd28e3200d29eed4726538bbcbeb7202f47b095c246b40f8567e2f3e0a651d52ce50993c8d11af24f07247c1876c22f3d8d491"' }>
                                            <li class="link">
                                                <a href="components/OrderedListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderedListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParameterizedTextModule.html" data-type="entity-link" >ParameterizedTextModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ParameterizedTextModule-d9a685ddffc6748d1ed181aaaa882775bb0225b92d68f319574ef7883258464509acf75e624879480e7ba61b89672f4a9c5da04128400f6e092ac6d2473d422d"' : 'data-bs-target="#xs-components-links-module-ParameterizedTextModule-d9a685ddffc6748d1ed181aaaa882775bb0225b92d68f319574ef7883258464509acf75e624879480e7ba61b89672f4a9c5da04128400f6e092ac6d2473d422d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParameterizedTextModule-d9a685ddffc6748d1ed181aaaa882775bb0225b92d68f319574ef7883258464509acf75e624879480e7ba61b89672f4a9c5da04128400f6e092ac6d2473d422d"' :
                                            'id="xs-components-links-module-ParameterizedTextModule-d9a685ddffc6748d1ed181aaaa882775bb0225b92d68f319574ef7883258464509acf75e624879480e7ba61b89672f4a9c5da04128400f6e092ac6d2473d422d"' }>
                                            <li class="link">
                                                <a href="components/ParameterizedTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParameterizedTextComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QbmModule.html" data-type="entity-link" >QbmModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-QbmModule-0619371e9afabc1f91ff8ec6cc15e787b2396afef766b081f3e449e983fbbd93ba021384ce003aa1c1b9cc586978fa604dad4247648d359bf59f4831fe9f3fe1"' : 'data-bs-target="#xs-components-links-module-QbmModule-0619371e9afabc1f91ff8ec6cc15e787b2396afef766b081f3e449e983fbbd93ba021384ce003aa1c1b9cc586978fa604dad4247648d359bf59f4831fe9f3fe1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QbmModule-0619371e9afabc1f91ff8ec6cc15e787b2396afef766b081f3e449e983fbbd93ba021384ce003aa1c1b9cc586978fa604dad4247648d359bf59f4831fe9f3fe1"' :
                                            'id="xs-components-links-module-QbmModule-0619371e9afabc1f91ff8ec6cc15e787b2396afef766b081f3e449e983fbbd93ba021384ce003aa1c1b9cc586978fa604dad4247648d359bf59f4831fe9f3fe1"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AutoCompleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutoCompleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CdrEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CdrEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConnectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConnectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExtComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExtComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterTileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconStackComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconStackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImxMatColumnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImxMatColumnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImxProgressbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImxProgressbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImxTreeTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImxTreeTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MasterDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" class="deprecated-name">MasterDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TempBillboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" class="deprecated-name">TempBillboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TranslationEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslationEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TwoFactorAuthenticationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TwoFactorAuthenticationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-QbmModule-0619371e9afabc1f91ff8ec6cc15e787b2396afef766b081f3e449e983fbbd93ba021384ce003aa1c1b9cc586978fa604dad4247648d359bf59f4831fe9f3fe1"' : 'data-bs-target="#xs-directives-links-module-QbmModule-0619371e9afabc1f91ff8ec6cc15e787b2396afef766b081f3e449e983fbbd93ba021384ce003aa1c1b9cc586978fa604dad4247648d359bf59f4831fe9f3fe1"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-QbmModule-0619371e9afabc1f91ff8ec6cc15e787b2396afef766b081f3e449e983fbbd93ba021384ce003aa1c1b9cc586978fa604dad4247648d359bf59f4831fe9f3fe1"' :
                                        'id="xs-directives-links-module-QbmModule-0619371e9afabc1f91ff8ec6cc15e787b2396afef766b081f3e449e983fbbd93ba021384ce003aa1c1b9cc586978fa604dad4247648d359bf59f4831fe9f3fe1"' }>
                                        <li class="link">
                                            <a href="directives/ExtDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExtDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-QbmModule-0619371e9afabc1f91ff8ec6cc15e787b2396afef766b081f3e449e983fbbd93ba021384ce003aa1c1b9cc586978fa604dad4247648d359bf59f4831fe9f3fe1"' : 'data-bs-target="#xs-injectables-links-module-QbmModule-0619371e9afabc1f91ff8ec6cc15e787b2396afef766b081f3e449e983fbbd93ba021384ce003aa1c1b9cc586978fa604dad4247648d359bf59f4831fe9f3fe1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-QbmModule-0619371e9afabc1f91ff8ec6cc15e787b2396afef766b081f3e449e983fbbd93ba021384ce003aa1c1b9cc586978fa604dad4247648d359bf59f4831fe9f3fe1"' :
                                        'id="xs-injectables-links-module-QbmModule-0619371e9afabc1f91ff8ec6cc15e787b2396afef766b081f3e449e983fbbd93ba021384ce003aa1c1b9cc586978fa604dad4247648d359bf59f4831fe9f3fe1"' }>
                                        <li class="link">
                                            <a href="injectables/AboutService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ApiClientAngularService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiClientAngularService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AppConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeviceStateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" class="deprecated-name">DeviceStateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ExtService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExtService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GlobalErrorHandler.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GlobalErrorHandler</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ImxTranslateLoader.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImxTranslateLoader</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ImxTranslationProviderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImxTranslationProviderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MetadataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetadataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OpsupportDbObjectService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpsupportDbObjectService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PluginLoaderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PluginLoaderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RegistryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SnackBarService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SnackBarService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TableImageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableImageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TwoFactorAuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TwoFactorAuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserActionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserActionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/imx_QBM_SearchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >imx_QBM_SearchService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/imx_SessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >imx_SessionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RouteGuardModule.html" data-type="entity-link" >RouteGuardModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SelectedElementsModule.html" data-type="entity-link" >SelectedElementsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SelectedElementsModule-87d35bd178eefeaa1061f6c8633e54ff471208d284ece25b16decdfdc175f58018ac19828d574c0a60ed94afc5e1f2ad9beb00697d0fe7c51b88cf8653e9bc53"' : 'data-bs-target="#xs-components-links-module-SelectedElementsModule-87d35bd178eefeaa1061f6c8633e54ff471208d284ece25b16decdfdc175f58018ac19828d574c0a60ed94afc5e1f2ad9beb00697d0fe7c51b88cf8653e9bc53"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectedElementsModule-87d35bd178eefeaa1061f6c8633e54ff471208d284ece25b16decdfdc175f58018ac19828d574c0a60ed94afc5e1f2ad9beb00697d0fe7c51b88cf8653e9bc53"' :
                                            'id="xs-components-links-module-SelectedElementsModule-87d35bd178eefeaa1061f6c8633e54ff471208d284ece25b16decdfdc175f58018ac19828d574c0a60ed94afc5e1f2ad9beb00697d0fe7c51b88cf8653e9bc53"' }>
                                            <li class="link">
                                                <a href="components/SelectedElementsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectedElementsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectedElementsDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectedElementsDialog</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelectModule.html" data-type="entity-link" >SelectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SelectModule-8b1c5098ad2c79219c4a33775b0a46b759edf6ab48bd1c4085efb95ef775d844f9d6ee067850817c9ab2e378ad6a62d1dbb5e5fe0956fd0e10b890aca106b06a"' : 'data-bs-target="#xs-components-links-module-SelectModule-8b1c5098ad2c79219c4a33775b0a46b759edf6ab48bd1c4085efb95ef775d844f9d6ee067850817c9ab2e378ad6a62d1dbb5e5fe0956fd0e10b890aca106b06a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectModule-8b1c5098ad2c79219c4a33775b0a46b759edf6ab48bd1c4085efb95ef775d844f9d6ee067850817c9ab2e378ad6a62d1dbb5e5fe0956fd0e10b890aca106b06a"' :
                                            'id="xs-components-links-module-SelectModule-8b1c5098ad2c79219c4a33775b0a46b759edf6ab48bd1c4085efb95ef775d844f9d6ee067850817c9ab2e378ad6a62d1dbb5e5fe0956fd0e10b890aca106b06a"' }>
                                            <li class="link">
                                                <a href="components/AutocompleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutocompleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SideNavigationViewModule.html" data-type="entity-link" >SideNavigationViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SideNavigationViewModule-eeb07dd96aaaca785f157c5a25dc95aa28b743f8b17f7b6baaa2e56a1995ffb5e328c5e72dc228d1086dd49d32ba376fc38bf03f1e032b0aaa931a1a9215e561"' : 'data-bs-target="#xs-components-links-module-SideNavigationViewModule-eeb07dd96aaaca785f157c5a25dc95aa28b743f8b17f7b6baaa2e56a1995ffb5e328c5e72dc228d1086dd49d32ba376fc38bf03f1e032b0aaa931a1a9215e561"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SideNavigationViewModule-eeb07dd96aaaca785f157c5a25dc95aa28b743f8b17f7b6baaa2e56a1995ffb5e328c5e72dc228d1086dd49d32ba376fc38bf03f1e032b0aaa931a1a9215e561"' :
                                            'id="xs-components-links-module-SideNavigationViewModule-eeb07dd96aaaca785f157c5a25dc95aa28b743f8b17f7b6baaa2e56a1995ffb5e328c5e72dc228d1086dd49d32ba376fc38bf03f1e032b0aaa931a1a9215e561"' }>
                                            <li class="link">
                                                <a href="components/SideNavigationViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideNavigationViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SidenavTreeModule.html" data-type="entity-link" >SidenavTreeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SidenavTreeModule-77dabb24c50e5f1cb5e87e6303c21098415e3fac4e918384ba2d6fc45c78a0cfabe6bfca901490a62ccb7550ef45fd8644dc7f5a0494500fe3ebf7630a0f5fe1"' : 'data-bs-target="#xs-components-links-module-SidenavTreeModule-77dabb24c50e5f1cb5e87e6303c21098415e3fac4e918384ba2d6fc45c78a0cfabe6bfca901490a62ccb7550ef45fd8644dc7f5a0494500fe3ebf7630a0f5fe1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidenavTreeModule-77dabb24c50e5f1cb5e87e6303c21098415e3fac4e918384ba2d6fc45c78a0cfabe6bfca901490a62ccb7550ef45fd8644dc7f5a0494500fe3ebf7630a0f5fe1"' :
                                            'id="xs-components-links-module-SidenavTreeModule-77dabb24c50e5f1cb5e87e6303c21098415e3fac4e918384ba2d6fc45c78a0cfabe6bfca901490a62ccb7550ef45fd8644dc7f5a0494500fe3ebf7630a0f5fe1"' }>
                                            <li class="link">
                                                <a href="components/SidenavTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavTreeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SqlWizardModule.html" data-type="entity-link" >SqlWizardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SqlWizardModule-d2e408fc7e6783ccf06c10d334cd7f2437ba6379426dcf681a1794f18985da96f57fbf6f8b6f03d3cb9493a59479875138cbde4d17958c59019b0cd9e4dd1a18"' : 'data-bs-target="#xs-components-links-module-SqlWizardModule-d2e408fc7e6783ccf06c10d334cd7f2437ba6379426dcf681a1794f18985da96f57fbf6f8b6f03d3cb9493a59479875138cbde4d17958c59019b0cd9e4dd1a18"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SqlWizardModule-d2e408fc7e6783ccf06c10d334cd7f2437ba6379426dcf681a1794f18985da96f57fbf6f8b6f03d3cb9493a59479875138cbde4d17958c59019b0cd9e4dd1a18"' :
                                            'id="xs-components-links-module-SqlWizardModule-d2e408fc7e6783ccf06c10d334cd7f2437ba6379426dcf681a1794f18985da96f57fbf6f8b6f03d3cb9493a59479875138cbde4d17958c59019b0cd9e4dd1a18"' }>
                                            <li class="link">
                                                <a href="components/ColumnSelectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColumnSelectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatePickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatePickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SimpleExpressionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SimpleExpressionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SingleExpressionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SingleExpressionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SingleValueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SingleValueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SqlWizardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SqlWizardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableSelectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableSelectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WhereClauseExpressionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WhereClauseExpressionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SqlWizardModule-d2e408fc7e6783ccf06c10d334cd7f2437ba6379426dcf681a1794f18985da96f57fbf6f8b6f03d3cb9493a59479875138cbde4d17958c59019b0cd9e4dd1a18"' : 'data-bs-target="#xs-injectables-links-module-SqlWizardModule-d2e408fc7e6783ccf06c10d334cd7f2437ba6379426dcf681a1794f18985da96f57fbf6f8b6f03d3cb9493a59479875138cbde4d17958c59019b0cd9e4dd1a18"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SqlWizardModule-d2e408fc7e6783ccf06c10d334cd7f2437ba6379426dcf681a1794f18985da96f57fbf6f8b6f03d3cb9493a59479875138cbde4d17958c59019b0cd9e4dd1a18"' :
                                        'id="xs-injectables-links-module-SqlWizardModule-d2e408fc7e6783ccf06c10d334cd7f2437ba6379426dcf681a1794f18985da96f57fbf6f8b6f03d3cb9493a59479875138cbde4d17958c59019b0cd9e4dd1a18"' }>
                                        <li class="link">
                                            <a href="injectables/SqlWizardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SqlWizardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StorageModule.html" data-type="entity-link" >StorageModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StorageModule-21d8efe6ef77cb09fa84422f2205cb16ba8d70a762702a3c654d8f295dc9db3aa33c2777422d16942f59d074010a304870335fab8429efc3ada2610140557b96"' : 'data-bs-target="#xs-injectables-links-module-StorageModule-21d8efe6ef77cb09fa84422f2205cb16ba8d70a762702a3c654d8f295dc9db3aa33c2777422d16942f59d074010a304870335fab8429efc3ada2610140557b96"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StorageModule-21d8efe6ef77cb09fa84422f2205cb16ba8d70a762702a3c654d8f295dc9db3aa33c2777422d16942f59d074010a304870335fab8429efc3ada2610140557b96"' :
                                        'id="xs-injectables-links-module-StorageModule-21d8efe6ef77cb09fa84422f2205cb16ba8d70a762702a3c654d8f295dc9db3aa33c2777422d16942f59d074010a304870335fab8429efc3ada2610140557b96"' }>
                                        <li class="link">
                                            <a href="injectables/StorageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StorageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TempBillboardModule.html" data-type="entity-link" class="deprecated-name">TempBillboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TempBillboardModule-1901f281c27bc8454b0dbd28603bd1cf931aac4cbc1ce77510496e122dee5cd8b4b6b509aef4d7e4b3638f63940a2acd0f7ad8b6b8f71736c31f66b4ee290f73"' : 'data-bs-target="#xs-components-links-module-TempBillboardModule-1901f281c27bc8454b0dbd28603bd1cf931aac4cbc1ce77510496e122dee5cd8b4b6b509aef4d7e4b3638f63940a2acd0f7ad8b6b8f71736c31f66b4ee290f73"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TempBillboardModule-1901f281c27bc8454b0dbd28603bd1cf931aac4cbc1ce77510496e122dee5cd8b4b6b509aef4d7e4b3638f63940a2acd0f7ad8b6b8f71736c31f66b4ee290f73"' :
                                            'id="xs-components-links-module-TempBillboardModule-1901f281c27bc8454b0dbd28603bd1cf931aac4cbc1ce77510496e122dee5cd8b4b6b509aef4d7e4b3638f63940a2acd0f7ad8b6b8f71736c31f66b4ee290f73"' }>
                                            <li class="link">
                                                <a href="components/TempBillboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" class="deprecated-name">TempBillboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TempBillboardModule-1901f281c27bc8454b0dbd28603bd1cf931aac4cbc1ce77510496e122dee5cd8b4b6b509aef4d7e4b3638f63940a2acd0f7ad8b6b8f71736c31f66b4ee290f73"' : 'data-bs-target="#xs-injectables-links-module-TempBillboardModule-1901f281c27bc8454b0dbd28603bd1cf931aac4cbc1ce77510496e122dee5cd8b4b6b509aef4d7e4b3638f63940a2acd0f7ad8b6b8f71736c31f66b4ee290f73"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TempBillboardModule-1901f281c27bc8454b0dbd28603bd1cf931aac4cbc1ce77510496e122dee5cd8b4b6b509aef4d7e4b3638f63940a2acd0f7ad8b6b8f71736c31f66b4ee290f73"' :
                                        'id="xs-injectables-links-module-TempBillboardModule-1901f281c27bc8454b0dbd28603bd1cf931aac4cbc1ce77510496e122dee5cd8b4b6b509aef4d7e4b3638f63940a2acd0f7ad8b6b8f71736c31f66b4ee290f73"' }>
                                        <li class="link">
                                            <a href="injectables/TempBillboardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" class="deprecated-name">TempBillboardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TileModule.html" data-type="entity-link" >TileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TileModule-2ba1bd8978f06571d593a6f7713f290d8b632e49137739b5384d1247da773bb30be8e7d96219d3ae89851f048aceea944930453b1e62d63039709934fab34043"' : 'data-bs-target="#xs-components-links-module-TileModule-2ba1bd8978f06571d593a6f7713f290d8b632e49137739b5384d1247da773bb30be8e7d96219d3ae89851f048aceea944930453b1e62d63039709934fab34043"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TileModule-2ba1bd8978f06571d593a6f7713f290d8b632e49137739b5384d1247da773bb30be8e7d96219d3ae89851f048aceea944930453b1e62d63039709934fab34043"' :
                                            'id="xs-components-links-module-TileModule-2ba1bd8978f06571d593a6f7713f290d8b632e49137739b5384d1247da773bb30be8e7d96219d3ae89851f048aceea944930453b1e62d63039709934fab34043"' }>
                                            <li class="link">
                                                <a href="components/ChartTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartTileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserMessageModule.html" data-type="entity-link" >UserMessageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserMessageModule-562040aec1ccb78f1540fa909d666fab6b120558d9cb903a2dd6ba7ab6ce8df9636ed0dc690545e3920d3e8939959e9a51c9788012876323f667c2a13b8e700b"' : 'data-bs-target="#xs-components-links-module-UserMessageModule-562040aec1ccb78f1540fa909d666fab6b120558d9cb903a2dd6ba7ab6ce8df9636ed0dc690545e3920d3e8939959e9a51c9788012876323f667c2a13b8e700b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserMessageModule-562040aec1ccb78f1540fa909d666fab6b120558d9cb903a2dd6ba7ab6ce8df9636ed0dc690545e3920d3e8939959e9a51c9788012876323f667c2a13b8e700b"' :
                                            'id="xs-components-links-module-UserMessageModule-562040aec1ccb78f1540fa909d666fab6b120558d9cb903a2dd6ba7ab6ce8df9636ed0dc690545e3920d3e8939959e9a51c9788012876323f667c2a13b8e700b"' }>
                                            <li class="link">
                                                <a href="components/UserMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserMessageModule-562040aec1ccb78f1540fa909d666fab6b120558d9cb903a2dd6ba7ab6ce8df9636ed0dc690545e3920d3e8939959e9a51c9788012876323f667c2a13b8e700b"' : 'data-bs-target="#xs-injectables-links-module-UserMessageModule-562040aec1ccb78f1540fa909d666fab6b120558d9cb903a2dd6ba7ab6ce8df9636ed0dc690545e3920d3e8939959e9a51c9788012876323f667c2a13b8e700b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserMessageModule-562040aec1ccb78f1540fa909d666fab6b120558d9cb903a2dd6ba7ab6ce8df9636ed0dc690545e3920d3e8939959e9a51c9788012876323f667c2a13b8e700b"' :
                                        'id="xs-injectables-links-module-UserMessageModule-562040aec1ccb78f1540fa909d666fab6b120558d9cb903a2dd6ba7ab6ce8df9636ed0dc690545e3920d3e8939959e9a51c9788012876323f667c2a13b8e700b"' }>
                                        <li class="link">
                                            <a href="injectables/UserMessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMessageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/EditorBase.html" data-type="entity-link" >EditorBase</a>
                            </li>
                            <li class="link">
                                <a href="components/IndexBarComponent.html" data-type="entity-link" >IndexBarComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ApiClientFetch.html" data-type="entity-link" >ApiClientFetch</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseCdr.html" data-type="entity-link" >BaseCdr</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseCdrEditorProvider.html" data-type="entity-link" >BaseCdrEditorProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseReadonlyCdr.html" data-type="entity-link" >BaseReadonlyCdr</a>
                            </li>
                            <li class="link">
                                <a href="classes/CandidateEntity.html" data-type="entity-link" >CandidateEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Column.html" data-type="entity-link" >Column</a>
                            </li>
                            <li class="link">
                                <a href="classes/Column-1.html" data-type="entity-link" >Column</a>
                            </li>
                            <li class="link">
                                <a href="classes/Column-2.html" data-type="entity-link" >Column</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnOptions.html" data-type="entity-link" >ColumnOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigSection.html" data-type="entity-link" >ConfigSection</a>
                            </li>
                            <li class="link">
                                <a href="classes/Connector.html" data-type="entity-link" >Connector</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConnectorProvider.html" data-type="entity-link" >ConnectorProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/Connectors.html" data-type="entity-link" >Connectors</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataSourceWrapper.html" data-type="entity-link" >DataSourceWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateParser.html" data-type="entity-link" >DateParser</a>
                            </li>
                            <li class="link">
                                <a href="classes/DbObjectInfo.html" data-type="entity-link" >DbObjectInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/DefaultCdrEditorProvider.html" data-type="entity-link" >DefaultCdrEditorProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/DynamicDataApiControls.html" data-type="entity-link" >DynamicDataApiControls</a>
                            </li>
                            <li class="link">
                                <a href="classes/DynamicDataSource.html" data-type="entity-link" >DynamicDataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/DynamicMethod.html" data-type="entity-link" >DynamicMethod</a>
                            </li>
                            <li class="link">
                                <a href="classes/DynFkContainer.html" data-type="entity-link" >DynFkContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntityColumnContainer.html" data-type="entity-link" >EntityColumnContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntityTreeDatabase.html" data-type="entity-link" >EntityTreeDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterTreeDatabase.html" data-type="entity-link" >FilterTreeDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/FkCdrEditorProvider.html" data-type="entity-link" >FkCdrEditorProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/FkContainer.html" data-type="entity-link" >FkContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/FkSelectionContainer.html" data-type="entity-link" >FkSelectionContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenericTypedEntity.html" data-type="entity-link" >GenericTypedEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/GroupMenuItem.html" data-type="entity-link" >GroupMenuItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Guid.html" data-type="entity-link" >Guid</a>
                            </li>
                            <li class="link">
                                <a href="classes/HierarchicalCandidate.html" data-type="entity-link" >HierarchicalCandidate</a>
                            </li>
                            <li class="link">
                                <a href="classes/HierarchicalFkDatabase.html" data-type="entity-link" >HierarchicalFkDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/HyperviewLayoutHierarchical.html" data-type="entity-link" >HyperviewLayoutHierarchical</a>
                            </li>
                            <li class="link">
                                <a href="classes/HyperviewLayoutHorizontal.html" data-type="entity-link" >HyperviewLayoutHorizontal</a>
                            </li>
                            <li class="link">
                                <a href="classes/HyperviewLayoutVertical.html" data-type="entity-link" >HyperviewLayoutVertical</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImxDataSource.html" data-type="entity-link" >ImxDataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImxExpandableItem.html" data-type="entity-link" >ImxExpandableItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImxMissingTranslationHandler.html" data-type="entity-link" >ImxMissingTranslationHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/LimitedValuesContainer.html" data-type="entity-link" >LimitedValuesContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/LineChartOptions.html" data-type="entity-link" >LineChartOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/NavigationMenuItem.html" data-type="entity-link" >NavigationMenuItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/ObjectHistoryApiService.html" data-type="entity-link" >ObjectHistoryApiService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Paginator.html" data-type="entity-link" >Paginator</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryParametersHandler.html" data-type="entity-link" >QueryParametersHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/RelatedApplicationMenuItem.html" data-type="entity-link" >RelatedApplicationMenuItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectDataSource.html" data-type="entity-link" >SelectDataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectionModelWrapper.html" data-type="entity-link" >SelectionModelWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/SeriesInformation.html" data-type="entity-link" >SeriesInformation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServerError.html" data-type="entity-link" >ServerError</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServerExceptionError.html" data-type="entity-link" >ServerExceptionError</a>
                            </li>
                            <li class="link">
                                <a href="classes/SessionState.html" data-type="entity-link" >SessionState</a>
                            </li>
                            <li class="link">
                                <a href="classes/SqlNodeView.html" data-type="entity-link" >SqlNodeView</a>
                            </li>
                            <li class="link">
                                <a href="classes/SqlViewBase.html" data-type="entity-link" >SqlViewBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/SqlViewRoot.html" data-type="entity-link" >SqlViewRoot</a>
                            </li>
                            <li class="link">
                                <a href="classes/SqlViewSettings.html" data-type="entity-link" >SqlViewSettings</a>
                            </li>
                            <li class="link">
                                <a href="classes/SqlWizardApiService.html" data-type="entity-link" >SqlWizardApiService</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatusBuffer.html" data-type="entity-link" >StatusBuffer</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatusInfo.html" data-type="entity-link" >StatusInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatusInfo2.html" data-type="entity-link" >StatusInfo2</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimezoneInfo.html" data-type="entity-link" >TimezoneInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/TreeDatabase.html" data-type="entity-link" >TreeDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/TreeDatasource.html" data-type="entity-link" >TreeDatasource</a>
                            </li>
                            <li class="link">
                                <a href="classes/TreeNode.html" data-type="entity-link" >TreeNode</a>
                            </li>
                            <li class="link">
                                <a href="classes/ViewMode.html" data-type="entity-link" >ViewMode</a>
                            </li>
                            <li class="link">
                                <a href="classes/XAxisInformation.html" data-type="entity-link" >XAxisInformation</a>
                            </li>
                            <li class="link">
                                <a href="classes/YAxisInformation.html" data-type="entity-link" >YAxisInformation</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AboutService.html" data-type="entity-link" >AboutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiClientAngularService.html" data-type="entity-link" >ApiClientAngularService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiClientService.html" data-type="entity-link" >ApiClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppConfigService.html" data-type="entity-link" >AppConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Base64ImageService.html" data-type="entity-link" >Base64ImageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BusyService.html" data-type="entity-link" >BusyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CacheService.html" data-type="entity-link" >CacheService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CaptchaService.html" data-type="entity-link" >CaptchaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CdrFactoryService.html" data-type="entity-link" >CdrFactoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CdrRegistryService.html" data-type="entity-link" >CdrRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClassloggerService.html" data-type="entity-link" >ClassloggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfirmationService.html" data-type="entity-link" >ConfirmationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomThemeService.html" data-type="entity-link" >CustomThemeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeviceStateService.html" data-type="entity-link" class="deprecated-name">DeviceStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocChapterService.html" data-type="entity-link" >DocChapterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DynamicMethodService.html" data-type="entity-link" >DynamicMethodService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ElementalUiConfigService.html" data-type="entity-link" >ElementalUiConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntityService.html" data-type="entity-link" >EntityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorService.html" data-type="entity-link" >ErrorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExportColumnsService.html" data-type="entity-link" >ExportColumnsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExtService.html" data-type="entity-link" >ExtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileSelectorService.html" data-type="entity-link" >FileSelectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilterTreeEntityWrapperService.html" data-type="entity-link" >FilterTreeEntityWrapperService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilterWizardService.html" data-type="entity-link" >FilterWizardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FkCandidateEntityBuilderService.html" data-type="entity-link" >FkCandidateEntityBuilderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalErrorHandler.html" data-type="entity-link" >GlobalErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HelpContextualService.html" data-type="entity-link" >HelpContextualService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IeWarningService.html" data-type="entity-link" >IeWarningService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/imx_QBM_SearchService.html" data-type="entity-link" >imx_QBM_SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/imx_SessionService.html" data-type="entity-link" >imx_SessionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImxTranslateLoader.html" data-type="entity-link" >ImxTranslateLoader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImxTranslationProviderService.html" data-type="entity-link" >ImxTranslationProviderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobQueueOverviewService.html" data-type="entity-link" >JobQueueOverviewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LdsReplacePipe.html" data-type="entity-link" >LdsReplacePipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalizedDatePipe.html" data-type="entity-link" >LocalizedDatePipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MastHeadService.html" data-type="entity-link" >MastHeadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link" >MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetadataService.html" data-type="entity-link" >MetadataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MethodDescriptorService.html" data-type="entity-link" >MethodDescriptorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModelCssService.html" data-type="entity-link" >ModelCssService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MultiValueService.html" data-type="entity-link" >MultiValueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationService.html" data-type="entity-link" class="deprecated-name">NavigationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NumberValidatorService.html" data-type="entity-link" >NumberValidatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OAuthService.html" data-type="entity-link" >OAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ObjectHistoryService.html" data-type="entity-link" >ObjectHistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OpsupportDbObjectService.html" data-type="entity-link" >OpsupportDbObjectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParameterizedTextService.html" data-type="entity-link" >ParameterizedTextService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PluginLoaderService.html" data-type="entity-link" >PluginLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QbmSqlWizardService.html" data-type="entity-link" >QbmSqlWizardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RedirectService.html" data-type="entity-link" >RedirectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegistryService.html" data-type="entity-link" >RegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsService.html" data-type="entity-link" >SettingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShortDatePipe.html" data-type="entity-link" >ShortDatePipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SnackBarService.html" data-type="entity-link" >SnackBarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SplashService.html" data-type="entity-link" >SplashService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SqlWizardService.html" data-type="entity-link" >SqlWizardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatusService.html" data-type="entity-link" >StatusService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link" >StorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SystemInfoService.html" data-type="entity-link" >SystemInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableImageService.html" data-type="entity-link" >TableImageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TempBillboardService.html" data-type="entity-link" class="deprecated-name">TempBillboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TwoFactorAuthenticationService.html" data-type="entity-link" >TwoFactorAuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypedEntityBuilderService.html" data-type="entity-link" >TypedEntityBuilderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UrlValidatorService.html" data-type="entity-link" >UrlValidatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserActionService.html" data-type="entity-link" >UserActionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserMessageService.html" data-type="entity-link" >UserMessageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthenticationGuardService.html" data-type="entity-link" >AuthenticationGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/RouteGuardService.html" data-type="entity-link" >RouteGuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AdminComponent.html" data-type="entity-link" >AdminComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppConfig.html" data-type="entity-link" >AppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthConfigProvider.html" data-type="entity-link" >AuthConfigProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthPropDataProvider.html" data-type="entity-link" >AuthPropDataProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BulkItem.html" data-type="entity-link" >BulkItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BulkItemIcon.html" data-type="entity-link" >BulkItemIcon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Busy.html" data-type="entity-link" >Busy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CacheOptions.html" data-type="entity-link" >CacheOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Candidate.html" data-type="entity-link" >Candidate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CdrEditor.html" data-type="entity-link" >CdrEditor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CdrEditorProvider.html" data-type="entity-link" >CdrEditorProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CdrEditorProviderRegistry.html" data-type="entity-link" >CdrEditorProviderRegistry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CdrSidesheetConfig.html" data-type="entity-link" >CdrSidesheetConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClientPropertyForTableColumns.html" data-type="entity-link" >ClientPropertyForTableColumns</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColumnDependentReference.html" data-type="entity-link" >ColumnDependentReference</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ComponentCanDeactivate.html" data-type="entity-link" >ComponentCanDeactivate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConnectionSessionInfoData.html" data-type="entity-link" >ConnectionSessionInfoData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Coord.html" data-type="entity-link" >Coord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomAuthFlow.html" data-type="entity-link" >CustomAuthFlow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataModelFilterOptionExtended.html" data-type="entity-link" >DataModelFilterOptionExtended</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataModelWrapper.html" data-type="entity-link" >DataModelWrapper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataNavigationParameters.html" data-type="entity-link" >DataNavigationParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSourceItemStatus.html" data-type="entity-link" >DataSourceItemStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSourceToolbarExportMethod.html" data-type="entity-link" >DataSourceToolbarExportMethod</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSourceToolbarFilter.html" data-type="entity-link" >DataSourceToolbarFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSourceToolBarGroup.html" data-type="entity-link" >DataSourceToolBarGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSourceToolbarGroupData.html" data-type="entity-link" >DataSourceToolbarGroupData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSourceToolBarGroupingCategory.html" data-type="entity-link" >DataSourceToolBarGroupingCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSourceToolbarMenuItem.html" data-type="entity-link" >DataSourceToolbarMenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSourceToolbarSelectedFilter.html" data-type="entity-link" >DataSourceToolbarSelectedFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSourceToolbarSettings.html" data-type="entity-link" >DataSourceToolbarSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSourceToolbarViewConfig.html" data-type="entity-link" >DataSourceToolbarViewConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataTableGroupedData.html" data-type="entity-link" >DataTableGroupedData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataTileBadge.html" data-type="entity-link" >DataTileBadge</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataTileMenuItem.html" data-type="entity-link" >DataTileMenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DateDiffOption.html" data-type="entity-link" >DateDiffOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocChapter.html" data-type="entity-link" >DocChapter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocDocument.html" data-type="entity-link" >DocDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DSTExportState.html" data-type="entity-link" >DSTExportState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DSTViewConfig.html" data-type="entity-link" >DSTViewConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DynamicCollectionLoadParameters.html" data-type="entity-link" >DynamicCollectionLoadParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DynamicMethodTypeWrapper.html" data-type="entity-link" >DynamicMethodTypeWrapper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ElementalUiConfig.html" data-type="entity-link" >ElementalUiConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitySelect.html" data-type="entity-link" >EntitySelect</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExtendedObjectHistoryEvent.html" data-type="entity-link" >ExtendedObjectHistoryEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilteredColumnOption.html" data-type="entity-link" >FilteredColumnOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterFormState.html" data-type="entity-link" >FilterFormState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterTreeParameter.html" data-type="entity-link" >FilterTreeParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterWizardSidesheetData.html" data-type="entity-link" >FilterWizardSidesheetData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FkCandidatesData.html" data-type="entity-link" >FkCandidatesData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ForeignKeyPickerData.html" data-type="entity-link" >ForeignKeyPickerData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ForeignKeySelection.html" data-type="entity-link" >ForeignKeySelection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupInfoLoadParameters.html" data-type="entity-link" >GroupInfoLoadParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupPaginatorInformation.html" data-type="entity-link" >GroupPaginatorInformation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HvCell.html" data-type="entity-link" >HvCell</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HvElement.html" data-type="entity-link" >HvElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HvSettings.html" data-type="entity-link" >HvSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HyperViewLayout.html" data-type="entity-link" >HyperViewLayout</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IColumn.html" data-type="entity-link" >IColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IColumn-1.html" data-type="entity-link" >IColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IColumn-2.html" data-type="entity-link" >IColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConnectorProvider.html" data-type="entity-link" >IConnectorProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IExtension.html" data-type="entity-link" >IExtension</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/imx_ISearchService.html" data-type="entity-link" >imx_ISearchService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InteractiveParameter.html" data-type="entity-link" >InteractiveParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISessionState.html" data-type="entity-link" >ISessionState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISqlNodeView.html" data-type="entity-link" >ISqlNodeView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JobQueueDataSlice.html" data-type="entity-link" >JobQueueDataSlice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JobQueueGroups.html" data-type="entity-link" >JobQueueGroups</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KeyData.html" data-type="entity-link" >KeyData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LayoutResult.html" data-type="entity-link" >LayoutResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MastHeadMenu.html" data-type="entity-link" >MastHeadMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MastHeadMenuItem.html" data-type="entity-link" >MastHeadMenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessageParameter.html" data-type="entity-link" >MessageParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavigationCommandsMenuItem.html" data-type="entity-link" >NavigationCommandsMenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NodeCheckedChange.html" data-type="entity-link" >NodeCheckedChange</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NumberError.html" data-type="entity-link" >NumberError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ObjectHistoryParameters.html" data-type="entity-link" >ObjectHistoryParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OpsupportDbObjectParameters.html" data-type="entity-link" >OpsupportDbObjectParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParameterizedText.html" data-type="entity-link" >ParameterizedText</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParameterReplacement.html" data-type="entity-link" >ParameterReplacement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RelatedApplication.html" data-type="entity-link" >RelatedApplication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouteConfig.html" data-type="entity-link" >RouteConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RowHighlight.html" data-type="entity-link" >RowHighlight</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchResultAction.html" data-type="entity-link" >SearchResultAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectContentProvider.html" data-type="entity-link" >SelectContentProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectedElementsDialogParameter.html" data-type="entity-link" >SelectedElementsDialogParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/selectedFiltersParams.html" data-type="entity-link" >selectedFiltersParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShapeClickArgs.html" data-type="entity-link" >ShapeClickArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShownClientPropertiesArg.html" data-type="entity-link" >ShownClientPropertiesArg</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SideNavigationComponent.html" data-type="entity-link" >SideNavigationComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SideNavigationExtension.html" data-type="entity-link" >SideNavigationExtension</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SideNavigationItem.html" data-type="entity-link" >SideNavigationItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Size.html" data-type="entity-link" >Size</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusSession.html" data-type="entity-link" >StatusSession</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SystemUsers.html" data-type="entity-link" >SystemUsers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TabData.html" data-type="entity-link" >TabData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TabItem.html" data-type="entity-link" >TabItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TextContainer.html" data-type="entity-link" >TextContainer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TextToken.html" data-type="entity-link" >TextToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimelineDateTimeFilter.html" data-type="entity-link" >TimelineDateTimeFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimelineEventsGroupedByDate.html" data-type="entity-link" >TimelineEventsGroupedByDate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TranslationConfiguration.html" data-type="entity-link" >TranslationConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeNodeInfo.html" data-type="entity-link" >TreeNodeInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeNodeResultParameter.html" data-type="entity-link" >TreeNodeResultParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypedEntityCandidateSidesheetParameter.html" data-type="entity-link" >TypedEntityCandidateSidesheetParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypedEntityFkData.html" data-type="entity-link" >TypedEntityFkData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypedEntitySelectionData.html" data-type="entity-link" >TypedEntitySelectionData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypedEntityTableFilter.html" data-type="entity-link" >TypedEntityTableFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypedEntityTableFilter-1.html" data-type="entity-link" >TypedEntityTableFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValueHasChangedEventArg.html" data-type="entity-link" >ValueHasChangedEventArg</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValueWrapper.html" data-type="entity-link" >ValueWrapper</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});